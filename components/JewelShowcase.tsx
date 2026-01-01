import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, ContactShadows, OrbitControls, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const DiamondModel = ({ position, scale = 1, rotationSpeed = 0.5, color = "#D97706" }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <Octahedron ref={meshRef} args={[0.8, 0]} position={position} scale={scale}>
        {/* @ts-ignore */}
        <meshPhysicalMaterial 
          color={color}
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
          transmission={0.9} // For gemstone-like transparency
          opacity={0.9}
          transparent={true}
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
        
        <DiamondModel position={[0, 1, 0]} scale={0.8} rotationSpeed={0.3} color="#D97706" />
        <DiamondModel position={[-3, -1, 0]} scale={0.6} rotationSpeed={0.4} color="#FBBF24" />
        <DiamondModel position={[3, -0.5, 0]} scale={0.7} rotationSpeed={0.5} color="#3B82F6" />
        
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