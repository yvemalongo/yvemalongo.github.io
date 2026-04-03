/* ============================================================
   PORTFOLIO — IVES MALONGO
   script.js
   ============================================================ */

// ── DONNÉES DES CARTES ──────────────────────────────────────
const mapsData = [
  {
    id: 1, categorie: "cartographie", cat_label: "Cartographie SIG", annee: "2024", lien: "",
    titre: "Puits pétroliers — Moanda, RDC",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/e5ee15fb591c450490600cca9198aaf9/original/Capture-d-ecran-du-2024-05-20-20-06-49.png",
    outils: "QGIS, SAGA, PostGIS",
    desc: "Cartographie de la localisation des puits pétroliers dans la zone de Moanda (RDC). Visualisation spatiale des infrastructures extractives et analyse de leur distribution géographique."
  },
  {
    id: 2, categorie: "cartographie", cat_label: "Cartographie SIG", annee: "2024", lien: "",
    titre: "Carte d'Altitude — Province de Sankuru",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/7dd4757e60eb4becb08c56fc876f7b76/original/Capture-d-ecran-du-2024-05-20-20-06-02.png",
    outils: "QGIS, SRTM DEM",
    desc: "Modèle Numérique de Terrain (MNT) de la Province de Sankuru. Représentation altimétrique par gradient de couleur permettant d'identifier les zones de relief et les axes hydrographiques."
  },
  {
    id: 3, categorie: "cartographie", cat_label: "Cartographie SIG", annee: "2024", lien: "",
    titre: "Carte de Situation — Province du Tshopo",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/0c89e52a1032466bb9edc1d2b1679b8f/original/Capture-d-ecran-du-2024-05-22-16-04-32.png",
    outils: "QGIS, OSM",
    desc: "Carte de situation administrative de la Province du Tshopo (RDC), représentant les limites territoriales, les axes de communication principaux et les chefs-lieux des territoires."
  },
  {
    id: 4, categorie: "analyse", cat_label: "Analyse Spatiale", annee: "2024", lien: "",
    titre: "Densité des Accidents au Bénin (2008–2017)",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/3b02909624f9463ca5adf5225d0101e8/original/Capture-d-ecran-du-2024-05-22-16-07-31.png",
    outils: "QGIS, Kernel Density, GRASSGIS",
    desc: "Analyse de la densité des accidents de la route au Bénin (2008–2017). Méthode d'estimation par noyau (Kernel Density) pour identifier les zones à haute accidentalité et orienter les politiques de sécurité routière."
  },
  {
    id: 5, categorie: "cartographie", cat_label: "Cartographie SIG", annee: "2024", lien: "",
    titre: "Bunia City — Cartographie Urbaine",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/b5daeea0933444ef97c40ebd851fd711/original/bunia2.jpg",
    outils: "QGIS, OSM, MNT",
    desc: "Carte thématique des bâtiments de Bunia (Ituri, RDC) en pseudo-couleurs, chaque bâtiment représenté en fonction de son altitude extraite d'un MNT via QGIS (Point Sampling Tool). Visualisation continue permettant d'analyser l'exposition aux risques d'inondation et de ruissellement."
  },
  {
    id: 6, categorie: "webgis", cat_label: "WebGIS", annee: "2024",
    lien: "https://yvemalongo.github.io/geokinlabel/",
    titre: "GéoPortail Kinshasa — Dashboard Municipal",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/5f91031047624bc897d3e54ddfa39f7c/original/dash.jpg",
    outils: "Leaflet.js, JavaScript, GeoServer, PostGIS",
    desc: "Tableau de bord opérationnel du GéoPortail de Kinshasa. Interface permettant aux décideurs municipaux de visualiser et analyser les données territoriales des 26 communes en temps réel : infrastructures, sécurité, eau, électricité."
  },
  {
    id: 7, categorie: "teledetection", cat_label: "Télédétection", annee: "2024", lien: "",
    titre: "Carte Occupation du Sol — Ville de Kinshasa",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/12e80a8fd3a24521afc8711ac3bd8dfa/original/Capture-d-ecran-du-2024-05-20-19-54-27.png",
    outils: "Sentinel-2, QGIS, Classification supervisée",
    desc: "Cartographie de l'occupation du sol de Kinshasa. Classification des surfaces (zones bâties, végétation, eau, sols nus) à partir d'images satellitaires. Met en évidence l'étalement urbain rapide d'une des villes les plus peuplées d'Afrique."
  },
  {
    id: 8, categorie: "cartographie", cat_label: "Cartographie SIG", annee: "2024", lien: "",
    titre: "Carte de Situation — Province de Sankuru",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/05bed887cb334cccb4a166bb5425f0b9/original/Capture-d-ecran-du-2024-05-20-19-56-23.png",
    outils: "QGIS, GRASS GIS",
    desc: "Carte administrative et de situation de la Province de Sankuru (RDC). Représentation des territoires, limites administratives et infrastructure de base."
  },
  {
    id: 9, categorie: "analyse", cat_label: "Analyse Spatiale", annee: "2024", lien: "",
    titre: "Densité de Population & Accès aux Soins — Kinshasa",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/dc7c00de1b30486f8bc3b79ab073e948/original/humanitarian.jpg",
    outils: "QGIS, OSM Buildings, Choroplèthe, Analyse spatiale",
    desc: "Carte choroplèthe de densité de population (Masina, N'djili). Population estimée par empreintes de bâtiments, croisée avec les structures sanitaires pour identifier les zones sous-desservies. Outil d'aide à la planification sanitaire (dernier recensement RDC : 1984)."
  },
  {
    id: 10, categorie: "teledetection", cat_label: "Télédétection", annee: "2024", lien: "",
    titre: "Carte d'Inondation — Infrastructures affectées au Brésil",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/76b065b4e94a4b3cad0a6001b50d6c3c/original/humanitarian.jpg",
    outils: "Sentinel-2, QGIS, Analyse multitemporelle",
    desc: "Cartographie des zones inondées au Brésil par comparaison multitemporelle Sentinel-2 (avant/après). Superposition avec données d'infrastructure pour évaluer les dégâts et orienter les interventions humanitaires."
  },
  {
    id: 11, categorie: "cartographie", cat_label: "Cartographie SIG", annee: "2024", lien: "",
    titre: "Densité de Population Mondiale — Cercles Proportionnels",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/2ac21146f67b4b15ac42edd40dcf1bb9/original/popmonde.jpg",
    outils: "QGIS, Banque mondiale, OSM, Cercles proportionnels",
    desc: "Carte combinant cercles proportionnels (taille de population) et choroplèthe (densité/km²). Données Banque mondiale & OSM. Révèle la corrélation densité/superficie — outil clé pour l'aménagement du territoire et la planification urbaine mondiale."
  },
  {
    id: 12, categorie: "teledetection", cat_label: "Télédétection", annee: "2025", lien: "",
    titre: "Analyse NDVI Spatio-temporelle — Impact Minier Nizi (Ituri)",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/ddcee8d9d5c44bad91a0e6d2e219b718/original/Mise-en-page-1.png",
    outils: "Sentinel-2, NDVI, QGIS, Analyse diachronique",
    desc: "Analyse comparative NDVI 2010–2016–2025 évaluant l'impact de l'orpaillage artisanal à Nizi (Djugu, Ituri). Diminution progressive du NDVI : dégradation du couvert végétal par décapage des sols. Réalisé dans le cadre du Mentorship Programme 2025."
  },
  {
    id: 13, categorie: "teledetection", cat_label: "Télédétection", annee: "2024", lien: "",
    titre: "Série Temporelle Sentinel-1 SAR — Inondations Cité du Fleuve",
    img: "https://cdn.gamma.app/jc0fiw9vx4vbq66/9a537b30bc83435abc64e4a49575d9a4/optimized/20240109_235648.gif",
    outils: "Sentinel-1 SAR, QGIS, Série temporelle, Radar",
    desc: "Composition colorée RGB d'images Sentinel-1 SAR en série géo-temporelle de la Cité du Fleuve à Kinshasa, victime d'inondations répétées. Le radar permet un suivi indépendant des conditions météorologiques, même sous couvert nuageux."
  },

{
    id: 16, categorie: "cartographie", cat_label: "cartographie", annee: "2026", lien: "Meise.png",
    titre: "Accessibilité aux espaces verts et aux équipements scolaires dans l’arrondissement de Meise – Vilvoorde – Halle Flandre Brabant Belgium" ,
    img: "Meise.png",
    outils: "OSM, QGIS, ",
    desc: " Cette carte présente une analyse de l’accessibilité aux espaces verts et aux établissements scolaires dans l’arrondissement de Meise, incluant également Vilvoorde et Halle. Elle met en évidence les principales infrastructures de mobilité douce, notamment les pistes cyclables  et les chemins piétons, ainsi que le réseau routier. L’objectif  est d’évaluer la facilité d’accès des populations aux équipements essentiels et aux  espaces de loisirs."  },
    



  {
    id: 17, categorie: "cartographie", cat_label: "cartographie", annee: "2024",
    lien: "dakar.JPG",
    titre: "Evolution spatio temporel Urbaine de la ville de Dakar depuis 1940",
    img: "dakar.JPG",
    outils: "Leaflet.js, JavaScript, OSM",
    desc: "Evolution Urbaine de la ville de Dakar depuis 1940 à 2019 , ainsi que la categorie socio-economique qui occupent different zone    "},


{
    id: 17, categorie: "cartographie", cat_label: "cartographie", annee: "2024",
    lien: "https://github.com/yvemalongo/Analyse_spatiale_avec_geopanda/blob/main/pythongis2.ipynb",
    titre: "Analyse géospatiale avec Python – Kinshasa",
    img: "Pythongis.jpg",
    outils: "Jupyter note, Geopandas, OSM",
    desc: "Ce projet démontre mon apprentissage et ma montée en compétence en Python appliqué aux SIG, à travers une étude de cas basée sur des données réelles de la République Démocratique du Congo. À partir de données géospatiales (limites administratives de Kinshasa, localisation des écoles et couches urbaines), j’ai développé une série de scripts Python permettant de réaliser des analyses spatiales, de manipuler des données géographiques et de produire des résultats exploitables. "},








    
  {
    id: 161, categorie: "cartographie", cat_label: "cartographie", annee: "2022",
    lien: "NDJILI5.JPG",
    titre: " Rendre visible l’invisible : cartographie du quartier 5 Ndjili Kinshasa  ",
    img: "NDJILI5.JPG",
    outils: "OSM, QGIS, OGC ",
    desc: "Cette carte, réalisée dans le cadre du projet « Pas une rue sans carte », valorise un quartier populaire de Kinshasa à partir de données OpenStreetMap.Elle met en évidence les avenues, routes, bâtiments et services essentiels (centres de santé), afin de faciliter la lecture du territoire et améliorer l’orientation des habitants. L’objectif est de rendre la cartographie accessible à tous et de mieux faire connaître les réalités urbaines locales."  },


 {
    id: 14, categorie: "webgis", cat_label: "WebGIS", annee: "2025",
    lien: "https://yvemalongo.github.io/supermarket.github.io/",
    titre: "Supermarchés Kinshasa — Analyse de Couverture Spatiale",
    img: "commerce.jpg",
    outils: "Leaflet.js, JavaScript, OSM",
    desc: "Application WebGIS de localisation des supermarchés à Kinshasa. Identification des zones non desservies et analyse des besoins en commerces de proximité. Réalisé dans le cadre d'une formation au développement WebGIS avec Leaflet.js."
  },


{
    id: 14, categorie: "webgis", cat_label: "WebGIS", annee: "2025",
    lien: "https://yvemalongo.github.io/densite_population.github.io/#6/-5.811/24.456",
    titre: "Carte Web Densité Population en km2 et répartition des structures sanitaires à travers les pays",
    img: "densite.jpg",
    outils: "Leaflet.js, JavaScript, OSM , QGIS2WEB, HTML, CSS",
    desc: "Carte web interactive réalisée avec QGIS2Web et personnalisée en HTML/CSS, illustrant la répartition des centres de santé à l’échelle nationale, superposée à une carte de densité de population (hab/km²). Carte web interactive réalisée avec QGIS2Web et personnalisée en HTML/CSS, illustrant la répartition des centres de santé à l’échelle nationale, superposée à une carte de densité de population (hab/km²).Ce projet met en évidence les disparités d’accès aux services de santé en fonction de la distribution de la population.Ce projet met en évidence les disparités d’accès aux services de santé en fonction de la distribution de la population."
  },


{
    id: 14, categorie: "webgis", cat_label: "WebGIS", annee: "2025",
    lien: "https://yvemalongo.github.io/interpo/",
    titre: "Carte d'Interpolation cuivre cobalt des données ehantillonnées sur le terrain ",
    img: "inter.JPG",
    outils: "Leaflet.js,  OSM , QGIS2WEB, HTML, CSS",
    desc: "Carte web interactive issue d'interpolation des données échantillonnées sur terrains"},







  {
    id: 15, categorie: "webgis", cat_label: "WebGIS", annee: "2024",
    lien: "https://yvemalongo.github.io/webgis/",
    titre: "Supermarchés Kinshasa — Analyse de Couverture Spatiale",
    img: "Modele.jpg",
    outils: "OpenLayer.js, JavaScript, OSM",
    desc: "Application WebGIS realisé avec OpenLayer dans le cadre d'une formation en WebGIS , l'objectif c'etait à partir d'un modèle fourni ou template qu'on arrive à integrer nos propres données pour faire tourner le systeme"
  }
];

