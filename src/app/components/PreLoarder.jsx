"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

export default function PreLoader() {
  useEffect(() => {
    gsap.to(".bar", {
      delay: 0.5,
      duration: 0.75,
      y: "-100%",
      stagger: 0.1,
      ease: "power1.inOut",
      onComplete: () => {
        document.querySelector(".overlay").style.display = "none"
        document.body.classList.add("custom-scrollbar-track")
      },
    })
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const elements = document.querySelectorAll(".fade-up")
    const staggerElements = document.querySelectorAll(".fade-up-stagger")
    const cardElements = document.querySelectorAll(".fade-up-card")
    const linkStaggerElements = document.querySelectorAll(
      ".fade-up-link-stagger"
    )
    // fadeUpAnimation
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, delay: 1.25, duration: 0.5 }
    )
    // staggerAnimation
    gsap.fromTo(
      staggerElements,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, delay: 1.25, stagger: 0.15, duration: 0.5 }
    )
    // linkAnimation
    gsap.fromTo(
      linkStaggerElements,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0, delay: 1.25, stagger: 0.15, duration: 0.5 }
    )
    // cardAnimation
    cardElements.forEach((element) => {
      setTimeout(() => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            scrollTrigger: { trigger: element, start: "top bottom" },
          }
        )
      }, 1250)
    })
  }, [])

  return (
    <div className="fixed left-0 z-50 flex items-center justify-center w-full h-full overflow-hidden bg-transparent top-16 overlay">
      <div className="w-1/3 h-full bg-zinc-950 bar sm:w-1/6"></div>
      <div className="w-1/3 h-full bg-zinc-950 bar sm:w-1/6"></div>
      <div className="w-1/3 h-full bg-zinc-950 bar sm:w-1/6"></div>
      <div className="w-0 h-full bg-zinc-950 bar sm:w-1/6"></div>
      <div className="w-0 h-full bg-zinc-950 bar sm:w-1/6"></div>
      <div className="w-0 h-full bg-zinc-950 bar sm:w-1/6"></div>
    </div>
  )
}
