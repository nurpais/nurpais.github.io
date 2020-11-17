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

  // Intersection Observer API
  (function () {
    const screenWidth = window.innerWidth > 768;

    const options = {
      threshold: 0.2,
    };

    const dataAnimationYCallBack = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            y: 0,
            duration: 0.6,
            opacity: "1",
            ease: "sine.out",
            delay: screenWidth ? entry.target.dataset.delay : null,
          });
        }
      });
    };

    const dataAnimationOpacityCallBack = function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: "1",
            duration: 0.8,
            ease: "sine.out",
            delay: screenWidth ? entry.target.dataset.delay : null,
          });
        }
      });
    };

    const dataAnimationY = document.querySelectorAll("[data-animation-y]");
    const dataAnimationOpacity = document.querySelectorAll("[data-animation-opacity]");

    const dataAnimationYObserver = new IntersectionObserver(dataAnimationYCallBack, options);
    const dataAnimationOpacityObserver = new IntersectionObserver(dataAnimationOpacityCallBack, options);

    dataAnimationY.forEach((el) => dataAnimationYObserver.observe(el));
    dataAnimationOpacity.forEach((el) => dataAnimationOpacityObserver.observe(el));
  })();

  // GSAP Hero animation
  (function () {
    let heroElements = document.querySelectorAll(".hide-text");

    heroElements.forEach((el) => {
      el.parentElement.style.overflow = "hidden";
    });

    gsap.set(document.querySelector(".overlay"), {
      display: "none",
      ease: "expo.out",
      onComplete() {
        heroElements.length
          ? gsap.from(heroElements, { duration: 1, stagger: 0.2, x: "-100%", ease: "expo.out" })
          : null;
      },
    });
  })();
});
