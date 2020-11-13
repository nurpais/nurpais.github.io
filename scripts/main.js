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
    let circle = document.querySelector(".circle");

    function moveCircle(e) {
      TweenLite.to(circle, 0.3, {
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", moveCircle);

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        circle.classList.add("active");
      });
    });

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseleave", () => {
        circle.classList.remove("active");
      });
    });
  })();
});
