import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * A set of softly animated, coloured point-particles that slowly drift
 * around their origin positions — giving the impression of glowing nebula dust.
 *
 * Uses a manual THREE.BufferGeometry so that the attribute array can be
 * mutated in place each frame without recreating GPU objects.
 */
export default function GlowingParticles({ count = 120, isDark = true, reducedMotion = false }) {
  const pointsRef = useRef();

  // Build geometry once; store base positions + per-particle phase offsets.
  const { geometry, base, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const offsets = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;
      offsets[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));

    return { geometry: geo, base: positions, offsets };
  }, [count]);

  useFrame(({ clock }) => {
    if (reducedMotion || !pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    const t = clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      attr.array[i * 3 + 0] =
        base[i * 3 + 0] + Math.cos(t * 0.18 + offsets[i]) * 0.18;
      attr.array[i * 3 + 1] =
        base[i * 3 + 1] + Math.sin(t * 0.28 + offsets[i]) * 0.28;
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.1}
        color={isDark ? '#a5b4fc' : '#6366f1'}
        transparent
        opacity={isDark ? 0.75 : 0.3}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
