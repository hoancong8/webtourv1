// ====== TOUR DETAIL (DATA TEST) ======
const tourDetailMock = {
    id: "vn-12d-culture-community",
    title: "Vietnam Culture and Community\nJourney in 12 Days",
    fromTo: "From Hanoi to Ho Chi Minh city",
    heroImage:
        "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1600&q=70",

    cta: {
        text: "ENQUIRY NOW",
        href: "#enquiry",
    },

    expert: {
        avatar:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&q=60",
        label: "Book with an expert for free:",
        phone: "+84-977-860-338",
    },

    actions: {
        downloadLabel: "Download",
        wishlistLabel: "Wishlist",
    },

    share: [
        { label: "Whatsapp", icon: "🟢", href: "#" },
        { label: "Skype", icon: "S", href: "#" },
        { label: "Telegram", icon: "✈", href: "#" },
        { label: "Chat", icon: "💬", href: "#" },
    ],

    places: [
        {
            id: "hanoi",
            name: "Hanoi",
            image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
        {
            id: "bavi",
            name: "Ba Vi",
            image:
                "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
        {
            id: "ninh-binh",
            name: "Ninh Binh",
            image:
                "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
        {
            id: "halong",
            name: "Halong Bay",
            image:
                "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
        {
            id: "hoi-an",
            name: "Hoi An",
            image:
                "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
        {
            id: "saigon",
            name: "Ho Chi Minh City",
            image:
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
        {
            id: "mekong",
            name: "Mekong Delta",
            image:
                "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=70",
            href: "#",
        },
    ],

    mapEmbedUrl:
        "https://www.openstreetmap.org/export/embed.html?bbox=98.0%2C8.0%2C112.5%2C24.0&layer=mapnik",

    itinerary: [
        {
            type: "intro",
            title: "Introduction",
            isOpen: true,
            paragraphs: [
                "A 12-day classic & sustainable journey that threads Vietnam’s highlights and community touchpoints: Hanoi’s heritage and local encounters, rural Ba Vi, UNESCO-listed Ninh Binh, an overnight cruise on ethereal Halong Bay, lantern-lit Hoi An, vibrant Saigon, and the Mekong Delta.",
                "Hands-on moments include a noodle class supporting a social enterprise in Hoi An, cycling to an organic farm with a basket-boat glide through water-coconut villages, a contemporary performance show in Saigon, and a day meeting river communities in the Mekong—balanced with time for cafés, markets, and Old-Town lanes.",
                "This itinerary is designed for travelers who want meaningful local interaction without rushing: a comfortable pace, curated experiences, and enough free time to explore independently.",
            ],
        },

        {
            type: "day",
            day: 1,
            title: "Day 1: HANOI ARRIVAL",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Upon arrival at Noi Bai Airport, complete immigration and baggage claim, then proceed to the exit gate. Your driver will be waiting with a signboard showing your name.",
                "If you cannot locate your driver, please go to the Airport Information Counter and call the emergency number (+84) 977-860-338. After meeting, you’ll be transferred to your hotel for check-in.",
                "The rest of the day is free at leisure—stretch your legs around Hoan Kiem Lake, explore the Old Quarter’s street-food corners, or unwind at a local café.",
            ],
            included: ["Transport"],
        },

        {
            type: "day",
            day: 2,
            title: "Day 2: HANOI HALF DAY CITY & FROM HEART TO HAND (B/L)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Start the morning with a guided exploration of Hanoi’s layered history: colonial boulevards, leafy lakes, and the intimate alleys of the Old Quarter.",
                "Stop at a traditional coffee shop to hear stories about daily Hanoian life—how the city wakes up, eats, works, and relaxes. Your guide will share tips for navigating food streets and local etiquette.",
                "In the afternoon, join a hands-on cultural activity that connects ‘heart to hand’—a small workshop curated to support local artisans and community projects.",
            ],
            included: ["Breakfast", "Lunch", "Guide", "Transport"],
        },

        {
            type: "day",
            day: 3,
            title: "Day 3: HANOI – BA VI COUNTRYSIDE EXPERIENCE (B/L)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Leave the city behind for the green outskirts of Ba Vi. This day focuses on countryside rhythms—rice fields, village lanes, and friendly local encounters.",
                "Enjoy a home-style lunch and learn about rural livelihoods and seasonal farming cycles. Depending on the time of year, you may see harvesting, planting, or craft-making in progress.",
                "Return to Hanoi by late afternoon for a relaxed evening at your own pace.",
            ],
            included: ["Breakfast", "Lunch", "Guide", "Transport"],
        },

        {
            type: "day",
            day: 4,
            title: "Day 4: HANOI – NINH BINH UNESCO LANDSCAPES (B/L)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Travel to Ninh Binh for dramatic limestone karsts rising from green valleys. Cruise gently along riverways framed by cliffs and caves.",
                "Visit ancient temples and scenic viewpoints that reveal the region’s iconic ‘Ha Long Bay on land’ landscape.",
                "After a local lunch, return to Hanoi or continue onward depending on your arrangement.",
            ],
            included: ["Breakfast", "Lunch", "Guide", "Transport"],
        },

        {
            type: "day",
            day: 5,
            title: "Day 5: HALONG BAY OVERNIGHT CRUISE (B/L/D)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Drive to Halong Bay and board your cruise. Settle in as the boat glides through limestone formations and calm waters.",
                "Enjoy activities such as a short hike to a viewpoint, visiting a cave, or kayaking (subject to cruise program and weather).",
                "Dinner is served onboard, followed by a peaceful evening under the bay’s night sky.",
            ],
            included: ["Breakfast", "Lunch", "Dinner", "Cruise", "Guide", "Transport"],
        },

        {
            type: "day",
            day: 6,
            title: "Day 6: HALONG – FLIGHT TO HOI AN (B/BRUNCH)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Start early with sunrise views and a light activity on the bay before brunch.",
                "Disembark and transfer for your onward flight to central Vietnam, continuing to Hoi An.",
                "Evening free to explore lantern-lit streets, tailor shops, and riverside cafés.",
            ],
            included: ["Breakfast", "Brunch", "Transport"],
        },

        {
            type: "day",
            day: 7,
            title: "Day 7: HOI AN FARM, BIKE & BASKET BOAT (B/L)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Cycle through quiet lanes to an organic farm and learn about sustainable growing methods.",
                "Join a relaxed basket-boat ride through water-coconut groves and meet local fishing families.",
                "Return to town for a free evening—perfect for night markets and street-food tasting.",
            ],
            included: ["Breakfast", "Lunch", "Guide", "Transport", "Bike"],
        },

        {
            type: "day",
            day: 8,
            title: "Day 8: HOI AN – FREE DAY / OPTIONAL EXPERIENCES (B)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "A flexible day to enjoy Hoi An your way: beach time, café hopping, souvenir browsing, or a cooking class.",
                "Optional add-ons can include My Son Sanctuary, a street-food tour, or a hands-on craft workshop.",
            ],
            included: ["Breakfast"],
        },

        {
            type: "day",
            day: 9,
            title: "Day 9: FLIGHT TO HO CHI MINH CITY – CITY VIBES (B)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Fly to Ho Chi Minh City and check in at your hotel. Get a first taste of the city’s energy—markets, street vendors, and modern cafés.",
                "In the evening, consider a contemporary performance show or a rooftop view of the skyline.",
            ],
            included: ["Breakfast", "Transport"],
        },

        {
            type: "day",
            day: 10,
            title: "Day 10: SAIGON LOCAL LIFE & CONTEMPORARY CULTURE (B/L)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Explore iconic landmarks and hidden alleys with a focus on everyday life—markets, local eateries, and street scenes.",
                "Learn how the city has evolved through history and modern development, with stops that mix heritage and contemporary culture.",
            ],
            included: ["Breakfast", "Lunch", "Guide", "Transport"],
        },

        {
            type: "day",
            day: 11,
            title: "Day 11: MEKONG DELTA COMMUNITY DAY (B/L)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Drive into the Mekong Delta and meet river communities. Experience a slower pace as you move by boat through canals and floating life.",
                "Visit small family workshops, taste local tropical fruits, and learn about delta livelihoods shaped by water, seasons, and trade.",
                "Return to the city by late afternoon.",
            ],
            included: ["Breakfast", "Lunch", "Guide", "Transport"],
        },

        {
            type: "day",
            day: 12,
            title: "Day 12: DEPARTURE (B)",
            isOpen: false,
            photos: [
                "https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1200&q=70",
                "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=70",
            ],
            paragraphs: [
                "Depending on your flight time, enjoy a final breakfast and some last-minute shopping or coffee.",
                "Private transfer to the airport for your departure.",
            ],
            included: ["Breakfast", "Transport"],
        },
    ],

    howItWorks: [
        {
            num: "01",
            head: "Send us your inquiry",
            sub: "& tell us your preferences",
        },
        {
            num: "02",
            head: "Get the free quote",
            sub: "within 24 hours from our travel experts",
        },
        {
            num: "03",
            head: "Customize and Book",
            sub: "a perfect holiday vacation",
        },
    ],

    similarTours: [
        {
            id: "sea-18d-th-vn-bali",
            title:
                "Serenity & Spice: A Grand Southeast Asia Escape in 18 Days (Thailand, Vietnam, Bali)",
            meta: "Bangkok, Ayutthaya, Chiang Mai, Hanoi,...",
            image:
                "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=70",
            href: "#",
        },
        {
            id: "vn-10d-aqua-life",
            title: "Vietnam Aqua Life In 10 Days",
            meta: "Hanoi, Halong Bay, Hoi An, Ho Chi Minh,...",
            image:
                "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=70",
            href: "#",
        },
        {
            id: "vn-8d-north-highlights",
            title: "Northern Highlights: Hanoi – Sapa – Ninh Binh in 8 Days",
            meta: "Hanoi, Sapa, Ninh Binh",
            image:
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70",
            href: "#",
        },
    ],
};
window.tourDetailMock = tourDetailMock;

