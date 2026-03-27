import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useStore, PlanetId } from '../../store/useStore'
import { planetWorldPositions } from '../../utils/planetPositions'

interface BasePlanetProps {
  id: PlanetId
  name: string
  section: string
  color: string
  emissive: string
  radius: number
  orbitRadius: number
  orbitSpeed: number
  initialAngle: number
  // Extra geometry rendered inside the group (e.g. rings)
  rings?: React.ReactNode
  // 3D diorama rendered when this planet is focused
  children?: React.ReactNode
}

export default function BasePlanet({
  id, name, section, color, emissive,
  radius, orbitRadius, orbitSpeed, initialAngle,
  rings, children,
}: BasePlanetProps) {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const angleRef = useRef(initialAngle)

  const focusedPlanet = useStore((s) => s.focusedPlanet)
  const setFocusedPlanet = useStore((s) => s.setFocusedPlanet)
  const isFocused = focusedPlanet === id

  useFrame((_, delta) => {
    // Slow orbit down when focused so the scene feels calm
    angleRef.current += delta * orbitSpeed * (isFocused ? 0.05 : 1)

    const x = Math.cos(angleRef.current) * orbitRadius
    const z = Math.sin(angleRef.current) * orbitRadius

    if (groupRef.current) {
      groupRef.current.position.set(x, 0, z)
      // Expose position so CameraController can track it
      planetWorldPositions[id] = new THREE.Vector3(x, 0, z)
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.25
    }
  })

  return (
    <group ref={groupRef}>
      {/* Planet sphere */}
      <mesh
        ref={meshRef}
        onClick={() => setFocusedPlanet(isFocused ? null : id)}
        onPointerOver={() => { document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { document.body.style.cursor = 'auto' }}
      >
        <sphereGeometry args={[radius, 48, 48]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={isFocused ? 0.6 : 0.25}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {rings}

      {/* Space-view label — hidden when focused */}
      {!isFocused && (
        <Html center position={[0, radius + 1.2, 0]} distanceFactor={60} style={{ pointerEvents: 'none' }}>
          <div style={{ textAlign: 'center', fontFamily: 'monospace', whiteSpace: 'nowrap' }}>
            <div style={{ color: 'white', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.75 }}>{name}</div>
            <div style={{ color, fontSize: 8, letterSpacing: 1, opacity: 0.6, marginTop: 2 }}>{section}</div>
          </div>
        </Html>
      )}

      {/* Diorama — only rendered when focused */}
      {isFocused && children}
    </group>
  )
}
