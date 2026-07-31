(() => {
  function initMenu() {
    const button = document.getElementById("menuBtn");
    const close = document.getElementById("menuCloseBtn");
    const scrim = document.getElementById("menuScrim");
    const panel = document.getElementById("appMenu");
    if (!button || !close || !scrim || !panel) return;

    const openMenu = () => {
      panel.classList.add("open");
      panel.setAttribute("aria-hidden", "false");
      button.setAttribute("aria-expanded", "true");
      scrim.hidden = false;
      document.documentElement.classList.add("menu-open");
      requestAnimationFrame(() => close.focus());
    };

    const closeMenu = () => {
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
      button.setAttribute("aria-expanded", "false");
      scrim.hidden = true;
      document.documentElement.classList.remove("menu-open");
      button.focus({preventScroll:true});
    };

    button.addEventListener("click", openMenu);
    close.addEventListener("click", closeMenu);
    scrim.addEventListener("click", closeMenu);
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && panel.classList.contains("open")) closeMenu();
    });

    panel.querySelectorAll("[data-menu-section]").forEach(item => {
      item.addEventListener("click", () => {
        closeMenu();
        const target = document.getElementById(item.dataset.menuSection);
        const aboutView = document.getElementById("aboutView");
        document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
        aboutView?.classList.add("active");
        requestAnimationFrame(() => target?.scrollIntoView({behavior:"smooth", block:"start"}));
      });
    });


    const savedTheme = localStorage.getItem("ttt_theme") || "modern";
    document.documentElement.dataset.theme = savedTheme;

    const syncThemeButtons = () => {
      panel.querySelectorAll("[data-theme-choice]").forEach(choice => {
        const active = choice.dataset.themeChoice === document.documentElement.dataset.theme;
        choice.classList.toggle("active", active);
        choice.setAttribute("aria-pressed", active ? "true" : "false");
      });
    };

    panel.querySelectorAll("[data-theme-choice]").forEach(choice => {
      choice.addEventListener("click", () => {
        const theme = choice.dataset.themeChoice;
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("ttt_theme", theme);
        syncThemeButtons();
      });
    });
    syncThemeButtons();

    window.TTTMenu = { open: openMenu, close: closeMenu };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMenu, {once:true});
  } else {
    initMenu();
  }
})();