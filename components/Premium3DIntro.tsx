// @ts-nocheck
import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, ContactShadows, RoundedBox, Html, useProgress, PresentationControls, useTexture, Octahedron } from '@react-three/drei';
import * as THREE from 'three';
import IntroParticles from './IntroParticles';

// Premium Assets for Device Screens
const LAPTOP_IMG = "assets/Next.jpg"; // Analytical Dashboard
const TABLET_IMG = "assets/HeroTablet.PNG"; // Data Visualization
const PHONE_IMG = "assets/HeroMobile.PNG"; // Mobile App Interface

// Custom Loader Component with Premium Styling
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center w-64 p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-2xl border border-white/50">
        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden mb-3">
          <div 
            className="h-full bg-corporate-blue transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">
          Loading Experience {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
};

interface Scene3DProps {
  onIntroComplete?: () => void;
}

// -- Background Animation Elements --
const FloatingFloatingShapes = () => {
  const count = 5;
  const shapes = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5 - 5 // Push back
      ],
      scale: 0.5 + Math.random() * 1.5,
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      speed: 0.2 + Math.random() * 0.5
    }));
  }, []);

  return (
    <group>
      {shapes.map((shape, i) => (
        <Float 
            key={i} 
            speed={shape.speed} 
            rotationIntensity={1} 
            floatIntensity={2} 
            position={shape.position as [number, number, number]}
        >
          <Octahedron args={[1, 0]} scale={shape.scale}>
            <meshPhysicalMaterial 
              color="#f1f5f9" // Very subtle slate
              roughness={0}
              metalness={0.1}
              transmission={0.9}
              transparent
              opacity={0.5}
              thickness={2}
            />
          </Octahedron>
        </Float>
      ))}
    </group>
  );
};


// -- Realistic Device Models --

const LaptopModel = () => {
  const screenTexture = useTexture(LAPTOP_IMG);
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <RoundedBox args={[3.2, 0.2, 2.2]} radius={0.1} smoothness={4} position={[0, -0.1, 0]}>
        <meshPhysicalMaterial 
            color="#0f0f11" // Darker, premium metal
            roughness={0.2} 
            metalness={0.9} 
            clearcoat={0.3}
            clearcoatRoughness={0.2}
        />
      </RoundedBox>
      {/* Screen Hinge Group */}
      <group position={[0, 0, -1]} rotation={[-0.25, 0, 0]}> 
         {/* Screen Chassis */}
         <RoundedBox args={[3.2, 2.1, 0.1]} radius={0.1} smoothness={4} position={[0, 1.05, 0]}>
            <meshPhysicalMaterial 
                color="#0f0f11" 
                roughness={0.2} 
                metalness={0.9}
                clearcoat={0.3} 
            />
         </RoundedBox>
         
         {/* Bezel */}
         <mesh position={[0, 1.05, 0.051]}>
             <planeGeometry args={[3.1, 2.0]} />
             <meshBasicMaterial color="#000000" />
         </mesh>

         {/* Actual Dashboard Image Screen */}
         <mesh position={[0, 1.05, 0.052]}>
            <planeGeometry args={[3.0, 1.9]} />
            <meshBasicMaterial map={screenTexture} toneMapped={false} />
         </mesh>
         
         {/* Glass Overlay for Reflection */}
         <mesh position={[0, 1.05, 0.053]}>
            <planeGeometry args={[3.0, 1.9]} />
            <meshPhysicalMaterial 
                color="#ffffff" 
                transmission={0.1} 
                opacity={0.1} 
                transparent 
                roughness={0.1} 
                metalness={0.9}
            />
         </mesh>
      </group>
    </group>
  );
};

const TabletModel = () => {
  const screenTexture = useTexture(TABLET_IMG);
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <group>
      <RoundedBox args={[1.4, 2.0, 0.1]} radius={0.08} smoothness={4}>
         <meshPhysicalMaterial color="#1a1a1a" roughness={0.25} metalness={0.8} clearcoat={0.5} />
      </RoundedBox>
      {/* Bezel */}
      <mesh position={[0, 0, 0.051]}>
         <planeGeometry args={[1.3, 1.9]} />
         <meshBasicMaterial color="#000" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.052]}>
         <planeGeometry args={[1.2, 1.8]} />
         <meshBasicMaterial map={screenTexture} toneMapped={false} />
      </mesh>
      {/* Glass */}
      <mesh position={[0, 0, 0.053]}>
         <planeGeometry args={[1.2, 1.8]} />
         <meshPhysicalMaterial color="#fff" transmission={0.2} opacity={0.1} transparent roughness={0} />
      </mesh>
    </group>
  );
};

