"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere
const generateParticles = (count: number, radius: number) => {
 const positions = new Float32Array(count * 3);
 for (let i = 0; i < count; i++) {
 const r = radius * Math.cbrt(Math.random());
 const theta = Math.random() * 2 * Math.PI;
 const phi = Math.acos(2 * Math.random() - 1);
 
 positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
 positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
 positions[i * 3 + 2] = r * Math.cos(phi);
 }
 return positions;
};

const ParticleCloud = () => {
 const ref = useRef<THREE.Points>(null);
 
 // Create 1500 particles within a radius of 15
 const particles = useMemo(() => generateParticles(1500, 15), []);

 useFrame((state) => {
 if (!ref.current) return;
 // Slowly rotate the particle cloud
 ref.current.rotation.x -= 0.00025;
 ref.current.rotation.y -= 0.00025;
 
 // Add subtle interactive movement based on mouse pointer
 const pointer = state.pointer;
 ref.current.rotation.x += (pointer.y * 0.05 - ref.current.rotation.x) * 0.02;
 ref.current.rotation.y += (pointer.x * 0.05 - ref.current.rotation.y) * 0.02;
 });

 return (
 <group rotation={[0, 0, Math.PI / 4]}>
 <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
 <PointMaterial
 transparent
 color="#f59e0b" // brand-accent (amber)
 size={0.03}
 sizeAttenuation={true}
 depthWrite={false}
 opacity={0.2}
 />
 </Points>
 </group>
 );
};

export default function WebGLBackground() {
 return (
 <div className="absolute inset-0 z-0 pointer-events-auto">
 <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
 <ParticleCloud />
 </Canvas>
 </div>
 );
}
