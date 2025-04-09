"use client"

import { useEffect } from "react"

export default function ScrollOffset() {
  useEffect(() => {
    // Function to handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")
        const targetElement = document.querySelector(targetId as string)

        if (targetElement) {
          // Get the header height (adjust this value if your header height changes)
          const headerHeight = 80

          // Calculate the target position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

          // Scroll to the target position
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    // Add event listener to document
    document.addEventListener("click", handleAnchorClick)

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
