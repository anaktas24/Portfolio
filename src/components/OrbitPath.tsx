import { useMemo } from 'react'
import { Line } from '@react-three/drei'
import * as THREE from 'three'

interface OrbitPathProps {
  radius: number
}

export default function OrbitPath({ radius }: OrbitPathProps) {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = []
    for (let i = 0; i <= 128; i++) {
      const angle = (i / 128) * Math.PI * 2
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius))
    }
    return pts
  }, [radius])

  return <Line points={points} color="#ffffff" lineWidth={0.4} transparent opacity={0.08} />
}
