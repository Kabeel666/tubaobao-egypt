const PHONE = "01116208881";
const WA = "https://wa.me/201116208881";
const I = (k) => (window.IMG && IMG[k]) || "";
const pic = {
  logo: I("brand_logo"),
  hero: I("gallery_FB_IMG_1790083330712"),
  board16: I("board_16"),
  board20: I("board_20"),
  boardSw: I("board_swatches"),
  fac1: I("gallery_mmexport1790083515116"),
  fac2: I("gallery_FB_IMG_1790083324589"),
  fac3: I("gallery_FB_IMG_1790083279371"),
  fac4: I("gallery_FB_IMG_1790083300148"),
  fac5: I("gallery_mmexport1790083497808")
};
const finishes = [
  { id:"M1-001", family:"wood", ar:"خشب رمادي فاتح", en:"Light grey wood", k16:"catalog_s16_01", k20:"catalog_s20_02", useAr:"صالة، مكتب، مدخل", useEn:"Living, office, lobby" },
  { id:"M1-002", family:"wood", ar:"خشب رمادي دافئ", en:"Warm grey wood", k16:"catalog_s16_02", k20:"catalog_s20_03", useAr:"غرفة نوم، تلفزيون", useEn:"Bedroom, TV wall" },
  { id:"M1-003", family:"wood", ar:"خشب متوسط", en:"Medium wood", k16:"catalog_s16_03", k20:"catalog_s20_04", useAr:"كافيه، مكتب", useEn:"Café, office" },
  { id:"M1-004", family:"wood", ar:"خشب كلاسيك", en:"Classic wood", k16:"catalog_s16_04", k20:"catalog_s20_05", useAr:"فندق، شركة", useEn:"Hotel, company" },
  { id:"M1-005", family:"wood", ar:"خشب محمر", en:"Red-tone wood", k16:"catalog_s16_05", k20:"catalog_s20_06", useAr:"مطعم، صالة", useEn:"Restaurant, lounge" },
  { id:"M1-006", family:"wood", ar:"خشب غامق", en:"Dark wood", k16:"catalog_s16_06", k20:"catalog_s20_07", useAr:"وحدة تلفزيون", useEn:"TV unit" },
  { id:"M1-007", family:"wood", ar:"خشب عقدي", en:"Knotted wood", k16:"catalog_s16_07", k20:"catalog_s20_08", useAr:"محل، مدخل", useEn:"Shop, entrance" },
  { id:"M1-008", family:"wood", ar:"خشب زيتي", en:"Olive wood", k16:"catalog_s16_08", k20:"catalog_s20_09", useAr:"عيادة، مكتب", useEn:"Clinic, office" },
  { id:"M1-009", family:"wood", ar:"خشب رملي", en:"Sand wood", k16:"catalog_s16_09", k20:"catalog_s20_10", useAr:"غرفة، صالة", useEn:"Room, living" },
  { id:"M2-001", family:"textile", ar:"كتان / قماش", en:"Linen / textile", k16:"catalog_s16_10", k20:"catalog_s20_11", useAr:"غرفة نوم، فندق", useEn:"Bedroom, hotel" },
  { id:"M3-001", family:"marble", ar:"رخام فاتح", en:"Light marble", k16:"catalog_s16_11", k20:"catalog_s20_12", useAr:"حمام، مدخل", useEn:"Bath, lobby" },
  { id:"M3-002", family:"marble", ar:"رخام رمادي", en:"Grey marble", k16:"catalog_s16_12", k20:"catalog_s20_13", useAr:"مطبخ، عيادة", useEn:"Kitchen, clinic" },
  { id:"M3-003", family:"marble", ar:"رخام معرّق", en:"Veined marble", k16:"catalog_s16_13", k20:"catalog_s20_14", useAr:"استقبال، شركة", useEn:"Reception, office" }
];
const sheets = [
  ["500","catalog_s134_02"],["502","catalog_s134_03"],["503","catalog_s134_04"],["504","catalog_s134_05"],
  ["505","catalog_s134_06"],["506","catalog_s134_07"],["J0407","catalog_s134_08"],["303","catalog_s134_09"],
  ["304","catalog_s134_10"],["313","catalog_s134_11"],["318","catalog_s134_12"],["319","catalog_s134_13"],["530","catalog_s134_14"]
];
const profiles = [
  ["801","16","2.5","280","تجاليد عريض مجوّف","Wide hollow slat"],
  ["802","20","1.5","280","تجاليد أعرض وأقل سماكة","Wider, slimmer slat"],
  ["803","13.5","1.6","280","قطاع أضيق","Narrower profile"],
  ["804","15","2.2","280","قطاع متوسط","Mid profile"],
  ["805","15.8","2.2","280","قطاع متوسط+","Mid-plus profile"]
];
const TABS = [
  ["home","الرئيسية","Home"],["products","المنتجات","Products"],["colors","الألوان","Finishes"],
  ["sheets","الألواح","Sheets"],["sizes","المقاسات","Sizes"],["install","التركيب","Install"],
  ["calc","الحاسبة","Calculator"],["gallery","المعرض","Gallery"],["trade","التجار","Trade"],
  ["export","التصدير","Export"],["factory","المصنع","Factory"],["faq","الأسئلة","FAQ"],["contact","تواصل","Contact"]
];
const dict = {
  ar: {
    dir:"rtl", font:"arabic", brand:"توباباو مصر", sub:"مصنع PVC · 6 أكتوبر",
    heroK:"مصنع · المنطقة الصناعية الخامسة · قطعة 37",
    hero:"جمال الخشب.<br/>قوة الـ PVC.",
    heroSub:"شرائح تجاليد 16 و18 و20 × 280 سم، وألواح رخام وخشب 1.22 × 2.80 بسمك 5 مم. التصنيع في المصنع، التوريد لكل المحافظات، والتصدير لليبيا والسودان وأسواق أخرى.",
    quote:"اطلب عرض سعر", sample:"اطلب عينة",
    stats:[["6 أكتوبر","المصنع"],["16 / 18 / 20","عرض الشريحة سم"],["1.22 × 2.80","اللوح الكبير"],["8ص–8م","عدا الجمعة"]],
    linesT:"خطوط الإنتاج",
    lines:[["شرائح تجاليد","قطاع PVC مجوّف بنقشة خشب أو رخام أو كتان. يُركَّب مع فوم بورد 5 مم. الطول 280 سم.","board16"],["اللوح الكبير","بديل رخام وخشب 1.22 × 2.80 م وسمك 5 مم. للجدران الواسعة.","fac3"],["إكسسوار وتركيب","زوايا، نهاية، فوم بورد، معاينة، توريد، وتركيب. أبواب WPC قيد الإضافة.","boardSw"]],
    whyT:"ليه PVC من المصنع؟",
    why:[["شكل الخشب والرخام","من غير صيانة الخشب الطبيعي أو وزن الرخام."],["مقاوم للرطوبة","مناسب للحوائط الداخلية كتشطيب، مش كعزل."],["تركيب سريع","على حائط قائم أو فوم 5 مم."],["مخزون وتصنيع","أغلب الأكواد بتتصنّع هنا في قطعة 37."]],
    colorsT:"مكتبة الألوان — 13 كود", colorsS:"خشب، كتان، رخام. متاح 16 و18 و20 × 280. السعر عند الطلب.",
    all:"الكل", wood:"خشب", textile:"كتان", marble:"رخام",
    sheetsT:"ألواح كبيرة", sheetsS:"سمك 5 مم · 1.22 × 2.80 م · 3.416 م² للوح",
    sizesT:"مقارنة المقاسات والقطاعات",
    specRows:[["الخامة","PVC مجوّف مع فيلم نقشة"],["طول الشريحة","280 سم"],["العروض","16 / 18 / 20 سم"],["الفوم المصاحب","فوم بورد 5 مم"],["اللوح الكبير","122 × 280 سم · 5 مم"],["الاستخدام","داخلي · مقاوم للرطوبة"],["التركيب","سطح مستو أو فوم"],["السعر","عند الطلب — لا يُنشر"]],
    profile:"قطاع", w:"العرض سم", h:"الارتفاع سم", l:"الطول سم", note:"ملاحظة",
    calcT:"حاسبة عدد الألواح", calcS:"حساب استرشادي يشمل هدر حوالي 8٪.",
    wallW:"عرض الحائط (متر)", wallH:"ارتفاع الحائط (متر)", size:"عرض الشريحة",
    panels:"لوح تقريبًا", area:"م²", waste:"شامل الهدر 8٪",
    installT:"طريقة التركيب",
    steps:[["قياس","قِس الحائط وخصم الفتحات. زِد حوالي 8٪ هدر."],["سطح","السطح يكون مستويًا. الفوم بورد 5 مم يظبط التعاريج."],["توزيع","حدد نقطة البداية بحيث آخر لوح ما يطلع رفيع."],["تثبيت","لاصق مناسب للـ PVC أو مسامير في التعشيقة."],["تعشيق","أدخل اللسان في المجرى."],["قص","قص بمنشار أسنان ناعمة."],["إكسسوار","زاوية داخلية/خارجية ونهاية."],["تنظيف","قماشة مبللة. بلا مواد مذيبة."]],
    galleryT:"من أرض المصنع والكتالوج", galleryS:"صور حقيقية. اضغط للتكبير.",
    spacesT:"استخدامات شائعة",
    spaces:["صالة","وحدة تلفزيون","غرفة نوم","مطبخ","حمام","مدخل","محل","كافيه","مكتب","عيادة","فندق","شركة","مسجد","مدرسة"],
    tradeT:"بوابة التجار", tradeS:"معارض، مقاولون، مهندسون، ومصدرون.",
    trade:[["سعر المصنع","يتحدد بالطلب."],["عينات","أكواد حقيقية قبل التعميد."],["توريد","من 6 أكتوبر لكل المحافظات."],["دعم فني","قطاع، إكسسوار، وطريقة تركيب."]],
    exportT:"التصدير", exportS:"تعبئة للتصدير إلى ليبيا والسودان وأسواق أخرى.",
    export:[["الأسواق","ليبيا، السودان، ودول أخرى."],["الطلب","الكود والمقاس والكمية على واتساب المصنع."],["المستندات","فاتورة وتعبئة حسب الاتفاق."]],
    factoryT:"المصنع", factory:"توباباو مصنع مواد ديكور في المنطقة الصناعية الخامسة، مدينة 6 أكتوبر، قطعة 37. المنتج بيتصنّع هنا، ومعظم الأكواد موجودة.",
    address:"المنطقة الصناعية الخامسة — 6 أكتوبر — قطعة 37",
    hours:"8 صباحًا إلى 8 مساءًا كل الأيام عدا الجمعة",
    only:"رقم التواصل الوحيد. لا تعتمد على أرقام قديمة.",
    faqT:"أسئلة قبل الطلب",
    faq:[["الأسعار ظاهرة؟","لا. حسب الكود والمقاس والكمية."],["بتورّدوا كل المحافظات؟","نعم، من المصنع في 6 أكتوبر."],["بتصدّروا؟","نعم. ليبيا والسودان ودول أخرى."],["كل الأكواد موجودة؟","معظمها موجود ويتصنّع."],["في مقاس 18؟","نعم. 16 و18 و20 × 280."],["في أبواب؟","الأبواب WPC قيد الإضافة."],["يتحمل مية؟","مقاوم للرطوبة للاستخدام الداخلي."],["أقدر آخد عينة؟","نعم. على واتساب المصنع."],["بتتركّب على إيه؟","حائط مستوي أو فوم بورد 5 مم."],["فرق 16 و 20؟","20 أعرض، 16 أدق."]],
    contactT:"اطلب كتالوج أو عينة", name:"الاسم", city:"المحافظة", role:"تاجر / مهندس / عميل", msg:"الكود والمقاس والكمية",
    send:"إرسال واتساب", footer:"TuBaoBao Egypt · مصنع 6 أكتوبر · قطعة 37 · 01116208881"
  },
  en: {
    dir:"ltr", font:"latin", brand:"TuBaoBao Egypt", sub:"PVC factory · 6th of October",
    heroK:"Factory · 5th Industrial Zone · Plot 37",
    hero:"The look of wood.<br/>The life of PVC.",
    heroSub:"Fluted slats in 16, 18 and 20 × 280 cm, plus 5 mm marble and wood-look sheets at 1.22 × 2.80 m. Made here, supplied across Egypt, exported to Libya, Sudan and further markets.",
    quote:"Request a quote", sample:"Request a sample",
    stats:[["6th of October","Factory"],["16 / 18 / 20","Slat width cm"],["1.22 × 2.80","Large sheet"],["8am–8pm","Closed Friday"]],
    linesT:"Product lines",
    lines:[["Fluted slats","Hollow PVC with wood, marble or linen film, paired with 5 mm foam board. Length 280 cm.","board16"],["Large sheet","Marble and wood-look board, 1.22 × 2.80 m, 5 mm.","fac3"],["Trims and install","Corners, end caps, foam board and approved installers. WPC doors coming.","boardSw"]],
    whyT:"Why factory PVC?",
    why:[["Wood and marble look","Without timber upkeep or stone weight."],["Moisture resistant","Interior finish — not tanking."],["Fast install","On an existing wall or 5 mm foam."],["Made on site","Most codes are produced at Plot 37."]],
    colorsT:"Finish library — 13 codes", colorsS:"Wood, linen, marble. Available 16, 18 and 20 × 280. Price is quoted.",
    all:"All", wood:"Wood", textile:"Linen", marble:"Marble",
    sheetsT:"Large sheets", sheetsS:"5 mm · 1.22 × 2.80 m · 3.416 m² per sheet",
    sizesT:"Sizes and profiles",
    specRows:[["Material","Hollow PVC with decorative film"],["Slat length","280 cm"],["Widths","16 / 18 / 20 cm"],["Paired board","5 mm foam board"],["Large sheet","122 × 280 cm · 5 mm"],["Use","Indoor · moisture resistant"],["Install","Flat wall or foam"],["Price","On request — not published"]],
    profile:"Profile", w:"Width cm", h:"Height cm", l:"Length cm", note:"Note",
    calcT:"Panel estimator", calcS:"Guide only, includes about 8% waste.",
    wallW:"Wall width (m)", wallH:"Wall height (m)", size:"Slat width",
    panels:"panels approx.", area:"m²", waste:"includes 8% waste",
    installT:"How it is installed",
    steps:[["Measure","Measure the wall, deduct openings, add about 8% waste."],["Surface","Keep it flat. 5 mm foam takes light unevenness."],["Layout","Start so the last piece is not a thin strip."],["Fix","PVC adhesive or screws in the flange."],["Lock","Slide the tongue into the groove."],["Cut","Fine-tooth saw. Hide the edge with a trim."],["Trims","Corner and end cap on exposed edges."],["Clean","Damp cloth. No harsh solvents."]],
    galleryT:"From the factory floor", galleryS:"Real slat and stock photos. Tap to enlarge.",
    spacesT:"Typical spaces",
    spaces:["Living","TV wall","Bedroom","Kitchen","Bath","Entrance","Shop","Café","Office","Clinic","Hotel","Company","Mosque","School"],
    tradeT:"Trade desk", tradeS:"Showrooms, contractors, designers and exporters.",
    trade:[["Factory price","Quoted. No public list."],["Samples","Real codes before you commit."],["Supply","From 6th of October nationwide."],["Technical","Profile, trims and install method."]],
    exportT:"Export", exportS:"Packed for Libya, Sudan and further markets.",
    export:[["Markets","Libya, Sudan and other destinations."],["Order","Code, size, volume and port on WhatsApp."],["Papers","Invoice and packing as agreed."]],
    factoryT:"The factory", factory:"TuBaoBao manufactures décor panels at Plot 37, 5th Industrial Zone, 6th of October City. Most codes are made here.",
    address:"5th Industrial Zone — 6th of October City — Plot 37",
    hours:"8:00 to 20:00 every day except Friday",
    only:"The only factory number. Ignore older numbers.",
    faqT:"Before you order",
    faq:[["Are prices listed?","No. Quoted by code, size and volume."],["Nationwide supply?","Yes, from the 6th of October factory."],["Export?","Yes. Libya, Sudan and other markets."],["All codes in stock?","Most are made here."],["Is 18 cm available?","Yes. 16, 18 and 20 × 280."],["Doors?","WPC doors are still being added."],["Waterproof?","Moisture resistant for interiors."],["Can I get a sample?","Yes. Send the code on WhatsApp."],["What does it fix to?","A flat wall or 5 mm foam board."],["16 vs 20?","20 is wider; 16 is finer."]],
    contactT:"Request a catalogue or sample", name:"Name", city:"City", role:"Trader / designer / client", msg:"Code, size and quantity",
    send:"Send on WhatsApp", footer:"TuBaoBao Egypt · 6th of October factory · Plot 37 · 01116208881"
  }
};
let lang = "ar", tab = "home", filter = "all", sizeView = "16";
function t(){ return dict[lang]; }
function wa(text){ return WA + "?text=" + encodeURIComponent(text); }
function img(el){ return `<img src="${el}" alt="" loading="lazy" data-full="${el}"/>`; }
function paneHome(d){
  return `<section class="hero"><div><p class="kicker">${d.heroK}</p><h1>${d.hero}</h1><p class="muted">${d.heroSub}</p><p><a class="btn solid" href="${wa("طلب عرض سعر من الموقع")}">${d.quote}</a> <a class="btn" href="${wa("طلب عينة كتالوج")}">${d.sample}</a></p><div class="stats">${d.stats.map(([a,b])=>`<div class="stat"><b>${a}</b><span class="muted">${b}</span></div>`).join("")}</div></div><div class="hero-photo">${img(pic.hero)}<div class="hero-cap"><b>${PHONE}</b><div class="muted">${d.address}</div></div></div></section><section class="section"><p class="kicker">LINES</p><h2>${d.linesT}</h2><div class="grid-3">${d.lines.map(([h,p,k])=>`<article class="card">${img(pic[k])}<h3>${h}</h3><p class="muted">${p}</p></article>`).join("")}</div></section><section class="section"><p class="kicker">WHY</p><h2>${d.whyT}</h2><div class="grid-4">${d.why.map(([h,p])=>`<article class="card"><div class="code">+</div><h3>${h}</h3><p class="muted">${p}</p></article>`).join("")}</div></section>`;
}
function paneProducts(d){
  return `<section class="section"><p class="kicker">16 · 18 · 20</p><h2>${d.linesT}</h2><div class="grid-2"><article class="card">${img(pic.board16)}<h3>16 × 280</h3><p class="muted">${lang==="ar"?"شريحة أدق للتجاليد والتلفزيون.":"Finer slat for feature walls and TV units."}</p></article><article class="card">${img(pic.board20)}<h3>20 × 280</h3><p class="muted">${lang==="ar"?"شريحة أعرض بإيقاع أهدأ للجدران الواسعة.":"Wider slat, calmer rhythm on long walls."}</p></article></div><p class="note">${lang==="ar"?"مقاس 18 متاح أيضاً بنفس الأكواد. يُركَّب مع فوم بورد 5 مم.":"18 cm is also available in the same codes. Paired with 5 mm foam board."}</p></section>`;
}
function paneColors(d){
  const shown = finishes.filter(f => filter==="all" || f.family===filter);
  return `<section class="section"><p class="kicker">M1 · M2 · M3</p><h2>${d.colorsT}</h2><p class="muted">${d.colorsS}</p><div class="filters">${["all","wood","textile","marble"].map(k=>`<button class="chip ${filter===k?"on":""}" data-f="${k}">${d[k]}</button>`).join("")}</div><div class="grid-4">${shown.map(f=>{ const src = I(f.k16); return `<article class="finish" data-full="${src}"><img src="${src}" alt="${f.id}"/><div class="meta"><div class="code">${f.id}</div><div>${lang==="ar"?f.ar:f.en}</div><div class="muted">${lang==="ar"?f.useAr:f.useEn}</div><a class="btn" href="${wa("طلب كود "+f.id+" مقاس 16/18/20")}">${d.sample}</a></div></article>`; }).join("")}</div><p class="kicker" style="margin-top:22px">BOARD</p>${img(pic.boardSw)}</section>`;
}
function paneSheets(d){
  return `<section class="section"><p class="kicker">5 MM</p><h2>${d.sheetsT}</h2><p class="muted">${d.sheetsS}</p><div class="grid-4">${sheets.map(([code,k])=>`<article class="sheet" data-full="${I(k)}"><img src="${I(k)}" alt="${code}"/><p class="meta"><span class="code">${code}</span><br/><span class="muted">1.22 × 2.80</span></p></article>`).join("")}</div></section>`;
}
function paneSizes(d){
  return `<section class="section"><p class="kicker">801–805</p><h2>${d.sizesT}</h2><div class="compare"><article class="card"><span class="pill">16 cm</span><h3>0.448 م²</h3></article><article class="card"><span class="pill">18 cm</span><h3>0.504 م²</h3></article><article class="card"><span class="pill">20 cm</span><h3>0.560 م²</h3></article></div><div class="grid-3" style="margin:16px 0">${d.specRows.map(([k,v])=>`<div class="card"><div class="code">${k}</div><div>${v}</div></div>`).join("")}</div><div style="overflow:auto"><table><thead><tr><th>${d.profile}</th><th>${d.w}</th><th>${d.h}</th><th>${d.l}</th><th>${d.note}</th></tr></thead><tbody>${profiles.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td>${lang==="ar"?p[4]:p[5]}</td></tr>`).join("")}</tbody></table></div></section>`;
}
function paneInstall(d){
  return `<section class="section"><p class="kicker">INSTALL</p><h2>${d.installT}</h2><div class="grid-2" style="margin-bottom:16px">${img(pic.board16)}${img(pic.fac4)}</div><div class="steps">${d.steps.map(([h,p],i)=>`<div class="step"><div class="num">${i+1}</div><div><b>${h}</b><div class="muted">${p}</div></div></div>`).join("")}</div></section>`;
}
function paneCalc(d){
  return `<section class="section"><p class="kicker">ESTIMATE</p><h2>${d.calcT}</h2><p class="muted">${d.calcS}</p><div class="calc"><div class="card"><label>${d.wallW}</label><input id="ww" type="number" min="0.5" step="0.1" value="4"/><label>${d.wallH}</label><input id="wh" type="number" min="0.5" step="0.1" value="2.8"/><label>${d.size}</label><select id="ws"><option value="0.16">16 cm</option><option value="0.18">18 cm</option><option value="0.20">20 cm</option></select></div><div class="result" id="out"></div></div></section>`;
}
function paneGallery(d){
  const g = [pic.fac1,pic.fac2,pic.fac3,pic.fac4,pic.fac5,pic.hero,pic.board16,pic.board20];
  return `<section class="section"><p class="kicker">GALLERY</p><h2>${d.galleryT}</h2><p class="muted">${d.galleryS}</p><div class="gallery">${g.map(src=>`<img src="${src}" data-full="${src}" alt="gallery"/>`).join("")}</div><p class="kicker" style="margin-top:22px">${d.spacesT}</p><div class="filters">${d.spaces.map(s=>`<span class="chip">${s}</span>`).join("")}</div></section>`;
}
function paneTrade(d){
  return `<section class="section"><p class="kicker">TRADE</p><h2>${d.tradeT}</h2><p class="muted">${d.tradeS}</p><div class="grid-4">${d.trade.map(([h,p])=>`<article class="card"><h3>${h}</h3><p class="muted">${p}</p></article>`).join("")}</div></section>`;
}
function paneExport(d){
  return `<section class="section"><p class="kicker">EXPORT</p><h2>${d.exportT}</h2><p class="muted">${d.exportS}</p><div class="grid-3">${d.export.map(([h,p])=>`<article class="card"><h3>${h}</h3><p class="muted">${p}</p></article>`).join("")}</div></section>`;
}
function paneFactory(d){
  return `<section class="section"><p class="kicker">PLOT 37</p><h2>${d.factoryT}</h2><p class="muted">${d.factory}</p><p><b>${d.address}</b><br/><span class="muted">${d.hours}</span></p><div class="gallery"><img src="${pic.fac1}" data-full="${pic.fac1}" alt="factory"/><img src="${pic.fac2}" data-full="${pic.fac2}" alt="showroom"/><img src="${pic.fac5}" data-full="${pic.fac5}" alt="stock"/></div></section>`;
}
function paneFaq(d){
  return `<section class="section"><p class="kicker">FAQ</p><h2>${d.faqT}</h2>${d.faq.map(([q,a])=>`<details><summary>${q}</summary><p class="muted">${a}</p></details>`).join("")}</section>`;
}
function paneContact(d){
  return `<section class="section"><p class="kicker">WHATSAPP</p><h2>${d.contactT}</h2><p class="muted">${d.only}</p><div class="calc"><div class="card"><label>${d.name}</label><input id="nm"/><label>${d.city}</label><input id="ct"/><label>${d.role}</label><input id="rl"/><label>${d.msg}</label><textarea id="ms" rows="4"></textarea><p><button class="btn solid" id="send">${d.send}</button></p></div><div class="card"><h3>${PHONE}</h3><p>${d.address}</p><p class="muted">${d.hours}</p><a class="btn wa" href="${WA}">WhatsApp</a></div></div></section>`;
}
const PANES = { home: paneHome, products: paneProducts, colors: paneColors, sheets: paneSheets, sizes: paneSizes, install: paneInstall, calc: paneCalc, gallery: paneGallery, trade: paneTrade, export: paneExport, factory: paneFactory, faq: paneFaq, contact: paneContact };
function render(){
  const d = t();
  document.documentElement.lang = lang; document.documentElement.dir = d.dir; document.body.dataset.font = d.font;
  document.getElementById("app").innerHTML = `<header class="top"><div class="wrap"><div class="top-in"><a class="brand" href="#"><img src="${pic.logo}" alt="TuBaoBao"/><span><b>${d.brand}</b><small>${d.sub}</small></span></a><div class="actions"><button class="btn" id="lang">${lang==="ar"?"EN":"عربي"}</button><a class="btn solid" href="${wa("طلب عرض سعر")}">${PHONE}</a></div></div><nav class="tabs">${TABS.map(([id,ar,en])=>`<button class="tab ${tab===id?"on":""}" data-tab="${id}">${lang==="ar"?ar:en}</button>`).join("")}</nav></div></header><main class="wrap">${(PANES[tab]||paneHome)(d)}</main><footer><div class="wrap">${d.footer}</div></footer><a class="float-wa" href="${WA}">WA ${PHONE}</a><div class="lb" id="lb"></div>`;
  document.getElementById("lang").onclick = () => { lang = lang==="ar"?"en":"ar"; render(); };
  document.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => { tab = b.dataset.tab; render(); });
  document.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { filter = b.dataset.f; render(); });
  document.querySelectorAll("[data-full], img[data-full]").forEach(el => {
    el.addEventListener("click", () => {
      const src = el.getAttribute("data-full") || el.src;
      const lb = document.getElementById("lb"); lb.className = "lb on"; lb.innerHTML = `<img src="${src}" alt=""/>`; lb.onclick = () => { lb.className = "lb"; };
    });
  });
  if (tab === "calc") {
    const calc = () => {
      const w = parseFloat(document.getElementById("ww").value)||0;
      const h = parseFloat(document.getElementById("wh").value)||0;
      const sw = parseFloat(document.getElementById("ws").value)||0.16;
      const area = w*h; const cover = sw*2.8; const n = cover ? Math.ceil((area*1.08)/cover) : 0;
      document.getElementById("out").innerHTML = `<div class="muted">${d.calcT}</div><b>${n}</b><div>${d.panels}</div><p class="muted">${area.toFixed(2)} ${d.area} · ${d.waste}</p>`;
    };
    ["ww","wh","ws"].forEach(id => document.getElementById(id).addEventListener("input", calc)); calc();
  }
  if (tab === "contact") {
    document.getElementById("send").onclick = () => {
      const text = [document.getElementById("nm").value, document.getElementById("ct").value, document.getElementById("rl").value, document.getElementById("ms").value].filter(Boolean).join(" — ");
      location.href = wa(text || "طلب كتالوج");
    };
  }
}
render();
