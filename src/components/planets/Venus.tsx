import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Floating skill orb
function SkillOrb({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.9 + position[0] * 2) * 0.2
    groupRef.current.rotation.y += 0.008
  })

  return (
    <group ref={groupRef} position={position}>
      <mesh>
        <sphereGeometry args={[0.35, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.2} roughness={0.3} metalness={0.5} />
      </mesh>
      <Text position={[0, -0.65, 0]} fontSize={0.2} color="white" anchorX="center">{label}</Text>
    </group>
  )
}

const SKILLS = [
  { label: 'TypeScript', color: '#3178C6', position: [-3, 3, 0] as [number, number, number] },
  { label: 'React', color: '#61DAFB', position: [0, 3.5, 0] as [number, number, number] },
  { label: 'Three.js', color: '#ffffff', position: [3, 3, 0] as [number, number, number] },
  { label: 'Node.js', color: '#68A063', position: [-2.5, 1.5, 2] as [number, number, number] },
  { label: 'Python', color: '#FFD43B', position: [2.5, 1.5, 2] as [number, number, number] },
  { label: 'SQL', color: '#00758F', position: [0, 1.5, -2.5] as [number, number, number] },
]

export default function Venus() {
  return (
    <BasePlanet
      id="venus"
      name="Venus"
      section="Skills"
      color="#FFCC02"
      emissive="#FF9800"
      radius={1.2}
      orbitRadius={14}
      orbitSpeed={0.4}
      initialAngle={0}
    >
      <Text position={[0, 5.2, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#FFCC02" outlineWidth={0.02}>
        SKILLS
      </Text>

      {SKILLS.map((skill) => (
        <SkillOrb key={skill.label} label={skill.label} color={skill.color} position={skill.position} />
      ))}
    </BasePlanet>
  )
}
