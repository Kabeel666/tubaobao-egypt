const PHONE = "01116208881";
const WA = "https://wa.me/201116208881";
const finishes = [
  { id: "M1-001", family: "wood", ar: "خشب رمادي فاتح", en: "Light grey wood", img: "images/catalog/s16-01.jpg", use: "صالة، مكتب" },
  { id: "M1-002", family: "wood", ar: "خشب رمادي دافئ", en: "Warm grey wood", img: "images/catalog/s16-02.jpg", use: "غرفة نوم" },
  { id: "M1-003", family: "wood", ar: "خشب متوسط", en: "Medium wood", img: "images/catalog/s16-03.jpg", use: "كافيه" },
  { id: "M1-004", family: "wood", ar: "خشب كلاسيك", en: "Classic wood", img: "images/catalog/s16-04.jpg", use: "فندق" },
  { id: "M1-005", family: "wood", ar: "خشب محمر", en: "Red-tone wood", img: "images/catalog/s16-05.jpg", use: "مطعم" },
  { id: "M1-006", family: "wood", ar: "خشب غامق", en: "Dark wood", img: "images/catalog/s16-06.jpg", use: "تلفزيون" },
  { id: "M1-007", family: "wood", ar: "خشب عقدي", en: "Knotted wood", img: "images/catalog/s16-07.jpg", use: "محل" },
  { id: "M1-008", family: "wood", ar: "خشب زيتي", en: "Olive wood", img: "images/catalog/s16-08.jpg", use: "عيادة" },
  { id: "M1-009", family: "wood", ar: "خشب رملي", en: "Sand wood", img: "images/catalog/s16-09.jpg", use: "صالة" },
  { id: "M2-001", family: "textile", ar: "كتان", en: "Linen", img: "images/catalog/s16-10.jpg", use: "غرفة نوم" },
  { id: "M3-001", family: "marble", ar: "رخام فاتح", en: "Light marble", img: "images/catalog/s16-11.jpg", use: "حمام" },
  { id: "M3-002", family: "marble", ar: "رخام رمادي", en: "Grey marble", img: "images/catalog/s16-12.jpg", use: "مطبخ" },
  { id: "M3-003", family: "marble", ar: "رخام معرّق", en: "Veined marble", img: "images/catalog/s16-13.jpg", use: "استقبال" }
];
const sheets = ["500","502","503","504","505","506","J0407","303","304","313","318","319","530"];
const profiles = [["801","16","2.5","280"],["802","20","1.5","280"],["803","13.5","1.6","280"],["804","15","2.2","280"],["805","15.8","2.2","280"]];
let lang = "ar";
let filter = "all";
const D = {
  ar: {
    brand: "توباباو مصر",
    hero: "جمال الخشب.<br>قوة الـ PVC.",
    sub: "شرائح 16 و 18 و 20 × 280 سم، وألواح 1.22 × 2.80 بسمك 5 مم. تتصنّع في 6 أكتوبر قطعة 37.",
    quote: "اطلب عرض سعر", sample: "اطلب عينة",
    all: "الكل", wood: "خشب", textile: "كتان", marble: "رخام",
    addr: "المنطقة الصناعية الخامسة — 6 أكتوبر — قطعة 37",
    hours: "8 ص إلى 8 م عدا الجمعة"
  },
  en: {
    brand: "TuBaoBao Egypt",
    hero: "The look of wood.<br>The life of PVC.",
    sub: "Slats 16 / 18 / 20 × 280 cm and 5 mm sheets 1.22 × 2.80 m. Made at Plot 37, 6th of October.",
    quote: "Request a quote", sample: "Request a sample",
    all: "All", wood: "Wood", textile: "Linen", marble: "Marble",
    addr: "5th Industrial Zone — 6th of October — Plot 37",
    hours: "8:00–20:00 except Friday"
  }
};
function wa(t){return WA+"?text="+encodeURIComponent(t)}
function render(){
  const d=D[lang];
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  const shown=finishes.filter(f=>filter==="all"||f.family===filter);
  document.getElementById("app").innerHTML=`
  <header class="top"><div class="wrap top-in">
    <b>${d.brand}</b>
    <div class="actions">
      <button class="btn" id="lang">${lang==="ar"?"EN":"عربي"}</button>
      <a class="btn solid" href="${wa("طلب عرض سعر")}">${PHONE}</a>
    </div>
  </div></header>
  <main class="wrap">
    <section class="hero" style="grid-template-columns:1fr">
      <div>
        <p class="kicker">FACTORY · PLOT 37</p>
        <h1>${d.hero}</h1>
        <p class="muted">${d.sub}</p>
        <p><a class="btn solid" href="${wa("طلب عرض سعر")}">${d.quote}</a> <a class="btn" href="${wa("طلب عينة")}">${d.sample}</a></p>
        <div class="stats">
          <div class="stat"><b>6 أكتوبر</b><span class="muted">المصنع</span></div>
          <div class="stat"><b>16 / 18 / 20</b><span class="muted">سم</span></div>
          <div class="stat"><b>1.22 × 2.80</b><span class="muted">اللوح</span></div>
          <div class="stat"><b>01116208881</b><span class="muted">WhatsApp</span></div>
        </div>
      </div>
    </section>
    <section class="section" id="colors">
      <p class="kicker">M1 M2 M3</p><h2>${lang==="ar"?"مكتبة الألوان":"Finishes"}</h2>
      <div class="filters">${["all","wood","textile","marble"].map(k=>`<button class="chip ${filter===k?"on":""}" data-f="${k}">${d[k]}</button>`).join("")}</div>
      <div class="grid-4">${shown.map(f=>`<article class="finish"><div class="meta"><div class="code">${f.id}</div><div>${lang==="ar"?f.ar:f.en}</div><div class="muted">${f.use}</div><a class="btn" href="${wa("كود "+f.id)}">${d.sample}</a></div></article>`).join("")}</div>
    </section>
    <section class="section">
      <p class="kicker">5MM</p><h2>${lang==="ar"?"ألواح كبيرة":"Large sheets"}</h2>
      <div class="grid-4">${sheets.map(c=>`<article class="sheet"><p><span class="code">${c}</span><br><span class="muted">1.22 × 2.80</span></p></article>`).join("")}</div>
    </section>
    <section class="section">
      <p class="kicker">801–805</p><h2>${lang==="ar"?"القطاعات":"Profiles"}</h2>
      <table><thead><tr><th>ID</th><th>W</th><th>H</th><th>L</th></tr></thead><tbody>${profiles.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td></tr>`).join("")}</tbody></table>
    </section>
    <section class="section">
      <p class="kicker">CONTACT</p>
      <h2>${PHONE}</h2>
      <p>${d.addr}<br><span class="muted">${d.hours}</span></p>
      <a class="btn wa" href="${WA}">WhatsApp</a>
    </section>
  </main>
  <a class="float-wa" href="${WA}">WA</a>`;
  document.getElementById("lang").onclick=()=>{lang=lang==="ar"?"en":"ar";render()};
  document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{filter=b.dataset.f;render()});
}
render();
