// SolarSystem.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HomePlanet from './HomePlanet';

function SolarSystem() {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.z = 5;

    // Render the HomePlanet component directly
    const homePlanet = <HomePlanet scene={scene} />;

    // Append HomePlanet component to the scene
    scene.add(homePlanet);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
}

export default SolarSystem;
