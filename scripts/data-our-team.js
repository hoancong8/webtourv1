window.initOurTeamData = function initOurTeamData() {
    if (!location.hash.startsWith("#/our-team")) return;

    const root = document.getElementById("app") || document;


    const datateamGrid = [
        { id: "1", name: "Hien Do", role: "CEO", img: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/meme-meo-cuoi-6.jpg" },
        { id: "2", name: "Ha Trinh", role: "CTO", img: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/meme-meo-cuoi-6.jpg" },
        { id: "3", name: "Alex Nguyen", role: "CFO", img: "https://cdn-media.sforum.vn/storage/app/media/ctv_seo3/meme-meo-cuoi-6.jpg" },
    ];
    genDatateamGrid(datateamGrid, "teamGrid", root);
    genDatateamGrid(datateamGrid, "teamGrid2", root);
    genDatateamGrid(datateamGrid, "teamGrid3", root);
};

function genDatateamGrid(datateamGrid, idTeamGrid, root) {
    const teamGrid = root.querySelector("#" + idTeamGrid);
    if (!teamGrid) return;
    teamGrid.innerHTML = datateamGrid.map(({ name, role, img, id }) => `
    <article class="team-card">
      <div class="team-media">
        <img src="${img}" alt="${name}" />
        <button class="bio-btn" type="button" data-bio="${id}">Read bio</button>
      </div>
      <div class="team-meta">
        <h3 class="team-name">${name}</h3>
        <p class="team-role">${role}</p>
      </div>
    </article>
  `).join("");
}


let aboutAbort = null;

function initAboutUI() {
    aboutAbort?.abort();
    aboutAbort = new AbortController();
    const { signal } = aboutAbort;

    const root = document.getElementById("app") || document;

    // 1) Slider ảnh (nếu tồn tại)
    mountAboutSlider(root, { signal });

    // 2) Bio modal (nếu tồn tại)
    mountBioModal(root, {
        signal,
        bios: bios
    });

    window.destroyAboutUI = function destroyAboutUI() {
        aboutAbort?.abort();
        aboutAbort = null;
    };
}

/* =========================
   MODULE 1: ABOUT SLIDER
========================= */
function mountAboutSlider(root, { signal } = {}) {
    const slider = root.querySelector(".about-slider");
    if (!slider) return;

    const imgEl = slider.querySelector("#aboutSlideImg");
    const prevBtn = slider.querySelector(".slide-btn.prev");
    const nextBtn = slider.querySelector(".slide-btn.next");
    if (!imgEl || !prevBtn || !nextBtn) return;

    const slides = [
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
    ];

    let idx = 0;

    const render = () => { imgEl.src = slides[idx]; };
    const next = () => { idx = (idx + 1) % slides.length; render(); };
    const prev = () => { idx = (idx - 1 + slides.length) % slides.length; render(); };

    prevBtn.addEventListener("click", prev, { signal });
    nextBtn.addEventListener("click", next, { signal });

    // click ảnh -> next
    imgEl.addEventListener("click", next, { signal });

    render();
}

/* =========================
   MODULE 2: BIO MODAL
   - dùng delegation trong root
   - không dùng document (tránh chồng event)
========================= */
const bios = {
    "1": {
        title: "Hien Do",
        text: `
Hien Do is the Co-Founder & CEO of Realistic Asia.
With over 10 years of experience in tourism and destination management,
she focuses on creating authentic and responsible travel experiences.
    `.trim()
    },

    "2": {
        title: "Ha Trinh",
        text: `
Ha Trinh is the CTO of Realistic Asia.
She leads technology strategy and digital transformation,
ensuring seamless booking systems and scalable platforms.
    `.trim()
    },

    "3": {
        title: "Alex Nguyen",
        text: `
Alex Nguyen is the CFO.
He oversees financial planning, partnerships, and sustainable growth
across all Realistic Asia operations.
    `.trim()
    }
};

function mountBioModal(root, { signal, bios = {} } = {}) {
    const modal = root.querySelector("#bioModal");
    if (!modal) return;

    const titleEl = modal.querySelector("#bioTitle");
    const textEl = modal.querySelector("#bioText");
    if (!titleEl || !textEl) return;

    const open = (key) => {
        const b = bios[key] || { title: "Bio", text: "No bio yet." };
        titleEl.textContent = b.title;
        textEl.textContent = b.text;
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    const close = () => {
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    };

    // ✅ Delegation chỉ trong root
    root.addEventListener("click", (e) => {
        const btn = e.target.closest(".bio-btn");
        if (btn && root.contains(btn)) return open(btn.dataset.bio);

        if (e.target.closest("[data-close]")) return close();
    }, { signal });

    // Esc đóng (bắt trên document, nhưng có signal nên abort sạch)
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") close();
    }, { signal });
}

window.initAboutUI = initAboutUI;


