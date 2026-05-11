(function () {
    const canvas = document.getElementById('lidar-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 10, 45);
    camera.lookAt(0, 0, 0);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    document.addEventListener('mousemove', e => {
        mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
        mouse.ty = -(e.clientY / window.innerHeight - 0.5) * 2;
    });

    // ── TERRAIN MATH ──────────────────────────────────────────
    function terrain(x, z) {
        return (
            Math.sin(x * 0.22) * 2.8 +
            Math.sin(z * 0.16 + 0.5) * 2.2 +
            Math.sin(x * 0.11 + z * 0.08) * 1.8 +
            Math.sin(x * 0.38 + z * 0.25) * 0.9
        );
    }

    function elevColor(norm, col, i3) {
        if (norm > 0.85) {
            col[i3]=0.60; col[i3+1]=0.55; col[i3+2]=0.30; 
        } else if (norm > 0.62) {
            const t = (norm-0.62)/0.23;
            col[i3]=0.10*t+0.05*(1-t); col[i3+1]=0.72*t+0.55*(1-t); col[i3+2]=0.50*t+0.40*(1-t);
        } else if (norm > 0.38) {
            const t = (norm-0.38)/0.24;
            col[i3]=0.08*t+0.05*(1-t); col[i3+1]=0.45*t+0.32*(1-t); col[i3+2]=0.45*t+0.38*(1-t);
        } else {
            col[i3]=0.04; col[i3+1]=0.08; col[i3+2]=0.18; 
        }
    }

    // ── TERRAIN & TREES GENERATION ────────────────────────────
    const COUNT = 10000, TREES = 45, PTS_PER_TREE = 150;
    const TOTAL = COUNT + (TREES * PTS_PER_TREE);
    const allPos = new Float32Array(TOTAL * 3);
    const allCol = new Float32Array(TOTAL * 3);

    for (let i = 0; i < COUNT; i++) {
        const i3 = i * 3;
        const x = (Math.random() - 0.5) * 100;
        const z = (Math.random() - 0.5) * 100;
        const elev = terrain(x, z);
        allPos[i3] = x; allPos[i3+1] = elev - 10; allPos[i3+2] = z;
        elevColor(Math.min(Math.max((elev + 6) / 12, 0), 1), allCol, i3);
    }

    let offset = COUNT;
    for (let t = 0; t < TREES; t++) {
        const tx = (Math.random() - 0.5) * 85;
        const tz = (Math.random() - 0.5) * 85;
        const tGround = terrain(tx, tz) - 10;
        const tHeight = 4 + Math.random() * 6;
        const tRadius = 1.0 + Math.random() * 1.8;

        for (let p = 0; p < PTS_PER_TREE; p++) {
            const idx = (offset + t * PTS_PER_TREE + p) * 3;
            const hf = Math.pow(Math.random(), 0.55);
            const py = tGround + tHeight * hf;
            const cr = tRadius * (1 - hf * 0.65);
            const ang = Math.random() * Math.PI * 2;
            const r = Math.random() * cr;
            allPos[idx] = tx + Math.cos(ang) * r;
            allPos[idx+1] = py;
            allPos[idx+2] = tz + Math.sin(ang) * r;
            
            if (hf > 0.75) {
                allCol[idx]=0.38; allCol[idx+1]=0.42; allCol[idx+2]=0.12;
            } else if (hf > 0.45) {
                allCol[idx]=0.06; allCol[idx+1]=0.32; allCol[idx+2]=0.22;
            } else {
                allCol[idx]=0.04; allCol[idx+1]=0.18; allCol[idx+2]=0.20;
            }
        }
    }

    const combinedGeo = new THREE.BufferGeometry();
    combinedGeo.setAttribute('position', new THREE.BufferAttribute(allPos, 3));
    combinedGeo.setAttribute('color', new THREE.BufferAttribute(allCol, 3));
    const terrainMat = new THREE.PointsMaterial({
        size: 0.22, vertexColors: true, transparent: true, opacity: 0.8, sizeAttenuation: true
    });
    const pointsObj = new THREE.Points(combinedGeo, terrainMat);
    scene.add(pointsObj);

// ── 3D DRONE & SMOOTH CONE BEAM ───────────────────────────
const droneGroup = new THREE.Group();

// Materials
const bodyMat = new THREE.MeshStandardMaterial({ color: 0x2dd4a0, metalness: 0.7, roughness: 0.2 });
const rotorMat = new THREE.MeshBasicMaterial({ color: 0x555555 });

// 3D Drone Body (Central Hub)
const droneBody = new THREE.Mesh(new THREE.BoxGeometry(1, 0.4, 1), bodyMat);
droneGroup.add(droneBody);

// Drone Arms (X-shape)
const armGeom = new THREE.BoxGeometry(3, 0.1, 0.1);
const arm1 = new THREE.Mesh(armGeom, bodyMat);
const arm2 = new THREE.Mesh(armGeom, bodyMat);
arm1.rotation.y = Math.PI / 4;
arm2.rotation.y = -Math.PI / 4;
droneGroup.add(arm1, arm2);

// Rotors (Small cylinders at the end of arms)
const rotorGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.05, 16);
const rotorPositions = [[1, 0.2, 1], [-1, 0.2, 1], [1, 0.2, -1], [-1, 0.2, -1]];
rotorPositions.forEach(pos => {
    const rotor = new THREE.Mesh(rotorGeom, rotorMat);
    rotor.position.set(pos[0], pos[1], pos[2]);
    droneGroup.add(rotor);
});

// ── DYNAMIC SCAN CURTAIN (Replaces Smooth Circular Scanner Beam) ──
const SCAN_WIDTH = 30;
const SCAN_SAMPLES = 40; 
const curtainGeo = new THREE.BufferGeometry();

// Vertices: 1 top point (drone) + SCAN_SAMPLES ground points
const curtainPos = new Float32Array((SCAN_SAMPLES + 1) * 3);
const curtainIndices = [];

// Create triangles connecting drone (index 0) to ground points
for (let i = 1; i < SCAN_SAMPLES; i++) {
    curtainIndices.push(0, i, i + 1);
}

curtainGeo.setIndex(curtainIndices);
curtainGeo.setAttribute('position', new THREE.BufferAttribute(curtainPos, 3));

const scanCurtain = new THREE.Mesh(curtainGeo, new THREE.MeshBasicMaterial({
    color: 0x2dd4a0,
    transparent: true,
    opacity: 0.1, // Low opacity as requested
    side: THREE.DoubleSide,
    depthWrite: false,
    blending: THREE.AdditiveBlending // Makes it glow like light
}));

scene.add(scanCurtain);

// We keep the droneGroup for the 3D model, but remove the old scannerBeam mesh
// droneGroup.add(scannerBeam); <-- DELETE OR COMMENT OUT THIS LINE

// Add light so the 3D drone body is visible
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const droneLight = new THREE.PointLight(0x2dd4a0, 15, 30);
droneLight.position.set(0, -0.5, 0);
droneGroup.add(droneLight);
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const PSEGS = 120;
    const pv = new Float32Array(PSEGS * 3);
    const pulseGeo = new THREE.BufferGeometry();
    const pulseMat = new THREE.LineBasicMaterial({ color: 0x2dd4a0, transparent: true, opacity: 0.5 });
    const pulseLine = new THREE.Line(pulseGeo, pulseMat);
    scene.add(pulseLine);

    function updatePulse(prog, time) {
        const z = -50 + prog * 100;
        const droneX = Math.sin(time * 0.5) * 20; 
        for(let i=0; i<PSEGS; i++){
            const x = droneX - 20 + (40 / PSEGS) * i;
            pv[i*3] = x; 
            pv[i*3+1] = terrain(x, z) - 10 + 0.15; 
            pv[i*3+2] = z;
        }
        pulseGeo.setAttribute('position', new THREE.BufferAttribute(pv, 3));
    }

    const sv = new Float32Array(800 * 3);
    for(let i=0; i<800; i++){
        sv[i*3]=(Math.random()-0.5)*300; 
        sv[i*3+1]=Math.random()*70+10; 
        sv[i*3+2]=(Math.random()-0.5)*300;
    }
    const sGeo = new THREE.BufferGeometry();
    sGeo.setAttribute('position', new THREE.BufferAttribute(sv, 3));
    const starMat = new THREE.PointsMaterial({
        color: 0xffffff, size: 0.15, transparent: true, opacity: 0.4, sizeAttenuation: true
    });
    scene.add(new THREE.Points(sGeo, starMat));

    const root = new THREE.Group();
    // Move everything currently in the scene into root
    while(scene.children.length > 0) {
        root.add(scene.children[0]);
    }
    // Explicitly add droneGroup and scanCurtain to root so they stay visible
    root.add(droneGroup);
    root.add(scanCurtain);
    scene.add(root);

    let t = 0, pulseP = 0;
    function animate() {
        requestAnimationFrame(animate);
        t += 0.004;

        mouse.x += (mouse.tx - mouse.x) * 0.03;
        mouse.y += (mouse.ty - mouse.y) * 0.03;
        root.rotation.y = t * 0.02 + mouse.x * 0.08;
        root.rotation.x = -0.15 + mouse.y * 0.05;
        root.position.y = Math.sin(t * 0.3) * 0.4;

        pulseP = (pulseP + 0.0025) % 1;
        updatePulse(pulseP, t);
        
        // 1. Calculate Current Drone Position
        const dZ = -50 + pulseP * 100;
        const dX = Math.sin(t * 0.5) * 20;
        const dY = terrain(dX, dZ) - 10 + 14;
        
        // 2. Move the 3D Drone Model
        droneGroup.position.set(dX, dY, dZ);
        droneGroup.rotation.y = Math.sin(t) * 0.2;

        // 3. UPDATE THE BEAM TO FOLLOW TERRAIN
        const curtainVertices = [];
        // Top vertex: at the drone
        curtainVertices.push(dX, dY, dZ);

        // Ground vertices: sampled across a horizontal line
        for (let i = 0; i < SCAN_SAMPLES; i++) {
            const xOffset = dX - (SCAN_WIDTH / 2) + (SCAN_WIDTH / (SCAN_SAMPLES - 1)) * i;
            const yGround = terrain(xOffset, dZ) - 10 + 0.1; // Hits the ground exactly
            curtainVertices.push(xOffset, yGround, dZ);
        }
        curtainGeo.setAttribute('position', new THREE.Float32BufferAttribute(curtainVertices, 3));

        // 4. Update Opacities
        pulseMat.opacity = Math.sin(pulseP * Math.PI) * 0.6;
        terrainMat.opacity = 0.85 + Math.sin(t * 0.4) * 0.1;
        scanCurtain.material.opacity = 0.08 + Math.sin(t * 4) * 0.04; // Subtle flickering

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
})();