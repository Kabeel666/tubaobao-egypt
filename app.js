const F=[
["M1-001","wood","خشب رمادي فاتح","Light grey wood","#b7aaa0","صالة ومكتب","Living / office"],
["M1-002","wood","خشب رمادي دافئ","Warm grey wood","#a89482","غرفة نوم","Bedroom"],
["M1-003","wood","خشب متوسط","Medium wood","#8b6a4a","كافيه","Café"],
["M1-004","wood","خشب كلاسيك","Classic wood","#6e4f35","فندق","Hotel"],
["M1-005","wood","خشب محمر","Red-tone wood","#7a4332","مطعم","Restaurant"],
["M1-006","wood","خشب غامق","Dark wood","#3f2d22","تلفزيون","TV wall"],
["M1-007","wood","خشب عقدي","Knotted wood","#5c4634","محل","Shop"],
["M1-008","wood","خشب زيتي","Olive wood","#6b6144","عيادة","Clinic"],
["M1-009","wood","خشب رملي","Sand wood","#c2ae8b","صالة","Living"],
["M2-001","textile","كتان / قماش","Linen / textile","#d7cfc3","غرفة نوم","Bedroom"],
["M3-001","marble","رخام فاتح","Light marble","#ece7df","حمام","Bath"],
["M3-002","marble","رخام رمادي","Grey marble","#9aa0a6","مطبخ","Kitchen"],
["M3-003","marble","رخام معرّق","Veined marble","#d9d2c8","استقبال","Reception"]
];
const SH=[["500","رخام كريمي","Cream marble","#e8d9c4"],["502","رخام أبيض عرق","White grey vein","#f2f0ea"],["503","رخام بيج","Beige marble","#d8c3a2"],["504","رخام رمادي","Soft grey","#c5c8cb"],["505","رخام غامق","Dark marble","#5c5854"],["506","كالكاتا","Calacatta","#efeae2"],["J0407","خشب طبيعي","Natural wood","#8a6239"],["303","خشب رمادي","Grey wood","#8d8278"],["304","خشب جوزي","Walnut","#5a3b28"],["313","خشب فاتح","Light wood","#c9b48a"],["318","ساده دافئ","Warm solid","#d7c4a6"],["319","ساده بارد","Cool solid","#d9ddd8"],["530","رخام إمبراطوري","Imperial","#cfc3b0"]];
const PR=[["801","16","2.5","280","عريض مجوّف","Wide hollow"],["802","20","1.5","280","أعرض أنحف","Wider slim"],["803","13.5","1.6","280","أضيق","Narrow"],["804","15","2.2","280","متوسط","Medium"],["805","15.8","2.2","280","متوسط+","Medium+"]];
const SP=[["صالة معيشة","Living","تجاليد وتلفزيون","TV wall cladding"],["غرفة نوم","Bedroom","هيدبورد وممر","Headboard"],["مطبخ","Kitchen","ظهر رخامي","Backsplash"],["حمام","Bathroom","حائط داخلي رطب","Wet interior"],["مدخل","Entrance","انطباع أول","First look"],["محل","Retail","ثيم سريع","Fast theme"],["كافيه","Café","خشب دافئ","Warm wood"],["مكتب","Office","قاعات","Meeting rooms"],["عيادة","Clinic","سطح يتنظف","Wipe-clean"],["فندق","Hotel","أكواد موحّدة","Repeat codes"],["شركة","Corporate","استقبال","Reception"],["مسجد","Mosque","هدوء لوني","Calm walls"],["مدرسة","School","صيانة قليلة","Low upkeep"],["معرض","Showroom","عينة حية","Live sample"]];
const AR={dir:"rtl",brand:"توباباو مصر",sub:"TuBaoBao Egypt · مصنع 6 أكتوبر",lang:"EN",
nav:[["#about","من نحن"],["#products","المنتجات"],["#colors","الألوان"],["#sheets","الألواح"],["#spaces","الاستخدامات"],["#specs","المواصفات"],["#trade","للتجار"],["#factory","المصنع"],["#contact","تواصل"]],
heroK:"مصنع · 6 أكتوبر · قطعة 37",heroT:"الشكل الفاخر.<br/>التركيب السريع.",
heroS:"شرائح تجاليد PVC 16 و18 و20 × 280 سم، وألواح بديل رخام وخشب 1.22 × 2.80 م بسمك 5 مم. التصنيع في المصنع والتوريد لكل المحافظات.",
cta1:"شاهد المنتجات",cta2:"بيانات المصنع",
stats:[["قطعة 37","المصنع"],["16 / 18 / 20","عرض سم"],["1.22 × 2.80","اللوح"],["داخلي","الاستخدام"]],
aboutT:"من نحن",aboutP:"توباباو مصر مصنع ديكور في المنطقة الصناعية الخامسة بمدينة 6 أكتوبر. نصنّع شرائح وألواح بديل خشب وبديل رخام للشقق والمحلات والكافيهات والمكاتب والعيادات والفنادق. شكل فاخر، تركيب سريع، ومقاومة رطوبة أعلى من الخشب — من غير وزن الرخام.",
prodT:"خطوط الإنتاج",prodS:"ثلاث عائلات واضحة.",
lines:[["شرائح التجاليد","PVC مجوّف، طول 280 سم، مع فوم بورد 5 مم.","#8b6a4a"],["اللوح الكبير","122 × 280 سم × 5 مم للجدران الواسعة.","#d9d2c8"],["إكسسوار","زوايا ونهاية وفوم. أبواب WPC لاحقاً.","#c2a36b"]],
colT:"مكتبة الألوان",colS:"13 كود. السعر حسب الكمية ولا يُنشر.",all:"الكل",wood:"خشب",textile:"كتان",marble:"رخام",
colNote:"اللون على الشاشة تقريبي. العيّنة من المصنع هي المرجع. متاح 16 و18 و20 × 280.",
shT:"ألواح كبيرة",shS:"5 مم · 1.22 × 2.80 م · حوالي 3.416 م² للوح.",
spT:"حلول حسب المكان",spS:"تشطيب سريع مش مجرد خامة.",
spxT:"المواصفات",spxS:"أرقام المصنع.",
specH:["البند","القيمة"],spec:[["الخامة","PVC مجوّف + فيلم"],["الطول","280 سم"],["العرض","16 / 18 / 20 سم"],["الفوم","5 مم"],["اللوح","122 × 280 × 5 مم"],["التغطية","3.416 م²"],["الاستخدام","داخلي مقاوم للرطوبة"],["السعر","عند الطلب"]],
profH:["قطاع","عرض","ارتفاع","طول","ملاحظة"],
calcT:"حاسبة الشرائح",calcS:"استرشادي + هدر 8٪.",lbW:"عرض الحائط م",lbH:"ارتفاع الحائط م",lbSz:"عرض الشريحة",
calcNote:"لا يغني عن المعاينة.",resA:"المساحة",resP:"شرائح تقريباً",resS:"ألواح مكافئة",
insT:"التركيب",insS:"تركيب جاف فوق سطح مستو.",
steps:[["قياس","قِس وخصم الفتحات + 8٪."],["سطح","مستوي أو فوم 5 مم."],["توزيع","آخر شريحة متكونش رفيعة."],["تثبيت","لاصق PVC أو تعشيقة."],["تعشيق","لسان في مجرى."],["قص","منشار ناعم."],["إكسسوار","زاوية ونهاية."],["تنظيف","ماء وقماش."]],
cmpT:"PVC مقابل الخشب والرخام",cmpS:"كل خامة لها وظيفة.",
cmpH:["البند","PVC","خشب","رخام"],
cmp:[["وزن","خفيف","متوسط","ثقيل"],["تركيب","سريع","أطول","ثقيل"],["مياه","مقاوم داخلياً","حساس","ممتاز"],["صيانة","مسح","دهان","جلي"],["شكل","نقشة ثابتة","عرق طبيعي","حجر"],["الأنسب","تجديد سريع","نجارة","أسطح حجر"]],
trT:"للتجار",trS:"معارض ومقاولون ومصدرون.",
trade:[["سعر المصنع","بالطلب فقط."],["عينات","كود حقيقي قبل التعميد."],["توريد","من 6 أكتوبر لكل المحافظات."],["تصدير","ليبيا والسودان بعد التعبئة."],["دعم","قطاع وإكسسوار."],["قادم","أبواب WPC."]],
facT:"المصنع",facP:"المنطقة الصناعية الخامسة — 6 أكتوبر — قطعة 37. 8ص–8م عدا الجمعة.",
fac:[["الموقع","قطعة 37 · 6 أكتوبر"],["الإنتاج","شرائح وألواح داخلية"],["التغطية","مصر + تصدير إقليمي"]],
faqT:"أسئلة",
faq:[["الأسعار ظاهرة؟","لا. حسب الكود والكمية."],["كل المحافظات؟","نعم من 6 أكتوبر."],["تصدير؟","نعم بعد الاتفاق."],["الأكواد موجودة؟","أغلبها يُصنَّع."],["مقاس 18؟","نعم مع 16 و20."],["حمام؟","مقاوم رطوبة داخلية وليس عزل."],["شمس مباشرة؟","الاستخدام داخلي."],["عينة؟","من المصنع."],["أبواب؟","لاحقاً."],["رقم؟","سيُضاف لاحقاً."]],
ctT:"تواصل",ctS:"الرقم غير ظاهر حالياً.",ctNote:"وسيلة التواصل تُضاف لاحقاً حتى لا تنتشر أرقام قديمة.",
addr:"المنطقة الصناعية الخامسة — مدينة 6 أكتوبر — قطعة 37",hours:"8ص – 8م · عدا الجمعة",
foot:"توباباو مصر · مصنع 6 أكتوبر · قطعة 37"};
const EN={dir:"ltr",brand:"TuBaoBao Egypt",sub:"PVC factory · 6th of October",lang:"عربي",
nav:[["#about","About"],["#products","Products"],["#colors","Finishes"],["#sheets","Sheets"],["#spaces","Spaces"],["#specs","Specs"],["#trade","Trade"],["#factory","Factory"],["#contact","Contact"]],
heroK:"Factory · 6th of October · Plot 37",heroT:"The look of luxury.<br/>The speed of PVC.",
heroS:"PVC slats 16, 18 and 20 × 280 cm, plus 5 mm marble and wood-look sheets at 1.22 × 2.80 m. Made at the factory and supplied across Egypt.",
cta1:"See products",cta2:"Factory details",
stats:[["Plot 37","Factory"],["16 / 18 / 20","Width cm"],["1.22 × 2.80","Sheet"],["Interior","Use"]],
aboutT:"About",aboutP:"TuBaoBao Egypt makes interior wood-look and marble-look PVC slats and sheets in the 5th Industrial Zone, 6th of October City. Premium look, fast install, better moisture resistance than timber — without stone weight.",
prodT:"Product lines",prodS:"Three clear families.",
lines:[["Fluted slats","Hollow PVC, 280 cm, with 5 mm foam board.","#8b6a4a"],["Large sheet","122 × 280 cm × 5 mm for wide walls.","#d9d2c8"],["Trims","Corners, end caps, foam. WPC doors later.","#c2a36b"]],
colT:"Finish library",colS:"13 codes. Price quoted, never listed.",all:"All",wood:"Wood",textile:"Linen",marble:"Marble",
colNote:"Screen colour is approximate. Factory sample is the reference. 16 / 18 / 20 × 280.",
shT:"Large sheets",shS:"5 mm · 1.22 × 2.80 m · about 3.416 m² each.",
spT:"By space",spS:"A fast finish, not only a material.",
spxT:"Specs",spxS:"Factory numbers.",
specH:["Item","Value"],spec:[["Material","Hollow PVC + film"],["Length","280 cm"],["Widths","16 / 18 / 20 cm"],["Foam","5 mm"],["Sheet","122 × 280 × 5 mm"],["Coverage","3.416 m²"],["Use","Interior moisture resistant"],["Price","On request"]],
profH:["Profile","W","H","L","Note"],
calcT:"Slat calculator",calcS:"Guide + 8% waste.",lbW:"Wall width m",lbH:"Wall height m",lbSz:"Slat width",
calcNote:"Does not replace a survey.",resA:"Area",resP:"Slats approx.",resS:"Sheet equivalent",
insT:"Install",insS:"Dry install on a flat wall.",
steps:[["Measure","Deduct openings + 8%."],["Surface","Flat or 5 mm foam."],["Layout","Last slat not too thin."],["Fix","PVC adhesive or groove."],["Click","Tongue into groove."],["Cut","Fine-tooth saw."],["Trims","Corner and end cap."],["Clean","Water and cloth."]],
cmpT:"PVC vs wood vs marble",cmpS:"Each material has a job.",
cmpH:["Topic","PVC","Wood","Marble"],
cmp:[["Weight","Light","Medium","Heavy"],["Install","Fast","Longer","Heavy"],["Water","Interior OK","Sensitive","Excellent"],["Care","Wipe","Paint","Polish"],["Look","Stable print","Natural grain","Stone"],["Best","Fast décor","Joinery","Stone tops"]],
trT:"Trade",trS:"Showrooms, contractors, exporters.",
trade:[["Factory price","Quoted only."],["Samples","Real code first."],["Supply","Nationwide from October."],["Export","Libya / Sudan after packing."],["Support","Profiles and trims."],["Next","WPC doors."]],
facT:"Factory",facP:"5th Industrial Zone — 6th of October — Plot 37. 08:00–20:00 except Friday.",
fac:[["Site","Plot 37 · 6th of October"],["Output","Interior slats and sheets"],["Reach","Egypt + regional export"]],
faqT:"FAQ",
faq:[["Prices listed?","No. By code and volume."],["All governorates?","Yes from October."],["Export?","Yes after terms."],["Codes in stock?","Most are made here."],["18 cm?","Yes with 16 and 20."],["Bathroom?","Interior moisture, not tanking."],["Direct sun?","Interior use."],["Sample?","From the factory."],["Doors?","Later."],["Phone?","To be added later."]],
ctT:"Contact",ctS:"Phone is empty on purpose.",ctNote:"Contact details will be added later so old numbers do not spread.",
addr:"5th Industrial Zone — 6th of October City — Plot 37",hours:"08:00–20:00 · closed Friday",
foot:"TuBaoBao Egypt · 6th of October factory · Plot 37"};
let lang="ar", fam="all";
const $=id=>document.getElementById(id);
const t=()=>lang==="ar"?AR:EN;
function render(){
  const d=t();
  document.documentElement.lang=lang;
  document.documentElement.dir=d.dir;
  document.body.className=lang==="en"?"en":"";
  $("brandName").innerHTML=d.brand+"<small>"+d.sub+"</small>";
  $("nav").innerHTML=d.nav.map(([h,l])=>`<a href="${h}">${l}</a>`).join("")+`<button class="lang" type="button">${d.lang}</button>`;
  $("nav").querySelector(".lang").onclick=()=>{lang=lang==="ar"?"en":"ar";render();};
  $("heroK").textContent=d.heroK;$("heroT").innerHTML=d.heroT;$("heroS").textContent=d.heroS;
  $("cta1").textContent=d.cta1;$("cta2").textContent=d.cta2;
  $("stats").innerHTML=d.stats.map(([a,b])=>`<div class="stat"><b>${a}</b><span>${b}</span></div>`).join("");
  $("palette").innerHTML=F.map(x=>`<i style="background:${x[4]}"></i>`).join("");
  $("aboutT").textContent=d.aboutT;$("aboutP").textContent=d.aboutP;
  $("prodT").textContent=d.prodT;$("prodS").textContent=d.prodS;
  $("lines").innerHTML=d.lines.map(([h,p,c])=>`<article class="card"><span class="chip" style="background:${c}"></span><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("");
  $("colT").textContent=d.colT;$("colS").textContent=d.colS;$("colNote").textContent=d.colNote;
  $("filters").innerHTML=[["all",d.all],["wood",d.wood],["textile",d.textile],["marble",d.marble]].map(([k,l])=>`<button class="${fam===k?"on":""}" data-fam="${k}">${l}</button>`).join("");
  $("filters").onclick=e=>{const b=e.target.closest("button");if(!b)return;fam=b.dataset.fam;render();};
  $("finishes").innerHTML=F.filter(x=>fam==="all"||x[1]===fam).map(x=>`<article class="card"><span class="chip" style="background:${x[4]}"></span><div class="meta"><b class="code">${x[0]}</b><div>${lang==="ar"?x[2]:x[3]}</div><small>${lang==="ar"?x[5]:x[6]}</small></div></article>`).join("");
  $("shT").textContent=d.shT;$("shS").textContent=d.shS;
  $("sheetsG").innerHTML=SH.map(x=>`<article class="card"><span class="chip" style="background:${x[3]}"></span><div class="meta"><b class="code">${x[0]}</b><div>${lang==="ar"?x[1]:x[2]}</div><small>122 × 280 · 5 mm</small></div></article>`).join("");
  $("spT").textContent=d.spT;$("spS").textContent=d.spS;
  $("spacesG").innerHTML=SP.map(x=>`<article class="card"><div class="meta"><b>${lang==="ar"?x[0]:x[1]}</b><p>${lang==="ar"?x[2]:x[3]}</p></div></article>`).join("");
  $("spxT").textContent=d.spxT;$("spxS").textContent=d.spxS;
  $("specTable").innerHTML=`<tr>${d.specH.map(h=>`<th>${h}</th>`).join("")}</tr>`+d.spec.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  $("profTable").innerHTML=`<tr>${d.profH.map(h=>`<th>${h}</th>`).join("")}</tr>`+PR.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td>${lang==="ar"?p[4]:p[5]}</td></tr>`).join("");
  $("calcT").textContent=d.calcT;$("calcS").textContent=d.calcS;$("lbW").textContent=d.lbW;$("lbH").textContent=d.lbH;$("lbSz").textContent=d.lbSz;$("calcNote").textContent=d.calcNote;
  $("insT").textContent=d.insT;$("insS").textContent=d.insS;
  $("steps").innerHTML=d.steps.map((s,i)=>`<div class="step"><div class="num">${i+1}</div><div><b>${s[0]}</b><div>${s[1]}</div></div></div>`).join("");
  $("cmpT").textContent=d.cmpT;$("cmpS").textContent=d.cmpS;
  $("cmpTable").innerHTML=`<tr>${d.cmpH.map(h=>`<th>${h}</th>`).join("")}</tr>`+d.cmp.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("");
  $("trT").textContent=d.trT;$("trS").textContent=d.trS;
  $("tradeG").innerHTML=d.trade.map(([h,p])=>`<article class="card"><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("");
  $("facT").textContent=d.facT;$("facP").textContent=d.facP;
  $("facG").innerHTML=d.fac.map(([h,p])=>`<article class="card"><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("");
  $("faqT").textContent=d.faqT;
  $("faqG").innerHTML=d.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("");
  $("ctT").textContent=d.ctT;$("ctS").textContent=d.ctS;$("ctNote").textContent=d.ctNote;$("addr").textContent=d.addr;$("hours").textContent=d.hours;$("foot").textContent=d.foot;
  calc();
}
function calc(){
  const d=t(),w=parseFloat($("wallW").value||0),h=parseFloat($("wallH").value||0),sw=parseFloat($("slatW").value);
  const area=w*h, slats=sw?Math.ceil((w/sw)*Math.ceil(h/2.8)*1.08):0, sh=area?Math.ceil((area*1.08)/3.416):0;
  $("resA").innerHTML=d.resA+`<br/><b>${area.toFixed(2)} m²</b>`;
  $("resP").innerHTML=d.resP+`<br/><b>${slats}</b>`;
  $("resS").innerHTML=d.resS+`<br/><b>${sh}</b>`;
}
["wallW","wallH","slatW"].forEach(id=>$(id).addEventListener("input",calc));
render();
