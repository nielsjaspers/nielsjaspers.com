// light/dark toggle and the copyright year. the inline head script sets the first theme.
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

    function label(theme) {
        document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
            btn.setAttribute("aria-label", theme === "dark" ? "switch to light mode" : "switch to dark mode");
        });
    }

    system.addEventListener("change", function (e) {
        if (saved()) return;
        var t = e.matches ? "dark" : "light";
        root.setAttribute("data-theme", t);
        label(t);
    });

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            root.setAttribute("data-theme", next);
            label(next);
            try {
                localStorage.setItem("theme", next);
            } catch (e) {}
        });
    });

    label(root.getAttribute("data-theme"));

    var year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = year;
    });
})();
