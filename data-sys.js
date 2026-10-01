const ACC=[
["زاوية داخلية","Inner corner","لالتقاء جدارين من الداخل","Joins two walls inside"],
["زاوية خارجية","Outer corner","لحواف الأعمدة والبروزات","For columns and outer edges"],
["نهاية / غطاء حرف","End cap","يغطي طرف الشريحة المفتوح","Covers the open slat edge"],
["فوم بورد 5 مم","5 mm foam board","تبطين وتسوية قبل التركيب","Backing and leveling under slats"],
["لاصق PVC","PVC adhesive","تثبيت على سطح مستوٍ","Fixes to a flat surface"],
["قطاع بداية","Starter profile","بداية صف نظيفة","Clean first-row start"],
["قطاع ربط","Joiner profile","وصل مساحات أطول من 280","Joins runs longer than 280 cm"],
["غطاء علوي","Top cover","إنهاء عند السقف أو الكورنيش","Finish at ceiling or cornice"],
["قاعدة سفلية","Skirting trim","إنهاء عند الأرضية","Finish at floor level"],
["زاوية رخامية للوح","Sheet edge trim","حافة نظيفة للوح الكبير","Clean edge for large sheets"],
["مسامير / مثبتات خفيفة","Light fixings","حسب سطح الحائط","Matched to wall substrate"],
["شريط لاصق مساعد","Helper tape","تثبيت مؤقت أثناء الرص","Temporary hold while laying"]
];
const PACK=[
["حزم حسب القطاع","Bundles by profile","كل عرض في حزمة منفصلة","Each width in its own bundle"],
["فصل الأكواد","Codes kept separate","لا خلط بين التشطيبات","No mixing of finishes"],
["حماية أركان","Corner protection","زوايا الكرتون أو الفوم","Carton or foam corners"],
["بطاقة كود على الحزمة","Code label on pack","الكود مكتوب بوضوح","Code marked clearly"],
["تحميل من المصنع","Factory loading","من قطعة 37 مباشرة","Direct from Plot 37"],
["تصدير بعد الاتفاق","Export after terms","تعبئة أقوى حسب المسار","Stronger pack by route"],
["لف بلاستيك خارجي","Outer stretch wrap","حماية من الغبار أثناء النقل","Dust shield in transit"],
["فصل الألواح الكبيرة","Sheets stacked flat","الألواح نائمة ومفصولة","Sheets flat and separated"],
["قائمة تعبئة","Packing list","عدد الحزم والأكواد","Bundle count and codes"],
["تنبيه هشاشة على الكرتون","Fragile marks","حيث يلزم للألواح","Where sheets need it"]
];
const PROJ=[
["شقة التجمع — تلفزيون خشب","New Cairo flat — wood TV wall","كود M1-006 + زاوية داخلية · مساحة تقريبية 6 م² · تركيب يوم واحد بعد التسوية.","Code M1-006 + inner corner · ~6 m² · one-day install after leveling."],
["كافيه أكتوبر — واجهة دافئة","October café — warm front","خلط M1-003 و M1-011 على جدار الجلسة · شرائح 18 سم.","Mix M1-003 and M1-011 on seating wall · 18 cm slats."],
["عيادة مدينة نصر — رخام فاتح","Nasr City clinic — light marble","ألواح 506 على ظهر الاستقبال · مسح يومي بدون دهان.","Sheet 506 on reception back · daily wipe, no paint."],
["محل مول — ثيم موسمي","Mall shop — seasonal theme","قطاع 802 بعرض 20 سم · تغيير كود لاحق بدون هدم ثقيل.","Profile 802 at 20 cm · later code change without heavy demolition."],
["فندق الساحل — أكواد موحّدة","North Coast hotel — repeat codes","نفس كود M1-014 لكل طابق ضيوف لتقليل أخطاء التوريد.","Same M1-014 on guest floors to cut supply mistakes."],
["مكتب إداري — استقبال رمادي","Office — grey reception","M3-002 + فوم 5 مم · مظهر حجري بدون وزن.","M3-002 + 5 mm foam · stone look without weight."]
];
const TABS=[
["home","الرئيسية","Home"],["about","من نحن","About"],["products","المنتجات","Products"],["colors","الألوان","Finishes"],["sheets","الألواح","Sheets"],["sizes","المقاسات","Sizes"],["spaces","الاستخدامات","Spaces"],["projects","مشاريع","Projects"],["specs","المواصفات","Specs"],["calc","الحاسبة","Calculator"],["install","التركيب","Install"],["access","الإكسسوار","Trims"],["compare","مقارنة","Compare"],["care","العناية","Care"],["trade","التجار","Trade"],["export","التصدير","Export"],["gov","المحافظات","Cities"],["pack","التعبئة","Packing"],["factory","المصنع","Factory"],["soon","قادم","Coming"],["faq","الأسئلة","FAQ"],["contact","تواصل","Contact"]
];
