import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Html, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FeatureCard3DProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  position?: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
  className?: string;
}

const FloatingGem = ({ position, scale = 1, rotationSpeed = 0.5 }: { position: [number, number, number], scale?: number, rotationSpeed?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
      <Octahedron ref={meshRef} args={[0.5, 0]} position={position} scale={scale}>
        {/* @ts-ignore */}
        <meshPhysicalMaterial 
          color="#8B5CF6" // Purple gemstone
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

const FeatureCard3D: React.FC<FeatureCard3DProps> = ({ 
  title, 
  description, 
  icon, 
  position = [0, 0, 0], 
  scale = 1, 
  rotationSpeed = 0.5,
  className = ""
}) => {
  return (
    <div className={`relative group bg-white rounded-2xl p-8 shadow-lg border border-stone-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${className}`}>
      {/* 3D Element */}
      <div className="absolute -top-10 -right-10 w-24 h-24 opacity-20 group-hover:opacity-40 transition-opacity">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
          {/* @ts-ignore */}
          <ambientLight intensity={0.5} />
          {/* @ts-ignore */}
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          {/* @ts-ignore */}
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="blue" />
          <FloatingGem position={position} scale={scale} rotationSpeed={rotationSpeed} />
          <Environment preset="city" />
          <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 mb-6 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard3D;