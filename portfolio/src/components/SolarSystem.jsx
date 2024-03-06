// SolarSystem.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Sun from './Sun';
import Earth from './Earth';

const SolarSystem = () => {
  const containerRef = useRef(null);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.set(0, 0, 20);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Render the Sun component and add its mesh to the scene
    const sunMesh = <Sun scene={scene} />;
    scene.add(sunMesh);

    // Render the Earth component and add its mesh to the scene
    const earthMesh = <Earth scene={scene} />;
    scene.add(earthMesh);

    // Add background image
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load('./assets/background.jpg');

    scene.background = backgroundTexture;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth around the sun
      if (scene.children.length > 0) {
        const earthMesh = scene.children.find(child => child.name === "earthMesh");
        if (earthMesh) {
          earthMesh.position.x = 5 * Math.cos(Date.now() * 0.001);
          earthMesh.position.z = 5 * Math.sin(Date.now() * 0.001);
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      containerRef.current.removeChild(renderer.domElement);
    };
  }, [renderer, scene, camera]);

  return (
    <div ref={containerRef} />
  );
};

export default SolarSystem;
