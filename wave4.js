/* Wave 4: ZH rows for tables/cards, ZH FAQ, extra More tabs, contact page + footer markup.
   Loaded after i18n.js and before boot.js so the first render already has everything. */
(function () {
  function isAr() { return typeof lang !== "undefined" && lang === "ar"; }
  function isZh() { return typeof lang !== "undefined" && lang === "zh"; }
  function L(ar, en, zh) { return isAr() ? ar : (isZh() ? (zh || en) : en); }
  window.w4L = L;

  /* ---- More tabs: pages that existed but had no menu entry ---- */
  function addTab(id, ar, en, zh, after) {
    if (typeof TABS === "undefined" || TABS.some(function (x) { return x[0] === id; })) return;
    var i = TABS.length - 1;
    for (var n = 0; n < TABS.length; n++) if (TABS[n][0] === after) i = n;
    TABS.splice(i + 1, 0, [id, ar, en, zh]);
  }
  addTab("specs", "المواصفات", "Specs", "规格", "sizes");
  addTab("calc", "الحاسبة", "Calculator", "计算器", "specs");
  addTab("compare", "مقارنة", "Compare", "对比", "calc");
  addTab("access", "إكسسوارات", "Accessories", "配件", "compare");

  /* ---- Chinese rows for arrays that only carried AR + EN ---- */
  var ZROW = {
    ACC: {
      A01: ["阳角线", "收边"], A02: ["阴角线", "收边"], A03: ["端盖 / 踢脚收边", "收边"], A04: ["拼缝盖条", "收边"],
      A05: ["5 mm 找平发泡垫", "垫层"], A06: ["8 mm 找平发泡垫", "垫层"], A07: ["卡扣 / 紧固件", "固定件"], A08: ["安装胶", "胶粘剂"],
      A09: ["美纹纸 / 收尾胶带", "收尾"], A10: ["格栅装饰角线", "收边"], A11: ["格栅收口条", "收边"], A12: ["地脚收边条", "收边"],
      A13: ["插座面板辅助件", "辅件"], A14: ["包柱角线套装", "收边"], A15: ["起始 / 收尾套件", "套件"], A16: ["背胶发泡垫", "垫层"],
      A17: ["室内 WPC 型材", "型材"], A18: ["隐形卡扣", "固定件"], A19: ["缝隙填充条", "收边"], A20: ["金属护角", "保护"]
    },
    PR: {
      "801": "宽幅空心", "802": "加宽薄型", "803": "窄幅", "804": "中等", "805": "中等加宽", "806": "标准 18", "807": "宽幅薄型",
      "808": "加宽加硬", "809": "薄型装饰", "810": "标准加厚", "811": "图册 13.4", "812": "图册 16", "813": "图册 20 加厚",
      "814": "标准薄型 18", "815": "图册 13.4 薄型", "816": "宽幅 · 带发泡背衬", "817": "加宽 · 带发泡背衬", "818": "标准 · 带发泡背衬",
      "819": "13.4 · 带发泡背衬", "820": "薄型格栅", "821": "中等格栅", "822": "宽幅格栅", "823": "阳角收边", "824": "阴角收边",
      "825": "收口条", "826": "拼缝盖条", "827": "发泡装饰板", "828": "宽幅发泡板", "829": "大板 122×280×5", "830": "备选大板尺寸"
    },
    PACK: {
      P01: ["按编码标记打包", "避免花色混淆"], P02: ["护角", "运输保护"], P03: ["缠绕膜", "整捆缠绕"], P04: ["加强纸箱", "用于样品"],
      P05: ["装箱单", "编码与数量"], P06: ["按颜色分开", "分开成捆"], P07: ["出口包装", "额外保护"], P08: ["防潮标识", "存放说明"],
      P09: ["搬运标识", "请勿抛掷"], P10: ["批次编号", "方便补货"], P11: ["发泡隔层", "用于大板"], P12: ["打包带", "整捆稳固"],
      P13: ["样品袋", "单一编码"], P14: ["捆包标签", "花色编码"], P15: ["利比亚 / 苏丹包装", "区域路线"]
    },
    GOV: {
      G01: "开罗", G02: "吉萨", G03: "盖勒尤比亚", G04: "十月六日城", G05: "谢赫扎耶德城", G06: "新行政首都", G07: "舒鲁克城",
      G08: "巴德尔城", G09: "欧布尔城", G10: "斋月十日城", G11: "亚历山大", G12: "马特鲁", G13: "塞得港", G14: "苏伊士",
      G15: "伊斯梅利亚", G16: "杜姆亚特", G17: "达卡利亚", G18: "东部省", G19: "西部省", G20: "米努夫", G21: "卡夫拉谢赫",
      G22: "布海拉", G23: "贝尼苏韦夫", G24: "法尤姆", G25: "明亚", G26: "艾斯尤特", G27: "索哈杰", G28: "基纳", G29: "卢克索",
      G30: "阿斯旺", G31: "红海", G32: "南西奈", G33: "北西奈", G34: "新河谷", G35: "新曼苏拉", G36: "新阿拉曼"
    }
  };
  var REGION_ZH = { "Greater Cairo": "大开罗", "New cities": "新城", "Coast": "沿海", "Canal": "运河区", "Delta": "三角洲", "Upper Egypt": "上埃及" };

  /* [title, sub] for ACC / PACK rows */
  window.rowPair = function (kind, x) {
    if (isAr()) return [x[1], x[3] || ""];
    if (isZh() && ZROW[kind] && ZROW[kind][x[0]]) return ZROW[kind][x[0]];
    return [x[2], x[4] || ""];
  };
  window.prNote = function (p) {
    if (isAr()) return p[4];
    if (isZh() && ZROW.PR[p[0]]) return ZROW.PR[p[0]];
    return p[5];
  };
  window.govPair = function (g) {
    if (isAr()) return [g[1], g[3]];
    if (isZh()) return [ZROW.GOV[g[0]] || g[2], REGION_ZH[g[4]] || g[4]];
    return [g[2], g[4]];
  };

  /* ---- FAQ in Chinese (was empty) ---- */
  if (typeof ZH !== "undefined" && (!ZH.faq || ZH.faq.length < 6)) {
    ZH.faq = [
      ["网站上有价格吗？", "没有。价格取决于编码、数量和供货条件，询价后单独回复。"],
      ["怎么拿样品？", "点页眉的「联系」或右下角的 WhatsApp 约好时间，到十月六日城 37 号地块工厂看实物样品。"],
      ["屏幕上的颜色准吗？", "只供比较参考，以工厂实物样品为准。"],
      ["条板有哪些宽度？", "常用 13.4、16、18、20 cm，长度 280 cm。更多型材见「尺寸」页。"],
      ["大板多厚、多大？", "5 mm，约 1.22 × 2.80 m，每张约 3.416 m²。"],
      ["能用在卫生间和厨房吗？", "可以承受室内日常潮气和擦拭，但不能代替结构防水，也不要贴近明火。"],
      ["能用在户外吗？", "公布的用途是室内。户外长时间日晒需要单独评估。"],
      ["怎么安装？", "干挂在平整、干燥的室内墙面，或先加 5 mm 发泡垫找平，再装角线和收口条。"],
      ["需要多少条板？", "先用「计算器」估算，再按现场门窗洞口确认，一般多留约 8% 损耗。"],
      ["一面墙可以混用编码吗？", "可以，电视墙和入口常这样做。先把样品放在一起比较。"],
      ["供货到哪里？", "从十月六日城工厂发往埃及各省。利比亚、苏丹等区域出口，在包装和单证条款谈妥后安排。"],
      ["交货期多久？", "取决于编码、数量和库存。订单明确后再确认时间，网站上不承诺固定天数。"],
      ["有 3D 效果预览吗？", "有。发来房间照片、墙面尺寸和喜欢的编码，我们回一张大致的上墙效果预览。它不是施工图。"],
      ["承包商可以批量订货吗？", "可以。发来编码、米数和使用空间，工厂确认库存和时间。"],
      ["工作时间？", "每天 8:00–20:00，周五休息。"]
    ];
  }

  /* ---- Contact page ---- */
  var MAPS = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("5th Industrial Zone, 6th of October City, Giza, Egypt");
  window.contactPageHtml = function (d) {
    var h = '<div class="wrap contact-page">';
    h += '<div class="ct-hero"><div class="ct-hero-copy">';
    h += '<p class="k">' + L("مصنع 6 أكتوبر · قطعة 37", "6th of October factory · Plot 37", "十月六日城工厂 · 37 号地块") + "</p>";
    h += "<h2>" + d.ctT + "</h2>";
    h += '<p class="lead">' + L(
      "عرض سعر، عيّنة، أو توريد بالكمية — فريق المصنع بيرد عليك مباشرة.",
      "Quotes, samples and volume supply — the factory team answers you directly.",
      "报价、样品或批量供货——工厂团队直接回复您。") + "</p>";
    h += '<div class="ct-actions"><button type="button" class="btn gold" data-wa-proxy="1">' + L("راسل المصنع", "Message the factory", "联系工厂") + "</button>";
    h += '<button type="button" class="btn ghost" data-tab="colors">' + L("تصفّح التشطيبات", "Browse finishes", "浏览花色") + "</button></div>";
    h += "</div>";
    h += '<img class="ct-logo" src="media/brand/rabbit-mark.jpg" width="120" height="120" alt="" loading="lazy" decoding="async"/>';
    h += "</div>";
    h += '<div class="ct-grid">';
    h += '<article class="ct-card"><span class="ct-ico" aria-hidden="true">&#9673;</span><h3>' + L("العنوان", "Address", "地址") + "</h3><p class=\"addr\">" + d.addr + "</p>";
    h += "<p>" + L("العينات على الرف في المصنع — شوف الكود بعينك قبل الكمية.", "Samples are on the rack at the factory — see the code before you order volume.", "样品就在工厂样品架上——批量下单前先看实物编码。") + "</p>";
    h += '<a class="ct-link" href="' + MAPS + '" target="_blank" rel="noopener">' + L("افتح على الخريطة", "Open in Maps", "在地图中打开") + " &rarr;</a></article>";
    h += '<article class="ct-card"><span class="ct-ico" aria-hidden="true">&#9719;</span><h3>' + L("المواعيد", "Hours", "营业时间") + "</h3><p class=\"hours\">" + d.hours + "</p>";
    h += "<p>" + L("بنرد على واتساب في مواعيد العمل.", "We reply on WhatsApp during working hours.", "工作时间内通过 WhatsApp 回复。") + "</p></article>";
    h += '<article class="ct-card"><span class="ct-ico" aria-hidden="true">&#10003;</span><h3>' + L("ابعت لنا", "What to send", "请发给我们") + "</h3><ul class=\"ct-list\">";
    h += "<li>" + L("كود التشطيب أو الاتجاه (خشب، رخام، كتان…)", "The finish code or direction (wood, marble, linen…)", "花色编码或方向（木纹、大理石、亚麻……）") + "</li>";
    h += "<li>" + L("مقاس الحائط بالمتر", "Wall size in metres", "墙面尺寸（米）") + "</li>";
    h += "<li>" + L("نوع المكان أو صورة للحائط", "The room type, or a photo of the wall", "空间类型或墙面照片") + "</li>";
    h += "</ul></article>";
    h += "</div>";
    h += '<div class="ct-band"><p>' + L("مش متأكد من الكود؟ دليل الاختيار بيقسّم التشطيبات حسب المكان.", "Not sure which code? The chooser sorts finishes by room.", "不确定选哪个编码？选材指南按空间分类。") + "</p>";
    h += '<button type="button" class="btn navy" data-tab="chooser">' + L("افتح دليل الاختيار", "Open the chooser", "打开选材指南") + "</button></div>";
    h += "</div>";
    return h;
  };

  /* ---- Footer ---- */
  window.footHtml = function (d) {
    var brand = isAr() ? "توباباو مصر" : (isZh() ? "埃及兔宝宝" : "TuBaoBao Egypt");
    var links = [["colors", "التشطيبات", "Finishes", "花色"], ["chooser", "دليل الاختيار", "Chooser", "选材指南"], ["viz", "معاينة 3D", "3D preview", "3D 预览"],
      ["calc", "الحاسبة", "Calculator", "计算器"], ["faq", "أسئلة", "FAQ", "问答"], ["contact", "صفحة التواصل", "Contact page", "联系页面"]];
    var h = '<div class="foot-grid">';
    h += '<div class="foot-brand"><img class="brand-logo" src="media/brand/rabbit-mark.jpg" width="64" height="64" alt="TuBaoBao" loading="lazy" decoding="async"/>';
    h += "<div><b>" + brand + "</b><p>" + L("تشطيبات حوائط داخلية PVC وWPC، من مصنعنا في 6 أكتوبر.", "Interior PVC & WPC wall finishes, made at our 6th of October factory.", "室内 PVC 与 WPC 墙面饰面，十月六日城工厂自产。") + "</p>";
    h += '<small class="foot-tri" lang="mul">TuBaoBao Egypt · <bdi lang="ar">توباباو مصر</bdi> · <bdi lang="zh-CN">埃及兔宝宝</bdi></small></div></div>';
    h += '<div class="foot-col"><h4>' + L("المصنع", "Factory", "工厂") + "</h4><p>" + d.addr + "</p><p>" + d.hours + "</p>";
    h += '<button type="button" class="btn gold foot-cta" data-wa-proxy="1">' + L("تواصل", "Contact", "联系") + "</button></div>";
    h += '<div class="foot-col"><h4>' + L("استكشف", "Explore", "浏览") + '</h4><nav class="foot-links" aria-label="Footer">';
    links.forEach(function (x) { h += '<button type="button" data-tab="' + x[0] + '">' + L(x[1], x[2], x[3]) + "</button>"; });
    h += "</nav></div></div>";
    h += '<div class="foot-bottom"><span>© 2026 ' + brand + "</span><span>" + L("استخدام داخلي · الأسعار عند الطلب · العينة هي المرجع", "Interior use · Prices on request · The sample is the reference", "室内使用 · 价格询价 · 以样品为准") + "</span></div>";
    return h;
  };

  /* Wave 5: quick search chips on the homepage */
  document.addEventListener("click", function (e) {
    var c = e.target.closest && e.target.closest("[data-q]");
    if (!c) return;
    e.preventDefault();
    window.homeQ = c.getAttribute("data-q") || "";
    try { homeQ = window.homeQ; } catch (err) {}
    if (typeof render === "function") render();
    var sec = document.querySelector("#p-home .search-sec");
    if (sec) sec.scrollIntoView({ block: "start" });
  });

  /* Contact buttons in the body reuse the header Contact link, so the number lives only in the header + FAB. */
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-wa-proxy]");
    if (!b) return;
    e.preventDefault();
    var a = document.getElementById("hdrWa") || document.getElementById("fabWa");
    if (a && a.href) window.open(a.href, "_blank", "noopener");
  });
})();
