function initHorizontalSlider(root, {
  sliderSelector = ".exp-slider",
  trackSelector  = ".exp-track",
  prevSelector   = ".exp-prev",
  nextSelector   = ".exp-next",
  cardSelector   = ".exp-card",
  signal
} = {}) {
  root.querySelectorAll(sliderSelector).forEach(slider => {
    const track = slider.querySelector(trackSelector);
    const prev  = slider.querySelector(prevSelector);
    const next  = slider.querySelector(nextSelector);
    if (!track) return;

    const getStep = () => {
      const card = track.querySelector(cardSelector);
      if (!card) return 400;
      const gap = parseFloat(getComputedStyle(track).gap || 0);
      return card.getBoundingClientRect().width + gap;
    };

    prev?.addEventListener("click", () => {
      track.scrollBy({ left: -getStep(), behavior: "smooth" });
    }, { signal });

    next?.addEventListener("click", () => {
      track.scrollBy({ left: getStep(), behavior: "smooth" });
    }, { signal });
  });
}
export { initHorizontalSlider };