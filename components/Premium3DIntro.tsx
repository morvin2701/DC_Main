import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, Sparkles, ContactShadows, MeshTransmissionMaterial, Torus, Points, PointMaterial, Octahedron, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';
import { motion as m } from 'framer-motion';

// Fix: Cast motion to any to resolve TypeScript errors with MotionProps
const motion = m as any;
import IntroParticles from './IntroParticles';

// Fix TS issues with React Three Fiber elements by allowing any property on IntrinsicElements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface Scene3DProps {
  onIntroComplete?: () => void;
}

const DataRings = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05; // Slower rotation
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    // @ts-ignore: React Three Fiber allows these elements
    <group ref={ref}>
      <Torus args={[1.4, 0.015, 16, 100]} rotation={[1.5, 0, 0]}>
         {/* @ts-ignore: React Three Fiber allows these elements */}
         <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.2} transparent opacity={0.2} />
      </Torus>
      <Torus args={[1.7, 0.008, 16, 100]} rotation={[1.2, 0.4, 0]}>
         {/* @ts-ignore: React Three Fiber allows these elements */}
         <meshStandardMaterial color="#93c5fd" emissive="#60a5fa" emissiveIntensity={0.1} transparent opacity={0.1} />
      </Torus>
    {/* @ts-ignore: React Three Fiber allows these elements */}
    </group>
  );
}

const DataGem = ({ isHovered, visible }: { isHovered: boolean, visible: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x, 
        isHovered ? 0.2 : 0, 
        delta * 2
      );
    }
    if (coreRef.current) {
       coreRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    // @ts-ignore: React Three Fiber allows these elements
    <group scale={visible ? 1 : 0}>
        <Float 
        speed={1} 
        rotationIntensity={0.1} 
        floatIntensity={0.4} 
        floatingRange={[-0.1, 0.1]}
        >
        {/* @ts-ignore: React Three Fiber allows these elements */}
        <group>
            {/* Outer Crystal Shell */}
            {/* @ts-ignore: React Three Fiber allows these elements */}
            <mesh ref={meshRef} scale={1.2}>
            {/* @ts-ignore: React Three Fiber allows these elements */}
            <octahedronGeometry args={[1, 0]} /> 
            <MeshTransmissionMaterial
                backside
                samples={12} 
                resolution={512}
                transmission={0.92}
                roughness={0.05} 
                clearcoat={1}
                clearcoatRoughness={0.1}
                thickness={1.2}
                ior={1.5}
                chromaticAberration={0.4} 
                anisotropy={0.2}
                distortion={0.1}
                distortionScale={0.1}
                temporalDistortion={0.05}
                color="#e0f2fe" 
                attenuationDistance={0.8}
                attenuationColor="#60a5fa"
            />
            {/* @ts-ignore: React Three Fiber allows these elements */}
            </mesh>
            
            {/* Inner Core */}
            {/* @ts-ignore: React Three Fiber allows these elements */}
            <mesh ref={coreRef} scale={0.45}>
            {/* @ts-ignore: React Three Fiber allows these elements */}
            <dodecahedronGeometry args={[1, 0]} />
            {/* @ts-ignore: React Three Fiber allows these elements */}
            <meshStandardMaterial 
                color="#3b82f6" 
                emissive="#2563eb"
                emissiveIntensity={1}
                roughness={0.2}
            />
            {/* @ts-ignore: React Three Fiber allows these elements */}
            </mesh>
            
            <DataRings />
        {/* @ts-ignore: React Three Fiber allows these elements */}
        {/* @ts-ignore: React Three Fiber allows these elements */}
        </group>
        </Float>
    {/* @ts-ignore: React Three Fiber allows these elements */}
    </group>
  );
};

const BackgroundSparkles = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    // @ts-ignore: React Three Fiber allows these elements
    <motion.group 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
    >
      <Sparkles 
        count={40} 
        scale={10} 
        size={2} 
        speed={0.2} 
        opacity={0.4} 
        color="#bae6fd" 
      />
    </motion.group>
  );
};

