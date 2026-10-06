window.MEDIA_B64=window.MEDIA_B64||{};
window.CODE_MEDIA=window.CODE_MEDIA||{};
function b64url(key){return MEDIA_B64[key]?("data:image/jpeg;base64,"+MEDIA_B64[key]):"";}
function fileUrl(path){
  if(!path) return "";
  var k="file:"+path;
  if(MEDIA_B64[k]) return "data:image/jpeg;base64,"+MEDIA_B64[k];
  var alt="path_"+path.replace(/\//g,"_").replace(/\.jpg$/i,"");
  if(MEDIA_B64[alt]) return "data:image/jpeg;base64,"+MEDIA_B64[alt];
  return path;
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
    "media/works/product-01.jpg","media/works/product-02.jpg","media/works/product-03.jpg",
    "media/works/product-04.jpg","media/works/product-05.jpg","media/works/product-06.jpg",
    "media/works/gallery-32c6577aed.jpg","media/works/gallery-8ab1133712.jpg"
  ].map(fileUrl).filter(Boolean),
  uses: [
    {id:"preview3d", img:fileUrl("media/uses/preview-3d-wall.jpg"), ar:"معاينة 3D للحائط — فكرة تطبيق", en:"3D wall preview — application idea"},
    {id:"chooser", img:fileUrl("media/uses/chooser-samples.jpg"), ar:"دليل الاختيار — فكرة تطبيق", en:"Chooser samples — application idea"},
    {id:"restaurant", img:fileUrl("media/uses/restaurant-slats.jpg"), ar:"مطعم — فكرة تطبيق", en:"Restaurant — application idea"},
    {id:"salon", img:fileUrl("media/uses/salon-beige.jpg"), ar:"صالون — فكرة تطبيق", en:"Salon — application idea"},
    {id:"gym", img:fileUrl("media/uses/gym-dark.jpg"), ar:"جيم — فكرة تطبيق", en:"Gym — application idea"},
    {id:"leatherbed", img:fileUrl("media/uses/leather-bedroom.jpg"), ar:"غرفة نوم جلد — فكرة تطبيق", en:"Leather bedroom — application idea"},
    {id:"reception", img:fileUrl("media/uses/reception-leather.jpg"), ar:"استقبال — فكرة تطبيق", en:"Reception — application idea"},
    {id:"boutique", img:fileUrl("media/uses/boutique.jpg"), ar:"بوتيك — فكرة تطبيق", en:"Boutique — application idea"},
    {id:"mall", img:fileUrl("media/uses/mall.jpg"), ar:"مول — فكرة تطبيق", en:"Mall — application idea"},
    {id:"office", img:fileUrl("media/uses/office.jpg"), ar:"مكتب — فكرة تطبيق", en:"Office — application idea"},
    {id:"cafe", img:fileUrl("media/uses/cafe.jpg"), ar:"كافيه — فكرة تطبيق", en:"Café — application idea"},
    {id:"studio", img:fileUrl("media/uses/studio-3d.jpg"), ar:"استوديو معاينة 3D — فكرة تطبيق", en:"3D preview studio — application idea"},
    {id:"hotel", img:fileUrl("media/uses/hotel.jpg"), ar:"فندق — فكرة تطبيق", en:"Hotel — application idea"},
    {id:"pharmacy", img:fileUrl("media/uses/pharmacy-marble.jpg"), ar:"صيدلية — فكرة تطبيق", en:"Pharmacy — application idea"},
    {id:"clinic", img:fileUrl("media/uses/clinic-wood.jpg"), ar:"ممر عيادة — فكرة تطبيق", en:"Clinic corridor — application idea"},
    {id:"living", img:fileUrl("media/uses/living-walnut.jpg"), ar:"صالة — فكرة تطبيق", en:"Living room — application idea"},
    {id:"kitchen", img:fileUrl("media/uses/kitchen-grey-marble.jpg"), ar:"مطبخ — فكرة تطبيق", en:"Kitchen — application idea"},
    {id:"kids", img:fileUrl("media/uses/kids-oak.jpg"), ar:"غرفة أطفال — فكرة تطبيق", en:"Kids room — application idea"},
    {id:"prayer", img:fileUrl("media/uses/prayer-cream.jpg"), ar:"مصلى — فكرة تطبيق", en:"Prayer room — application idea"},
    {id:"lobby", img:fileUrl("media/uses/lobby-bookmatch.jpg"), ar:"لوبي فندق — فكرة تطبيق", en:"Hotel lobby — application idea"},
    {id:"meeting", img:fileUrl("media/uses/meeting-walnut.jpg"), ar:"غرفة اجتماعات — فكرة تطبيق", en:"Meeting room — application idea"}
  ],
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
    var src=codePrimary(code); if(src) g.push([src, code, code, code]);
  });
  (MEDIA.uses||[]).forEach(function(u){
    if(u&&u.img) g.push([u.img, u.ar, u.en, u.zh || (u.en || "").replace(" — application idea", " · 上墙构想")]);
  });
  (MEDIA.works||[]).forEach(function(src,i){
    if(/gallery-|showroom-collage/i.test(src||"")) {
      g.push([src, "فكرة تطبيق "+(i+1), "Application idea "+(i+1), "上墙构想 "+(i+1)]);
    } else if(/(catalog-rack|product-0|manufacturing|sample-rack|factory)/i.test(src||"")) {
      g.push([src, "ورشة / عينات "+(i+1), "Workshop / samples "+(i+1), "车间 / 样品 "+(i+1)]);
    } else {
      g.push([src, "صورة "+(i+1), "Photo "+(i+1), "照片 "+(i+1)]);
    }
  });
  (MEDIA.lifestyle||[]).forEach(function(src,i){ g.push([src, "لايف ستايل "+(i+1), "Lifestyle "+(i+1), "生活方式 "+(i+1)]); });
  (MEDIA.factory||[]).forEach(function(src,i){ g.push([src, "تصنيع "+(i+1), "Manufacturing "+(i+1), "制造 "+(i+1)]); });
  (MEDIA.partner||[]).forEach(function(row){ if(row&&row.img) g.push([row.img, row.ar, row.en, row.zh || row.en]); });
  MEDIA.gallery=g;
})();