// window.initViewTourUI = function () {
//     if (!location.hash.startsWith("#/view-tour")) return;

// };



window.initViewTourUI = function () {
    if (!location.hash.startsWith("#/view-tour")) return;

    const root = document.getElementById("app") || document;

    const track = root.querySelector("#placesTrack");
    const prevBtn = root.querySelector(".places__nav--prev");
    const nextBtn = root.querySelector(".places__nav--next");

    const heroImage = root.querySelector("#tourHeroImage");
    const tourHeroTitle = root.querySelector("#tourHeroTitle");
    const tourFromTo = root.querySelector("#tourFromTo");
    const expertAvatar = root.querySelector("#expertAvatar");
    const expertPhone = root.querySelector("#expertPhone");
    const placesTrack = root.querySelector("#placesTrack");
    const itAcc = root.querySelector("#itAcc");

    // Use correct field names from tourDetailMock and guard missing elements
    if (tourHeroTitle) tourHeroTitle.textContent = tourDetailMock.title;
    if (heroImage) heroImage.src = tourDetailMock.heroImage;
    if (tourFromTo) tourFromTo.textContent = tourDetailMock.fromTo;
    if (expertAvatar) expertAvatar.src = tourDetailMock.expert.avatar;
    if (expertPhone) expertPhone.textContent = tourDetailMock.expert.phone;
    if (placesTrack) {
        placesTrack.innerHTML = tourDetailMock.places.map(p => `
            <article class="place">
                <a class="place__media" href="#">
                <img src="${p.img}" alt="${p.name}">
                </a>
                <h3 class="place__name">${p.name}</h3>
            </article>
            `).join("");
    }

    if (itAcc) {
        itAcc.innerHTML = tourDetailMock.itinerary
            .map((item) => {
                // INTRO
                if (item.type === "intro") {
                    const paras = (item.paragraphs || [])
                        .map((p) => `<p class="it-para">${p}</p>`)
                        .join("");

                    return `
                        <div class="it-item ${item.isOpen ? "is-open" : ""}">
                            <button class="it-btn" type="button" aria-expanded="${item.isOpen ? "true" : "false"}">
                            <span class="it-btn__left">
                                <span class="it-ic">i</span>
                                <span class="it-btn__title">${item.title || "Introduction"}</span>
                            </span>
                            <span class="it-arrow">${item.isOpen ? "⌃" : "⌄"}</span>
                            </button>

                            <div class="it-panel" ${item.isOpen ? "" : "hidden"}>
                            <div class="it-panel__inner">
                                ${paras}
                            </div>
                            </div>
                        </div>
                        `;
                }

                // DAY
                if (item.type === "day") {
                    const photos = (item.photos || [])
                        .map(
                            (src) => `
              <figure class="it-photo">
                <img src="${src}" alt="">
              </figure>
            `
                        )
                        .join("");

                    const paras = (item.paragraphs || [])
                        .map((p) => `<p class="it-para">${p}</p>`)
                        .join("");

                    const included = (item.included && item.included.length)
                        ? `
            <div class="it-included">
              <div class="it-included__title">What’s included:</div>
              <ul class="it-list">
                ${item.included.map((x) => `<li>${x}</li>`).join("")}
              </ul>
            </div>
          `
                        : "";

                    return `
          <div class="it-item ${item.isOpen ? "is-open" : ""}">
            <button class="it-btn" type="button" aria-expanded="${item.isOpen ? "true" : "false"}">
              <span class="it-btn__left">
                <span class="it-dot"></span>
                <span class="it-btn__title">${item.title || ""}</span>
              </span>
              <span class="it-arrow">${item.isOpen ? "⌃" : "⌄"}</span>
            </button>

            <div class="it-panel" ${item.isOpen ? "" : "hidden"}>
              <div class="it-panel__inner">
                ${photos ? `<div class="it-photos">${photos}</div>` : ""}
                ${paras}
                ${included}
              </div>
            </div>
          </div>
        `;
                }

                return "";
            })
            .join("");
    }

    // Avoid stacking listeners if user re-enters the route without a full reload.
    if (track && track.dataset.vtInit === "1") return;
    if (track) track.dataset.vtInit = "1";

    function scrollByCard(dir) {
        if (!track) return;
        const card = track.querySelector(".place");
        const step = (card?.getBoundingClientRect().width || 260) + 22;
        track.scrollBy({ left: dir * step, behavior: "smooth" });
    }

    const onPrev = () => scrollByCard(-1);
    const onNext = () => scrollByCard(1);

    prevBtn?.addEventListener("click", onPrev);
    nextBtn?.addEventListener("click", onNext);

    window.destroyViewTourUI = function () {
        prevBtn?.removeEventListener("click", onPrev);
        nextBtn?.removeEventListener("click", onNext);
        if (track) delete track.dataset.vtInit;
    };



    (function initItineraryAccordion() {
        const acc = document.getElementById("itAcc");
        if (!acc) return;

        function closeAll() {
            acc.querySelectorAll(".it-item").forEach(item => {
                item.classList.remove("is-open");
                const btn = item.querySelector(".it-btn");
                const panel = item.querySelector(".it-panel");
                if (btn) btn.setAttribute("aria-expanded", "false");
                if (panel && panel !== item.querySelector(".it-item.is-open .it-panel")) {
                    // dùng hidden cho item khác
                    if (panel !== acc.querySelector(".it-item.is-open .it-panel")) panel.hidden = true;
                }
            });
        }

        // set đúng trạng thái ban đầu (Introduction mở)
        // acc.querySelectorAll(".it-item").forEach(item => {
        //     const isOpen = item.classList.contains("is-open");
        //     const btn = item.querySelector(".it-btn");
        //     const panel = item.querySelector(".it-panel");
        //     if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        //     if (panel) panel.hidden = !isOpen ? true : false;
        // });

        acc.addEventListener("click", (e) => {
            const btn = e.target.closest(".it-btn");
            console.log('btn', btn);
            if (!btn) return;
            console.log('btn22', btn);
            const item = btn.closest(".it-item");
            const panel = item?.querySelector(".it-panel");
            const isOpen = item?.classList.contains("is-open");

            // đóng hết
            // acc.querySelectorAll(".it-item").forEach(it => {
            //     it.classList.remove("is-open");
            //     it.querySelector(".it-btn")?.setAttribute("aria-expanded", "false");
            //     const p = it.querySelector(".it-panel");
            //     if (p) p.hidden = true;
            //     const arrow = it.querySelector(".it-arrow");
            //     if (arrow) arrow.textContent = "⌄";
            // });

            // nếu đang đóng -> mở
            if (item && !isOpen) {
                item.classList.add("is-open");
                btn.setAttribute("aria-expanded", "true");
                if (panel) panel.hidden = false;
                const arrow = item.querySelector(".it-arrow");
                if (arrow) arrow.textContent = "⌃";
            }
            else {
                item.classList.remove("is-open");
                const arrow = item.querySelector(".it-arrow");
                if (arrow) arrow.textContent = "⌄";
                if (panel) panel.hidden = true;
                btn.setAttribute("aria-expanded", "false");

            }
        });
    })();

};