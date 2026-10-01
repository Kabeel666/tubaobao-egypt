/* boot-rich placeholder - full file follows in next commit */
function richHome(d){return '<div class="wrap home-rich"><h2>'+(lang==="ar"?"الرئيسية الغنية":"Rich home")+'</h2><p class="lead">'+d.heroS+'</p><p class="note">Loading full rich home…</p></div>';}
function finishLabel(x){return lang==="ar"?x[2]:x[3]}
function finishColor(x){return x[4]}
function finishFam(x){return x[1]}
let lang="ar", tab="home", fam="all", homeQ="";
const $=id=>document.getElementById(id);
const t=()=>lang==="ar"?AR:EN;
function cards(rows){return `<div class="grid3">`+rows.map(([h,p])=>`<article class="card"><div class="meta"><b>${h}</b><p>${p}</p></div></article>`).join("")+`</div>`}
function page(id, inner){return `<section class="page${tab===id?" on":""}" id="p-${id}">${inner}</section>`}
function waLink(msg){const base=(window.WA||"https://wa.me/201116208881");return msg?(base+"?text="+encodeURIComponent(msg)):base;}
