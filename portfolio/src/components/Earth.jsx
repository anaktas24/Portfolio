// Planet.jsx
import React, { useRef } from 'react';
import * as THREE from 'three';

const Earth = ({ scene }) => {
  const earthRef = useRef();

  // Create earth mesh
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const earthMesh = new THREE.Mesh(geometry, material);
  earthMesh.position.x = 5; // Set initial position of the earth
  scene.add(earthMesh);

  return null; // No need to render anything in this component
};

export default Earth;
