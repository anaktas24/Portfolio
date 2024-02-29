import React from 'react';
import * as THREE from 'three';

const Earth = ({ scene }) => {
  const earthOrbit = new THREE.Object3D();
  scene.add(earthOrbit);
  const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
  const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
  earthMesh.position.set(10, 0, 0); // Example position, adjust as needed
  earthOrbit.add(earthMesh);

  // Return a placeholder element or fragment
  return null; // or <></>
};

export default Earth;
