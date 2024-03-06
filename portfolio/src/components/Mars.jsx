// Mars.jsx
import { useEffect } from 'react';
import * as THREE from 'three';

const Mars = ({ scene }) => {
  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    const marsMesh = new THREE.Mesh(geometry, material);
    marsMesh.name = "marsMesh"; // Set a name for easier identification
    scene.add(marsMesh);

    return () => {
      scene.remove(marsMesh);
    };
  }, [scene]);

  // Return null since we don't need to render anything in the component
  return null;
};

export default Mars;
