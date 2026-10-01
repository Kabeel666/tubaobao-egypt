(function () {
  var P = "01116208881";
  var W = "https://wa.me/201116208881";
  window.PHONE = P;
  window.WA = W;
  window.PRIMARY = ["home", "products", "colors", "trade", "factory", "contact"];

  function patchFaq(list, phoneQ, phoneA) {
    for (var i = 0; i < list.length; i++) {
      if (list[i][0] === phoneQ || /رقم|Phone|contact number/i.test(list[i][0])) {
        list[i][1] = phoneA;
      }
    }
  }

  if (typeof AR !== "undefined") {
    if (AR.stats && AR.stats[3]) AR.stats[3] = ["داخلي", "الاستخدام"];
    AR.ctaWa = "اطلب عرض سعر عبر واتساب";
    AR.more = "المزيد";
    AR.waBtn = "واتساب " + P;
    AR.waShort = "واتساب";
    AR.exS = "تعبئة ومسار بعد الاتفاق. تواصل عبر واتساب " + P + ".";
    AR.ctS = "لطلب عرض سعر أو عيّنة أو توريد — راسلنا على واتساب.";
    AR.ctNote = "وسيلة التواصل الرسمية: واتساب " + P + " · من 8ص إلى 8م عدا الجمعة.";
    AR.foot = "توباباو مصر · مصنع 6 أكتوبر · قطعة 37 · واتساب " + P;
    if (AR.fac && !AR.fac.some(function (x) { return /واتساب|WhatsApp/i.test(String(x[1] || "")); })) {
      AR.fac.push(["التواصل", "واتساب " + P]);
    }
    patchFaq(AR.faq, "رقم؟", "واتساب فقط: " + P + ".");
    AR.cta1 = AR.cta1 || "استعرض المنتجات";
    AR.cta2 = AR.cta2 || "بيانات المصنع";
  }

  if (typeof EN !== "undefined") {
    EN.ctaWa = "Request a quote on WhatsApp";
    EN.more = "More";
    EN.waBtn = "WhatsApp " + P;
    EN.waShort = "WhatsApp";
    EN.exS = "Packing and route after terms. Reach us on WhatsApp " + P + ".";
    EN.ctS = "For a quote, sample or supply order — message us on WhatsApp.";
    EN.ctNote = "Official contact: WhatsApp " + P + " · 08:00–20:00 except Friday.";
    EN.foot = "TuBaoBao Egypt · 6th of October factory · Plot 37 · WhatsApp " + P;
    if (EN.fac && !EN.fac.some(function (x) { return /واتساب|WhatsApp/i.test(String(x[1] || "")); })) {
      EN.fac.push(["Contact", "WhatsApp " + P]);
    }
    patchFaq(EN.faq, "Phone?", "WhatsApp only: " + P + ".");
  }

  function syncCounts() {
    try {
      var fc = (typeof F !== "undefined" && F) ? String(F.length) : null;
      var sc = (typeof SH !== "undefined" && SH) ? String(SH.length) : null;
      if (fc && typeof AR !== "undefined" && AR.stats) {
        AR.stats[1] = [fc, "كود تشطيب"];
        if (AR.colS) AR.colS = AR.colS.replace(/\d+ كود تشطيب/, fc + " كود تشطيب");
      }
      if (sc && typeof AR !== "undefined" && AR.stats) {
        AR.stats[2] = [sc, "كود لوح"];
        if (AR.shS) AR.shS = AR.shS.replace(/\d+ كود لوح/, sc + " كود لوح");
      }
      if (fc && typeof EN !== "undefined" && EN.stats) {
        EN.stats[1] = [fc, "Finish codes"];
        if (EN.colS) EN.colS = EN.colS.replace(/\d+ finish codes/i, fc + " finish codes");
      }
      if (sc && typeof EN !== "undefined" && EN.stats) {
        EN.stats[2] = [sc, "Sheet codes"];
        if (EN.shS) EN.shS = EN.shS.replace(/\d+ sheet codes/i, sc + " sheet codes");
      }
    } catch (e) {}
  }
  syncCounts();

})();
