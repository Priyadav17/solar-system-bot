export interface Planet {
  id: string
  name: string
  type: string
  description: string
  distanceFromSun: string
  diameter: string
  dayLength: string
  yearLength: string
  temperature: string
  moons: string
  color: string
  colorHex: string
  composition: string
  facts: string[]
}

export const planetsData: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    type: "Terrestrial Planet",
    description: "The smallest planet and closest to the Sun with extreme temperature variations",
    distanceFromSun: "57.9 million km (0.39 AU)",
    diameter: "4,879 km",
    dayLength: "59 Earth days",
    yearLength: "88 Earth days",
    temperature: "-173°C to 427°C",
    moons: "0",
    color: "bg-gray-400",
    colorHex: "#9CA3AF",
    composition:
      "Mercury has a large iron core (75% of its radius) surrounded by a thin silicate mantle and crust. Its surface is heavily cratered and resembles our Moon, with no atmosphere to protect it from impacts.",
    facts: [
      "Mercury is the fastest planet, orbiting the Sun in just 88 Earth days at 47.87 km/s",
      "Despite being closest to the Sun, it's not the hottest planet - Venus holds that record",
      "It has extreme temperature variations: 800°F (427°C) during day, -300°F (-184°C) at night",
      "Mercury has no atmosphere to retain heat or protect from meteorite impacts",
      "It's only slightly larger than Earth's Moon and smaller than Jupiter's moons Ganymede and Titan",
      "The planet has a very eccentric orbit, varying from 46 to 70 million km from the Sun",
    ],
  },
  {
    id: "venus",
    name: "Venus",
    type: "Terrestrial Planet",
    description: "The hottest planet with a toxic atmosphere and retrograde rotation",
    distanceFromSun: "108.2 million km (0.72 AU)",
    diameter: "12,104 km",
    dayLength: "243 Earth days (retrograde)",
    yearLength: "225 Earth days",
    temperature: "462°C average (surface)",
    moons: "0",
    color: "bg-yellow-400",
    colorHex: "#FBBF24",
    composition:
      "Venus has a dense atmosphere of 96% carbon dioxide with sulfuric acid clouds. Its surface features over 1,000 volcanoes, vast plains of solidified lava, and mountain ranges higher than the Himalayas.",
    facts: [
      "Venus rotates backwards (retrograde) compared to most planets - the Sun rises in the west",
      "A day on Venus (243 Earth days) is longer than its year (225 Earth days)",
      "It's the hottest planet in our solar system due to extreme greenhouse effect",
      "Venus has crushing atmospheric pressure - 90 times stronger than Earth's",
      "It's often called Earth's 'evil twin' due to similar size but hostile conditions",
      "The planet is covered by thick clouds of sulfuric acid that reflect sunlight, making it very bright",
    ],
  },
  {
    id: "earth",
    name: "Earth",
    type: "Terrestrial Planet",
    description: "Our home planet, the only known planet with life and liquid water",
    distanceFromSun: "149.6 million km (1.00 AU)",
    diameter: "12,756 km",
    dayLength: "24 hours",
    yearLength: "365.25 days",
    temperature: "-89°C to 58°C (average 15°C)",
    moons: "1 (The Moon)",
    color: "bg-blue-500",
    colorHex: "#3B82F6",
    composition:
      "Earth has a layered structure: iron-nickel core, silicate mantle, and thin crust. 71% of its surface is covered by water oceans, with continents making up the remaining 29%.",
    facts: [
      "Earth is the only known planet with life, hosting millions of species",
      "71% of Earth's surface is covered by water, earning it the nickname 'Blue Planet'",
      "It has a protective magnetic field that shields us from harmful solar radiation",
      "Earth's atmosphere is 78% nitrogen, 21% oxygen, and 1% other gases",
      "It's the densest planet in our solar system (5.52 g/cm³)",
      "The Moon stabilizes Earth's axial tilt, preventing extreme climate variations",
    ],
  },
  {
    id: "mars",
    name: "Mars",
    type: "Terrestrial Planet",
    description: "The Red Planet, a cold desert world with the largest volcano in the solar system",
    distanceFromSun: "227.9 million km (1.52 AU)",
    diameter: "6,792 km",
    dayLength: "24.6 hours (24h 37m)",
    yearLength: "687 Earth days (1.88 Earth years)",
    temperature: "-87°C to -5°C (average -80°C)",
    moons: "2 (Phobos and Deimos)",
    color: "bg-red-500",
    colorHex: "#EF4444",
    composition:
      "Mars has a thin atmosphere (1% of Earth's) mostly of carbon dioxide. Its surface features the largest volcano (Olympus Mons) and canyon (Valles Marineris) in the solar system, plus polar ice caps.",
    facts: [
      "Mars has the largest volcano in the solar system: Olympus Mons (21 km high, 600 km wide)",
      "It has polar ice caps made of water ice and frozen carbon dioxide (dry ice)",
      "Mars experiences massive dust storms that can cover the entire planet for months",
      "Evidence suggests Mars once had liquid water flowing on its surface billions of years ago",
      "It's home to Valles Marineris, a canyon system 4,000 km long and up to 7 km deep",
      "Mars has seasons similar to Earth due to its 25° axial tilt",
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas Giant",
    description: "The largest planet with a Great Red Spot storm and protective role for inner planets",
    distanceFromSun: "778.5 million km (5.20 AU)",
    diameter: "142,984 km",
    dayLength: "9.9 hours",
    yearLength: "12 Earth years",
    temperature: "-108°C (cloud tops)",
    moons: "95+ known moons (including 4 Galilean moons)",
    color: "bg-orange-400",
    colorHex: "#FB923C",
    composition:
      "Jupiter is 89% hydrogen and 10% helium with traces of methane, water, and ammonia. It likely has a rocky core surrounded by metallic hydrogen under extreme pressure.",
    facts: [
      "Jupiter is more massive than all other planets combined (2.5 times)",
      "The Great Red Spot is a storm larger than Earth that has raged for over 400 years",
      "It acts as a 'cosmic vacuum cleaner,' protecting inner planets from asteroids and comets",
      "Jupiter has a faint ring system discovered in 1979 by Voyager 1",
      "Its four largest moons (Io, Europa, Ganymede, Callisto) were discovered by Galileo in 1610",
      "Jupiter emits more heat than it receives from the Sun due to gravitational compression",
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    type: "Gas Giant",
    description: "The ringed planet with spectacular ice rings and hexagonal polar storms",
    distanceFromSun: "1.43 billion km (9.58 AU)",
    diameter: "120,536 km",
    dayLength: "10.7 hours",
    yearLength: "29 Earth years",
    temperature: "-139°C (cloud tops)",
    moons: "146+ known moons (including Titan and Enceladus)",
    color: "bg-yellow-300",
    colorHex: "#FDE047",
    composition:
      "Saturn is primarily hydrogen (96%) and helium (3%) with the lowest density of any planet. Its famous rings are made of countless ice and rock particles ranging from tiny grains to house-sized chunks.",
    facts: [
      "Saturn is less dense than water (0.687 g/cm³) and would theoretically float",
      "Its rings span up to 282,000 km but are only about 10 meters thick on average",
      "Saturn has a unique hexagonal storm at its north pole, each side larger than Earth",
      "It has the most extensive and visible ring system of any planet",
      "Titan, its largest moon, has lakes and rivers of liquid methane and ethane",
      "Saturn's rings are made of 99% water ice with traces of rocky material",
    ],
  },
  {
    id: "uranus",
    name: "Uranus",
    type: "Ice Giant",
    description: "The tilted ice giant that rotates on its side with faint rings",
    distanceFromSun: "2.87 billion km (19.22 AU)",
    diameter: "51,118 km",
    dayLength: "17.2 hours (retrograde)",
    yearLength: "84 Earth years",
    temperature: "-197°C (coldest planetary atmosphere)",
    moons: "27+ known moons",
    color: "bg-cyan-400",
    colorHex: "#22D3EE",
    composition:
      "Uranus is composed of water, methane, and ammonia ices surrounding a small rocky core. Its blue-green color comes from methane in its atmosphere absorbing red light.",
    facts: [
      "Uranus rotates on its side at a 98-degree angle, likely due to an ancient collision",
      "It was the first planet discovered with a telescope by William Herschel in 1781",
      "Uranus has 13 known rings, discovered in 1977, much fainter than Saturn's",
      "Its extreme tilt causes unusual seasons lasting 21 Earth years each",
      "It's the coldest planetary atmosphere in the solar system despite not being farthest from Sun",
      "Uranus has a unique magnetic field tilted 59° from its rotational axis",
    ],
  },
  {
    id: "neptune",
    name: "Neptune",
    type: "Ice Giant",
    description: "The windiest planet with supersonic storms and a backwards-orbiting moon",
    distanceFromSun: "4.5 billion km (30.05 AU)",
    diameter: "49,528 km",
    dayLength: "16.1 hours",
    yearLength: "165 Earth years",
    temperature: "-201°C (cloud tops)",
    moons: "16+ known moons (including Triton)",
    color: "bg-blue-600",
    colorHex: "#2563EB",
    composition:
      "Neptune has a similar composition to Uranus with water, methane, and ammonia ices. It has the strongest winds in the solar system and an active, dynamic atmosphere.",
    facts: [
      "Neptune has the fastest winds in the solar system, reaching up to 2,100 km/h (1,300 mph)",
      "It was discovered in 1846 through mathematical predictions rather than observation",
      "Neptune takes 165 Earth years to complete one orbit around the Sun",
      "It has a Great Dark Spot (similar to Jupiter's Great Red Spot) that comes and goes",
      "Triton, its largest moon, orbits backwards and is likely a captured Kuiper Belt object",
      "Neptune radiates 2.6 times more energy than it receives from the Sun",
    ],
  },
]
