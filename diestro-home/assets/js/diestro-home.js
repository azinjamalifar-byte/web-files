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

  /* ---------- Roasting Story: continuous scrub timeline ----------
     One persistent bean (not five swapped icons) is tweened through the
     whole sequence — fill color, crease color, and hand scale are all
     driven by a single GSAP timeline scrubbed to scroll position. Steam
     fades in around first crack, a heat glow blooms behind the bean at
     the same moment, and the last beat crossfades the illustration into
     the real product photo. Captions and the numbered rail stay discrete
     (text can't blend), switched by step boundaries on the same 0–5
     timeline scale the continuous tweens use. */
  var roastSection = document.querySelector(".roast-story");
  var roastVisual = document.getElementById("roast-visual");
  if (roastSection && roastVisual && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    var bean = document.getElementById("roast-bean");
    var crease = document.getElementById("roast-crease");
    var hand = document.getElementById("roast-hand");
    var steam = document.getElementById("roast-steam");
    var pkg = document.getElementById("roast-pkg");
    var photo = document.getElementById("roast-photo");
    var photoImg = photo ? photo.querySelector("img") : null;
    var captions = roastSection.querySelectorAll(".roast-caption-item");
    var railSteps = roastSection.querySelectorAll(".roast-rail span");
    var steps = captions.length; /* 5 */

    var setDiscrete = function (index) {
      captions.forEach(function (c, i) { c.classList.toggle("is-active", i === index); });
      railSteps.forEach(function (s, i) { s.classList.toggle("is-active", i === index); });
    };
    setDiscrete(0);

    if (!reduceMotion) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: roastSection,
          start: "top top",
          end: "+=" + (steps * 100) + "%",
          pin: ".roast-pin",
          scrub: 0.5,
          onUpdate: function (self) {
            var idx = Math.min(steps - 1, Math.floor(self.progress * steps));
            setDiscrete(idx);
            roastVisual.classList.toggle("is-hot", self.progress > 0.32 && self.progress < 0.78);
          },
        },
      });

      /* Timeline scale: 0–5, matching the five caption steps. */
      tl.to(bean, { fill: "#D9A53E", duration: 1 }, 0)
        .to(crease, { stroke: "#8a6a1f", duration: 1 }, 0)
        .to(bean, { fill: "#B9793B", duration: 1 }, 1)
        .to(crease, { stroke: "#5c3714", duration: 1 }, 1)
        .to(bean, { fill: "#3B2013", duration: 1 }, 2)
        .to(steam, { opacity: 1, duration: 0.6 }, 0.6)
        .to(steam, { opacity: 0.85, duration: 1.4 }, 1.2)
        .to(steam, { opacity: 0, duration: 0.6 }, 2.8)
        .to(hand, { scale: 1.06, transformOrigin: "50% 50%", duration: 4 }, 0)
        .to([bean, crease], { opacity: 0, duration: 0.6 }, 3.2)
        .to(pkg, { opacity: 1, duration: 0.6 }, 3.2)
        .to(pkg, { opacity: 0, duration: 0.5 }, 3.85)
        .to(photo, { opacity: 1, duration: 0.6 }, 3.5)
        .fromTo(photoImg, { scale: 0.85 }, { scale: 1, duration: 0.9, ease: "back.out(1.7)" }, 3.5);
    } else {
      /* Reduced motion: static first frame, no pin, no scrub. */
      roastSection.classList.add("no-pin");
    }
  }
})();
