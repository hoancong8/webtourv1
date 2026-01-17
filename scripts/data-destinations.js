const DATA = {
    vietnam: {
  country: "vietnam",

  hero: {
    img: "/imgs/vietnam.jpg",
    title: "Vietnam Holidays",
    description: "Discover the Timeless Beauty of Vietnam."
  },

  explore_our_cambodia: {
    title: "Explore Our Vietnam",
    description: [
      `Vietnam is a land of stunning natural beauty and rich cultural heritage.
From the emerald waters of Ha Long Bay to the ancient streets of Hoi An,
the country offers unforgettable experiences for history lovers and nature enthusiasts alike.`,

      `A visit to the capital Hanoi reveals centuries of tradition blended with modern life,
while Ho Chi Minh City showcases Vietnam’s dynamic energy and complex past.
Historic landmarks such as the Imperial Citadel of Hue and the Cu Chi Tunnels
provide deep insight into the nation’s history.`,

      `Vietnam’s countryside is equally captivating, with terraced rice fields in Sapa,
floating markets in the Mekong Delta, and peaceful rural villages.
The long coastline also offers beautiful beaches from Da Nang to Phu Quoc.`
    ],
    showMoreLabel: "Show More",
    img: "/imgs/vietnam-map.jpg"
  },

  stats: [
    {
      value: 8,
      label: "World Heritage Sites"
    },
    {
      value: 54,
      label: "Ethnic Minorities"
    },
    {
      value: 63,
      label: "Cities & Provinces"
    }
  ],

  best_places_to_visit: [
    {
      id: "hanoi",
      name: "Hanoi",
      img: "/imgs/hanoi.jpg"
    },
    {
      id: "halong-bay",
      name: "Halong Bay",
      img: "/imgs/halong.jpg"
    },
    {
      id: "hoi-an",
      name: "Hoi An",
      img: "/imgs/hoian.jpg"
    },
    {
      id: "ho-chi-minh-city",
      name: "Ho Chi Minh City",
      img: "/imgs/hcm.jpg"
    }
  ],

  cambodia_holiday_ideas: [
    {
      title: "Classic Vietnam Highlights in 14 Days",
      adress: "Hanoi, Halong Bay, Hue, Hoi An, Ho Chi Minh City",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
    },
    {
      title: "Northern Vietnam Discovery in 10 Days",
      adress: "Hanoi, Sapa, Ninh Binh, Halong Bay",
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
    },
    {
      title: "Vietnam from North to South in 18 Days",
      adress: "Hanoi, Hue, Hoi An, Ho Chi Minh City, Mekong Delta",
      img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
    }
  ],

  guide: [
    {
      key: "culture",
      title: "Culture & Tradition",
      content: `
Vietnamese culture is shaped by Confucianism, Buddhism, and ancestral worship.
Respect for elders, family values, and community harmony are deeply rooted.
Traditional arts include water puppetry, folk music, and lacquer painting.
      `.trim()
    },
    {
      key: "festivals",
      title: "Festivals & Events",
      content: `
Tet (Lunar New Year) is the most important festival in Vietnam.
Other major celebrations include the Mid-Autumn Festival and regional cultural festivals.
      `.trim()
    },
    {
      key: "health",
      title: "Health & Safety",
      content: `
Travelers should drink bottled water, use sunscreen and insect repellent,
and carry basic travel insurance. International hospitals are available in major cities.
      `.trim()
    },
    {
      key: "currency",
      title: "Currency",
      content: `
The Vietnamese Dong (VND) is the official currency.
Cash is widely used, though credit cards are accepted in hotels and larger restaurants.
      `.trim()
    },
    {
      key: "post",
      title: "Post & Communications",
      content: `
Local SIM cards are inexpensive and easy to purchase.
4G and 5G mobile internet coverage is strong in cities and tourist areas.
      `.trim()
    },
    {
      key: "formalities",
      title: "Travel Formalities",
      content: `
Many nationalities can enter Vietnam visa-free or apply for an e-visa online.
Passports must be valid for at least six months beyond the date of entry.
      `.trim()
    },
    {
      key: "tips",
      title: "Other Tips",
      content: `
Bargaining is common in markets but should be done politely.
Dress modestly at temples and pagodas. Early mornings are ideal for sightseeing.
      `.trim()
    }
  ]
},





    cambodia: {
        country: "cambodia",
        hero: {
            img: "/imgs/cambodia.jpg",
            title: "Cambodia Holidays",
            description: "Unveiling the Enchanting Kingdom."
        },
        explore_our_cambodia: {
            title: "Explore Our Cambodia",
            description: [
                `Cambodia is a kingdom of temples, history-lovers will find endless enjoyment on a holiday in Cambodia.
Marvel at ancient Angkor Wat, a vast temple complex unmatched in size and splendor.
One of the most important architectural sites in south-east Asia and UNESCO protection ensures it will remain
just as magnificent for years to come.`,

                `Don’t miss a visit to the capital city of Cambodia, Phnom Penh and whilst their visit the spectacular
Royal Palace and the Silver Pagoda. A darker side of this city’s history is a visit to the S 21 Detention Centre
where thousands were imprisoned, tortured and killed by the Khmer Rouge, this center demonstrates the country tragic
past which not long ago.`,

                `The rural countryside in Cambodia stretches far, green and wide and offers a different pace to the cities.
Enjoy the rhythm of rural life in the most enchanting colonial towns like Battambang, as well as hopping from
paradise island to paradise island on any one of the Koh Rong Island’s off the coast of Sihanoukville.`
            ],
            showMoreLabel: "Show More",
            img: "/imgs/cambodia.jpg"
        },

        stats: [
            {
                value: 3,
                label: "World Heritage Sites"
            },
            {
                value: 21,
                label: "Ethnic Minorities"
            },
            {
                value: 26,
                label: "Cities"
            }
        ],
        best_places_to_visit: [
            {
                id: "siem-reap",
                name: "Siem Reap",
                img: "/imgs/cambodia.jpg"
            },
            {
                id: "phnom-penh",
                name: "Phnom Penh",
                img: "/imgs/cambodia.jpg"
            },
            {
                id: "battambang",
                name: "Battambang",
                img: "/imgs/cambodia.jpg"
            },
            {
                id: "koh-rong-island",
                name: "Koh Rong Island",
                img: "/imgs/cambodia.jpg"
            }

        ],
        cambodia_holiday_ideas: [
            {
                title: "Heritage Trails of Vietnam and Cambodia in 14 Days",
                adress: "Hanoi, Ba Vi, Pu Luong, Halong Bay, Hue, Hoi An, Siem Reap",
                img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
            },
            {
                title: "Cambodia To Vietnam By Waterway Deluxe Tour in 15 Days",
                adress: "Siem Reap, Phnom Penh, Chau Doc, Mekong Delta, Ho Chi Minh city, Cu Chi, Hoi An, Hanoi, Ba Vi, Halong Bay",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Glimpse Of Indochina in 18 Days",
                adress: "Hanoi, Ba Vi, Halong Bay, Ho Chi Minh city, Mekong Delta, Cu Chi, Siem Reap, Bangkok, Hoi An, Ninh Binh",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Heritage Trails of Vietnam and Cambodia in 14 Days",
                adress: "Hanoi, Ba Vi, Pu Luong, Halong Bay, Hue, Hoi An, Siem Reap",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Cambodia To Vietnam By Waterway Deluxe Tour in 15 Days",
                adress: "Siem Reap, Phnom Penh, Chau Doc, Mekong Delta, Ho Chi Minh city, Cu Chi, Hoi An, Hanoi, Ba Vi, Halong Bay",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Glimpse Of Indochina in 18 Days",
                adress: "Hanoi, Ba Vi, Halong Bay, Ho Chi Minh city, Mekong Delta, Cu Chi, Siem Reap, Bangkok, Hoi An, Ninh Binh",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Heritage Trails of Vietnam and Cambodia in 14 Days",
                adress: "Hanoi, Ba Vi, Pu Luong, Halong Bay, Hue, Hoi An, Siem Reap",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Cambodia To Vietnam By Waterway Deluxe Tour in 15 Days",
                adress: "Siem Reap, Phnom Penh, Chau Doc, Mekong Delta, Ho Chi Minh city, Cu Chi, Hoi An, Hanoi, Ba Vi, Halong Bay",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            },
            {
                title: "Glimpse Of Indochina in 18 Days",
                adress: "Hanoi, Ba Vi, Halong Bay, Ho Chi Minh city, Mekong Delta, Cu Chi, Siem Reap, Bangkok, Hoi An, Ninh Binh",
                img: "https://images.unsplash.com/photo-1528181304800-259b08848526"
            }

        ],
        guide: [
            {
                key: "culture",
                title: "Culture & Tradition",
                content: `
Cambodia’s culture is deeply rooted in Khmer traditions and Buddhism.
Visitors should dress modestly when visiting temples, remove shoes
before entering sacred places, and show respect to monks and elders.
Traditional arts include Apsara dance, silk weaving, and stone carving.
    `.trim()
            },
            {
                key: "festivals",
                title: "Festivals & Events",
                content: `
Major festivals include Khmer New Year (April),
Water Festival (Bon Om Touk) in November, and Pchum Ben.
These events are colorful, lively, and deeply meaningful to locals.
    `.trim()
            },
            {
                key: "health",
                title: "Health & Safety",
                content: `
Travelers are advised to drink bottled water, use insect repellent,
and have basic travel insurance. Medical facilities are available
in major cities but limited in rural areas.
    `.trim()
            },
            {
                key: "currency",
                title: "Currency",
                content: `
The Cambodian Riel (KHR) is the official currency, however US Dollars
are widely accepted. Small notes are preferred and change may be given
in Riel.
    `.trim()
            },
            {
                key: "post",
                title: "Post & Communications",
                content: `
Local SIM cards are inexpensive and easy to purchase.
4G internet is widely available in cities and tourist destinations.
Postal services exist but can be slow.
    `.trim()
            },
            {
                key: "formalities",
                title: "Travel Formalities",
                content: `
Most visitors require a visa, which can be obtained online (e-visa)
or on arrival. Passports must be valid for at least 6 months.
    `.trim()
            },
            {
                key: "tips",
                title: "Other Tips",
                content: `
Bargaining is common in markets, but should be done politely.
Tipping is not required but appreciated. Early mornings are best
for visiting Angkor Wat.
    `.trim()
            }
        ]
    }
};

