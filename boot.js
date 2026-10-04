function render(){
  const d=t();
  document.documentElement.lang=lang;
  document.documentElement.dir=d.dir;
  document.body.className=lang==="en"?"en":"";
  $("brandName").innerHTML=d.brand+"<small>"+d.sub+"</small>";
  $("langBtn").textContent=d.lang;
  $("tabs").innerHTML=TABS.map(([id,ar,en])=>`<button type="button" data-tab="${id}" class="${tab===id?"on":""}">${lang==="ar"?ar:en}</button>`).join("");
  const shown=F.filter(x=>fam==="all"||finishFam(x)===fam);
  const famBtns=[["all",d.all|| (lang==="ar"?"الكل":"All")],["wood",d.wood|| (lang==="ar"?"خشب":"Wood")],["marble",d.marble|| (lang==="ar"?"رخام":"Marble")],["ceramic",d.ceramic|| (lang==="ar"?"سيراميك":"Ceramic")],["chipboard",d.chipboard|| (lang==="ar"?"شيبورد/WPC":"Chipboard/WPC")],["textile",d.textile|| (lang==="ar"?"كتان":"Linen")],["solid",d.solid|| (lang==="ar"?"ساده":"Solid")],["leather",d.leather|| (lang==="ar"?"جلد":"Leather")]];
  $("app").innerHTML=
    page("home", richHome(d)) +
    page("about", `<div class="wrap"><div class="about-card"><h2>${d.aboutT}</h2><p>${d.aboutP}</p></div></div>`) +
    page("products", `<div class="wrap"><h2>${d.prodT}</h2><p class="lead">${d.prodS}</p><div class="grid3">${d.lines.map(([h,p,c])=>`<article class="card"><span class="chip" style="background:${c}"></span><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("")}</div></div>`) +
    page("colors", `<div class="wrap"><h2>${d.colT}</h2><p class="lead">${d.colS}</p><div class="filters" id="filters">${famBtns.map(([k,l])=>`<button class="${fam===k?"on":""}" data-fam="${k}">${l}</button>`).join("")}</div><div class="grid4">${shown.map(x=>`<article class="card"><span class="chip" style="background:${finishColor(x)}"></span><div class="meta"><b class="code">${x[0]}</b><div>${finishLabel(x)}</div><small>${finishFam(x)}</small></div></article>`).join("")}</div><p class="note">${d.colNote}</p></div>`) +
    page("sheets", `<div class="wrap"><h2>${d.shT}</h2><p class="lead">${d.shS}</p><div class="grid4">${SH.map(x=>`<article class="card"><span class="chip" style="background:${x[3]}"></span><div class="meta"><b class="code">${x[0]}</b><div>${lang==="ar"?x[1]:x[2]}</div><small>122 × 280 · 5 mm</small></div></article>`).join("")}</div></div>`) +
    page("sizes", `<div class="wrap"><h2>${d.szT}</h2><p class="lead">${d.szS}</p><div class="scroll"><table><tr>${d.profH.map(h=>`<th>${h}</th>`).join("")}</tr>${PR.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td>${lang==="ar"?p[4]:p[5]}</td></tr>`).join("")}</table></div></div>`) +
    page("chooser", (typeof chooserInner==="function"?chooserInner(d):"")) +
    page("looks", (typeof looksInner==="function"?looksInner(d):"")) +
    page("videos", (typeof videosInner==="function"?videosInner(d):"")) +
    page("viz", (typeof vizInner==="function"?vizInner(d):"")) +
    page("spaces", `<div class="wrap"><h2>${d.spT}</h2><p class="lead">${d.spS}</p><p class="note">${lang==="ar"?"الأقسام دي أفكار استخدام. الصور المولَّدة مش سابقة أعمال ومش أسماء عملاء. الأسعار للطلب فقط.":"These sections are use ideas. Generated photos are not past projects and not client names. Prices are quote-only."}</p>${typeof usePlacesHtml==="function"?usePlacesHtml():""}<div class="grid4">${SP.map(x=>`<article class="card"><div class="meta"><b>${lang==="ar"?x[1]:x[2]}</b><p>${lang==="ar"?x[3]:x[4]}</p><small>${lang==="ar"?"فكرة استخدام":"Use idea"}</small></div></article>`).join("")}</div></div>`) +
    page("specs", `<div class="wrap"><h2>${d.spxT}</h2><p class="lead">${d.spxS}</p><div class="scroll"><table><tr>${d.specH.map(h=>`<th>${h}</th>`).join("")}</tr>${d.spec.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div></div>`) +
    page("calc", `<div class="wrap"><h2>${d.calcT}</h2><p class="lead">${d.calcS}</p><div class="calc"><div><label>${d.lbW}</label><input id="wallW" type="number" step="0.1" value="4"/><label>${d.lbH}</label><input id="wallH" type="number" step="0.1" value="2.8"/><label>${d.lbSz}</label><select id="slatW"><option value="0.134">13.4</option><option value="0.16">16</option><option value="0.18" selected>18</option><option value="0.20">20</option></select><p class="note">${d.calcNote}</p></div><div class="result"><div id="resA"></div><div id="resP"></div><div id="resS"></div></div></div></div>`) +
    page("install", `<div class="wrap"><h2>${d.insT}</h2><p class="lead">${d.insS}</p>${d.steps.map((s,i)=>`<div class="step"><div class="num">${i+1}</div><div><b>${s[0]}</b><div>${s[1]}</div></div></div>`).join("")}</div>`) +
    page("access", `<div class="wrap"><h2>${d.accT}</h2><p class="lead">${d.accS}</p>${cards(ACC.map(x=>[lang==="ar"?x[1]:x[2], lang==="ar"?(x[3]||""):(x[4]||"")]))}</div>`) +
    page("compare", `<div class="wrap"><h2>${d.cmpT}</h2><p class="lead">${d.cmpS}</p><div class="scroll"><table><tr>${d.cmpH.map(h=>`<th>${h}</th>`).join("")}</tr>${d.cmp.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div></div>`) +
    page("care", `<div class="wrap"><h2>${d.careT}</h2><p class="lead">${d.careS}</p>${cards(d.care)}</div>`) +
    page("trade", `<div class="wrap"><h2>${d.trT}</h2><p class="lead">${d.trS}</p>${cards(d.trade)}</div>`) +
    page("export", `<div class="wrap"><h2>${d.exT}</h2><p class="lead">${d.exS}</p>${cards(d.ex)}</div>`) +
    page("gov", `<div class="wrap"><h2>${d.govT}</h2><p class="lead">${d.govS}</p><div class="grid4">${GOV.map(g=>`<article class="card"><div class="meta"><b>${lang==="ar"?g[1]:g[2]}</b><small>${lang==="ar"?g[3]:g[4]}</small></div></article>`).join("")}</div></div>`) +
    page("pack", `<div class="wrap"><h2>${d.pkT}</h2><p class="lead">${d.pkS}</p>${cards(PACK.map(x=>[lang==="ar"?x[1]:x[2], lang==="ar"?(x[3]||""):(x[4]||"")]))}</div>`) +
    page("factory", `<div class="wrap"><h2>${d.facT}</h2><p class="lead">${d.facP}</p>${cards(d.fac)}</div>`) +
    page("soon", `<div class="wrap"><h2>${d.soonT}</h2><p class="lead">${d.soonS}</p>${cards(d.soon)}</div>`) +
    page("faq", `<div class="wrap"><h2>${d.faqT}</h2>${d.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`) +
    page("contact", `<div class="wrap"><h2>${d.ctT}</h2><p class="lead">${d.ctS}</p><p class="note">${d.ctNote}</p><p class="addr">${d.addr}</p><p class="lead">${d.hours}</p></div>`) +
    page("projects", `<div class="wrap"><h2>${d.projT|| (lang==="ar"?"مشاريع":"Projects")}</h2><p class="lead">${d.projS||""}</p><div class="grid3">${(typeof PROJ!=="undefined"?PROJ:[]).map(x=>`<article class="card"><div class="meta"><b>${lang==="ar"?x[1]:x[2]}</b><p>${lang==="ar"?x[3]:x[4]}</p><small>${lang==="ar"?"مخطط نصي — ليس مشروع منشور":"Text sketch — not a published project"}</small></div></article>`).join("")}</div></div>`);
  $("foot").textContent=d.foot;
  bind();
  if(tab==="calc") calc();
}
function setTab(id){
  var anchor="";
  id=String(id||"");
  var cut=id.indexOf(":");
  if(cut>=0){anchor=id.slice(cut+1);id=id.slice(0,cut);}
  if(!TABS.some(x=>x[0]===id)) id="home";
  tab=id;
  var hash=anchor?(id+":"+anchor):id;
  if(location.hash!=="#"+hash) location.hash=hash;
  render();
  if(anchor){
    var el=document.getElementById(anchor);
    if(el) el.scrollIntoView({block:"start"});
    else window.scrollTo(0,0);
  }else window.scrollTo(0,0);
}
function bind(){
  document.querySelectorAll("[data-tab]").forEach(el=>el.onclick=e=>{e.preventDefault();var id=el.dataset.tab; if(el.dataset.anchor) id+=":"+el.dataset.anchor; setTab(id);});
  const f=$("filters");
  if(f) f.onclick=e=>{const b=e.target.closest("button"); if(!b) return; fam=b.dataset.fam; render();};
  ["wallW","wallH","slatW"].forEach(id=>{const el=$(id); if(el) el.addEventListener("input",calc);});
  const hs=$("homeSearch");
  const hb=$("homeSearchBtn");
  const runSearch=()=>{ homeQ=(hs&&hs.value)||""; render(); const el=$("homeSearch"); if(el){ el.focus(); try{ el.setSelectionRange(el.value.length, el.value.length);}catch(e){} } };
  if(hb) hb.onclick=runSearch;
  if(hs){ hs.addEventListener("keydown",e=>{ if(e.key==="Enter"){ e.preventDefault(); runSearch(); }}); }
}
function calc(){
  const d=t(), w=parseFloat(($("wallW")||{}).value||0), h=parseFloat(($("wallH")||{}).value||0), sw=parseFloat(($("slatW")||{}).value||0);
  const area=w*h, slats=sw?Math.ceil((w/sw)*Math.ceil(h/2.8)*1.08):0, sh=area?Math.ceil((area*1.08)/3.416):0;
  if($("resA")) $("resA").innerHTML=d.resA+`<br/><b>${area.toFixed(2)} m²</b>`;
  if($("resP")) $("resP").innerHTML=d.resP+`<br/><b>${slats}</b>`;
  if($("resS")) $("resS").innerHTML=d.resS+`<br/><b>${sh}</b>`;
}
$("langBtn").onclick=()=>{lang=lang==="ar"?"en":"ar";render();};
window.addEventListener("hashchange",()=>setTab((location.hash||"#home").slice(1)));
setTab((location.hash||"#home").slice(1));
