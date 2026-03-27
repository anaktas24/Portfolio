import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Floating bio card — a stylized 3D panel
function BioCard({ position, label, value, color }: { position: [number, number, number]; label: string; value: string; color: string }) {
  const groupRef = useRef<THREE.Group>(null)
  const baseY = position[1]

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.15
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Panel backing */}
      <mesh>
        <boxGeometry args={[3, 0.9, 0.05]} />
        <meshStandardMaterial color="#0D1B2A" emissive="#0D47A1" emissiveIntensity={0.3} transparent opacity={0.85} />
      </mesh>
      <Text position={[0, 0.18, 0.05]} fontSize={0.18} color={color} anchorX="center">{label}</Text>
      <Text position={[0, -0.12, 0.05]} fontSize={0.26} color="white" anchorX="center">{value}</Text>
    </group>
  )
}

export default function Earth() {
  return (
    <BasePlanet
      id="earth"
      name="Earth"
      section="About Me"
      color="#29B6F6"
      emissive="#0277BD"
      radius={1.4}
      orbitRadius={20}
      orbitSpeed={0.3}
      initialAngle={Math.PI / 3}
    >
      {/* Name heading */}
      <Text position={[0, 4.5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#29B6F6" outlineWidth={0.02}>
        YOUR NAME
      </Text>
      <Text position={[0, 3.7, 0]} fontSize={0.28} color="#29B6F6" anchorX="center" letterSpacing={0.08}>
        Full Stack Developer
      </Text>

      {/* Bio cards — placeholder content */}
      <BioCard position={[-2.8, 2.2, 0]} label="BASED IN" value="Your City" color="#29B6F6" />
      <BioCard position={[2.8, 1.6, 0]} label="EXPERIENCE" value="X Years" color="#4FC3F7" />
      <BioCard position={[-2.8, 0.8, 0]} label="PASSION" value="Building Things" color="#29B6F6" />
      <BioCard position={[2.8, 0.2, 0]} label="FOCUS" value="Web & 3D" color="#4FC3F7" />
    </BasePlanet>
  )
}
