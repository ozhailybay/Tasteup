"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

export default function TypingAnimation({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "", 
  showCursor = true 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Start typing after delay
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[currentIndex])
      setCurrentIndex((prev) => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, isTyping, text, speed])

  return (
    <span className={className}>
      {displayText}
      {showCursor && isTyping && (
        <span 
          className="text-primary ml-1"
          style={{ animation: "blink 1s infinite" }}
        >
          |
        </span>
      )}
    </span>
  )
}
