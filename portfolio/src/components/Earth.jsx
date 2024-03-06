// Earth.jsx
import { useEffect } from 'react';
import * as THREE from 'three';

const Earth = ({ scene }) => {
  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const earthMesh = new THREE.Mesh(geometry, material);
    earthMesh.name = "earthMesh"; // Set a name for easier identification
    scene.add(earthMesh);

    return () => {
      scene.remove(earthMesh);
    };
  }, [scene]);

  // Return the mesh object directly
  return null;
};

export default Earth;
