// Earth.jsx
import React, { useEffect } from 'react';
import * as THREE from 'three';

function HomePlanet({ scene }) {
  useEffect(() => {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    return () => {
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  return null;
}

export default HomePlanet;
