"use client";
import { useEffect, useRef, memo } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
  children: React.ReactNode;
}

const LenisProvider = memo(({ children }: LenisProviderProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoRaf: false, // We'll handle RAF manually for better control
      lerp: 0.08, // Reduced for smoother feel
      syncTouch: false,
      syncTouchLerp: 0.075,
      touchInertiaExponent: 1.7,
      autoResize: true,
      prevent: undefined,
      virtualScroll: undefined,
      overscroll: false, // Disable overscroll to prevent interference
      anchors: true,
      autoToggle: false,
      allowNestedScroll: false,
    });

    // Optimized RAF loop with better timing
    const raf = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    };
    
    rafRef.current = requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
});

LenisProvider.displayName = 'LenisProvider';

export default LenisProvider; 