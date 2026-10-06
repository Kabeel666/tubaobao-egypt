function spZh(x){
  var ZHMAP={
    SP01:["电视墙","住宅"],SP02:["别墅入口","住宅"],SP03:["主卧","住宅"],SP04:["家庭办公","住宅"],SP05:["开放式厨房","住宅"],
    SP06:["室内卫生间","住宅"],SP07:["公寓走廊","住宅"],SP08:["封闭阳台","住宅"],SP09:["儿童房","住宅"],SP10:["客厅","住宅"],
    SP11:["酒店大堂","商业"],SP12:["酒店客房","商业"],SP13:["餐厅","商业"],SP14:["咖啡店","商业"],SP15:["诊所","商业"],
    SP16:["办公套间","商业"],SP17:["展厅","商业"],SP18:["零售店","商业"],SP19:["健身房","商业"],SP20:["礼拜空间","商业"],
    SP21:["学校 / 托儿所","商业"],SP22:["牙科诊所","商业"],SP23:["美容沙龙","商业"],SP24:["摄影工作室","商业"],SP25:["会议室","商业"],
    SP26:["公司前台","商业"],SP27:["酒店式公寓","商业"],SP28:["海滨别墅","住宅"],SP29:["复式住宅","住宅"],SP30:["顶层公寓","住宅"],
    SP31:["行政单元","商业"],SP32:["医疗中心","商业"],SP33:["阅读角","住宅"],SP34:["洗衣房","住宅"],SP35:["室内楼梯墙","住宅"],
    SP36:["装饰天花带","商业"],SP37:["包柱","商业"],SP38:["舞台背景","商业"],SP39:["等候区","商业"],SP40:["小型商用厨房","商业"]
  };
  if(lang==="ar") return [x[1], x[3]];
  if(lang==="zh") return ZHMAP[x[0]] || [x[2], x[4]==="Residential"?"住宅":"商业"];
  return [x[2], x[4]];
}
function render(){
  const d=t();
  document.documentElement.lang=lang;
  document.documentElement.dir=d.dir;
  document.body.className=lang==="ar"?"":(lang==="zh"?"zh en":"en");
  $("brandName").innerHTML=d.brand+"<small>"+d.sub+"</small>";
  if(typeof window.__tbbSyncLang==="function") window.__tbbSyncLang();
  $("tabs").innerHTML=TABS.map((row)=>`<button type="button" data-tab="${row[0]}" class="${tab===row[0]?"on":""}">${typeof tabLabel==="function"?tabLabel(row):(lang==="ar"?row[1]:row[2])}</button>`).join("");
  const shown=F.filter(x=>fam==="all"||x[1]===fam);
  const famBtns=[["all",d.all|| (lang==="ar"?"الكل":"All")],["wood",d.wood|| (lang==="ar"?"خشب":"Wood")],["marble",d.marble|| (lang==="ar"?"رخام":"Marble")],["ceramic",d.ceramic|| (lang==="ar"?"سيراميك":"Ceramic")],["chipboard",d.chipboard|| (lang==="ar"?"شيبورد/WPC":"Chipboard/WPC")],["textile",d.textile|| (lang==="ar"?"كتان":"Linen")],["solid",d.solid|| (lang==="ar"?"ساده":"Solid")],["leather",d.leather|| (lang==="ar"?"جلد":"Leather")]];
  $("app").innerHTML=
    page("home", richHome(d)) +
    page("about", `<div class="wrap"><div class="about-card"><h2>${d.aboutT}</h2><p>${d.aboutP}</p></div></div>`) +
    page("products", `<div class="wrap"><h2>${d.prodT}</h2><p class="lead">${d.prodS}</p><div class="grid3">${d.lines.map(([h,p,c])=>`<article class="card"><span class="chip" style="background:${c}"></span><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("")}</div></div>`) +
    page("colors", (()=>{
      const photoN=shown.filter(x=>window.CODE_MEDIA&&CODE_MEDIA[x[0]]&&CODE_MEDIA[x[0]].primary).length;
      const hint=lang==="ar"
        ? (shown.length?`${shown.length} تشطيب · ${photoN} بصورة كتالوج`:"مفيش تشطيبات في الفلتر ده")
        : (lang==="zh"
          ? (shown.length?`${shown.length} 个花色 · ${photoN} 张图册照片`:"这个筛选下没有花色")
          : (shown.length?`${shown.length} finishes · ${photoN} with catalog photos`:"No finishes in this filter"));
      const empty=shown.length===0
        ? `<div class="empty-state"><b>${lang==="ar"?"جرّب فلتر تاني":(lang==="zh"?"换一个筛选试试":"Try another filter")}</b><p>${lang==="ar"?"اختار عائلة تانية أو ارجع للكل.":(lang==="zh"?"换一个系列，或回到「全部」。":"Pick another family, or go back to All.")}</p><button type="button" class="btn navy" data-fam-reset="1">${d.all||(lang==="ar"?"الكل":(lang==="zh"?"全部":"All"))}</button></div>`
        : `<div class="grid4">${shown.map(x=>`<article class="card"><span class="chip" style="background:${finishColor(x)}"></span><div class="meta"><b class="code">${x[0]}</b><div>${finishLabel(x)}</div><small>${finishFam(x)}</small></div></article>`).join("")}</div>`;
      return `<div class="wrap colors-page"><h2>${d.colT}</h2><p class="lead">${d.colS}</p><div class="filters filters-sticky" id="filters">${famBtns.map(([k,l])=>`<button type="button" class="${fam===k?"on":""}" data-fam="${k}">${l}</button>`).join("")}</div><p class="col-hint" id="colHint">${hint}</p>${empty}<p class="note">${d.colNote}</p></div>`;
    })()) +
    page("sheets", `<div class="wrap"><h2>${d.shT}</h2><p class="lead">${d.shS}</p><div class="grid4">${SH.map(x=>`<article class="card"><span class="chip" style="background:${x[3]}"></span><div class="meta"><b class="code">${x[0]}</b><div>${lang==="ar"?x[1]:x[2]}</div><small>122 × 280 · 5 mm</small></div></article>`).join("")}</div></div>`) +
    page("sizes", `<div class="wrap"><h2>${d.szT}</h2><p class="lead">${d.szS}</p><div class="scroll"><table><tr>${d.profH.map(h=>`<th>${h}</th>`).join("")}</tr>${PR.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td><td>${p[2]}</td><td>${p[3]}</td><td>${typeof prNote==="function"?prNote(p):(lang==="ar"?p[4]:p[5])}</td></tr>`).join("")}</table></div></div>`) +
    page("chooser", (typeof chooserInner==="function"?chooserInner(d):"")) +
    page("looks", (typeof looksInner==="function"?looksInner(d):"")) +
    page("videos", (typeof videosInner==="function"?videosInner(d):"")) +
    page("viz", (typeof vizInner==="function"?vizInner(d):"")) +
    page("spaces", `<div class="wrap"><h2>${d.spT}</h2><p class="lead">${d.spS}</p><p class="note">${lang==="ar"?"الأقسام دي أفكار استخدام. الصور المولَّدة مش سابقة أعمال ومش أسماء عملاء. الأسعار للطلب فقط.":(lang==="zh"?"这些分区是用途构思。生成图片不是既往工程，也不是客户名称。价格仅询价。":"These sections are use ideas. Generated photos are not past projects and not client names. Prices are quote-only.")}</p>${typeof usePlacesHtml==="function"?usePlacesHtml():""}<div class="grid4">${SP.map(x=>{const sp=spZh(x);return `<article class="card"><div class="meta"><b>${sp[0]}</b><p>${sp[1]}</p><small>${lang==="ar"?"فكرة استخدام":(lang==="zh"?"用途构思":"Use idea")}</small></div></article>`;}).join("")}</div></div>`) +
    page("specs", `<div class="wrap"><h2>${d.spxT}</h2><p class="lead">${d.spxS}</p><div class="scroll"><table><tr>${d.specH.map(h=>`<th>${h}</th>`).join("")}</tr>${d.spec.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div></div>`) +
    page("calc", `<div class="wrap"><h2>${d.calcT}</h2><p class="lead">${d.calcS}</p><div class="calc"><div><label>${d.lbW}</label><input id="wallW" type="number" step="0.1" value="4"/><label>${d.lbH}</label><input id="wallH" type="number" step="0.1" value="2.8"/><label>${d.lbSz}</label><select id="slatW"><option value="0.134">13.4</option><option value="0.16">16</option><option value="0.18" selected>18</option><option value="0.20">20</option></select><p class="note">${d.calcNote}</p></div><div class="result"><div id="resA"></div><div id="resP"></div><div id="resS"></div></div></div></div>`) +
    page("install", `<div class="wrap"><h2>${d.insT}</h2><p class="lead">${d.insS}</p><div class="steps">${d.steps.map((s,i)=>`<div class="step"><div class="num">${i+1}</div><div><b>${s[0]}</b><div>${s[1]}</div></div></div>`).join("")}</div></div>`) +
    page("access", `<div class="wrap"><h2>${d.accT}</h2><p class="lead">${d.accS}</p>${cards(ACC.map(x=>typeof rowPair==="function"?rowPair("ACC",x):[lang==="ar"?x[1]:x[2], lang==="ar"?(x[3]||""):(x[4]||"")]))}</div>`) +
    page("compare", `<div class="wrap"><h2>${d.cmpT}</h2><p class="lead">${d.cmpS}</p><div class="scroll"><table><tr>${d.cmpH.map(h=>`<th>${h}</th>`).join("")}</tr>${d.cmp.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div></div>`) +
    page("care", `<div class="wrap"><h2>${d.careT}</h2><p class="lead">${d.careS}</p>${cards(d.care)}</div>`) +
    page("trade", `<div class="wrap"><h2>${d.trT}</h2><p class="lead">${d.trS}</p>${cards(d.trade)}</div>`) +
    page("export", `<div class="wrap"><h2>${d.exT}</h2><p class="lead">${d.exS}</p>${cards(d.ex)}</div>`) +
    page("gov", `<div class="wrap"><h2>${d.govT}</h2><p class="lead">${d.govS}</p><div class="grid4">${GOV.map(g=>{const gp=typeof govPair==="function"?govPair(g):[lang==="ar"?g[1]:g[2],lang==="ar"?g[3]:g[4]];return `<article class="card"><div class="meta"><b>${gp[0]}</b><small>${gp[1]}</small></div></article>`;}).join("")}</div></div>`) +
    page("pack", `<div class="wrap"><h2>${d.pkT}</h2><p class="lead">${d.pkS}</p>${cards(PACK.map(x=>typeof rowPair==="function"?rowPair("PACK",x):[lang==="ar"?x[1]:x[2], lang==="ar"?(x[3]||""):(x[4]||"")]))}</div>`) +
    page("factory", `<div class="wrap"><h2>${d.facT}</h2><p class="lead">${d.facP}</p>${cards(d.fac)}</div>`) +
    page("soon", `<div class="wrap"><h2>${d.soonT}</h2><p class="lead">${d.soonS}</p>${cards(d.soon)}</div>`) +
    page("faq", `<div class="wrap"><h2>${d.faqT}</h2>${d.faq.map(([q,a])=>`<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`) +
    page("contact", typeof contactPageHtml==="function"?contactPageHtml(d):`<div class="wrap"><h2>${d.ctT}</h2><p class="lead">${d.ctS}</p><p class="addr">${d.addr}</p><p class="lead">${d.hours}</p></div>`) +
    page("projects", `<div class="wrap"><h2>${d.projT|| (lang==="ar"?"مشاريع":"Projects")}</h2><p class="lead">${d.projS||""}</p><div class="grid3">${(typeof PROJ!=="undefined"?PROJ:[]).map(x=>`<article class="card"><div class="meta"><b>${lang==="ar"?x[1]:x[2]}</b><p>${lang==="ar"?x[3]:x[4]}</p><small>${lang==="ar"?"مخطط نصي — ليس مشروع منشور":(lang==="zh"?"文字草图 — 非已发布项目":"Text sketch — not a published project")}</small></div></article>`).join("")}</div></div>`);
  if(typeof footHtml==="function"&&$("footInner")) $("footInner").innerHTML=footHtml(d); else if($("foot")) $("foot").textContent=d.foot;
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
  document.querySelectorAll("[data-fam-reset]").forEach(el=>{el.onclick=e=>{e.preventDefault(); fam="all"; render();};});
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
/* language switch wired in i18n.js */
window.addEventListener("hashchange",()=>setTab((location.hash||"#home").slice(1)));
setTab((location.hash||"#home").slice(1));
