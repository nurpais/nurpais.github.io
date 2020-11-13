window.addEventListener("load", function () {
  // Locomotive scroll
  (function () {
    var scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 0.8,
    });
  })();

  // GSAP cursor
  (function () {
    let cursor = document.querySelector(".cursor");

    function movecursor(e) {
      TweenLite.to(cursor, 0.3, {
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", movecursor);

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
      });
    });

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
      });
    });
  })();
});

// GSAP Hero animation
window.addEventListener("load", function () {
  let heroElements = document.querySelectorAll(".hide-text");
  let navbar = document.querySelector(".navbar");
  let headerWave = document.querySelector(".header-wave");
  let overlay = document.querySelector(".overlay");

  heroElements.forEach((el) => {
    el.parentElement.style.overflow = "hidden";
  });

  gsap.to(overlay, { duration: 1, display: "none", ease: "expo.out", onComplete: mainAnimation });

  gsap.from(headerWave, { display: "none" });

  function mainAnimation() {
    gsap.from(heroElements, { duration: 1, stagger: 0.2, x: "-100%", ease: "expo.out" });
    gsap.from(navbar, { duration: 0.6, opacity: 0, delay: 0.6, ease: "sine.in" });
    gsap.from(headerWave, { duration: 0.6, opacity: 0, delay: 0.8, ease: "sine.in" });
  }
});

// Intersection Observer API
(function () {
  const options = {
    threshold: [0.8, 0.1],
  };

  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!entry.target.dataset.fadeY) {
          gsap.to(entry.target, {
            duration: 1,
            opacity: 1,
            y: 0,
            delay: entry.target.dataset.fadeDelay,
          });
        } else {
          gsap.to(entry.target, {
            duration: 1,
            opacity: 1,
            delay: entry.target.dataset.fadeDelay,
          });
        }
      } else {
        if (!entry.target.dataset.fadeY) {
          gsap.to(entry.target, {
            duration: 1,
            opacity: 0,
            delay: entry.target.dataset.fadeDelay,
          });
        } else {
          gsap.to(entry.target, {
            duration: 1,
            opacity: 0,
            delay: entry.target.dataset.fadeDelay,
          });
        }
      }
    });
  };

  const dataAnimation = document.querySelectorAll("[data-fade]");

  const observer = new IntersectionObserver(callback, options);

  dataAnimation.forEach((el) => observer.observe(el));
})();
