import React from "react";

// ==========================================
// UI Decorative & Interactive Elements
// ==========================================

/**
 * DropdownIcon Component
 * * A purely decorative SVG chevron used for indicating menu states.
 * Features:
 * - Dynamic Rotation: Utilizes Tailwind's transition classes to flip 180° when open.
 * - Accessibility: marked with `aria-hidden` as it is a non-functional visual cue.
 * - Stroke Optimization: High stroke width (3) for better visibility in small dimensions (3x3).
 * * @param {boolean} isOpen - State-driven prop to trigger the rotation animation.
 */
export const DropdownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-3 h-3 transition-transform duration-500 ${
      isOpen ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/**
 * ActiveIndicator Component
 * * A sophisticated underline element used for active or hovered navigation links.
 * Features:
 * - Layout: Absolutely positioned to bleed below the parent text without affecting line height.
 * - Logic:
 * 1. If `isActive` is true, it maintains full width.
 * 2. If false, it remains hidden (w-0) until the parent 'group' is hovered.
 * - Fluid Motion: 500ms transition duration for a smooth 'sliding' visual effect.
 * * @param {boolean} isActive - Determines if the indicator should be permanently visible.
 */
export const ActiveIndicator = ({ isActive }: { isActive: boolean }) => (
  <span
    className={`absolute -bottom-1 right-0 h-[1.5px] bg-white transition-all duration-500 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`}
    aria-hidden="true"
  />
);
