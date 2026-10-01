window.MEDIA_B64=window.MEDIA_B64||{};
function mediaUrl(key){
  if(MEDIA_B64[key]) return "data:image/jpeg;base64,"+MEDIA_B64[key];
  return "media/"+key+".jpg";
}
window.MEDIA={
  hero:mediaUrl("factory-01"),
  factory:["factory-01","factory-02","factory-03","factory-04"].map(mediaUrl),
  products:["product-01","product-02","product-03","product-04","product-05","product-06"].map(mediaUrl),
  gallery:[
    [mediaUrl("factory-01"),"مصنع","Factory"],
    [mediaUrl("factory-02"),"إنتاج","Production"],
    [mediaUrl("factory-03"),"خطوط","Lines"],
    [mediaUrl("factory-04"),"تخزين","Warehouse"],
    [mediaUrl("product-01"),"شرائح","Slats"],
    [mediaUrl("product-02"),"ألواح","Sheets"],
    [mediaUrl("product-03"),"تشطيب","Finish"],
    [mediaUrl("product-04"),"عيّنة","Sample"],
    [mediaUrl("product-05"),"منتج","Product"],
    [mediaUrl("product-06"),"كتالوج","Catalog"]
  ]
};
