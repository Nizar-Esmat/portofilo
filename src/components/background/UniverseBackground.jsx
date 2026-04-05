import { lazy, Suspense, Component } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useIsDark } from './useIsDark';

// Code-split: the heavy Three.js + R3F bundle only loads when actually needed.
const UniverseCanvas = lazy(() => import('./UniverseCanvas'));

// DEBUG: Error boundary to catch and display errors instead of swallowing them
class CanvasErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('[UniverseCanvas Error]', error, info); }
  render() {
    if (this.state.error) {
      return <div style={{ color: 'red', position: 'absolute', top: 10, left: 10, zIndex: 9999, background: 'black', padding: 8 }}>
        Canvas Error: {this.state.error.message}
      </div>;
    }
    return this.props.children;
  }
}
export default function UniverseBackground() {
    // reducedMotion: freeze 3-D animations but always show the scene —
    // never skip the canvas (OS-level reduce-motion flags would otherwise
    // hide the entire background on many Linux/GNOME systems).
    const reducedMotion = useReducedMotion() ?? false;
    const isDark = useIsDark();

    return (
        <>
            {/* CSS glow fallback visible while the 3-D chunk is loading */}
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-600/10 dark:bg-indigo-600/8 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -right-32 w-64 h-64 bg-purple-600/8 dark:bg-purple-600/6 rounded-full blur-2xl" />
            </div>

            {/* 3-D canvas — always mounted, floats behind all hero content */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0"
                style={{ width: '100%', height: '100%' }}
            >
                <CanvasErrorBoundary>
                    <Suspense fallback={null}>
                        <UniverseCanvas isDark={isDark} reducedMotion={reducedMotion} />
                    </Suspense>
                </CanvasErrorBoundary>
            </div>
        </>
    );
}
