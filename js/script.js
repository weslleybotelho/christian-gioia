/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.querySelector("header");
  const linksMenu = document.querySelectorAll(".link-menu");

  if (this.scrollY >= 1000) nav.classList.add("active-header");
  else nav.classList.remove("active-header");

  linksMenu.forEach((link) => {
    if (this.scrollY >= 1000) link.classList.add("link-black");
    else link.classList.remove("link-black");
  });
}

window.addEventListener("scroll", scrollHeader);

/*--=========== GSAP SCROLLTRIGGER ============- */

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  var tl1 = gsap.timeline();

  tl1
    .to(".screen-loading", {
      duration: 2,
      opacity: 0,
      delay: 5,
      ease: "power4.out",
    })
    .from(
      ".img-hero",
      {
        duration: 3,
        opacity: 0,
        x: 300,
        stagger: { each: 0.1 },
        ease: "power4.out",
      },
      "-=1.0"
    )
    .from(
      "#hero div",
      {
        duration: 2,
        opacity: 1,
        y: 200,
        stagger: { each: 0.1 },
        ease: "power4.out",
      },
      "-=3.0"
    );

  // loading section scroll

  gsap.from("#section-1 > div", {
    y: 200,
    opacity: 0,
    ease: "power4.out",
    stagger: { each: 0.2 },
    duration: 3,
    scrollTrigger: {
      trigger: "#section-1",
      start: "top 80%",
      end: "top 50%",
    },
  });

  gsap.from("#section-2 > div", {
    y: 200,
    opacity: 0,
    ease: "power4.out",
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: "#section-2",
      start: "top 80%",
      end: "top 50%",
    },
  });

  gsap.from("#section-3 > div", {
    y: 200,
    opacity: 0,
    ease: "power4.out",
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: "#section-3",
      start: "top 80%",
      end: "top 50%",
    },
  });

  gsap.from("#section-4 > div", {
    y: 200,
    opacity: 0,
    ease: "power4.out",
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: "#section-4",
      start: "top 80%",
      end: "top 50%",
    },
  });

  gsap.from("#section-5 > div", {
    y: 200,
    opacity: 0,
    ease: "power4.out",
    stagger: { each: 0.1 },
    duration: 3,
    scrollTrigger: {
      trigger: "#section-5",
      start: "top 80%",
      end: "top 50%",
    },
  });
});

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});
