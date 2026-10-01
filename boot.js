let lang="ar", tab="home", fam="all";
const $=id=>document.getElementById(id);
const t=()=>lang==="ar"?AR:EN;
function cards(rows){return `<div class="grid3">`+rows.map(([h,p])=>`<article class="card"><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("")+`</div>`}
function page(id, inner){return `<section class="page${tab===id?" on":""}" id="p-${id}">${inner}</section>`}
function render(){
  const d=t();
  document.documentElement.lang=lang;
  document.documentElement.dir=d.dir;
  document.body.className=lang==="en"?"en":"";
  $("brandName").innerHTML=d.brand+"<small>"+d.sub+"</small>";
  $("langBtn").textContent=d.lang;
  $("tabs").innerHTML=TABS.map(([id,ar,en])=>`<button type="button" data-tab="${id}" class="${tab===id?"on":""}">${lang==="ar"?ar:en}</button>`).join("");
  const shown=F.filter(x=>fam==="all"||x[1]===fam);
  $("app").innerHTML=
    page("home", `<div class="hero"><div class="wrap hero-in"><div><p class="k">${d.heroK}</p><h1>${d.heroT}</h1><p>${d.heroS}</p><button class="btn gold" data-tab="products">${d.cta1}</button><button class="btn ghost" data-tab="factory">${d.cta2}</button><div class="stats">${d.stats.map(([a,b])=>`<div class="stat"><b>${a}</b><span>${b}</span></div>`).join("")}</div></div><div class="board">${F.map(x=>`<i style="background:${x[4]}"></i>`).join("")}</div></div></div>`) +
    page("about", `<div class="wrap"><div class="about-card"><h2>${d.aboutT}</h2><p>${d.aboutP}</p></div></div>`) +
    page("products", `<div class="wrap"><h2>${d.prodT}</h2><p class="lead">${d.prodS}</p><div class="grid3">${d.lines.map(([h,p,c])=>`<article class="card"><span class="chip" style="background:${c}"></span><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("")}</div></div>`) +
    page("colors", `<div class="wrap"><h2>${d.colT}</h2><p class="lead">${d.colS}</p><div class="filters" id="filters">${[["all",d.all],["wood",d.wood],["textile",d.textile],["marble",d.marble]].map(([k,l])=>`<button class="${fam===k?"on":""}" data-fam="${k}">${l}</button>`).join("")}</div><div class="grid4">${shown.map(x=>`<article class="card"><span class="chip" style="background:${x[4]}"></span><div class="meta"><b class="code">${x[0]}</b><div>${lang==="ar"?x[2]:x[3]}</div><small>${lang==="ar"?x[5]:x[6]}</small></div></article>`).join("")}</div><p class="note">${d.colNote}</p></div>`) +
    page("sheets", `<div class="wrap"><h2>${d.shT}</h2><p class="lead">${d.shS}</p><div class="grid4">${SH.map(x=>`<article class="card"><span class="chip" style="background:${x[3]}"></span><div class="meta"><b class="code">${x[0]}</b><div>${lang==="ar"?x[1]:x[2]}</div><small>122 × 280 · 5 mm</small></div></article>`).join("")}</div></div>`) +
    page("sizes", `<div class="wrap"><h2>${d.szT}</h2><p class="lead">${d.szS}</p><div class="scroll"><table><tr>${d.profH.map(h=>`<th>${h}</th>`).join("")}</tr>${PR.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td>${lang==="ar"?p[4]:p[5]}</td></tr>`).join("")}</table></div></div>`) +
    page("spaces", `<div class="wrap"><h2>${d.spT}</h2><p class="lead">${d.spS}</p><div class="grid4">${SP.map(x=>`<article class="card"><div class="meta"><b>${lang==="ar"?x[0]:x[1]}</b><p>${lang==="ar"?x[2]:x[3]}</p></div></article>`).join("")}</div></div>`) +
    page("specs", `<div class="wrap"><h2>${d.spxT}</h2><p class="lead">${d.spxS}</p><div class="scroll"><table><tr>${d.specH.map(h=>`<th>${h}</th>`).join("")}</tr>${d.spec.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div></div>`) +
    page("calc", `<div class="wrap"><h2>${d.calcT}</h2><p class="lead">${d.calcS}</p><div class="calc"><div><label>${d.lbW}</label><input id="wallW" type="number" step="0.1" value="4"/><label>${d.lbH}</label><input id="wallH" type="number" step="0.1" value="2.8"/><label>${d.lbSz}</label><select id="slatW"><option value="0.16">16</option><option value="0.18">18</option><option value="0.20">20</option></select><p class="note">${d.calcNote}</p></div><div class="result"><div id="resA"></div><div id="resP"></div><div id="resS"></div></div></div></div>`) +
    page("install", `<div class="wrap"><h2>${d.insT}</h2><p class="lead">${d.insS}</p>${d.steps.map((s,i)=>`<div class="step"><div class="num">${i+1}</div><div><b>${s[0]}</b><div>${s[1]}</div></div></div>`).join("")}</div>`) +
    page("access", `<div class="wrap"><h2>${d.accT}</h2><p class="lead">${d.accS}</p>${cards(ACC.map(x=>[lang==="ar"?x[0]:x[1], lang==="ar"?(x[2]||"جزء من نظام التركيب"):(x[3]||"Part of the install system")]))}</div>`) +
    page("compare", `<div class="wrap"><h2>${d.cmpT}</h2><p class="lead">${d.cmpS}</p><div class="scroll"><table><tr>${d.cmpH.map(h=>`<th>${h}</th>`).join("")}</tr>${d.cmp.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div></div>`) +
    page("care", `<div class="wrap"><h2>${d.careT}</h2><p class="lead">${d.careS}</p>${cards(d.care)}</div>`) +
    page("trade", `<div class="wrap"><h2>${d.trT}</h2><p class="lead">${d.trS}</p>${cards(d.trade)}</div>`) +
    page("export", `<div class="wrap"><h2>${d.exT}</h2><p class="lead">${d.exS}</p>${cards(d.ex)}</div>`) +
    page("gov", `<div class="wrap"><h2>${d.govT}</h2><p class="lead">${d.govS}</p><div class="grid4">${GOV.map(g=>`<article class="card"><div class="meta"><b>${g}</b></div></article>`).join("")}</div></div>`) +
    page("pack", `<div class="wrap"><h2>${d.pkT}</h2><p class="lead">${d.pkS}</p>${cards(PACK.map(x=>[lang==="ar"?x[0]:x[1], lang==="ar"?(x[2]||"من أرض المصنع"):(x[3]||"From the factory floor")]))}</div>`) +
    page("factory", `<div class="wrap"><h2>${d.facT}</h2><p class="lead">${d.facP}</p>${cards(d.fac)}</div>`) +
    page("soon", `<div class="wrap"><h2>${d.soonT}</h2><p class="lead">${d.soonS}</p>${cards(d.soon)}</div>`) +
    page("faq", `<div class="wrap"><h2>${d.faqT}</h2>${d.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`) +
    page("contact", `<div class="wrap"><h2>${d.ctT}</h2><p class="lead">${d.ctS}</p><p class="note">${d.ctNote}</p><p class="addr">${d.addr}</p><p class="lead">${d.hours}</p></div>`);
  $("foot").textContent=d.foot;
  bind();
  if(tab==="calc") calc();
}
function setTab(id){
  if(!TABS.some(x=>x[0]===id)) id="home";
  tab=id;
  location.hash=id;
  render();
  window.scrollTo(0,0);
}
function bind(){
  document.querySelectorAll("[data-tab]").forEach(el=>el.onclick=e=>{e.preventDefault();setTab(el.dataset.tab);});
  const f=$("filters");
  if(f) f.onclick=e=>{const b=e.target.closest("button"); if(!b) return; fam=b.dataset.fam; render();};
  ["wallW","wallH","slatW"].forEach(id=>{const el=$(id); if(el) el.addEventListener("input",calc);});
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
