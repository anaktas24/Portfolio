// Sun.jsx
import React from 'react';
import * as THREE from 'three';

const Sun = ({ scene }) => {
  // Create sun mesh
  const geometry = new THREE.SphereGeometry(2, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
  const sunMesh = new THREE.Mesh(geometry, material);
  scene.add(sunMesh);

  return null; // No need to render anything in this component
};

export default Sun;
