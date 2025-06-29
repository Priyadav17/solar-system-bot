"use client"

import { Moon, Sun, Zap, Rocket, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

interface NavbarProps {
  useRetroFont: boolean
  setUseRetroFont: (value: boolean) => void
}

export function Navbar({ useRetroFont, setUseRetroFont }: NavbarProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav
        className={`sticky top-0 z-50 border-b backdrop-blur-xl ${useRetroFont ? "cosmic-card" : "glass-card border-border/20"}`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full planet-pulse animate-spin-slow"></div>
              <Rocket className="absolute inset-0 m-auto h-6 w-6 text-white" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Solar System Explorer</h1>
              <p className="text-xs text-muted-foreground">Journey Through Space</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="w-40 h-10 glass-card rounded-full animate-pulse"></div>
            <div className="w-12 h-12 glass-card rounded-full animate-pulse"></div>
          </div>
        </div>
      </nav>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${useRetroFont ? "cosmic-card" : "glass-card border-border/20"} shadow-lg`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <div
              className={`w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full planet-pulse animate-spin-slow group-hover:animate-pulse transition-all duration-300`}
            ></div>
            <Rocket className="absolute inset-0 m-auto h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse">
              <Sparkles className="w-3 h-3 text-yellow-900 absolute inset-0 m-auto" />
            </div>
          </div>
          <div>
            <h1
              className={`text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 ${useRetroFont ? "cosmic-font-title" : ""}`}
            >
              Solar System Explorer
            </h1>
            <p className={`text-xs text-muted-foreground ${useRetroFont ? "cosmic-font-small" : ""}`}>
              Journey Through Space • Discover the Cosmos
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {/* Font Toggle */}
          <div
            className={`flex items-center space-x-3 px-4 py-2 transition-all duration-300 hover:scale-105 ${useRetroFont ? "cosmic-card" : "glass-card rounded-full border border-white/10"}`}
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            <Label
              htmlFor="font-toggle"
              className={`text-sm font-medium cursor-pointer ${useRetroFont ? "cosmic-font-small" : ""}`}
            >
              Cosmic Mode
            </Label>
            <Switch
              id="font-toggle"
              checked={useRetroFont}
              onCheckedChange={setUseRetroFont}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-cyan-500 data-[state=checked]:to-purple-500"
            />
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`w-12 h-12 transition-all duration-300 hover:scale-110 ${useRetroFont ? "cosmic-button" : "rounded-full glass-card hover:bg-white/10 border border-white/10"}`}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300 hover:rotate-180" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600 transition-all duration-300 hover:rotate-12" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
