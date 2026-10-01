window.MEDIA_B64=window.MEDIA_B64||{};
window.CODE_MEDIA=window.CODE_MEDIA||{};
function b64url(key){return MEDIA_B64[key]?("data:image/jpeg;base64,"+MEDIA_B64[key]):"";}
function codePrimary(code){
  var m=CODE_MEDIA[code]; if(!m) return "";
  var stem=(m.primary||"").split("/").pop().replace(/\.jpg$/i,"");
  var k="prod_"+stem;
  return b64url(k)||m.primary||"";
}
window.MEDIA={
  hero: b64url("mkt_lifestyle-01") || b64url("fac_factory-00") || "",
  lifestyle: ["mkt_lifestyle-01","mkt_lifestyle-02"].map(b64url).filter(Boolean),
  features: [
    {img:b64url("mkt_feature-waterproof"), ar:["مقاوم للمياه","تركيب داخلي يومي"], en:["Waterproof-ready interior","Daily moisture use"]},
    {img:b64url("mkt_feature-mold"), ar:["يساعد ضد العفن","سطح يتنظف بسهولة"], en:["Mold-resistant help","Easy-clean surface"]},
    {img:b64url("mkt_feature-install"), ar:["تركيب سريع","فوق الحائط القائم"], en:["Fast install","Over existing walls"]},
    {img:b64url("mkt_feature-made-egypt"), ar:["صنع في مصر","6 أكتوبر"], en:["Made in Egypt","6th of October"]}
  ],
  factory: ["fac_factory-00","fac_factory-01","fac_factory-02"].map(b64url).filter(Boolean),
  products: Object.keys(CODE_MEDIA).sort().map(codePrimary).filter(Boolean),
  gallery: []
};
(function(){
  var g=[];
  Object.keys(CODE_MEDIA).sort().forEach(function(code){
    var src=codePrimary(code); if(src) g.push([src, code, code]);
  });
  MEDIA.lifestyle.forEach(function(src,i){ g.push([src, "لايف ستايل "+(i+1), "Lifestyle "+(i+1)]); });
  MEDIA.factory.forEach(function(src,i){ g.push([src, "المصنع "+(i+1), "Factory "+(i+1)]); });
  MEDIA.gallery=g;
})();
