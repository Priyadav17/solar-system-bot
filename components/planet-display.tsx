"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Planet } from "@/lib/planets-data"
import { AnimatedPlanet } from "@/components/animated-planet"
import { Thermometer, Clock, Ruler, Globe, Sparkles, Star } from "lucide-react"

interface PlanetDisplayProps {
  planet: Planet
  useRetroFont?: boolean
}

export function PlanetDisplay({ planet, useRetroFont = false }: PlanetDisplayProps) {
  return (
    <div className="space-y-8">
      {/* Enhanced Hero Section */}
      <div className="text-center space-y-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative space-y-4">
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-yellow-400 mr-3 animate-pulse" />
            <Badge
              variant="secondary"
              className={`text-sm px-6 py-3 border transition-all duration-300 hover:scale-105 ${useRetroFont ? "cosmic-card retro-font-small" : "glass-card border-white/20 rounded-full"}`}
            >
              {planet.type}
            </Badge>
            <Star className="w-6 h-6 text-yellow-400 ml-3 animate-pulse" />
          </div>
          <h1
            className={`text-6xl font-bold gradient-text hover:scale-105 transition-transform duration-300 ${useRetroFont ? "cosmic-font-title" : ""}`}
          >
            {planet.name}
          </h1>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${useRetroFont ? "cosmic-font" : ""}`}
          >
            {planet.description}
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Enhanced Animated Planet */}
        <div className="flex justify-center py-8 relative">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-2xl"></div>
          <AnimatedPlanet planet={planet} useRetroFont={useRetroFont} />
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          className={`hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 ${useRetroFont ? "cosmic-card" : "glass-card border border-white/10"}`}
        >
          <CardContent className="p-6 text-center">
            <div className="relative">
              <Ruler className="h-8 w-8 mx-auto mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className={`text-sm text-muted-foreground mb-1 ${useRetroFont ? "cosmic-font-small" : ""}`}>
              Distance from Sun
            </p>
            <p
              className={`text-2xl font-bold group-hover:text-blue-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
            >
              {planet.distanceFromSun}
            </p>
          </CardContent>
        </Card>

        <Card
          className={`hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 ${useRetroFont ? "cosmic-card" : "glass-card border border-white/10"}`}
        >
          <CardContent className="p-6 text-center">
            <div className="relative">
              <Globe className="h-8 w-8 mx-auto mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className={`text-sm text-muted-foreground mb-1 ${useRetroFont ? "cosmic-font-small" : ""}`}>Diameter</p>
            <p
              className={`text-2xl font-bold group-hover:text-green-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
            >
              {planet.diameter}
            </p>
          </CardContent>
        </Card>

        <Card
          className={`hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 ${useRetroFont ? "cosmic-card" : "glass-card border border-white/10"}`}
        >
          <CardContent className="p-6 text-center">
            <div className="relative">
              <Clock className="h-8 w-8 mx-auto mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className={`text-sm text-muted-foreground mb-1 ${useRetroFont ? "cosmic-font-small" : ""}`}>
              Day Length
            </p>
            <p
              className={`text-2xl font-bold group-hover:text-purple-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
            >
              {planet.dayLength}
            </p>
          </CardContent>
        </Card>

        <Card
          className={`hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 ${useRetroFont ? "cosmic-card" : "glass-card border border-white/10"}`}
        >
          <CardContent className="p-6 text-center">
            <div className="relative">
              <Thermometer className="h-8 w-8 mx-auto mb-3 text-red-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-red-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className={`text-sm text-muted-foreground mb-1 ${useRetroFont ? "cosmic-font-small" : ""}`}>
              Temperature
            </p>
            <p
              className={`text-2xl font-bold group-hover:text-red-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
            >
              {planet.temperature}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Detailed Information */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card
          className={`hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 ${useRetroFont ? "cosmic-card" : "glass-card border border-white/10"}`}
        >
          <CardHeader className="relative">
            <div className="absolute top-4 right-4">
              <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            </div>
            <CardTitle
              className={`text-2xl gradient-text group-hover:scale-105 transition-transform duration-300 ${useRetroFont ? "cosmic-font-large" : ""}`}
            >
              Planet Facts
            </CardTitle>
            <CardDescription className={useRetroFont ? "cosmic-font-small" : ""}>
              Fascinating discoveries about {planet.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {planet.facts.map((fact, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 p-4 transition-all duration-300 hover:scale-105 group/fact ${useRetroFont ? "cosmic-card" : "rounded-lg glass-card border border-white/10"}`}
              >
                <div
                  className={`w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 group-hover/fact:scale-110 rounded-full`}
                >
                  <span className={`text-xs font-bold text-white ${useRetroFont ? "cosmic-font-small" : ""}`}>
                    {index + 1}
                  </span>
                </div>
                <p
                  className={`leading-relaxed group-hover/fact:text-blue-400 transition-colors ${useRetroFont ? "cosmic-font-small" : ""}`}
                >
                  {fact}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card
          className={`hover-lift group transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 ${useRetroFont ? "cosmic-card" : "glass-card border border-white/10"}`}
        >
          <CardHeader className="relative">
            <div className="absolute top-4 right-4">
              <Star className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
            <CardTitle
              className={`text-2xl gradient-text group-hover:scale-105 transition-transform duration-300 ${useRetroFont ? "cosmic-font-large" : ""}`}
            >
              Composition & Structure
            </CardTitle>
            <CardDescription className={useRetroFont ? "cosmic-font-small" : ""}>
              What {planet.name} is made of
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className={`leading-relaxed ${useRetroFont ? "cosmic-font-small" : ""}`}>{planet.composition}</p>

            <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid grid-cols-2 gap-4">
              <div
                className={`text-center p-4 transition-all duration-300 hover:scale-105 group/stat ${useRetroFont ? "cosmic-card" : "rounded-lg glass-card border border-white/10"}`}
              >
                <p className={`text-sm text-muted-foreground mb-1 ${useRetroFont ? "cosmic-font-small" : ""}`}>
                  Year Length
                </p>
                <p
                  className={`text-lg font-bold group-hover/stat:text-blue-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
                >
                  {planet.yearLength}
                </p>
              </div>
              <div
                className={`text-center p-4 transition-all duration-300 hover:scale-105 group/stat ${useRetroFont ? "cosmic-card" : "rounded-lg glass-card border border-white/10"}`}
              >
                <p className={`text-sm text-muted-foreground mb-1 ${useRetroFont ? "cosmic-font-small" : ""}`}>
                  Known Moons
                </p>
                <p
                  className={`text-lg font-bold group-hover/stat:text-purple-400 transition-colors ${useRetroFont ? "cosmic-font" : ""}`}
                >
                  {planet.moons}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
