(function () {
  var hdr=document.getElementById("hdrWa");
  var fab=document.getElementById("fabWa");
  var W=(hdr&&hdr.getAttribute("href"))||(fab&&fab.getAttribute("href"))||"";
  window.WA=W;
  window.PRIMARY = ["home", "products", "colors", "chooser", "viz"];

  function patchFaq(list, phoneQ, phoneA) {
    for (var i = 0; i < list.length; i++) {
      if (list[i][0] === phoneQ || /رقم|Phone|contact number/i.test(list[i][0])) {
        list[i][1] = phoneA;
      }
    }
  }

  if (typeof AR !== "undefined") {
    AR.leather = AR.leather || "جلد";
    if (AR.stats && AR.stats[3]) AR.stats[3] = ["داخلي", "الاستخدام"];
    AR.ctaWa = "اطلب عرض سعر";
    AR.more = "المزيد";
    AR.waBtn = "تواصل";
    AR.waShort = "تواصل";
    AR.exS = "تعبئة ومسار بعد الاتفاق. استخدم زر تواصل في القائمة.";
    AR.ctS = "اطلب عرض سعر أو عيّنة أو توريد. دوس «تواصل» أو راسلنا على واتساب.";
    AR.ctNote = "التواصل من زر «تواصل» في القائمة أو زر واتساب. من 8ص إلى 8م عدا الجمعة.";
    AR.foot = "توباباو مصر · مصنع 6 أكتوبر · قطعة 37";
    patchFaq(AR.faq, "رقم؟", "من زر تواصل في القائمة أو زر واتساب.");
    AR.cta1 = AR.cta1 || "استعرض المنتجات";
    AR.cta2 = AR.cta2 || "بيانات المصنع";
  }

  if (typeof EN !== "undefined") {
    EN.ctaWa = "Request a quote";
    EN.more = "More";
    EN.waBtn = "Contact";
    EN.waShort = "Contact";
    EN.exS = "Packing and route after terms. Use the Contact button in the menu.";
    EN.ctS = "Ask for a quote, a sample or a supply order. Tap Contact or message us on WhatsApp.";
    EN.ctNote = "Use the Contact button in the menu, or the WhatsApp button. 08:00–20:00 except Friday.";
    EN.foot = "TuBaoBao Egypt · 6th of October factory · Plot 37";
    patchFaq(EN.faq, "Phone?", "Use the Contact button in the menu, or the WhatsApp button.");
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
      if (fc && typeof ZH !== "undefined" && ZH.stats) {
        ZH.stats[1] = [fc, "花色编码"];
      }
      if (sc && typeof ZH !== "undefined" && ZH.stats) {
        ZH.stats[2] = [sc, "大板编码"];
      }
    } catch (e) {}
  }
  syncCounts();

  if (typeof ZH !== "undefined") {
    ZH.ctaWa = "询价";
    ZH.more = "更多";
    ZH.waBtn = "联系";
    ZH.waShort = "联系";
    ZH.ctS = "报价、样品或供货，请点「联系」或通过 WhatsApp 找我们。";
    ZH.ctNote = "请用页眉的「联系」，或右下角的 WhatsApp。每天 8:00–20:00，周五休息。";
    ZH.brand = "埃及兔宝宝";
    ZH.sub = ZH.sub || "PVC 墙面饰面";
    ZH.foot = "埃及兔宝宝 · 十月六日城工厂 · 37 号地块";
    ZH.galleryT = ZH.galleryT || "工厂与产品图库";
    ZH.galleryS = ZH.galleryS || "工厂现场与生产实拍。";
  }

  if (typeof AR !== "undefined") {
    AR.legalNote = "توباباو مصر مصنع محلي في 6 أكتوبر. الاسم التجاري المصري مستقل عن الشركة الصينية المدرجة Dehua TB ما لم يُعلن عن ترخيص رسمي.";
    if (!/10,000/.test(AR.aboutP || "")) AR.aboutP = (AR.aboutP || "") + " مساحة المصنع حوالي 10,000 م² في المنطقة الصناعية بمدينة 6 أكتوبر — فئة مصانع لا فئة مستوردين فقط.";
    if (AR.fac && !AR.fac.some(function(x){return /10,?000|10000|م²|m²/.test(String(x[1]||x[0]||""));})) {
      AR.fac.unshift(["المساحة","حوالي 10,000 م² · المنطقة الصناعية · 6 أكتوبر"]);
    }
    if (AR.stats && AR.stats[0]) AR.stats[0] = ["~10,000 م²", "المصنع"];
    AR.galleryT = AR.galleryT || "معرض المصنع والمنتجات";
    AR.galleryS = AR.galleryS || "صور حقيقية من أرض المصنع والإنتاج.";
  }
  if (typeof EN !== "undefined") {
    EN.legalNote = "TuBaoBao Egypt is a local factory in 6th of October. The Egyptian trade name is independent of the Chinese listed company Dehua TB unless an official licence is stated.";
    if (!/10,000/.test(EN.aboutP || "")) EN.aboutP = (EN.aboutP || "") + " Factory footprint about 10,000 m² in the 6th of October industrial zone — a manufacturing plant, not only an importer.";
    if (EN.fac && !EN.fac.some(function(x){return /10,?000|10000|m²|sq/.test(String(x[1]||x[0]||""));})) {
      EN.fac.unshift(["Footprint","About 10,000 m² · industrial zone · 6th of October"]);
    }
    if (EN.stats && EN.stats[0]) EN.stats[0] = ["~10,000 m²", "Factory"];
    EN.galleryT = EN.galleryT || "Factory & product gallery";
    EN.galleryS = EN.galleryS || "Real photos from the factory floor and production.";
  }
})();
