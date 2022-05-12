const pop = gsap.timeline({
  paused: "true",
});
pop.to(".popup-template", {
  duration: 0.8,
  opacity: 1,
  y: 0,
  scale: 1,
  ease: Power4.easeOut,
});
pop.from(
  ".popup-template h1",
  {
    duration: 0.5,
    opacity: 0,
    y: 15,
    stagger: {
      amount: 0.4,
    },
  },
  "-=.3"
);

function open_pop() {
  pop.play();
}
function close_pop() {
  pop.reverse();
}
