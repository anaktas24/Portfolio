import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Floating award badge — a stylized medal
function AchievementBadge({ position, title, subtitle, color }: {
  position: [number, number, number]
  title: string
  subtitle: string
  color: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.7 + position[0]) * 0.15
    groupRef.current.rotation.y += 0.005
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Hexagonal badge shape — approximated with a cylinder */}
      <mesh>
        <cylinderGeometry args={[0.6, 0.6, 0.12, 6]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Star on top */}
      <mesh position={[0, 0.1, 0]}>
        <torusGeometry args={[0.3, 0.05, 8, 5]} />
        <meshStandardMaterial color="#FFF176" emissive="#FFD600" emissiveIntensity={2} />
      </mesh>
      {/* Ribbon */}
      <mesh position={[0, -0.85, 0]}>
        <boxGeometry args={[0.15, 1.2, 0.04]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.9} />
      </mesh>
      <Text position={[0, -0.02, 0.1]} fontSize={0.14} color="white" anchorX="center">{title}</Text>
      <Text position={[0.8, 0, 0]} fontSize={0.18} color="white" anchorX="left">{subtitle}</Text>
    </group>
  )
}

const ACHIEVEMENTS = [
  { title: '2024', subtitle: 'Achievement One', color: '#FFD700', position: [-3, 3, 0] as [number, number, number] },
  { title: '2023', subtitle: 'Achievement Two', color: '#C0C0C0', position: [0.5, 2.5, 0] as [number, number, number] },
  { title: '2022', subtitle: 'Achievement Three', color: '#CD7F32', position: [-3, 1.2, 0] as [number, number, number] },
  { title: '2021', subtitle: 'Achievement Four', color: '#FFCC02', position: [0.5, 0.8, 0] as [number, number, number] },
]

export default function Venus() {
  return (
    <BasePlanet
      id="venus"
      name="Venus"
      section="Achievements"
      color="#FFCC02"
      emissive="#FF9800"
      radius={1.2}
      orbitRadius={14}
      orbitSpeed={0.4}
      initialAngle={0}
    >
      <Text position={[0, 5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#FFCC02" outlineWidth={0.02}>
        ACHIEVEMENTS
      </Text>

      {ACHIEVEMENTS.map((a) => (
        <AchievementBadge key={a.subtitle} position={a.position} title={a.title} subtitle={a.subtitle} color={a.color} />
      ))}
    </BasePlanet>
  )
}
