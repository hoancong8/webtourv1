// View Tour page UI/data init (places slider)

window.initViewTourUI = function () {
    if (!location.hash.startsWith("#/view-tour")) return;

    const root = document.getElementById("app") || document;

    const track = root.querySelector("#placesTrack");
    const prevBtn = root.querySelector(".places__nav--prev");
    const nextBtn = root.querySelector(".places__nav--next");

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