// ── ÉTAT ────────────────────────────────────────────────────
let currentLbId = null;
let visibleIds  = mapsData.map(m => m.id);

// ── GÉNÉRATION DYNAMIQUE DES CARTES ─────────────────────────
function buildCards() {
  const grid = document.getElementById('mapGrid');
  if (!grid) return;

  grid.innerHTML = mapsData.map(m => {
    const lienBtn = m.lien
      ? `<a href="${m.lien}" target="_blank" class="proj-ext-link">Voir le projet ↗</a>`
      : '';
    const tagsHtml = m.outils.split(', ')
      .map(o => `<span class="tag">${o}</span>`).join('');

    return `
    <div class="map-card" data-cat="${m.categorie}" data-id="${m.id}">
      <div class="map-img-wrap">
        <img src="${m.img}" alt="${m.titre}" class="map-img" loading="lazy"
             onerror="this.parentElement.classList.add('img-error')" />
        <div class="map-overlay">
          <button class="map-zoom-btn" onclick="openLightbox(${m.id})" aria-label="Agrandir">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              <line x1="11" y1="8"  x2="11"    y2="14"/>
              <line x1="8"  y1="11" x2="14"    y2="11"/>
            </svg>
          </button>
          <span class="map-year">${m.annee}</span>
        </div>
      </div>
      <div class="map-info">
        <span class="map-cat-badge map-cat-${m.categorie}">${m.cat_label}</span>
        <h3 class="map-title">${m.titre}</h3>
        <p class="map-desc">${m.desc}</p>
        <div class="map-footer">
          <div class="tags">${tagsHtml}</div>
          ${lienBtn}
        </div>
      </div>
    </div>`;
  }).join('');

  // Update count
  document.getElementById('visibleCount').textContent = mapsData.length;
}

