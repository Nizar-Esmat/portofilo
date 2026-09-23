import { useMemo, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color, AdditiveBlending, ShaderMaterial, Vector3, Spherical } from 'three';

const RADIUS = 90;
const DEPTH = 60;
const FACTOR = 3;
const SATURATION = 0;
const SPEED = 0.4;
// drei's <Stars> shader has no opacity control (it never reads material.opacity),
// so this is a small fork of it that adds one.
const OPACITY = 0.45;

class TransparentStarfieldMaterial extends ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        time: { value: 0 },
        fade: { value: 1.0 },
        uOpacity: { value: OPACITY },
      },
      vertexShader: /* glsl */ `
        uniform float time;
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
          gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float fade;
        uniform float uOpacity;
        varying vec3 vColor;
        void main() {
          float opacity = 1.0;
          if (fade == 1.0) {
            float d = distance(gl_PointCoord, vec2(0.5, 0.5));
            opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
          }
          gl_FragColor = vec4(vColor, opacity * uOpacity);
        }
      `,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: AdditiveBlending,
    });
  }
}

const genStar = (r) =>
  new Vector3().setFromSpherical(new Spherical(r, Math.acos(1 - Math.random() * 2), Math.random() * 2 * Math.PI));

/** A deep-field star cloud. Forked from drei's Stars helper so star opacity is adjustable. */
export default function StarField({ count = 2500 }) {
  const materialRef = useRef();
  const [material] = useState(() => new TransparentStarfieldMaterial());

  const { positions, colors, sizes } = useMemo(() => {
    const positions = [];
    const colors = [];
    const sizes = Array.from({ length: count }, () => (0.5 + 0.5 * Math.random()) * FACTOR);
    const color = new Color();
    let r = RADIUS + DEPTH;
    const increment = DEPTH / count;
    for (let i = 0; i < count; i++) {
      r -= increment * Math.random();
      positions.push(...genStar(r).toArray());
      color.setHSL(i / count, SATURATION, 0.9);
      colors.push(color.r, color.g, color.b);
    }
    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      sizes: new Float32Array(sizes),
    };
  }, [count]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime * SPEED;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <primitive ref={materialRef} object={material} attach="material" />
    </points>
  );
}
