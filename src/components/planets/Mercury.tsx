import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Floating book — flat box with spine
function FloatingBook({ position, title, subtitle, color }: {
  position: [number, number, number]
  title: string
  subtitle: string
  color: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.65 + position[0] * 1.5) * 0.12
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + position[2]) * 0.2
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Book cover */}
      <mesh>
        <boxGeometry args={[1.8, 2.4, 0.2]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.6} />
      </mesh>
      {/* Spine */}
      <mesh position={[-0.88, 0, 0]}>
        <boxGeometry args={[0.06, 2.4, 0.22]} />
        <meshStandardMaterial color="#B0BEC5" emissive="#546E7A" emissiveIntensity={0.3} />
      </mesh>
      <Text position={[0, 0.3, 0.12]} fontSize={0.22} color="white" anchorX="center" maxWidth={1.6}>{title}</Text>
      <Text position={[0, -0.2, 0.12]} fontSize={0.16} color="#ECEFF1" anchorX="center" maxWidth={1.6}>{subtitle}</Text>
    </group>
  )
}

const EDUCATION = [
  { title: 'Degree Title', subtitle: 'University Name\n2018–2022', color: '#78909C', position: [-3, 2.5, 0] as [number, number, number] },
  { title: 'Certification', subtitle: 'Issuing Body\n2023', color: '#546E7A', position: [2.5, 2, 0.5] as [number, number, number] },
  { title: 'Course', subtitle: 'Platform\n2024', color: '#607D8B', position: [-2.5, 0.5, -0.5] as [number, number, number] },
]

export default function Mercury() {
  // Small graduation cap floating above the planet
  const capRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (capRef.current) {
      capRef.current.rotation.y += 0.005
      capRef.current.position.y = 2.5 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <BasePlanet
      id="mercury"
      name="Mercury"
      section="Education"
      color="#B0BEC5"
      emissive="#546E7A"
      radius={0.7}
      orbitRadius={8}
      orbitSpeed={0.7}
      initialAngle={Math.PI / 4}
    >
      <Text position={[0, 4.5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#B0BEC5" outlineWidth={0.02}>
        EDUCATION
      </Text>

      {/* Graduation cap above the planet */}
      <group ref={capRef} position={[0, 2.5, 0]}>
        {/* Board */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.2, 0.1, 1.2]} />
          <meshStandardMaterial color="#B0BEC5" emissive="#546E7A" emissiveIntensity={0.8} />
        </mesh>
        {/* Top bump */}
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.55, 16]} />
          <meshStandardMaterial color="#78909C" emissive="#455A64" emissiveIntensity={0.5} />
        </mesh>
        {/* Tassel */}
        <mesh position={[0.45, -0.05, 0.45]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color="#FFF176" emissive="#FFD600" emissiveIntensity={1} />
        </mesh>
      </group>

      {EDUCATION.map((e) => (
        <FloatingBook key={e.title} position={e.position} title={e.title} subtitle={e.subtitle} color={e.color} />
      ))}
    </BasePlanet>
  )
}
