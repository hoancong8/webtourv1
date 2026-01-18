window.CategoryPage = {
  title: "Culture and History",
  desc:
    "Immersing yourself in the rich tapestry of ancient traditions and fascinating stories of civilizations past. " +
    "Delve into the heart of diverse cultures, explore historical landmarks, and gain profound insights into the roots of our world. " +
    "Experience the enchanting blend of the past and present, forging unforgettable memories that resonate with the essence of humanity.",

  // mock list (bạn thay bằng data thật cũng ok)
  tours: [
    {
      id: "t1",
      title: "Amazing Vietnam Super Save Package in 10 Days",
      image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1400&q=70",
      destination: "Vietnam",
      durationDays: 10,
      route: "Hanoi, Halong Bay, Hoi An, Ho Chi Minh city, Cu Chi, Mekong Delta",
      href: "#/view-tour?id=t1",
      wished: false,
    },
    {
      id: "t2",
      title: "Explore Vietnam & Thailand Adventure in 8 Days",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=70",
      destination: "Thailand",
      durationDays: 8,
      route: "Ho Chi Minh city, Mekong Delta, Cu Chi, Bangkok, Phuket",
      href: "#/view-tour?id=t2",
      wished: false,
    },
    {
      id: "t3",
      title: "Treasures of Vietnam, Cambodia and Thailand in 11 Days",
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=70",
      destination: "Cambodia",
      durationDays: 11,
      route: "Hanoi, Ba Vi, Ninh Binh, Halong Bay, Siem Reap, Phuket",
      href: "#/view-tour?id=t3",
      wished: false,
    },
    {
      id: "t4",
      title: "Classic Nepal Heritage Trails in 7 Days",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=70",
      destination: "Nepal",
      durationDays: 7,
      route: "Kathmandu, Bhaktapur, Patan, Nagarkot",
      href: "#/view-tour?id=t4",
      wished: false,
    },
    {
      id: "t5",
      title: "Malaysia Cultural Escape in 6 Days",
      image: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=70",
      destination: "Malaysia",
      durationDays: 6,
      route: "Kuala Lumpur, Malacca, Penang",
      href: "#/view-tour?id=t5",
      wished: false,
    },
    {
      id: "t6",
      title: "Japan Timeless Traditions in 12 Days",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=70",
      destination: "Japan",
      durationDays: 12,
      route: "Tokyo, Nikko, Kyoto, Nara, Osaka",
      href: "#/view-tour?id=t6",
      wished: false,
    },
  ],

  // ========== render ==========
  renderHeader() {
    const t = document.getElementById("catTitle");
    const d = document.getElementById("catDesc");
    if (t) t.textContent = this.title;
    if (d) d.textContent = this.desc;
  },

  renderTours(list) {
    const grid = document.getElementById("tourGrid");
    if (!grid) return;

    grid.innerHTML = list
      .map(
        (t) => `
        <article class="tour-card">
          <div class="tour-card__media">
            <img src="${t.image}" alt="">
            <button class="wish-btn" data-id="${t.id}" type="button">
              <span>${t.wished ? "♥" : "♡"}</span>
            </button>
          </div>

          <div class="tour-card__body">
            <div class="tour-card__title">${t.title}</div>
            <div class="tour-card__meta">
              <span>📍</span>
              <span>${t.route}</span>
            </div>
            <a class="btn-view" href="${t.href}">View tour</a>
          </div>
        </article>
      `
      )
      .join("");

    // wishlist toggle (delegation)
    grid.onclick = (e) => {
      const btn = e.target.closest(".wish-btn");
      if (!btn) return;
      const tour = this.tours.find((x) => x.id === btn.dataset.id);
      if (!tour) return;
      tour.wished = !tour.wished;
      this.applyFilters();
    };
  },

  // ========== destination dropdown ==========
  buildDestinations() {
    return [...new Set(this.tours.map((t) => t.destination))].sort();
  },

  openDD() {
    const dd = document.getElementById("destDD");
    if (!dd) return;
    dd.hidden = false;
  },

  closeDD() {
    const dd = document.getElementById("destDD");
    if (!dd) return;
    dd.hidden = true;
  },

  renderDD(items) {
    const dd = document.getElementById("destDD");
    if (!dd) return;

    dd.innerHTML = items
      .map((x) => `<div class="dd__item" data-val="${x}">${x}</div>`)
      .join("");
  },

  // ========== filters ==========
  parseDurationRange(v) {
    if (!v) return null;
    if (v === "15-30") return { min: 15, max: 999 };
    const [a, b] = v.split("-").map(Number);
    return { min: a, max: b };
  },

  applyFilters() {
    const q = (document.getElementById("kwInput")?.value || "").toLowerCase();
    const dest = (document.getElementById("destInput")?.value || "").trim();
    const durVal = document.getElementById("durSelect")?.value || "";
    const dur = this.parseDurationRange(durVal);

    let list = this.tours.slice();

    if (q) {
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.route.toLowerCase().includes(q) ||
          t.destination.toLowerCase().includes(q)
      );
    }

    if (dest) {
      list = list.filter((t) => t.destination.toLowerCase() === dest.toLowerCase());
    }

    if (dur) {
      list = list.filter((t) => t.durationDays >= dur.min && t.durationDays <= dur.max);
    }

    this.renderTours(list);
  },

  // ========== init / destroy ==========
  init() {
    this.renderHeader();

    // build dropdown
    const allDest = this.buildDestinations();
    this.renderDD(allDest);

    const destInput = document.getElementById("destInput");
    const dd = document.getElementById("destDD");

    // handlers
    this._onSearchClick = () => this.applyFilters();
    this._onKw = () => this.applyFilters();
    this._onDur = () => this.applyFilters();

    this._onDestFocus = () => this.openDD();
    this._onDocClick = (e) => {
      const field = e.target.closest(".field--select");
      const clickedItem = e.target.closest(".dd__item");

      if (clickedItem) {
        destInput.value = clickedItem.dataset.val;
        this.closeDD();
        return;
      }

      // click ngoài dropdown => đóng
      if (!field) this.closeDD();
    };

    document.getElementById("btnSearch")?.addEventListener("click", this._onSearchClick);
    document.getElementById("kwInput")?.addEventListener("input", this._onKw);
    document.getElementById("durSelect")?.addEventListener("change", this._onDur);
    destInput?.addEventListener("focus", this._onDestFocus);
    document.addEventListener("click", this._onDocClick);

    // filter destination when typing (optional)
    this._onDestTyping = () => {
      const v = (destInput.value || "").toLowerCase();
      const items = allDest.filter(x => x.toLowerCase().includes(v));
      this.renderDD(items.length ? items : allDest);
      this.openDD();
    };
    destInput?.addEventListener("input", this._onDestTyping);

    // first render
    this.applyFilters();
  },

  destroy() {
    document.getElementById("btnSearch")?.removeEventListener("click", this._onSearchClick);
    document.getElementById("kwInput")?.removeEventListener("input", this._onKw);
    document.getElementById("durSelect")?.removeEventListener("change", this._onDur);
    document.getElementById("destInput")?.removeEventListener("focus", this._onDestFocus);
    document.getElementById("destInput")?.removeEventListener("input", this._onDestTyping);
    document.removeEventListener("click", this._onDocClick);
  },
};

// gọi sau khi HTML section đã được gắn vào DOM
window.CategoryPage.init();
