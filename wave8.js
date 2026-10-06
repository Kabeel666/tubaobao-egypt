/* Wave 8: products code shots → filtered colors, sheets order note, install checklist,
   homepage kickers, empty-section cleanup. Loaded last so it runs after all other hooks. */
(function () {
  function isAr() { return typeof lang !== "undefined" && lang === "ar"; }
  function isZh() { return typeof lang !== "undefined" && lang === "zh"; }
  function L(ar, en, zh) { return isAr() ? ar : (isZh() ? (zh || en) : en); }
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function findRow(code) {
    if (typeof F === "undefined") return null;
    for (var i = 0; i < F.length; i++) if (F[i][0] === code) return F[i];
    return null;
  }
  function famLabel(k) {
    var m = { wood: ["خشب", "Wood", "木纹"], marble: ["رخام", "Marble", "大理石"], ceramic: ["سيراميك", "Ceramic", "陶瓷"],
      chipboard: ["شيبورد/WPC", "Chipboard/WPC", "刨花板/WPC"], textile: ["كتان", "Linen", "亚麻"], solid: ["ساده", "Solid", "纯色"], leather: ["جلد", "Leather", "皮革"] };
    return m[k] ? L(m[k][0], m[k][1], m[k][2]) : "";
  }

  /* ---------- tap a code → Colors, filtered to its family, scrolled to the card ---------- */
  window.tbbJumpToCode = function (code) {
    var row = findRow(code);
    try { fam = row ? row[1] : "all"; } catch (e) {}
    window.__tbbHitCode = code;
    setTab("colors");
    var tries = 0;
    function seek() {
      var page = $("p-colors");
      var hit = null;
      if (page) page.querySelectorAll(".card .code").forEach(function (b) { if (!hit && b.textContent.trim() === code) hit = b.closest(".card"); });
      if (hit) {
        hit.classList.add("code-hit");
        hit.scrollIntoView({ block: "center" });
        setTimeout(function () {
          if (!document.contains(hit) && tries++ < 6) { seek(); return; }
          setTimeout(function () { hit.classList.remove("code-hit"); }, 2600);
        }, 350);
        return;
      }
      if (++tries < 12) setTimeout(seek, 150);
    }
    setTimeout(seek, 250);
  };
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-code-jump]");
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    window.tbbJumpToCode(el.getAttribute("data-code-jump"));
  }, true);

  /* ---------- Products: dense catalog shots by code ---------- */
  function productShots() {
    var page = $("p-products");
    if (!page || !window.CODE_MEDIA) return;
    var wrap = page.querySelector(".wrap") || page;
    page.querySelectorAll(".product-shots, .shots-title").forEach(function (n) { if (!n.closest(".code-shots-block")) n.remove(); });
    if (wrap.querySelector(".code-shots") && wrap.getAttribute("data-w8") === String(lang)) return;
    wrap.querySelectorAll(".code-shots-block").forEach(function (n) { n.remove(); });
    var codes = Object.keys(CODE_MEDIA).sort();
    var items = [];
    codes.forEach(function (code) {
      var m = CODE_MEDIA[code];
      if (!m) return;
      var vs = (m.variants && m.variants.length) ? m.variants : (m.primary ? [{ path: m.primary, width: "" }] : []);
      vs.forEach(function (v) {
        if (!v.path) return;
        items.push({ code: code, src: (typeof fileUrl === "function" ? fileUrl(v.path) : v.path), w: v.width });
      });
    });
    if (!items.length) return;
    var block = document.createElement("div");
    block.className = "code-shots-block";
    var h = '<div class="code-shots-head"><h3 class="shots-title">' + L("لقطات الكتالوج بالكود", "Catalog shots by code", "按编码的图册实拍") + "</h3>";
    h += '<p class="note">' + L("صور كتالوج حقيقية من المصنع. دوس على الكود يفتح التشطيبات على نفس العائلة.",
      "Real catalog photos from the factory. Tap a code to open Finishes on its family.",
      "工厂真实图册照片。点编码，在花色库中打开同一系列。") + "</p></div>";
    h += '<div class="code-shots">';
    items.forEach(function (it) {
      var row = findRow(it.code);
      var fl = row ? famLabel(row[1]) : "";
      var w = it.w ? (it.w + " cm") : "";
      var alt = it.code + (w ? " · " + w : "");
      h += '<button type="button" class="code-shot" data-code-jump="' + esc(it.code) + '" aria-label="' + esc(alt + (fl ? " — " + fl : "")) + '">';
      h += '<img src="' + esc(it.src) + '" alt="' + esc(alt) + '" width="400" height="300" loading="lazy" decoding="async"/>';
      h += '<span class="code-shot-cap"><b>' + esc(it.code) + "</b><small>" + esc([fl, w].filter(Boolean).join(" · ")) + "</small></span></button>";
    });
    h += "</div>";
    block.innerHTML = h;
    wrap.appendChild(block);
    wrap.setAttribute("data-w8", String(lang));
  }

  /* Home popular cards → filtered colors */
  function popJump() {
    document.querySelectorAll("#p-home .pop-card").forEach(function (c) {
      if (c.hasAttribute("data-code-jump")) return;
      var b = c.querySelector(".pop-meta b");
      if (!b) return;
      c.setAttribute("data-code-jump", b.textContent.trim());
      c.removeAttribute("data-tab");
      c.onclick = null;
    });
  }

  /* ---------- Sheets: how-to-order note ---------- */
  function sheetsNote() {
    var page = $("p-sheets");
    if (!page) return;
    var wrap = page.querySelector(".wrap") || page;
    var old = wrap.querySelector(".order-note");
    if (old && old.getAttribute("data-lang") === String(lang)) return;
    if (old) old.remove();
    var box = document.createElement("aside");
    box.className = "order-note";
    box.setAttribute("data-lang", String(lang));
    box.innerHTML = '<div><b>' + L("إزاي تطلب لوح", "How to order a sheet", "如何订购大板") + "</b><ol>" +
      "<li>" + L("اختار الكود من القائمة تحت (مثلاً 507).", "Pick the code below (for example 507).", "在下面选好编码（例如 507）。") + "</li>" +
      "<li>" + L("ابعت الكود وعدد الألواح أو مساحة الحائط بالمتر.", "Send the code and the sheet count, or the wall area in m².", "发来编码和张数，或墙面面积（平方米）。") + "</li>" +
      "<li>" + L("المصنع يأكد المخزون والميعاد ويرد عليك.", "The factory confirms stock and timing, then replies.", "工厂确认库存和时间后回复。") + "</li>" +
      "</ol><small>" + L("كل لوح 1.22 × 2.80 م · 5 مم · ≈ 3.42 م²", "Each sheet 1.22 × 2.80 m · 5 mm · ≈ 3.42 m²", "每张 1.22 × 2.80 米 · 5 毫米 · 约 3.42 平方米") + "</small></div>" +
      '<div class="order-note-act"><button type="button" class="btn gold" data-wa-proxy="1">' + L("اطلب على واتساب", "Order on WhatsApp", "WhatsApp 下单") + "</button>" +
      '<button type="button" class="btn ghost" data-tab="contact">' + L("صفحة التواصل", "Contact page", "联系页面") + "</button></div>";
    var lead = wrap.querySelector(".lead");
    if (lead && lead.nextSibling) wrap.insertBefore(box, lead.nextSibling); else wrap.appendChild(box);
    box.querySelectorAll("[data-tab]").forEach(function (el) { el.onclick = function (e) { e.preventDefault(); setTab(el.dataset.tab); }; });
    wrap.querySelectorAll(".grid4 > .card").forEach(function (c) { c.classList.add("sheet-card"); });
  }

  /* ---------- Install: materials checklist ---------- */
  function installChecklist() {
    var page = $("p-install");
    if (!page) return;
    var wrap = page.querySelector(".wrap") || page;
    var old = wrap.querySelector(".mat-list");
    if (old && old.getAttribute("data-lang") === String(lang)) return;
    if (old) old.remove();
    var rows = [
      [L("فوم بورد 5 مم", "5 mm foam board", "5 mm 发泡垫"), L("لتسوية خفيفة لو الحائط مش مستوي تمامًا.", "For light levelling when the wall is not fully flat.", "墙面不够平整时用于轻度找平。")],
      [L("لاصق PVC", "PVC adhesive", "PVC 专用胶"), L("لاصق مناسب لـ PVC على سطح نظيف وجاف.", "A PVC-rated adhesive on a clean, dry surface.", "适用于 PVC，涂在干净干燥的基面上。")],
      [L("زوايا وقطع إنهاء", "Corner and end trims", "阴阳角与收口条"), L("للزوايا الداخلية والخارجية وحواف الحائط.", "For inside and outside corners and wall edges.", "用于内外墙角和墙面边缘。")],
      [L("وزرة / شريط سقف", "Skirting / ceiling strip", "踢脚线 / 顶角线"), L("يقفل الفاصل تحت وفوق.", "Closes the gap at the bottom and top.", "封住上下两端的缝隙。")],
      [L("منشار سنان رفيعة ومتر وميزان", "Fine-tooth saw, tape and level", "细齿锯、卷尺和水平尺"), L("قص نظيف وخطوط رأسية مظبوطة.", "Clean cuts and true vertical lines.", "切口整齐，竖线垂直。")],
      [L("مسامير أو كلبسات (حسب الحالة)", "Pins or clips (where needed)", "钉子或卡扣（视情况）"), L("لتثبيت إضافي في السقف أو الأعمدة.", "Extra hold on ceilings or columns.", "吊顶或包柱时额外固定。")]
    ];
    var box = document.createElement("section");
    box.className = "mat-list";
    box.setAttribute("data-lang", String(lang));
    var h = "<h3>" + L("خامات التركيب", "Materials checklist", "安装材料清单") + "</h3>";
    h += '<p class="note">' + L("جهّز دول قبل ما تبدأ. اسأل المصنع عن الإكسسوارات المناسبة للكود.", "Have these ready before you start. Ask the factory which accessories suit your code.", "开工前备好这些。配件是否适合您的编码，可以问工厂。") + "</p><ul>";
    rows.forEach(function (r) { h += '<li><span class="mat-tick" aria-hidden="true">&#10003;</span><div><b>' + r[0] + "</b><small>" + r[1] + "</small></div></li>"; });
    h += '</ul><div class="center-actions"><button type="button" class="btn navy" data-tab="access">' + L("الإكسسوارات", "Accessories", "配件") + "</button></div>";
    box.innerHTML = h;
    var steps = wrap.querySelector(".steps");
    if (steps && steps.nextSibling) wrap.insertBefore(box, steps.nextSibling); else wrap.appendChild(box);
    box.querySelectorAll("[data-tab]").forEach(function (el) { el.onclick = function (e) { e.preventDefault(); setTab(el.dataset.tab); }; });
  }

  /* ---------- Homepage: kicker labels + cleanup ---------- */
  function homeKickers() {
    var home = $("p-home");
    if (!home) return;
    var map = [
      ["#home-families", L("المنتجات", "Products", "产品")],
      ["#home-popular", L("أكواد", "Codes", "编码")],
      [".why-band", L("لماذا المصنع", "Why us", "为什么选我们")],
      ["#home-uses", L("أماكن", "Places", "空间")],
      ["#home-tools", L("أدوات", "Tools", "工具")],
      ["#home-order", L("الطلب", "Ordering", "下单")],
      [".search-sec", L("بحث", "Search", "搜索")],
      ["#home-factory", L("المصنع", "Factory", "工厂")],
      ["#home-videos", L("حركة", "Motion", "动态")],
      ["#home-faq", L("أسئلة", "FAQ", "问答")],
      [".contact-teaser", L("تواصل", "Contact", "联系")]
    ];
    /* number kickers in real DOM order, whatever order the sections render in */
    map = map.map(function (m) { return [m[0], m[1], home.querySelector(m[0])]; }).filter(function (m) { return m[2]; });
    map.sort(function (a, b) { return (a[2].compareDocumentPosition(b[2]) & 4) ? -1 : 1; });
    var n = 0;
    map.forEach(function (m) {
      var sec = m[2];
      if (!sec) return;
      var h2 = sec.querySelector("h2");
      if (!h2) return;
      n++;
      var label = (n < 10 ? "0" : "") + n + " · " + m[1];
      var k = sec.querySelector(".sec-kick");
      if (k && k.getAttribute("data-label") === label) return;
      if (k) k.remove();
      k = document.createElement("span");
      k.className = "sec-kick";
      k.setAttribute("data-label", label);
      k.textContent = label;
      h2.parentNode.insertBefore(k, h2);
    });
    var g = $("homeSearchGrid");
    if (g) g.hidden = !g.children.length;
  }

  /* hide genuinely empty grids/sections anywhere */
  function killEmpty() {
    document.querySelectorAll("#app .page.on .grid3, #app .page.on .grid4, #app .page.on .photo-grid").forEach(function (g) {
      if (g.id === "homeSearchGrid") return;
      var empty = !g.children.length;
      if (empty) g.hidden = true; else if (g.hidden) g.hidden = false;
    });
    document.querySelectorAll("#app img").forEach(function (im) {
      if (im.__w8err) return;
      im.__w8err = 1;
      im.addEventListener("error", function () {
        var card = im.closest(".photo-card, .code-shot, .pop-card");
        if (card) card.hidden = true; else im.hidden = true;
      });
    });
  }

  function run() {
    try { productShots(); } catch (e) {}
    try { popJump(); } catch (e) {}
    try { sheetsNote(); } catch (e) {}
    try { installChecklist(); } catch (e) {}
    try { homeKickers(); } catch (e) {}
    try { killEmpty(); } catch (e) {}
  }
  var _render = window.render;
  if (typeof _render === "function") {
    window.render = function () { _render.apply(this, arguments); setTimeout(run, 0); setTimeout(run, 60); };
  }
  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) { _setTab(id); setTimeout(run, 0); setTimeout(run, 60); };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(run, 0); });
  else setTimeout(run, 0);
  setTimeout(run, 150);
})();
