const state = {
  lang: localStorage.getItem("tbb-lang") || null,
  page: location.hash.replace("#", "") || "home",
  family: "all",
  active: finishes[1],
  sheet: sheets[0],
  space: "tv",
  sizeId: "16",
  w: 4,
  h: 2.8,
  menu: false,
  light: null,
  form: { name: "", phone: "", city: "", role: "", msg: "" }
};

const validPages = ["home","products","colors","spaces","studio","trade","services","factory","contact"];
if (!validPages.includes(state.page)) state.page = "home";

function t() { return dict[state.lang || "ar"]; }
function waText() {
  const T = t();
  const size = sizes.find((s) => s.id === state.sizeId);
  return encodeURIComponent([
    "TuBaoBao / توباباو",
    state.form.name && `${T.name}: ${state.form.name}`,
    state.form.phone && `${T.phone}: ${state.form.phone}`,
    state.form.city && `${T.city}: ${state.form.city}`,
    state.form.role && `${T.role}: ${state.form.role}`,
    `${T.pickColor}: ${state.active.id}`,
    `${T.pickSize}: ${size.label}`,
    `${T.pickSpace}: ${T.space[state.space]}`,
    state.form.msg
  ].filter(Boolean).join("\n"));
}
function go(page) {
  state.page = page;
  state.menu = false;
  location.hash = page === "home" ? "" : page;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function setLang(l) {
  state.lang = l;
  localStorage.setItem("tbb-lang", l);
  render();
}

function gallery(T) {
  return `<section class="section" style="padding-top:12px">
    <p class="kicker">${T.gallery}</p>
    <div class="gallery" style="margin-top:18px">
      ${galleryImgs.slice(0, 5).map((src) => `<img src="${src}" alt="${T.gallery}" data-light="${src}">`).join("")}
    </div>
  </section>`;
}
