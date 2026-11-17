// posts: reading progress through the article, and the section you are in.
(function () {
    var article = document.querySelector("[data-post]");
    if (!article) return;

    var bars = Array.prototype.slice.call(document.querySelectorAll("[data-progress-bar]"));
    var pct = document.querySelector("[data-progress-pct]");
    var links = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
    var headings = links.map(function (a) {
        return document.getElementById(a.getAttribute("href").slice(1));
    });

    var pane = document.querySelector(".post-pane");

    // On desktop the article scrolls inside its pane; on phones the page scrolls.
    function view() {
        var y = pane && getComputedStyle(pane).overflowY;
        if (y === "auto" || y === "scroll") return { top: pane.getBoundingClientRect().top, height: pane.clientHeight };
        return { top: 0, height: innerHeight };
    }

    function update() {
        // 0 when the article top reaches the view top, 1 when its end is in view.
        var v = view();
        var box = article.getBoundingClientRect();
        var span = box.height - v.height;
        var x = span > 0 ? Math.min(1, Math.max(0, (v.top - box.top) / span)) : 1;
        bars.forEach(function (b) { b.style.transform = "scaleX(" + x + ")"; });
        if (pct) pct.textContent = Math.round(x * 100) + "%";

        var current = -1;
        headings.forEach(function (h, i) {
            if (h && h.getBoundingClientRect().top - v.top < v.height * 0.35) current = i;
        });
        links.forEach(function (a, i) {
            if (i === current) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
            a.classList.toggle("is-read", i < current);
        });
    }

    // Scroll events from the pane do not bubble, so listen in the capture phase.
    addEventListener("scroll", update, { capture: true, passive: true });
    addEventListener("resize", update);
    update();
})();
