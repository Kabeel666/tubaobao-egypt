/* Triple language: EN | عربي | 中文. Default EN. Persist in localStorage. */
(function () {
  var FAM_ZH = { wood: "木材", marble: "大理石", leather: "皮革", textile: "亚麻", ceramic: "陶瓷", chipboard: "刨花板", solid: "纯色", sheet: "板材" };

  function saveLang(v) {
    try { localStorage.setItem("tbb_lang", v); } catch (e) {}
  }

  window.tabLabel = function (row) {
    if (!row) return "";
    if (lang === "ar") return row[1];
    if (lang === "zh") return row[3] || row[2] || row[1];
    return row[2] || row[1];
  };

  window.uiText = function (ar, en, zh) {
    if (lang === "ar") return ar;
    if (lang === "zh") return (zh != null && zh !== "") ? zh : en;
    return en;
  };

  if (typeof finishLabel === "function" || typeof window.finishLabel === "function") {
    window.finishLabel = function (x) {
      if (lang === "ar") return x[2];
      var en = x[3] || x[2] || "";
      if (lang !== "zh") return en;
      var fam = x[1] || "";
      return en + (FAM_ZH[fam] ? " · " + FAM_ZH[fam] : "");
    };
  }

  window.setSiteLang = function (next) {
    if (next !== "ar" && next !== "en" && next !== "zh") next = "en";
    lang = next;
    saveLang(next);
    if (typeof render === "function") render();
    syncLangSwitch();
  };

  function syncLangSwitch() {
    var box = document.getElementById("langSwitch");
    if (!box) return;
    box.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.classList.toggle("on", btn.getAttribute("data-lang") === lang);
    });
    var d = (typeof t === "function") ? t() : (lang === "ar" ? AR : (lang === "zh" && typeof ZH !== "undefined" ? ZH : EN));
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.documentElement.dir = d.dir || (lang === "ar" ? "rtl" : "ltr");
    document.body.className = lang === "ar" ? "" : (lang === "zh" ? "zh en" : "en");
    if (d && d.brand) document.title = d.brand + " — " + (d.sub || "");
  }

  function wire() {
    var box = document.getElementById("langSwitch");
    if (!box) return;
    box.onclick = function (e) {
      var b = e.target.closest("[data-lang]");
      if (!b) return;
      setSiteLang(b.getAttribute("data-lang"));
      setTimeout(function () {
        if (typeof window.__tbbEnhance === "function") window.__tbbEnhance();
      }, 0);
    };
    syncLangSwitch();
  }

  window.__tbbSyncLang = syncLangSwitch;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", wire);
  else wire();
  setTimeout(wire, 0);
})();
