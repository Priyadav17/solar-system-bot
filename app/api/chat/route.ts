import { type NextRequest, NextResponse } from "next/server"

// Mock AI responses for solar system questions
const SOLAR_SYSTEM_RESPONSES: Record<string, string[]> = {
  jupiter: [
    "🪐 Jupiter is absolutely fascinating! It's the largest planet in our solar system - so massive that it could fit all other planets inside it! The Great Red Spot is a storm that's been raging for over 400 years and is larger than Earth itself! 🌪️",
    "🚀 Did you know Jupiter acts as our solar system's 'cosmic vacuum cleaner'? Its massive gravity protects inner planets like Earth by capturing or deflecting asteroids and comets that might otherwise hit us! It has 95+ known moons, including the four Galilean moons discovered by Galileo in 1610! 🌙",
  ],
  saturn: [
    "💍 Saturn's rings are absolutely spectacular! They're made of billions of ice and rock particles, ranging from tiny grains to house-sized chunks. The rings span up to 282,000 km but are only about 10 meters thick on average! 🧊",
    "🌀 Saturn has a unique hexagonal storm at its north pole - each side of this hexagon is larger than Earth! The planet is so light it would actually float in water if you had a bathtub big enough! Its moon Titan has lakes of liquid methane! 🏊‍♂️",
  ],
  mars: [
    "🔴 Mars, the Red Planet, is incredibly fascinating! It has the largest volcano in our solar system - Olympus Mons, which is 21 km high (that's 2.5 times taller than Mount Everest)! The planet gets its red color from iron oxide (rust) on its surface. 🏔️",
    "🚁 Mars has polar ice caps and evidence suggests it once had flowing water! NASA's Perseverance rover and Ingenuity helicopter are currently exploring Mars, searching for signs of ancient microbial life. A day on Mars is 24.6 hours - very similar to Earth! 🛸",
  ],
  venus: [
    "🔥 Venus is the hottest planet in our solar system, even hotter than Mercury! Its surface temperature reaches 462°C due to an extreme greenhouse effect. The atmosphere is 96% carbon dioxide with clouds of sulfuric acid! ☁️",
    "🔄 Venus rotates backwards compared to most planets, and a day on Venus (243 Earth days) is actually longer than its year (225 Earth days)! It's often called Earth's 'evil twin' because they're similar in size but Venus has hellish conditions! 👯‍♀️",
  ],
  earth: [
    "🌍 Earth is the only known planet with life! 71% of its surface is covered by water, and it has a protective magnetic field that shields us from harmful solar radiation. Our atmosphere is perfectly balanced with 78% nitrogen and 21% oxygen! 🌊",
    "🌙 Earth's Moon plays a crucial role in stabilizing our planet's axial tilt, which prevents extreme climate variations. Earth is the densest planet in our solar system and sits in the 'Goldilocks zone' - not too hot, not too cold, but just right for life! 🐻",
  ],
  mercury: [
    "⚡ Mercury is the fastest planet, zipping around the Sun in just 88 Earth days at 47.87 km/s! Despite being closest to the Sun, it's not the hottest planet - that's Venus! Mercury has extreme temperature swings from 427°C during the day to -173°C at night! 🌡️",
    "🌑 Mercury has no atmosphere to retain heat or protect from meteorite impacts, so its surface is heavily cratered like our Moon. It's only slightly larger than Earth's Moon and has a huge iron core that makes up 75% of its radius! 🔩",
  ],
  uranus: [
    "🧊 Uranus is unique because it rotates on its side at a 98-degree angle! This extreme tilt likely resulted from an ancient collision. It's an ice giant composed of water, methane, and ammonia ices, and its blue-green color comes from methane in its atmosphere! 💙",
    "💍 Uranus has 13 known rings (much fainter than Saturn's) and 27+ moons. It has the coldest planetary atmosphere in our solar system despite not being the farthest from the Sun. Its seasons last 21 Earth years each due to its extreme tilt! ❄️",
  ],
  neptune: [
    "💨 Neptune has the fastest winds in our solar system, reaching up to 2,100 km/h! That's supersonic speed! It's the farthest planet from the Sun and takes 165 Earth years to complete one orbit. It was discovered through mathematical predictions rather than direct observation! 🔢",
    "🌀 Neptune has a Great Dark Spot (similar to Jupiter's Great Red Spot) and radiates 2.6 times more energy than it receives from the Sun! Its largest moon, Triton, orbits backwards and is likely a captured Kuiper Belt object with geysers of nitrogen! ⬅️",
  ],
  moons: [
    "🌙 Our solar system has over 200 known moons! Jupiter has 95+ moons including the four Galilean moons: Io (volcanic), Europa (subsurface ocean), Ganymede (largest moon in solar system), and Callisto (heavily cratered)! 🌋",
    "🧊 Saturn's moon Titan has lakes of liquid methane and ethane, while Enceladus shoots ice geysers from its south pole! These moons might harbor conditions suitable for life beneath their icy surfaces! 🏊‍♀️",
  ],
  space: [
    "🚀 Space exploration has revealed incredible discoveries! The Voyager spacecraft, launched in 1977, are still sending data from interstellar space. The James Webb Space Telescope is revolutionizing our understanding of the cosmos! 🔭",
    "🛸 Current missions include NASA's Perseverance on Mars, Juno orbiting Jupiter, and Parker Solar Probe studying the Sun. Future missions plan to return samples from Mars and explore the moons of Jupiter and Saturn! 🔬",
  ],
}

const DEFAULT_RESPONSES = [
  "🌟 That's a great question about our solar system! While I specialize in planetary science, I'd love to help you explore the wonders of space. Try asking me about specific planets, their moons, or space exploration missions! 🚀",
  "🪐 I'm your cosmic guide to the solar system! Ask me about any of the 8 planets, their fascinating moons, or incredible space missions. What aspect of space exploration interests you most? ✨",
  "🌌 The universe is full of amazing discoveries! I can tell you about planetary atmospheres, orbital mechanics, space missions, or any other solar system phenomena. What would you like to explore? 🔭",
]

function findBestResponse(message: string): string {
  const lowerMessage = message.toLowerCase()

  // Check for specific planets or topics
  for (const [topic, responses] of Object.entries(SOLAR_SYSTEM_RESPONSES)) {
    if (lowerMessage.includes(topic)) {
      return responses[Math.floor(Math.random() * responses.length)]
    }
  }

  // Check for general space-related keywords
  const spaceKeywords = [
    "planet",
    "solar",
    "space",
    "orbit",
    "moon",
    "sun",
    "asteroid",
    "comet",
    "mission",
    "nasa",
    "telescope",
  ]
  if (spaceKeywords.some((keyword) => lowerMessage.includes(keyword))) {
    return SOLAR_SYSTEM_RESPONSES.space[Math.floor(Math.random() * SOLAR_SYSTEM_RESPONSES.space.length)]
  }

  // Default response
  return DEFAULT_RESPONSES[Math.floor(Math.random() * DEFAULT_RESPONSES.length)]
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Simulate AI thinking time
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    const response = findBestResponse(message)

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        message:
          "🛸 Houston, we have a problem! My cosmic connection is temporarily disrupted. Please try your question again!",
      },
      { status: 500 },
    )
  }
}
