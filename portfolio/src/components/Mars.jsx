// Planet.jsx
import React, { useRef } from 'react';
import * as THREE from 'three';

const Mars = ({ scene }) => {
  const marsRef = useRef();

  // Create mars mesh
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const marsMesh = new THREE.Mesh(geometry, material);
  marsMesh.position.x = 5; // Set initial position of the mars
  scene.add(marsMesh);

  return null; // No need to render anything in this component
};

export default Mars;
