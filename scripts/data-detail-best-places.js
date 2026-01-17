const placesOfInterestData = {
    "hanoi": {
        hero: {
            title: "Hanoi",
            description: `
Hanoi is a unique city in the world of which a vibrant history is so subtly displayed on every street. Ancient oriental landmarks mingle with present-day tree-houses, welcoming visitors to interesting hidden alleys. Remains of French colonial buildings situated along splendid boulevards enlighten the city center. Not far away, the heart of Hanoi called the Old Quarter fascinates both tourists and locals with an incredible abundance of retail shops, markets, and food stalls. Hanoi is well-known for its varied selection of street foods. The culture is so lively, it spills on pavements, it lives in rivers. With a thousand-year of dramatic history since its establishment in 1010, Hanoi hence offers a variety of museums and art galleries as well as relic sites telling intriguing stories witnessed. Moreover, dozens of craft villages scattered around the city outskirts will be a perfect get-away from the mess of motorbikes in the center and demonstrate the creativity of native people. Hanoi now serves as the capital city of Vietnam but beyond the country’s political hub, she is regarded as the capital of fun, joy, and hidden charms.
        `.trim()
        },

        map: {
            embedUrl: "https://www.google.com/maps?q=Hanoi,Vietnam&output=embed"
        },

        guides: {
            title: "Travel guides",
            transportation: {
                title: "Transportation",
                howToGetThere: `
Noi Bai International Airport is the gateway to the city located in the Northeast District of Soc Son. It takes a 40-minute drive from the airport to downtown Hanoi. Upon arrival, travelers have several options to reach the city center such as a taxi, bus or book a private car.
          `.trim(),

                waysToGetAround: [
                    {
                        label: "Private car",
                        text: "The most popular idea of transporting in Hanoi is to book a private car with a private driver. Transport service companies offer a selection of vehicles from a 7-seat SUV to 50-seat coaches. Visitors can indeed save their time and money with a packaged car booking rather than ponder to search for a vehicle at every move whilst struggling with the language barrier, payment method, and skepticism about service quality..."
                    },
                    {
                        label: "Motorcycles",
                        text: "Hanoi is best known for its fascinating motorbike culture. If you are adventurous enough to try the nerve of involving in the chaos of Hanoi’s traffic, then hiring a motorbike is recommended. You may want to seriously consider driving your own vehicle; otherwise, plenty of local services offer a much safer and better-planned ride with experienced drivers so that you can enjoy the scenery while on the back of the bike."
                    },
                    {
                        label: "Walking",
                        text: "This is certainly a universally good way to explore any place on Earth. Once arrive in downtown Hanoi, visitors can be enthralled by a maze of street alleys displayed with numerous shop signs. This unique characteristic of Hanoi can only be thoroughly explored by a walk. Head to the lack of sidewalk in the city center, Hanoi is friendly and safe place to get around on foot. It is astonishing to immerse yourselves in the crowds of vehicles and overcome the nerve of crossing the most chaotic streets in the world. Visitors can book walking tours or stroll around by themselves instead of renting a car or motorbike."
                    }
                ],

                bestTimeToVisit: `
Hanoi’s weather is at its best from September to November when the ideal temperatures range from 25°C to 30°C and from February to April when the temperatures range from 15°C to 20°C. Bear in mind that Hanoi has high humidity year-round and be well-prepared to adapt if needed.
          `.trim()
            }
        },
        placesOfInterest: [
            {
                id: "hcm-mausoleum",
                name: "HO CHI MINH MAUSOLEUM",
                description: `
    Located at the centre of Hanoi, the Ho Chi Minh Mausoleum is the final
    resting place of President Ho Chi Minh. Built between 1973 and 1975,
    the structure reflects both Vietnamese and Soviet architectural styles.
    `,
                image: "./imgs/ho-chi-minh-mausoleum.jpg"
            },

            {
                id: "temple-of-literature",
                name: "TEMPLE OF LITERATURE",
                description: `
    Built in 1070 during the Ly Dynasty, the Temple of Literature is dedicated
    to Confucius and served as Vietnam’s first national university. It is a
    fine example of traditional Vietnamese architecture.
    `,
                image: "./imgs/temple-of-literature.jpg"
            },

            {
                id: "one-pillar-pagoda",
                name: "ONE PILLAR PAGODA",
                description: `
    The One Pillar Pagoda was constructed in 1049 under Emperor Ly Thai Tong.
    Inspired by a dream of the Goddess of Mercy, the pagoda symbolizes purity
    and enlightenment rising from the lotus.
    `,
                image: "./imgs/one-pillar-pagoda.jpg"
            }
        ],
    },
    "ho-chi-minh-city": [
        {
            id: "notre-dame-cathedral",
            name: "NOTRE DAME CATHEDRAL",
            description: `
    The Notre Dame Cathedral in Ho Chi Minh City is a stunning example of
    French colonial architecture. Completed in 1880, it features beautiful
    stained glass windows and a peaceful garden.
    `,
            image: "./imgs/notre-dame-cathedral.jpg"
        },

        {
            id: "war-remnants-museum",
            name: "WAR REMNANTS MUSEUM",
            description: `
    The War Remnants Museum offers a sobering look at the Vietnam War
    through photographs, artifacts, and exhibits. It's a must-visit for
    those seeking to understand the country's history.
    `,
            image: "./imgs/war-remnants-museum.jpg"
        },

        {
            id: "ben-thanh-market",
            name: "BEN THANH MARKET",
            description: `
    Ben Thanh Market is a bustling marketplace in the heart of Ho Chi Minh
    City. Here, you can find everything from fresh produce to souvenirs.
    It's a great place to experience local culture and cuisine.
    `,
            image: "./imgs/ben-thanh-market.jpg"
        }
    ]
};
window.placesOfInterestData = placesOfInterestData;
window.initPlacesOfInterestData = function () {
    if (!location.hash.startsWith("#/bestplaces")) return;

    const root = document.getElementById("app") || document;

    function getQueryParam(name) {
        const hash = location.hash; // "#/bestplaces?id=hanoi"
        const query = hash.split("?")[1];
        if (!query) return null;
        return new URLSearchParams(query).get(name);
    }

    // Default destination if missing/invalid
    const destinationIdRaw = (getQueryParam("id") || "hanoi").toLowerCase();
    const destinationId = placesOfInterestData[destinationIdRaw] ? destinationIdRaw : "hanoi";

    const data = placesOfInterestData[destinationId];

    // Resolve places list (support both legacy array-only entries and object entries)
    const places = Array.isArray(data.placesOfInterest) ? data.placesOfInterest : (data?.places || []);

    const placesContainer = root.querySelector("#placesOfInterest");

    // Fill hero/guide content
    const cityNameEl = root.querySelector("#cityName");
    const cityDescEl = root.querySelector("#cityDesc");
    const mapFrameEl = root.querySelector("#mapFrame");
    const guideTitleEl = root.querySelector("#guideTitle");
    const transportTitleEl = root.querySelector("#transportTitle");
    const howToTextEl = root.querySelector("#howToText");
    const waysListEl = root.querySelector("#waysList");
    const bestTimeTextEl = root.querySelector("#bestTimeText");

    if (cityNameEl) cityNameEl.textContent = data?.hero?.title || "";
    if (cityDescEl) cityDescEl.textContent = data?.hero?.description || "";
    if (mapFrameEl) mapFrameEl.src = data?.map?.embedUrl || "";

    if (guideTitleEl) guideTitleEl.textContent = data?.guides?.title || "";

    const t = data?.guides?.transportation;
    if (transportTitleEl) transportTitleEl.textContent = t?.title || "";
    if (howToTextEl) howToTextEl.textContent = t?.howToGetThere || "";
    if (waysListEl) {
        waysListEl.innerHTML = (t?.waysToGetAround || [])
            .map((x) => `<li><b>${x.label}:</b> ${x.text}</li>`)
            .join("");
    }
    if (bestTimeTextEl) bestTimeTextEl.textContent = t?.bestTimeToVisit || "";

    if (placesContainer) {
        placesContainer.innerHTML = places.map(place => `
        <article class="poi-item">
          <h3 class="poi-name">${place.name}</h3>
          <p class="para">${place.description}</p>
          <figure class="poi-figure">
            <img src="${place.image}" alt="${place.name}" />
          </figure>
        </article>
        `).join("");
    }
};