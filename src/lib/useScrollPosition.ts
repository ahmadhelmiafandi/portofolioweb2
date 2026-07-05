import { useState, useEffect } from 'react';

// Global state for sharing a single scroll event listener
let globalScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
const subscribers = new Set<(y: number) => void>();
let isListening = false;
let rafId: number | null = null;

const handleScroll = () => {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    globalScrollY = window.scrollY;
    subscribers.forEach((callback) => callback(globalScrollY));
    rafId = null;
  });
};

/**
 * A highly optimized hook to subscribe to scroll position status.
 * Uses a single passive event listener with requestAnimationFrame throttling
 * across all components.
 * 
 * @param threshold The vertical scroll threshold in pixels
 * @returns boolean True if scroll position is greater than threshold
 */
export function useScrollPosition(threshold: number): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    // Sync initial state on mount
    setPassed(globalScrollY > threshold);

    const callback = (y: number) => {
      setPassed(y > threshold);
    };

    subscribers.add(callback);

    if (!isListening) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      isListening = true;
    }

    return () => {
      subscribers.delete(callback);
      if (subscribers.size === 0 && isListening) {
        window.removeEventListener('scroll', handleScroll);
        isListening = false;
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };
  }, [threshold]);

  return passed;
}
