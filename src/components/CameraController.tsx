import { useRef, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useStore } from '../store/useStore'
import { planetWorldPositions } from '../utils/planetPositions'

// Fixed positions for non-orbiting objects
const FIXED_LOOK_AT: Partial<Record<string, THREE.Vector3>> = {
  sun: new THREE.Vector3(0, 0, 0),
  blackhole: new THREE.Vector3(-130, 0, 0),
}
const FIXED_CAMERA_OFFSET: Partial<Record<string, THREE.Vector3>> = {
  sun: new THREE.Vector3(10, 5, 12),
  blackhole: new THREE.Vector3(16, 8, 16),
}

const SPACE_CAMERA_POS = new THREE.Vector3(-20, 80, 150)
const SPACE_LOOK_AT = new THREE.Vector3(-20, 0, 0)
const PLANET_CAMERA_OFFSET = new THREE.Vector3(16, 8, 16)

export default function CameraController() {
  const { camera } = useThree()
  const focusedPlanet = useStore((s) => s.focusedPlanet)

  const targetPos = useRef(SPACE_CAMERA_POS.clone())
  const targetLookAt = useRef(SPACE_LOOK_AT.clone())
  const currentLookAt = useRef(SPACE_LOOK_AT.clone())

  // When returning to space, reset targets
  useEffect(() => {
    if (!focusedPlanet) {
      targetPos.current.copy(SPACE_CAMERA_POS)
      targetLookAt.current.copy(SPACE_LOOK_AT)
    }
  }, [focusedPlanet])

  useFrame(() => {
    if (focusedPlanet) {
      const fixedLookAt = FIXED_LOOK_AT[focusedPlanet]
      const fixedOffset = FIXED_CAMERA_OFFSET[focusedPlanet]

      if (fixedLookAt && fixedOffset) {
        // Sun or black hole — fixed position
        targetLookAt.current.copy(fixedLookAt)
        targetPos.current.copy(fixedLookAt).add(fixedOffset)
      } else {
        // Orbiting planet — track its live position
        const planetPos = planetWorldPositions[focusedPlanet]
        if (planetPos) {
          targetLookAt.current.copy(planetPos)
          targetPos.current.copy(planetPos).add(PLANET_CAMERA_OFFSET)
        }
      }
    }

    camera.position.lerp(targetPos.current, 0.035)
    currentLookAt.current.lerp(targetLookAt.current, 0.035)
    camera.lookAt(currentLookAt.current)
  })

  return null
}
