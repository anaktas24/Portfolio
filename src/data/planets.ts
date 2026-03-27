export interface PlanetData {
  id: string
  name: string
  section: string
  color: string
  emissive: string
  radius: number
  orbitRadius: number
  orbitSpeed: number
  initialAngle: number
}

export const PLANETS: PlanetData[] = [
  {
    id: 'venus',
    name: 'Venus',
    section: 'Skills',
    color: '#FFCC02',
    emissive: '#FF9800',
    radius: 1.2,
    orbitRadius: 14,
    orbitSpeed: 0.4,
    initialAngle: 0,
  },
  {
    id: 'earth',
    name: 'Earth',
    section: 'About Me',
    color: '#29B6F6',
    emissive: '#0277BD',
    radius: 1.4,
    orbitRadius: 20,
    orbitSpeed: 0.3,
    initialAngle: Math.PI / 3,
  },
  {
    id: 'mars',
    name: 'Mars',
    section: 'Projects',
    color: '#EF5350',
    emissive: '#B71C1C',
    radius: 1.1,
    orbitRadius: 27,
    orbitSpeed: 0.22,
    initialAngle: Math.PI,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    section: 'Contact',
    color: '#FFA726',
    emissive: '#E65100',
    radius: 1.8,
    orbitRadius: 36,
    orbitSpeed: 0.14,
    initialAngle: Math.PI * 1.5,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    section: 'Experience',
    color: '#26C6DA',
    emissive: '#00838F',
    radius: 1.6,
    orbitRadius: 46,
    orbitSpeed: 0.09,
    initialAngle: Math.PI * 0.7,
  },
]
