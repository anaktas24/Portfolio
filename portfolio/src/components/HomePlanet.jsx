// HomePlanet.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function HomePlanet({ scene }) {
  const meshRef = useRef(null);

  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);

    // Set the position of the mesh
    mesh.position.set(0, 0, -10);

    // Add the mesh to the scene
    scene.add(mesh);

    // Save a reference to the mesh for cleanup
    meshRef.current = mesh;

    // Cleanup function
    return () => {
      // Remove the mesh from the scene
      scene.remove(mesh);
      // Dispose geometry and material to free up memory
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  // Return null because the component doesn't render anything
  return null;
}

export default HomePlanet;