// Logic to position the gem based on screen size
const ResponsiveGemGroup = ({ children, introPhase }: { children: React.ReactNode, introPhase: string }) => {
  const { viewport, size } = useThree();
  
  // Use a pixel width check or aspect ratio check
  // Generally, mobile is portrait or small width.
  const isMobile = size.width < 1024; // Standard lg breakpoint
  
  let targetX = 0;
  let targetY = 0;
  let targetScale = 1;

  if (isMobile) {
      // Mobile: Top Center
      targetX = 0;
      targetY = viewport.height * 0.22; // Move up approx 22% of viewport height
      targetScale = 0.9;
  } else {
      // Desktop: Right Center
      // Viewport width in ThreeJS units depends on distance (z) and FOV.
      // At z=0, width is visible width.
      targetX = viewport.width * 0.25; // Move to center of right half
      targetY = 0;
      targetScale = 0.4;
  }

  return (
    // @ts-ignore: React Three Fiber allows these elements
    <group position={[targetX, targetY, 0]} rotation={[0, isMobile ? 0 : -0.3, 0]}>
       <motion.group
          initial={{ scale: 0.5, opacity: 0 }}
          animate={introPhase === 'active' ? { scale: 0.5, opacity: 0 } : { scale: targetScale, opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
       >
          {children}
       </motion.group>
    {/* @ts-ignore: React Three Fiber allows these elements */}
    </group>
  );
};

const CameraRig = ({ mode }: { mode: 'intro' | 'main' }) => {
  return (
    // @ts-ignore: React Three Fiber allows these elements
    <motion.group
      initial="intro"
      animate={mode}
      variants={{
        intro: { z: 12, y: 0, rotateX: 0 }, 
        main: { 
          z: 0, 
          y: 0,
          rotateX: 0,
          transition: { 
            duration: 3, 
            ease: [0.16, 1, 0.3, 1], 
          } 
        }
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={35} />
    </motion.group>
  );
};

const Scene3D: React.FC<Scene3DProps> = ({ onIntroComplete }) => {
  const [hovered, setHovered] = useState(false);
  const [introPhase, setIntroPhase] = useState<'active' | 'transitioning' | 'finished'>('active');

  useEffect(() => {
    // Smoother timing sequence
    const timer = setTimeout(() => {
        setIntroPhase('transitioning');
        if(onIntroComplete) setTimeout(onIntroComplete, 1000);
    }, 2500);

    const cleanupTimer = setTimeout(() => {
        setIntroPhase('finished');
    }, 5500); // Give ample time for particles to fade out

    return () => {
        clearTimeout(timer);
        clearTimeout(cleanupTimer);
    };
  }, [onIntroComplete]);

  return (
    <div 
      className="absolute inset-0 w-full h-full z-0"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}> 
        {/* Softer Lighting Setup */}
        {/* @ts-ignore: React Three Fiber allows these elements */}
        <ambientLight intensity={0.6} />
        {/* @ts-ignore: React Three Fiber allows these elements */}
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={0.8} castShadow />
        {/* @ts-ignore: React Three Fiber allows these elements */}
        <spotLight position={[-10, 5, -5]} angle={0.3} penumbra={1} intensity={0.5} color="#93c5fd" />
        
        <Environment preset="city" blur={0.8} />
        
        <CameraRig mode={introPhase === 'active' ? 'intro' : 'main'} />
        
        {/* Intro Particles */}
        {introPhase !== 'finished' && (
            <IntroParticles triggerEnd={introPhase === 'transitioning'} />
        )}

        {/* Dynamic Responsive Group */}
        <ResponsiveGemGroup introPhase={introPhase}>
             <DataGem isHovered={hovered} visible={true} />
        </ResponsiveGemGroup>

        <BackgroundSparkles visible={introPhase !== 'active'} />
        
        <ContactShadows position={[0, -1.8, 0]} opacity={0.2} scale={15} blur={3} far={4} color="#0f172a" />
      </Canvas>
    </div>
  );
};

export default Scene3D;