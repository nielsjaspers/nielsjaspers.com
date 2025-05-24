document.addEventListener("DOMContentLoaded", function () {
  const copyrightSpans = document.querySelectorAll(
    'footer.site-footer [id^="copyright"]'
  );
  if (copyrightSpans.length > 0) {
    const year = new Date().getFullYear();
    copyrightSpans.forEach(function (el) {
      el.textContent = `niels jaspers \u00a9 ${year}`;
    });
  }
});