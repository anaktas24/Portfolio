import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

const BLACK_HOLE_POSITION: [number, number, number] = [85, 0, -40]

export default function BlackHole() {
  const diskRef = useRef<THREE.Mesh>(null)
  const outerDiskRef = useRef<THREE.Mesh>(null)
  const setFocusedPlanet = useStore((s) => s.setFocusedPlanet)
  const focusedPlanet = useStore((s) => s.focusedPlanet)
  const isFocused = focusedPlanet === 'blackhole'

  useFrame((_, delta) => {
    if (diskRef.current) diskRef.current.rotation.z += delta * 0.6
    if (outerDiskRef.current) outerDiskRef.current.rotation.z -= delta * 0.3
  })

  return (
    <group position={BLACK_HOLE_POSITION}>
      {/* Event horizon — pure black */}
      <mesh
        onClick={() => setFocusedPlanet(isFocused ? null : 'blackhole')}
        onPointerOver={() => { document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { document.body.style.cursor = 'auto' }}
      >
        <sphereGeometry args={[3, 48, 48]} />
        <meshStandardMaterial color="#000000" emissive="#000000" roughness={1} />
      </mesh>

      {/* Inner accretion disk */}
      <mesh ref={diskRef} rotation={[Math.PI / 7, 0, 0]}>
        <torusGeometry args={[5, 1.2, 16, 128]} />
        <meshStandardMaterial
          color="#7B1FA2"
          emissive="#9C27B0"
          emissiveIntensity={2.5}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Outer accretion disk */}
      <mesh ref={outerDiskRef} rotation={[Math.PI / 7, 0, 0]}>
        <torusGeometry args={[7, 0.6, 16, 128]} />
        <meshStandardMaterial
          color="#E91E63"
          emissive="#E91E63"
          emissiveIntensity={1.8}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Label */}
      {!isFocused && (
        <Html center position={[0, 5, 0]} distanceFactor={120} style={{ pointerEvents: 'none' }}>
          <div style={{ color: '#CE93D8', fontSize: 11, fontFamily: 'monospace', letterSpacing: 3, textTransform: 'uppercase', opacity: 0.8, whiteSpace: 'nowrap', textAlign: 'center' }}>
            <div>The Void</div>
            <div style={{ fontSize: 9, color: '#E91E63', marginTop: 2 }}>Author Website</div>
          </div>
        </Html>
      )}
    </group>
  )
}
