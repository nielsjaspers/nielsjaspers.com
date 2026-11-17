// light/dark toggle, desktop keyboard scrolling and the copyright year.
// the inline head script sets the first theme.
(function () {
    var root = document.documentElement;
    var system = matchMedia("(prefers-color-scheme: dark)");

    function saved() {
        try {
            var t = localStorage.getItem("theme");
            return t === "dark" || t === "light" ? t : null;
        } catch (e) {
            return null;
        }
    }

    function apply(theme) {
        root.setAttribute("data-theme", theme);
        document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
            btn.setAttribute("aria-label", theme === "dark" ? "switch to light mode" : "switch to dark mode");
        });
    }

    system.addEventListener("change", function (e) {
        if (!saved()) apply(e.matches ? "dark" : "light");
    });

    // a page restored from the back/forward cache keeps the theme it was left with.
    addEventListener("pageshow", function (e) {
        if (e.persisted) apply(saved() || (system.matches ? "dark" : "light"));
    });

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            apply(next);
            try {
                localStorage.setItem("theme", next);
            } catch (e) {}
        });
    });

    apply(root.getAttribute("data-theme"));

    // on desktop only the content pane scrolls, so a scroll key pressed while
    // nothing has focus would do nothing. hand focus to the pane first.
    var pane = document.querySelector(".sheet, .post-pane");
    var scrollKeys = ["PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp", " "];
    document.addEventListener("keydown", function (e) {
        if (!pane || document.activeElement !== document.body || scrollKeys.indexOf(e.key) < 0) return;
        if (getComputedStyle(pane).overflowY !== "auto") return;
        pane.focus({ preventScroll: true });
    });

    var year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = year;
    });
})();
