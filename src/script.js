import "./style.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ defaults: { duration: 1 } });
gsap.from(".header-main", { y: "-500%", ease: "power4", duration: 2 });

// timeline.from(
//   ".nav-common",
//   {
//     y: "-500%",
//     delay: 0.2,
//     stagger: { each: 0.1, from: "random" },
//   },
//   "<-0.5"
// );

// timeline
//   .from(".stat-container1-com", { x: "-500%", ease: "power4", duration: 2 })
//   .from(
//     ".stat-container2",
//     { x: "500%", ease: "power4", duration: 2 },
//     "<-0.1"
//   );

gsap.to(".news-container-sec22", {
  scrollTrigger: {
    trigger: ".news-container-sec22",
    start: "top center",
    end: "bottom 100px",
    // markers: true,
    scrub: 2,

    toggleActions: "play pause reverse complete",
  },
  y: -40,
  // ease: "none",
  duration: 3,
});

ScrollTrigger.create({
  trigger: ".Statistics",
  start: "450px 100px",
  end: "450px 100px",
  onEnter: () => {
    timeline.timeScale(3);
    timeline.reverse(">1");
  },
  // onLeave: () => console.log("Leave"),
  onEnterBack: () => {
    console.log("gf");
    timeline.timeScale(3);
    timeline.restart();
  },
  // onLeaveBack: () => console.log("Leave back"),
  // markers: true,
});

const counters = document.querySelectorAll(".counter");
const speed = 80;
setTimeout(wew, 2000);
function wew() {
  counters.forEach((counter) => {
    // speed = 200;
    if (counter < 100) {
      speed = 10;
    }
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = Math.trunc(target / speed);
      // var intvalue = Math.trunc( floatvalue );
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

const burgerButton = document.querySelector(".burger-button");
burgerButton = document.addEventListener("click", () => {
  console.log("ghgh");
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  navbarLinks.classList.toggle("active");
});
