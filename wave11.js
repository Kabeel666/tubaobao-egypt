/* Wave 11: editorial homepage (numbered sections, full-bleed imagery, material explorer, systems,
   pattern-to-wall, spaces carousel, partner steps, region chooser, factory teaser, final CTA).
   Original copy. Room images are renderings / application ideas. No prices, no fabricated claims. */
(function () {
  function cur() { return (typeof lang !== "undefined" && (lang === "ar" || lang === "zh")) ? lang : "en"; }
  function L(en, ar, zh) { var l = cur(); return l === "ar" ? ar : (l === "zh" ? zh : en); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function brand() { return L("TuBaoBao Egypt", "توباباو مصر", "埃及兔宝宝"); }
  function idea() { return L("Application idea", "فكرة تطبيق", "应用构想"); }
  function arr(n) { try { return eval("typeof " + n + "!=='undefined'?" + n + ":[]"); } catch (e) { return []; } }
  function num(n, k, t) { return '<p class="kj-num"><span>' + n + "</span>" + k + '</p><h2 class="kj-h">' + t + "</h2>"; }
  var state = { fam: null, region: "eg", pos: 50 };

  var FAMS = [
    ["wood", "Wood grain", "خشب", "木纹", "media/uses/living-walnut.jpg"],
    ["marble", "Marble", "رخام", "大理石", "media/uses/kitchen-grey-marble.jpg"],
    ["ceramic", "Ceramic & stone", "سيراميك وحجر", "陶瓷与石纹", "media/uses/pharmacy-marble.jpg"],
    ["chipboard", "WPC & chipboard", "WPC وشيبورد", "WPC 与刨花板纹", "media/uses/restaurant-slats.jpg"],
    ["textile", "Linen & fabric", "كتان وقماش", "布纹", "media/uses/salon-beige.jpg"],
    ["leather", "Leather", "جلد", "皮纹", "media/uses/leather-bedroom.jpg"],
    ["solid", "Solid colours", "ألوان سادة", "纯色", "media/uses/prayer-cream.jpg"]
  ];
  function famList() { var F0 = arr("F"); return FAMS.map(function (f) { return { f: f, items: F0.filter(function (x) { return x[1] === f[0]; }) }; }).filter(function (o) { return o.items.length; }); }
  function fname(x) { return cur() === "ar" ? x[2] : (x[3] || x[2]); }

  function hero() {
    return '<section class="kj-hero"><video class="kj-bgv" autoplay muted loop playsinline preload="metadata" poster="media/videos/kj-hero-poster.jpg"><source src="media/videos/kj-hero.webm?v=20261012c" type="video/webm"><source src="media/videos/kj-hero.mp4?v=20261012c" type="video/mp4"></video><div class="kj-shade"></div>' +
      '<div class="wrap kj-hero-in"><p class="kj-eyebrow">' + brand() + " · " + L("Wall panel factory · 6th of October", "مصنع ألواح حوائط · 6 أكتوبر", "墙板工厂 · 十月六日城") + "</p>" +
      "<h1>" + L("Walls made in Egypt.<br>Markets built with partners.", "حوائط صناعة مصرية.<br>وأسواق بنبنيها مع شركائنا.", "埃及制造的墙面。<br>与伙伴共建的市场。") + "</h1>" +
      '<p class="kj-lead">' + L("PVC and WPC wall finishes by code — slats, sheets and trims — for distributors in Egypt, the Gulf and Africa.", "تشطيبات حوائط PVC وWPC بالكود — شرائح وألواح وإكسسوارات — للموزعين في مصر والخليج وأفريقيا.", "按编码供应的 PVC 与 WPC 墙面饰面——格栅、板材与收边——服务埃及、海湾与非洲经销商。") + "</p>" +
      '<div class="kj-cta"><button class="btn gold" type="button" data-kjtab="partner">' + L("Become a distributor", "بقى موزع معانا", "成为经销商") + '</button><button class="btn kj-ghost" type="button" data-kjtab="colors">' + L("Explore finishes", "شوف التشطيبات", "浏览花色") + "</button></div>" +
      '<p class="kj-tag">' + L("Concept rendering", "تصوّر تصميمي", "概念效果图") + "</p></div></section>";
  }
  function stats() {
    var F0 = arr("F"), PR0 = arr("PR"), SH0 = arr("SH"), ACC0 = arr("ACC");
    var s = [[F0.length, L("finish codes", "كود تشطيب", "个花色编码")], [famList().length, L("finish families", "عائلة تشطيب", "个花色系列")], [PR0.length, L("slat profiles", "قطاع شرائح", "种格栅型材")], [SH0.length, L("sheet decors", "ديكور ألواح", "种板材花色")], [ACC0.length, L("trims & accessories", "إكسسوار وتشطيب", "种收边配件")], [3, L("languages: EN · AR · 中文", "لغات: EN · عربي · 中文", "种语言：EN · AR · 中文")]];
    return '<section class="kj-stats wrap">' + s.filter(function (x) { return x[0]; }).map(function (x) { return '<div><b>' + x[0] + "</b><span>" + x[1] + "</span></div>"; }).join("") + '<p class="kj-src">' + L("Counted live from our catalog data.", "محسوبة من بيانات الكتالوج.", "数据直接来自本站图册。") + "</p></section>";
  }
  function explorer() {
    var fl = famList(); if (!fl.length) return "";
    var o = fl.filter(function (x) { return x.f[0] === state.fam; })[0] || fl[0]; state.fam = o.f[0];
    var tabs = fl.map(function (x) { return '<button type="button" class="' + (x === o ? "on" : "") + '" data-kjfam="' + x.f[0] + '">' + L(x.f[1], x.f[2], x.f[3]) + " <i>" + x.items.length + "</i></button>"; }).join("");
    var chips = o.items.slice(0, 12).map(function (x) { var cm = window.CODE_MEDIA && CODE_MEDIA[x[0]]; return '<button type="button" class="kj-chip" data-kjgo="' + o.f[0] + '" title="' + esc(fname(x)) + '"><span style="background:' + esc(x[4] || "#999") + '">' + (cm && cm.primary ? '<img loading="lazy" src="' + cm.primary + '" alt="">' : "") + "</span><b>" + esc(x[0]) + "</b><small>" + esc(fname(x)) + "</small></button>"; }).join("");
    return '<section class="kj-sec wrap" id="kj-explorer">' + num("01", L("Material explorer", "مستكشف الخامات", "材料浏览"), L("One material.<br>Seven surface languages.", "خامة واحدة.<br>سبع لغات للسطح.", "一种材料，<br>七种表面语言。")) +
      '<div class="kj-famtabs" role="tablist">' + tabs + '</div><div class="kj-explore"><figure class="kj-big"><img loading="lazy" src="' + o.f[4] + '" alt=""><figcaption>' + idea() + " · " + L(o.f[1], o.f[2], o.f[3]) + "</figcaption></figure>" +
      '<div class="kj-chips">' + chips + '<button type="button" class="btn navy kj-all" data-kjgo="' + o.f[0] + '">' + L("All " + o.items.length + " codes in this family →", "كل الـ" + o.items.length + " كود في العائلة دي ←", "查看本系列全部 " + o.items.length + " 个编码 →") + "</button></div></div></section>";
  }
  function systems() {
    var PR0 = arr("PR"), SH0 = arr("SH"), ACC0 = arr("ACC");
    var c = [
      ["01", L("Fluted slats", "شرائح مضلّعة", "格栅墙板"), "media/products/M1-001_w20.jpg", PR0.length + " " + L("profiles · widths from catalog · 280 cm standard length", "قطاع · عروض من الكتالوج · طول قياسي 280 سم", "种型材 · 宽度见图册 · 标准长度 280 cm"), "sizes", true],
      ["02", L("Decor sheets", "ألواح ديكور", "装饰板材"), "media/uses/lobby-bookmatch.jpg", SH0.length + " " + L("decors · 122 × 280 cm · 5 mm", "ديكور · 122 × 280 سم · 5 مم", "种花色 · 122 × 280 cm · 5 mm"), "sheets", false],
      ["03", L("Trims & accessories", "تشطيبات وإكسسوارات", "收边与配件"), "media/factory/sample-rack.jpg", ACC0.length + " " + L("items · corners, caps, foam, fixings", "صنف · زوايا، نهايات، فوم، مشابك", "种 · 阳角、收口、泡棉、卡扣"), "products", false],
      ["04", L("Feature & 3D walls", "حوائط مميزة و3D", "造型与 3D 墙面"), "media/uses/studio-3d.jpg", L("Combine slats and sheets for TV walls, receptions and lobbies", "دمج الشرائح والألواح لحيطة التلفزيون والريسبشن واللوبي", "格栅与板材组合用于电视墙、前台与大堂"), "viz", false]
    ];
    return '<section class="kj-sec kj-dark"><div class="wrap">' + num("02", L("Product systems", "أنظمة المنتجات", "产品系统"), L("Different by profile.<br>Designed to work together.", "مختلفة في القطاع.<br>ومعمولة تشتغل مع بعض.", "型材各异，<br>彼此协同。")) +
      '<div class="kj-sys">' + c.map(function (x) { return '<article><figure class="' + (x[5] ? "contain" : "") + '"><img loading="lazy" src="' + x[2] + '" alt=""></figure><p class="kj-n">' + x[0] + "</p><h3>" + x[1] + "</h3><p>" + x[3] + '</p><button type="button" class="kj-link" data-kjtab="' + x[4] + '">' + L("View", "شوف", "查看") + " ↗</button></article>"; }).join("") + "</div></div></section>";
  }
  function pattern() {
    return '<section class="kj-sec wrap" id="kj-pattern">' + num("03", L("Pattern to wall", "من الكود للحيطة", "从花色到墙面"), L("A code becomes a space.", "الكود بيبقى مكان.", "一个编码，成为一个空间。")) +
      '<p class="kj-lead2">' + L("Drag to compare the catalog finish with an application idea of the same family.", "اسحب عشان تقارن التشطيب في الكتالوج بفكرة تطبيق من نفس العائلة.", "拖动对比图册花色与同系列的应用构想。") + "</p>" +
      '<div class="kj-ba" style="--p:' + state.pos + '%"><img loading="lazy" class="b" src="media/uses/living-walnut.jpg" alt=""><div class="a"><img loading="lazy" src="media/products/M1-003_w20.jpg" alt=""></div><span class="kj-bal">' + L("Catalog code M1-003", "كود الكتالوج M1-003", "图册编码 M1-003") + '</span><span class="kj-bar"></span><span class="kj-bar-r">' + idea() + '</span><input type="range" min="0" max="100" value="' + state.pos + '" aria-label="compare" id="kjRange"></div></section>';
  }
  function spaces() {
    var S = [["hotel", "Hotel lobby", "لوبي فندق", "酒店大堂"], ["office", "Office", "مكتب", "办公室"], ["cafe", "Café", "كافيه", "咖啡馆"], ["clinic-wood", "Clinic", "عيادة", "诊所"], ["boutique", "Boutique", "بوتيك", "精品店"], ["reception-leather", "Reception", "ريسبشن", "前台"], ["meeting-walnut", "Meeting room", "قاعة اجتماعات", "会议室"], ["kids-oak", "Kids room", "أوضة أطفال", "儿童房"], ["mall", "Retail mall", "مول", "商场"], ["gym-dark", "Gym", "جيم", "健身房"]];
    return '<section class="kj-sec kj-sand">' + '<div class="wrap">' + num("04", L("Spaces", "الأماكن", "空间"), L("Materials, imagined in real settings.", "خامات في أماكن حقيقية — كتصوّر.", "材料，置于真实场景的构想中。")) + '<div class="kj-carnav"><button type="button" data-kjcar="-1" aria-label="prev">←</button><button type="button" data-kjcar="1" aria-label="next">→</button></div></div>' +
      '<div class="kj-car" id="kjCar">' + S.map(function (s, i) { return '<figure><img loading="lazy" src="media/uses/' + s[0] + '.jpg" alt=""><figcaption><b>' + String(i + 1).padStart(2, "0") + " · " + L(s[1], s[2], s[3]) + "</b><small>" + idea() + "</small></figcaption></figure>"; }).join("") + '</div><p class="wrap kj-src">' + L("Renderings for inspiration — not completed projects.", "تصوّرات للإلهام — مش مشاريع متنفّذة.", "效果图仅供灵感参考，并非已完成项目。") + "</p></section>";
  }
  function style() {
    return '<section class="kj-style"><video class="kj-bgv" autoplay muted loop playsinline preload="none" poster="media/videos/kj-style-poster.jpg"><source src="media/videos/kj-style.webm?v=20261012c" type="video/webm"><source src="media/videos/kj-style.mp4?v=20261012c" type="video/mp4"></video><div class="kj-shade"></div><div class="wrap kj-style-in">' + num("05", L("Residential mood", "المود السكني", "居住氛围"), L("Warm surfaces.<br>Calm rooms.", "أسطح دافية.<br>أوض هادية.", "温润的表面，<br>安静的房间。")) +
      "<p>" + L("Walnut, oak and linen tones for living rooms and bedrooms — water-resistant PVC that installs over existing walls.", "درجات الجوز والبلوط والكتان لأوض المعيشة والنوم — PVC مقاوم للمياه بيتركب على الحيطة الموجودة.", "胡桃、橡木与亚麻色调，适合客厅与卧室——防水 PVC，可直接安装在现有墙面上。") + '</p><p class="kj-tag">' + L("Concept rendering · motion from still image", "تصوّر تصميمي · حركة من صورة ثابتة", "概念效果图 · 由静态图生成的动效") + "</p></div></section>";
  }
  function steps() {
    var s = [[L("Inquiry", "تواصل", "咨询"), L("Tell us your city, channel and the families you sell.", "قولنا مدينتك وقناة البيع والعائلات اللي بتبيعها.", "告诉我们城市、渠道和意向花色。")], [L("Samples", "عيّنات", "样品"), L("We prepare a sample kit by code.", "نجهّزلك عيّنات بالكود.", "按编码准备样品套装。")], [L("Quotation", "عرض سعر", "报价"), L("Terms and pricing are sent privately, never on the site.", "الشروط والأسعار بتتبعت لك خاص، مش على الموقع.", "条款与价格私下发送，网站不展示。")], [L("First order", "أول طلب", "首单"), L("Packed by code and labelled at the factory.", "تغليف بالكود وليبل من المصنع.", "工厂按编码包装贴标。")], [L("Grow together", "نكبر مع بعض", "共同成长"), L("Catalogs, images and content for your market.", "كتالوجات وصور ومحتوى لسوقك.", "为您的市场提供图册、图片与内容。")]];
    return '<section class="kj-sec wrap">' + num("06", L("Partner path", "طريق الشراكة", "合作路径"), L("More than supply.<br>A partnership in five steps.", "أكتر من توريد.<br>شراكة في خمس خطوات.", "不止供货，<br>五步建立合作。")) + '<ol class="kj-steps">' + s.map(function (x, i) { return "<li><span>0" + (i + 1) + "</span><b>" + x[0] + "</b><p>" + x[1] + "</p></li>"; }).join("") + "</ol></section>";
  }
  function regions() {
    var R = {
      eg: [L("Egypt", "مصر", "埃及"), L("Direct from the 6th of October factory. Cairo, Giza, Alexandria, Delta, Canal, Upper Egypt and the Red Sea coast.", "من مصنع 6 أكتوبر مباشرة. القاهرة والجيزة وإسكندرية والدلتا والقناة والصعيد والبحر الأحمر.", "由十月六日城工厂直供。开罗、吉萨、亚历山大、三角洲、运河区、上埃及与红海沿岸。"), [62, 40]],
      gulf: [L("The Gulf", "الخليج", "海湾地区"), L("Export loads for Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman. Arabic and English documents.", "شحنات تصدير للسعودية والإمارات والكويت وقطر والبحرين وعُمان. مستندات عربي وإنجليزي.", "出口至沙特、阿联酋、科威特、卡塔尔、巴林与阿曼。提供阿英文资料。"), [80, 46]],
      af: [L("Africa", "أفريقيا", "非洲"), L("North, East and West African partners via Egyptian ports. Container planning by code.", "شركاء في شمال وشرق وغرب أفريقيا عن طريق الموانئ المصرية. تخطيط الكونتينر بالكود.", "经埃及港口服务北非、东非与西非伙伴。按编码规划集装箱。"), [48, 66]]
    };
    var r = R[state.region] || R.eg;
    var dots = Object.keys(R).map(function (k) { var p = R[k][2]; return '<button type="button" class="kj-dot' + (k === state.region ? " on" : "") + '" style="left:' + p[0] + "%;top:" + p[1] + '%" data-kjreg="' + k + '"><i></i><span>' + R[k][0] + "</span></button>"; }).join("");
    return '<section class="kj-sec kj-dark"><div class="wrap">' + num("07", L("Regions", "المناطق", "区域"), L("Build locally.<br>Supplied from Egypt.", "ابني سوقك المحلي.<br>بتوريد من مصر.", "立足本地，<br>由埃及供货。")) +
      '<div class="kj-reg"><div class="kj-map">' + '<svg viewBox="0 0 100 80" aria-hidden="true"><path d="M30 10 L58 8 L66 22 L60 30 L70 34 L74 26 L92 30 L96 50 L84 58 L74 52 L66 40 L64 50 L60 60 L56 78 L44 78 L38 62 L28 50 L20 40 L18 26 Z" /></svg>' + dots + '</div><div class="kj-regtxt"><div class="kj-regtabs">' + Object.keys(R).map(function (k) { return '<button type="button" class="' + (k === state.region ? "on" : "") + '" data-kjreg="' + k + '">' + R[k][0] + "</button>"; }).join("") + "</div><h3>" + r[0] + "</h3><p>" + r[1] + '</p><button class="btn gold" type="button" data-kjtab="inquiry">' + L("Apply for this region", "قدّم على المنطقة دي", "申请该区域") + "</button></div></div></div></section>";
  }
  function factory() {
    var c = [["media/factory/manufacturing-panels.jpg", L("Manufacturing", "التصنيع", "生产"), "rnd"], ["media/home/feature-mold.jpg", L("Moulds & profiles", "الإسطمبات والقطاعات", "模具与型材"), "rnd"], ["media/home/feature-waterproof.jpg", L("Quality checks", "فحص الجودة", "质量检查"), "quality"], ["media/home/feature-made-egypt.jpg", L("Packaging & delivery", "التغليف والتوريد", "包装与交付"), "rnd"]];
    return '<section class="kj-sec wrap">' + num("08", L("Factory & R&D", "المصنع والتطوير", "工厂与研发"), L("Built to support growth.", "معمول عشان يدعم نموّك.", "为增长而建。")) + '<div class="kj-fac">' + c.map(function (x, i) { return '<button type="button" data-kjtab="' + x[2] + '"><img loading="lazy" src="' + x[0] + '" alt=""><span>0' + (i + 1) + "</span><b>" + x[1] + " ↗</b></button>"; }).join("") + "</div></section>";
  }
  function final() {
    return '<section class="kj-final" style="background-image:linear-gradient(rgba(14,20,28,.72),rgba(14,20,28,.82)),url(media/uses/hotel.jpg)"><div class="wrap">' + '<p class="kj-num"><span>09</span>' + L("Your next chapter", "الخطوة الجاية", "下一篇章") + "</p><h2>" + L("Bring " + brand() + " to your market.", "خلّي " + brand() + " في سوقك.", "把" + brand() + "带到您的市场。") + "</h2><p>" + L("Samples, terms and pricing on request — through WhatsApp or the distributor form.", "العيّنات والشروط والأسعار عند الطلب — على الواتساب أو فورم الموزعين.", "样品、条款与价格按需提供——通过 WhatsApp 或经销申请表。") + '</p><div class="kj-cta"><button class="btn gold" type="button" data-kjtab="inquiry">' + L("Distributor inquiry", "طلب توزيع", "经销申请") + '</button><button class="btn kj-ghost" type="button" data-kjtab="partner">' + L("Distributor program", "برنامج الموزعين", "经销商计划") + "</button></div></div></section>";
  }
  function build() { return hero() + stats() + explorer() + systems() + pattern() + spaces() + style() + steps() + regions() + factory() + final(); }

  function reveal(root) {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    root.querySelectorAll(".kj-sec, .kj-stats, .kj-style, .kj-final").forEach(function (el) { el.classList.add("kj-rv"); io.observe(el); });
  }
  function bindRange(root) { var r = root.querySelector("#kjRange"); if (r) r.oninput = function () { state.pos = +r.value; r.parentNode.style.setProperty("--p", r.value + "%"); }; }
  function mount(force) {
    if ((typeof tab !== "undefined" ? tab : "home") !== "home") return;
    var home = document.getElementById("p-home"); if (!home) return;
    var k = document.getElementById("kj");
    if (k && !force && k.getAttribute("data-l") === cur()) return;
    if (!k) { k = document.createElement("div"); k.id = "kj"; home.insertBefore(k, home.firstChild); }
    home.classList.add("kj-mode"); document.body.classList.add("kj-home");
    k.setAttribute("data-l", cur()); k.innerHTML = build(); reveal(k); bindRange(k);
  }
  function rerender(sel) { var y = window.scrollY; var el = document.querySelector(sel); var k = document.getElementById("kj"); if (!k) return; k.innerHTML = build(); bindRange(k); k.querySelectorAll(".kj-sec,.kj-stats,.kj-style,.kj-final").forEach(function (e) { e.classList.add("kj-rv", "in"); }); window.scrollTo(0, y); }

  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("#kj [data-kjtab],#kj [data-kjfam],#kj [data-kjgo],#kj [data-kjreg],#kj [data-kjcar]");
    if (!t) return; e.preventDefault(); e.stopImmediatePropagation();
    if (t.dataset.kjtab) { if (typeof setTab === "function") setTab(t.dataset.kjtab); window.scrollTo(0, 0); return; }
    if (t.dataset.kjfam) { state.fam = t.dataset.kjfam; rerender(); return; }
    if (t.dataset.kjgo) { try { fam = t.dataset.kjgo; } catch (x) {} if (typeof setTab === "function") setTab("colors"); window.scrollTo(0, 0); return; }
    if (t.dataset.kjreg) { state.region = t.dataset.kjreg; rerender(); return; }
    if (t.dataset.kjcar) { var c = document.getElementById("kjCar"); if (c) c.scrollBy({ left: (cur() === "ar" ? -1 : 1) * (+t.dataset.kjcar) * c.clientWidth * 0.8, behavior: "smooth" }); }
  }, true);

  var _render = window.render;
  if (typeof _render === "function") window.render = function () { _render.apply(this, arguments); try { mount(true); } catch (e) { console.error(e); } setTimeout(function () { mount(false); }, 0); };
  var _setTab = window.setTab;
  if (typeof _setTab === "function") window.setTab = function () { _setTab.apply(this, arguments); document.body.classList.toggle("kj-home", (typeof tab !== "undefined" ? tab : "") === "home"); try { mount(false); } catch (e) {} };
  try { mount(true); } catch (e) { console.error(e); }
})();
