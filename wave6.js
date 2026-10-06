/* Wave 6: a11y labels, ZH More-menu safety, soft caption cleanup hooks.
   Loaded after wave4.js / before boot.js so first paint is ready. */
(function () {
  function isAr() { return typeof lang !== "undefined" && lang === "ar"; }
  function isZh() { return typeof lang !== "undefined" && lang === "zh"; }
  function L(ar, en, zh) { return isAr() ? ar : (isZh() ? (zh || en) : en); }

  /* Ensure More-tab ZH labels exist even if an older splice missed index 3 */
  function patchTabZh() {
    if (typeof TABS === "undefined") return;
    var map = {
      specs: "规格", calc: "计算器", compare: "对比", access: "配件",
      faq: "问答", gallery: "图库", install: "安装", videos: "视频",
      looks: "花色与饰面", chooser: "如何选择", viz: "3D 预览",
      care: "保养", trade: "经销", export: "出口", pack: "包装",
      gov: "供货", soon: "即将", about: "关于", projects: "项目",
      contact: "联系", sheets: "大板", sizes: "尺寸", spaces: "空间",
      factory: "工厂", home: "首页", products: "产品", colors: "花色"
    };
    TABS.forEach(function (row) {
      if (row && map[row[0]] && !row[3]) row[3] = map[row[0]];
    });
  }
  patchTabZh();

  function a11y() {
    var fab = document.getElementById("fabWa");
    if (fab) {
      fab.setAttribute("aria-label", L("واتساب — تواصل مع المصنع", "WhatsApp — message the factory", "WhatsApp — 联系工厂"));
    }
    var langBox = document.getElementById("langSwitch");
    if (langBox) {
      langBox.setAttribute("role", "group");
      langBox.setAttribute("aria-label", L("اللغة", "Language", "语言"));
      langBox.querySelectorAll("[data-lang]").forEach(function (btn) {
        var code = btn.getAttribute("data-lang");
        var label = code === "ar" ? "العربية" : (code === "zh" ? "中文" : "English");
        btn.setAttribute("aria-label", label);
        btn.setAttribute("aria-pressed", btn.classList.contains("on") ? "true" : "false");
      });
    }
    var hdr = document.getElementById("hdrWa");
    if (hdr) hdr.setAttribute("aria-label", L("تواصل عبر واتساب", "Contact on WhatsApp", "通过 WhatsApp 联系"));
    var burger = document.getElementById("burger");
    if (burger && !burger.getAttribute("aria-label")) burger.setAttribute("aria-label", L("القائمة", "Menu", "菜单"));
  }

  /* Soften leftover apologetic notes that still say “empty on purpose” etc. */
  function softenCopy() {
    document.querySelectorAll("#app .note, #app .lead, #app figcaption, #app .honest-box p").forEach(function (el) {
      var s = el.textContent || "";
      if (/ليست سابقة أعمال ومش أسماء عملاء|not past projects and not client names/i.test(s) && s.length > 120) {
        /* leave long leads alone */
      }
      if (/empty on purpose|To be added later|phone is empty|سيُضاف لاحقًا/i.test(s)) {
        el.textContent = L(
          "للتواصل استخدم زر «تواصل» أو واتساب.",
          "Use the Contact button or WhatsApp.",
          "请用「联系」按钮或 WhatsApp。"
        );
      }
    });
  }

  function run() {
    patchTabZh();
    a11y();
    softenCopy();
  }

  var _render = window.render;
  if (typeof _render === "function") {
    window.render = function () {
      _render.apply(this, arguments);
      setTimeout(run, 0);
    };
  }
  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) {
      _setTab(id);
      setTimeout(run, 0);
    };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(run, 0); });
  else setTimeout(run, 0);
  setTimeout(run, 80);
})();
