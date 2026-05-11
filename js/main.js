/* ============================================================
   MAIN.JS  —  Publications filter + fade-up animations
   ============================================================ */

// ── FADE-UP OBSERVER ──────────────────────────────────────────
(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
})();

// ── PUBLICATIONS DATA ─────────────────────────────────────────
const PUBS = [
  {
    year: 2026,
    authors: "Ahammed, S., Fahim, M. S. I., Amin, M. S., Bhuiyan, M. S., Rahman, M. F., et al.",
    title: "Disturbance effects on plant functional traits, beta diversity, and soil properties in a tropical forest of Bangladesh",
    journal: "Small-scale Forestry",
    doi: "https://doi.org/10.1007/s11842-026-09619-8",
    tags: ["Disturbance", "Tropical Forest", "Bangladesh"]
  },
  {
    year: 2025,
    authors: "Ahmmed, T., Abdullah, H. M., Rahman, M. F., et al.",
    title: "Unmanned aerial vehicle in optimizing nitrogen fertilizer use and estimating yield of okra varieties",
    journal: "Smart Agricultural Technology",
    doi: "https://doi.org/10.1016/j.atech.2025.101522",
    tags: ["UAV", "Smart Agriculture", "Yield Estimation"]
  },
  {
    year: 2025,
    authors: "Htoo, K. K., Onishi, M., Rahman, M. F., et al.",
    title: "Development of crown-based allometric equations for estimating stem diameter and above-ground biomass using UAV-LiDAR in 23 species-rich natural forests of Japan",
    journal: "Journal of Forest Research",
    doi: "https://doi.org/10.1080/13416979.2025.2576384",
    tags: ["UAV-LiDAR", "Allometry", "Biomass", "Japan"]
  },
  {
    year: 2025,
    authors: "Islam, M. R., Abdullah, H. M., Rahman, M. F., et al.",
    title: "Mitigation of water-deficit stress in soybean by seaweed extract: The integrated approaches of UAV-based remote sensing and a field trial",
    journal: "Drones",
    doi: "https://doi.org/10.3390/drones9070487",
    tags: ["UAV", "Remote Sensing", "Soybean", "Stress"]
  },
  {
    year: 2025,
    authors: "Kamei, H., Matsushita, M., Yasuda, Y., Rahman, M. F., Onoda, Y., et al.",
    title: "Analyzing growth variation in 401 genotypes of mature Cryptomeria japonica: The role of crown structure and space use efficiency",
    journal: "Forest Ecology and Management",
    doi: "https://doi.org/10.1016/j.foreco.2025.122986",
    tags: ["Crown Structure", "Cryptomeria", "Genotype"]
  },
  {
    year: 2025,
    authors: "Milu, M. K. H., et al., Rahman, M. F., Abdullah, H. M.",
    title: "Revolutionizing environmental monitoring with cutting-edge imaging technologies",
    journal: "Remote Sensing for Environmental Monitoring (Book Chapter, Springer Nature)",
    doi: "https://doi.org/10.1007/978-981-96-5546-5_4",
    tags: ["Imaging Technology", "Environmental Monitoring", "Book Chapter"]
  },
  {
    year: 2025,
    authors: "Tuhin, A. K., Abdullah, H. M., Rahman, M. F., et al.",
    title: "Heat and drought-induced yield loss quantification of wheat: Predicted from UAV-based phenological parameters",
    journal: "Smart Agricultural Technology",
    doi: "https://doi.org/10.1016/j.atech.2025.101487",
    tags: ["UAV", "Wheat", "Climate Stress", "Yield"]
  },
  {
    year: 2024,
    authors: "Htoo, K. K., Onishi, M., Rahman, M. F., Kitajima, K., Onoda, Y.",
    title: "The space occupation and use by tree crowns explain variations of individual growth rates in an old-growth temperate forest in Japan",
    journal: "Forest Ecology and Management",
    doi: "https://doi.org/10.1016/j.foreco.2024.122185",
    tags: ["Crown Space", "Growth Rate", "Temperate Forest"]
  },
  {
    year: 2024,
    authors: "Rahman, M. H., Kitajima, K., Mitani, Y., Rahman, M. F.",
    title: "Geographical variations in woodfuel supply and trade in northeastern Bangladesh",
    journal: "Renewable Energy",
    doi: "https://doi.org/10.1016/j.renene.2024.120004",
    tags: ["Woodfuel", "Bangladesh", "Energy"]
  },
  {
    year: 2021,
    authors: "Rahman, M. F., Onoda, Y., Kitajima, K.",
    title: "Forest canopy height variation in relation to topography and forest types in central Japan with LiDAR",
    journal: "Forest Ecology and Management",
    doi: "https://doi.org/10.1016/j.foreco.2021.119792",
    tags: ["LiDAR", "Canopy Height", "Topography", "Japan"]
  },
  {
    year: 2021,
    authors: "Rahman, M. F., Islam, K.",
    title: "Effectiveness of protected areas in reducing deforestation and forest fragmentation in Bangladesh",
    journal: "Journal of Environmental Management",
    doi: "https://doi.org/10.1016/j.jenvman.2020.111711",
    tags: ["Protected Areas", "Deforestation", "Fragmentation", "Bangladesh"]
  },
  {
    year: 2021,
    authors: "Rahman, M. H., Kitajima, K., Rahman, M. F.",
    title: "Spatial patterns of woodfuel consumption by commercial cooking sectors within 30 km of Lawachara National Park in northeastern Bangladesh",
    journal: "Energy for Sustainable Development",
    doi: "https://doi.org/10.1016/j.esd.2021.01.008",
    tags: ["Woodfuel", "Spatial Analysis", "National Park"]
  },
  {
    year: 2020,
    authors: "Islam, K., Rahman, M. F., Islam, K. N., et al.",
    title: "Modeling spatiotemporal distribution of Dipterocarpus turbinatus Gaertn. F in Bangladesh under climate change scenarios",
    journal: "Journal of Sustainable Forestry",
    doi: "https://doi.org/10.1080/10549811.2019.1632721",
    tags: ["Species Distribution", "Climate Change", "Modeling"]
  },
  {
    year: 2019,
    authors: "Islam, K., Nath, T. K., Jashimuddin, M., Rahman, M. F.",
    title: "Forest dependency, co-management and improvement of peoples' livelihood capital: Evidence from Chunati Wildlife Sanctuary, Bangladesh",
    journal: "Environmental Development",
    doi: "https://doi.org/10.1016/j.envdev.2019.100456",
    tags: ["Co-management", "Livelihood", "Wildlife Sanctuary", "Bangladesh"]
  },
  {
    year: 2018,
    authors: "Chowdhury, M. A., Zahra, F.-T., Rahman, M. F., Islam, K.",
    title: "Village common forest management in Komolchori, Chittagong Hill Tracts, Bangladesh",
    journal: "Small-scale Forestry",
    doi: "https://doi.org/10.1007/s11842-018-9402-9",
    tags: ["Community Forest", "Chittagong Hill Tracts", "CBNRM", "Bangladesh"]
  },
  {
    year: 2018,
    authors: "Islam, K., Rahman, M. F., Jashimuddin, M.",
    title: "Modeling land use change using cellular automata and artificial neural network: The case of Chunati Wildlife Sanctuary, Bangladesh",
    journal: "Ecological Indicators",
    doi: "https://doi.org/10.1016/j.ecolind.2018.01.047",
    tags: ["Land Use Change", "Cellular Automata", "ANN", "GIS", "Bangladesh"]
  },
];

