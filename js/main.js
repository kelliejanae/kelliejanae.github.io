/* inspiration from
https://cz.pinterest.com/pin/830703093796717544/
*/

gsap.registerPlugin(SplitText);

let split = SplitText.create(".text", {
  type: "chars, words, lines",
  mask: "lines"
});

gsap.from(split.chars, {
  yPercent: "random([-100, 100])",
  rotation: "random(-30, 30)",
  ease: "back.out",
  autoAlpha: 0,
  repeat: 4,
  yoyo: true,
  stagger: {
    amount: 0.5,
    from: "random"
  }
});
