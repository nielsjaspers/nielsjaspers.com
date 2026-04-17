/* theme toggle · light / dark. stroke icons, currentColor. */
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle-btn");
    const icon = document.getElementById("theme-toggle-icon");
    if (!toggleBtn || !icon) return;

    const MOON =
        '<path d="M20 14.5a7 7 0 01-9.5-9.5 7.5 7.5 0 109.5 9.5z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"/>';

    const SUN =
        '<g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">' +
        '<circle cx="12" cy="12" r="3.8"/>' +
        '<path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4l1.4-1.4M17 7l1.4-1.4"/>' +
        "</g>";

    function setTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        // show the icon of the OTHER theme · i.e. the target of the click.
        icon.innerHTML = theme === "dark" ? SUN : MOON;
        toggleBtn.setAttribute(
            "aria-label",
            theme === "dark" ? "switch to light mode" : "switch to dark mode"
        );
    }

    function getPreferredTheme() {
        return (
            localStorage.getItem("theme") ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light")
        );
    }

    toggleBtn.addEventListener("click", function () {
        const current =
            document.documentElement.getAttribute("data-theme") === "dark"
                ? "dark"
                : "light";
        const next = current === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
    });

    setTheme(getPreferredTheme());
});
