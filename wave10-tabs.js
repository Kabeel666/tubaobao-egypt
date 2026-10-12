/* Wave 10: register distributor pages before boot.js routes the first hash */
(function () {
  var NEW = [
    ["partner", "برنامج الموزعين", "Distributor program", "经销商计划"],
    ["applications", "مجالات الاستخدام", "Applications", "应用领域"],
    ["concepts", "أفكار مشاريع", "Application concepts", "应用构想"],
    ["rnd", "المصنع والتطوير", "Factory & R&D", "工厂与研发"],
    ["quality", "الجودة والشهادات", "Quality & certificates", "质量与认证"],
    ["technical", "الدعم الفني", "Technical resources", "技术资料"],
    ["inquiry", "طلب وكالة / توزيع", "Distributor inquiry", "经销申请"]
  ];
  if (typeof TABS !== "undefined") {
    var at = TABS.length;
    for (var i = 0; i < TABS.length; i++) if (TABS[i][0] === "trade") at = i;
    NEW.forEach(function (row, k) { if (!TABS.some(function (x) { return x[0] === row[0]; })) TABS.splice(at + k, 0, row); });
  }

})();
