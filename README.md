# Dr. Md Farhadur Rahman — Academic Portfolio Website

**Live Site:** [https://farhadur-rahman.github.io](https://farhadur-rahman.github.io)  
**Repository:** [github.com/Farhadur-Rahman/farhadur-rahman.github.io](https://github.com/Farhadur-Rahman/farhadur-rahman.github.io)

---

## About This Site

This is the personal academic portfolio website of **Dr. Md Farhadur Rahman**, Assistant Professor, Department of Remote Sensing and GIS, Gazipur Agricultural University (GAU), Bangladesh. The site showcases his research, publications, projects, and professional profile.

Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools. Everything runs directly in the browser.

---

## Live URL

```
https://farhadur-rahman.github.io
```

---

## File Structure

```
farhadur-rahman.github.io/
│
├── index.html                        ← Main page (all sections)
│
├── css/
│   └── style.css                     ← All design and layout styles
│
├── js/
│   ├── lidar.js                      ← Animated LiDAR background
│   ├── sidebar.js                    ← Sidebar open/close behaviour
│   └── main.js                       ← Publications list and filter
│
├── pages/
│   ├── specialization.html           ← UAV platforms and skills page
│   ├── project-liana-lidar.html      ← Liana & LiDAR project details
│   ├── project-smart-agriculture.html← SMART Agriculture project
│   ├── project-surf-it.html          ← SURF-IT project details
│   └── project-espar.html            ← ESPAR project details
│
├── images/                           ← ALL photos go in this folder
│   ├── profile.jpg                   ← Your profile photo
│   ├── liana-hero.jpg                ← Liana project hero image
│   ├── uav-air3s.jpg                 ← DJI Air 3S photo
│   ├── uav-inspire2.jpg              ← DJI Inspire 2 photo
│   ├── uav-m300.jpg                  ← Matrice 300 RTK photo
│   └── uav-m350.jpg                  ← Matrice 350 RTK photo
│
└── README.md                         ← This file
```

---

## How to Edit the Site

You can edit everything directly on GitHub — no software needed.

### Step 1 — Go to the repository
Visit [github.com/Farhadur-Rahman/farhadur-rahman.github.io](https://github.com/Farhadur-Rahman/farhadur-rahman.github.io) and log in.

### Step 2 — Open any file
Click the file you want to edit (e.g. `index.html`).

### Step 3 — Edit
Click the **pencil icon ✏️** at the top right of the file.

### Step 4 — Save
Scroll down → click **"Commit changes"** → click **"Commit changes"** again.

The site updates automatically within **1–2 minutes**.

---

## Common Editing Tasks

### ✏️ Change your name, title, or bio

1. Open `index.html`
2. Press **Ctrl+F** in your browser to search for the text you want to change
3. Edit it → Commit

---

### 📸 Add or replace a photo

1. Go to the repository on GitHub
2. Click the `images/` folder
3. Click **"Add file"** → **"Upload files"**
4. Upload your photo
5. **Important:** Name it exactly as expected (see table below)
6. Click **"Commit changes"**

| Photo | File name |
|-------|-----------|
| Your profile photo | `profile.jpg` |
| Liana project main image | `liana-hero.jpg` |
| DJI Air 3S | `uav-air3s.jpg` |
| DJI Inspire 2 | `uav-inspire2.jpg` |
| Matrice 300 RTK | `uav-m300.jpg` |
| Matrice 350 RTK | `uav-m350.jpg` |

> **Tip:** If your photo is a `.png` file, you can either rename it to `.jpg` or update the `src` in the HTML to match the correct extension.

---

### 📄 Add a new publication

1. Open `js/main.js`
2. Find the line that says `const PUBS = [`
3. Add a new entry at the top (for newest first):

```javascript
{
  year: 2026,
  authors: "Your Author, A., Rahman, M. F., et al.",
  title: "Title of your new paper here",
  journal: "Journal Name",
  doi: "https://doi.org/10.xxxx/xxxxxx",
  tags: ["Tag1", "Tag2", "Bangladesh"]
},
```

4. Commit — the publication appears on the site automatically.

> **Tags tip:** Use tags like `"LiDAR"`, `"UAV"`, `"Bangladesh"` so the filter buttons work correctly.

---

### 🗂️ Add a new project page

1. Go to the `pages/` folder on GitHub
2. Open any existing project file (e.g. `project-liana-lidar.html`)
3. Click the **pencil icon** → Select all → Copy
4. Go back to `pages/` folder → Click **"Add file"** → **"Create new file"**
5. Name it: `project-yourproject.html`
6. Paste the copied content and edit the text
7. Commit

Then add a link to it in `index.html` inside the sidebar section:
```html
<li><a href="pages/project-yourproject.html">Your Project Name</a></li>
```

---

### 🎨 Change colors

All colors are defined at the top of `css/style.css` inside `:root { }`:

```css
:root {
  --gold:    #c9a84c;   /* gold accent color */
  --emerald: #2dd4a0;   /* green accent color */
  --navy:    #080c18;   /* dark background */
}
```

Change any value and commit — the whole site updates.

---

### 📞 Update contact information

1. Open `index.html`
2. Search for `farhad.rsgis@gau.edu.bd` to find the contact section
3. Edit email, phone, or location
4. Commit

---

## Adding Collaborators

To give someone else access to edit this repository:

1. Go to **Settings → Collaborators**
2. Click **"Invite collaborators"**
3. Enter their GitHub username
4. They accept the email invitation
5. They now have full edit access

---

## How the Site Deploys

Every time you commit a change to GitHub, the site automatically rebuilds and goes live within **1–2 minutes**. No manual steps needed.

This is handled by **GitHub Pages** (Settings → Pages → Deploy from branch: main).

---

## Technical Details

| Item | Detail |
|------|--------|
| Framework | None — plain HTML/CSS/JS |
| 3D Background | Three.js r128 (LiDAR point cloud) |
| Fonts | Cormorant Garamond, DM Sans, Space Mono (Google Fonts) |
| Hosting | GitHub Pages (free) |
| Build step | None required |

---

## Need Help?

Contact the site developer:

**Sudip Sen**  
GitHub: [github.com/Sudip-Sen](https://github.com/Sudip-Sen)

---

*Last updated: May 2026*
