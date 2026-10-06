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
    /* Disabled: feature-strip used to land inside the navy hero and break the layout. */
    document.querySelectorAll("#p-home .feature-strip").forEach(function (el) { el.remove(); });
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
      if (chip) {
        card.insertBefore(im, chip);
        chip.style.display = "none";
      } else card.insertBefore(im, card.firstChild);
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
    if (page.querySelector(".photo-grid.factory-shots")) return;
    var wrap = page.querySelector(".wrap") || page;
    var old = page.querySelector(".photo-grid");
    if (old && !old.classList.contains("factory-shots")) old.remove();
    var grid = document.createElement("div");
    grid.className = "photo-grid factory-shots";
    var list = [];
    (MEDIA.factory || []).forEach(function (src) { if (src) list.push(src); });
    (MEDIA.works || []).forEach(function (src) {
      if (!src) return;
      if (/gallery-|showroom-collage|lifestyle|uses\//i.test(src)) return;
      if (!/(catalog-rack|product-0[1-6]|manufacturing|sample-rack|factory\/)/i.test(src)) return;
      if (list.indexOf(src) >= 0) return;
      list.push(src);
    });
    list.slice(0, 10).forEach(function (src, i) {
      var cap = L("ورشة / عينات " + (i + 1), "Workshop / samples " + (i + 1), "车间 / 样品 " + (i + 1));
      grid.innerHTML += '<figure class="photo-card">' + img(src, cap) + "<figcaption>" + cap + "</figcaption></figure>";
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
    var fu = (typeof fileUrl === "function") ? fileUrl : function (p) { return p; };
    var slat = (window.CODE_MEDIA && CODE_MEDIA["M1-003"] && CODE_MEDIA["M1-003"].primary) || "media/products/M1-003_w20.jpg";
    var picks = [
      { src: fu(slat), cat: true, alt: "M1-003" },
      { src: fu("media/uses/kitchen-grey-marble.jpg"), cat: false, alt: "" },
      { src: fu("media/factory/manufacturing-panels.jpg"), cat: false, alt: "" }
    ];
    var lineImgs = (MEDIA.lifestyle || []).concat(MEDIA.works || []).concat(MEDIA.products || []).filter(Boolean);
    var lineCards = page.querySelectorAll(".grid3 > .card");
    lineCards.forEach(function (card, i) {
      if (card.querySelector("img.finish-photo, img.line-photo")) return;
      var pick = (picks[i] && picks[i].src) ? picks[i] : { src: lineImgs[i] || lineImgs[0], cat: false, alt: "" };
      var src = pick.src;
      if (!src) return;
      var chip = card.querySelector(".chip");
      var im = document.createElement("img");
      im.className = "finish-photo line-photo" + (pick.cat ? " is-catalog" : " is-scene");
      im.src = src;
      im.alt = pick.alt;
      im.setAttribute("width", "640");
      im.setAttribute("height", "480");
      im.loading = "lazy";
      im.decoding = "async";
      if (chip) {
        card.insertBefore(im, chip);
        chip.style.display = "none";
      } else card.insertBefore(im, card.firstChild);
    });
    if (page.querySelector(".photo-grid")) return;
    var wrap = page.querySelector(".wrap") || page;
    var grid = document.createElement("div");
    grid.className = "photo-grid product-shots";
    var codes = window.CODE_MEDIA ? Object.keys(CODE_MEDIA).sort() : [];
    (MEDIA.products || []).slice(0, 12).forEach(function (src, i) {
      var code = codes[i] || "";
      if (src) grid.innerHTML += '<figure class="photo-card">' + img(src, code || ("Product " + (i + 1))) + (code ? "<figcaption>" + code + "</figcaption>" : "") + "</figure>";
    });
    var head = document.createElement("h3");
    head.className = "shots-title";
    head.textContent = L("لقطات الكتالوج بالكود", "Catalog shots by code", "按编码的图册实拍");
    wrap.appendChild(head);
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
        var cap = lang === "ar" ? row[1] : (lang === "zh" ? (row[3] || row[2]) : row[2]);
        return '<figure class="photo-card">' + img(row[0], cap) +
          "<figcaption>" + cap + "</figcaption></figure>";
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
      TABS.splice(8, 0, ["gallery", "المعرض", "Gallery", "图库"]);
    }
    TABS.forEach(function (x) {
      if (x[0] === "gallery" && !x[3]) x[3] = "图库";
      if (x[0] === "faq" && !x[3]) x[3] = "问答";
      if (x[0] === "specs" && !x[3]) x[3] = "规格";
      if (x[0] === "calc" && !x[3]) x[3] = "计算器";
      if (x[0] === "compare" && !x[3]) x[3] = "对比";
      if (x[0] === "access" && !x[3]) x[3] = "配件";
      if (x[0] === "install" && !x[3]) x[3] = "安装";
      if (x[0] === "videos" && !x[3]) x[3] = "视频";
      if (x[0] === "looks" && !x[3]) x[3] = "花色与饰面";
    });
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
