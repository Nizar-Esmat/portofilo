import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A single floating planet with:
 *  - slow Y-axis bob (sinusoidal)
 *  - gentle self-rotation around Y
 *  - a soft outer glow shell (double-sphere trick via BackSide)
 *
 * Props:
 *   position  [x, y, z]   world position
 *   radius    number       sphere radius in world units
 *   color     string       CSS hex color
 *   emissive  string       CSS hex emissive color
 *   speed     number       animation speed multiplier
 */
export default function FloatingPlanet({
  position,
  radius = 0.8,
  color,
  emissive,
  speed = 0.2,
  reducedMotion = false,
}) {
  const groupRef = useRef();
  // Random phase so multiple planets don't bob in sync
  const phase = useRef(Math.random() * Math.PI * 2);
  const initialY = position[1];

  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    phase.current += delta * speed;
    groupRef.current.position.y = initialY + Math.sin(phase.current) * 0.14;
    groupRef.current.rotation.y += delta * 0.07;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Outer glow — slightly larger BackSide sphere */}
      <mesh renderOrder={-1}>
        <sphereGeometry args={[radius * 1.65, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.045}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Planet body */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.7}
          roughness={0.75}
          metalness={0.06}
        />
      </mesh>
    </group>
  );
}
