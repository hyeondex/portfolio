import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".scroller");

  // const bodyScrollBar = SmoothScrollbar.init(scroller, {
  //   damping: 0.1,
  //   delegateTo: document,
  //   alwaysShowTracks: true,
  // });
  //
  // //scroll bar
  // ScrollTrigger.scrollerProxy(".scroller", {
  //   scrollTop(value) {
  //     if (arguments.length) {
  //       bodyScrollBar.scrollTop = value;
  //     }
  //     return bodyScrollBar.scrollTop;
  //   },
  //   getBoundingClientRect() {
  //     return {
  //       top: 0,
  //       left: 0,
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     };
  //   },
  //   pinType: "transform", // pin 동작을 위해 필수
  // });
  //
  // bodyScrollBar.addListener(ScrollTrigger.update);
  // ScrollTrigger.defaults({ scroller: scroller });

  //footer
  gsap.set("section.footer-container", { yPercent: -50 });
  const uncover = gsap.timeline({ paused: true });
  uncover.to("section.footer-container", { yPercent: 0, ease: "none" });
  ScrollTrigger.create({
    trigger: "section.box",
    start: "bottom bottom",
    end: "+=75%",
    animation: uncover,
    scrub: true,
    //markers: true,
  });

  // Only necessary to correct marker position - not needed in production
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    bodyScrollBar.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
    });
  }
  const mainTextTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-txt",
      start: "top 100px",
      end: "top top",
      scrub: 3,
      markers: false,
      onUpdate: (self) => {},
    },
  });

  //fromTo : 초기 / 끝 값
  //to : 현재 값 기준으로 끝나는 값
  //여기서 최종으로 끝나는 값은 to의 값
  mainTextTl
    .fromTo(".text1", { x: "100%" }, { x: "0%", ease: "none", duration: 2 }, 0)
    .to(".text1", { x: "-100%", ease: "none", duration: 2 }, 1)
    .fromTo(".text2", { x: "-100%" }, { x: "0%", ease: "none", duration: 2 }, 0)
    .to("text2", { x: "-200%", ease: "none", duration: 2 }, 2)
    .fromTo(".text3", { x: "150%" }, { x: "0%", ease: "none", duration: 2 }, 0)
    .to(".text3", { x: "-250%", ease: "none", duration: 2 }, 2);

  const list = gsap.utils.toArray(".horizontal-list li");
  gsap.set(".horizontal-list ul", {
    x: () => ((list.length - 1) * list[0].offsetWidth) / 2,
  });
  const HorizontalList = gsap.timeline({
    scrollTrigger: {
      trigger: ".horizontal-list",
      start: "top 60px",
      end: "bottom center",
      scrub: 1,
      markers: true,
      pin: true,
      snap: 1 / (list.length - 1),
      onUpdate: (self) => {
        console.log(self.progress);

        console.log(
          document.querySelector(".horizontal-list").offsetWidth,
          ((list.length - 1) * list[0].offsetWidth) / 2,
        );
      },
    },
  });

  HorizontalList.to(list, {
    x: () => -(list.length - 1) * list[0].offsetWidth, // 리스트 길이에 따라 이동 거리 계산
    ease: "none", // 자연스러운 스크롤 느낌
  });
});

//ScrollTrigger.matchMedia({
//   // 모바일 및 태블릿
//   "(max-width: 768px)": function () {
//
//     // sec03 WeMAKEPOSSIBLE
//     const sec03Mo = gsap.timeline({
//       scrollTrigger: {
//         trigger: '.sec03',
//         start: '-60% top',
//         end: 'bottom top',
//         scrub: 1.5, // 스크롤을 따라 애니메이션 진행
//       }
//     })
//     // we 글자
//     sec03Mo.fromTo('.textWe', { x: '-250%' }, { x: '-50%', ease: 'none', duration: 2 },0)
//     .to('.textWe',{ x: '200%', ease: 'none', duration: 2 },2)
//     // make 글자
//     .fromTo('.textMake', { x: '-200%' }, { x: '-50%', ease: 'none', duration: 2 },0)
//     .to('.textMake',{ x: '100%', ease: 'none', duration: 2 },2)
//     // poss 글자
//     .fromTo('.textPoss', { x: '20%' }, { x: '-50%', ease: 'none', duration: 2 },0)
//     .to('.textPoss', { x: '-100%', ease: 'none', duration: 2 },2);
//   },
//
//   // 데스크톱
//   "(min-width: 769px)": function () {
//     // sec03 WeMAKEPOSSIBLE
//       const sec03Pc = gsap.timeline({
//         scrollTrigger: {
//           trigger: '.sec03',
//           start: '-40% top',
//           end: 'bottom top',
//           scrub: 1.5, // 스크롤을 따라 애니메이션 진행
//           // markers: true // 디버깅을 위한 마커 표시
//         }
//       })
//       // we 글자
/*  sec03Pc.fromTo('.textWe', { x: '-250%' }, { x: '-50%', ease: 'none', duration: 2 },0)
      .to('.textWe',{ x: '200%', ease: 'none', duration: 2 },2)
      // make 글자
      .fromTo('.textMake', { x: '-200%' }, { x: '-50%', ease: 'none', duration: 2 },0)
      .to('.textMake',{ x: '100%', ease: 'none', duration: 2 },2)
      // poss 글자
      .fromTo('.textPoss', { x: '20%' }, { x: '-50%', ease: 'none', duration: 2 },0)
      .to('.textPoss', { x: '-100%', ease: 'none', duration: 2 },2);*/
//   },
