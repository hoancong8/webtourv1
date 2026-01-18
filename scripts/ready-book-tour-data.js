// ====================== READY TO BOOK (GLOBAL) ======================
window.toursMock = window.toursMock || [
  {
    id: "vn14",
    title: "Inspiring Vietnam In 14 Days - Private Tour",
    image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1400&q=70",
    countries: ["Vietnam"],
    route: "Hanoi, Ba Vi, Mai Chau, Ninh Binh, Halong Bay, Hue, Hoi An, Ho Chi Minh city, Can Tho",
    oldPrice: 4740,
    newPrice: 2133,
    discountLabel: "-55% OFF",
    href: "#/view-tour?id=vn14",
    wished: false,
  },
  {
    id: "th14",
    title: "Off The Beaten Tracks of Southern Thailand In 14 Days",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1400&q=70",
    countries: ["Thailand"],
    route: "Bangkok, Cha Am, Khao Sok, Krabi, Phuket",
    oldPrice: 5447,
    newPrice: 2451,
    discountLabel: "-55% OFF",
    href: "#/view-tour?id=th14",
    wished: false,
  },
  {
    id: "vnth14",
    title: "Vietnam and Thailand Deluxe Tour In 14 Days",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=70",
    countries: ["Vietnam", "Thailand"],
    route: "Hanoi, Halong Bay, Sapa, Ho Chi Minh city, Mekong Delta, Bangkok, Phuket",
    oldPrice: 5320,
    newPrice: 2394,
    discountLabel: "-55% OFF",
    href: "#/view-tour?id=vnth14",
    wished: false,
  },
  {
    id: "cam12",
    title: "Cambodia Heritage & Hidden Temples In 12 Days",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=70",
    countries: ["Cambodia"],
    route: "Phnom Penh, Siem Reap, Angkor Wat, Battambang",
    oldPrice: 3200,
    newPrice: 1690,
    discountLabel: "-45% OFF",
    href: "#/view-tour?id=cam12",
    wished: false,
  },
  {
    id: "lao10",
    title: "Laos Slow Travel Discovery In 10 Days",
    image: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1400&q=70",
    countries: ["Laos"],
    route: "Vientiane, Vang Vieng, Luang Prabang",
    oldPrice: 2800,
    newPrice: 1550,
    discountLabel: "-40% OFF",
    href: "#/view-tour?id=lao10",
    wished: false,
  },
];
window.ReadyToBook = {
  // ================= DATA =================
  tours: window.toursMock || [],

  // ================= HELPERS =================
  money(n) {
    return "$" + Number(n).toLocaleString("en-US");
  },

  getSelectedCountries() {
    return [
      ...document.querySelectorAll(
        '#countryChecks input[type="checkbox"]:checked'
      ),
    ].map((x) => x.value);
  },

  // ================= RENDER =================
  renderCountryChecks(allCountries) {
    const wrap = document.getElementById("countryChecks");
    if (!wrap) return;

    wrap.innerHTML = allCountries
      .map(
        (c) => `
        <label class="chk">
          <input type="checkbox" value="${c}">
          <span>${c}</span>
        </label>
      `
      )
      .join("");
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
            <div class="badge-off">${t.discountLabel || ""}</div>
            <button class="wish-btn" data-id="${t.id}" type="button">
              <span>${t.wished ? "♥" : "♡"}</span>
            </button>
          </div>

          <div class="tour-card__body">
            <div class="tour-card__title">${t.title}</div>

            <div class="tour-card__meta">
              <span class="pin">📍</span>
              <span>${t.route}</span>
            </div>

            <div class="tour-card__foot">
              <div class="price">
                <span class="price__old">${this.money(t.oldPrice)}</span>
                <span class="price__new">${this.money(t.newPrice)}</span>
                <span class="price__unit">/pax</span>
              </div>

              <a class="btn-view" href="${t.href}">View tour</a>
            </div>
          </div>
        </article>
      `
      )
      .join("");
  },

  // ================= FILTER =================
  applyFilters() {
    const range = document.getElementById("priceRange");
    const maxPrice = Number(range?.value || 20000);
    const selectedCountries = this.getSelectedCountries();

    const maxLabel = document.getElementById("maxLabel");
    if (maxLabel) maxLabel.textContent = this.money(maxPrice);

    let filtered = this.tours.filter((t) => t.newPrice <= maxPrice);

    if (selectedCountries.length) {
      filtered = filtered.filter((t) =>
        t.countries.some((c) => selectedCountries.includes(c))
      );
    }

    this.renderTours(filtered);
  },

  // ================= INIT / DESTROY =================
  init() {
    const grid = document.getElementById("tourGrid");
    const checks = document.getElementById("countryChecks");
    const range = document.getElementById("priceRange");

    if (!grid) return;

    // tránh init lại
    if (grid.dataset.rtbInit === "1") return;
    grid.dataset.rtbInit = "1";

    // render country list
    const allCountries = [
      ...new Set(this.tours.flatMap((t) => t.countries)),
    ].sort();
    this.renderCountryChecks(allCountries);

    // handlers
    this._onRange = () => this.applyFilters();
    this._onChecks = () => this.applyFilters();
    this._onGridClick = (e) => {
      const btn = e.target.closest(".wish-btn");
      if (!btn) return;
      const tour = this.tours.find((t) => t.id === btn.dataset.id);
      if (!tour) return;
      tour.wished = !tour.wished;
      this.applyFilters();
    };

    range?.addEventListener("input", this._onRange);
    checks?.addEventListener("change", this._onChecks);
    grid.addEventListener("click", this._onGridClick);

    // first render
    this.applyFilters();
  },

  destroy() {
    const grid = document.getElementById("tourGrid");
    const checks = document.getElementById("countryChecks");
    const range = document.getElementById("priceRange");

    range?.removeEventListener("input", this._onRange);
    checks?.removeEventListener("change", this._onChecks);
    grid?.removeEventListener("click", this._onGridClick);

    if (grid) delete grid.dataset.rtbInit;
  },
};
