// Saturn.jsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Saturn = ({ scene }) => {
  useEffect(() => {
    const saturnGroup = new THREE.Group();

    // Create Saturn mesh
    const saturnRadius = 2; // Adjust the radius as needed
    const saturnGeometry = new THREE.SphereGeometry(saturnRadius, 32, 32);
    const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xFF9933 });
    const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturnMesh.name = "saturnMesh";
    saturnGroup.add(saturnMesh);

    // Create Saturn's ring
    const ringRadius = saturnRadius * 1.5; // Adjust the ring radius as needed
    const ringThickness = 0.1; // Adjust the ring thickness as needed
    const ringGeometry = new THREE.TorusGeometry(ringRadius, ringThickness, 32, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 2; // Rotate the ring to be perpendicular to the planet
    saturnMesh.add(ringMesh); // Parent the ring to the Saturn mesh

    // Position the Saturn group within the scene
    scene.add(saturnGroup);

    // Cleanup function
    return () => {
      scene.remove(saturnGroup);
    };
  }, [scene]);

  // Return null since we don't need to render anything in the component
  return null;
};

export default Saturn;
