/* Chooser, 3D preview, use-ideas. Loaded after richHome exists, before boot render. */
(function () {
  if (typeof TABS !== "undefined" && !TABS.some(function (x) { return x[0] === "chooser"; })) {
    var i = 0;
    for (var n = 0; n < TABS.length; n++) if (TABS[n][0] === "colors") i = n + 1;
    TABS.splice(i, 0,
      ["chooser", "اختار إيه", "Chooser"],
      ["viz", "معاينة 3D", "3D preview"]
    );
  }
  window.PRIMARY = ["home", "products", "colors", "chooser", "viz", "contact"];

  if (typeof AR !== "undefined") {
    AR.spT = "فين ينفع يتركّب";
    AR.spS = "محلات، مولات، مكاتب، عيادات، فنادق، كافيهات، مدارس، مطاعم، صالونات، جيم، مطابخ، حمامات، أعمدة، كاونتر استقبال، وحوائط مميزة. أفكار استخدام مش سابقة أعمال.";
    AR.projT = "أفكار استخدام (مش مشاريع منشورة)";
    AR.projS = "مخططات نصية استرشادية فقط. مفيش أسماء عملاء، ومفيش صور متقدّمة على إنها سابقة أعمال.";
    AR.galleryT = "صور المصنع وأفكار التطبيق";
    AR.galleryS = "صور الأكواد والتصنيع من الكتالوج. صور المحلات والمول والمكتب والكافيه والفندق والاستوديو أفكار تطبيق مولَّدة — ليست سابقة أعمال.";
    AR.heroS = (AR.heroS || "") + " اختار الخامة حسب المكان، واطلب معاينة 3D للحائط قبل التركيب على واتساب 01116208881.";
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
    EN.heroS = (EN.heroS || "") + " Choose the finish by room, and request a 3D wall preview before install on WhatsApp 01116208881.";
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

  function wa(msg) {
    var base = (window.WA || "https://wa.me/201116208881");
    return msg ? (base + "?text=" + encodeURIComponent(msg)) : base;
  }


  window.USE_SPOTS = [
    {id:"use-shop", media:"boutique", arT:"محلات تجارية", enT:"Shops",
      ar:"فلوت خشب أو WPC أو رخام فاتح على حائط المحل وظهر العرض. داخلي فقط، والكمية والسعر عرض على واتساب 01116208881.",
      en:"Wood flute, WPC, or light marble on the shop wall and display back. Interior only. Quantity and price are a WhatsApp quote on 01116208881."},
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
    {id:"use-3d", media:"studio", tab:"viz", arT:"معاينة 3D", enT:"3D preview",
      ctaAr:"تفاصيل المعاينة", ctaEn:"Preview details",
      ar:"ابعت صور الأوضة والمقاسات والكود، ونرجّع معاينة شكل قبل التركيب. فكرة تطبيق للاستوديو — ليست مشروعًا حقيقيًا، ومش لوحة تنفيذ.",
      en:"Send room photos, sizes and a code, and we return a look preview before install. The studio picture is an application idea — not a real project, and not a construction sheet."},
    {id:"use-chooser", media:"", tab:"chooser", arT:"اختار إيه", enT:"Chooser",
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
    var ar = (typeof lang === "undefined" || lang === "ar");
    var h = '<nav class="use-jump">';
    window.USE_SPOTS.forEach(function (s) {
      h += '<a href="#spaces:' + s.id + '" data-tab="spaces" data-anchor="' + s.id + '">' + (ar ? s.arT : s.enT) + "</a>";
    });
    h += "</nav>";
    return h;
  };

  window.usePlacesHtml = function () {
    var ar = (typeof lang === "undefined" || lang === "ar");
    var h = window.useJumpHtml();
    window.USE_SPOTS.forEach(function (s) {
      var img = spotImg(s.media);
      var title = ar ? s.arT : s.enT;
      h += '<article class="use-spot' + (img ? "" : " no-photo") + '" id="' + s.id + '">';
      if (img) {
        h += '<figure class="photo-card"><img src="' + img + '" alt="' + title + '" width="640" height="480" loading="lazy" decoding="async"/>';
        h += "<figcaption>" + (ar ? "فكرة تطبيق — ليست سابقة أعمال" : "Application idea — not a past project") + "</figcaption></figure>";
      }
      h += "<div><h3>" + title + "</h3><p>" + (ar ? s.ar : s.en) + "</p>";
      if (s.tab) {
        h += '<button class="btn navy" type="button" data-tab="' + s.tab + '">' + (ar ? s.ctaAr : s.ctaEn) + "</button>";
      }
      h += "</div></article>";
    });
    return h;
  };

  window.chooserInner = function (d) {
    var ar = (typeof lang === "undefined" || lang === "ar");
    var rows = [
      ["بديل رخام", "Marble look", "استقبال، لوبي، حائط مميز، ظهر مطبخ، حمام داخلي جاف نسبياً", "Reception, lobby, feature wall, kitchen back, interior bath", "رطوبة يومية بالمسح. مش عزل حمّام ومش أرضية غرقانة.", "Daily wipe moisture. Not tanking and not a flooded floor.", "لوح 5مم للمسطح الواسع، أو شرائح 16/20 لو عايز فواصل أقل.", "5mm sheet for a wide plane, or 16/20 slats for fewer joints."],
      ["بديل خشب", "Wood look", "صالة، تلفزيون، كافيه، مطعم، مكتب، غرف فندق، محل", "Living, TV wall, café, restaurant, office, hotel rooms, shop", "أماكن جافة إلى رطوبة خفيفة. ابعد عن رش المياه المباشر.", "Dry to light moisture. Keep off direct water spray.", "13.4 للفلوت والعمود، 16 توازن، 20 للحوائط العريضة.", "13.4 for flutes and columns, 16 as the balance, 20 for wide walls."],
      ["سيراميك لوك", "Ceramic look", "حمام، عيادة، مطبخ، صيدلية، مدرسة، أماكن تتمسح كتير", "Bath, clinic, kitchen, pharmacy, school, high-wipe rooms", "كويس للمسح اليومي. برضو مش بديل العزل الإنشائي.", "Good for a daily wipe. Still not structural waterproofing.", "غالباً لوح أو بلاطة 5مم عشان الشكل المربعات/المترو.", "Usually a 5mm sheet or tile look for squares / metro."],
      ["شيبورد / WPC", "Chipboard / WPC", "محلات، أعمدة، فلوت، ممرات مول، جيم جاف، واجهة داخلية", "Shops, columns, flutes, mall corridors, dry gyms, interior shopfronts", "تحمل استخدام يومي داخلي أعلى من القشرة الخفيفة. مش واجهة شمس.", "Tougher everyday interior use. Not a sun façade.", "فلوت 13.4 أو 16 على العمود؛ 20 أو لوح على الحائط الطويل.", "13.4 or 16 flute on a column; 20 or a sheet on a long wall."],
      ["كتان / قماش", "Linen / textile", "غرف نوم، مكاتب هادية، صالونات، فنادق، استقبال ناعم", "Bedrooms, quiet offices, salons, hotels, a soft reception", "جاف. متستخدمهوش في الحمام ولا خلف الحوض.", "Dry. Do not use it in a bathroom or behind a sink.", "شرائح 16 أو 20، أو لوح 5مم لو عايز سطح أنعم.", "16 or 20 slats, or a 5mm sheet for a softer plane."]
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
    var h = "";
    h += '<div class="wrap"><h2>' + (ar ? "اختار إيه؟" : "What should you pick?") + "</h2>";
    h += '<p class="lead">' + (ar
      ? "دليل عملي من غير أسعار ومن غير شهادات. الاختيار حسب المكان والرطوبة وشكل الحائط. العيّنة من المصنع هي اللي تحسم اللون."
      : "A practical guide with no prices and no certificates. Choose by room, moisture and wall shape. The factory sample decides the colour.") + "</p>";
    h += '<div class="scroll"><table class="choose-table"><tr><th>' + (ar ? "الخامة" : "Finish") + "</th><th>" + (ar ? "أنسب أماكن" : "Better rooms") + "</th><th>" + (ar ? "الرطوبة" : "Moisture") + "</th><th>" + (ar ? "السمك / العرض" : "Thickness / width") + "</th></tr>";
    rows.forEach(function (r) {
      h += "<tr><td><b>" + (ar ? r[0] : r[1]) + "</b></td><td>" + (ar ? r[2] : r[3]) + "</td><td>" + (ar ? r[4] : r[5]) + "</td><td>" + (ar ? r[6] : r[7]) + "</td></tr>";
    });
    h += "</table></div>";
    h += '<h2 style="margin-top:28px">' + (ar ? "حسب المكان" : "By room") + "</h2>";
    h += '<div class="grid3">';
    rooms.forEach(function (r) {
      h += '<article class="card"><div class="meta"><b>' + (ar ? r[0] : r[1]) + "</b><p>" + (ar ? r[2] : r[3]) + "</p></div></article>";
    });
    h += "</div>";
    h += '<h2 style="margin-top:28px">' + (ar ? "13.4 و 16 و 20 واللوح 5مم" : "13.4, 16, 20 and the 5mm sheet") + "</h2>";
    h += '<div class="grid4">';
    thick.forEach(function (r) {
      h += '<article class="card"><div class="meta"><b>' + (ar ? r[0] : r[1]) + "</b><p>" + (ar ? r[2] : r[3]) + "</p></div></article>";
    });
    h += "</div>";
    h += '<p class="note">' + (ar
      ? "مفيش سعر هنا. العرض على واتساب حسب الكود والكمية. 18 سم كمان متاح مع 16 و20 في الحاسبة."
      : "No price here. The quote is on WhatsApp by code and volume. 18 cm is also available with 16 and 20 in the calculator.") + "</p>";
    var msg = ar
      ? "السلام عليكم، عايز أختار خامة لتوباباو. المكان: ... المقاس: ... الرطوبة: جاف / يومي. ابعتولي اقتراح كود من غير سعر منشور."
      : "Hello, I need help choosing a TuBaoBao finish. Room: ... Size: ... Moisture: dry / daily. Please suggest a code. Quote only, no listed price.";
    h += '<div class="center-actions"><a class="btn wa" href="' + wa(msg) + '" target="_blank" rel="noopener">' + (ar ? "ساعدني أختار على واتساب" : "Help me choose on WhatsApp") + "</a></div></div>";
    return h;
  };

  window.vizInner = function () {
    var ar = (typeof lang === "undefined" || lang === "ar");
    var img = "";
    if (window.MEDIA && MEDIA.uses) {
      for (var i = 0; i < MEDIA.uses.length; i++) if (MEDIA.uses[i].id === "studio") img = MEDIA.uses[i].img;
    }
    var msg = ar
      ? "السلام عليكم، عايز معاينة 3D لحائط قبل التركيب. هبعت صور الأوضة والمقاسات (عرض × ارتفاع) والكود أو الخامة اللي مايل ليها. فاهم إن دي معاينة شكل مش رسم تنفيذ مختوم."
      : "Hello, I want a 3D look preview of a wall before install. I will send room photos, sizes (width × height) and the code or finish I prefer. I understand this is a design preview, not a stamped construction drawing.";
    var h = '<div class="wrap"><h2>' + (ar ? "شوف الحائط قبل ما يتركّب" : "See the wall before it is installed") + "</h2>";
    h += '<p class="lead">' + (ar
      ? "نبعتلك معاينة شكل تقريبية للحائط بالخامة اللي اخترتها: خشب، رخام، سيراميك لوك، شيبورد/WPC، أو كتان. كده تشوف الاتجاه قبل ما نفصل الكمية."
      : "We send an approximate look preview of the wall in the finish you picked: wood, marble, ceramic look, chipboard/WPC, or linen. You see the direction before quantity is cut.") + "</p>";
    if (img) h += '<figure class="photo-card" style="max-width:720px"><img src="' + img + '" alt="' + (ar ? "فكرة استوديو معاينة" : "Preview studio idea") + '" width="640" height="480" loading="lazy" decoding="async"/><figcaption>' + (ar ? "فكرة تطبيق لاستوديو المعاينة — ليست صورة مشروع حقيقي" : "Application idea of a preview studio — not a real project photo") + "</figcaption></figure>";
    h += '<div class="grid3" style="margin-top:16px">';
    var steps = [
      ["1. صور الأوضة", "1. Room photos", "صورة واضحة للحائط من قدام، وصورة جانبية لو فيه عمود أو فتحة.", "A clear front photo of the wall, plus a side photo if there is a column or opening."],
      ["2. المقاسات", "2. Sizes", "عرض الحائط وارتفاعه بالمتر، وخصم الأبواب والشبابيك.", "Wall width and height in metres, minus doors and windows."],
      ["3. الخامة", "3. Finish", "كود من المكتبة أو اتجاه: رخام / خشب / سيراميك / WPC / كتان.", "A library code or a direction: marble / wood / ceramic / WPC / linen."],
      ["4. المعاينة", "4. The preview", "ترجع لك صورة شكل استرشادية. اللون على الشاشة تقريبي.", "You get a guide image back. Colour on screen is approximate."]
    ];
    steps.forEach(function (s) {
      h += '<article class="card"><div class="meta"><b>' + (ar ? s[0] : s[1]) + "</b><p>" + (ar ? s[2] : s[3]) + "</p></div></article>";
    });
    h += "</div>";
    h += '<div class="honest-box"><b>' + (ar ? "بصدق" : "Honest limit") + "</b><p>" + (ar
      ? "دي معاينة تصميم عشان تشوف الشكل قبل التركيب. ليست رسم تنفيذ مختوم، وليست لوحة إنشائية، ومش مقياس موقع، ومش بديل المعاينة على الطبيعة. التوريد والأسعار يتأكدوا بعد كده على واتساب 01116208881."
      : "This is a design preview so you can see the look before install. It is not a stamped construction drawing, not a structural sheet, not a site survey, and not a substitute for seeing the real sample. Supply and prices are confirmed afterwards on WhatsApp 01116208881.") + "</p></div>";
    h += '<div class="center-actions"><a class="btn wa" href="' + wa(msg) + '" target="_blank" rel="noopener">' + (ar ? "اطلب المعاينة على واتساب" : "Request the preview on WhatsApp") + "</a></div></div>";
    return h;
  };

  function extraHome(d) {
    var ar = (typeof lang === "undefined" || lang === "ar");
    var h = '<section class="home-sec" id="home-uses"><h2>' + (ar ? "أماكن الاستخدام" : "Where it is used") + "</h2>";
    h += '<p class="lead">' + (ar ? "محلات، مولات، مكاتب، فنادق، كافيهات، وعيادات، ومعاينة 3D ودليل الاختيار. الصور أفكار تطبيق وليست سابقة أعمال." : "Shops, malls, offices, hotels, cafés and clinics, plus a 3D preview and the chooser. Photos are application ideas, not past projects.") + "</p>";
    h += (typeof useJumpHtml === "function" ? useJumpHtml() : "");
    h += '<div class="center-actions"><button class="btn navy" type="button" data-tab="spaces" data-anchor="use-shop">' + (ar ? "كل أماكن الاستخدام" : "All use places") + "</button>";
    h += '<button class="btn navy" type="button" data-tab="chooser">' + (ar ? "اختار إيه" : "Chooser") + "</button></div></section>";
    h += '<section class="home-sec"><h2>' + (ar ? "اختار الخامة قبل ما تطلب الكمية" : "Pick the finish before you order volume") + "</h2>";
    h += '<p class="lead">' + (ar ? "رخام للمظهر الفاخر، خشب للدفء، سيراميك للمسح، شيبورد/WPC للفلوت والأعمدة، كتان للأماكن الجافة الهادية. العروض 13.4 و16 و20، والألواح 5مم." : "Marble for a luxury look, wood for warmth, ceramic for wiping, chipboard/WPC for flutes and columns, linen for quiet dry rooms. Widths 13.4, 16 and 20; sheets are 5mm.") + "</p>";
    h += '<div class="center-actions"><button class="btn navy" type="button" data-tab="chooser">' + (ar ? "افتح دليل الاختيار" : "Open the chooser") + "</button></div></section>";
    var studio = "";
    var uses = (window.MEDIA && MEDIA.uses) ? MEDIA.uses : [];
    uses.forEach(function (u) { if (u.id === "studio") studio = u.img; });
    h += '<section class="home-sec cta-3d"><div class="cta-3d-in">';
    if (studio) h += '<img src="' + studio + '" alt="" width="220" height="140" loading="lazy" decoding="async" style="width:220px;height:140px;object-fit:cover;border-radius:12px"/>';
    h += "<div><h2>" + (ar ? "معاينة 3D للحائط" : "3D wall preview") + "</h2><p>" + (ar
      ? "ابعت صور الأوضة والمقاسات على واتساب، ونرجّع معاينة شكل قبل التركيب. معاينة تصميم، مش رسم مختوم."
      : "Send room photos and sizes on WhatsApp and we return a look preview before install. A design preview, not a stamped drawing.") + "</p></div>";
    h += '<button class="btn gold" type="button" data-tab="viz">' + (ar ? "تفاصيل المعاينة" : "Preview details") + "</button></div></section>";
    return h;
  }

  if (typeof richHome === "function") {
    var _rich = richHome;
    richHome = function (d) {
      var html = _rich(d);
      var block = extraHome(d);
      var mark = '<section class="home-sec contact-teaser">';
      if (html.indexOf(mark) >= 0) return html.replace(mark, block + mark);
      return html + block;
    };
    window.richHome = richHome;
  }
})();
