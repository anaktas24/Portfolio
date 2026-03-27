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
    id: 'mercury',
    name: 'Mercury',
    section: 'Education',
    color: '#B0BEC5',
    emissive: '#546E7A',
    radius: 1.6,
    orbitRadius: 10,
    orbitSpeed: 0.7,
    initialAngle: Math.PI / 4,
  },
  {
    id: 'venus',
    name: 'Venus',
    section: 'Achievements',
    color: '#FFCC02',
    emissive: '#FF9800',
    radius: 2.6,
    orbitRadius: 17,
    orbitSpeed: 0.4,
    initialAngle: 0,
  },
  {
    id: 'earth',
    name: 'Earth',
    section: 'About Me',
    color: '#29B6F6',
    emissive: '#0277BD',
    radius: 3.0,
    orbitRadius: 24,
    orbitSpeed: 0.3,
    initialAngle: Math.PI / 3,
  },
  {
    id: 'mars',
    name: 'Mars',
    section: 'Projects',
    color: '#EF5350',
    emissive: '#B71C1C',
    radius: 2.4,
    orbitRadius: 32,
    orbitSpeed: 0.22,
    initialAngle: Math.PI,
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    section: 'Skills',
    color: '#FF8A65',
    emissive: '#E64A19',
    radius: 5.5,
    orbitRadius: 46,
    orbitSpeed: 0.16,
    initialAngle: Math.PI / 2,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    section: 'Contact',
    color: '#FFA726',
    emissive: '#E65100',
    radius: 4.0,
    orbitRadius: 62,
    orbitSpeed: 0.12,
    initialAngle: Math.PI * 1.5,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    section: 'Experience',
    color: '#26C6DA',
    emissive: '#00838F',
    radius: 3.4,
    orbitRadius: 78,
    orbitSpeed: 0.08,
    initialAngle: Math.PI * 0.7,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    section: 'Open Source',
    color: '#3F51B5',
    emissive: '#1A237E',
    radius: 3.2,
    orbitRadius: 94,
    orbitSpeed: 0.04,
    initialAngle: Math.PI * 1.2,
  },
]
