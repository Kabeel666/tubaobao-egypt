// Leather / جلد family and a few modern sheets. To order only. No prices, no certificates.
(function () {
  if (typeof F === "undefined") return;
  var colors = [
    ["LV-01", "كونياك", "Cognac", "#8b4e2f"],
    ["LV-02", "أسود", "Black", "#1c1a19"],
    ["LV-03", "زيتوني", "Olive", "#5c6240"],
    ["LV-04", "كريمي", "Cream", "#f3ead8"],
    ["LV-05", "نبيذي", "Burgundy", "#6e2433"],
    ["LV-06", "رمادي ترابي", "Taupe", "#8d7b6a"],
    ["LV-07", "كراميل", "Caramel", "#a86b3c"],
    ["LV-08", "شوكولاتة", "Chocolate", "#4a2e22"],
    ["LV-09", "عاجي", "Ivory", "#f7f1e6"],
    ["LV-10", "كحلي", "Navy", "#1e2a44"],
    ["LV-11", "مريمية", "Sage", "#8a9a7b"],
    ["LV-12", "وردي هادي", "Blush", "#e7cfc6"],
    ["LV-13", "رملي", "Sand", "#d9c6a5"],
    ["LV-14", "فحمي", "Charcoal", "#3a3d40"],
    ["LV-15", "توباكو", "Tobacco", "#6b442c"],
    ["LV-16", "موكا", "Mocha", "#6f4e3a"],
    ["LV-17", "حجري", "Stone", "#b7aea4"],
    ["LV-18", "بيج ذهبي", "Gold beige", "#c6ae86"],
    ["LV-19", "حبر", "Ink", "#1a1c22"],
    ["LV-20", "سحابة", "Cloud", "#e6e4e0"],
    ["LV-21", "صدأ", "Rust", "#9a4a32"],
    ["LV-22", "غابي", "Forest", "#2f4634"],
    ["LV-23", "لؤلؤ", "Pearl", "#efe8dc"],
    ["LV-24", "إسبريسو", "Espresso", "#3b2a24"]
  ];
  var have = {};
  for (var i = 0; i < F.length; i++) have[F[i][0]] = 1;
  colors.forEach(function (c) {
    if (have[c[0]]) return;
    F.push([c[0], "leather", "جلد " + c[1] + " — للطلب", c[2] + " leather — to order", c[3]]);
  });
  if (typeof SH !== "undefined") {
    var shHave = {};
    for (var s = 0; s < SH.length; s++) shHave[SH[s][0]] = 1;
    var sheets = [
      ["SH-610", "لوح جلد كونياك 5مم — للطلب", "Cognac leather 5mm sheet — to order", "#8b4e2f"],
      ["SH-611", "لوح جلد أسود 5مم — للطلب", "Black leather 5mm sheet — to order", "#1c1a19"],
      ["SH-612", "لوح جلد كريمي 5مم — للطلب", "Cream leather 5mm sheet — to order", "#f3ead8"],
      ["SH-613", "لوح جلد زيتوني 5مم — للطلب", "Olive leather 5mm sheet — to order", "#5c6240"],
      ["SH-614", "لوح حجر جريج عصري 5مم — للطلب", "Modern greige stone 5mm sheet — to order", "#cfc6bb"],
      ["SH-615", "لوح ترافرتين مطفي 5مم — للطلب", "Matte travertine 5mm sheet — to order", "#e0d0b4"],
      ["SH-616", "لوح توباكو مع حجر 5مم — للطلب", "Tobacco leather with stone 5mm sheet — to order", "#6b442c"],
      ["SH-617", "لوح بوك ماتش عاجي 5مم — للطلب", "Ivory bookmatch 5mm sheet — to order", "#f7f1e6"],
      ["SH-618", "لوح جلد كراميل 5مم — للطلب", "Caramel leather 5mm sheet — to order", "#a86b3c"],
      ["SH-619", "لوح جلد نبيذي 5مم — للطلب", "Burgundy leather 5mm sheet — to order", "#6e2433"],
      ["SH-620", "لوح حجر فحمي عصري 5مم — للطلب", "Modern charcoal stone 5mm sheet — to order", "#3a3d40"],
      ["SH-621", "لوح جلد لؤلؤ مع حجر رملي 5مم — للطلب", "Pearl leather with sand stone 5mm sheet — to order", "#efe8dc"]
    ];
    sheets.forEach(function (row) { if (!shHave[row[0]]) SH.push(row); });
  }
  var fc = String(F.length);
  var sc = (typeof SH !== "undefined") ? String(SH.length) : "";
  if (typeof AR !== "undefined") {
    AR.leather = "جلد";
    if (AR.stats) {
      AR.stats[1] = [fc, "كود تشطيب"];
      if (sc) AR.stats[2] = [sc, "كود لوح"];
    }
    if (AR.colS) AR.colS = AR.colS.replace(/\d+ كود تشطيب/, fc + " كود تشطيب");
    if (AR.shS && sc) AR.shS = AR.shS.replace(/\d+ كود لوح/, sc + " كود لوح");
  }
  if (typeof EN !== "undefined") {
    EN.leather = "Leather";
    if (EN.stats) {
      EN.stats[1] = [fc, "Finish codes"];
      if (sc) EN.stats[2] = [sc, "Sheet codes"];
    }
    if (EN.colS) EN.colS = EN.colS.replace(/\d+ finish codes/i, fc + " finish codes");
    if (EN.shS && sc) EN.shS = EN.shS.replace(/\d+\+? sheet[^\d]*/i, sc + " sheet codes · ");
  }
  if (window.USE_SPOTS) {
    var map = {
      "use-restaurant": "restaurant",
      "use-salon": "salon",
      "use-gym": "gym",
      "use-reception": "reception",
      "use-3d": "preview3d",
      "use-chooser": "chooser"
    };
    window.USE_SPOTS.forEach(function (s) {
      if (map[s.id]) s.media = map[s.id];
    });
    if (!window.USE_SPOTS.some(function (s) { return s.id === "use-leather-bed"; })) {
      window.USE_SPOTS.push({
        id: "use-leather-bed",
        media: "leatherbed",
        arT: "غرفة نوم جلد",
        enT: "Leather bedroom",
        ar: "هيدبورد وحائط جاف بمظهر جلد: كونياك أو كريمي أو أسود. مربعات جلد أو لوح مسطح. فكرة تطبيق، ومش حمّام. السعر للطلب.",
        en: "A headboard and a dry wall in a leather look: cognac, cream or black. Leather squares or a flat sheet. An application idea, and not a bathroom. Price to order."
      });
    }
  }
})();
