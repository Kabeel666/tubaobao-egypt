/* Chooser, 3D preview, use-ideas. Loaded after richHome exists, before boot render. */
(function () {
  if (typeof TABS !== "undefined" && !TABS.some(function (x) { return x[0] === "chooser"; })) {
    var i = 0;
    for (var n = 0; n < TABS.length; n++) if (TABS[n][0] === "colors") i = n + 1;
    TABS.splice(i, 0,
      ["chooser", "اختار إيه", "Chooser", "如何选择"],
      ["viz", "معاينة 3D", "3D preview", "3D 预览"]
    );
  }
  window.PRIMARY = ["home", "products", "colors", "chooser", "viz"];


  window.homeSearchPool = function () {
    var finishes = (typeof F !== "undefined" ? F : []).map(function (x) {
      return { kind: "finish", code: x[0], fam: x[1], ar: x[2], en: x[3], color: x[4] };
    });
    var sheets = (typeof SH !== "undefined" ? SH : []).map(function (x) {
      return { kind: "sheet", code: x[0], fam: "sheet", ar: x[1], en: x[2], color: x[3] };
    });
    return finishes.concat(sheets);
  };
  window.filterPool = function (q) {
    q = (q || "").trim().toLowerCase();
    var pool = window.homeSearchPool();
    var out;
    if (!q) out = pool.slice(0, 10);
    else {
      out = pool.filter(function (p) {
        var famZhS = {wood:"木材 木纹",marble:"大理石",leather:"皮革",textile:"亚麻",ceramic:"陶瓷",chipboard:"刨花板",solid:"纯色",sheet:"板材 大板"};
        var hay = (p.code + " " + p.ar + " " + p.en + " " + p.fam + " " + p.kind + " " + (famZhS[p.fam] || "") + (p.kind === "sheet" ? " 大板 لوح" : "")).toLowerCase();
        return hay.indexOf(q) >= 0;
      }).slice(0, 12);
    }
    // Prefer items that have a catalog photo when the query is empty
    if (!q && window.CODE_MEDIA) {
      var withPhoto = [];
      var without = [];
      out.forEach(function (p) {
        if (CODE_MEDIA[p.code] && CODE_MEDIA[p.code].primary) withPhoto.push(p);
        else without.push(p);
      });
      out = withPhoto.concat(without).slice(0, 10);
    }
    return out;
  };


  function L(ar, en, zh) {
    if (typeof lang !== "undefined" && lang === "ar") return ar;
    if (typeof lang !== "undefined" && lang === "zh") return (zh != null && zh !== "") ? zh : en;
    return en;
  }
  function isAr() { return typeof lang !== "undefined" && lang === "ar"; }
  function isZh() { return typeof lang !== "undefined" && lang === "zh"; }
  var SPOT_ZH = {
    "use-shop": ["商铺", "店内墙面和展架背面可以用木纹格栅、WPC 或浅色仿石。只做室内。数量和价格请用页眉的联系按钮询价。"],
    "use-mall": ["商场", "大堂用中性纯色或仿石，柱子和店铺走廊用格栅。不能做日晒外墙。价格面议。"],
    "use-office": ["办公室", "会议室和前台适合灰色、亚麻或安静的木纹。保持干燥。页面不标价。"],
    "use-hotel": ["酒店", "客房和走廊重复同一个编码：浅木、亚麻或安静仿石。预览只看效果，不是盖章图纸。"],
    "use-cafe": ["咖啡店", "吧台和座位墙用暖木或亚麻。避开直接溅水。按编码和数量报价。"],
    "use-clinic": ["诊所", "候诊和走廊用浅色纯色或好擦的仿瓷。不是医用防水，页面也不标价。图库里没有单独的诊所实拍。"],
    "use-3d": ["三维预览", "把房间照片、尺寸和编码发过来，安装前我们回一张效果。工作室那张图是上墙构想，不是真实项目，也不是施工图。"],
    "use-chooser": ["怎么选", "一份不带价格的指南：仿石、木纹、仿瓷、刨花板/WPC 或亚麻，以及 13.4、16、20 和 5mm 大板。颜色以工厂样品为准。"],
    "use-living": ["公寓客厅", "电视墙周围用浅木或亚麻。墙面要干燥。这是上墙构想，不是某套已交房的照片。价格面议。"],
    "use-kids": ["儿童房", "干燥墙面上用浅色、好擦的纯色。不是游乐地面。"],
    "use-clinic-corridor": ["诊所走廊", "浅色纯色或仿瓷，只适合日常擦拭。本站不提供医疗认证。"],
    "use-cafe-counter": ["咖啡柜台", "柜台周围用暖木或格栅，远离喷水和明火。这是上墙构想。"],
    "use-mosque": ["安静的室内礼拜处", "干燥墙面用安静的颜色。不是外墙，不是地面，也不会拍礼拜的人。数量请用联系按钮。"],
    "use-hotel-lobby": ["酒店大堂", "前台墙用安静的仿石或纯色。这是构想，不是已发布的真实大堂。"],
    "use-shop-interior": ["店铺内部", "展架背面或入口内侧。不是临街外墙。按单供应。"],
    "use-meeting": ["会议室", "干燥墙面用灰色或安静木纹。不出现公司名称。"],
    "use-kitchen-wall": ["厨房", "橱柜之间用 5mm 仿石或仿瓷。远离明火。这是上墙构想。"],
    "use-gym": ["健身房", "人流多的干燥墙面用深灰纯色或 WPC。不做地面。用途构想。"],
    "use-school": ["学校", "走廊、前台和教室用好擦的浅色纯色。按编码和数量询价。"],
    "use-restaurant": ["餐厅", "座位墙或室内吧台背景，远离明火。按编码和数量询价。"],
    "use-salon": ["美容沙龙", "镜子和座椅后面用亚麻或安静的木纹。只做室内。"],
    "use-ceiling": ["室内吊顶", "干燥吊顶用线性格栅或 5mm 大板。不是保温层，也不承重。上墙构想。"],
    "use-column": ["包柱", "13.4 cm 比 16 或 20 cm 更好包柱。仿石或木纹格栅，按实际尺寸裁切。"],
    "use-reception": ["前台", "办公室、诊所、酒店或商场的前台背景墙，平面上可以放标识。"],
    "use-clinic-2": ["诊所细节", "候诊区、走廊和前台用每天好擦的浅色。不是医用防水。"],
    "use-pharmacy": ["药店", "货架或柜台后面用好擦的浅色室内墙。按编码和数量询价。"],
    "use-home": ["公寓", "卧室和客厅用木纹或亚麻，厨房和卫生间用仿石或仿瓷。用途构想。"],
    "use-library": ["图书馆与等候区", "干燥墙面用安静的木纹或纯色。先看样品再定数量。"],
    "use-prayer": ["室内礼拜室", "干燥室内墙用安静的颜色。不做外墙和地面。"],
    "use-gallery": ["室内展廊", "展品后面的墙或室内柱子。图片是上墙构想。"],
    "use-showstore": ["展示间", "展示间干燥墙面用刨花板、WPC 或纯色。按单供应。"]
  };
  function spotTitle(s) {
    if (isAr()) return s.arT;
    if (isZh() && SPOT_ZH[s.id]) return SPOT_ZH[s.id][0];
    if (isZh() && s.zhT) return s.zhT;
    return s.enT;
  }
  function spotBody(s) {
    if (isAr()) return s.ar;
    if (isZh() && SPOT_ZH[s.id]) return SPOT_ZH[s.id][1];
    if (isZh() && s.zh) return s.zh;
    return s.en;
  }


  if (typeof AR !== "undefined") {
    AR.spT = "فين ينفع يتركّب";
    AR.spS = "محلات، مولات، مكاتب، عيادات، فنادق، كافيهات، مدارس، مطاعم، صالونات، جيم، مطابخ، حمامات، أعمدة، كاونتر استقبال، وحوائط مميزة. أفكار استخدام مش سابقة أعمال.";
    AR.projT = "أفكار استخدام (مش مشاريع منشورة)";
    AR.projS = "مخططات نصية استرشادية فقط. مفيش أسماء عملاء، ومفيش صور متقدّمة على إنها سابقة أعمال.";
    AR.galleryT = "صور المصنع وأفكار التطبيق";
    AR.galleryS = "صور الأكواد والتصنيع من الكتالوج. صور المحلات والمول والمكتب والكافيه والفندق والاستوديو أفكار تطبيق مولَّدة — ليست سابقة أعمال.";
    var extraFaq = [
      ["أختار رخام ولا خشب ولا سيراميك؟", "من غير أرقام قياسية: الرخام لوك والسيراميك لوك للحمام والمطبخ والاستقبال. الخشب والكتان للصالة والمكتب والكافيه. الشيبورد/WPC للفلوت والأعمدة والمحلات. التفاصيل في تبويب «اختار إيه»."],
      ["إيه فرق 13.4 و16 و20 واللوح 5مم؟", "13.4 سم فلوت أضيق ويلف الأعمدة. 16 سم توازن شائع. 20 سم أقل فواصل على الحوائط الواسعة. اللوح 5مم مقاس 1.22 × 2.80 م للمسطح الكبير. كله داخلي، والسعر عند الطلب."],
      ["بتعملوا 3D؟", "نعمل معاينة شكل للحائط قبل التركيب على واتساب: صور الأوضة والمقاسات والكود المفضّل. دي معاينة تصميم تقريبية، مش رسم تنفيذ مختوم ومش لوحة إنشائية."],
      ["ينفع للمحلات والمولات والمكاتب؟", "أيوه للاستخدام الداخلي: محلات، مولات، مكاتب، عيادات، فنادق، كافيهات، مدارس، مطاعم، صالونات، جيم، مطابخ، حمامات يومية، أعمدة، استقبال، وحوائط مميزة. مش عزل إنشائي ومش واجهة شمس دائمة."]
    ];
    AR.faq = (AR.faq || []).concat(extraFaq.filter(function (q) {
      return !(AR.faq || []).some(function (x) { return x[0] === q[0]; });
    }));
  }
  if (typeof EN !== "undefined") {
    EN.spT = "Where it can go";
    EN.spS = "Shops, malls, offices, clinics, hotels, cafés, schools, restaurants, salons, gyms, kitchens, bathrooms, columns, reception desks, and feature walls. Use ideas, not past projects.";
    EN.projT = "Use ideas (not published projects)";
    EN.projS = "Text sketches only. No client names, and no photos presented as completed jobs.";
    EN.galleryT = "Factory photos and application ideas";
    EN.galleryS = "Catalog and manufacturing photos are real. Shop, mall, office, café, hotel and studio images are generated application ideas — not past projects.";
    var extraEn = [
      ["Marble, wood, or ceramic?", "No standards claimed: marble look and ceramic look for baths, kitchens and reception. Wood and linen for living rooms, offices and cafés. Chipboard/WPC for flutes, columns and shops. See the Chooser tab."],
      ["What is 13.4 vs 16 vs 20 vs the 5mm sheet?", "13.4 cm is a tighter flute and wraps columns. 16 cm is the common balance. 20 cm means fewer joints on wide walls. The 5 mm sheet is 1.22 × 2.80 m for a large plane. Interior use; price on request."],
      ["Do you do 3D?", "Yes — a look preview of the wall before install, on WhatsApp: room photos, sizes, and the finish you like. It is an approximate design preview, not a stamped construction drawing and not a structural sheet."],
      ["Suitable for shops, malls and offices?", "Yes for interiors: shops, malls, offices, clinics, hotels, cafés, schools, restaurants, salons, gyms, kitchens, everyday bathrooms, columns, reception, and feature walls. Not structural waterproofing and not a permanent sun façade."]
    ];
    EN.faq = (EN.faq || []).concat(extraEn.filter(function (q) {
      return !(EN.faq || []).some(function (x) { return x[0] === q[0]; });
    }));
  }



  window.USE_SPOTS = [
    {id:"use-shop", media:"boutique", arT:"محلات تجارية", enT:"Shops",
      ar:"فلوت خشب أو WPC أو رخام فاتح على حائط المحل وظهر العرض. داخلي فقط، والكمية والسعر عرض من زر تواصل في القائمة.",
      en:"Wood flute, WPC, or light marble on the shop wall and display back. Interior only. Quantity and price are to order from the Contact button."},
    {id:"use-mall", media:"mall", arT:"مولات", enT:"Malls",
      ar:"ساده محايد أو رخام لوك للوبي، وفلوت يلف العمود وممر المحلات. مش واجهة شمس. السعر عند الطلب.",
      en:"Neutral solid or marble look for the lobby, and a flute that wraps columns and shop corridors. Not a sun façade. Price on request."},
    {id:"use-office", media:"office", arT:"مكاتب", enT:"Offices",
      ar:"رمادي أو كتان أو خشب هادي لغرف الاجتماع والاستقبال. مكان جاف. مفيش سعر منشور — للطلب.",
      en:"Grey, linen, or quiet wood for meeting rooms and reception. A dry room. No published price — to order."},
    {id:"use-hotel", media:"hotel", arT:"فنادق", enT:"Hotels",
      ar:"كود واحد يتكرر في الغرف والممرات: خشب فاتح أو كتان أو رخام هادي. المعاينة شكل تقريبي مش رسم مختوم.",
      en:"One code repeated in rooms and corridors: light wood, linen, or quiet marble. The preview is a look, not a stamped drawing."},
    {id:"use-cafe", media:"cafe", arT:"كافيهات", enT:"Cafés",
      ar:"خشب دافئ أو كتان حول البار وحائط الجلوس. ابعد عن رش المياه المباشر. العرض بالكود والكمية.",
      en:"Warm wood or linen around the bar and the seating wall. Keep it off direct water spray. The quote is by code and quantity."},
    {id:"use-clinic", media:"", arT:"عيادات", enT:"Clinics",
      ar:"ساده فاتح أو سيراميك لوك يتمسح يوميًا في الانتظار والممرات. مش عزل طبي ومش سعر منشور. مفيش صورة مخصصة للعيادة في المكتبة.",
      en:"Light solid or ceramic look that wipes clean in waiting rooms and corridors. Not medical tanking and not a listed price. No dedicated clinic photo in the library."},
    {id:"use-3d", media:"preview3d", tab:"viz", arT:"معاينة 3D", enT:"3D preview",
      ctaAr:"تفاصيل المعاينة", ctaEn:"Preview details",
      ar:"ابعت صور الأوضة والمقاسات والكود، ونرجّع معاينة شكل قبل التركيب. فكرة تطبيق للاستوديو — ليست مشروعًا حقيقيًا، ومش لوحة تنفيذ.",
      en:"Send room photos, sizes and a code, and we return a look preview before install. The studio picture is an application idea — not a real project, and not a construction sheet."},
    {id:"use-chooser", media:"chooser", tab:"chooser", arT:"اختار إيه", enT:"Chooser",
      ctaAr:"افتح دليل الاختيار", ctaEn:"Open the chooser",
      ar:"دليل من غير أسعار: رخام، خشب، سيراميك لوك، شيبورد/WPC، أو كتان، والعروض 13.4 و16 و20 واللوح 5مم. العيّنة من المصنع تحسم اللون.",
      en:"A guide with no prices: marble, wood, ceramic look, chipboard/WPC, or linen, and widths 13.4, 16 and 20 plus the 5mm sheet. The factory sample decides the colour."}
  ];

  function spotImg(id) {
    if (!id || !window.MEDIA || !MEDIA.uses) return "";
    for (var i = 0; i < MEDIA.uses.length; i++) {
      if (MEDIA.uses[i].id === id && MEDIA.uses[i].img) return MEDIA.uses[i].img;
    }
    return "";
  }

  window.useJumpHtml = function () {
    var ar = isAr();
    var h = '<nav class="use-jump">';
    window.USE_SPOTS.forEach(function (s) {
      h += '<a href="#spaces:' + s.id + '" data-tab="spaces" data-anchor="' + s.id + '">' + spotTitle(s) + "</a>";
    });
    h += "</nav>";
    return h;
  };

  window.usePlacesHtml = function () {
    var ar = isAr();
    var h = window.useJumpHtml();
    var shapes = isZh() ? [
      ["竖向格栅", "墙面或柱子上的纵向条板。"],
      ["平板", "5mm 大板，接缝更少。"],
      ["皮革方块", "干燥墙面上的皮革方块肌理。"],
      ["书本对纹", "主墙上左右对称的石纹。"],
      ["木纹配皮革", "床头或前台：暖木加上一点皮革。"]
    ] : (ar ? [
      ["فلوت رأسي", "شرائح طولية على الحائط أو العمود."],
      ["لوح مسطح", "مسطح واسع 5مم من غير فواصل كتير."],
      ["مربعات جلد", "تقسيم مربعات بمظهر جلد على حائط جاف."],
      ["بوك ماتش", "تعريق متماثل على حائط مميز."],
      ["خشب مع جلد", "خشب دافئ مع لمسة جلد في الهيدبورد أو الاستقبال."]
    ] : [
      ["Vertical flute", "Lengthwise slats on a wall or a column."],
      ["Flat sheet", "A wide 5mm plane with fewer joints."],
      ["Leather squares", "A squared leather look on a dry wall."],
      ["Bookmatch", "A mirrored vein on a feature wall."],
      ["Wood with leather", "Warm wood with a leather touch on a headboard or reception."]
    ]);
    h += '<h3 class="shape-title">' + L("أشكال التطبيق", "Application shapes", "上墙的几种样子") + "</h3>";
    h += '<p class="lead">' + L("أفكار تطبيق للشكل، مش طريقة تنفيذ مختومة ومش سابقة أعمال.", "Application ideas for the look, not a stamped method and not past projects.", "这些是效果构想，不是盖章的做法，也不是完工案例。") + "</p>";
    h += '<div class="grid4 shape-notes">';
    shapes.forEach(function (s) {
      h += '<article class="card"><div class="meta"><b>' + s[0] + "</b><p>" + s[1] + "</p></div></article>";
    });
    h += "</div>";
    window.USE_SPOTS.forEach(function (s) {
      var img = spotImg(s.media);
      var title = spotTitle(s);
      h += '<article class="use-spot' + (img ? "" : " no-photo") + '" id="' + s.id + '">';
      if (img) {
        h += '<figure class="photo-card"><img src="' + img + '" alt="' + title + '" width="640" height="480" loading="lazy" decoding="async"/>';
        h += "<figcaption>" + L("فكرة تطبيق", "Application idea", "上墙构想") + "</figcaption></figure>";
      }
      h += "<div><h3>" + title + "</h3><p>" + spotBody(s) + "</p>";
      if (s.tab) {
        h += '<button class="btn navy" type="button" data-tab="' + s.tab + '">' + (isAr() ? s.ctaAr : (isZh() ? (s.id === "use-3d" ? "了解预览" : "打开选材指南") : s.ctaEn)) + "</button>";
      }
      h += "</div></article>";
    });
    return h;
  };

  window.chooserInner = function (d) {
    var ar = isAr();
    var rows = [
      ["بديل رخام", "Marble look", "استقبال، لوبي، حائط مميز، ظهر مطبخ، حمام داخلي جاف نسبياً", "Reception, lobby, feature wall, kitchen back, interior bath", "رطوبة يومية بالمسح. مش عزل حمّام ومش أرضية غرقانة.", "Daily wipe moisture. Not tanking and not a flooded floor.", "لوح 5مم للمسطح الواسع، أو شرائح 16/20 لو عايز فواصل أقل.", "5mm sheet for a wide plane, or 16/20 slats for fewer joints."],
      ["بديل خشب", "Wood look", "صالة، تلفزيون، كافيه، مطعم، مكتب، غرف فندق، محل", "Living, TV wall, café, restaurant, office, hotel rooms, shop", "أماكن جافة إلى رطوبة خفيفة. ابعد عن رش المياه المباشر.", "Dry to light moisture. Keep off direct water spray.", "13.4 للفلوت والعمود، 16 توازن، 20 للحوائط العريضة.", "13.4 for flutes and columns, 16 as the balance, 20 for wide walls."],
      ["سيراميك لوك", "Ceramic look", "حمام، عيادة، مطبخ، صيدلية، مدرسة، أماكن تتمسح كتير", "Bath, clinic, kitchen, pharmacy, school, high-wipe rooms", "كويس للمسح اليومي. برضو مش بديل العزل الإنشائي.", "Good for a daily wipe. Still not structural waterproofing.", "غالباً لوح أو بلاطة 5مم عشان الشكل المربعات/المترو.", "Usually a 5mm sheet or tile look for squares / metro."],
      ["شيبورد / WPC", "Chipboard / WPC", "محلات، أعمدة، فلوت، ممرات مول، جيم جاف، واجهة داخلية", "Shops, columns, flutes, mall corridors, dry gyms, interior shopfronts", "تحمل استخدام يومي داخلي أعلى من القشرة الخفيفة. مش واجهة شمس.", "Tougher everyday interior use. Not a sun façade.", "فلوت 13.4 أو 16 على العمود؛ 20 أو لوح على الحائط الطويل.", "13.4 or 16 flute on a column; 20 or a sheet on a long wall."],
      ["كتان / قماش", "Linen / textile", "غرف نوم، مكاتب هادية، صالونات، فنادق، استقبال ناعم", "Bedrooms, quiet offices, salons, hotels, a soft reception", "جاف. متستخدمهوش في الحمام ولا خلف الحوض.", "Dry. Do not use it in a bathroom or behind a sink.", "شرائح 16 أو 20، أو لوح 5مم لو عايز سطح أنعم.", "16 or 20 slats, or a 5mm sheet for a softer plane."],
      ["جلد", "Leather", "غرف جافة، حوائط مميزة، هيدبورد، استقبال", "Dry rooms, feature walls, headboards, reception", "جاف فقط. مش حمّام مبلول ومش خلف الحوض.", "Dry only. Not a wet bath and not behind a sink.", "لوح 5مم أو شرائح 16/20. مربعات جلد للحائط الهادي.", "A 5mm sheet or 16/20 slats. Leather squares for a calm wall."]
    ];
    var rooms = [
      ["محل / بوتيك", "Shop / boutique", "خشب أو WPC فلوت أو رخام لوك فاتح", "Wood, WPC flute, or light marble look"],
      ["مول", "Mall", "ساده محايد أو رخام لوك للوبي، فلوت للعمود", "Neutral solid or marble look in the lobby, flute on columns"],
      ["مكتب", "Office", "رمادي، كتان، أو خشب هادي", "Grey, linen, or quiet wood"],
      ["عيادة", "Clinic", "ساده فاتح أو سيراميك لوك يتنضّف", "Light solid or wipe-clean ceramic look"],
      ["فندق", "Hotel", "كود واحد يتكرر: خشب فاتح أو كتان أو رخام هادي", "One repeatable code: light wood, linen, or quiet marble"],
      ["كافيه", "Café", "خشب دافئ أو كتان حول البار", "Warm wood or linen around the bar"],
      ["مدرسة", "School", "ساده أو شيبورد منخفض الصيانة", "Low-upkeep solid or chipboard"],
      ["مطعم", "Restaurant", "حائط مميز خشب/رخام، وظهر بار فلوت", "A wood/marble feature wall and a fluted bar back"],
      ["صالون", "Salon", "كتان أو سيراميك ناعم خلف المرايا", "Linen or soft ceramic behind the mirrors"],
      ["جيم", "Gym", "رمادي صلب أو WPC في الحوائط الجافة", "Solid grey or WPC on dry walls"],
      ["مطبخ", "Kitchen", "رخام لوك أو سيراميك لوك 5مم بين الخزائن", "5mm marble or ceramic look between cabinets"],
      ["حمام", "Bathroom", "رخام أو سيراميك، رطوبة يومية فقط", "Marble or ceramic, daily moisture only"],
      ["عمود", "Column", "فلوت 13.4 أو 16 يلف أسهل", "13.4 or 16 flute wraps more easily"],
      ["كاونتر استقبال", "Reception desk", "رخام لوك أو كتان أو خشب حسب النشاط", "Marble look, linen, or wood depending on the business"],
      ["حائط مميز", "Feature wall", "أي عائلة، غالباً خشب + رخام أو فلوت", "Any family; often wood + marble or a flute"]
    ];
    var thick = [
      ["13.4 سم", "13.4 cm", "فلوت أضيق، أعمدة، حوائط صغيرة، تفاصيل.", "Tighter flute, columns, small walls, detail."],
      ["16 سم", "16 cm", "العرض الشائع: توازن بين الشكل وعدد الفواصل.", "The common width: balance of look and joint count."],
      ["20 سم", "20 cm", "حوائط واسعة وممرات. فواصل أقل وشكل أهدى.", "Wide walls and corridors. Fewer joints, calmer look."],
      ["لوح 5 مم", "5 mm sheet", "1.22 × 2.80 م للمسطح الكبير: مطبخ، استقبال، لوبي. تغطية اللوح حوالي 3.416 م².", "1.22 × 2.80 m for a large plane: kitchen, reception, lobby. About 3.416 m² per sheet."]
    ];
    var rowsZh = [
      ["仿石", "前台、大堂、主墙、橱柜挡板、比较干燥的卫生间", "日常擦拭可以。不能当防水层，也不能铺在积水的地面。", "宽墙用 5mm 大板；想少接缝就用 16 或 20 的条板。"],
      ["木纹", "客厅、电视墙、咖啡店、餐厅、办公室、酒店客房、商铺", "干燥或轻微潮湿。避开直接溅水。", "13.4 适合格栅和柱子，16 最均衡，20 适合宽墙。"],
      ["仿瓷", "卫浴、诊所、厨房、药店、学校，以及经常擦拭的房间", "适合每天擦。仍然不能替代结构防水。", "通常用 5mm 大板，做出方块或地铁砖的感觉。"],
      ["刨花板 / WPC", "商铺、柱子、格栅、商场走廊、干燥的健身房、室内店面", "比轻质贴面更耐日常室内使用。不能做长期日晒的外墙。", "柱子用 13.4 或 16 格栅；长墙用 20 或大板。"],
      ["亚麻 / 织物", "卧室、安静的办公室、沙龙、酒店、柔和的前台", "只适合干燥处。不要用在卫生间或水槽后面。", "16 或 20 条板；想要更平的墙面就用 5mm 大板。"],
      ["皮革", "干燥房间、主墙、床头、前台", "只适合干燥处。不能用于潮湿卫生间或水槽后面。", "5mm 大板或 16/20 条板。安静的墙可以用皮革方块。"]
    ];
    var roomsZh = [
      ["商铺", "木纹、WPC 格栅，或浅色仿石"],
      ["商场", "大堂用中性纯色或仿石，柱子用格栅"],
      ["办公室", "灰色、亚麻，或安静的木纹"],
      ["诊所", "浅色纯色，或好擦的仿瓷"],
      ["酒店", "重复同一个编码：浅木、亚麻或安静仿石"],
      ["咖啡店", "吧台周围用暖木或亚麻"],
      ["学校", "好打理的纯色或刨花板"],
      ["餐厅", "木纹或仿石做主墙，吧台背面用格栅"],
      ["沙龙", "镜子后面用亚麻或柔和的仿瓷"],
      ["健身房", "干燥墙面用灰色纯色或 WPC"],
      ["厨房", "橱柜之间用 5mm 仿石或仿瓷"],
      ["卫生间", "仿石或仿瓷，只承受日常潮气"],
      ["柱子", "13.4 或 16 的格栅更好包柱"],
      ["前台", "按业态选仿石、亚麻或木纹"],
      ["主墙", "任何系列都可以，常见是木纹加仿石，或格栅"]
    ];
    var thickZh = [
      ["13.4 cm", "格栅更密，适合柱子、小墙和细部。"],
      ["16 cm", "最常见的宽度，观感和接缝数量比较均衡。"],
      ["20 cm", "宽墙和走廊。接缝更少，看起来更安静。"],
      ["5 mm 大板", "1.22 × 2.80 m，适合厨房、前台和大堂。每张约 3.416 m²。"]
    ];
    function pair(r, z) {
      if (ar) return [r[0], r[2]];
      if (isZh() && z) return z;
      return [r[1], r[3]];
    }
    function quad(r, z) {
      if (ar) return [r[0], r[2], r[4], r[6]];
      if (isZh() && z) return z;
      return [r[1], r[3], r[5], r[7]];
    }
    var h = "";
    h += '<div class="wrap chooser-page"><h2>' + L("اختار إيه؟", "What should you pick?", "该怎么选？") + "</h2>";
    h += '<p class="lead">' + L(
      "ابدأ بالمكان (حمام، مكتب، كافيه…)، بعدين الخامة، وبعدين العرض. العيّنة من المصنع تحسم اللون. مفيش أسعار على الصفحة.",
      "Start with the room (bath, office, café…), then the finish, then the width. The factory sample decides the colour. No prices on the page.",
      "先看空间（卫浴、办公、咖啡店……），再选花色，再选宽度。颜色以工厂样品为准。页面不标价。"
    ) + "</p>";
    h += '<ol class="chooser-rail" aria-label="' + L("خطوات الاختيار", "Chooser steps", "选材步骤") + '">';
    h += "<li><b>" + L("1. المكان", "1. Room", "1. 空间") + "</b><span>" + L("رطوبة يومية ولا جاف؟", "Daily moisture or dry?", "日常潮气还是干燥？") + "</span></li>";
    h += "<li><b>" + L("2. الخامة", "2. Finish", "2. 花色") + "</b><span>" + L("رخام، خشب، سيراميك، WPC، كتان، جلد", "Marble, wood, ceramic, WPC, linen, leather", "仿石、木纹、仿瓷、WPC、亚麻、皮革") + "</span></li>";
    h += "<li><b>" + L("3. العرض", "3. Width", "3. 宽度") + "</b><span>" + L("13.4 / 16 / 20 أو لوح 5مم", "13.4 / 16 / 20 or a 5mm sheet", "13.4 / 16 / 20 或 5mm 大板") + "</span></li>";
    h += "</ol>";
    h += '<div class="scroll"><table class="choose-table"><tr><th>' + L("الخامة", "Finish", "材料") + "</th><th>" + L("أنسب أماكن", "Better rooms", "更合适的空间") + "</th><th>" + L("الرطوبة", "Moisture", "潮气") + "</th><th>" + L("السمك / العرض", "Thickness / width", "厚度 / 宽度") + "</th></tr>";
    rows.forEach(function (r, i) {
      var c = quad(r, rowsZh[i]);
      h += "<tr><td><b>" + c[0] + "</b></td><td>" + c[1] + "</td><td>" + c[2] + "</td><td>" + c[3] + "</td></tr>";
    });
    h += "</table></div>";
    h += '<h2 style="margin-top:28px">' + L("حسب المكان", "By room", "按空间") + "</h2>";
    h += '<div class="grid3">';
    rooms.forEach(function (r, i) {
      var c = pair(r, roomsZh[i]);
      h += '<article class="card"><div class="meta"><b>' + c[0] + "</b><p>" + c[1] + "</p></div></article>";
    });
    h += "</div>";
    h += '<h2 style="margin-top:28px">' + L("13.4 و 16 و 20 واللوح 5مم", "13.4, 16, 20 and the 5mm sheet", "13.4、16、20，以及 5mm 大板") + "</h2>";
    h += '<div class="grid4">';
    thick.forEach(function (r, i) {
      var c = pair(r, thickZh[i]);
      h += '<article class="card"><div class="meta"><b>' + c[0] + "</b><p>" + c[1] + "</p></div></article>";
    });
    h += "</div>";
    h += '<p class="note">' + L(
      "العرض على واتساب حسب الكود والكمية. 18 سم متاح مع 16 و20 في الحاسبة.",
      "Quotes on WhatsApp by code and volume. 18 cm is available with 16 and 20 in the calculator.",
      "报价按编码和数量在 WhatsApp 上确认。计算器里可选 16、18、20 cm。"
    ) + "</p>";
    h += '<p class="note">' + L("محتاج مساعدة؟ زر تواصل في القائمة أو واتساب.", "Need a hand? Use Contact in the header, or WhatsApp.", "需要帮忙？用页眉「联系」或 WhatsApp。") + "</p></div>";
    return h;
  };

  window.vizInner = function () {
    var ar = isAr();
    var img = "";
    if (window.MEDIA && MEDIA.uses) {
      var prefer = {preview3d:1, studio:2};
      var best = 9;
      for (var i = 0; i < MEDIA.uses.length; i++) {
        var rank = prefer[MEDIA.uses[i].id];
        if (rank && rank < best && MEDIA.uses[i].img) { best = rank; img = MEDIA.uses[i].img; }
      }
    }
    var h = '<div class="wrap viz-page"><h2>' + L("شوف الحائط قبل ما يتركّب", "See the wall before it is installed", "安装之前，先看这面墙") + "</h2>";
    h += '<p class="lead">' + L(
      "ثلاث خطوات بسيطة: ابعت صورة، اختار كود، واستلم معاينة شكل للحائط قبل التركيب.",
      "Three clear steps: send a photo, pick a code, and get a look preview of the wall before install.",
      "三步清楚：发照片、选编码、安装前拿到墙面效果预览。"
    ) + "</p>";
    if (img) h += '<figure class="photo-card" style="max-width:720px"><img src="' + img + '" alt="' + L("معاينة 3D للحائط", "3D wall preview", "墙面效果预览") + '" width="640" height="480" loading="lazy" decoding="async"/><figcaption>' + L("مثال معاينة شكل", "Example look preview", "效果预览示例") + "</figcaption></figure>";
    h += '<div class="viz-steps" style="margin-top:16px">';
    var steps = [
      ["1. ابعت صورة", "1. Send a photo", "1. 发照片", "صورة واضحة للحائط (وجانبية لو فيه عمود). المقاسات بالمتر تساعد.", "A clear wall photo (plus a side shot if there is a column). Metres help.", "墙面正面要清楚；有柱子再补侧面。尺寸（米）会更准。"],
      ["2. اختار الكود", "2. Pick a code", "2. 选编码", "كود من التشطيبات، أو اتجاه: رخام / خشب / سيراميك / WPC / كتان.", "A finishes-library code, or a direction: marble / wood / ceramic / WPC / linen.", "从图库选编码，或先定方向：仿石 / 木纹 / 仿瓷 / WPC / 亚麻。"],
      ["3. استلم المعاينة", "3. Get the look preview", "3. 拿到效果", "نرجّع صورة شكل استرشادية على واتساب. اللون على الشاشة تقريبي — العيّنة هي المرجع.", "We return a guide image on WhatsApp. Screen colour is approximate — the sample is the reference.", "我们在 WhatsApp 回一张参考效果。屏幕颜色近似，以工厂样品为准。"]
    ];
    steps.forEach(function (s) {
      var title = ar ? s[0] : (isZh() ? s[2] : s[1]);
      var body = ar ? s[3] : (isZh() ? s[5] : s[4]);
      h += '<article class="card viz-step"><div class="meta"><b>' + title + "</b><p>" + body + "</p></div></article>";
    });
    h += "</div>";
    h += '<p class="note">' + L(
      "المعاينة شكل تقريبي قبل التركيب، مش رسم تنفيذ. اطلبها من زر تواصل أو واتساب.",
      "The preview is a look before install, not a construction drawing. Request it from Contact or WhatsApp.",
      "预览是安装前的效果参考，不是施工图。用「联系」或 WhatsApp 申请。"
    ) + "</p></div>";
    return h;
  };

  function tx(d, key, ar, en, zh) {
    if (d && d[key]) return d[key];
    return L(ar, en, zh);
  }
  function roomCap(d, id, u) {
    var rooms = (d && d.rooms) || {};
    if (rooms[id]) return rooms[id];
    if (!u) return "";
    if (isAr()) return u.ar;
    return u.en;
  }

  window.richHome = function (d) {
    var M = window.MEDIA || {};
    var heroImg = M.hero || "media/home/creative-01.jpg";
    var life = (M.lifestyle && M.lifestyle.length) ? M.lifestyle : [];
    var fac = (M.factory && M.factory.length) ? M.factory : [];
    var works = (M.works && M.works.length) ? M.works : [];
    var results = (typeof filterPool === "function") ? filterPool(typeof homeQ === "undefined" ? "" : homeQ) : [];
    var q = (typeof homeQ === "undefined" ? "" : (homeQ || "")).replace(/"/g, "");
    var stats = (d && d.stats) ? d.stats : [];
    function useSrc(id) {
      var list = M.uses || [];
      for (var i = 0; i < list.length; i++) if (list[i].id === id && list[i].img) return list[i];
      return null;
    }
    var wall = useSrc("preview3d");
    var chooser = useSrc("chooser");
    var roomIds = ["restaurant", "salon", "gym", "leatherbed", "reception", "living", "kitchen", "pharmacy", "clinic", "lobby"];
    var h = "";
    h += '<div class="hero hero-rich"><div class="wrap hero-in">';
    h += '<div class="hero-copy"><p class="k">' + tx(d, "heroK", "", "", "") + "</p>";
    h += "<h1>" + tx(d, "heroT", "", "", "") + "</h1>";
    h += '<p class="hero-lead">' + tx(d, "heroS", "", "", "") + "</p>";
    h += '<div class="hero-cta">';
    h += '<button class="btn gold" type="button" data-tab="colors">' + tx(d, "heroFinishes", "تصفّح التشطيبات", "Browse finishes", "浏览花色") + "</button>";
    h += '<button class="btn ghost" type="button" data-tab="contact">' + tx(d, "heroContact", "تواصل", "Contact", "联系我们") + "</button>";
    h += "</div></div>";
    h += '<div class="board board-photo">';
    h += '<figure class="photo-card hero-frame"><img class="hero-photo kenburns" src="' + heroImg + '" alt="TuBaoBao Egypt" width="1280" height="800" loading="eager" decoding="async"/>';
    h += "<figcaption>" + tx(d, "heroCap", "لقطة عرض · فكرة تطبيق", "Showroom still · application idea", "展厅静帧 · 上墙构想") + "</figcaption></figure>";
    h += '<div class="hero-thumbs">';
    var thumbSrcs = [];
    life.forEach(function (src) {
      if (!src || src === heroImg) return;
      if (thumbSrcs.indexOf(src) >= 0) return;
      thumbSrcs.push(src);
    });
    if (thumbSrcs.length < 4) {
      life.forEach(function (src) {
        if (!src || thumbSrcs.indexOf(src) >= 0) return;
        thumbSrcs.push(src);
      });
    }
    thumbSrcs.slice(0, 4).forEach(function (src) {
      h += '<img src="' + src + '" alt="" width="320" height="320" loading="lazy" decoding="async"/>';
    });
    h += "</div></div></div></div>";

    h += '<div class="wrap preview-3d rise-in"><div class="preview-3d-in">';
    if (wall) {
      h += '<figure class="photo-card"><img src="' + wall.img + '" alt="' + roomCap(d, "preview3d", wall) + '" width="1280" height="720" loading="eager" decoding="async"/>';
      h += "<figcaption>" + tx(d, "appIdeaLong", "معاينة الشكل", "Look preview", "效果预览") + "</figcaption></figure>";
    }
    h += "<div><h2>" + tx(d, "vizT", "شوف الحائط قبل التركيب", "See the wall before it is installed", "安装之前，先看这面墙") + "</h2>";
    h += "<p>" + tx(d, "vizLead", "", "", "") + "</p>";
    h += '<button class="btn gold" type="button" data-tab="viz">' + tx(d, "vizBtn", "تفاصيل المعاينة", "Preview details", "了解预览怎么做") + "</button></div>";
    h += "</div></div>";

    h += '<div class="wrap home-rich">';
    h += '<section class="home-sec video-strip rise-in" id="home-videos"><h2>' + tx(d, "videoStripT", "الحركة", "In motion", "动起来看") + "</h2>";
    h += '<p class="lead">' + tx(d, "videoS", "", "", "") + "</p>";
    h += '<div class="video-strip-grid">';
    var gifs = (window.IDEA_GIFS && window.IDEA_GIFS.length) ? window.IDEA_GIFS : (window.IDEA_VIDEOS || []).filter(function (v) { return v.gif; });
    gifs.slice(0, 4).forEach(function (v, gi) {
      var cap = L(v.ar, v.en, v.zh);
      h += '<figure class="photo-card"><img class="gif-loop" src="' + v.gif + '" alt="' + cap + '" width="480" height="300" loading="' + (gi === 0 ? "eager" : "lazy") + '" decoding="async"/>';
      h += "<figcaption>" + cap + "</figcaption></figure>";
    });
    h += '</div><div class="center-actions"><button class="btn navy" type="button" data-tab="videos">' + tx(d, "videoAll", "كل الفيديوهات", "All videos", "查看全部") + "</button></div></section>";

    h += '<section class="home-sec chooser-band rise-in">';
    h += '<div class="chooser-band-in">';
    if (chooser) {
      h += '<img class="chooser-photo" src="' + chooser.img + '" alt="' + roomCap(d, "chooser", chooser) + '" width="1280" height="720" loading="eager" decoding="async"/>';
    }
    h += "<div><h2>" + tx(d, "chooserT", "اختار إيه", "How to choose", "怎么选") + "</h2>";
    h += '<p class="lead">' + tx(d, "chooserLead", "", "", "") + "</p>";
    h += '<button class="btn gold" type="button" data-tab="chooser">' + tx(d, "chooserBtn", "افتح دليل الاختيار", "Open the chooser", "打开选材指南") + "</button></div>";
    h += "</div></section>";

    /* Wave 5: popular codes with real catalog photos */
    var popCodes = ["M1-001", "M1-002", "M1-003", "M1-004", "M1-005", "M1-006", "M1-008", "M1-009", "M2-001", "M3-001", "M3-002", "M3-003"];
    var popItems = [];
    popCodes.forEach(function (code) {
      var photo = (typeof codePrimary === "function") ? codePrimary(code) : "";
      if (!photo && window.CODE_MEDIA && CODE_MEDIA[code]) photo = CODE_MEDIA[code].primary || "";
      if (!photo) return;
      var row = (typeof F !== "undefined") ? F.filter(function (x) { return x[0] === code; })[0] : null;
      var fam = row ? (typeof finishFam === "function" ? finishFam(row) : row[1]) : "";
      var shortName = row ? (isAr() ? row[2] : row[3]) : "";
      if (shortName && shortName.length > 28) shortName = shortName.slice(0, 26) + "…";
      var cap = fam ? (shortName ? fam + " · " + shortName : fam) : shortName;
      popItems.push({ code: code, photo: photo, fam: fam, cap: cap });
    });
    if (popItems.length >= 6) {
      h += '<section class="home-sec pop-codes rise-in" id="home-popular"><div class="pop-head"><div><h2>' + L("أكواد مطلوبة", "Popular codes", "热门编码") + "</h2>";
      h += '<p class="lead">' + L("صور كتالوج من المصنع. دوس على الكود يفتح التشطيبات.", "Factory catalog shots. Tap a code to open the finishes.", "工厂图册实拍。点编码打开花色库。") + "</p></div>";
      h += '<button class="btn navy" type="button" data-tab="colors">' + L("كل التشطيبات", "All finishes", "全部花色") + "</button></div>";
      h += '<div class="pop-row">';
      popItems.forEach(function (it) {
        h += '<button type="button" class="pop-card" data-tab="colors" aria-label="' + it.code + (it.fam ? (" — " + it.fam) : "") + '"><img src="' + it.photo + '" alt="' + it.code + '" width="400" height="300" loading="lazy" decoding="async"/>';
        h += '<span class="pop-meta"><b>' + it.code + "</b><small>" + (it.cap || it.fam || "") + "</small></span></button>";
      });
      h += "</div></section>";
    }

    h += '<section class="home-sec" id="home-uses"><h2>' + tx(d, "usesT", "فين ينفع يتركّب", "Where it belongs", "适合用在哪里") + "</h2>";
    h += '<p class="lead">' + tx(d, "usesLead", "", "", "") + "</p>";
    h += '<div class="photo-grid home-uses">';
    roomIds.forEach(function (id) {
      var u = useSrc(id);
      if (!u) return;
      var cap = roomCap(d, id, u);
      h += '<figure class="photo-card"><img src="' + u.img + '" alt="' + cap + '" width="640" height="480" loading="lazy" decoding="async"/><figcaption>' + cap + "</figcaption></figure>";
    });
    h += '</div><div class="center-actions"><button class="btn navy" type="button" data-tab="spaces">' + tx(d, "usesAll", "كل الأماكن", "All places", "查看全部空间") + "</button></div></section>";

    h += '<section class="home-sec search-sec">';
    h += "<h2>" + tx(d, "searchT", "ابحث في المكتبة", "Search the library", "在图库里找") + "</h2>";
    h += '<p class="lead">' + tx(d, "searchLead", "", "", "") + "</p>";
    h += '<div class="home-search"><input id="homeSearch" type="search" value="' + q + '" placeholder="' + tx(d, "searchPh", "ابحث بكود أو اسم التشطيب", "Search by code or finish name", "按编码或花色名称搜索") + '" autocomplete="off"/>';
    h += '<button type="button" class="btn navy" id="homeSearchBtn">' + tx(d, "searchBtn", "بحث", "Search", "搜索") + "</button></div>";
    if (!q) {
      var chips = [["wood", "خشب", "Wood", "木材"], ["marble", "رخام", "Marble", "大理石"], ["textile", "كتان", "Linen", "亚麻"], ["ceramic", "سيراميك", "Ceramic", "陶瓷"], ["leather", "جلد", "Leather", "皮革"], ["sheet", "ألواح", "Sheets", "大板"]];
      h += '<div class="search-chips"><span>' + L("جرّب:", "Try:", "试试：") + "</span>";
      chips.forEach(function (c) { h += '<button type="button" class="search-chip" data-q="' + c[0] + '">' + L(c[1], c[2], c[3]) + "</button>"; });
      h += '<button type="button" class="search-chip" data-q="M1-003">M1-003</button></div>';
      results = [];
    }
    h += '<div class="grid4" id="homeSearchGrid">';
    results.forEach(function (p) {
      var name = isAr() ? p.ar : p.en;
      if (!isAr() && typeof lang !== "undefined" && lang === "zh") {
        var famZh = {wood:"木材",marble:"大理石",leather:"皮革",textile:"亚麻",ceramic:"陶瓷",chipboard:"刨花板",solid:"纯色",sheet:"板材"};
        name = p.en + (famZh[p.fam] ? " · " + famZh[p.fam] : "");
      }
      var kind = p.kind === "sheet" ? L("لوح", "Sheet", "大板") : (typeof finishFam === "function" ? finishFam(p.fam) : p.fam);
      h += '<article class="card finish-mini" data-tab="' + (p.kind === "sheet" ? "sheets" : "colors") + '">';
      var photo = "";
      if (typeof codePrimary === "function") photo = codePrimary(p.code) || "";
      if (!photo && window.CODE_MEDIA && CODE_MEDIA[p.code] && CODE_MEDIA[p.code].primary) {
        photo = (typeof fileUrl === "function") ? fileUrl(CODE_MEDIA[p.code].primary) : CODE_MEDIA[p.code].primary;
      }
      if (photo) {
        h += '<img class="finish-photo" src="' + photo + '" alt="' + p.code + '" width="640" height="480" loading="lazy" decoding="async"/>';
      } else {
        h += '<span class="chip" style="background:' + (p.color || "#ccc") + '"></span>';
      }
      h += '<div class="meta"><b class="code">' + p.code + "</b><div>" + name + "</div><small>" + kind + "</small></div></article>";
    });
    h += "</div></section>";

    h += '<section class="home-sec" id="home-factory"><h2>' + tx(d, "factoryHomeT", "عينات المصنع", "Factory samples", "工厂样品与车间") + "</h2>";
    h += '<p class="lead">' + tx(d, "factoryHomeLead", "", "", "") + "</p>";
    h += '<div class="photo-grid home-factory-grid">';
    var facCap = tx(d, "facCap", "ورشة / عينات", "Workshop / samples", "车间 / 样品");
    var facItems = [];
    fac.forEach(function (src) { if (src) facItems.push({ src: src, cap: facCap }); });
    /* Keep workshop strip to factory + catalog racks + product panels — not lifestyle / application gallery shots */
    var workshopOk = /(factory\/|catalog-rack|product-0[1-6]|manufacturing|sample-rack)/i;
    var workshopNo = /(gallery-|showroom-collage|lifestyle|uses\/)/i;
    works.forEach(function (src) {
      if (!src || workshopNo.test(src) || !workshopOk.test(src)) return;
      if (facItems.some(function (x) { return x.src === src; })) return;
      facItems.push({ src: src, cap: facCap });
    });
    facItems.slice(0, 8).forEach(function (item) {
      h += '<figure class="photo-card"><img src="' + item.src + '" alt="' + item.cap + '" width="640" height="480" loading="lazy" decoding="async"/><figcaption>' + item.cap + "</figcaption></figure>";
    });
    h += '</div><div class="center-actions"><button class="btn navy" type="button" data-tab="factory">' + tx(d, "facT", "المصنع", "Factory", "工厂") + "</button></div></section>";

    h += '<section class="home-sec home-stats"><h2>' + tx(d, "factsT", "نظرة سريعة", "At a glance", "工厂一览") + "</h2>";
    h += '<div class="stats">';
    stats.forEach(function (row) {
      h += '<div class="stat"><b>' + row[0] + "</b><span>" + row[1] + "</span></div>";
    });
    h += "</div></section>";

    h += '<section class="home-sec contact-teaser"><h2>' + tx(d, "ctT", "كلّم المصنع", "Talk to the factory", "联系工厂") + "</h2>";
    h += '<p class="lead">' + tx(d, "ctS", "", "", "") + "</p>";
    h += '<p class="addr">' + tx(d, "addr", "", "", "") + "</p>";
    h += '<p class="lead hours">' + tx(d, "hours", "", "", "") + "</p>";
    h += '<div class="contact-actions"><button class="btn gold" type="button" data-tab="contact">' + tx(d, "contactPage", "صفحة التواصل", "Contact page", "联系页面") + "</button></div></section>";
    h += "</div>";
    return h;
  };

})();
