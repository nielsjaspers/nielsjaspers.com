// desktop keyboard scrolling and the copyright year.
(function () {
    // on desktop only the content pane scrolls, so a scroll key pressed while
    // focus is outside it would do nothing.
    // hand focus to the pane first.
    var pane = document.querySelector(".sheet, .post-pane");
    var scrollKeys = ["PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp", " "];
    document.addEventListener("keydown", function (e) {
        var active = document.activeElement;
        if (!pane || pane.contains(active) || scrollKeys.indexOf(e.key) < 0) return;
        if (getComputedStyle(pane).overflowY !== "auto") return;
        pane.focus({ preventScroll: true });
    });

    var year = String(new Date().getFullYear());
    document.querySelectorAll("[data-year]").forEach(function (el) {
        el.textContent = year;
    });
})();
