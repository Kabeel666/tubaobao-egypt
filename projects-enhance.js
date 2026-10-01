(function () {
  function $(id) { return document.getElementById(id); }
  function t() { return (typeof lang !== "undefined" && lang === "en") ? EN : AR; }
  function injectProjectsPage() {
    if (typeof PROJ === "undefined" || !PROJ || !PROJ.length) return;
    if ($("p-projects")) return;
    var spaces = $("p-spaces");
    if (!spaces || !spaces.parentNode) return;
    var d = t();
    var title = (d && d.projT) || (lang === "ar" ? "مشاريع" : "Projects");
    var lead = (d && d.projS) || "";
    var note = lang === "ar" ? "مخطط نصي استرشادي — ليس صورة مشروع منشور" : "Text planning sketch — not a published project photo";
    var sec = document.createElement("section");
    sec.className = "page" + (typeof tab !== "undefined" && tab === "projects" ? " on" : "");
    sec.id = "p-projects";
    sec.innerHTML = '<div class="wrap"><h2>' + title + '</h2><p class="lead">' + lead + '</p><div class="grid3">' +
      PROJ.map(function (x) {
        return '<article class="card"><div class="meta"><b>' + (lang === "ar" ? x[1] : x[2]) + '</b><p>' + (lang === "ar" ? x[3] : x[4]) + '</p><small>' + note + '</small></div></article>';
      }).join("") + '</div></div>';
    spaces.parentNode.insertBefore(sec, spaces.nextSibling);
  }
  function hook() {
    try { injectProjectsPage(); } catch (e) {}
  }
  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) {
      _setTab(id);
      setTimeout(hook, 0);
    };
  }
  setTimeout(hook, 0);
  setTimeout(hook, 60);
})();
