const sustainableExperiences = [
    {
        location: "Ha Noi",
        title: "Ha Noi city tour by electric car",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Ha Noi",
        title: "Planning Playground With The Local Community",
        img: "https://images.unsplash.com/photo-1603575448364-6d2b7f8cfa7d?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Mai Chau",
        title: "Visiting Pa Co Primary School & Xa Linh Village",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Sapa",
        title: "Helping Local Community In Sapa",
        img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Mu Cang Chai",
        title: "Spend Time With The Hill Tribe Community In Mu Cang Chai",
        img: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Ninh Binh",
        title: "Cycling Through Rural Villages",
        img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Hue",
        title: "Community Farming Experience",
        img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Hoi An",
        title: "Organic Farm & Basket Boat Ride",
        img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Mekong Delta",
        title: "River Life With Local Families",
        img: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=70"
    },
    {
        location: "Ho Chi Minh City",
        title: "Street Food With Local Youth",
        img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=70"
    }
];
window.sustainableExperiences = sustainableExperiences;


function renderSustainableExperiences(list,root) {
    const grid = root.querySelector("#sustainGrid");
    if (!grid) return;

    grid.innerHTML = list.map(item => `
    <article class="sustain-card">
      <div class="sustain-card__img">
        <img src="${item.img}" alt="${item.location}">
      </div>

      <h3 class="sustain-card__loc">${item.location}</h3>
      <p class="sustain-card__title">${item.title}</p>
    </article>
  `).join("");
}

// gọi render
window.initSustainableExperiencesData = function () {
    if (!location.hash.startsWith("#/sustainable-experiences")) return;
    const root = document.getElementById("app") || document;
    renderSustainableExperiences(sustainableExperiences,root);
};