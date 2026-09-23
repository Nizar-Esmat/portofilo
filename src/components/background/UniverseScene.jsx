import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import StarField from './StarField';
import FloatingPlanet from './FloatingPlanet';
import GlowingParticles from './GlowingParticles';

/**
 * The entire Three.js scene graph.
 *
 * Mounted once at the app root (not per-section), so this single scene stays
 * alive behind the whole page. A top-level <group> is rotated in response to
 * mouse position AND overall page scroll progress, and the camera slowly
 * dollies forward as the user scrolls — giving the whole site the feel of one
 * continuous world rather than a per-section animation that restarts.
 *
 * Planets are positioned to flank the hero text (left / right sides)
 * so they never overlap readable content at typical viewport sizes.
 */
export default function UniverseScene({ isDark, reducedMotion, isMobile }) {
  const rootRef = useRef();
  const starGroupRef = useRef();
  // Smoothed mouse state stored in a ref to avoid triggering re-renders
  const mouse = useRef({ tx: 0, ty: 0, cx: 0, cy: 0 });

  useEffect(() => {
    if (isMobile) return; // touch devices have no persistent pointer to parallax against
    const onMove = (e) => {
      mouse.current.tx = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [isMobile]);

  useFrame(({ camera }, delta) => {
    // Overall page scroll progress, 0 (top) -> 1 (bottom). Read directly here
    // rather than via a listener/state, since useFrame already runs its own loop.
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const p = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;

    // Slow forward dolly + descent through the scene as the page scrolls —
    // this is what sells "one continuous world" across every section.
    camera.position.z = 5 - p * 3;
    camera.position.y = -p * 1.2;

    if (starGroupRef.current) {
      starGroupRef.current.rotation.y = p * 0.2;
    }

    if (reducedMotion) return; // keep mouse-parallax + rotation static when OS reduce-motion is set

    // Exponential lerp — frame-rate independent smooth follow
    const k = 1 - Math.pow(0.04, delta);
    const m = mouse.current;
    m.cx += (m.tx - m.cx) * k;
    m.cy += (m.ty - m.cy) * k;

    if (rootRef.current) {
      rootRef.current.rotation.y = m.cx * 0.055 + p * 0.5;
      rootRef.current.rotation.x = -m.cy * 0.035;
    }
  });

  return (
    <group ref={rootRef}>
      {/* Lighting — kept gentle so planets have shape without harsh shadows */}
      <ambientLight intensity={isDark ? 0.12 : 0.2} />
      <pointLight position={[8, 6, 6]} intensity={1.2} color="#ffffff" />

      {/* Stars only render in dark mode (invisible / distracting on a light bg) */}
      {isDark && (
        <group ref={starGroupRef}>
          <StarField count={isMobile ? 800 : 2500} />
        </group>
      )}

      {/* Nebula-like glowing dust particles */}
      <GlowingParticles count={isMobile ? 40 : 120} isDark={isDark} reducedMotion={reducedMotion} />

      {/* Planet 1 — large, light gray, upper-left */}
      <FloatingPlanet
        position={[-3.6, 1.1, -3]}
        radius={0.88}
        color={isDark ? '#d6d6d6' : '#d6d6d6'}
        emissive="#3d3d3d"
        speed={0.22}
        reducedMotion={reducedMotion}
      />

      {/* Planet 2 — medium, mid gray, lower-right */}
      <FloatingPlanet
        position={[4.1, -1.7, -6]}
        radius={0.52}
        color={isDark ? '#949494' : '#949494'}
        emissive="#262626"
        speed={0.14}
        reducedMotion={reducedMotion}
      />

      {/* Planet 3 — small, near-white, far upper-right (deep z) */}
      <FloatingPlanet
        position={[2.8, 2.4, -11]}
        radius={0.28}
        color={isDark ? '#ececec' : '#ececec'}
        emissive="#575757"
        speed={0.09}
        reducedMotion={reducedMotion}
      />
    </group>
  );
}
