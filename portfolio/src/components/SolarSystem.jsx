// SolarSystem.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HomePlanet from './HomePlanet';

function SolarSystem() {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const homePlanetRotationSpeed = 0.01; // Adjust the rotation speed as needed

  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the home planet mesh
      if (scene.children.length > 0) {
        const homePlanet = scene.children.find(child => child.name === "homePlanet");
        if (homePlanet) {
          homePlanet.rotation.y += homePlanetRotationSpeed;
          console.log("Home planet rotation:", homePlanet.rotation.y); // Log rotation value
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [renderer, scene, camera, homePlanetRotationSpeed]);

  return (
    <div ref={containerRef}>
      <HomePlanet scene={scene} />
    </div>
  );
}

export default SolarSystem;
