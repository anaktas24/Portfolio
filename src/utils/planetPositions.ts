import * as THREE from 'three'

// Mutable map updated every frame by each planet component.
// CameraController reads from this to track orbiting planets.
export const planetWorldPositions: Record<string, THREE.Vector3> = {}