// ── PUBLICATIONS RENDERER ─────────────────────────────────────
(function () {
  const listEl    = document.getElementById('pub-list');
  const countEl   = document.getElementById('pub-count');
  const searchEl  = document.getElementById('pub-search');
  if (!listEl) return;

  let activeFilter = 'all';

  function hl(text, q) {
    if (!q) return text;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${esc})`, 'gi'), '<mark>$1</mark>');
  }

  function render() {
    const q = (searchEl ? searchEl.value.trim().toLowerCase() : '');

    const filtered = PUBS.filter(p => {
      const byFilter = activeFilter === 'all'
        || p.tags.some(t => t.toLowerCase().includes(activeFilter))
        || p.title.toLowerCase().includes(activeFilter)
        || p.journal.toLowerCase().includes(activeFilter);

      const byQuery = !q
        || p.title.toLowerCase().includes(q)
        || p.authors.toLowerCase().includes(q)
        || p.journal.toLowerCase().includes(q)
        || p.tags.some(t => t.toLowerCase().includes(q));

      return byFilter && byQuery;
    });

    if (countEl) countEl.textContent = `${filtered.length} paper${filtered.length !== 1 ? 's' : ''}`;

    listEl.innerHTML = filtered.map(p => `
      <div class="pub-item">
        <div class="pub-year">${p.year}</div>
        <div class="pub-body">
          <div class="pub-title">${hl(p.title, q)}</div>
          <div class="pub-authors">${hl(p.authors, q)}</div>
          <div class="pub-journal">${hl(p.journal, q)}</div>
          <div class="pub-footer">
            <a class="pub-doi" href="${p.doi}" target="_blank" rel="noopener">DOI ↗</a>
            <div class="pub-tags">${p.tags.map(t => `<span class="pub-tag">${t}</span>`).join('')}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Wire up search
  if (searchEl) searchEl.addEventListener('input', render);

  // Wire up filter buttons
  document.querySelectorAll('.pub-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pub-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  render();
})();
