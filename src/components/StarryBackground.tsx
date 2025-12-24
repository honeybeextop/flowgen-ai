import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      // Spread stars in a dome-like pattern
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = Math.random() * 25 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 50 - 10;
      
      // Vary colors between white and soft yellow
      const isYellow = Math.random() > 0.85;
      if (isYellow) {
        colors[i3] = 1.0;
        colors[i3 + 1] = 0.82;
        colors[i3 + 2] = 0.4;
      } else {
        const brightness = 0.7 + Math.random() * 0.3;
        colors[i3] = brightness;
        colors[i3 + 1] = brightness;
        colors[i3 + 2] = brightness;
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

function TwinklingStars() {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    
    for (let i = 0; i < 100; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 40;
      positions[i3 + 1] = Math.random() * 20 + 8;
      positions[i3 + 2] = (Math.random() - 0.5) * 40 - 5;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current && ref.current.material) {
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFD166"
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export function StarryBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Stars />
        <TwinklingStars />
      </Canvas>
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(20 10% 8%) 0%, transparent 40%, transparent 100%)'
        }}
      />
    </div>
  );
}
