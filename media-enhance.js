(function () {
  function $(id) { return document.getElementById(id); }
  function t() {
    if (typeof lang !== "undefined" && lang === "zh" && typeof ZH !== "undefined") return ZH;
    if (typeof lang !== "undefined" && lang === "en") return EN;
    return (typeof lang !== "undefined" && lang === "ar") ? AR : EN;
  }
  function L(ar, en, zh) {
    if (typeof lang !== "undefined" && lang === "ar") return ar;
    if (typeof lang !== "undefined" && lang === "zh") return zh || en;
    return en;
  }
  function img(src, alt) {
    if (!src) return "";
    return '<img src="' + src + '" alt="' + (alt || "") + '" width="640" height="480" loading="lazy" decoding="async"/>';
  }
  function injectHeroPhoto() {
    var board = document.querySelector("#p-home .board");
    if (!board || !window.MEDIA || !MEDIA.hero) return;
    if (board.querySelector("img.hero-photo")) return;
    board.insertAdjacentHTML("afterbegin", '<img class="hero-photo" src="' + MEDIA.hero + '" alt="TuBaoBao Egypt" width="1280" height="800" loading="eager" decoding="async"/>');
  }
  function injectFeatures() {
    var home = $("p-home");
    if (!home || !window.MEDIA || !MEDIA.features || !MEDIA.features.length) return;
    if (home.querySelector(".feature-strip")) return;
    var wrap = home.querySelector(".wrap.hero-in") || home.querySelector(".wrap") || home;
    var html = '<div class="feature-strip">';
    MEDIA.features.forEach(function (f) {
      if (!f.img) return;
      var title = lang === "ar" ? f.ar[0] : f.en[0];
      var sub = lang === "ar" ? f.ar[1] : f.en[1];
      html += '<article class="feature-card">' + img(f.img, title) + '<div><b>' + title + '</b><p>' + sub + '</p></div></article>';
    });
    html += "</div>";
    wrap.insertAdjacentHTML("beforeend", html);
  }
  function labelApproxSwatches() {
    document.querySelectorAll("#p-colors .card, #p-sheets .card").forEach(function (card) {
      if (card.querySelector("img.finish-photo")) return;
      if (card.querySelector(".approx-swatch")) return;
      var note = document.createElement("span");
      note.className = "approx-swatch";
      note.textContent = L("عينة تقريبية", "Approx. swatch", "近似色块");
      card.appendChild(note);
    });
  }
  function injectFinishPhotos() {
    if (!window.CODE_MEDIA) return;
    document.querySelectorAll("#p-colors .card, #p-sheets .card").forEach(function (card) {
      var codeEl = card.querySelector(".code");
      if (!codeEl) return;
      var code = codeEl.textContent.trim();
      var m = CODE_MEDIA[code];
      if (!m || !m.primary) return;
      if (card.querySelector("img.finish-photo")) return;
      var stem = (m.primary || "").split("/").pop().replace(/\.jpg$/i, "");
      var src = (window.MEDIA_B64 && MEDIA_B64["prod_" + stem]) ? ("data:image/jpeg;base64," + MEDIA_B64["prod_" + stem]) : m.primary;
      var chip = card.querySelector(".chip");
      var im = document.createElement("img");
      im.className = "finish-photo";
      im.src = src;
      im.alt = code;
      im.setAttribute("width", "640");
      im.setAttribute("height", "480");
      im.loading = "lazy";
      im.decoding = "async";
      if (chip) card.insertBefore(im, chip);
      else card.insertBefore(im, card.firstChild);
      if (m.variants && m.variants.length) {
        var widths = m.variants.map(function (v) { return v.width + " cm"; }).join(" · ");
        var small = card.querySelector("small");
        if (small) small.textContent = (small.textContent ? small.textContent + " · " : "") + widths + " × 280";
      }
    });
  }
  function injectFactoryPhotos() {
    var page = $("p-factory");
    if (!page || !window.MEDIA) return;
    if (page.querySelector(".photo-grid")) return;
    var wrap = page.querySelector(".wrap") || page;
    var grid = document.createElement("div");
    grid.className = "photo-grid";
    (MEDIA.factory || []).forEach(function (src, i) {
      if (src) grid.innerHTML += '<figure class="photo-card">' + img(src, "Factory " + (i + 1)) + "</figure>";
    });
    wrap.appendChild(grid);
    var d = t();
    if (d && d.legalNote && !page.querySelector(".legal-note")) {
      var note = document.createElement("p");
      note.className = "note legal-note";
      note.textContent = d.legalNote;
      wrap.appendChild(note);
    }
  }
  function injectProductPhotos() {
    var page = $("p-products");
    if (!page || !window.MEDIA) return;
    if (page.querySelector(".photo-grid")) return;
    var wrap = page.querySelector(".wrap") || page;
    var grid = document.createElement("div");
    grid.className = "photo-grid";
    (MEDIA.products || []).slice(0, 12).forEach(function (src, i) {
      if (src) grid.innerHTML += '<figure class="photo-card">' + img(src, "Product " + (i + 1)) + "</figure>";
    });
    wrap.appendChild(grid);
  }
  function injectGalleryPage() {
    if (!window.MEDIA || !MEDIA.gallery) return;
    var app = $("app");
    if (!app) return;
    var batch = 12;
    var shown = window.__galleryShown || batch;
    if (shown > MEDIA.gallery.length) shown = MEDIA.gallery.length;
    var existing = $("p-gallery");
    if (existing && existing.getAttribute("data-shown") === String(shown) && existing.getAttribute("data-lang") === String(lang)) return;
    if (existing) existing.remove();
    var d = t();
    var sec = document.createElement("section");
    sec.id = "p-gallery";
    sec.className = "page" + (typeof tab !== "undefined" && tab === "gallery" ? " on" : "");
    sec.setAttribute("data-shown", String(shown));
    sec.setAttribute("data-lang", String(lang));
    var title = (d && d.galleryT) || L("المعرض", "Gallery", "图库");
    var lead = (d && d.galleryS) || "";
    var rows = MEDIA.gallery.slice(0, shown);
    var more = MEDIA.gallery.length > shown;
    var moreLabel = L("صور أكتر", "More photos", "更多照片") + " (" + shown + " / " + MEDIA.gallery.length + ")";
    sec.innerHTML = '<div class="wrap"><h2>' + title + '</h2><p class="lead">' + lead + '</p><div class="photo-grid">' +
      rows.map(function (row) {
        return '<figure class="photo-card">' + img(row[0], lang === "ar" ? row[1] : row[2]) +
          "<figcaption>" + (lang === "ar" ? row[1] : row[2]) + "</figcaption></figure>";
      }).join("") + "</div>" +
      (more ? '<div class="center-actions"><button type="button" class="btn navy" id="galleryMore">' + moreLabel + "</button></div>" : "") +
      "</div>";
    app.appendChild(sec);
    var btn = $("galleryMore");
    if (btn) btn.onclick = function () {
      window.__galleryShown = shown + batch;
      injectGalleryPage();
    };
  }
  function stampImgs() {
    document.querySelectorAll("#app img").forEach(function (im) {
      if (!im.getAttribute("decoding")) im.decoding = "async";
      if (im.classList.contains("hero-photo")) {
        if (!im.getAttribute("width")) im.setAttribute("width", "1280");
        if (!im.getAttribute("height")) im.setAttribute("height", "800");
        im.loading = "eager";
        return;
      }
      var thumbs = im.parentElement && im.parentElement.classList.contains("hero-thumbs");
      if (!im.getAttribute("width")) im.setAttribute("width", thumbs ? "320" : "640");
      if (!im.getAttribute("height")) im.setAttribute("height", thumbs ? "320" : "480");
      if (!im.getAttribute("loading")) im.loading = "lazy";
    });
  }
  function deferCarousels() {
    document.querySelectorAll(".photo-carousel").forEach(function (car) {
      var imgs = car.querySelectorAll("img");
      if (imgs.length <= 4) return;
      for (var i = 4; i < imgs.length; i++) {
        var im = imgs[i];
        if (im.getAttribute("src") && !im.getAttribute("data-src")) {
          im.setAttribute("data-src", im.getAttribute("src"));
          im.removeAttribute("src");
        }
      }
      if (car.querySelector(".more-photos")) return;
      if (!car.querySelector("img[data-src]")) return;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "btn navy more-photos";
      b.textContent = L("صور أكتر", "Show more photos", "显示更多照片");
      b.onclick = function () {
        car.querySelectorAll("img[data-src]").forEach(function (im) {
          im.setAttribute("src", im.getAttribute("data-src"));
          im.removeAttribute("data-src");
        });
        b.remove();
      };
      car.appendChild(b);
    });
  }
  function injectAboutLegal() {
    var about = document.querySelector("#p-about .about-card");
    if (!about) return;
    var d = t();
    if (d && d.legalNote && !about.querySelector(".legal-note")) {
      var note = document.createElement("p");
      note.className = "note legal-note";
      note.textContent = d.legalNote;
      about.appendChild(note);
    }
  }
  function ensureGalleryTab() {
    if (typeof TABS === "undefined") return;
    if (!TABS.some(function (x) { return x[0] === "gallery"; })) {
      TABS.splice(8, 0, ["gallery", "المعرض", "Gallery"]);
    }
  }
  function scrubWrongPhone() {
    var bad=/0100\s*500\s*7592|01005007592/g;
    document.querySelectorAll("body *").forEach(function (el) {
      if (!el.childNodes) return;
      el.childNodes.forEach(function (n) {
        if (n.nodeType === 3 && /01005007592/.test(n.nodeValue || "")) {
          n.nodeValue = n.nodeValue.replace(bad, "");
        }
      });
      if (el.tagName === "A" && el.href && /01005007592|201005007592/.test(el.href)) {
        el.href = "#";
      }
    });
  }

  function injectUsePhotos() {
    var mount = document.getElementById("usesPhotoMount");
    if (!mount || mount.childNodes.length) return;
    if (!window.MEDIA || !MEDIA.uses) return;
    var note = L("فكرة تطبيق — ليست سابقة أعمال", "Application idea — not a past project", "上墙构想，不是已完工项目");
    mount.className = "photo-carousel";
    mount.innerHTML = MEDIA.uses.map(function (u) {
      var cap = L(u.ar, u.en, u.zh || u.en);
      return '<figure class="photo-card"><img src="' + u.img + '" alt="' + cap + '" loading="lazy"/><figcaption>' + cap + '<small>' + note + '</small></figcaption></figure>';
    }).join("");
  }
  function run() {
    ensureGalleryTab();
    injectHeroPhoto();
    injectFeatures();
    injectFinishPhotos();
    labelApproxSwatches();
    injectFactoryPhotos();
    injectProductPhotos();
    injectGalleryPage();
    injectUsePhotos();
    injectAboutLegal();
    stampImgs();
    deferCarousels();
    scrubWrongPhone();
  }
  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) {
      _setTab(id);
      setTimeout(run, 0);
    };
  }
  var _render = window.render;
  if (typeof _render === "function") {
    window.render = function () {
      _render();
      setTimeout(run, 0);
    };
  }
  setTimeout(run, 0);
  setTimeout(run, 100);
})();
