function setTab(id){
  if(!TABS.some(x=>x[0]===id)) id="home";
  tab=id;
  location.hash=id;
  menuOpen=false;
  if(isPrimary(id)) moreOpen=false;
  else moreOpen=true;
  render();
  window.scrollTo(0,0);
}
function bind(){
  document.querySelectorAll("[data-tab]").forEach(el=>{
  el.onclick=e=>{e.preventDefault();setTab(el.dataset.tab);};
  });
  const moreBtn=$("moreBtn");
  if(moreBtn) moreBtn.onclick=e=>{
  e.preventDefault();
  moreOpen=!moreOpen;
  $("moreWrap").classList.toggle("open", moreOpen);
  moreBtn.classList.toggle("on", moreOpen);
  moreBtn.setAttribute("aria-expanded", moreOpen?"true":"false");
  };
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
$("burger").onclick=()=>{
  menuOpen=!menuOpen;
  $("mobileMenu").classList.toggle("open", menuOpen);
  $("mobileMenu").hidden=!menuOpen;
  $("burger").setAttribute("aria-expanded", menuOpen?"true":"false");
};
window.addEventListener("hashchange",()=>setTab((location.hash||"#home").slice(1)));
setTab((location.hash||"#home").slice(1));
