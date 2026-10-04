(function () {
  var W = window.WA || "";
  var PRIMARY = window.PRIMARY || ["home", "products", "colors", "trade", "factory", "contact"];

  function $(id) { return document.getElementById(id); }
  function t() { return (typeof lang !== "undefined" && lang === "en") ? EN : AR; }

  var moreOpen = false, menuOpen = false;

  function wireWa() {
    ["hdrWa", "footWa", "fabWa"].forEach(function (id) {
      var el = $(id);
      if (!el) return;
      el.href = W;
      if (id === "hdrWa") el.textContent = (lang === "ar" ? "تواصل" : "Contact");
    });
  }

  function buildNav() {
    var d = t();
    var primaryNav = $("primaryNav");
    var moreTabs = $("moreTabs");
    var moreWrap = $("moreWrap");
    var mobileMenu = $("mobileMenu");
    var tabs = $("tabs");
    if (tabs && tabs.parentElement) tabs.parentElement.style.display = "none";

    if (!primaryNav) return;
    var primary = TABS.filter(function (x) { return PRIMARY.indexOf(x[0]) >= 0; });
    var secondary = TABS.filter(function (x) { return PRIMARY.indexOf(x[0]) < 0; });
    var secondaryOn = secondary.some(function (x) { return x[0] === tab; });

    primaryNav.innerHTML = primary.map(function (x) {
      return '<button type="button" data-tab="' + x[0] + '" class="' + (tab === x[0] ? "on" : "") + '">' + (lang === "ar" ? x[1] : x[2]) + "</button>";
    }).join("") +
      '<button type="button" class="more-toggle' + (moreOpen || secondaryOn ? " on" : "") + '" id="moreBtn" aria-expanded="' + (moreOpen ? "true" : "false") + '">' + (d.more || (lang === "ar" ? "المزيد" : "More")) + "</button>";

    if (moreTabs) {
      moreTabs.innerHTML = secondary.map(function (x) {
        return '<button type="button" data-tab="' + x[0] + '" class="' + (tab === x[0] ? "on" : "") + '">' + (lang === "ar" ? x[1] : x[2]) + "</button>";
      }).join("");
    }
    if (moreWrap) moreWrap.classList.toggle("open", moreOpen);

    if (mobileMenu) {
      var secTitle = lang === "ar" ? "أقسام إضافية" : "More sections";
      mobileMenu.innerHTML =
        '<div class="m-sec">' + (lang === "ar" ? "الأساسي" : "Primary") + "</div>" +
        primary.map(function (x) {
          return '<button type="button" data-tab="' + x[0] + '" class="' + (tab === x[0] ? "on" : "") + '">' + (lang === "ar" ? x[1] : x[2]) + "</button>";
        }).join("") +
        '<div class="m-sec">' + secTitle + "</div>" +
        secondary.map(function (x) {
          return '<button type="button" data-tab="' + x[0] + '" class="' + (tab === x[0] ? "on" : "") + '">' + (lang === "ar" ? x[1] : x[2]) + "</button>";
        }).join("") +
        '<a class="m-wa" href="' + W + '" target="_blank" rel="noopener">' + (lang === "ar" ? "تواصل" : "Contact") + "</a>";
      mobileMenu.classList.toggle("open", menuOpen);
      mobileMenu.hidden = !menuOpen;
    }

    var burger = $("burger");
    if (burger) burger.setAttribute("aria-expanded", menuOpen ? "true" : "false");

    document.querySelectorAll("#primaryNav [data-tab], #moreTabs [data-tab], #mobileMenu [data-tab]").forEach(function (el) {
      el.onclick = function (e) {
        e.preventDefault();
        menuOpen = false;
        if (PRIMARY.indexOf(el.dataset.tab) >= 0) moreOpen = false;
        else moreOpen = true;
        if (typeof setTab === "function") setTab(el.dataset.tab);
        else location.hash = el.dataset.tab;
      };
    });

    var moreBtn = $("moreBtn");
    if (moreBtn) {
      moreBtn.onclick = function (e) {
        e.preventDefault();
        moreOpen = !moreOpen;
        if (moreWrap) moreWrap.classList.toggle("open", moreOpen);
        moreBtn.classList.toggle("on", moreOpen);
        moreBtn.setAttribute("aria-expanded", moreOpen ? "true" : "false");
      };
    }
  }

  function injectContactPhone() {
    document.querySelectorAll("#app .note, #app .lead, #app details p").forEach(function (el) {
      if (/سيُضاف|غير ظاهر|empty on purpose|To be added later|phone is empty/i.test(el.textContent || "")) {
        el.textContent = (lang === "ar")
          ? "للتواصل استخدم زر «تواصل» في القائمة أو زر واتساب."
          : "Use the Contact button in the menu, or the WhatsApp button.";
      }
    });
  }

  function enhance() {
    wireWa();
    buildNav();
    injectContactPhone();
  }

  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) {
      _setTab(id);
      setTimeout(enhance, 0);
    };
  }

  var langBtn = $("langBtn");
  if (langBtn) {
    var prev = langBtn.onclick;
    langBtn.onclick = function () {
      if (typeof prev === "function") prev();
      setTimeout(enhance, 0);
    };
  }

  var burger = $("burger");
  if (burger) {
    burger.onclick = function () {
      menuOpen = !menuOpen;
      var mobileMenu = $("mobileMenu");
      if (mobileMenu) {
        mobileMenu.classList.toggle("open", menuOpen);
        mobileMenu.hidden = !menuOpen;
      }
      burger.setAttribute("aria-expanded", menuOpen ? "true" : "false");
      if (menuOpen) buildNav();
    };
  }

  setTimeout(enhance, 0);
  setTimeout(enhance, 50);
})();
