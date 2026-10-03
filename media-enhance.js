(function () {
  function $(id) { return document.getElementById(id); }
  function t() { return (typeof lang !== "undefined" && lang === "en") ? EN : AR; }
  function img(src, alt) {
    if (!src) return "";
    return '<img src="' + src + '" alt="' + (alt || "") + '" loading="lazy" decoding="async"/>';
  }
  function injectHeroPhoto() {
    var board = document.querySelector("#p-home .board");
    if (!board || !window.MEDIA || !MEDIA.hero) return;
    if (board.querySelector("img.hero-photo")) return;
    board.insertAdjacentHTML("afterbegin", '<img class="hero-photo" src="' + MEDIA.hero + '" alt="TuBaoBao Egypt" loading="eager"/>');
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
      note.textContent = (typeof lang !== "undefined" && lang === "en") ? "Approx. swatch" : "عينة تقريبية";
      card.appendChild(note);
    });
  }
  function injectFinishPhotos() {
    if (!window.CODE_MEDIA) return;
    document.querySelectorAll("#p-colors .card").forEach(function (card) {
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
      im.loading = "lazy";
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
    var existing = $("p-gallery");
    if (existing) existing.remove();
    var app = $("app");
    if (!app) return;
    var d = t();
    var sec = document.createElement("section");
    sec.id = "p-gallery";
    sec.className = "page" + (typeof tab !== "undefined" && tab === "gallery" ? " on" : "");
    var title = (d && d.galleryT) || (lang === "ar" ? "المعرض" : "Gallery");
    var lead = (d && d.galleryS) || "";
    sec.innerHTML = '<div class="wrap"><h2>' + title + '</h2><p class="lead">' + lead + '</p><div class="photo-grid">' +
      MEDIA.gallery.map(function (row) {
        return '<figure class="photo-card">' + img(row[0], lang === "ar" ? row[1] : row[2]) +
          "<figcaption>" + (lang === "ar" ? row[1] : row[2]) + "</figcaption></figure>";
      }).join("") + "</div></div>";
    app.appendChild(sec);
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
          n.nodeValue = n.nodeValue.replace(bad, "01116208881");
        }
      });
      if (el.tagName === "A" && el.href && /01005007592|201005007592/.test(el.href)) {
        el.href = el.href.replace(/01005007592/g,"01116208881").replace(/201005007592/g,"201116208881");
      }
    });
  }

  function injectUsePhotos() {
    var mount = document.getElementById("usesPhotoMount");
    if (!mount || mount.childNodes.length) return;
    if (!window.MEDIA || !MEDIA.uses) return;
    var note = (typeof lang !== "undefined" && lang === "en") ? "Application idea — not a past project" : "فكرة تطبيق — ليست سابقة أعمال";
    mount.className = "photo-carousel";
    mount.innerHTML = MEDIA.uses.map(function (u) {
      var cap = (typeof lang !== "undefined" && lang === "en") ? u.en : u.ar;
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
    scrubWrongPhone();
  }
  var _setTab = window.setTab;
  if (typeof _setTab === "function") {
    window.setTab = function (id) {
      _setTab(id);
      setTimeout(run, 0);
    };
  }
  setTimeout(run, 0);
  setTimeout(run, 100);
})();
