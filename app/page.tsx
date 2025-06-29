"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { PlanetMenu } from "@/components/planet-menu"
import { PlanetDisplay } from "@/components/planet-display"
import { BackgroundAnimation } from "@/components/background-animation"
import { ChatSystem } from "@/components/chat-system"
import { planetsData } from "@/lib/planets-data"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Sparkles } from "lucide-react"

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState("earth")
  const [useRetroFont, setUseRetroFont] = useState(false)
  const [showChat, setShowChat] = useState(false)

  return (
    <div className={`min-h-screen space-bg ${useRetroFont ? "retro-font" : ""}`}>
      <BackgroundAnimation useRetroFont={useRetroFont} />
      <Navbar useRetroFont={useRetroFont} setUseRetroFont={setUseRetroFont} />

      <div className="flex relative">
        <PlanetMenu
          selectedPlanet={selectedPlanet}
          onSelectPlanet={setSelectedPlanet}
          planets={planetsData}
          useRetroFont={useRetroFont}
        />

        <main className="flex-1 p-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative">
                <h1
                  className={`text-5xl font-bold mb-4 gradient-text hover:scale-105 transition-transform duration-300 ${useRetroFont ? "retro-font-title text-3xl" : ""}`}
                >
                  Explore the Solar System
                </h1>
                <p className={`text-xl text-muted-foreground max-w-2xl mx-auto ${useRetroFont ? "retro-font" : ""}`}>
                  Journey through space and discover the wonders of our cosmic neighborhood
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                </div>
              </div>
            </div>
            <PlanetDisplay planet={planetsData.find((p) => p.id === selectedPlanet)!} useRetroFont={useRetroFont} />
          </div>
        </main>

        {/* Enhanced Chat Toggle Button */}
        <Button
          onClick={() => setShowChat(!showChat)}
          className={`fixed bottom-6 right-6 z-50 w-16 h-16 shadow-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-2 border-white/20 hover-lift transition-all duration-300 hover:scale-110 ${useRetroFont ? "retro-button" : "rounded-full"}`}
          size="icon"
        >
          {showChat ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="h-6 w-6" />
              <Sparkles className="h-3 w-3 absolute -top-1 -right-1 animate-pulse" />
            </div>
          )}
        </Button>

        {/* Enhanced Chat System */}
        {showChat && (
          <div className="fixed bottom-24 right-6 z-40 animate-in slide-in-from-bottom-5 duration-300">
            <ChatSystem useRetroFont={useRetroFont} />
          </div>
        )}
      </div>
    </div>
  )
}
