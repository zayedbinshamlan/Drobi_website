"use client";

import { useState, useEffect } from "react";

/**
 * useMobile Hook
 * * A specialized utility hook to detect if the user's viewport is below a specific width threshold.
 * Features:
 * - Dynamic Breakpoint: Customizable pixel threshold (defaults to 1024px for Tailwind 'lg').
 * - Real-time Tracking: Synchronizes with the browser's 'resize' event to update UI states.
 * - Optimized Cleanup: Prevents memory leaks by properly removing event listeners on unmount.
 * * @param {number} breakpoint - The pixel width threshold for mobile detection.
 * @returns {boolean} True if the current window width is less than the breakpoint.
 */
export const useMobile = (breakpoint: number = 1024) => {
  // State to track the mobile viewport status
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    /**
     * checkIsMobile Logic
     * Internal function to compare current window width against the provided breakpoint.
     */
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    /* 1. Initial Execution:
       Ensures the state is correctly set immediately after the component mounts.
    */
    checkIsMobile();

    /* 2. Event Registration:
       Attaching a 'resize' listener to the global window object to detect screen changes.
    */
    window.addEventListener("resize", checkIsMobile);

    /* 3. Lifecycle Management (Cleanup):
       Critical step to remove the listener when the component using this hook is unmounted.
       This prevents performance degradation and potential memory leaks.
    */
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [breakpoint]);

  return isMobile;
};
