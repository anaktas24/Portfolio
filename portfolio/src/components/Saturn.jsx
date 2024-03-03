// Planet.jsx
import React, { useRef } from 'react';
import * as THREE from 'three';

const Saturn = ({ scene }) => {
  const SaturnRef = useRef();

  // Create saturn mesh
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const saturnMesh = new THREE.Mesh(geometry, material);
  saturnMesh.position.x = 5; // Set initial position of the Saturn
  scene.add(saturnMesh);

  return null; // No need to render anything in this component
};

export default Saturn;
