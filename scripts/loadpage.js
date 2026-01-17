// Simple hash router: keeps header/footer, swaps only #app content.

(async function () {
  const app = document.getElementById("app");
  if (!app) return;

  const routes = {
    "/home": "./pages/home.html",
    "/about": "./pages/about-us/About-Realistic-Asia.html",
    "/our-team": "./pages/about-us/Our-Team.html",
    "/contact-us": "./pages/about-us/contact-us.html",
    "/destinations": "./pages/Destinations/destinations.html",
    "/responsible-travel": "./pages/responsible-travel/responsible-travel.html",
    "/bestplaces": "./pages/Destinations/detail-best-places.html",
    "/view-tour": "./pages/view-tour/view-tour.html"
  };

  function normalizePath(hash) {
    const h = hash || "#/home";
    const raw = h.startsWith("#") ? h.slice(1) : h;

    // Support query strings in hash routes, e.g. "/destinations?id=cambodia"
    const pathOnly = raw.split("?")[0];

    return routes[pathOnly] ? pathOnly : "/home";
  }

  function injectHtml(html) {
    // Use DOM parsing for better tolerance than innerHTML for malformed markup.
    const t = document.createElement("template");
    t.innerHTML = html;
    app.replaceChildren(t.content);
  }

  async function loadRoute() {
    const path = normalizePath(location.hash);
    const file = routes[path];

    // cleanup previous page listeners
    try { window.destroyHomeUI?.(); } catch { /* ignore */ }
    try { window.destroyAboutUI?.(); } catch { /* ignore */ }
    try { window.destroyViewTourUI?.(); } catch { /* ignore */ }

    let html = "";
    try {
      const res = await fetch(file, { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load ${file}: ${res.status}`);
      html = await res.text();
    } catch (err) {
      app.innerHTML = `
        <section class="page" style="width:90%;margin:60px auto;">
          <h2 style="color:#2f8f57;">Page load error</h2>
          <p style="color:#6d6d6d;line-height:1.8;">${String(err)}</p>
        </section>`;
      return;
    }

    injectHtml(html);

    requestAnimationFrame(() => {
      if (path === "/home") {
        window.initHomeData?.();
        window.initHomeUI?.();
      }

      if (path === "/our-team") {
        window.initAboutUI?.();
        window.initOurTeamData?.();
      }

      if (path === "/destinations") {
        window.initDestinationsData?.();
      }
      if (path === "/responsible-travel") {
        window.initExplore?.(); 
      }
      if (path === "/bestplaces") {
        window.initPlacesOfInterestData?.();
      }
      if( path === "/view-tour") {
        window.initViewTourUI?.();
      }
    });
  }

  window.addEventListener("hashchange", loadRoute);
  await loadRoute();
})();
