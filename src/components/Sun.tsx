import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useStore } from '../store/useStore'

export default function Sun() {
  const meshRef = useRef<THREE.Mesh>(null)
  const setFocusedPlanet = useStore((s) => s.setFocusedPlanet)
  const focusedPlanet = useStore((s) => s.focusedPlanet)
  const isFocused = focusedPlanet === 'sun'

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.15
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Core */}
      <mesh
        ref={meshRef}
        onClick={() => setFocusedPlanet(isFocused ? null : 'sun')}
        onPointerOver={() => { document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { document.body.style.cursor = 'auto' }}
      >
        <sphereGeometry args={[3, 48, 48]} />
        <meshStandardMaterial
          color="#FFF176"
          emissive="#FFD600"
          emissiveIntensity={2.5}
          roughness={0.9}
        />
      </mesh>

      {/* Corona — outer translucent shell */}
      <mesh>
        <sphereGeometry args={[3.6, 48, 48]} />
        <meshStandardMaterial
          color="#FF8F00"
          emissive="#FF6D00"
          emissiveIntensity={1.5}
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Label */}
      {!isFocused && (
        <Html center position={[0, 4.5, 0]} distanceFactor={60} style={{ pointerEvents: 'none' }}>
          <div style={{ color: '#FFF176', fontSize: 11, fontFamily: 'monospace', letterSpacing: 3, textTransform: 'uppercase', opacity: 0.8, whiteSpace: 'nowrap', textAlign: 'center' }}>
            The Sun
          </div>
        </Html>
      )}
    </group>
  )
}
