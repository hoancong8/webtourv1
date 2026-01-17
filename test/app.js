// ✅ Chỉ sửa DATA là đổi toàn bộ nội dung
const DATA = {
  brandName: "Realistic Asia",
  intro: {
    title: "Trip to Vietnam",
    desc:
      "Vietnam is a fascinating destination with diverse landscapes, culture, and cuisine. Below is a demo page rendered fully from a JS object."
  },

  stats: [
    { label: "Trips", value: "08" },
    { label: "Days", value: "54" },
    { label: "Sites", value: "63" }
  ],

  map: {
    title: "Vietnam Map",
    pill: "Highlights",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
    legend: [
      { name: "Hanoi", color: "#16a34a" },
      { name: "Da Nang", color: "#2563eb" },
      { name: "Ho Chi Minh", color: "#ef4444" }
    ]
  },

  seasons: {
    title: "Best time to visit",
    desc: "Bảng dưới đây chỉ là demo: Good / OK / Bad theo tháng.",
    months: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    rows: [
      { region: "North",   values: ["ok","good","good","good","bad","bad","bad","bad","ok","good","good","ok"] },
      { region: "Central", values: ["good","good","good","ok","ok","bad","bad","ok","good","good","ok","ok"] },
      { region: "South",   values: ["good","good","good","good","ok","ok","bad","bad","ok","good","good","good"] },
    ]
  },

  places: {
    title: "Best places to visit",
    items: [
      { name: "Hanoi", img: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1200&q=80" },
      { name: "Halong Bay", img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80" },
      { name: "Hoi An", img: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=1200&q=80" },
      { name: "Ho Chi Minh", img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1200&q=80" },
    ]
  },

  posts: {
    title: "Latest blog posts",
    items: [
      {
        tag: "VIETNAM",
        title: "Street food you must try",
        excerpt: "Quick guide to iconic dishes and where to find them.",
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80"
      },
      {
        tag: "GUIDE",
        title: "A 7-day itinerary",
        excerpt: "North to South plan with realistic travel pacing.",
        img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
      },
      {
        tag: "TIPS",
        title: "Best seasons & weather",
        excerpt: "Understand monsoon patterns and regional climate differences.",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },

  footer: "Demo page • Data-driven rendering with Vanilla JS"
};

// ===== helpers =====
const qs = (sel, root = document) => root.querySelector(sel);

function render() {
  qs("#brandName").textContent = DATA.brandName;

  qs("#pageTitle").textContent = DATA.intro.title;
  qs("#pageDesc").textContent  = DATA.intro.desc;

  // stats
  const statsEl = qs("#stats");
  statsEl.innerHTML = DATA.stats.map(s => `
    <div class="stat">
      <div class="value">${s.value}</div>
      <div class="label">${s.label}</div>
    </div>
  `).join("");

  // map
  qs("#mapTitle").textContent = DATA.map.title;
  qs("#mapPill").textContent  = DATA.map.pill;
  qs("#mapImg").src = DATA.map.img;

  const legendEl = qs("#mapLegend");
  legendEl.innerHTML = DATA.map.legend.map(l => `
    <div class="legend-item">
      <span class="dot" style="background:${l.color}"></span>
      <span>${l.name}</span>
    </div>
  `).join("");

  // seasons table
  qs("#seasonTitle").textContent = DATA.seasons.title;
  qs("#seasonDesc").textContent  = DATA.seasons.desc;

  const table = qs("#seasonTable");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Region</th>
        ${DATA.seasons.months.map(m => `<th>${m}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${DATA.seasons.rows.map(r => `
        <tr>
          <th>${r.region}</th>
          ${r.values.map(v => badge(v)).join("")}
        </tr>
      `).join("")}
    </tbody>
  `;

  // places
  qs("#placesTitle").textContent = DATA.places.title;
  const placeGrid = qs("#placeGrid");
  placeGrid.innerHTML = DATA.places.items.map(p => `
    <article class="place-card">
      <div class="img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="name">${p.name}</div>
    </article>
  `).join("");

  // posts
  qs("#postsTitle").textContent = DATA.posts.title;
  const postGrid = qs("#postGrid");
  postGrid.innerHTML = DATA.posts.items.map(p => `
    <article class="post-card">
      <div class="post-media"><img src="${p.img}" alt="${p.title}"></div>
      <div class="post-body">
        <span class="tag">${p.tag}</span>
        <div class="post-title">${p.title}</div>
        <p class="post-excerpt">${p.excerpt}</p>
      </div>
    </article>
  `).join("");

  qs("#footerText").textContent = DATA.footer;
}

function badge(v){
  const cls = v === "good" ? "good" : v === "ok" ? "ok" : "bad";
  const txt = v === "good" ? "✓" : v === "ok" ? "•" : "×";
  return `<td><span class="badge ${cls}">${txt}</span></td>`;
}

// chạy
document.addEventListener("DOMContentLoaded", render);
