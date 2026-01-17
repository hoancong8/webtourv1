// app.js (simplified)


// ===== MENU HEADER (chạy 1 lần) =====
(() => {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const overlay = document.getElementById("navOverlay");
  const nav = document.getElementById("mainNav");
  if (!header || !toggle || !overlay || !nav) return;

  const openMenu = () => {
    header.classList.add("is-open");
    overlay.classList.add("is-show");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    header.classList.remove("is-open");
    overlay.classList.remove("is-show");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle.addEventListener("click", () => {
    header.classList.contains("is-open") ? closeMenu() : openMenu();
  });
  overlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
  nav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth <= 480) closeMenu();
  });
})();

// ===== HOME UI (gọi sau khi router inject home.html vào #app) =====
let homeAbort = null;

function initHomeUI() {
  homeAbort?.abort();
  homeAbort = new AbortController();
  const { signal } = homeAbort;

  const root = document.getElementById("app") || document;

  // Search bar dropdowns (event delegation)
  const searchBar = root.querySelector("#searchBar");
  if (searchBar) {
    const closeAll = () => {
      searchBar.querySelectorAll(".sb-field").forEach((f) => f.classList.remove("open"));
      const monthPop = searchBar.querySelector("#monthPop");
      monthPop?.setAttribute("aria-hidden", "true");
    };

    searchBar.addEventListener(
      "click",
      (e) => {
        const opt = e.target.closest(".sb-option");
        if (opt) {
          const field = opt.closest(".sb-field");
          const name = field?.dataset?.name;
          const text = opt.textContent.trim();
          if (name === "where") root.querySelector("#whereValue")?.replaceChildren(document.createTextNode(text));
          if (name === "duration") root.querySelector("#durationValue")?.replaceChildren(document.createTextNode(text));
          field?.classList.remove("open");
          return;
        }

        const whenField = e.target.closest("#whenField");
        if (whenField) {
          closeAll();
          whenField.classList.toggle("open");
          const monthPop = root.querySelector("#monthPop");
          monthPop?.setAttribute("aria-hidden", whenField.classList.contains("open") ? "false" : "true");
          return;
        }

        const selectField = e.target.closest(".sb-select");
        if (selectField) {
          closeAll();
          selectField.classList.toggle("open");
          return;
        }
      },
      { signal }
    );

    document.addEventListener(
      "click",
      (e) => {
        if (!searchBar.contains(e.target)) closeAll();
      },
      { signal }
    );
  }

  // Slider buttons
  root.querySelectorAll(".exp-slider").forEach((slider) => {
    const track = slider.querySelector(".exp-track");
    const prev = slider.querySelector(".exp-prev");
    const next = slider.querySelector(".exp-next");
    if (!track) return;

    const getStep = () => {
      const firstCard = track.querySelector(".exp-card");
      if (!firstCard) return 400;
      const gap = parseFloat(getComputedStyle(track).gap || "0");
      return firstCard.getBoundingClientRect().width + gap;
    };

    prev?.addEventListener(
      "click",
      () => track.scrollBy({ left: -getStep(), behavior: "smooth" }),
      { signal }
    );
    next?.addEventListener(
      "click",
      () => track.scrollBy({ left: getStep(), behavior: "smooth" }),
      { signal }
    );
  });

  // Reviews
  const $ = (sel) => root.querySelector(sel);
  const $name = $("#rvName");
  const $date = $("#rvDate");
  const $text = $("#rvText");
  const $stars = $("#rvStars");
  const $dots = $("#rvDots");
  const $avatar = $("#rvAvatar");
  const prev = $("#rvPrev");
  const next = $("#rvNext");

  if ($name && $date && $text && $stars && $dots && prev && next) {
    const reviews = [
      { name: "Carolina B", date: "December, 29 2025", rating: 5, avatar: "./imgs/avatar.png", text: "One of my best trips I've ever taken! Everything was flawless..." },
      { name: "Ann S", date: "November, 12 2025", rating: 5, avatar: "./imgs/avatar.png", text: "We had an amazing trip organised by Phoebe at Realistic Asia..." },
      { name: "John M", date: "October, 03 2025", rating: 4, avatar: "./imgs/avatar.png", text: "Great itinerary and support. Hotels were excellent..." },
    ];

    let idx = 0;
    const renderStars = (n) => {
      $stars.innerHTML = "";
      for (let i = 0; i < 5; i++) {
        const s = document.createElement("span");
        s.className = "dot" + (i < n ? " fill" : "");
        $stars.appendChild(s);
      }
    };

    const render = () => {
      const r = reviews[idx];
      $name.textContent = r.name;
      $date.textContent = r.date;
      $text.textContent = r.text;
      if ($avatar) $avatar.src = r.avatar;
      renderStars(r.rating);

      $dots.innerHTML = "";
      reviews.forEach((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = i === idx ? "active" : "";
        b.addEventListener(
          "click",
          () => {
            idx = i;
            render();
          },
          { signal }
        );
        $dots.appendChild(b);
      });
    };

    prev.addEventListener(
      "click",
      () => {
        idx = (idx - 1 + reviews.length) % reviews.length;
        render();
      },
      { signal }
    );
    next.addEventListener(
      "click",
      () => {
        idx = (idx + 1) % reviews.length;
        render();
      },
      { signal }
    );

    render();
  }


  // ===== MONTH PICKER (WHEN) =====
  (() => {
    const whenField = root.querySelector("#whenField");
    const monthPop = root.querySelector("#monthPop");
    const monthGrid = root.querySelector("#monthGrid");
    const yearTitle = root.querySelector("#yearTitle");
    const prevYearBtn = root.querySelector("#prevYear");
    const nextYearBtn = root.querySelector("#nextYear");
    const whenValue = root.querySelector("#whenValue");

    if (!whenField || !monthPop || !monthGrid || !yearTitle || !prevYearBtn || !nextYearBtn || !whenValue) return;

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let year = new Date().getFullYear();
    let selectedYear = null;
    let selectedMonth = null; // 0..11

    function renderMonths() {
      yearTitle.textContent = String(year);
      monthGrid.innerHTML = "";

      for (let m = 0; m < 12; m++) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "mp-month";
        btn.textContent = monthNames[m];

        // active state
        if (selectedYear === year && selectedMonth === m) btn.classList.add("active");

        btn.addEventListener(
          "click",
          () => {
            selectedYear = year;
            selectedMonth = m;

            // update text (ví dụ: "Mar 2026")
            whenValue.textContent = `${monthNames[m]} ${year}`;

            // đóng popup
            whenField.classList.remove("open");
            monthPop.setAttribute("aria-hidden", "true");

            // rerender để highlight active
            renderMonths();
          },
          { signal }
        );

        monthGrid.appendChild(btn);
      }
    }

    prevYearBtn.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation(); // tránh bị click delegation đóng mở lung tung
        year -= 1;
        renderMonths();
      },
      { signal }
    );

    nextYearBtn.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        e.stopPropagation();
        year += 1;
        renderMonths();
      },
      { signal }
    );

    // nếu đã có whenValue từ trước, cố parse lại để set active (tùy chọn)
    // ví dụ whenValue = "Mar 2026"
    const txt = (whenValue.textContent || "").trim();
    const match = txt.match(/^([A-Za-z]{3})\s+(\d{4})$/);
    if (match) {
      const m = monthNames.indexOf(match[1]);
      const y = parseInt(match[2], 10);
      if (m >= 0 && y) {
        year = y;
        selectedYear = y;
        selectedMonth = m;
      }
    }

    renderMonths();
  })();
  // ===== HORIZONTAL SLIDERS =====
  // initHorizontalSlider(root, { signal });

  window.destroyHomeUI = function destroyHomeUI() {
    homeAbort?.abort();
    homeAbort = null;
  };

}




window.initHomeUI = initHomeUI;