// Expose to non-module browser environment
window.DATA = DATA;

window.initDestinationsData = function initDestinationsData() {
    if (!location.hash.startsWith("#/destinations")) return;

    const root = document.getElementById("app") || document;

    function getQueryParam(name) {
        const hash = location.hash; // "#/destinations?id=cambodia"
        const query = hash.split("?")[1];
        if (!query) return null;
        return new URLSearchParams(query).get(name);
    }

    // Default destination if missing/invalid
    const destinationIdRaw = (getQueryParam("id") || "cambodia").toLowerCase();
    const destinationId = DATA[destinationIdRaw] ? destinationIdRaw : "cambodia";

    // HERO selectors must match destinations.html
    const heroImg = root.querySelector(".hero-bg-destination");
    const heroTitle = root.querySelector(".hero-title-destination");
    const heroSubtitle = root.querySelector(".hero-subtitle-destination");

    if (heroImg) heroImg.src = DATA[destinationId].hero.img;
    if (heroTitle) heroTitle.textContent = DATA[destinationId].hero.title;
    if (heroSubtitle) heroSubtitle.textContent = DATA[destinationId].hero.description;

    (function initCountrySection() {
        const countryRoot = root.querySelector("#countryRoot");
        if (!countryRoot) return;

        const titleEl = countryRoot.querySelector("#cTitle");
        const descEl = countryRoot.querySelector("#cDesc");
        const statsEl = countryRoot.querySelector("#cStats");
        const mapEl = countryRoot.querySelector("#cMap");
        const moreBtn = countryRoot.querySelector("#cMoreBtn");
        if (!titleEl || !descEl || !statsEl || !mapEl || !moreBtn) return;

        // render title + map
        titleEl.textContent = DATA[destinationId].explore_our_cambodia.title;
        mapEl.src = DATA[destinationId].explore_our_cambodia.img;

        // render paragraphs
        descEl.innerHTML = DATA[destinationId].explore_our_cambodia.description.map(p => `<p>${p}</p>`).join("");

        // render stats
        statsEl.innerHTML = DATA[destinationId].stats.map(s => `
      <div class="stat">
        <span class="value">${s.value}</span>
        <span class="label">${s.label}</span>
      </div>
    `).join("");

        // show more toggle (mặc định collapse)
        descEl.classList.add("is-collapsed");
        let expanded = false;

        moreBtn.addEventListener("click", () => {
            expanded = !expanded;
            descEl.classList.toggle("is-collapsed", !expanded);
            moreBtn.textContent = expanded ? "Show Less" : "Show More";
        });
    })();

    (function initBestPlaces() {
        const grid = root.querySelector("#placesGrid");
        if (!grid) return;

        grid.innerHTML = DATA[destinationId].best_places_to_visit.map(p => `
    <article class="place-card">
      <a href="#/bestplaces?id=${p.id}" style="text-decoration: none;">
        <div class="place-media">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <h3 class="place-name">${p.name}</h3>
      </a>
    </article>
  `).join("");
    })();

    (function initHolidayIdeas() {
        const grid = root.querySelector("#hiGrid");
        if (!grid) return;

        grid.innerHTML = DATA[destinationId].cambodia_holiday_ideas.map(p => `
    <article class="hi-card">
      <div class="hi-media">
        <img src="${p.img}" alt="">
        <button class="hi-fav">♡</button>
      </div>
      <div class="hi-body">
        <h3>${p.title}</h3>
        <p class="hi-meta">${p.adress}</p>
        <a class="hi-btn" href="#/view-tour">View tour</a>
      </div>
    </article>
  `).join("");
    })();

    (function initDataGuideAccordion() {
        const guideRoot = root.querySelector("#guideAcc");
        if (!guideRoot) return;

        guideRoot.innerHTML = DATA[destinationId].guide
            .map((p) => `
        <div class="acc-item">
          <button class="acc-btn" type="button" aria-expanded="false">
            <span>${p.title}</span>
            <span class="acc-ic">▾</span>
          </button>
          <div class="acc-panel" hidden>
            <div class="acc-content">${p.content}</div>
          </div>
        </div>`)
            .join("");
    })();

    (function initGuideAccordion() {
        const guideRoot = root.querySelector("#guideAcc");
        if (!guideRoot) return;

        guideRoot.addEventListener("click", (e) => {
            const btn = e.target.closest(".acc-btn");
            if (!btn) return;

            const item = btn.closest(".acc-item");
            const panel = item?.querySelector(".acc-panel");
            const isOpen = item?.classList?.contains("is-open");

            // đóng hết
            guideRoot.querySelectorAll(".acc-item").forEach(it => {
                it.classList.remove("is-open");
                it.querySelector(".acc-btn")?.setAttribute("aria-expanded", "false");
                const p = it.querySelector(".acc-panel");
                if (p) p.hidden = true;
            });

            // nếu đang đóng -> mở
            if (item && !isOpen) {
                item.classList.add("is-open");
                btn.setAttribute("aria-expanded", "true");
                if (panel) panel.hidden = false;
            }
        });
    })();
};