// ── MENU MOBILE ──────────────────────────────────────────────
function initMobileMenu() {
  const btn   = document.getElementById('menuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// ── FILTRES ──────────────────────────────────────────────────
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const countEl    = document.getElementById('visibleCount');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      visibleIds = [];
      let count  = 0;

      document.querySelectorAll('.map-card').forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.classList.toggle('hidden', !match);
        if (match) {
          count++;
          visibleIds.push(parseInt(card.dataset.id));
        }
      });

      if (countEl) countEl.textContent = count;
    });
  });
}

// ── LIGHTBOX ─────────────────────────────────────────────────
function openLightbox(id) {
  currentLbId = id;
  const m = mapsData.find(x => x.id === id);
  if (!m) return;

  document.getElementById('lbImg').src          = m.img;
  document.getElementById('lbImg').alt          = m.titre;
  document.getElementById('lbCat').textContent  = m.cat_label;
  document.getElementById('lbTitle').textContent = m.titre;
  document.getElementById('lbAnnee').textContent = m.annee;
  document.getElementById('lbOutils').textContent = m.outils;
  document.getElementById('lbDesc').textContent  = m.desc;

  const link = document.getElementById('lbLink');
  if (m.lien) {
    link.href = m.lien;
    link.style.display = 'inline-flex';
  } else {
    link.style.display = 'none';
  }

  updateNavBtns();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  currentLbId = null;
}

function navigateLightbox(dir) {
  const idx    = visibleIds.indexOf(currentLbId);
  const newIdx = idx + dir;
  if (newIdx >= 0 && newIdx < visibleIds.length)
    openLightbox(visibleIds[newIdx]);
}

function updateNavBtns() {
  const idx = visibleIds.indexOf(currentLbId);
  document.getElementById('lbPrev').disabled = idx <= 0;
  document.getElementById('lbNext').disabled = idx >= visibleIds.length - 1;
}

// Fermeture sur fond / clavier
function initLightboxEvents() {
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox').classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── NAVIGATION ACTIVE ─────────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    navLinks.forEach(a =>
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur)
    );
  });
}

// ── FORMULAIRE CONTACT ────────────────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    try {
      const resp = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });
      if (resp.ok) {
        form.reset();
        document.getElementById('formSuccess').style.display = 'block';
        btn.style.display = 'none';
      } else {
        btn.textContent = 'Erreur — réessayez';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Erreur — réessayez';
      btn.disabled = false;
    }
  });
}

// ── INITIALISATION ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCards();
  initMobileMenu();
  initFilters();
  initLightboxEvents();
  initReveal();
  initActiveNav();
  initContactForm();
});
