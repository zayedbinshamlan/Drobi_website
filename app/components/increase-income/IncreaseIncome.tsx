"use client";

import React from "react";
import { TextContent, ImageContent } from "./IncreaseIncomeElements";

/**
 * IncreaseIncome Component
 * * A conversion-focused section designed to highlight the financial benefits for captains.
 * Features:
 * - Geometric Background Layer: Uses inline SVG for resolution-independent decorative curves.
 * - Dynamic Gradient: Implements a specific linear-gradient for subtle visual depth.
 * - Modular Layout: Encapsulates copy and media into separate sub-components for better maintainability.
 * * @component
 * @returns {JSX.Element} The rendered "Increase Your Income" section.
 */
export default function IncreaseIncome() {
  return (
    <section
      /**
       * Section Styling:
       * - py-8 to py-24: Responsive padding to balance whitespace across devices.
       * - bg-linear-gradient: A custom brand-aligned transition from pure white to soft violet.
       */
      className="relative w-full py-8 lg:py-24 overflow-hidden bg-[linear-gradient(99.33deg,#FFFFFF_41.94%,#BFA2F7_306.82%)]"
      dir="rtl"
    >
      {/* --- Decorative Background Layer ---
        Custom SVG curve positioned at the bottom-left. 
        Note: pointer-events-none ensures it doesn't interfere with user interactions.
      */}
      <div className="absolute bottom-0 left-0 w-75 h-75 lg:w-125 lg:h-125 opacity-20 pointer-events-none z-0">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white fill-current"
        >
          <path d="M 0,200 C 50,150 100,50 200,0 L 0,0 Z" />
        </svg>
      </div>

      {/* --- Main Content Container ---
        Uses a standard container with responsive horizontal padding.
        Layout switches from vertical (mobile) to horizontal (desktop) using lg:flex-row.
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-15 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Render Text Content (Headings, Paragraphs, Buttons) */}
        <TextContent />

        {/* Render Image Content (Main Illustration & Floating Elements) */}
        <ImageContent />
      </div>
    </section>
  );
}