const PhoneModel = () => {
  const screenTexture = useTexture(PHONE_IMG);
  screenTexture.colorSpace = THREE.SRGBColorSpace;

  return (
    <group>
      <RoundedBox args={[0.7, 1.4, 0.08]} radius={0.1} smoothness={4}>
         <meshPhysicalMaterial color="#2d2d2d" roughness={0.2} metalness={0.9} clearcoat={0.5} />
      </RoundedBox>
      {/* Bezel */}
      <mesh position={[0, 0, 0.041]}>
         <planeGeometry args={[0.65, 1.35]} />
         <meshBasicMaterial color="#000" />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0, 0.042]}>
         <planeGeometry args={[0.6, 1.3]} />
         <meshBasicMaterial map={screenTexture} toneMapped={false} />
      </mesh>
      {/* Glass */}
       <mesh position={[0, 0, 0.043]}>
         <planeGeometry args={[0.6, 1.3]} />
         <meshPhysicalMaterial color="#fff" transmission={0.2} opacity={0.1} transparent roughness={0} /> 
      </mesh>
      
      {/* Notch */}
      <mesh position={[0, 0.6, 0.044]}>
          <planeGeometry args={[0.2, 0.04]} />
          <meshBasicMaterial color="#000" />
      </mesh>
    </group>
  );
};

const DeviceCluster = ({ introPhase }: { introPhase: string }) => {
  const groupRef = useRef<THREE.Group>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const tabletRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    
    // Rotation Correction Logic:
    // When the group moves to the right (desktop view), it needs to rotate LEFT (negative Y) 
    // to face the camera straight on.
    // Base rotation of -0.3 radians keeps it looking "Straight" at the user.
    if (groupRef.current) {
        const baseRotation = -0.35; // Angle devices towards camera
        const idleRotation = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        
        // Smoothly interpolate rotation
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y, 
            baseRotation + idleRotation, 
            delta * 2
        );

        // Idle floating
        groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }

    // Entrance Animation Logic
    const isIntro = introPhase === 'active';
    const lerpSpeed = 4 * delta;

    // Laptop: Scale 0->1, Y -2->0
    if (laptopRef.current) {
        const targetScale = isIntro ? 0 : 1;
        const targetY = isIntro ? -2 : 0;
        laptopRef.current.scale.setScalar(THREE.MathUtils.lerp(laptopRef.current.scale.x, targetScale, lerpSpeed));
        laptopRef.current.position.y = THREE.MathUtils.lerp(laptopRef.current.position.y, targetY, lerpSpeed);
    }

    // Tablet: 
    // Adjusted Spacing: -2.35 is the sweet spot. Close to laptop (1.6 edge) but no overlap.
    if (tabletRef.current) {
        const targetX = isIntro ? -5 : -2.35; 
        tabletRef.current.position.x = THREE.MathUtils.lerp(tabletRef.current.position.x, targetX, lerpSpeed);
    }

    // Phone:
    // Adjusted Spacing: 1.6 keeps it balanced on the right.
    if (phoneRef.current) {
        const targetX = isIntro ? 5 : 1.6;
        phoneRef.current.position.x = THREE.MathUtils.lerp(phoneRef.current.position.x, targetX, lerpSpeed);
    }
  });

  return (
    <group ref={groupRef}>
        <PresentationControls
          global={false}
          cursor={true}
          snap={true}
          speed={1.5}
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-0.1, 0.1]} 
          azimuth={[-0.1, 0.1]} // Restricted azimuth to keep "straight" look preserved
        >
            <group>
                {/* Laptop - Central Anchor */}
                <group ref={laptopRef}>
                  <LaptopModel />
                </group>

                {/* Tablet - Left - Tilted slightly */}
                <group ref={tabletRef} position={[-5, 0, 0.7]} rotation={[0, 0.3, 0]}>
                    <TabletModel />
                </group>

                {/* Phone - Right */}
                <group ref={phoneRef} position={[5, -0.25, 1.2]}>
                    <PhoneModel />
                </group>
            </group>
        </PresentationControls>
    </group>
  );
};

