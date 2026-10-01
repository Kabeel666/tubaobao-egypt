(function () {
  var P = "01116208881";
  var W = "https://wa.me/201116208881";
  window.PHONE = P;
  window.WA = W;
  window.PRIMARY = ["home", "products", "colors", "trade", "factory", "contact"];

  function patchFaq(list, phoneQ, phoneA) {
    for (var i = 0; i < list.length; i++) {
      if (list[i][0] === phoneQ || /رقم|Phone/.test(list[i][0])) {
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
    if (AR.fac && AR.fac.length < 4) AR.fac.push(["التواصل", "واتساب " + P]);
    else if (AR.fac) AR.fac[AR.fac.length - 1] = ["التواصل", "واتساب " + P];
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
    if (EN.fac && EN.fac.length < 4) EN.fac.push(["Contact", "WhatsApp " + P]);
    else if (EN.fac) EN.fac[EN.fac.length - 1] = ["Contact", "WhatsApp " + P];
    patchFaq(EN.faq, "Phone?", "WhatsApp only: " + P + ".");
  }
})();
