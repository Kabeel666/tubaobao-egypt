/* Wave 12: motion back on the editorial homepage (code ticker, GIF loops, video reel, count-up, reveal),
   knowledge tabs (specs from catalog data, install, care, comparison, packing), old homepage sections restored below.
   Imagery is labelled as application ideas / illustrations. No prices. */
(function () {
  function cur() { return (typeof lang !== "undefined" && (lang === "ar" || lang === "zh")) ? lang : "en"; }
  function L(en, ar, zh) { var l = cur(); return l === "ar" ? ar : (l === "zh" ? zh : en); }
  function arr(n) { try { return eval("typeof " + n + "!=='undefined'?" + n + ":[]"); } catch (e) { return []; } }
  function num(n, k, t) { return '<p class="kj-num"><span>' + n + "</span>" + k + '</p><h2 class="kj-h">' + t + "</h2>"; }
  var RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var st = { reel: 0, know: "specs" };

  function ticker() {
    var F0 = arr("F"), items = [];
    F0.slice(0, 40).forEach(function (x) { if (x && x[0]) items.push('<span><i style="background:' + (x[4] || "#c8a25a") + '"></i>' + x[0] + "</span>"); });
    var words = [L("Wood", "خشب", "木纹"), L("Marble", "رخام", "大理石"), L("Linen", "كتان", "布纹"), L("Leather", "جلد", "皮纹"), L("Solid", "سادة", "纯色"), L("Fluted slats", "شرائح مضلّعة", "格栅"), L("5 mm sheets", "ألواح 5 مم", "5 mm 板材"), L("Trims", "إكسسوارات", "收边")];
    words.forEach(function (w, i) { items.splice(i * 5, 0, "<b>" + w + "</b>"); });
    var row = items.join("");
    return '<div class="kj-tick" aria-hidden="true"><div class="kj-tick-t">' + row + row + "</div></div>";
  }

  function motion() {
    var G = (window.IDEA_GIFS || []).slice(0, 4), V = window.IDEA_VIDEOS || [];
    if (!G.length && !V.length) return "";
    var v = V[st.reel] || V[0];
    var gifs = G.map(function (g) { return '<figure class="kj-gif"><img src="' + g.gif + '" alt="' + L(g.en, g.ar, g.zh) + '" loading="lazy" decoding="async" style="background:#1d232c url(' + g.poster + ') center/cover"><figcaption>' + L(g.en, g.ar, g.zh) + "<small>" + L("Application idea", "فكرة تطبيق", "应用构想") + "</small></figcaption></figure>"; }).join("");
    var tabs = V.map(function (x, i) { return '<button type="button" class="' + (i === st.reel ? "on" : "") + '" data-kjreel="' + i + '">' + L(x.en, x.ar, x.zh) + "</button>"; }).join("");
    return '<section class="kj-sec kj-dark kj-motion" id="kj-motion"><div class="wrap">' + num("★", L("In motion", "الحركة", "动起来看"), L("Finishes, moving<br>through rooms.", "التشطيبات وهي<br>بتتحرك في الأماكن.", "让花色<br>在空间里动起来。")) +
      '<div class="kj-reel"><div class="kj-reel-v"><video id="kjReel" autoplay muted loop playsinline preload="metadata" poster="' + v.poster + '"><source src="' + v.src + '" type="video/mp4"></video><span class="kj-live">● ' + L("Playing", "شغّال", "播放中") + "</span></div>" +
      '<div class="kj-reel-side"><p class="kj-lead2">' + L("Short silent loops of finishes on walls. Visual application ideas — not filmed jobs.", "مقاطع قصيرة صامتة للتشطيبات على الحيطان. أفكار تطبيق بصرية — مش تصوير شغل منفّذ.", "花色上墙的无声短循环。视觉应用构想，并非工程实拍。") + '</p><div class="kj-reel-tabs">' + tabs + '</div><button class="btn gold" type="button" data-kjtab="videos">' + L("All videos", "كل الفيديوهات", "全部视频") + "</button></div></div>" +
      '<div class="kj-gifs">' + gifs + "</div></div></section>";
  }

  function specRows() {
    var PR0 = arr("PR"), SH0 = arr("SH"), ACC0 = arr("ACC");
    var w = {}, t = {}, len = {};
    PR0.forEach(function (p) { if (p[1]) w[p[1]] = 1; if (p[2]) t[p[2]] = 1; if (p[3]) len[p[3]] = 1; });
    function ks(o) { return Object.keys(o).map(parseFloat).filter(function (x) { return x > 0; }).sort(function (a, b) { return a - b; }); }
    function rg(a) { return !a.length ? "—" : (a.length === 1 ? a[0] + " cm" : a[0] + "–" + a[a.length - 1] + " cm · " + a.length + " " + L("sizes", "مقاس", "种")); }
    var W = ks(w), T = ks(t), Ln = ks(len);
    return [
      [L("Slat profiles", "قطاعات الشرائح", "格栅型材"), PR0.length + " " + L("profiles", "قطاع", "种")],
      [L("Slat widths", "عروض الشرائح", "格栅宽度"), rg(W)],
      [L("Slat thickness", "سُمك الشرائح", "格栅厚度"), rg(T)],
      [L("Slat length", "طول الشريحة", "格栅长度"), Ln.length ? rg(Ln) : "280 cm"],
      [L("Decor sheets", "ألواح الديكور", "装饰板材"), SH0.length + " " + L("decors · 122 × 280 cm · 5 mm", "ديكور · 122 × 280 سم · 5 مم", "种 · 122 × 280 cm · 5 mm")],
      [L("Finish codes", "أكواد التشطيب", "花色编码"), arr("F").length + ""],
      [L("Trims & accessories", "إكسسوارات", "收边配件"), ACC0.length + " " + L("items", "صنف", "种")],
      [L("Use", "الاستخدام", "用途"), L("Interior walls & ceilings", "حوائط وأسقف داخلية", "室内墙面与吊顶")]
    ];
  }
  function know() {
    var K = {
      specs: [L("Specs", "المواصفات", "规格"), function () { return '<table class="kj-tbl"><tbody>' + specRows().map(function (r) { return "<tr><th>" + r[0] + "</th><td>" + r[1] + "</td></tr>"; }).join("") + '</tbody></table><p class="kj-src">' + L("Counted live from the catalog data on this site. Confirm the exact code before ordering.", "محسوبة من بيانات الكتالوج على الموقع. أكّد الكود قبل الطلب.", "由本站图册数据实时统计。下单前请确认编码。") + "</p>"; }],
      install: [L("Installation", "التركيب", "安装"), function () { return li([
        L("Wall must be flat, dry and clean — no fresh plaster or damp.", "الحيطة لازم تكون مستوية وناشفة ونضيفة — من غير محارة طرية أو رطوبة.", "墙面需平整、干燥、清洁——不可有新抹灰或潮湿。"),
        L("Fix with panel adhesive and/or clips on battens; start from a plumb line.", "التثبيت بلاصق الألواح و/أو مشابك على مُرابيع؛ ابدأ من خط ميزان.", "用墙板胶和/或龙骨卡扣固定；从铅垂线开始。"),
        L("Leave a small expansion gap at edges, ceilings and floors; cover with trims.", "سيب فراغ تمدّد صغير عند الأطراف والسقف والأرض واقفله بالإكسسوار.", "在边缘、顶部与地面预留伸缩缝，用收边覆盖。"),
        L("Cut with a fine-tooth saw or cutter; deburr edges.", "القص بمنشار سنّه ناعم أو كاتر؛ ونضّف الحروف.", "用细齿锯或美工刀切割，去毛边。"),
        L("Add about 10% to the measured area for cuts and pattern matching.", "زوّد حوالي 10% على المساحة عشان القص وتطابق النقشة.", "按测量面积加约 10% 用于裁切与对花。")]) + btn("install", L("Install steps", "خطوات التركيب", "安装步骤")); }],
      care: [L("Care", "العناية", "保养"), function () { return li([
        L("Wipe with a soft damp cloth; mild soap for marks.", "امسح بقماشة طرية مبلولة؛ وصابون خفيف للبقع.", "用软湿布擦拭；污渍用温和清洁剂。"),
        L("No solvents, thinner or abrasive pads.", "ممنوع التنر والمذيبات والسلك.", "勿用溶剂、稀释剂或钢丝球。"),
        L("Keep away from direct heat sources such as stoves and heaters.", "بعيد عن مصادر الحرارة المباشرة زي البوتاجاز والدفايات.", "远离灶具、取暖器等直接热源。"),
        L("Interior use; avoid long direct sun exposure.", "للاستخدام الداخلي؛ وتجنّب الشمس المباشرة لفترات طويلة.", "室内使用；避免长时间阳光直射。")]); }],
      compare: [L("PVC vs others", "PVC مقابل غيره", "PVC 与其他对比"), function () {
        var c = [L("Moisture", "الرطوبة", "防潮"), L("Install", "التركيب", "安装"), L("Upkeep", "الصيانة", "维护"), L("Finish variety", "تنوّع الشكل", "花色选择")];
        var r = [["PVC / WPC", [L("Water-resistant", "مقاوم للمياه", "防水"), L("Dry, fast, clean", "ناشف وسريع ونضيف", "干法、快速、干净"), L("Wipe clean", "مسح بس", "擦拭即可"), L("Wood, stone, fabric…", "خشب ورخام وقماش…", "木、石、布…")]],
          [L("Gypsum board", "جبس بورد", "石膏板"), [L("Sensitive", "حسّاس", "怕潮"), L("Framing + paint", "هيكل + دهان", "龙骨 + 涂刷"), L("Repaint", "إعادة دهان", "需重刷"), L("Paint only", "دهان بس", "仅涂料")]],
          [L("Natural wood", "خشب طبيعي", "实木"), [L("Can swell", "ممكن ينفش", "易胀"), L("Carpentry", "نجارة", "木工"), L("Varnish, pests", "ورنيش وسوس", "上漆、防虫"), L("Wood only", "خشب بس", "仅木")]],
          [L("Paint", "دهان", "涂料"), [L("Varies", "حسب النوع", "视类型"), L("Prep + coats", "تجهيز + طبقات", "找平 + 多遍"), L("Repaint", "إعادة دهان", "需重刷"), L("Colours", "ألوان", "颜色")]]];
        return '<div class="kj-tblw"><table class="kj-tbl kj-cmp"><thead><tr><th></th>' + c.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr></thead><tbody>" + r.map(function (x, i) { return "<tr" + (i ? "" : ' class="me"') + "><th>" + x[0] + "</th>" + x[1].map(function (y) { return "<td>" + y + "</td>"; }).join("") + "</tr>"; }).join("") + '</tbody></table></div><p class="kj-src">' + L("General guidance, not lab results.", "إرشادات عامة، مش نتايج معمل.", "一般性参考，非实验数据。") + "</p>" + btn("compare", L("Full comparison", "المقارنة كاملة", "完整对比")); }],
      pack: [L("Packing & delivery", "التغليف والتوريد", "包装与交付"), function () { return li([
        L("Every code packed and labelled separately at the factory.", "كل كود متغلّف ومتعلّم لوحده في المصنع.", "每个编码在工厂单独包装、贴标。"),
        L("Delivery across Egypt's governorates once terms are agreed.", "توريد لكل محافظات مصر بعد الاتفاق.", "条款确认后可送达埃及各省。"),
        L("Export loads to the Gulf and Africa planned by code and container.", "شحنات تصدير للخليج وأفريقيا بتتخطّط بالكود والكونتينر.", "海湾与非洲出口按编码与集装箱规划。"),
        L("Samples by code before the first order.", "عيّنات بالكود قبل أول طلب.", "首单前按编码提供样品。"),
        L("Prices and terms on request — never on the site.", "الأسعار والشروط عند الطلب — مش على الموقع.", "价格与条款按需提供，网站不展示。")]) + btn("calc", L("Estimate quantities", "احسب الكمية", "估算用量")); }]
    };
    var k = K[st.know] || K.specs;
    return '<section class="kj-sec wrap kj-know" id="kj-know">' + num("i", L("Know the material", "اعرف الخامة", "了解材料"), L("Specs, install, care<br>and how it compares.", "مواصفات وتركيب وعناية<br>ومقارنة.", "规格、安装、保养<br>与对比。")) +
      '<div class="kj-ktabs" role="tablist">' + Object.keys(K).map(function (x) { return '<button type="button" role="tab" class="' + (x === st.know ? "on" : "") + '" data-kjknow="' + x + '">' + K[x][0] + "</button>"; }).join("") + '</div><div class="kj-kbody">' + k[1]() + "</div></section>";
  }
  function li(a) { return '<ol class="kj-list">' + a.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol>"; }
  function btn(t, s) { return '<button class="btn navy" type="button" data-kjtab="' + t + '">' + s + " →</button>"; }

  function playAll(root) {
    root.querySelectorAll("video").forEach(function (v) {
      v.muted = true; v.defaultMuted = true; v.setAttribute("muted", ""); v.playsInline = true;
      if (RM) { v.removeAttribute("autoplay"); v.pause(); return; }
      if ("IntersectionObserver" in window) {
        var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); }); }, { threshold: 0.15 });
        io.observe(v);
      } else { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    });
  }
  function countUp(root) {
    if (RM || !("IntersectionObserver" in window)) return;
    root.querySelectorAll(".kj-stats b").forEach(function (b) {
      var n = parseInt(b.textContent, 10); if (!(n > 0)) return; b.textContent = "0";
      var io = new IntersectionObserver(function (es) { if (!es[0].isIntersecting) return; io.disconnect(); var t0 = performance.now(); (function step(t) { var k = Math.min(1, (t - t0) / 1100); b.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); })(t0); });
      io.observe(b);
    });
  }
  function stagger(root) {
    root.querySelectorAll(".kj-chips,.kj-sys,.kj-steps,.kj-fac,.kj-gifs,.kj-list").forEach(function (g) { [].forEach.call(g.children, function (c, i) { c.style.setProperty("--d", (i * 70) + "ms"); c.classList.add("kj-st"); }); });
  }
  function tail() {
    var home = document.getElementById("p-home"); if (!home || !window.KJ_FINAL) return;
    var e = document.getElementById("kjEnd");
    if (!e) { e = document.createElement("div"); e.id = "kjEnd"; }
    if (e.parentNode !== home || home.lastElementChild !== e) home.appendChild(e);
    if (e.getAttribute("data-l") !== cur()) { e.innerHTML = KJ_FINAL(); e.setAttribute("data-l", cur()); }
    home.querySelectorAll(":scope > .home-rich, :scope > .why-band, :scope > .tools-band").forEach(function (s) { s.classList.add("kj-old"); });
    var t = home.querySelector("#home-popular h2"); if (t && !t.dataset.k) { t.dataset.k = 1; }
  }
  function after(root, fresh) {
    playAll(root); stagger(root);
    if (fresh) countUp(root); else root.querySelectorAll(".kj-st").forEach(function (c) { c.classList.add("in"); });
    root.querySelectorAll(".kj-fac button").forEach(function (b) { if (!b.querySelector(".kj-ill")) b.insertAdjacentHTML("beforeend", '<small class="kj-ill">' + L("Illustration", "صورة توضيحية", "示意图") + "</small>"); });
    if ("IntersectionObserver" in window && fresh) {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.querySelectorAll(".kj-st").forEach(function (c) { c.classList.add("in"); }); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -10% 0px" });
      root.querySelectorAll(".kj-sec").forEach(function (s) { io.observe(s); });
    } else root.querySelectorAll(".kj-st").forEach(function (c) { c.classList.add("in"); });
    setTimeout(tail, 0);
  }
  window.KJ12 = { ticker: ticker, motion: motion, know: know, after: after };

  function swap(id, html) { var o = document.getElementById(id); if (!o) return; var d = document.createElement("div"); d.innerHTML = html; var n = d.firstElementChild; o.parentNode.replaceChild(n, o); after(n, false); n.classList.add("kj-rv", "in"); }
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-kjreel],[data-kjknow],#kjEnd [data-kjtab]");
    if (!t) return; e.preventDefault(); e.stopImmediatePropagation();
    if (t.dataset.kjreel) { st.reel = +t.dataset.kjreel; swap("kj-motion", motion()); return; }
    if (t.dataset.kjknow) { st.know = t.dataset.kjknow; swap("kj-know", know()); return; }
    if (t.dataset.kjtab && typeof setTab === "function") { setTab(t.dataset.kjtab); window.scrollTo(0, 0); }
  }, true);
})();
