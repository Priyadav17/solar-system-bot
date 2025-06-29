"use client"

import type { Planet } from "@/lib/planets-data"

interface AnimatedPlanetProps {
  planet: Planet
  useRetroFont?: boolean
}

export function AnimatedPlanet({ planet, useRetroFont = false }: AnimatedPlanetProps) {
  const getPlanetSize = (name: string) => {
    const sizes: Record<string, string> = {
      mercury: useRetroFont ? "w-16 h-16" : "w-20 h-20",
      venus: useRetroFont ? "w-20 h-20" : "w-24 h-24",
      earth: useRetroFont ? "w-28 h-28" : "w-32 h-32",
      mars: useRetroFont ? "w-20 h-20" : "w-24 h-24",
      jupiter: useRetroFont ? "w-40 h-40" : "w-48 h-48",
      saturn: useRetroFont ? "w-36 h-36" : "w-44 h-44",
      uranus: useRetroFont ? "w-28 h-28" : "w-36 h-36",
      neptune: useRetroFont ? "w-28 h-28" : "w-32 h-32",
    }
    return sizes[name.toLowerCase()] || (useRetroFont ? "w-28 h-28" : "w-32 h-32")
  }

  const getPlanetPattern = (name: string) => {
    const baseClasses = `absolute inset-0 planet-rotate rounded-full ${useRetroFont ? "animate-pulse" : ""}`

    switch (name.toLowerCase()) {
      case "earth":
        return (
          <div
            className={`${baseClasses} bg-gradient-to-br from-blue-400 via-green-400 to-blue-600 ${useRetroFont ? "cosmic-planet-glow" : ""}`}
          >
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-green-300/40 to-transparent"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-blue-200/30 to-transparent"></div>
            <div className="absolute top-1/4 left-1/3 w-3 h-2 bg-green-600/60 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-4 h-3 bg-green-500/50 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-green-700/40 rounded-full"></div>
          </div>
        )
      case "mars":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-red-400 to-red-700`}>
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-orange-300/40 to-transparent"></div>
            <div className="absolute top-1/3 left-1/4 w-2 h-1 bg-red-800/60 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/3 w-3 h-2 bg-red-900/50 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-600/70 rounded-full"></div>
          </div>
        )
      case "jupiter":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-orange-300 via-yellow-400 to-red-500`}>
            <div className="absolute top-1/4 left-0 right-0 h-3 bg-orange-600/60 rounded-full"></div>
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-red-600/50 rounded-full"></div>
            <div className="absolute top-3/4 left-0 right-0 h-2 bg-yellow-600/60 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-8 h-6 bg-red-700/70 rounded-full"></div>
          </div>
        )
      case "saturn":
        return (
          <div className="relative">
            <div className={`${baseClasses} bg-gradient-to-br from-yellow-200 to-yellow-600`}>
              <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-yellow-100/40 to-transparent"></div>
              <div className="absolute top-1/3 left-0 right-0 h-2 bg-yellow-700/40 rounded-full"></div>
              <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-yellow-800/30 rounded-full"></div>
            </div>
            <div className="absolute inset-0 border-4 border-yellow-300/60 rounded-full scale-150 planet-orbit"></div>
            <div
              className="absolute inset-0 border-2 border-yellow-400/40 rounded-full scale-[1.7] planet-orbit"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="absolute inset-0 border border-yellow-500/30 rounded-full scale-[1.9] planet-orbit"></div>
          </div>
        )
      case "uranus":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-cyan-300 to-blue-500`}>
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-200/40 to-transparent"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-bl from-blue-300/30 to-transparent"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-1 bg-cyan-600/60 rounded-full"></div>
          </div>
        )
      case "neptune":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-blue-400 to-blue-800`}>
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-blue-300/40 to-transparent"></div>
            <div className="absolute top-1/3 right-1/3 w-4 h-3 bg-blue-900/60 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-blue-600/50 rounded-full"></div>
          </div>
        )
      case "venus":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-yellow-300 to-orange-500`}>
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-yellow-200/50 to-transparent"></div>
            <div className="absolute inset-3 rounded-full bg-gradient-to-bl from-orange-300/30 to-transparent"></div>
          </div>
        )
      case "mercury":
        return (
          <div className={`${baseClasses} bg-gradient-to-br from-gray-300 to-gray-600`}>
            <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-gray-200/40 to-transparent"></div>
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-gray-700/60 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-gray-800/50 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-3 h-2 bg-gray-500/40 rounded-full"></div>
          </div>
        )
      default:
        return <div className={`${baseClasses} bg-gradient-to-br from-gray-400 to-gray-700`}></div>
    }
  }

  return (
    <div className="relative flex items-center justify-center p-12">
      <div className={`planet-float ${useRetroFont ? "cosmic-planet-container" : ""}`}>
        <div
          className={`relative ${getPlanetSize(planet.name)} planet-pulse ${useRetroFont ? "cosmic-planet animate-bounce" : "planet-glow"}`}
        >
          {getPlanetPattern(planet.name)}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 to-transparent"></div>
          <div
            className="absolute inset-0 rounded-full shadow-2xl"
            style={{
              boxShadow: useRetroFont
                ? `inset 0 0 20px rgba(0,0,0,0.3), 0 0 40px ${planet.colorHex}80, 0 0 60px ${planet.colorHex}60, 0 0 80px ${planet.colorHex}40`
                : `inset 0 0 20px rgba(0,0,0,0.3), 0 0 40px ${planet.colorHex}40`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}
