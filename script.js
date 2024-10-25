let tl=gsap.timeline()
tl.from(".front",{
    y:1000,
    duration:1,
})
tl.from(".coffec",{
    y:800,
    duration:1,
    scale:2
})
tl.from(".front h1",{
    y:1000,
    duration:1
})
tl.from("#coffeeb1",{
    y:800,
    duration:1,
   scale:2
})
tl.from("#coffeeb2",{
    y:800,
    duration:1,
   scale:2
})
tl.from("#coffeeb3",{
    y:800,
    duration:1,
   scale:2
})
tl.from("#coffeeb4",{
    y:800,
    duration:1,
   scale:2
})
tl.from("#coffeeb5",{
    y:800,
    duration:1,
   scale:2
})
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        marker:true,
        start:"0% 90%",
        end:"50% 50%"

    }
})
tl2.to("#coffeec", {
    left: 105,
    top: 753,
    scale: 0.8
  })
  tl2.to("#coffeeb1", {
    left: 253,
    top: 753,
    scale: 0.9,
    rotate: 142
  }, "<");  // This makes both animations start at the same tim
let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#menu",
    scroller: "body", // body is default, can be omitted
    scrub: 2,
    start: "0% 90%",
    end: "50% 50%"
  }
});

tl3.to("#coffeec", { top: 1480, left: 647, scale: 0.9, duration:1})
   .to("#coffeeb1", { left: 787, top: 1501, scale: 0.9, rotate: 239, duration:1 }, "<")
   .from("#can1", { x: -300, duration: 1 }, "hii")
   .from("#can2", { x: 300, duration: 1 }, "hii")
   .from("#bean1", { x: -300, duration: 1, rotate:200}, "hii")
   .from("#bean2", { x: 300, duration: 1, rotate:200 }, "hii");


let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#contect",
    scroller: "body", // body is default, can be omitted
    scrub: 2,
    start: "0% 90%",
    end: "50% 50%"
  }
});
tl4.to("#coffeec", { top: 2275, left: 1032, duration:1, zIndex:3},"hi")
.to("#coffeeb1", { left: 1169, top: 2283,rotate:20 , zIndex:2 }, "<")
.to("#can1",{
    left:651,
    top:758,
    duration:1,
    rotate:-20
})
.to("#can2",{
    left:211,
    top:758,
    duration:1,
    rotate:20
})