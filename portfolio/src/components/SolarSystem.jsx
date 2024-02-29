import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SolarSystem = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create the sun
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sunMesh);

    // Create the planets
    // Example: Earth
    const earthOrbit = new THREE.Object3D();
    scene.add(earthOrbit);
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.set(10, 0, 0); // Example position, adjust as needed
    earthOrbit.add(earthMesh);

    // Example: Mars
    const marsOrbit = new THREE.Object3D();
    scene.add(marsOrbit);
    const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
    marsMesh.position.set(15, 0, 0); // Example position, adjust as needed
    marsOrbit.add(marsMesh);

    // Example: Linking Planets (Click Event)
    earthMesh.onClick = () => {
      window.location.href = '/earth';
    };

    marsMesh.onClick = () => {
      window.location.href = '/mars';
    };

    // Set up the camera position
    camera.position.z = 20;

    // Render function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the planets
      earthOrbit.rotation.y += 0.01;
      marsOrbit.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean-up function
    return () => {
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} />;
};

export default SolarSystem;
