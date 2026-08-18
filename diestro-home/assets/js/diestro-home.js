/* Diestro Coffee — home page interactions. GSAP + ScrollTrigger (self-hosted). */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Reveal-on-scroll (simple sections) ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }

  /* ---------- Roasting Story: pinned scrub sequence ---------- */
  var roastSection = document.querySelector(".roast-story");
  if (roastSection && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    var frames = roastSection.querySelectorAll(".roast-frame");
    var captions = roastSection.querySelectorAll(".roast-caption-item");
    var progressDots = roastSection.querySelectorAll(".roast-progress span");
    var meterFill = roastSection.querySelector(".roast-meter-fill");
    var meterLabel = roastSection.querySelector(".roast-meter-label");
    var steps = frames.length;

    var setActive = function (index) {
      frames.forEach(function (f, i) { f.classList.toggle("is-active", i === index); });
      captions.forEach(function (c, i) { c.classList.toggle("is-active", i === index); });
      progressDots.forEach(function (d, i) { d.classList.toggle("is-active", i <= index); });
      if (meterFill) meterFill.style.width = ((index + 1) / steps) * 100 + "%";
      if (meterLabel) meterLabel.textContent = meterLabel.dataset["step" + index] || "";
    };
    setActive(0);

    if (!reduceMotion) {
      ScrollTrigger.create({
        trigger: roastSection,
        start: "top top",
        end: "+=" + (steps * 100) + "%",
        pin: ".roast-pin",
        scrub: 0.4,
        onUpdate: function (self) {
          var idx = Math.min(steps - 1, Math.floor(self.progress * steps));
          setActive(idx);
        },
      });
    } else {
      /* Reduced motion: reveal frames as plain scroll cards, no pin. */
      roastSection.classList.add("no-pin");
    }
  }
})();
