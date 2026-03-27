import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import BasePlanet from './BasePlanet'

// Rotating satellite dish made from simple geometry
function SatelliteDish({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.6
    }
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Dish */}
      <mesh rotation={[-Math.PI / 4, 0, 0]}>
        <coneGeometry args={[1.2, 0.3, 32, 1, true]} />
        <meshStandardMaterial color="#FFA726" emissive="#E65100" emissiveIntensity={0.5} side={THREE.DoubleSide} wireframe />
      </mesh>
      {/* Stand */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 1.2, 8]} />
        <meshStandardMaterial color="#BDBDBD" emissive="#757575" emissiveIntensity={0.3} />
      </mesh>
      {/* Signal rings */}
      {[1.5, 2.2, 3].map((r, i) => (
        <mesh key={r} rotation={[-Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[r, 0.03, 8, 64]} />
          <meshStandardMaterial color="#FFA726" emissive="#FFA726" emissiveIntensity={2} transparent opacity={0.6 - i * 0.15} />
        </mesh>
      ))}
    </group>
  )
}

// Saturn rings geometry — passed as `rings` prop to BasePlanet
export function SaturnRings() {
  return (
    <>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.5, 7.8, 128]} />
        <meshStandardMaterial color="#C8A96E" emissive="#A1732A" emissiveIntensity={0.4} side={THREE.DoubleSide} transparent opacity={0.75} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[8.2, 9.8, 128]} />
        <meshStandardMaterial color="#9E7B3F" emissive="#6D4C22" emissiveIntensity={0.2} side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>
    </>
  )
}

export default function Saturn() {
  return (
    <BasePlanet
      id="saturn"
      name="Saturn"
      section="Contact"
      color="#FFA726"
      emissive="#E65100"
      radius={4.0}
      orbitRadius={62}
      orbitSpeed={0.12}
      initialAngle={Math.PI * 1.5}
      rings={<SaturnRings />}
    >
      <Text position={[0, 5.5, 0]} fontSize={0.55} color="white" anchorX="center" outlineColor="#FFA726" outlineWidth={0.02}>
        CONTACT
      </Text>
      <Text position={[0, 4.6, 0]} fontSize={0.22} color="#FFCC80" anchorX="center" letterSpacing={0.05}>
        Let's build something together
      </Text>

      {/* Satellite dishes around the planet */}
      <SatelliteDish position={[-3.5, 0.5, 0]} />
      <SatelliteDish position={[3.5, 0.5, 0]} />

      {/* Contact labels */}
      <Text position={[0, 2.5, 0]} fontSize={0.26} color="#FFA726" anchorX="center">✉ your@email.com</Text>
      <Text position={[0, 1.8, 0]} fontSize={0.22} color="#FFCC80" anchorX="center">github.com/yourhandle</Text>
      <Text position={[0, 1.2, 0]} fontSize={0.22} color="#FFCC80" anchorX="center">linkedin.com/in/yourname</Text>
    </BasePlanet>
  )
}
