/* footer copyright line · updates elements whose id starts with "copyright" */
document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll(
        'footer.site-footer [id^="copyright"]'
    );
    if (targets.length === 0) return;
    const year = new Date().getFullYear();
    targets.forEach(function (el) {
        el.innerHTML = "niels jaspers \u00a9 " + year;
    });
});
