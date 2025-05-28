import { useState, useEffect } from 'react';

/**
 * Hook to detect if the current device is mobile based on screen width
 * @returns A boolean indicating if the device is mobile (width < 768px)
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      setIsMobile(mediaQuery.matches);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
}

