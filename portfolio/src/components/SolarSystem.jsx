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
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
  const renderer = new THREE.WebGLRenderer();

  useEffect(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    camera.position.set(0, 10, 17);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate planets around the sun
      const time = Date.now() * 0.001;

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          switch (child.name) {
            case "earthMesh":
              child.position.x = 5 * Math.cos(time);
              child.position.z = 5 * Math.sin(time);
              break;
            case "marsMesh":
              child.position.x = 3 * Math.cos(time * 0.002);
              child.position.z = 3 * Math.sin(time * 0.002);
              break;
            case "saturnMesh":
              child.position.x = 9 * Math.cos(time);
              child.position.z = 9 * Math.sin(time);
              break;
            case "venusMesh":
              child.position.x = 4 * Math.cos(time * 0.006);
              child.position.z = 4 * Math.sin(time * 0.006);
              break;
            default:
              break;
          }
        }
      });

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
      {/* Render Sun and Planets components */}
      <Sun scene={scene} />
      <Earth scene={scene} />
      <Mars scene={scene}/>
      <Saturn scene={scene}/>
      <Venus scene={scene}/>
    </div>
  );
};

export default SolarSystem;
