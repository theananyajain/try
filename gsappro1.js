
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#bg'),
//   smooth: true
// });




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});








var tl = gsap.timeline();

tl.from("#page1 h1", {
  opacity: 0,
  delay: 0,
  duration: 1,
  y: 100,
})
  .from(
    "#page1 #img1",
    {
      opacity: 0,
      duration: 1,
      y: 100,
      delay: 0,
    },
    "-=1"
  )
  .from(
    "#page1 #img2",
    {
      opacity: 0,
      duration: 1,
      x: 100,
      delay: 0,
    },
    "-=1"
  )
  .from(
    "#page1 #img3",
    {
      opacity: 0,
      duration: 1,
      y: -100,
      delay: 0,
    },
    "-=1"
  )

  .from(
    "#nav",
    {
      opacity: 0,
      y: 0,
      duration: 1,
    },
    "-=1"
  )

  .from(
    "#findout",
    {
      opacity: 0,
      duration: 1,
      y: 20,
    },
    "-=1"
  )

  .from(
    "#page2 h4,#p2h1,#about,#circle",
    {
      scrollTrigger: {
        trigger: "#page2 h4,#p2h1, #about,#circle",
        scroller: "body",
        // markers:true,
        scrub: 3,
        start: "top 90%"
      },
      y: 30,
      opacity: 0,
      // stagger: 1,
      duration: 0.5,
      // delay: 1,
    },
    "-=1"
  )
  

  // .from("#imga",
  //   {
  //     scrollTrigger: {
  //       trigger: "#imga",
  //       scroller: "body",
  //       start: "top 70%",

  //       // markers: true,
  //       scrub: 1,
  //     },
  //     x: 30,
  //     // stagger:1,
  //     duration: 1,
      
  //   },
  //   "-=1"
  // )
  // .from("#imgb",
  //   {
  //     scrollTrigger: {
  //       trigger: "#imgb",
  //       scroller: "body",
  //       start: "top 70%",
  //       // markers : "true",
  //       scrub: 1,

  //     },
  //     y: 20,
  //     // stagger:1,
  //     duration: 1,
  //   },
  //   "-=1"
  // )

  // .from("#imgc",
  //   {
  //     scrollTrigger: {
  //       trigger: "#imgc",
  //       scroller: "body",
  //       start: "top 70%",
  //       // markers : "true"
  //       scrub: 1,
  //     },
  //     x : 20,
  //     // stagger:1,
  //     duration: 1,
  //   },
  //   "-=1"
  // )

  // .to("#imgd",
  //   {
  //     scrollTrigger: {
  //       trigger: "#imgd",
  //       scroller: "body",
  //       start: "top 40%",
  //       // markers : "true",
  //       scrub: 1,
  //     },
  //     x : -30,
  //     // stagger:1,
  //     duration: 0.3,
  //   },
  //   "-=1"
  // )

.from("#learnmore",{
  scrollTrigger:{
    trigger:"#learnmore",
    scroller:"body",
    start :"top 100%",
    // markers : true,
    scrub : 1,
  },
  // opacity : 0,
  x : 50,
   duration : 0.7,
})

.from("#ursolution h1,#ursolution h5",{
  scrollTrigger:{
  trigger:"#ursolution h1,#ursolution h5",
  scroller:"body",
  start : "top 100%",
  // markers:true,
  stagger:1,
  scrub : 1,
  },
  x : 70,
  durartion : 0.7,
})





.from("#page4 h1 ,#p4circle",{
  scrollTrigger: {
    trigger:"#page4 h1,#p4circle",
    scroller:"body",
    start :"top 90%",
    // markers : true,
    scrub : 1,
  },
  opacity : 0,
  y : 40,
   duration : 0.5,
})

.from("#logos",{
  scrollTrigger:{
trigger:"#logos",
scroller: "body",
start :"top 100%",
// markers : "true",
scrub : 1,
  },
  opacity : 0.4,
  y : 40,
   duration : 0.5,
})
.from("#page7 #middle",{
  scrollTrigger:{
trigger:"#page7 #middle",
scroller: "body",
start :"top 100%",

// markers : "true",
scrub : 1,
  },
  // opacity : 0.4, 
  y : 40,
   duration : 1,
   ease : Expo.ease,
})

.from(" #become,#lets,#lastmid",{
  scrollTrigger:{
trigger:"#become,#lets,#lastmid",
scroller: "body",
start :"top 100%",
// markers : "true",
scrub : 1,
  },
  // opacity : 0.4, 
  x : -70,
   duration : 1,
   ease : Expo.ease,
})

.from(" #lastright",{
  scrollTrigger:{
trigger:"#lastright",
scroller: "body",
start :"top 100%",
// markers : "true",
scrub : 1,
  },
  // opacity : 0.4, 
  x : 70,
   duration : 1.4,
   ease : Expo.ease,
})


