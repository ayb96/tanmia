import "./style.scss";
import { gsap } from "gsap";

// const header = document.querySelector(".header-main");
const timeline = gsap.timeline({ defaults: { duration: 1 } });
gsap.from(".header-main", { y: "-500%", ease: "power4", duration: 2 });
timeline.from(
  ".nav-common",
  {
    y: "-500%",
    delay: 0.2,
    stagger: { each: 0.1, from: "random" },
  },
  "<-0.5"
);

timeline
  .from(".stat-container1-com", { x: "-500%", ease: "power4", duration: 2 })
  .from(
    ".stat-container2",
    { x: "500%", ease: "power4", duration: 2 },
    "<-0.1"
  );
