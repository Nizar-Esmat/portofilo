import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import UniverseScene from './UniverseScene';

/**
 * Thin wrapper that mounts the R3F Canvas.
 *
 * Kept as a separate module so it can be React.lazy()'d by UniverseBackground,
 * splitting the heavy Three.js bundle into its own chunk and preventing it from
 * blocking the initial paint.
 *
 * Canvas options:
 *  - alpha: true          → transparent background, page bg-color shows through
 *  - antialias: false     → skip MSAA for lower GPU load (particles/blobs don't need it)
 *  - powerPreference      → hint to browser to prefer the integrated GPU
 *  - dpr [1, 1.5]         → cap device pixel ratio so retina screens don't run at 3×
 */
export default function UniverseCanvas({ isDark, reducedMotion }) {
  return (
    <Canvas
      style={{ width: '100%', height: '100%' }}
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: 'low-power',
      }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <UniverseScene isDark={isDark} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
