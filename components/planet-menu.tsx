"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { Planet } from "@/lib/planets-data"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Star } from "lucide-react"

interface PlanetMenuProps {
  selectedPlanet: string
  onSelectPlanet: (planetId: string) => void
  planets: Planet[]
  useRetroFont?: boolean
}

export function PlanetMenu({ selectedPlanet, onSelectPlanet, planets, useRetroFont = false }: PlanetMenuProps) {
  return (
    <aside
      className={`w-80 border-r backdrop-blur-xl ${useRetroFont ? "cosmic-card" : "glass-card border-border/20"} shadow-xl`}
    >
      <div className="p-6">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center mb-3">
            <Star className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
            <h2 className={`text-2xl font-bold gradient-text ${useRetroFont ? "cosmic-font-large" : ""}`}>
              Solar Planets
            </h2>
            <Star className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" />
          </div>
          <p className={`text-sm text-muted-foreground ${useRetroFont ? "cosmic-font-small" : ""}`}>
            Select a planet to explore its mysteries
          </p>
          <div className="mt-3 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>
        </div>
        <ScrollArea className="h-[calc(100vh-220px)]">
          <div className="space-y-3">
            {planets.map((planet, index) => (
              <Button
                key={planet.id}
                variant={selectedPlanet === planet.id ? "default" : "ghost"}
                className={`w-full justify-start text-left h-auto p-4 transition-all duration-300 hover-lift group ${
                  useRetroFont ? "cosmic-button" : "rounded-xl"
                } ${
                  selectedPlanet === planet.id
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/40 shadow-lg shadow-blue-500/20"
                    : useRetroFont
                      ? "cosmic-card hover:bg-accent/50"
                      : "glass-card hover:bg-accent/50 border border-white/10"
                }`}
                onClick={() => onSelectPlanet(planet.id)}
              >
                <div className="flex items-center space-x-4 w-full">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 planet-pulse transition-all duration-300 group-hover:scale-110 rounded-full ${
                        selectedPlanet === planet.id ? "planet-glow animate-pulse" : ""
                      }`}
                      style={{
                        background: `linear-gradient(135deg, ${planet.colorHex}, ${planet.colorHex}dd)`,
                        boxShadow: `0 0 20px ${planet.colorHex}40`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-full"></div>
                    {selectedPlanet === planet.id && (
                      <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-spin" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-bold text-lg group-hover:text-blue-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
                      >
                        {planet.name}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={`text-xs transition-all duration-300 group-hover:scale-110 ${useRetroFont ? "cosmic-font-small cosmic-card" : "glass-card"}`}
                      >
                        #{index + 1}
                      </Badge>
                    </div>
                    <p className={`text-xs text-muted-foreground mb-2 ${useRetroFont ? "cosmic-font-small" : ""}`}>
                      {planet.type}
                    </p>
                    <p
                      className={`text-xs text-muted-foreground leading-relaxed ${useRetroFont ? "cosmic-font-small" : ""}`}
                    >
                      {planet.description.slice(0, 60)}...
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  )
}
