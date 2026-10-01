var lang="ar", tab="home", fam="all", homeQ="";
const $=id=>document.getElementById(id);
const t=()=>lang==="ar"?AR:EN;
function cards(rows){return `<div class="grid3">`+rows.map(([h,p])=>`<article class="card"><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("")+`</div>`}
function page(id, inner){return `<section class="page${tab===id?" on":""}" id="p-${id}">${inner}</section>`}
function finishLabel(x){return lang==="ar"?x[2]:x[3]}
function finishColor(x){return x[4]}
function finishFam(x){return x[1]}
function waLink(msg){
  const base=(window.WA||"https://wa.me/201116208881");
  return msg? (base+"?text="+encodeURIComponent(msg)) : base;
}
function homeSearchPool(){
  const finishes=(typeof F!=="undefined"?F:[]).map(x=>({kind:"finish",code:x[0],fam:x[1],ar:x[2],en:x[3],color:x[4]}));
  const sheets=(typeof SH!=="undefined"?SH:[]).map(x=>({kind:"sheet",code:x[0],fam:"sheet",ar:x[1],en:x[2],color:x[3]}));
  return finishes.concat(sheets);
}
function filterPool(q){
  q=(q||"").trim().toLowerCase();
  const pool=homeSearchPool();
  if(!q) return pool.slice(0,24);
  return pool.filter(p=>{
    const hay=(p.code+" "+p.ar+" "+p.en+" "+p.fam+" "+p.kind).toLowerCase();
    return hay.includes(q);
  }).slice(0,48);
}
function richHome(d){
  const W=window.WA||"https://wa.me/201116208881";
  const P=window.PHONE||"01116208881";
  const M=window.MEDIA||{};
  const heroImg=(M.hero||"media/home/creative-01.jpg");
  const life=(M.lifestyle&&M.lifestyle.length)?M.lifestyle:["media/home/creative-01.jpg","media/home/creative-02.jpg","media/home/lifestyle-01.jpg","media/home/showroom-collage.jpg"];
  const works=(M.works&&M.works.length)?M.works:["media/works/showroom-collage.jpg","media/works/catalog-rack.jpg","media/home/product-01.jpg","media/home/product-02.jpg","media/home/product-03.jpg","media/home/product-04.jpg"];
  const fac=(M.factory&&M.factory.length)?M.factory:["media/factory/manufacturing-panels.jpg","media/factory/sample-rack.jpg"];
  const results=filterPool(homeQ);
  const edu=[
    {key:"marble", img:life[0]||heroImg, ar:["\u0628\u062f\u064a\u0644 \u0627\u0644\u0631\u062e\u0627\u0645","\u0623\u0644\u0648\u0627\u062d \u0648\u0634\u0631\u0627\u0626\u062d \u0628\u0645\u0638\u0647\u0631 \u0631\u062e\u0627\u0645\u064a \u0641\u0627\u062e\u0631 \u062f\u0648\u0646 \u0648\u0632\u0646 \u0627\u0644\u062d\u062c\u0631 \u2014 \u0644\u0644\u0645\u0637\u0627\u0628\u062e \u0648\u0627\u0644\u062d\u0645\u0627\u0645\u0627\u062a \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644."], en:["Marble alternative","Sheets and slats with a luxury marble look without stone weight \u2014 kitchens, interior baths, reception."]},
    {key:"ceramic", img:life[1]||heroImg, ar:["\u0628\u062f\u064a\u0644 \u0627\u0644\u0633\u064a\u0631\u0627\u0645\u064a\u0643","\u0645\u0638\u0647\u0631 \u0633\u064a\u0631\u0627\u0645\u064a\u0643/\u0645\u062a\u0631\u0648/\u062a\u064a\u0631\u0627\u0632\u0648 \u0641\u064a \u0623\u0644\u0648\u0627\u062d \u062e\u0641\u064a\u0641\u0629 \u0633\u0631\u064a\u0639\u0629 \u0627\u0644\u062a\u0631\u0643\u064a\u0628 \u0644\u0644\u062c\u062f\u0631\u0627\u0646 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629."], en:["Ceramic look","Metro / terrazzo / ceramic looks in light interior wall sheets \u2014 fast install."]},
    {key:"wpc", img:life[2]||heroImg, ar:["\u0634\u064a\u0628\u0648\u0631\u062f / WPC","\u0644\u063a\u0629 \u0634\u064a\u0628\u0648\u0631\u062f \u0648WPC \u0644\u0644\u062a\u062c\u0627\u0644\u064a\u062f \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629: \u0641\u0644\u0648\u062a \u062e\u0634\u0628\u064a\u060c \u0645\u062a\u0627\u0646\u0629 \u0623\u0639\u0644\u0649 \u0645\u0646 \u0627\u0644\u062e\u0634\u0628 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u060c \u0648\u0645\u0642\u0627\u0648\u0645\u0629 \u0631\u0637\u0648\u0628\u0629 \u064a\u0648\u0645\u064a\u0629."], en:["Chipboard / WPC","Chipboard & WPC language for interior cladding: fluted wood look, tougher than timber, daily moisture resistance."]}
  ];
  const steps=[
    {ar:["1 \u00b7 \u0645\u0635\u0646\u0639","\u0642\u0637\u0639\u0629 37\u060c \u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064a\u0629 \u0627\u0644\u062e\u0627\u0645\u0633\u0629\u060c 6 \u0623\u0643\u062a\u0648\u0628\u0631."], en:["1 \u00b7 Factory","Plot 37, 5th Industrial Zone, 6th of October."]},
    {ar:["2 \u00b7 \u062a\u0648\u0631\u064a\u062f","\u062d\u0632\u0645 \u0645\u0641\u0635\u0648\u0644\u0629 \u0628\u0627\u0644\u0643\u0648\u062f \u2014 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0648\u0627\u0644\u062f\u0644\u062a\u0627 \u0648\u0627\u0644\u0635\u0639\u064a\u062f \u0648\u0627\u0644\u0633\u0627\u062d\u0644."], en:["2 \u00b7 Supply","Code-marked bundles \u2014 Cairo, Delta, Upper Egypt, coast."]},
    {ar:["3 \u00b7 \u062a\u0631\u0643\u064a\u0628","\u062a\u0631\u0643\u064a\u0628 \u062c\u0627\u0641 \u0639\u0644\u0649 \u0633\u0637\u062d \u0645\u0633\u062a\u0648\u064d \u0623\u0648 \u0641\u0648\u0645 5 \u0645\u0645."], en:["3 \u00b7 Install","Dry install on flat walls or 5 mm foam."]},
    {ar:["4 \u00b7 \u0636\u0645\u0627\u0646 \u0648\u062f\u0639\u0645","\u0639\u064a\u0651\u0646\u0629 \u0642\u0628\u0644 \u0627\u0644\u0643\u0628\u064a\u0631 \u00b7 \u0648\u0627\u062a\u0633\u0627\u0628 "+P+" \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629."], en:["4 \u00b7 Warranty & support","Sample first \u00b7 WhatsApp "+P+" for follow-up."]}
  ];
  const trust=d.trust||(lang==="ar"?[
    ["~10,000 \u0645\u0622","\u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0645\u0635\u0646\u0639"],["144+","\u0643\u0648\u062f \u062a\u0634\u0637\u064a\u0628"],["74+","\u0644\u0648\u062d/\u0645\u0631\u0628\u0639"],["01116208881","\u0648\u0627\u062a\u0633\u0627\u0628 \u0645\u0628\u0627\u0634\u0631"]
  ]:[
    ["~10,000 m\u00b2","Factory floor"],["144+","Finish codes"],["74+","Sheets / squares"],["01116208881","WhatsApp direct"]
  ]);
  const famCards=[
    {tab:"colors", ar:["\u062e\u0634\u0628 \u0648\u0641\u0644\u0648\u062a","\u0634\u0631\u0627\u0626\u062d \u062a\u062c\u0627\u0644\u064a\u062f \u0628\u0645\u0638\u0647\u0631 \u062e\u0634\u0628\u064a"], en:["Wood & fluted","Wood-look cladding slats"], c:"#8b6a4a"},
    {tab:"colors", ar:["\u0631\u062e\u0627\u0645 \u0648\u0628\u062f\u064a\u0644 \u0631\u062e\u0627\u0645","\u0623\u0644\u0648\u0627\u062d \u0648\u0627\u0633\u062a\u0642\u0628\u0627\u0644 \u0648\u0645\u0637\u0627\u0628\u062e"], en:["Marble look","Sheets for reception & kitchens"], c:"#d9d2c8"},
    {tab:"colors", ar:["\u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u0644\u0648\u0643","\u0645\u062a\u0631\u0648 \u00b7 \u062a\u064a\u0631\u0627\u0632\u0648 \u00b7 \u062d\u062c\u0631"], en:["Ceramic look","Metro \u00b7 terrazzo \u00b7 stone"], c:"#c5c8cb"},
    {tab:"colors", ar:["\u0634\u064a\u0628\u0648\u0631\u062f / WPC","\u0641\u0644\u0648\u062a \u062f\u0627\u062e\u0644\u064a \u0645\u062a\u064a\u0646"], en:["Chipboard / WPC","Durable interior fluted"], c:"#c2a36b"},
    {tab:"sheets", ar:["\u0623\u0644\u0648\u0627\u062d 122\u00d7280","\u0645\u0631\u0628\u0639 \u0648\u0643\u0628\u064a\u0631 \u0644\u0644\u062c\u062f\u0631\u0627\u0646 \u0627\u0644\u0648\u0627\u0633\u0639\u0629"], en:["122\u00d7280 sheets","Squares & wide walls"], c:"#e8e0d4"},
    {tab:"sizes", ar:["\u0645\u0642\u0627\u0633\u0627\u062a \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a","13.4 / 16 / 18 / 20 \u00d7 280"], en:["Profile sizes","13.4 / 16 / 18 / 20 \u00d7 280"], c:"#a8885a"}
  ];
  const faqTeaser=(d.faq||[]).slice(0,4);
  const searchPh=lang==="ar"?"\u0627\u0628\u062d\u062b \u0628\u0643\u0648\u062f \u0623\u0648 \u0627\u0633\u0645 \u062a\u0634\u0637\u064a\u0628 / \u0644\u0648\u062d\u2026":"Search by code or finish / sheet name\u2026";
  const msg3d=lang==="ar"?"\u0645\u0631\u062d\u0628\u0627\u064b \u062a\u0648\u0628\u0627\u0628\u0627\u0648 \u0645\u0635\u0631 \u2014 \u0623\u0631\u064a\u062f \u0639\u0631\u0636 \u062a\u0635\u0645\u064a\u0645 3D \u062a\u0642\u062f\u064a\u0631\u064a \u0644\u0645\u0633\u0627\u062d\u062a\u064a":"Hi TuBaoBao Egypt \u2014 I want an approximate 3D design offer for my space";

  return `
  <div class="hero hero-rich">
    <div class="wrap hero-in">
      <div>
        <p class="k">${d.heroK}</p>
        <h1>${d.heroT}</h1>
        <p>${d.heroS}</p>
        <div class="hero-cta">
          <button class="btn gold" data-tab="products">${d.cta1}</button>
          <button class="btn ghost" data-tab="factory">${d.cta2}</button>
          <a class="btn wa" href="${W}" target="_blank" rel="noopener">${d.waShort||"WhatsApp"}</a>
        </div>
        <div class="stats">${trust.map(([a,b])=>`<div class="stat"><b>${a}</b><span>${b}</span></div>`).join("")}</div>
      </div>
      <div class="board board-photo">
        <img class="hero-photo" src="${heroImg}" alt="TuBaoBao Egypt" loading="eager"/>
        <div class="hero-thumbs">${life.slice(0,4).map(src=>`<img src="${src}" alt="" loading="lazy"/>`).join("")}</div>
      </div>
    </div>
  </div>

  <div class="wrap home-rich">
    <section class="home-sec search-sec">
      <h2>${lang==="ar"?"\u0627\u0628\u062d\u062b \u0641\u064a \u0627\u0644\u0645\u0643\u062a\u0628\u0629":"Search the library"}</h2>
      <p class="lead">${lang==="ar"?"\u0623\u0643\u0648\u0627\u062f \u0627\u0644\u062e\u0634\u0628 \u0648\u0627\u0644\u0631\u062e\u0627\u0645 \u0648\u0627\u0644\u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u0648\u0627\u0644\u0634\u064a\u0628\u0648\u0631\u062f/WPC \u0648\u0627\u0644\u0623\u0644\u0648\u0627\u062d \u2014 \u0627\u0643\u062a\u0628 \u0627\u0644\u0643\u0648\u062f \u0623\u0648 \u0627\u0644\u0627\u0633\u0645.":"Wood, marble, ceramic, chipboard/WPC and sheets \u2014 type a code or name."}</p>
      <div class="home-search">
        <input id="homeSearch" type="search" value="${(homeQ||"").replace(/"/g,""")}" placeholder="${searchPh}" autocomplete="off"/>
        <button type="button" class="btn navy" id="homeSearchBtn">${lang==="ar"?"\u0628\u062d\u062b":"Search"}</button>
      </div>
      <div class="grid4" id="homeSearchGrid">${results.map(p=>`
        <article class="card finish-mini" data-tab="${p.kind==="sheet"?"sheets":"colors"}">
          <span class="chip" style="background:${p.color||"#ccc"}"></span>
          <div class="meta"><b class="code">${p.code}</b><div>${lang==="ar"?p.ar:p.en}</div><small>${p.kind==="sheet"?(lang==="ar"?"\u0644\u0648\u062d":"Sheet"):p.fam}</small></div>
        </article>`).join("")}</div>
    </section>

    <section class="home-sec">
      <h2>${lang==="ar"?"\u0639\u0627\u0626\u0644\u0627\u062a \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a":"Product families"}</h2>
      <p class="lead">${lang==="ar"?"\u0627\u062e\u062a\u0631 \u0639\u0627\u0626\u0644\u0629 \u062b\u0645 \u0627\u0641\u062a\u062d \u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0644\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u0627\u0644\u0635\u0648\u0631.":"Pick a family, then open the tab for details and photos."}</p>
      <div class="grid3">${famCards.map(c=>`
        <article class="card fam-card" data-tab="${c.tab}">
          <span class="chip" style="background:${c.c}"></span>
          <div class="meta"><b>${lang==="ar"?c.ar[0]:c.en[0]}</b><p>${lang==="ar"?c.ar[1]:c.en[1]}</p></div>
        </article>`).join("")}</div>
    </section>

    <section class="home-sec edu-sec">
      <h2>${lang==="ar"?"\u062a\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u062e\u0627\u0645\u0627\u062a":"Product education"}</h2>
      <p class="lead">${lang==="ar"?"\u0628\u062f\u064a\u0644 \u0627\u0644\u0631\u062e\u0627\u0645 \u00b7 \u0628\u062f\u064a\u0644 \u0627\u0644\u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u00b7 \u0634\u064a\u0628\u0648\u0631\u062f/WPC \u2014 \u0628\u0644\u063a\u0629 \u0627\u0644\u0645\u0635\u0646\u0639 \u0627\u0644\u0645\u0635\u0631\u064a \u0641\u064a 6 \u0623\u0643\u062a\u0648\u0628\u0631.":"Marble look \u00b7 ceramic look \u00b7 chipboard/WPC \u2014 Egyptian factory language in 6th of October."}</p>
      <div class="edu-grid">${edu.map(e=>`
        <article class="edu-card">
          <img src="${e.img}" alt="" loading="lazy"/>
          <div><b>${lang==="ar"?e.ar[0]:e.en[0]}</b><p>${lang==="ar"?e.ar[1]:e.en[1]}</p>
          <button class="btn ghost" data-tab="colors">${lang==="ar"?"\u0627\u0641\u062a\u062d \u0627\u0644\u062a\u0634\u0637\u064a\u0628\u0627\u062a":"Open finishes"}</button></div>
        </article>`).join("")}</div>
    </section>

    <section class="home-sec">
      <h2>${lang==="ar"?"\u0633\u0627\u0628\u0642\u0629 \u0623\u0639\u0645\u0627\u0644 \u0648\u0645\u0639\u0631\u0636":"Portfolio & gallery"}</h2>
      <p class="lead">${lang==="ar"?"\u0635\u0648\u0631 \u0645\u0635\u0646\u0639/\u0639\u064a\u0646\u0627\u062a \u0648\u062a\u0631\u0643\u064a\u0628\u0627\u062a \u2014 \u0627\u0644\u0645\u0639\u0631\u0636 \u0627\u0644\u0643\u0627\u0645\u0644 \u0641\u064a \u062a\u0628\u0648\u064a\u0628 \u0627\u0644\u0645\u0639\u0631\u0636.":"Factory/sample and install-style photos \u2014 full gallery in the Gallery tab."}</p>
      <div class="photo-carousel">${works.slice(0,8).map(src=>`<figure class="photo-card"><img src="${src}" alt="" loading="lazy"/></figure>`).join("")}</div>
      <div class="center-actions"><button class="btn gold" data-tab="gallery">${lang==="ar"?"\u0627\u0641\u062a\u062d \u0627\u0644\u0645\u0639\u0631\u0636":"Open gallery"}</button>
      <button class="btn ghost" data-tab="projects">${lang==="ar"?"\u0646\u0645\u0627\u0630\u062c \u0645\u0634\u0627\u0631\u064a\u0639":"Project sketches"}</button></div>
    </section>

    <section class="home-sec process-sec">
      <h2>${lang==="ar"?"\u0645\u0646 \u0627\u0644\u0645\u0635\u0646\u0639 \u0625\u0644\u0649 \u0627\u0644\u0636\u0645\u0627\u0646":"Factory \u2192 supply \u2192 install \u2192 warranty"}</h2>
      <div class="process-grid">${steps.map(s=>`
        <article class="process-card"><b>${lang==="ar"?s.ar[0]:s.en[0]}</b><p>${lang==="ar"?s.ar[1]:s.en[1]}</p></article>`).join("")}</div>
      <div class="photo-carousel slim">${fac.map(src=>`<figure class="photo-card"><img src="${src}" alt="${lang==="ar"?"\u062a\u0635\u0646\u064a\u0639":"Manufacturing"}" loading="lazy"/><figcaption>${lang==="ar"?"\u062a\u0635\u0646\u064a\u0639 / \u0639\u064a\u0646\u0627\u062a":"Manufacturing / samples"}</figcaption></figure>`).join("")}</div>
    </section>

    <section class="home-sec cta-3d">
      <div class="cta-3d-in">
        <div>
          <h2>${lang==="ar"?"\u0639\u0631\u0636 \u062a\u0635\u0645\u064a\u0645 3D \u062a\u0642\u062f\u064a\u0631\u064a":"Approximate 3D design offer"}</h2>
          <p>${lang==="ar"?"\u0623\u0631\u0633\u0644 \u0645\u0633\u0627\u062d\u0629 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645 (\u0635\u0627\u0644\u0629\u060c \u0645\u0637\u0628\u062e\u060c \u0645\u062d\u0644\u2026) \u0648\u0627\u0644\u0643\u0648\u062f \u0627\u0644\u0645\u0641\u0636\u0651\u0644 \u2014 \u0646\u062c\u0647\u0651\u0632 \u062a\u0635\u0648\u0651\u0631\u0627\u064b \u062a\u0642\u062f\u064a\u0631\u064a\u0627\u064b \u0642\u0628\u0644 \u0627\u0644\u062a\u0639\u0645\u064a\u062f. \u0644\u064a\u0633 \u0628\u0631\u0646\u0627\u0645\u062c\u0627\u064b \u062a\u0641\u0627\u0639\u0644\u064a\u0627\u064b \u0643\u0627\u0645\u0644\u0627\u064b \u0641\u064a \u0627\u0644\u0645\u0631\u062d\u0644\u0629 \u0627\u0644\u0623\u0648\u0644\u0649.":"Send the space (living, kitchen, shop\u2026) and preferred code \u2014 we prepare an approximate visual before you commit. Not a full interactive 3D app in phase one."}</p>
        </div>
        <a class="btn gold" href="${waLink(msg3d)}" target="_blank" rel="noopener">${lang==="ar"?"\u0627\u0637\u0644\u0628 \u062a\u0635\u0645\u064a\u0645 3D \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628":"Request 3D via WhatsApp"}</a>
      </div>
    </section>

    <section class="home-sec">
      <h2>${d.faqT|| (lang==="ar"?"\u0623\u0633\u0626\u0644\u0629 \u0633\u0631\u064a\u0639\u0629":"Quick FAQ")}</h2>
      ${(faqTeaser.length?faqTeaser:(lang==="ar"?[["\u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0638\u0627\u0647\u0631\u0629\u061f","\u0644\u0627 \u2014 \u062d\u0633\u0628 \u0627\u0644\u0643\u0648\u062f \u0648\u0627\u0644\u0643\u0645\u064a\u0629 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628."],["\u0641\u064a\u0647 \u0628\u062f\u064a\u0644 \u0633\u064a\u0631\u0627\u0645\u064a\u0643\u061f","\u0646\u0639\u0645 \u2014 \u0639\u0627\u0626\u0644\u0629 CR \u0648\u0623\u0644\u0648\u0627\u062d SH \u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u0644\u0648\u0643."]]:[["Prices listed?","No \u2014 quoted by code and volume on WhatsApp."],["Ceramic look?","Yes \u2014 CR family and ceramic-look sheets."]])).map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("")}
      <div class="center-actions"><button class="btn ghost" data-tab="faq">${lang==="ar"?"\u0643\u0644 \u0627\u0644\u0623\u0633\u0626\u0644\u0629":"All FAQ"}</button></div>
    </section>

    <section class="home-sec contact-teaser">
      <h2>${d.ctT}</h2>
      <p class="lead">${d.ctS}</p>
      <p class="addr">${d.addr}</p>
      <p class="lead">${d.hours}</p>
      <div class="contact-actions">
        <a class="btn wa" href="${W}" target="_blank" rel="noopener">${d.waBtn||P}</a>
        <a class="btn navy" href="tel:+20${P.slice(1)}">${lang==="ar"?"\u0627\u062a\u0635\u0627\u0644":"Call"} ${P}</a>
        <button class="btn ghost" data-tab="contact">${lang==="ar"?"\u0635\u0641\u062d\u0629 \u0627\u0644\u062a\u0648\u0627\u0635\u0644":"Contact page"}</button>
      </div>
      <p class="note">${lang==="ar"?"\u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u0631\u0633\u0645\u064a \u0641\u0642\u0637: 01116208881 \u2014 \u0644\u0627 \u062a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0623\u0631\u0642\u0627\u0645 \u0642\u062f\u064a\u0645\u0629 \u0641\u064a \u0627\u0644\u0635\u0648\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u064a\u0629.":"Official phone only: 01116208881 \u2014 ignore older numbers in ad creatives."}</p>
    </section>
  </div>`;
}
window.richHome=richHome; window.filterPool=filterPool; window.homeSearchPool=homeSearchPool; window.waLink=waLink; window.finishLabel=finishLabel; window.finishColor=finishColor; window.finishFam=finishFam; window.cards=cards; window.page=page; window.$=$; window.t=t;
