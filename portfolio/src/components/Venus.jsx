// Planet.jsx
import React, { useRef } from 'react';
import * as THREE from 'three';

const Venus = ({ scene }) => {
  const venusRef = useRef();

  // Create venus mesh
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const venusMesh = new THREE.Mesh(geometry, material);
  venusMesh.position.x = 5; // Set initial position of the venus
  scene.add(venusMesh);

  return null; // No need to render anything in this component
};

export default Venus;
