"use client"

import { useEffect } from "react"

const AlertToast = ({ message, showToast, setShowToast }) => {
  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false)
      }, 5000)
    }
  }, [showToast])

  return (
    <div
      className={`fixed z-50 bg-white text-zinc-950 flex px-4 py-2 transition-all rounded-md top-3 ${
        showToast ? "right-4" : "-right-44"
      }`}
    >
      {message}
    </div>
  )
}

export default AlertToast
