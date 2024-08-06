let hamburgerBtn = document.querySelector("#nav i")
let closeBtn = document.querySelector("#close-icon i")

let tl2 = gsap.timeline()

tl2.from(".headline h2", {
    y:30,
    opacity: 0,
    stagger: 0.5,
    delay:1
})

tl2.to(".headline h2", {
    y: -30,
    opacity:0,
    stagger:0.8,
    delay:1
})

tl2.to("#preloader .dynamicBars", {
    height: 0,
    duration: 1,
    delay:1.2,
    stagger:0.2
})

tl2.to("#preloader", {
    height:0
})

tl2.from("#head-txt", {
    y:20,
    opacity:0
})

tl2.from("#head-txt h1", {
    y:20,
    opacity:0
})

tl2.from("#nav i", {
    y:20,
    opacity:0
})

tl2.from("#head-img", {
    y:20,
    opacity:0
})


let tl = gsap.timeline()

tl.to("#menu", {
    right:0,
    duration:1.2,
    ease: "expo.out"
})

tl.from("#close-icon", {
    x:40,
    opacity:0,
    duration:0.2,
})

tl.from("ul li", {
    y:40,
    opacity:0,
    duration:0.7,
    stagger:0.5,
    scrub:0.6,
    ease: "expo.out"
})

tl.pause()

gsap.to("#nav-text h1", {
    transform: "translateX(-70%)",
    scrollTrigger: {
        trigger: "#nav-text",
        scroller: "body",
        start:"top 0%",
        end: "top -200%",
        scrub:2,
        pin:true
    }
})


hamburgerBtn.addEventListener("click", () => {
    tl.play()
})

closeBtn.addEventListener("click", () => {
    tl.reverse()
})
