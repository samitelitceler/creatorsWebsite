import { useEffect, useRef } from 'react';

export const usePerformance = () => {
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const measureFPS = () => {
      const currentTime = performance.now();
      frameCountRef.current++;

      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        
        // Log FPS for debugging (remove in production)
        if (process.env.NODE_ENV === 'development' && fps < 50) {
          console.warn(`Low FPS detected: ${fps}`);
        }
        
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }

      requestAnimationFrame(measureFPS);
    };

    const animationId = requestAnimationFrame(measureFPS);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    const handleScroll = () => {
      // Use passive listeners for better scroll performance
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default usePerformance; 