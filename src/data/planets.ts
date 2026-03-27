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

// Ordered by distance from the Sun. Saturn and Uranus pushed out to make
// room for Jupiter. Neptune added as the outermost planet.
export const PLANETS: PlanetData[] = [
  {
    id: 'mercury',
    name: 'Mercury',
    section: 'Education',
    color: '#B0BEC5',
    emissive: '#546E7A',
    radius: 0.7,
    orbitRadius: 8,
    orbitSpeed: 0.7,
    initialAngle: Math.PI / 4,
  },
  {
    id: 'venus',
    name: 'Venus',
    section: 'Achievements',
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
    id: 'jupiter',
    name: 'Jupiter',
    section: 'Skills',
    color: '#FF8A65',
    emissive: '#E64A19',
    radius: 2.5,
    orbitRadius: 38,
    orbitSpeed: 0.16,
    initialAngle: Math.PI / 2,
  },
  {
    id: 'saturn',
    name: 'Saturn',
    section: 'Contact',
    color: '#FFA726',
    emissive: '#E65100',
    radius: 1.8,
    orbitRadius: 50,
    orbitSpeed: 0.12,
    initialAngle: Math.PI * 1.5,
  },
  {
    id: 'uranus',
    name: 'Uranus',
    section: 'Experience',
    color: '#26C6DA',
    emissive: '#00838F',
    radius: 1.6,
    orbitRadius: 64,
    orbitSpeed: 0.08,
    initialAngle: Math.PI * 0.7,
  },
  {
    id: 'neptune',
    name: 'Neptune',
    section: 'Open Source',
    color: '#3F51B5',
    emissive: '#1A237E',
    radius: 1.5,
    orbitRadius: 78,
    orbitSpeed: 0.04,
    initialAngle: Math.PI * 1.2,
  },
]
