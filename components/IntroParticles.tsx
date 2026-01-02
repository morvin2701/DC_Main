import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MathUtils } from 'three';

// Fix TS issues with React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface IntroParticlesProps {
  triggerEnd: boolean;
}

const IntroParticles: React.FC<IntroParticlesProps> = ({ triggerEnd }) => {
  const count = 3000; // Slightly reduced count for better performance/less noise
  const mesh = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  // Create particles in a spherical formation
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5 + Math.random() * 0.5; // Radius

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color gradient: Soft Blue to White for a cleaner look
      color.setHSL(0.6, 0.8, 0.7 + Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    return [positions, colors];
  }, []);

  const originalPositions = useMemo(() => positions.slice(), [positions]);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const { geometry, material } = mesh.current;
    const posAttribute = geometry.attributes.position as THREE.BufferAttribute;
    const pointsMaterial = material as THREE.PointsMaterial;
    
    // Smooth Opacity Fade
    // If triggerEnd is true, fade out. If false, fade in/stay at 0.6
    const targetOpacity = triggerEnd ? 0 : 0.6;
    pointsMaterial.opacity = MathUtils.lerp(pointsMaterial.opacity, targetOpacity, delta * 2);

    // Stop updating positions if invisible to save performance
    if (pointsMaterial.opacity < 0.01 && triggerEnd) return;

    // Mouse interaction setup
    const mouseX = (mouse.x * viewport.width) / 2;
    const mouseY = (mouse.y * viewport.height) / 2;

    mesh.current.rotation.y += delta * 0.1;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      if (triggerEnd) {
        // EXPLOSION PHASE: Gentle expansion
        posAttribute.array[ix] += (posAttribute.array[ix] * delta * 2);
        posAttribute.array[iy] += (posAttribute.array[iy] * delta * 2);
        posAttribute.array[iz] += (posAttribute.array[iz] * delta * 2);
      } else {
        // HOVER PHASE
        const ox = originalPositions[ix];
        const oy = originalPositions[iy];
        const oz = originalPositions[iz];

        const dx = mouseX - ox;
        const dy = mouseY - oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Gentler mouse force
        let force = 0;
        if (dist < 4) {
           force = (4 - dist) * 0.5;
        }

        const time = state.clock.elapsedTime;
        const noise = Math.sin(time + ox) * 0.05;

        posAttribute.array[ix] = MathUtils.lerp(posAttribute.array[ix], ox + (dx / dist) * force * -1, 0.1) + noise;
        posAttribute.array[iy] = MathUtils.lerp(posAttribute.array[iy], oy + (dy / dist) * force * -1, 0.1) + noise;
        posAttribute.array[iz] = MathUtils.lerp(posAttribute.array[iz], oz, 0.1);
      }
    }

    posAttribute.needsUpdate = true;
  });

  return (
    // @ts-ignore: React Three Fiber allows these elements
    <points ref={mesh}>
      {/* @ts-ignore: React Three Fiber allows these elements */}
      <bufferGeometry>
        {/* @ts-ignore: React Three Fiber allows these elements */}
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        {/* @ts-ignore: React Three Fiber allows these elements */}
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      {/* @ts-ignore: React Three Fiber allows these elements */}
      </bufferGeometry>
      {/* @ts-ignore: React Three Fiber allows these elements */}
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0} // Start invisible, let useFrame handle fade in
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    {/* @ts-ignore: React Three Fiber allows these elements */}
    </points>
  );
};

export default IntroParticles;