import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Glowing skill orb — same concept as old Venus but bigger to match Jupiter
function SkillOrb({ position, label, color }: {
  position: [number, number, number]
  label: string
  color: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.9 + position[0] * 2) * 0.22
    groupRef.current.rotation.y += 0.007
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} roughness={0.3} metalness={0.5} />
      </mesh>
      <Text position={[0, -0.8, 0]} fontSize={0.22} color="white" anchorX="center">{label}</Text>
    </group>
  )
}

// Jupiter's storm bands — decorative rings around the equator
function StormBands() {
  return (
    <>
      {[-0.6, 0, 0.6].map((y, i) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.6, 0.08, 8, 128]} />
          <meshStandardMaterial
            color="#FF8A65"
            emissive="#BF360C"
            emissiveIntensity={0.4 + i * 0.1}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </>
  )
}

const SKILLS = [
  { label: 'TypeScript', color: '#3178C6', position: [-4.5, 4, 0] as [number, number, number] },
  { label: 'React', color: '#61DAFB', position: [0, 4.5, 0] as [number, number, number] },
  { label: 'Three.js', color: '#ffffff', position: [4.5, 4, 0] as [number, number, number] },
  { label: 'Node.js', color: '#68A063', position: [-4, 2, 2.5] as [number, number, number] },
  { label: 'Python', color: '#FFD43B', position: [4, 2, 2.5] as [number, number, number] },
  { label: 'PostgreSQL', color: '#00758F', position: [0, 2, -4] as [number, number, number] },
  { label: 'Docker', color: '#2496ED', position: [-3.5, 0.5, -2.5] as [number, number, number] },
  { label: 'Git', color: '#F05032', position: [3.5, 0.5, -2.5] as [number, number, number] },
]

export default function Jupiter() {
  return (
    <BasePlanet
      id="jupiter"
      name="Jupiter"
      section="Skills"
      color="#FF8A65"
      emissive="#E64A19"
      radius={2.5}
      orbitRadius={38}
      orbitSpeed={0.16}
      initialAngle={Math.PI / 2}
      rings={<StormBands />}
    >
      <Text position={[0, 6.5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#FF8A65" outlineWidth={0.02}>
        SKILLS
      </Text>

      {SKILLS.map((skill) => (
        <SkillOrb key={skill.label} label={skill.label} color={skill.color} position={skill.position} />
      ))}
    </BasePlanet>
  )
}
