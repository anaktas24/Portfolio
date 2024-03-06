// Venus.jsx
import { useEffect } from 'react';
import * as THREE from 'three';

const Venus = ({ scene }) => {
  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x99FF33 });
    const venusMesh = new THREE.Mesh(geometry, material);
    venusMesh.name = "venusMesh"; // Set a name for easier identification
    scene.add(venusMesh);

    return () => {
      scene.remove(venusMesh);
    };
  }, [scene]);

  // Return null since we don't need to render anything in the component
  return null;
};

export default Venus;
