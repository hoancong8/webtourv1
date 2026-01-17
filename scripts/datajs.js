// datajs.js
// CHỈ render dữ liệu cho HOME
// KHÔNG auto-run, KHÔNG race, router sẽ gọi initHomeData()

window.initHomeData = function initHomeData() {
  const app = document.getElementById("app");
  const root = app || document;

  //Chỉ chạy khi đang ở HOME
  if (app && location.hash && !location.hash.startsWith("#/home")) return;

  const get = (sel) => root.querySelector(sel);

  // ===== ĐỢI DOM HOME INJECT XONG =====
  // Chỉ cần các container chính xuất hiện là OK
  const required = ["#exoticGrid", "#inspGrid", "#expTrack"];

  const missing = required.filter((sel) => !get(sel));
  if (missing.length) {
    const retries = Number(window.__homeInitRetries ?? 0);

    if (retries < 60) {
      window.__homeInitRetries = retries + 1;
      setTimeout(window.initHomeData, 50); // đợi router inject HTML
    } else {
      console.warn("initHomeData: DOM home chưa sẵn:", missing.join(", "));
      window.__homeInitRetries = 0;
    }
    return;
  }

  //DOM ĐÃ SẴN → render và dừng
  window.__homeInitRetries = 0;

  const IMG = "./imgs/image1.png";

  // ===== EXOTIC =====
  const exoticData = [
    { title: "Vietnam", img: IMG },
    { title: "Thailand", img: IMG },
    { title: "Cambodia", img: IMG },
    { title: "Laos", img: IMG },
    { title: "Indonesia", img: IMG },
  ];

  const exoticGrid = get("#exoticGrid");
  exoticGrid.innerHTML = exoticData
    .map(
      (item, i) => `
      <a class="exotic-card${i === 0 ? " span-2" : ""}" href="#">
        <img src="${item.img}" alt="${item.title}">
        <span class="exotic-label">${item.title}</span>
      </a>`
    )
    .join("");

  // ===== INSPIRATION =====
  const inspirationData = [
    "Cycling Tours",
    "Family Trips",
    "Culinary",
    "Nature & Wildlife",
    "Luxury",
    "Culture",
    "Beach",
    "Adventure",
  ];

  const inspGrid = get("#inspGrid");
  inspGrid.innerHTML = inspirationData
    .map((title) => {
      const h = Math.floor(Math.random() * 6) + 8;
      return `
      <a class="insp-card" href="#" style="--h:${h}">
        <div class="card-inner">
          <div class="card-front">
            <img src="${IMG}" alt="${title}">
            <span>${title}</span>
          </div>
          <div class="card-back">
            <h4>${title}</h4>
            <button class="btn-view" type="button">View more</button>
          </div>
        </div>
      </a>`;
    })
    .join("");

  // ===== EXPERIENCES =====
  const expData = [
    { title: "A", desc: "AAA" },
    { title: "B", desc: "BBB" },
    { title: "C", desc: "CCC" },
    { title: "D", desc: "DDD" },
    { title: "E", desc: "EEE" },
    { title: "F", desc: "FFF" },
  ];

  const expTrack = get("#expTrack");
  expTrack.innerHTML = expData
    .map(
      (item) => `
      <article class="exp-card">
        <div class="exp-img"><img src="${IMG}" alt=""></div>
        <h3 class="exp-h3">${item.title}</h3>
        <p class="exp-p">${item.desc}</p>
      </article>`
    )
    .join("");



  // ===== EXPERIENCES =====
  const expData2 = [
    { title: "A", desc: "AAA" },
    { title: "B", desc: "BBB" },
    { title: "C", desc: "CCC" },
    { title: "D", desc: "DDD" },
    { title: "E", desc: "EEE" },
    { title: "F", desc: "FFF" },
  ];

  const expTrack2 = get("#expTrack2");
  expTrack2.innerHTML = expData2
    .map(
      (item) => `
      <article class="exp-card">
        <div class="exp-img"><img src="${IMG}" alt=""></div>
        <h3 class="exp-h3">${item.title}</h3>
        <p class="exp-p">${item.desc}</p>
      </article>`
    )
    .join("");
  // ===== REVIEWS (stars chỉ gen 1 lần) =====
  const rvStars = get("#rvStars");
  if (rvStars && !rvStars.childElementCount) {
    rvStars.innerHTML = `
      <span class="dot fill"></span>
      <span class="dot fill"></span>
      <span class="dot fill"></span>
      <span class="dot fill"></span>
      <span class="dot fill"></span>
    `;
  }
};


window.initExplore = function initExplore() {
  const app = document.getElementById("app");
  const root = app || document;
  (function () {
    const root = document;
    const track = root.getElementById("impactTrack");
    const slider = root.getElementById("impactSlider");
    if (!track || !slider) return;

    // ✅ dữ liệu test giống ảnh
    const impactData = [
      {
        title: "Discovering Sustainable Travel in Southeast Asia: Why it Matters and How to Do It",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },
      {
        title: "Building a Brighter Future: Realistic Asia's Charity Project in Thai Nguyen",
        img: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },
      {
        title: "The Realistic Asia Scholarship Program: Providing Opportunities for Ba Vi Students",
        img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },
      {
        title: "Realistic Asia Achieves Travelife Partnership: A Milestone for Sustainable Travel",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },
      {
        title: "Realistic Asia Achieves Travelife Partnership: A Milestone for Sustainable Travel",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },
      {
        title: "Realistic Asia Achieves Travelife Partnership: A Milestone for Sustainable Travel",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },{
        title: "Realistic Asia Achieves Travelife Partnership: A Milestone for Sustainable Travel",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      },{
        title: "Realistic Asia Achieves Travelife Partnership: A Milestone for Sustainable Travel",
        img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
        href: "#"
      }
    ];

    // render
    track.innerHTML = impactData.map(x => `
    <a class="impact-card" href="${x.href}">
      <div class="impact-media">
        <img src="${x.img}" alt="">
      </div>
      <h3>${x.title}</h3>
    </a>
  `).join("");

    const prevBtn = slider.querySelector(".impact-nav.prev");
    const nextBtn = slider.querySelector(".impact-nav.next");

    let page = 0;

    function getLayout() {
      const w = slider.clientWidth;

      // match breakpoint css
      const perView = w <= 560 ? 1 : (w <= 980 ? 2 : 4);

      // gap trong CSS
      const gap = 26;

      // cardWidth = (viewport - gap*(perView-1))/perView
      const viewportW = slider.querySelector(".impact-viewport").clientWidth;
      const cardW = (viewportW - gap * (perView - 1)) / perView;

      // bước trượt theo 1 "page"
      const step = perView * (cardW + gap);

      // tổng trang
      const total = impactData.length;
      const maxPage = Math.max(0, Math.ceil(total / perView) - 1);

      return { perView, step, maxPage };
    }

    function update() {
      const { step, maxPage } = getLayout();
      page = Math.min(page, maxPage);

      track.style.transform = `translate3d(${-page * step}px,0,0)`;

      if (prevBtn) prevBtn.disabled = page === 0;
      if (nextBtn) nextBtn.disabled = page === maxPage;
    }

    prevBtn?.addEventListener("click", () => { page--; update(); });
    nextBtn?.addEventListener("click", () => { page++; update(); });

    window.addEventListener("resize", update);

    update();
  })();

}