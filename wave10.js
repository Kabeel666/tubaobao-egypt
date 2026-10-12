/* Wave 10: distributor-focused structure (partner program, applications, application concepts,
   factory & R&D, quality, technical resources, distributor inquiry), texture filter, per-route SEO.
   Honest wording only: no certificate numbers, no test results, no client names, no claimed past jobs. */
(function () {
  function cur() { return (typeof lang !== "undefined" && (lang === "ar" || lang === "zh")) ? lang : "en"; }
  function L(en, ar, zh) { var l = cur(); return l === "ar" ? ar : (l === "zh" ? zh : en); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function brand() { return L("TuBaoBao Egypt", "توباباو مصر", "埃及兔宝宝"); }

  /* ---------- tabs (all go to the secondary / More menu) ---------- */
  var NEW = [
    ["partner", "برنامج الموزعين", "Distributor program", "经销商计划"],
    ["applications", "مجالات الاستخدام", "Applications", "应用领域"],
    ["concepts", "أفكار مشاريع", "Application concepts", "应用构想"],
    ["rnd", "المصنع والتطوير", "Factory & R&D", "工厂与研发"],
    ["quality", "الجودة والشهادات", "Quality & certificates", "质量与认证"],
    ["technical", "الدعم الفني", "Technical resources", "技术资料"],
    ["inquiry", "طلب وكالة / توزيع", "Distributor inquiry", "经销申请"]
  ];
  if (typeof TABS !== "undefined") NEW.forEach(function (row) { if (!TABS.some(function (x) { return x[0] === row[0]; })) TABS.push(row); });

  /* ---------- texture filter (colors page) ---------- */
  var METAL = /gold|silver|copper|bronze|brass|metal|chrome|steel|titanium/i;
  window.texMatch = function (f, x) {
    if (!x) return false;
    if (f === "tex-wood") return x[1] === "wood" || x[1] === "chipboard";
    if (f === "tex-stone") return x[1] === "marble" || x[1] === "ceramic";
    if (f === "tex-soft") return x[1] === "textile" || x[1] === "leather";
    if (f === "tex-solid") return x[1] === "solid";
    if (f === "tex-metal") return METAL.test(String(x[3] || "") + " " + String(x[2] || ""));
    return false;
  };

  /* ---------- shared bits ---------- */
  function head(k, t, s) {
    return '<p class="k w10-k">' + k + "</p><h2>" + t + '</h2><p class="lead">' + s + "</p>";
  }
  function ctaRow() {
    return '<div class="w10-cta"><button type="button" class="btn gold" data-tab="inquiry">' + L("Apply to become a distributor", "قدّم طلب توزيع", "申请成为经销商") +
      '</button><button type="button" class="btn ghost-dark" data-tab="partner">' + L("See the distributor program", "شوف برنامج الموزعين", "了解经销商计划") + "</button></div>";
  }
  function ideaNote() {
    return '<p class="note w10-disc">' + L(
      "Room images are renderings and application ideas showing how the finishes can be used — they are not completed client projects.",
      "صور الأماكن تصوّرات وأفكار تطبيق توضّح استخدام التشطيبات — مش مشاريع عملاء متنفّذة.",
      "空间图片为效果图与应用构想，用于展示饰面的用法，并非已完成的客户项目。") + "</p>";
  }
  var STEPS = function () {
    return [
      [L("Introduce your business", "عرّفنا بشغلك", "介绍您的业务"), L("Tell us who you are, where you sell and who your customers are (showroom, contractor, wholesaler, developer).", "قولنا انت مين، بتبيع فين، وعملاءك مين (معرض، مقاول، تاجر جملة، مطوّر).", "告诉我们您的公司、销售区域和客户类型（展厅、装修公司、批发商、开发商）。")],
      [L("Material fit & samples", "اختيار الخامات والعيّنات", "选材与样品"), L("We match lines and codes to your market and send real factory samples.", "بنختار معاك الخطوط والأكواد المناسبة لسوقك ونبعت عيّنات حقيقية من المصنع.", "根据您的市场匹配产品线与编码，并寄送工厂实物样品。")],
      [L("Scope & quotation", "تحديد النطاق وعرض السعر", "确定范围与报价"), L("We agree range, volumes, region and terms; the quotation is sent privately — never on the site.", "بنتفق على التشكيلة والكميات والمنطقة والشروط؛ وعرض السعر بيتبعت خاص — مش على الموقع.", "商定品类、数量、区域与条款；报价单独发送，不在网站公开。")],
      [L("First order & delivery", "أول طلبية والتوريد", "首单与交付"), L("Produced and packed by code at the 6th of October factory, then loaded to your location.", "بتتصنّع وتتغلّف بالكود في مصنع 6 أكتوبر، وبعدها تتحمّل لمكانك.", "在十月六日城工厂按编码生产、包装并装车发往您的地点。")],
      [L("Ongoing support", "دعم مستمر", "持续支持"), L("Display kits, marketing material, installation guidance and repeat orders by the same codes.", "مجموعات عرض، مواد تسويق، إرشاد تركيب، وتكرار الطلب بنفس الأكواد.", "展示套件、营销物料、安装指导，按相同编码复购。")]
    ];
  };
  function stepsHtml() {
    return '<ol class="w10-steps">' + STEPS().map(function (s, i) {
      return '<li><span class="w10-n">' + (i + 1) + "</span><b>" + s[0] + "</b><p>" + s[1] + "</p></li>";
    }).join("") + "</ol>";
  }
  var APPS = function () {
    return [
      ["residential", "media/uses/living-walnut.jpg", L("Residential", "سكني", "住宅"), L("Living rooms, TV walls, bedrooms, entrances and corridors.", "صالات، حوائط تلفزيون، غرف نوم، مداخل وطرقات.", "客厅、电视墙、卧室、玄关与走廊。"), ["wood", "marble", "textile"]],
      ["retail", "media/uses/boutique.jpg", L("Commercial & retail", "تجاري ومحلات", "商业与零售"), L("Boutiques, showrooms, malls and pharmacies that need a clean, fast fit-out.", "محلات، معارض، مولات وصيدليات محتاجة تشطيب نضيف وسريع.", "精品店、展厅、商场与药店，快速且整洁的装修。"), ["marble", "solid", "wood"]],
      ["hospitality", "media/uses/hotel.jpg", L("Hospitality", "فنادق ومطاعم", "酒店与餐饮"), L("Hotel lobbies and rooms, restaurants and cafés.", "لوبي وغرف الفنادق، المطاعم والكافيهات.", "酒店大堂与客房、餐厅与咖啡馆。"), ["wood", "marble", "leather"]],
      ["office", "media/uses/office.jpg", L("Office", "مكاتب", "办公"), L("Reception walls, meeting rooms and executive offices.", "حوائط استقبال، غرف اجتماعات ومكاتب إدارة.", "前台背景墙、会议室与行政办公室。"), ["wood", "solid", "leather"]],
      ["healthcare", "media/uses/clinic-wood.jpg", L("Healthcare", "عيادات ومراكز طبية", "医疗"), L("Clinics, dental and medical centres where walls are wiped often.", "عيادات، أسنان ومراكز طبية الحوائط فيها بتتمسح كتير.", "诊所、牙科与医疗中心等需频繁擦拭的墙面。"), ["solid", "marble", "ceramic"]],
      ["entertainment", "media/uses/gym-dark.jpg", L("Entertainment & leisure", "ترفيه ورياضة", "娱乐与休闲"), L("Gyms, salons, studios, stages and waiting areas.", "جيم، صالونات، استوديوهات، مسارح وأماكن انتظار.", "健身房、美容沙龙、工作室、舞台与等候区。"), ["solid", "wood", "leather"]]
    ];
  };
  function famName(f) {
    var m = { wood: L("Wood", "خشب", "木纹"), marble: L("Marble", "رخام", "大理石"), textile: L("Linen", "كتان", "布纹"), solid: L("Solid", "سادة", "纯色"), leather: L("Leather", "جلد", "皮纹"), ceramic: L("Ceramic", "سيراميك", "瓷砖纹"), chipboard: L("Chipboard/WPC", "شيبورد/WPC", "刨花板/WPC") };
    return m[f] || f;
  }
  function appsGrid(compact) {
    return '<div class="w10-apps' + (compact ? " compact" : "") + '">' + APPS().map(function (a) {
      return '<article class="w10-app" id="app-' + a[0] + '"><figure><img src="' + a[1] + '" alt="' + esc(a[2]) + '" loading="lazy" width="640" height="400"/><figcaption>' + L("Application idea", "فكرة تطبيق", "应用构想") + "</figcaption></figure><div class=\"w10-app-b\"><b>" + a[2] + "</b><p>" + a[3] + "</p>" +
        (compact ? '<button type="button" class="btn ghost-dark" data-tab="applications" data-anchor="app-' + a[0] + '">' + L("Details", "التفاصيل", "详情") + "</button>"
          : '<div class="w10-fams">' + a[4].map(function (f) { return '<button type="button" class="w10-chip" data-w10fam="' + f + '">' + famName(f) + "</button>"; }).join("") + '</div><div class="w10-links"><button type="button" class="btn ghost-dark" data-tab="products">' + L("Product lines", "خطوط المنتجات", "产品线") + '</button><button type="button" class="btn ghost-dark" data-tab="sheets">' + L("Sheets", "ألواح", "大板") + "</button></div>") +
        "</div></article>";
    }).join("") + "</div>";
  }

  /* ---------- pages ---------- */
  var P = {};
  P.partner = function () {
    var sup = [
      [L("Samples", "عيّنات", "样品"), L("Real factory samples by code before any volume decision.", "عيّنات حقيقية بالكود قبل أي قرار كمية.", "批量决定前提供按编码的工厂实物样品。")],
      [L("Showroom & display kits", "مجموعات عرض للمعرض", "展厅与展示套件"), L("Sample boards, code books and display walls for your showroom.", "بوردات عيّنات، كتالوجات أكواد وحوائط عرض لمعرضك.", "样板、编码册与展厅展示墙。")],
      [L("Marketing material", "مواد تسويق", "营销物料"), L("Photos, renderings, videos and catalog pages in English, Arabic and Chinese.", "صور، تصوّرات، فيديوهات وصفحات كتالوج بالعربي والإنجليزي والصيني.", "中英阿三语的图片、效果图、视频与图册页面。")],
      [L("Space design help", "مساعدة في تصميم المكان", "空间设计协助"), L("Code suggestions and 3D wall previews for your customers' rooms.", "اقتراح أكواد ومعاينة 3D للحيطة لأماكن عملاءك.", "为您的客户空间推荐编码并提供 3D 墙面预览。")],
      [L("Delivery", "توريد", "配送"), L("Loaded from the 6th of October factory, packed separately by code.", "تحميل من مصنع 6 أكتوبر، وكل كود متغلّف لوحده.", "从十月六日城工厂装车，按编码分开包装。")],
      [L("Installation guidance", "إرشاد التركيب", "安装指导"), L("Step-by-step install guides and technical answers for your installers.", "دليل تركيب خطوة بخطوة وإجابات فنية للفنيين بتوعك.", "分步安装指南，为您的安装工人解答技术问题。")]
    ];
    var who = [L("Showrooms & building-material shops", "معارض ومحلات خامات بناء", "展厅与建材店"), L("Finishing & fit-out contractors", "مقاولين تشطيب", "装修与施工公司"), L("Wholesalers & regional dealers", "تجار جملة ووكلاء مناطق", "批发商与区域经销商"), L("Developers & interior designers", "مطوّرين ومصممين داخليين", "开发商与室内设计师")];
    var reg = [
      [L("Egypt — all governorates", "مصر — كل المحافظات", "埃及 — 全国各省"), L("Cairo & Giza, Alexandria & the Delta, Canal cities, Upper Egypt, Red Sea and the North Coast.", "القاهرة والجيزة، إسكندرية والدلتا، مدن القناة، الصعيد، البحر الأحمر والساحل الشمالي.", "开罗与吉萨、亚历山大与三角洲、运河城市、上埃及、红海及北海岸。")],
      [L("Gulf", "الخليج", "海湾地区"), L("Saudi Arabia, UAE, Kuwait, Qatar, Bahrain and Oman — by export arrangement.", "السعودية، الإمارات، الكويت، قطر، البحرين وعُمان — بترتيب تصدير.", "沙特、阿联酋、科威特、卡塔尔、巴林与阿曼 — 按出口安排。")],
      [L("Africa", "أفريقيا", "非洲"), L("North, East and West African markets — by export arrangement.", "أسواق شمال وشرق وغرب أفريقيا — بترتيب تصدير.", "北非、东非与西非市场 — 按出口安排。")]
    ];
    return '<div class="wrap w10">' + head(L("Partner with the factory", "اشتغل مع المصنع", "与工厂合作"), L("Distributor program", "برنامج الموزعين", "经销商计划"),
      L("We are looking for distributors and dealers for " + brand() + " PVC and WPC wall finishes. You sell; we manufacture, supply and support.", "بندوّر على موزعين ووكلاء لتشطيبات حوائط PVC وWPC من " + brand() + ". انت تبيع، واحنا نصنّع ونورّد وندعمك.", "我们正在为" + brand() + " PVC 与 WPC 墙面饰面招募经销商与代理商。您负责销售，我们负责生产、供货与支持。")) +
      '<h3 class="w10-h3">' + L("Who we work with", "بنشتغل مع مين", "合作对象") + '</h3><ul class="w10-tags">' + who.map(function (w) { return "<li>" + w + "</li>"; }).join("") + "</ul>" +
      '<h3 class="w10-h3">' + L("What we support", "بندعمك في إيه", "我们提供的支持") + '</h3><div class="grid3">' + sup.map(function (s) { return '<article class="card"><div class="meta"><b>' + s[0] + "</b><p>" + s[1] + "</p></div></article>"; }).join("") + "</div>" +
      '<h3 class="w10-h3">' + L("Regions", "المناطق", "区域") + '</h3><div class="grid3">' + reg.map(function (s) { return '<article class="card"><div class="meta"><b>' + s[0] + "</b><p>" + s[1] + "</p></div></article>"; }).join("") + "</div>" +
      '<h3 class="w10-h3">' + L("Cooperation process", "خطوات التعاون", "合作流程") + "</h3>" + stepsHtml() +
      '<p class="note">' + L("Prices, territories and terms are agreed privately per distributor — never published on the site.", "الأسعار والمناطق والشروط بتتحدد خاص مع كل موزع — مش بتتنشر على الموقع.", "价格、区域与条款与每位经销商单独商定，不在网站公开。") + "</p>" + ctaRow() + "</div>";
  };
  P.applications = function () {
    return '<div class="wrap w10">' + head(L("Where the finishes go", "التشطيبات بتتركّب فين", "饰面用在哪里"), L("Applications", "مجالات الاستخدام", "应用领域"),
      L("Six market segments your customers buy for. Each links to the finish families that suit it.", "ست قطاعات بيشتري لها عملاءك. كل قطاع مربوط بعائلات التشطيب المناسبة له.", "您的客户所面向的六大细分市场，每个都链接到合适的花色系列。")) + appsGrid(false) + ideaNote() + ctaRow() + "</div>";
  };
  P.concepts = function () {
    var C = [
      ["media/uses/lobby-bookmatch.jpg", L("Hotel lobby feature wall", "حيطة مميزة في لوبي فندق", "酒店大堂主题墙"), L("Book-matched marble sheets with wood slats around the reception.", "ألواح رخام متناظرة مع شرائح خشب حوالين الاستقبال.", "对纹大理石大板，前台四周配木纹格栅。")],
      ["media/uses/restaurant-slats.jpg", L("Restaurant slat wall", "حيطة شرائح في مطعم", "餐厅格栅墙"), L("Fluted wood-look slats for warmth and quick install.", "شرائح فلوت بشكل الخشب لدفا المكان وتركيب سريع.", "木纹格栅条营造温暖感，安装快速。")],
      ["media/uses/pharmacy-marble.jpg", L("Pharmacy / retail fit-out", "تشطيب صيدلية / محل", "药店 / 零售装修"), L("Easy-wipe marble sheets behind counters and shelving.", "ألواح رخام سهلة المسح ورا الكاونتر والرفوف.", "柜台与货架后方易擦拭的大理石大板。")],
      ["media/uses/meeting-walnut.jpg", L("Meeting room", "غرفة اجتماعات", "会议室"), L("Walnut slats with acoustic-look rhythm for offices.", "شرائح جوز بإيقاع شكل عازل للصوت للمكاتب.", "胡桃木纹格栅，适合办公空间。")],
      ["media/uses/clinic-wood.jpg", L("Clinic waiting area", "منطقة انتظار عيادة", "诊所候诊区"), L("Light wood and solid colours that are easy to keep clean.", "خشب فاتح وألوان سادة سهلة التنضيف.", "浅木纹与纯色，易于清洁。")],
      ["media/uses/reception-leather.jpg", L("Corporate reception", "استقبال شركة", "公司前台"), L("Leather-texture panels and logo wall concept.", "ألواح بملمس الجلد وفكرة حيطة اللوجو.", "皮纹板与企业标识墙构想。")],
      ["media/uses/salon-beige.jpg", L("Beauty salon", "صالون تجميل", "美容沙龙"), L("Soft beige finishes with gold-tone trims.", "تشطيبات بيج هادية مع إكسسوارات بلون دهبي.", "柔和米色饰面配金色收边。")],
      ["media/uses/living-walnut.jpg", L("Residential TV wall", "حيطة تلفزيون سكني", "住宅电视墙"), L("Walnut slats and marble sheet combination.", "شرائح جوز مع لوح رخام.", "胡桃木格栅与大理石大板组合。")],
      ["media/uses/mall.jpg", L("Mall unit / showroom", "وحدة مول / معرض", "商场店铺 / 展厅"), L("Fast shop-front and interior wall finishing.", "تشطيب سريع لواجهة المحل والحيطان الداخلية.", "快速完成店面与内墙饰面。")]
    ];
    return '<div class="wrap w10">' + head(L("Project types we supply", "أنواع المشاريع اللي بنورّد لها", "我们供货的项目类型"), L("Application concepts", "أفكار تطبيق للمشاريع", "应用构想"),
      L("Concept renderings of the project types our finishes are made for. These are ideas to show distributors and their customers — not a list of past jobs.", "تصوّرات لأنواع المشاريع اللي التشطيبات معمولة لها. دي أفكار تعرضها على عملاءك — مش قائمة أعمال سابقة.", "展示我们饰面适用项目类型的概念效果图，供经销商向客户展示，并非过往项目清单。")) +
      '<div class="w10-apps">' + C.map(function (c) { return '<article class="w10-app"><figure><img src="' + c[0] + '" alt="' + esc(c[1]) + '" loading="lazy" width="640" height="400"/><figcaption>' + L("Concept rendering", "تصوّر", "概念效果图") + '</figcaption></figure><div class="w10-app-b"><b>' + c[1] + "</b><p>" + c[2] + "</p></div></article>"; }).join("") + "</div>" + ideaNote() + ctaRow() + "</div>";
  };
  P.rnd = function () {
    var B = [
      ["media/factory/manufacturing-panels.jpg", L("Manufacturing", "التصنيع", "生产制造"), L("PVC and WPC slats, sheets and trims are extruded, laminated and cut to length at our 6th of October factory, Plot 37.", "الشرائح والألواح والإكسسوارات PVC وWPC بتتبثق وتتغلّف وتتقص بالطول في مصنعنا بـ 6 أكتوبر، قطعة 37.", "PVC 与 WPC 格栅条、大板与配件在十月六日城 37 号地块工厂挤出、覆膜并定长切割。")],
      ["media/factory/sample-rack.jpg", L("Quality control", "مراقبة الجودة", "质量控制"), L("Every code is checked against its master sample for colour, film adhesion, straightness and dimensions before packing.", "كل كود بيتراجع على العيّنة الأساسية في اللون، لزق الفيلم، الاستقامة والمقاسات قبل التغليف.", "每个编码在包装前都会对照标准样检查颜色、覆膜附着、平直度与尺寸。")],
      ["media/works/catalog-rack.jpg", L("R&D and new finishes", "التطوير وتشطيبات جديدة", "研发与新花色"), L("New décor films, profiles and textures are developed from market feedback — distributors can request codes for their region.", "تشطيبات وقطاعات وملامس جديدة بتتطوّر حسب رأي السوق — والموزع يقدر يطلب أكواد لمنطقته.", "根据市场反馈开发新的装饰膜、型材与纹理，经销商可为所在区域提出编码需求。")],
      ["media/home/feature-made-egypt.jpg", L("Packaging & delivery", "التغليف والتوريد", "包装与交付"), L("Packed separately by code with labels, then loaded from the factory to your location in Egypt or for export.", "تغليف لكل كود لوحده بليبل، وبعدها تحميل من المصنع لمكانك في مصر أو للتصدير.", "按编码分别包装并贴标，从工厂装车发往埃及境内或出口。")]
    ];
    return '<div class="wrap w10">' + head(L("Made in Egypt", "صناعة مصرية", "埃及制造"), L("Factory & R&D", "المصنع والتطوير", "工厂与研发"),
      L("Production, quality control, development and packing all happen at one factory in the 6th of October industrial zone.", "الإنتاج ومراقبة الجودة والتطوير والتغليف كلهم في مصنع واحد بالمنطقة الصناعية في 6 أكتوبر.", "生产、质检、研发与包装均在十月六日城工业区的同一工厂完成。")) +
      '<div class="w10-rows">' + B.map(function (b) { return '<article class="w10-row"><figure><img src="' + b[0] + '" alt="' + esc(b[1]) + '" loading="lazy" width="640" height="420"/></figure><div><h3>' + b[1] + "</h3><p>" + b[2] + "</p></div></article>"; }).join("") + "</div>" +
      '<div class="w10-cta"><button type="button" class="btn ghost-dark" data-tab="factory">' + L("Factory photos", "صور المصنع", "工厂照片") + '</button><button type="button" class="btn ghost-dark" data-tab="quality">' + L("Quality & certificates", "الجودة والشهادات", "质量与认证") + "</button></div>" + ctaRow() + "</div>";
  };
  P.quality = function () {
    var T = [
      [L("Water / moisture resistance", "مقاومة المياه والرطوبة", "防水 / 防潮"), L("Swelling and dimensional stability after water exposure.", "الانتفاخ وثبات المقاس بعد التعرّض للمية.", "浸水后的膨胀与尺寸稳定性。")],
      [L("VOC / formaldehyde emissions", "انبعاثات VOC والفورمالدهيد", "VOC / 甲醛释放"), L("Indoor air emissions of the finished panel.", "انبعاثات الهوا الداخلي من اللوح النهائي.", "成品板材的室内空气释放量。")],
      [L("Fire behaviour", "السلوك مع الحريق", "防火性能"), L("Reaction-to-fire classification of the panel.", "تصنيف تفاعل اللوح مع النار.", "板材的燃烧性能分级。")],
      [L("Surface wear & scratch", "مقاومة الخدش والتآكل", "耐磨与耐刮"), L("Abrasion and scratch resistance of the décor film.", "مقاومة الفيلم للاحتكاك والخدش.", "装饰膜的耐磨与耐刮性能。")],
      [L("Colour & light fastness", "ثبات اللون", "颜色与耐光性"), L("Colour stability under indoor light.", "ثبات اللون تحت الإضاءة الداخلية.", "室内光照下的颜色稳定性。")],
      [L("Dimensions & flatness", "المقاسات والاستواء", "尺寸与平整度"), L("Width, thickness, length and straightness tolerances per code.", "تفاوت العرض والسُمك والطول والاستقامة لكل كود.", "每个编码的宽度、厚度、长度与平直度公差。")]
    ];
    return '<div class="wrap w10">' + head(L("Documents for distributors", "مستندات للموزعين", "经销商资料"), L("Quality & certificates", "الجودة والشهادات", "质量与认证"),
      L("Certificates and test reports are available on request. Tell us your market and project type and we will send the documents that apply.", "الشهادات وتقارير الاختبار متاحة عند الطلب. قولنا سوقك ونوع المشروع ونبعتلك المستندات المناسبة.", "证书与检测报告可应要求提供。请告诉我们您的市场与项目类型，我们将发送适用的文件。")) +
      '<h3 class="w10-h3">' + L("Test types we can provide documents for", "أنواع الاختبارات اللي نقدر نوفّر مستنداتها", "可提供文件的检测类型") + '</h3><div class="grid3">' + T.map(function (s) { return '<article class="card"><div class="meta"><b>' + s[0] + "</b><p>" + s[1] + '</p><small>' + L("Report on request", "التقرير عند الطلب", "报告按需提供") + "</small></div></article>"; }).join("") + "</div>" +
      '<div class="w10-box"><h3>' + L("Request a spec sheet or certificate pack", "اطلب ملف مواصفات أو الشهادات", "索取规格表或认证资料") + "</h3><p>" + L("Spec sheets per product line (codes, sizes, thickness, packing) are sent as PDF over WhatsApp.", "ملفات المواصفات لكل خط (أكواد، مقاسات، سُمك، تغليف) بتتبعت PDF على واتساب.", "各产品线规格表（编码、尺寸、厚度、包装）通过 WhatsApp 以 PDF 发送。") + '</p><button type="button" class="btn gold" data-w10wa="spec">' + L("Request documents on WhatsApp", "اطلب المستندات على واتساب", "通过 WhatsApp 索取文件") + "</button></div>" +
      '<p class="note">' + L("We do not publish certificate numbers or test figures on the site; the documents themselves are shared with distributors.", "مش بننشر أرقام شهادات أو نتايج اختبارات على الموقع؛ المستندات نفسها بتتبعت للموزعين.", "我们不在网站公开证书编号或检测数据，文件本身将提供给经销商。") + "</p>" + ctaRow() + "</div>";
  };
  function rangeOf(list) {
    if (!list.length) return "—";
    var a = list.slice().sort(function (x, y) { return String(x).localeCompare(String(y), "en", { numeric: true }); });
    return a.length === 1 ? a[0] : a[0] + " … " + a[a.length - 1];
  }
  P.technical = function () {
    var pr = (typeof PR !== "undefined" ? PR : []);
    var sh = (typeof SH !== "undefined" ? SH : []);
    var ff = (typeof F !== "undefined" ? F : []);
    var num = function (o) { return Object.keys(o).map(Number).sort(function (a, b) { return a - b; }); };
    function grp(name, list) {
      var ws = {}, ts = {}, ls = {}; list.forEach(function (p) { ws[p[1]] = 1; ts[p[2]] = 1; ls[p[3]] = 1; });
      var w = num(ws), th = num(ts), ln = num(ls);
      var rg = function (a) { return a.length ? (a[0] === a[a.length - 1] ? a[0] : a[0] + "–" + a[a.length - 1]) + " cm" : "—"; };
      return [name, rangeOf(list.map(function (p) { return p[0]; })), list.length, rg(w), rg(th), rg(ln)];
    }
    var slats = pr.filter(function (p) { var w = parseFloat(p[1]); return w >= 10 && w <= 30; });
    var other = pr.filter(function (p) { return slats.indexOf(p) < 0; });
    var lines = [
      grp(L("Fluted slats", "شرائح فلوت", "格栅条"), slats),
      grp(L("Trims, corners & accessories profiles", "زوايا وإكسسوارات وقطاعات مساعدة", "收边、转角与配件型材"), other),
      [L("Wall sheets", "ألواح حوائط", "墙面大板"), rangeOf(sh.map(function (s) { return s[0]; })), sh.length, "122 cm", "5 mm", "280 cm"]
    ];
    var famRows = ["wood", "marble", "ceramic", "chipboard", "textile", "solid", "leather"].map(function (f) {
      var c = ff.filter(function (x) { return x[1] === f; }).map(function (x) { return x[0]; });
      return [famName(f), rangeOf(c), c.length];
    }).filter(function (r) { return r[2]; });
    var H = [L("Line", "الخط", "产品线"), L("Code range", "نطاق الأكواد", "编码范围"), L("Codes", "عدد الأكواد", "编码数"), L("Width", "العرض", "宽度"), L("Thickness / depth", "السُمك / العمق", "厚度 / 深度"), L("Length", "الطول", "长度")];
    var H2 = [L("Finish family", "عائلة التشطيب", "花色系列"), L("Code range", "نطاق الأكواد", "编码范围"), L("Codes", "عدد الأكواد", "编码数")];
    function table(h, rows) { return '<div class="scroll"><table><tr>' + h.map(function (x) { return "<th>" + x + "</th>"; }).join("") + "</tr>" + rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>"; }
    var ins = [
      L("Wall dry, flat and clean; check with a 2 m straight edge.", "الحيطة ناشفة ومستوية ونضيفة؛ اتأكد بقدة 2 متر.", "墙面干燥、平整、清洁；用 2 米靠尺检查。"),
      L("Acclimatise panels in the room for 24 hours before fixing.", "سيب الألواح في المكان 24 ساعة قبل التركيب.", "安装前将板材在房间内放置 24 小时适应环境。"),
      L("Start from a plumb line; fix with adhesive and/or clips on battens.", "ابدأ من خط شاقول؛ ثبّت بالغرا و/أو كليبسات على مدادات.", "从铅垂线开始；用胶粘和/或卡扣固定在龙骨上。"),
      L("Leave a small expansion gap at ceiling, floor and corners; finish with trims.", "سيب فاصل تمدد صغير عند السقف والأرض والأركان؛ واقفل بالإكسسوارات.", "在顶部、地面与转角预留伸缩缝；用收边条收口。")
    ];
    return '<div class="wrap w10">' + head(L("For installers and buyers", "للفنيين والمشترين", "面向安装与采购"), L("Technical resources", "الدعم الفني", "技术资料"),
      L("Spec tables from the live catalog, installation basics and links to the full guides.", "جداول مواصفات من الكتالوج، أساسيات التركيب، ولينكات للأدلة الكاملة.", "来自在线图册的规格表、安装要点及完整指南链接。")) +
      '<h3 class="w10-h3">' + L("Product lines — specification", "خطوط المنتجات — المواصفات", "产品线规格") + "</h3>" + table(H, lines) +
      '<h3 class="w10-h3">' + L("Finish families — code ranges", "عائلات التشطيب — نطاق الأكواد", "花色系列编码范围") + "</h3>" + table(H2, famRows) +
      '<h3 class="w10-h3">' + L("Installation basics", "أساسيات التركيب", "安装要点") + '</h3><ol class="w10-list">' + ins.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ol>" +
      '<div class="w10-cta"><button type="button" class="btn ghost-dark" data-tab="install">' + L("Full install guide", "دليل التركيب الكامل", "完整安装指南") + '</button><button type="button" class="btn ghost-dark" data-tab="sizes">' + L("All profile sizes", "كل مقاسات القطاعات", "全部型材尺寸") + '</button><button type="button" class="btn ghost-dark" data-tab="specs">' + L("Specifications", "المواصفات", "规格") + '</button><button type="button" class="btn ghost-dark" data-tab="calc">' + L("Quantity calculator", "حاسبة الكميات", "用量计算器") + '</button><button type="button" class="btn gold" data-w10wa="spec">' + L("Request spec sheet (PDF)", "اطلب ملف المواصفات PDF", "索取规格表 PDF") + "</button></div></div>";
  };
  P.inquiry = function () {
    var bt = [L("Showroom / retail shop", "معرض / محل", "展厅 / 零售店"), L("Contractor / fit-out", "مقاول / تشطيبات", "装修 / 施工"), L("Wholesaler / dealer", "تاجر جملة / وكيل", "批发商 / 代理"), L("Developer", "مطوّر عقاري", "开发商"), L("Interior designer", "مصمم داخلي", "室内设计师"), L("Importer (export)", "مستورد (تصدير)", "进口商（出口）")];
    var it = [L("Become a distributor", "أبقى موزع", "成为经销商"), L("Samples & catalog", "عيّنات وكتالوج", "样品与图册"), L("Project supply", "توريد لمشروع", "项目供货"), L("Spec sheets & certificates", "مواصفات وشهادات", "规格表与证书")];
    function inp(id, lab, ph) { return '<label for="' + id + '">' + lab + '</label><input id="' + id + '" type="text" required placeholder="' + esc(ph || "") + '"/>'; }
    function sel(id, lab, opts) { return '<label for="' + id + '">' + lab + '</label><select id="' + id + '">' + opts.map(function (o) { return "<option>" + o + "</option>"; }).join("") + "</select>"; }
    return '<div class="wrap w10">' + head(L("Start the conversation", "ابدأ الكلام", "开始沟通"), L("Distributor inquiry", "طلب وكالة / توزيع", "经销申请"),
      L("Fill in a few details. The button opens WhatsApp with your message ready — review it and press send.", "املا شوية بيانات. الزرار هيفتح واتساب والرسالة جاهزة — راجعها ودوس إرسال.", "填写几项信息，按钮会打开 WhatsApp 并预填消息，确认后发送即可。")) +
      '<form class="w10-form" id="w10Form" novalidate>' +
      inp("w10Name", L("Your name", "الاسم", "姓名")) + inp("w10Co", L("Company", "الشركة", "公司")) +
      inp("w10City", L("Country / city", "الدولة / المدينة", "国家 / 城市"), L("e.g. Egypt — Alexandria", "مثلاً: مصر — إسكندرية", "例如：埃及 — 亚历山大")) +
      sel("w10Type", L("Business type", "نوع النشاط", "业务类型"), bt) + sel("w10Int", L("Interested in", "مهتم بـ", "感兴趣的内容"), it) +
      '<label for="w10Msg">' + L("Notes (optional)", "ملاحظات (اختياري)", "备注（可选）") + '</label><textarea id="w10Msg" rows="3"></textarea>' +
      '<p class="w10-err" id="w10Err" hidden>' + L("Please fill name, company and country / city.", "من فضلك املا الاسم والشركة والدولة / المدينة.", "请填写姓名、公司与国家 / 城市。") + "</p>" +
      '<button type="submit" class="btn gold">' + L("Send on WhatsApp", "ابعت على واتساب", "通过 WhatsApp 发送") + "</button></form>" +
      '<p class="note">' + L("Nothing is stored on this site; your details only go into the WhatsApp message you send.", "الموقع مش بيحفظ أي بيانات؛ بياناتك بتروح بس في رسالة الواتساب اللي انت بتبعتها.", "本网站不存储任何信息，您的资料只会出现在您发送的 WhatsApp 消息中。") + "</p>" + stepsHtml() + "</div>";
  };

  function waBase() {
    var w = window.WA || (document.getElementById("fabWa") || {}).href || "";
    return String(w).split("?")[0];
  }
  function openWa(text) {
    var url = waBase() + "?text=" + encodeURIComponent(text);
    var win = window.open(url, "_blank", "noopener");
    if (!win) location.href = url;
  }
  function submitForm(e) {
    e.preventDefault();
    var g = function (id) { var el = document.getElementById(id); return el ? String(el.value || "").trim() : ""; };
    var n = g("w10Name"), c = g("w10Co"), city = g("w10City");
    var err = document.getElementById("w10Err");
    if (!n || !c || !city) { if (err) err.hidden = false; return; }
    if (err) err.hidden = true;
    var lines = [
      L("Distributor inquiry — " + brand(), "طلب توزيع — " + brand(), "经销申请 — " + brand()),
      L("Name", "الاسم", "姓名") + ": " + n,
      L("Company", "الشركة", "公司") + ": " + c,
      L("Country / city", "الدولة / المدينة", "国家 / 城市") + ": " + city,
      L("Business type", "نوع النشاط", "业务类型") + ": " + g("w10Type"),
      L("Interested in", "مهتم بـ", "感兴趣的内容") + ": " + g("w10Int")
    ];
    var m = g("w10Msg"); if (m) lines.push(L("Notes", "ملاحظات", "备注") + ": " + m);
    openWa(lines.join("\n"));
  }

  /* ---------- homepage additions ---------- */
  function homeBlock() {
    var why = [
      [L("Factory-direct supply", "توريد مباشر من المصنع", "工厂直供"), L("Made in the 6th of October — short lead times inside Egypt.", "صناعة 6 أكتوبر — مدد توريد قصيرة جوه مصر.", "十月六日城生产，埃及境内交期短。")],
      [L("Hundreds of codes", "مئات الأكواد", "数百个编码"), L("Wood, marble, ceramic, linen, solid and leather looks in slats and sheets.", "خشب، رخام، سيراميك، كتان، سادة وجلد في شرائح وألواح.", "木纹、大理石、瓷砖纹、布纹、纯色与皮纹，格栅条与大板齐全。")],
      [L("Sales support", "دعم للبيع", "销售支持"), L("Samples, display kits, renderings and trilingual marketing material.", "عيّنات، مجموعات عرض، تصوّرات ومواد تسويق بثلاث لغات.", "样品、展示套件、效果图与三语营销物料。")],
      [L("Private pricing", "أسعار خاصة", "专属价格"), L("Distributor terms agreed directly — never published.", "شروط الموزع بتتحدد مباشرة — مش بتتنشر.", "经销条款直接商定，不公开。")]
    ];
    return '<div class="wrap home-rich w10-home" id="home-distributor"><section class="home-sec w10-band"><p class="k w10-k">' + L("For distributors & dealers", "للموزعين والوكلاء", "面向经销商与代理商") + "</p><h2>" +
      L("Grow your business with " + brand(), "كبّر شغلك مع " + brand(), "与" + brand() + "一起发展") + '</h2><p class="lead">' +
      L("We are building a distributor network across Egypt, the Gulf and Africa.", "بنبني شبكة موزعين في مصر والخليج وأفريقيا.", "我们正在埃及、海湾地区与非洲建立经销网络。") + '</p><div class="w10-why">' +
      why.map(function (w) { return "<div><b>" + w[0] + "</b><p>" + w[1] + "</p></div>"; }).join("") + "</div>" + ctaRow() + "</section>" +
      '<section class="home-sec" id="home-apps"><h2>' + L("Applications", "مجالات الاستخدام", "应用领域") + '</h2><p class="lead">' + L("One catalog for six markets your customers work in.", "كتالوج واحد لست أسواق بيشتغل فيها عملاءك.", "一本图册覆盖客户所在的六大市场。") + "</p>" + appsGrid(true) + ideaNote() + "</section>" +
      '<section class="home-sec" id="home-coop"><h2>' + L("How cooperation works", "التعاون بيمشي إزاي", "合作流程") + "</h2>" + stepsHtml() +
      '<div class="w10-cta"><button type="button" class="btn ghost-dark" data-tab="rnd">' + L("Factory & R&D", "المصنع والتطوير", "工厂与研发") + '</button><button type="button" class="btn ghost-dark" data-tab="quality">' + L("Quality & certificates", "الجودة والشهادات", "质量与认证") + '</button><button type="button" class="btn ghost-dark" data-tab="technical">' + L("Technical resources", "الدعم الفني", "技术资料") + "</button></div></section></div>";
  }

  /* ---------- SEO per route & language ---------- */
  var SEO = {
    home: [["Wall panel factory — become a distributor", "مصنع ألواح حوائط — بقى موزع", "墙板工厂 — 招募经销商"], ["PVC & WPC wall finishes made in the 6th of October, Egypt. Distributor program for Egypt, the Gulf and Africa; samples and pricing on request.", "تشطيبات حوائط PVC وWPC صناعة 6 أكتوبر، مصر. برنامج موزعين لمصر والخليج وأفريقيا؛ العيّنات والأسعار عند الطلب.", "埃及十月六日城生产的 PVC 与 WPC 墙面饰面。面向埃及、海湾与非洲的经销商计划；样品与价格按需提供。"]],
    partner: [["Distributor program", "برنامج الموزعين", "经销商计划"], ["Become a distributor: samples, display kits, marketing material, delivery and installation guidance. Egypt, Gulf and Africa.", "بقى موزع: عيّنات، مجموعات عرض، مواد تسويق، توريد وإرشاد تركيب. مصر والخليج وأفريقيا.", "成为经销商：样品、展示套件、营销物料、配送与安装指导。覆盖埃及、海湾与非洲。"]],
    applications: [["Applications — residential, retail, hospitality, office, healthcare", "مجالات الاستخدام — سكني، تجاري، فنادق، مكاتب، طبي", "应用领域 — 住宅、零售、酒店、办公、医疗"], ["Where PVC and WPC wall finishes are used, with the finish families that suit each segment.", "التشطيبات PVC وWPC بتستخدم فين، مع عائلات التشطيب المناسبة لكل قطاع.", "PVC 与 WPC 墙面饰面的应用场景及各领域适用的花色系列。"]],
    concepts: [["Application concepts — project types we supply", "أفكار تطبيق — أنواع المشاريع", "应用构想 — 供货项目类型"], ["Concept renderings of hotel, retail, office and clinic walls. Ideas, not past projects.", "تصوّرات لحوائط فنادق ومحلات ومكاتب وعيادات. أفكار، مش أعمال سابقة.", "酒店、零售、办公与诊所墙面概念效果图。仅为构想，并非过往项目。"]],
    rnd: [["Factory & R&D — 6th of October", "المصنع والتطوير — 6 أكتوبر", "工厂与研发 — 十月六日城"], ["Manufacturing, quality control, R&D and packaging at our factory in the 6th of October industrial zone.", "التصنيع ومراقبة الجودة والتطوير والتغليف في مصنعنا بالمنطقة الصناعية 6 أكتوبر.", "十月六日城工业区工厂的生产、质检、研发与包装。"]],
    quality: [["Quality & certificates", "الجودة والشهادات", "质量与认证"], ["Certificates and test reports available on request: water resistance, VOC, fire behaviour, wear, colour fastness.", "الشهادات وتقارير الاختبار متاحة عند الطلب: مقاومة المياه، VOC، الحريق، التآكل، ثبات اللون.", "证书与检测报告按需提供：防水、VOC、防火、耐磨、颜色稳定性。"]],
    technical: [["Technical resources — specs & installation", "الدعم الفني — مواصفات وتركيب", "技术资料 — 规格与安装"], ["Code ranges, sizes and thickness per product line, plus installation basics.", "نطاق الأكواد والمقاسات والسُمك لكل خط، مع أساسيات التركيب.", "各产品线的编码范围、尺寸与厚度，以及安装要点。"]],
    inquiry: [["Distributor inquiry", "طلب توزيع", "经销申请"], ["Send a distributor inquiry on WhatsApp: name, company, city, business type and interest.", "ابعت طلب توزيع على واتساب: الاسم، الشركة، المدينة، النشاط والاهتمام.", "通过 WhatsApp 发送经销申请：姓名、公司、城市、业务类型与需求。"]],
    products: [["Product lines — slats, sheets, trims", "خطوط المنتجات — شرائح، ألواح، إكسسوارات", "产品线 — 格栅条、大板、配件"], null],
    colors: [["Finish library — wood, stone, solid, metallic", "مكتبة التشطيبات — خشب، حجر، سادة، معدني", "花色库 — 木纹、石纹、纯色、金属"], null],
    chooser: [["How to choose a finish", "إزاي تختار التشطيب", "如何选择花色"], null],
    viz: [["3D wall preview", "معاينة الحيطة 3D", "3D 墙面预览"], null]
  };
  function idx() { var l = cur(); return l === "ar" ? 1 : (l === "zh" ? 2 : 0); }
  function setMeta(sel, val) { var el = document.querySelector(sel); if (el && val) el.setAttribute("content", val); }
  function seo() {
    var id = (typeof tab !== "undefined" ? tab : "home");
    var s = SEO[id], i = idx(), title;
    if (s) title = s[0][i];
    else { var row = (typeof TABS !== "undefined" ? TABS : []).filter(function (x) { return x[0] === id; })[0]; title = row ? (i === 1 ? row[1] : (i === 2 ? (row[3] || row[2]) : row[2])) : ""; }
    document.title = (title ? title + " | " : "") + brand();
    var desc = (s && s[1]) ? s[1][i] : null;
    if (desc) { setMeta('meta[name="description"]', desc); setMeta('meta[property="og:description"]', desc); }
    setMeta('meta[property="og:title"]', document.title);
    var can = document.querySelector('link[rel="canonical"]');
    if (can) can.setAttribute("href", "https://tubaobao-egypt-live.vercel.app/" + (id === "home" ? "" : "#" + id));
  }

  /* ---------- inject after every render ---------- */
  function inject() {
    var app = document.getElementById("app");
    if (!app) return;
    var t0 = (typeof tab !== "undefined" ? tab : "home");
    NEW.forEach(function (row) {
      var id = row[0], el = document.getElementById("p-" + id);
      if (!el) { el = document.createElement("section"); el.className = "page"; el.id = "p-" + id; app.appendChild(el); }
      if (t0 === id) { el.innerHTML = P[id](); el.classList.add("on"); }
      else { el.classList.remove("on"); }
    });
    if (t0 === "home") {
      var home = document.getElementById("p-home");
      if (home && !document.getElementById("home-distributor")) {
        var cta = home.querySelector(".hero-cta");
        if (cta && !cta.querySelector("[data-tab=partner]")) cta.insertAdjacentHTML("afterbegin", '<button class="btn gold" type="button" data-tab="partner">' + L("Become a distributor", "بقى موزع معانا", "成为经销商") + "</button>");
        if (cta) { var b2 = cta.querySelector('[data-tab="colors"]'); if (b2) { b2.classList.remove("gold"); b2.classList.add("ghost"); } }
        var facts = home.querySelector(".fact-strip");
        var holder = document.createElement("div"); holder.innerHTML = homeBlock();
        var blk = holder.firstChild;
        if (facts && facts.parentNode) facts.parentNode.insertBefore(blk, facts.nextSibling); else home.appendChild(blk);
      }
    }
    if (t0 === "colors") {
      var f = document.getElementById("filters");
      if (f && !f.querySelector("[data-fam^=tex-]")) {
        var cur0 = (typeof fam !== "undefined" ? fam : "all");
        var T = [["tex-wood", L("Wood", "خشب", "木纹")], ["tex-stone", L("Stone", "حجر", "石纹")], ["tex-soft", L("Fabric & leather", "قماش وجلد", "布纹与皮纹")], ["tex-solid", L("Solid", "سادة", "纯色")], ["tex-metal", L("Metallic", "معدني", "金属")]];
        f.insertAdjacentHTML("beforeend", '<span class="w10-tex">' + L("By texture:", "حسب الملمس:", "按纹理：") + "</span>" + T.map(function (x) { return '<button type="button" class="' + (cur0 === x[0] ? "on" : "") + '" data-fam="' + x[0] + '">' + x[1] + "</button>"; }).join(""));
      }
    }
    var foot = document.getElementById("footInner");
    if (foot && !foot.querySelector(".w10-foot")) foot.insertAdjacentHTML("beforeend", '<p class="w10-foot">' + L("Room images on this site are renderings / application ideas, not completed projects.", "صور الأماكن على الموقع تصوّرات وأفكار تطبيق، مش مشاريع متنفّذة.", "本站空间图片为效果图 / 应用构想，并非已完成项目。") + "</p>");
    var fm = document.getElementById("w10Form");
    if (fm && !fm.__w10) { fm.__w10 = 1; fm.addEventListener("submit", submitForm); }
    seo();
  }

  /* delegated clicks for injected content */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("#app [data-tab], #footInner [data-tab]");
    if (a && a.closest("#p-home .hero-cta, #home-distributor, " + NEW.map(function (r) { return "#p-" + r[0]; }).join(", "))) {
      e.preventDefault(); e.stopImmediatePropagation();
      var id = a.getAttribute("data-tab"); if (a.getAttribute("data-anchor")) id += ":" + a.getAttribute("data-anchor");
      if (typeof setTab === "function") setTab(id);
      return;
    }
    var fb = e.target.closest && e.target.closest("[data-w10fam]");
    if (fb) { e.preventDefault(); try { fam = fb.getAttribute("data-w10fam"); } catch (x) {} if (typeof setTab === "function") setTab("colors"); return; }
    var wb = e.target.closest && e.target.closest("[data-w10wa]");
    if (wb) { e.preventDefault(); openWa(L("Hello " + brand() + ", please send me the spec sheet / certificate pack. My company and city: ", "أهلاً " + brand() + "، من فضلك ابعتلي ملف المواصفات / الشهادات. شركتي ومدينتي: ", "您好，" + brand() + "，请发送规格表 / 认证资料。我的公司与城市：")); }
  }, true);

  var _render = window.render;
  if (typeof _render === "function") {
    window.render = function () { _render.apply(this, arguments); try { inject(); } catch (e) { if (window.console) console.error(e); } setTimeout(function () { try { inject(); } catch (e) {} }, 0); setTimeout(seo, 120); };
  }
  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) { _setTab.apply(this, arguments); try { inject(); } catch (e) {} setTimeout(seo, 120); };
  }
  if (typeof render === "function") { try { render(); } catch (e) {} }
})();