const ResponsiveClusterGroup = ({ children, introPhase }: { children: React.ReactNode, introPhase: string }) => {
  const { viewport, size } = useThree();
  const isMobile = size.width < 1024; 
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
      if (!groupRef.current) return;

      let targetX = 0;
      let targetY = 0;
      let targetScale = 1;

      if (isMobile) {
          // Mobile: Top Center.
          targetX = 0;
          targetY = viewport.height * 0.15; 
          targetScale = 0.52; 
      } else {
          // Desktop: Right side
          targetX = viewport.width * 0.30; 
          targetY = -0.6; 
          targetScale = 0.68; 
      }

      if (introPhase === 'active') {
          targetScale = 0.75;
      }

      // Smooth interpolation for responsive resizing
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, delta * 3);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, delta * 3);
      
      const currentScale = groupRef.current.scale.x;
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 2);
      groupRef.current.scale.setScalar(newScale);
  });

  return (
    <group ref={groupRef}>
        {children}
    </group>
  );
};

const CameraRig = ({ mode }: { mode: 'intro' | 'main' }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Intro -> Main
    const isIntro = mode === 'intro';
    const targetZ = isIntro ? 10 : 7.5;
    const targetY = isIntro ? 1.5 : 0;
    const targetRotX = isIntro ? 0.1 : 0;

    const lerpSpeed = delta * 1.5; // Slower, cinematic camera movement

    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, lerpSpeed);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, lerpSpeed);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, lerpSpeed);
  });

  return (
    <group ref={groupRef} position={[0, 1.5, 10]} rotation={[0.1, 0, 0]}>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 0]} fov={32} />
    </group>
  );
};

const SceneContent: React.FC<Scene3DProps> = ({ onIntroComplete }) => {
  const [introPhase, setIntroPhase] = useState<'active' | 'transitioning' | 'finished'>('active');

  useEffect(() => {
    // Intro sequence timing
    const timer = setTimeout(() => {
        setIntroPhase('transitioning');
        if(onIntroComplete) setTimeout(onIntroComplete, 1000);
    }, 1000); 

    const cleanupTimer = setTimeout(() => {
        setIntroPhase('finished');
    }, 4000);

    return () => {
        clearTimeout(timer);
        clearTimeout(cleanupTimer);
    };
  }, [onIntroComplete]);

  return (
    <>
        {/* Pure White Fog to blend floor into infinity */}
        <fog attach="fog" args={['#ffffff', 5, 25]} />

        <ambientLight intensity={1.5} />
        {/* Cinematic Studio Lighting - Neutral White */}
        <spotLight position={[5, 8, 5]} angle={0.5} penumbra={1} intensity={2.0} color="#ffffff" castShadow shadowBias={-0.0001} />
        <spotLight position={[-5, 5, 2]} angle={0.5} penumbra={1} intensity={1.5} color="#f8fafc" /> 
        <spotLight position={[0, 5, -5]} angle={0.5} penumbra={1} intensity={1.5} color="#ffffff" /> 
        
        <Environment preset="city" blur={0.7} background={false} />
        
        {/* Background Animation Layer */}
        <FloatingFloatingShapes />

        <CameraRig mode={introPhase === 'active' ? 'intro' : 'main'} />
        
        {introPhase !== 'finished' && (
            <IntroParticles triggerEnd={introPhase === 'transitioning'} />
        )}

        <ResponsiveClusterGroup introPhase={introPhase}>
             <DeviceCluster introPhase={introPhase} />
        </ResponsiveClusterGroup>

        {/* Shadow Only - No Physical Floor Mesh */}
        <ContactShadows position={[0, -2.95, 0]} opacity={0.4} scale={25} blur={2.5} far={4} color="#000000" frames={1} />
    </>
  );
}

const Premium3DIntro: React.FC<Scene3DProps> = (props) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
      <Canvas 
        gl={{ 
            antialias: true, 
            alpha: true, 
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace
        }} 
        dpr={[1, 1.5]}
        shadows
        className="touch-none" 
      > 
        <Suspense fallback={<Loader />}>
            <SceneContent {...props} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Premium3DIntro;