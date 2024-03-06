// SolarSystem.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Sun from './Sun';
import Earth from './Earth';
import Mars from './Mars';
import Saturn from './Saturn';
import Venus from './Venus';

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


    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the Earth around the sun
      const earthMesh = scene.getObjectByName("earthMesh");
      if (earthMesh) {
        earthMesh.position.x = 5 * Math.cos(Date.now() * 0.001);
        earthMesh.position.z = 5 * Math.sin(Date.now() * 0.001);
      }
      // Rotate Mars around the sun
      const marsMesh = scene.getObjectByName("marsMesh");
      if (marsMesh) {
        marsMesh.position.x = 3 * Math.cos(Date.now() * 0.002);
        marsMesh.position.z = 3 * Math.sin(Date.now() * 0.002);
      }
      // Rotate Saturn around the Sun
      const saturnMesh = scene.getObjectByName("saturnMesh");
      if (saturnMesh) {
        saturnMesh.position.x = 9 * Math.cos(Date.now() * 0.001);
        saturnMesh.position.z = 9 * Math.sin(Date.now() * 0.001);
      }

      //Rotate venus around sun
      const venusMesh = scene.getObjectByName("venusMesh");
      if (venusMesh) {
        venusMesh.position.x = 4 * Math.cos(Date.now() * 0.006);
        venusMesh.position.z = 4 * Math.sin(Date.now() * 0.006);
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
    <div ref={containerRef}>
      {/* Render Sun and Earth components */}
      <Sun scene={scene} />
      <Earth scene={scene} />
      <Mars scene={scene}/>
      <Saturn scene={scene}/>
      <Venus scene={scene}/>
    </div>
  );
};

export default SolarSystem;
