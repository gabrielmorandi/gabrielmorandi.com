"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

export default function ButtonBlend({ text, url }) {
  const buttonRef = useRef(null)
  function mouseMoveEvent(e) {
    if (buttonRef.current) {
      const { left, top } = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - left - 20 // 20px is half the width of the pseudo-element -> (after)
      const y = e.clientY - top - 20 // 20px is half the height of the pseudo-element -> (after)
      buttonRef.current.style.setProperty("--x", `${x}px`)
      buttonRef.current.style.setProperty("--y", `${y}px`)
    }
  }

  useEffect(() => {
    const currentButtonRef = buttonRef.current
    if (currentButtonRef) {
      currentButtonRef.addEventListener("mousemove", mouseMoveEvent)
    }
    return () => {
      if (currentButtonRef) {
        currentButtonRef.removeEventListener("mousemove", mouseMoveEvent)
      }
    }
  }, [])

  return (
    <Link
      ref={buttonRef}
      href={url}
      className="flex w-max relative px-6 py-2 bg-transparent rounded-full active:after:scale-[9] focus:after:scale-[9] [&>p]:focus:text-zinc-950 overflow-hidden [&>p]:hover:text-zinc-950 after:content-[''] after:absolute after:w-10 after:h-10 after:rounded-full after:bg-white after:scale-0 hover:after:scale-[7] after:top-[var(--y)] after:left-[var(--x)] after:transition-transform after:duration-[0.35s] after:ease-[cubic-bezier(0.33,1,0.68,1)]"
    >
      <span className="absolute inset-0 w-full h-full bg-transparent border-2 border-white rounded-full" />
      <p className="relative z-10 font-semibold text-white transition-colors">
        {text}
      </p>
    </Link>
  )
}
