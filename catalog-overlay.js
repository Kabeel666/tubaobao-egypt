// catalog-overlay: hydrate F from catalog-data.js + sheet extras
(function(){
  var parts=(typeof __TBB_F_B64!=="undefined") ? __TBB_F_B64 : [];
  if(!parts.length) return;
  var all=JSON.parse(decodeURIComponent(escape(atob(parts.join("")))));
  if(typeof F==="undefined") return;
  F.length=0;
  for(var i=0;i<all.length;i++) F.push(all[i]);
})();
(function(){
  if(typeof SH==="undefined") return;
  if(!SH.some(function(x){return x[0]==='SH-430';})) SH.push(['SH-430','\u062e\u0634\u0628 \u0632\u064a\u062a\u0648\u0646\u064a \u0644\u0648\u062d','Olive wood sheet','#8a7a55']);
  if(!SH.some(function(x){return x[0]==='SH-431';})) SH.push(['SH-431','\u0628\u0644\u0627\u0637\u0629 \u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u0645\u0631\u0628\u0639\u0629','Ceramic square tile look','#f2f0ea']);
  if(!SH.some(function(x){return x[0]==='SH-432';})) SH.push(['SH-432','\u0628\u0644\u0627\u0637\u0629 \u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u0631\u062e\u0627\u0645','Ceramic marble square','#ebe8e2']);
  if(!SH.some(function(x){return x[0]==='SH-433';})) SH.push(['SH-433','\u0628\u0644\u0627\u0637\u0629 \u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u062e\u0634\u0628','Ceramic wood square','#c4a574']);
  if(!SH.some(function(x){return x[0]==='SH-434';})) SH.push(['SH-434','\u0628\u0644\u0627\u0637\u0629 \u0633\u064a\u0631\u0627\u0645\u064a\u0643 \u0645\u062a\u0631\u0648','Ceramic metro square','#f5f5f2']);
  if(!SH.some(function(x){return x[0]==='SH-435';})) SH.push(['SH-435','\u0628\u0644\u0627\u0637\u0629 \u0634\u064a\u0628\u0648\u0631\u062f \u0645\u0631\u0628\u0639\u0629','Chipboard square look','#d0c4b0']);
  if(!SH.some(function(x){return x[0]==='SH-436';})) SH.push(['SH-436','\u0644\u0648\u062d \u0634\u064a\u0628\u0648\u0631\u062f 122','Chipboard 122 sheet','#c9b18a']);
  if(!SH.some(function(x){return x[0]==='SH-437';})) SH.push(['SH-437','\u0644\u0648\u062d WPC 122','WPC 122 sheet','#b8955e']);
  if(!SH.some(function(x){return x[0]==='SH-438';})) SH.push(['SH-438','\u0628\u0644\u0627\u0637\u0629 WPC \u0641\u0644\u0648\u062a','WPC fluted square','#a8885a']);
  if(!SH.some(function(x){return x[0]==='SH-439';})) SH.push(['SH-439','\u0645\u0631\u0628\u0639 \u0631\u062e\u0627\u0645 \u0643\u0628\u064a\u0631','Large marble square','#efeae2']);
  if(!SH.some(function(x){return x[0]==='SH-440';})) SH.push(['SH-440','\u0645\u0631\u0628\u0639 \u062e\u0634\u0628 \u0645\u062a\u0639\u0631\u062c','Herringbone wood square','#b8955e']);
  if(!SH.some(function(x){return x[0]==='SH-441';})) SH.push(['SH-441','\u0645\u0631\u0628\u0639 \u062a\u064a\u0631\u0627\u0632\u0648 \u0633\u064a\u0631\u0627\u0645\u064a\u0643','Terrazzo ceramic square','#d8d0c4']);
  if(!SH.some(function(x){return x[0]==='SH-442';})) SH.push(['SH-442','\u0645\u0631\u0628\u0639 \u0643\u0648\u0646\u0643\u0631\u064a\u062a \u0633\u064a\u0631\u0627\u0645\u064a\u0643','Concrete ceramic square','#9a9a96']);
  if(!SH.some(function(x){return x[0]==='SH-443';})) SH.push(['SH-443','\u0644\u0648\u062d \u0628\u062f\u064a\u0644 \u0633\u064a\u0631\u0627\u0645\u064a\u0643 122','Ceramic-look 122 sheet','#e8e2d8']);
  if(!SH.some(function(x){return x[0]==='SH-444';})) SH.push(['SH-444','\u0644\u0648\u062d \u0628\u062f\u064a\u0644 \u0631\u062e\u0627\u0645 \u0644\u0627\u0645\u0639','Gloss marble-look sheet','#f0ebe3']);
  if(!SH.some(function(x){return x[0]==='SH-445';})) SH.push(['SH-445','\u0634\u064a\u0628\u0648\u0631\u062f \u0633\u0627\u062f\u0629 \u0643\u0631\u064a\u0645\u064a','Cream chipboard sheet','#efe6d5']);
})();
