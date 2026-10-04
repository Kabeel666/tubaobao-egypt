/* Tasteful motion helpers. CSS carries the animation; this only mounts the marquee and counts plain integers. */
(function () {
  var gen = 0;
  function phrases() {
    var ar = (typeof lang === "undefined" || lang === "ar");
    if (ar) {
      return ["خشب","رخام","سيراميك لوك","شيبورد","WPC","كتان","جلد","ساده","ألواح 5مم","فلوت 13.4","محلات","مولات","مكاتب","فنادق","كافيهات","عيادات","مدارس","صيدليات","شقق","مكتبات","أعمدة","أسقف داخلية","معاينة 3D","اختار إيه"];
    }
    return ["Wood","Marble","Ceramic look","Chipboard","WPC","Linen","Leather","Solid","5mm sheets","13.4 flute","Shops","Malls","Offices","Hotels","Cafés","Clinics","Schools","Pharmacies","Apartments","Libraries","Columns","Interior ceilings","3D preview","Chooser"];
  }
  function countUp(token) {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll("#p-home .stat b").forEach(function (b) {
      var raw = (b.getAttribute("data-count") || b.textContent || "").trim();
      if (!/^\d+$/.test(raw)) return;
      var target = parseInt(raw, 10);
      b.setAttribute("data-count", String(target));
      var start = performance.now();
      var dur = 900;
      if (b._raf) cancelAnimationFrame(b._raf);
      b.textContent = "0";
      function step(now) {
        if (token !== gen) return;
        var t = Math.min(1, (now - start) / dur);
        var eased = 1 - Math.pow(1 - t, 3);
        b.textContent = String(Math.round(target * eased));
        if (t < 1) b._raf = requestAnimationFrame(step);
        else b.textContent = String(target);
      }
      b._raf = requestAnimationFrame(step);
    });
  }
  function mount() {
    var home = document.getElementById("p-home");
    if (!home) return;
    var token = ++gen;
    var old = home.querySelector(".family-marquee");
    if (old) old.remove();
    countUp(token);
  }
  function hook() {
    if (window.__tbbMotionHook) return;
    window.__tbbMotionHook = 1;
    var r = window.render;
    if (typeof r === "function") {
      window.render = function () {
        r();
        setTimeout(mount, 0);
      };
    }
    setTimeout(mount, 0);
    setTimeout(mount, 160);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", hook);
  else hook();
})();

window.PRIMARY = ["home", "products", "colors", "chooser", "viz", "contact"];

