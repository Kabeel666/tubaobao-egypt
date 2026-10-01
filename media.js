
window.MEDIA_B64=window.MEDIA_B64||{};
window.CODE_MEDIA=window.CODE_MEDIA||{};
function b64url(key){return MEDIA_B64[key]?("data:image/jpeg;base64,"+MEDIA_B64[key]):"";}
function fileUrl(path){
  if(!path) return "";
  var k="file:"+path;
  if(MEDIA_B64[k]) return "data:image/jpeg;base64,"+MEDIA_B64[k];
  var alt="path_"+path.replace(/\//g,"_").replace(/\.jpg$/i,"");
  if(MEDIA_B64[alt]) return "data:image/jpeg;base64,"+MEDIA_B64[alt];
  return path; // real file if present on deploy
}
function codePrimary(code){
  var m=CODE_MEDIA[code]; if(!m) return "";
  var stem=(m.primary||"").split("/").pop().replace(/\.jpg$/i,"");
  return b64url("prod_"+stem)||fileUrl(m.primary)||"";
}

window.MEDIA={
  hero: fileUrl("media/home/creative-01.jpg") || fileUrl("media/home/showroom-collage.jpg"),
  lifestyle: [
    "media/home/creative-01.jpg",
    "media/home/creative-02.jpg",
    "media/home/creative-03.jpg",
    "media/home/lifestyle-01.jpg",
    "media/home/lifestyle-02.jpg",
    "media/home/showroom-collage.jpg",
    "media/home/product-01.jpg",
    "media/home/product-02.jpg"
  ].map(fileUrl).filter(Boolean),
  features: [
    {img:fileUrl("media/marketing/feature-waterproof.jpg"), ar:["مقاوم للمياه","تركيب داخلي يومي"], en:["Waterproof-ready interior","Daily moisture use"]},
    {img:fileUrl("media/marketing/feature-mold.jpg"), ar:["يساعد ضد العفن","سطح يتنظف بسهولة"], en:["Mold-resistant help","Easy-clean surface"]},
    {img:fileUrl("media/marketing/feature-install.jpg"), ar:["تركيب سريع","فوق الحائط القائم"], en:["Fast install","Over existing walls"]},
    {img:fileUrl("media/marketing/feature-made-egypt.jpg"), ar:["صنع في مصر","6 أكتوبر"], en:["Made in Egypt","6th of October"]}
  ],
  factory: ["media/factory/manufacturing-panels.jpg","media/factory/sample-rack.jpg"].map(fileUrl).filter(Boolean),
  works: [
    "media/works/showroom-collage.jpg","media/works/catalog-rack.jpg",
    "media/home/product-01.jpg","media/home/product-02.jpg","media/home/product-03.jpg",
    "media/home/product-04.jpg","media/home/product-05.jpg","media/home/product-06.jpg",
    "media/home/creative-04.jpg","media/home/creative-05.jpg"
  ].map(fileUrl).filter(Boolean),
  partner: [
    {img:fileUrl("media/partner/china-campus-01.jpg"), ar:"حرم شريك دولي (الصين) — ليس مصنع 6 أكتوبر", en:"International partner campus (China) — not the 6th of October factory"},
    {img:fileUrl("media/partner/china-campus-02.jpg"), ar:"شراكة توريد دولية — للتوضيح فقط", en:"International supply partner — captioned carefully"},
    {img:fileUrl("media/partner/china-campus-03.jpg"), ar:"حرم شريك دولي — غير مصنف كمصنع أكتوبر", en:"International partner campus — not labeled as October factory"}
  ].filter(function(x){return !!x.img;}),
  products: Object.keys(CODE_MEDIA).sort().map(codePrimary).filter(Boolean),
  gallery: []
};
(function(){
  var g=[];
  Object.keys(CODE_MEDIA).sort().forEach(function(code){
    var src=codePrimary(code); if(src) g.push([src, code, code]);
  });
  (MEDIA.works||[]).forEach(function(src,i){ g.push([src, "أعمال "+(i+1), "Works "+(i+1)]); });
  (MEDIA.lifestyle||[]).forEach(function(src,i){ g.push([src, "لايف ستايل "+(i+1), "Lifestyle "+(i+1)]); });
  (MEDIA.factory||[]).forEach(function(src,i){ g.push([src, "تصنيع "+(i+1), "Manufacturing "+(i+1)]); });
  (MEDIA.partner||[]).forEach(function(row){ if(row&&row.img) g.push([row.img, row.ar, row.en]); });
  MEDIA.gallery=g;
})();
