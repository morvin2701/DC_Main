import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows, OrbitControls, TorusKnot, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const JewelModel = ({ position, scale = 1, rotationSpeed = 0.5 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <TorusKnot ref={meshRef} args={[0.8, 0.3, 128, 32]} position={position} scale={scale}>
        {/* @ts-ignore */}
        <meshPhysicalMaterial 
          color="#D97706" // Gold color
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
          transmission={0.9} // For gemstone-like transparency
          opacity={0.9}
          transparent={true}
        />
      </TorusKnot>
    </Float>
  );
};

const RingModel = ({ position, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8} floatingRange={[-0.05, 0.05]}>
      <Torus ref={meshRef} args={[1, 0.3, 32, 100]} position={position} scale={scale}>
        {/* @ts-ignore */}
        <meshPhysicalMaterial 
          color="#FBBF24" // Yellow gold
          metalness={0.95}
          roughness={0.05}
          clearcoat={1}
          reflectivity={0.9}
        />
      </Torus>
    </Float>
  );
};

const Gemstone = ({ position, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.7;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2} floatingRange={[-0.15, 0.15]}>
      <Octahedron ref={meshRef} args={[0.8, 0]} position={position} scale={scale}>
        {/* @ts-ignore */}
        <meshPhysicalMaterial 
          color="#3B82F6" // Blue sapphire
          metalness={0.1}
          roughness={0.05}
          clearcoat={0.5}
          transmission={0.95}
          opacity={0.8}
          transparent={true}
          reflectivity={0.9}
        />
      </Octahedron>
    </Float>
  );
};

const JewelShowcase = ({ className = "" }) => {
  return (
    <div className={`w-full h-96 ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 10], fov: 50 }} 
        dpr={[1, 2]} 
        className="bg-transparent"
      >
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
        
        <JewelModel position={[0, 1, 0]} scale={0.8} rotationSpeed={0.3} />
        <RingModel position={[-3, -1, 0]} scale={0.6} />
        <Gemstone position={[3, -0.5, 0]} scale={0.7} />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
};

export default JewelShowcase;