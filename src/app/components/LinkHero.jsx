"use client"

import Link from "next/link"
import { useState } from "react"
import AlertToast from "./AlertToast"

export default function LinkHero({ type, text, href }) {
  const [showToast, setShowToast] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("gabriel.morandi.mello@gmail.com")
      setShowToast(true)
    } catch (err) {
      console.error("Falha ao copiar: ", err)
    }
  }

  if (type === "email") {
    return (
      <>
        <AlertToast
          message="Email copiado!"
          showToast={showToast}
          setShowToast={setShowToast}
        />
        <button
          onClick={copyToClipboard}
          className=" opacity-0 fade-up-link-stagger relative p-1 rounded-sm bg-transparent font-semibold text-zinc-950 hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-950 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors focus:text-white outline-offset-2"
        >
          Email
        </button>
      </>
    )
  } else {
    return (
      <Link
        href={href}
        className=" opacity-0 fade-up-link-stagger relative p-1 rounded-sm bg-transparent font-semibold text-zinc-950 hover:text-white z-10 after:content-[''] after:absolute after:w-full after:h-1 after:bg-zinc-950 after:rounded-sm after:left-0 after:bottom-0 after:hover:h-full after:transition-all after:-z-10 focus:after:h-full transition-colors focus:text-white outline-offset-2"
      >
        {text}
      </Link>
    )
  }
}
