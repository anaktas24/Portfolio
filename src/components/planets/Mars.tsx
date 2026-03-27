import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Holographic project screen floating in 3D
function ProjectScreen({ position, angle, title, tech }: { position: [number, number, number]; angle: number; title: string; tech: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = angle + Math.sin(state.clock.elapsedTime * 0.5) * 0.08
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + angle) * 0.12
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Screen frame */}
      <mesh>
        <boxGeometry args={[3.2, 2, 0.06]} />
        <meshStandardMaterial color="#1A0A00" emissive="#B71C1C" emissiveIntensity={0.4} transparent opacity={0.9} />
      </mesh>
      {/* Screen glow line at top */}
      <mesh position={[0, 0.9, 0.04]}>
        <boxGeometry args={[3.2, 0.06, 0.02]} />
        <meshStandardMaterial color="#EF5350" emissive="#EF5350" emissiveIntensity={3} />
      </mesh>
      <Text position={[0, 0.35, 0.06]} fontSize={0.28} color="white" anchorX="center">{title}</Text>
      <Text position={[0, -0.1, 0.06]} fontSize={0.18} color="#EF9A9A" anchorX="center">{tech}</Text>
      <Text position={[0, -0.55, 0.06]} fontSize={0.16} color="#EF5350" anchorX="center">[ VIEW PROJECT ]</Text>
    </group>
  )
}

export default function Mars() {
  return (
    <BasePlanet
      id="mars"
      name="Mars"
      section="Projects"
      color="#EF5350"
      emissive="#B71C1C"
      radius={2.4}
      orbitRadius={32}
      orbitSpeed={0.22}
      initialAngle={Math.PI}
    >
      <Text position={[0, 5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#EF5350" outlineWidth={0.02}>
        PROJECTS
      </Text>

      {/* Three project screens arranged around the planet */}
      <ProjectScreen position={[-3.5, 2, 1]} angle={-0.3} title="Project Alpha" tech="React · TypeScript · Three.js" />
      <ProjectScreen position={[3.5, 1.5, -1]} angle={0.3} title="Project Beta" tech="Node.js · PostgreSQL" />
      <ProjectScreen position={[0, 2.5, -3.5]} angle={Math.PI} title="Project Gamma" tech="Python · ML" />
    </BasePlanet>
  )
}
