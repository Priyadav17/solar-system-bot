"use client"

import { useEffect, useState } from "react"

type BackgroundAnimationProps = {}

export function BackgroundAnimation() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; size: string; delay: string }>>([])
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: string }>>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars = []
      for (let i = 0; i < 150; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 3 + 1}px`,
          delay: `${Math.random() * 3}s`,
        })
      }
      setStars(newStars)
    }

    const generateShootingStars = () => {
      const newShootingStars = []
      for (let i = 0; i < 3; i++) {
        newShootingStars.push({
          id: i,
          delay: `${Math.random() * 10}s`,
        })
      }
      setShootingStars(newShootingStars)
    }

    generateStars()
    generateShootingStars()
  }, [])

  return (
    <>
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      <div className="stars">
        {shootingStars.map((star) => (
          <div
            key={`shooting-${star.id}`}
            className="shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
    </>
  )
}
