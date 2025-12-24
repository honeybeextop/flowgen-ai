import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

function Stars({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null);
  const targetRotation = useRef({ x: 0, y: 0 });
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = Math.random() * 25 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 50 - 10;
      
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
      // Parallax effect based on mouse position
      targetRotation.current.x = mousePosition.y * 0.1;
      targetRotation.current.y = mousePosition.x * 0.15;
      
      // Smooth lerp towards target
      ref.current.rotation.x += (targetRotation.current.x - ref.current.rotation.x) * 0.02;
      ref.current.rotation.y += (targetRotation.current.y + state.clock.elapsedTime * 0.01 - ref.current.rotation.y) * 0.02;
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

function TwinklingStars({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const ref = useRef<THREE.Points>(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  
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
    if (ref.current) {
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
      
      // Parallax movement
      targetPosition.current.x = mousePosition.x * 0.5;
      targetPosition.current.y = mousePosition.y * 0.5;
      
      ref.current.position.x += (targetPosition.current.x - ref.current.position.x) * 0.03;
      ref.current.position.y += (targetPosition.current.y - ref.current.position.y) * 0.03;
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

function CameraController({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const { camera } = useThree();
  const targetPosition = useRef({ x: 0, y: 0 });

  useFrame(() => {
    targetPosition.current.x = mousePosition.x * 0.5;
    targetPosition.current.y = mousePosition.y * 0.3;
    
    camera.position.x += (targetPosition.current.x - camera.position.x) * 0.02;
    camera.position.y += (targetPosition.current.y - camera.position.y) * 0.02;
    camera.lookAt(0, 5, -10);
  });

  return null;
}

export function StarryBackground() {
  const mousePosition = useMousePosition();

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <CameraController mousePosition={mousePosition} />
        <Stars mousePosition={mousePosition} />
        <TwinklingStars mousePosition={mousePosition} />
      </Canvas>
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(0 0% 4%) 0%, transparent 30%, transparent 100%)'
        }}
      />
    </div>
  );
}
