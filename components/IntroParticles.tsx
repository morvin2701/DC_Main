// @ts-nocheck
import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MathUtils } from 'three';

interface IntroParticlesProps {
  triggerEnd: boolean;
}

const IntroParticles: React.FC<IntroParticlesProps> = ({ triggerEnd }) => {
  const count = 1500; // Reduced count for cleaner look
  const mesh = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 2 + Math.random() * 4; 
      const y = (Math.random() - 0.5) * 6;

      const x = r * Math.cos(theta);
      const z = r * Math.sin(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Softer palette
      if (Math.random() > 0.6) {
        color.setHex(0xD4AF37); // Gold
      } else {
        color.setHex(0xe2e8f0); // Soft silver/white
      }
      
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
    
    // Smooth fade out
    const targetOpacity = triggerEnd ? 0 : 0.6;
    pointsMaterial.opacity = MathUtils.lerp(pointsMaterial.opacity, targetOpacity, delta * 2);

    if (pointsMaterial.opacity < 0.01 && triggerEnd) return;

    mesh.current.rotation.y += delta * 0.03;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      if (triggerEnd) {
        posAttribute.array[ix] *= (1 + delta * 2);
        posAttribute.array[iy] *= (1 + delta * 2);
        posAttribute.array[iz] *= (1 + delta * 2);
      } else {
         // Slight breathing
         const time = state.clock.elapsedTime;
         posAttribute.array[iy] = originalPositions[iy] + Math.sin(time + originalPositions[ix]) * 0.1;
      }
    }
    posAttribute.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default IntroParticles;