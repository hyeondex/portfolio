import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const scroller = document.querySelector(".scroller");

  const bodyScrollBar = SmoothScrollbar.init(scroller, {
    damping: 0.1,
    delegateTo: document,
    alwaysShowTracks: true,
  });

  ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    },
  });

  bodyScrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: scroller });

  gsap.set("section.footer-container", { yPercent: -50 });

  const uncover = gsap.timeline({ paused: true });

  uncover.to("section.footer-container", { yPercent: 0, ease: "none" });

  ScrollTrigger.create({
    trigger: "section.box",
    start: "bottom bottom",
    end: "+=75%",
    animation: uncover,
    scrub: true,
    markers: true,
  });

  // Only necessary to correct marker position - not needed in production
  if (document.querySelector(".gsap-marker-scroller-start")) {
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    bodyScrollBar.addListener(({ offset }) => {
      gsap.set(markers, { marginTop: -offset.y });
    });
  }
});
