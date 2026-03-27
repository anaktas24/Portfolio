import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Floating contribution card — represents an open source repo
function RepoCard({ position, name, description, stars, color }: {
  position: [number, number, number]
  name: string
  description: string
  stars: string
  color: string
}) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2 + position[2]) * 0.06
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Card */}
      <mesh>
        <boxGeometry args={[3.5, 1.6, 0.06]} />
        <meshStandardMaterial color="#0D1B3E" emissive="#1A237E" emissiveIntensity={0.3} transparent opacity={0.88} />
      </mesh>
      {/* Accent line */}
      <mesh position={[-1.72, 0, 0.04]}>
        <boxGeometry args={[0.06, 1.6, 0.02]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={3} />
      </mesh>
      <Text position={[-0.1, 0.42, 0.05]} fontSize={0.22} color={color} anchorX="left" maxWidth={3}>{name}</Text>
      <Text position={[-0.1, 0.05, 0.05]} fontSize={0.16} color="#9FA8DA" anchorX="left" maxWidth={3}>{description}</Text>
      <Text position={[-0.1, -0.35, 0.05]} fontSize={0.18} color="#FFF176" anchorX="left">★ {stars}</Text>
    </group>
  )
}

// Neptune rings
function NeptuneRings() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[4.4, 5.6, 128]} />
      <meshStandardMaterial
        color="#3F51B5"
        emissive="#1A237E"
        emissiveIntensity={0.6}
        side={THREE.DoubleSide}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

const REPOS = [
  { name: 'repo-name-one', description: 'Short description of what it does', stars: '128', color: '#7986CB', position: [-4, 3.5, 0] as [number, number, number] },
  { name: 'repo-name-two', description: 'Short description of what it does', stars: '64', color: '#5C6BC0', position: [2, 2.5, 0] as [number, number, number] },
  { name: 'repo-name-three', description: 'Short description of what it does', stars: '32', color: '#3F51B5', position: [-4, 0.5, 0] as [number, number, number] },
]

export default function Neptune() {
  const atmosphereRef = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (atmosphereRef.current) atmosphereRef.current.rotation.y += delta * 0.06
  })

  return (
    <BasePlanet
      id="neptune"
      name="Neptune"
      section="Open Source"
      color="#3F51B5"
      emissive="#1A237E"
      radius={3.2}
      orbitRadius={94}
      orbitSpeed={0.04}
      initialAngle={Math.PI * 1.2}
      rings={<NeptuneRings />}
    >
      {/* Slow rotating atmosphere shell */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[3.8, 32, 32]} />
        <meshStandardMaterial color="#3F51B5" emissive="#283593" emissiveIntensity={0.4} transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>

      <Text position={[0, 5.5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#3F51B5" outlineWidth={0.02}>
        OPEN SOURCE
      </Text>

      {REPOS.map((repo) => (
        <RepoCard
          key={repo.name}
          name={repo.name}
          description={repo.description}
          stars={repo.stars}
          color={repo.color}
          position={repo.position}
        />
      ))}
    </BasePlanet>
  )
}
