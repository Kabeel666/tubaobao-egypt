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


  window.finishFam = function (x) {
    var key = (typeof x === "string") ? x : ((x && x[1]) || "");
    var zh = { wood: "木材", marble: "大理石", leather: "皮革", textile: "亚麻", ceramic: "陶瓷", chipboard: "刨花板", solid: "纯色", sheet: "板材" };
    var en = { wood: "Wood", marble: "Marble", leather: "Leather", textile: "Linen", ceramic: "Ceramic", chipboard: "Chipboard", solid: "Solid", sheet: "Sheet" };
    var ar = { wood: "خشب", marble: "رخام", leather: "جلد", textile: "كتان", ceramic: "سيراميك", chipboard: "شيبورد", solid: "ساده", sheet: "لوح" };
    var d = (typeof window.t === "function") ? window.t() : null;
    if (typeof lang !== "undefined" && lang === "zh") return zh[key] || key;
    if (d && d[key]) return d[key];
    var bag = (typeof lang !== "undefined" && lang === "ar") ? ar : en;
    return bag[key] || key;
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
    applyBrandChrome(d);
  }

  /* Brand name follows the UI language: EN TuBaoBao Egypt · AR توباباو مصر · ZH 埃及兔宝宝 */
  var BRAND = { en: "TuBaoBao Egypt", ar: "توباباو مصر", zh: "埃及兔宝宝" };
  var META_DESC = {
    en: "TuBaoBao Egypt — interior PVC and WPC wall finishes from the 6th of October factory, Plot 37. Fluted slats, 122 × 280 sheets and trims by code. The sample decides the colour; prices on request.",
    ar: "توباباو مصر — تشطيبات حوائط داخلية PVC وWPC من مصنع 6 أكتوبر، قطعة 37. شرائح تجاليد وألواح 122 × 280 وإكسسوارات بالكود. العيّنة هي المرجع للون، والأسعار عند الطلب.",
    zh: "埃及兔宝宝——位于十月六日城 37 号地块的室内 PVC 与 WPC 墙面饰面工厂。格栅护墙条、122 × 280 大板与配件，按编码供货。颜色以样品为准，价格询价。"
  };
  window.brandName = function () { return BRAND[lang] || BRAND.en; };
  function setMeta(sel, attr, val) {
    var el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  }
  function applyBrandChrome(d) {
    var name = BRAND[lang] || BRAND.en;
    setMeta('meta[name="description"]', "content", META_DESC[lang] || META_DESC.en);
    setMeta('meta[property="og:title"]', "content", document.title);
    setMeta('meta[property="og:site_name"]', "content", name);
    setMeta('meta[property="og:description"]', "content", META_DESC[lang] || META_DESC.en);
    setMeta('meta[property="og:locale"]', "content", lang === "ar" ? "ar_EG" : (lang === "zh" ? "zh_CN" : "en_US"));
    document.querySelectorAll("img.brand-logo, img.hero-photo").forEach(function (img) { img.setAttribute("alt", name); });
    var fab = document.getElementById("fabWa");
    if (fab) fab.setAttribute("aria-label", lang === "ar" ? "واتساب — راسل المصنع" : (lang === "zh" ? "WhatsApp — 联系工厂" : "WhatsApp — message the factory"));
  }

  /* ?lang=ar|zh|en deep link (shareable per-language URL) */
  try {
    var qp = new URLSearchParams(location.search).get("lang");
    if (qp === "ar" || qp === "en" || qp === "zh") { lang = qp; saveLang(qp); }
  } catch (e) {}

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
