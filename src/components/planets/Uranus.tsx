import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Timeline node — a milestone in the experience timeline
function TimelineNode({ position, year, role, company, color }: {
  position: [number, number, number]
  year: string
  role: string
  company: string
  color: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.6 + position[0]) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Node sphere */}
      <mesh>
        <sphereGeometry args={[0.25, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} />
      </mesh>
      {/* Connecting line downward */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} transparent opacity={0.5} />
      </mesh>
      {/* Labels */}
      <Text position={[0.5, 0.3, 0]} fontSize={0.2} color={color} anchorX="left">{year}</Text>
      <Text position={[0.5, 0, 0]} fontSize={0.22} color="white" anchorX="left">{role}</Text>
      <Text position={[0.5, -0.3, 0]} fontSize={0.18} color="#B2EBF2" anchorX="left">{company}</Text>
    </group>
  )
}

// Uranus rings — tilted 90° (Uranus rotates on its side)
function UranusRings() {
  return (
    <>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <ringGeometry args={[2.1, 2.9, 128]} />
        <meshStandardMaterial color="#80DEEA" emissive="#00838F" emissiveIntensity={0.5} side={THREE.DoubleSide} transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <ringGeometry args={[3.1, 3.6, 128]} />
        <meshStandardMaterial color="#4DD0E1" emissive="#006064" emissiveIntensity={0.3} side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
    </>
  )
}

const TIMELINE = [
  { year: '2024', role: 'Senior Developer', company: 'Company Name', color: '#26C6DA' },
  { year: '2022', role: 'Full Stack Developer', company: 'Company Name', color: '#4DD0E1' },
  { year: '2020', role: 'Junior Developer', company: 'Company Name', color: '#80DEEA' },
  { year: '2018', role: 'Intern', company: 'Company Name', color: '#B2EBF2' },
]

export default function Uranus() {
  // Horizontal timeline bar
  const barRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (barRef.current) barRef.current.rotation.y += delta * 0.1
  })

  return (
    <BasePlanet
      id="uranus"
      name="Uranus"
      section="Experience"
      color="#26C6DA"
      emissive="#00838F"
      radius={1.6}
      orbitRadius={64}
      orbitSpeed={0.08}
      initialAngle={Math.PI * 0.7}
      rings={<UranusRings />}
    >
      <Text position={[0, 5.8, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#26C6DA" outlineWidth={0.02}>
        EXPERIENCE
      </Text>

      {/* Vertical timeline */}
      <mesh ref={barRef} position={[-1.5, 2, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 6, 8]} />
        <meshStandardMaterial color="#26C6DA" emissive="#26C6DA" emissiveIntensity={1} transparent opacity={0.4} />
      </mesh>

      {TIMELINE.map((item, i) => (
        <TimelineNode
          key={item.year}
          position={[-1.5, 4 - i * 1.5, 0]}
          year={item.year}
          role={item.role}
          company={item.company}
          color={item.color}
        />
      ))}
    </BasePlanet>
  )
}
