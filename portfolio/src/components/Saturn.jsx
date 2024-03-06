// Saturn.jsx
import { useEffect } from 'react';
import * as THREE from 'three';

const Saturn = ({ scene }) => {
  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF9933 });
    const saturnMesh = new THREE.Mesh(geometry, material);
    saturnMesh.name = "saturnMesh"; // Set a name for easier identification
    scene.add(saturnMesh);

    return () => {
      scene.remove(saturnMesh);
    };
  }, [scene]);

  // Return null since we don't need to render anything in the component
  return null;
};

export default Saturn;
