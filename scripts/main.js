window.addEventListener("load", function () {
  // Locomotive scroll
  (function () {
    var scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
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

  // Hero animation
  (function () {})();
});
