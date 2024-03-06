// Sun.jsx
import { useEffect } from 'react';
import * as THREE from 'three';

const Sun = ({ scene }) => {
  useEffect(() => {
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
    const sunMesh = new THREE.Mesh(geometry, material);
    scene.add(sunMesh);

    return () => {
      scene.remove(sunMesh);
    };
  }, [scene]);

  // Return the mesh object directly
  return null;
};

export default Sun;
