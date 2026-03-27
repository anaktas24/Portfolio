import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import CameraController from './CameraController'
import Sun from './Sun'
import BlackHole from './BlackHole'
import OrbitPath from './OrbitPath'
import Mercury from './planets/Mercury'
import Venus from './planets/Venus'
import Earth from './planets/Earth'
import Mars from './planets/Mars'
import Jupiter from './planets/Jupiter'
import Saturn from './planets/Saturn'
import Uranus from './planets/Uranus'
import Neptune from './planets/Neptune'
import { PLANETS } from '../data/planets'

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 100, 180], fov: 60 }}
      gl={{ antialias: true }}
      style={{ background: '#000008' }}
    >
      <Suspense fallback={null}>
        {/* Lighting — main source is the sun (pointLight at origin) */}
        <ambientLight intensity={0.08} />
        <pointLight position={[0, 0, 0]} intensity={4} distance={400} color="#FFF9C4" />

        {/* Star field */}
        <Stars radius={160} depth={60} count={9000} factor={4} saturation={0} fade speed={0.4} />

        {/* Camera lerp controller */}
        <CameraController />

        {/* Central star */}
        <Sun />

        {/* Black hole at edge of the scene */}
        <BlackHole />

        {/* Orbit paths */}
        {PLANETS.map((planet) => (
          <OrbitPath key={planet.id} radius={planet.orbitRadius} />
        ))}

        {/* Planets — in order from the Sun */}
        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        <Saturn />
        <Uranus />
        <Neptune />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            intensity={1.4}
            luminanceThreshold={0.25}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
