"use client";

import React from "react";
import Image from "next/image";
import {
  TextContent,
  IllustrationContent,
} from "./JoiningRequirementsElements";

/**
 * JoiningRequirements Component
 * * Provides an overview of the mandatory documents and criteria for Captain onboarding.
 * Features:
 * - Dynamic Art Direction: Switches decorative background assets based on the viewport (Mobile vs Desktop).
 * - Component-Based Architecture: Outsourced content logic to specialized sub-elements for a clean entry file.
 * - Layered Backgrounds: Uses SVG-based absolute positioning to create a sense of depth without affecting layout flow.
 * * @component
 * @returns {JSX.Element} The rendered "Requirements" section.
 */
export default function JoiningRequirements() {
  return (
    <section
      /**
       * Section Container:
       * - pb-16 / lg:py-24: Optimized vertical spacing to ensure balance across all screen sizes.
       * - overflow-hidden: Critical to prevent absolute-positioned background decorations from causing horizontal scroll.
       */
      className="relative w-full pb-16 lg:py-24 bg-white overflow-hidden"
      dir="rtl"
    >
      {/* =========================================
         1. Desktop/Tablet Background Decorations
         ========================================= */}
      <div className="absolute hidden md:flex top-[10%] -right-[10%] md:top-[5%] md:-right-[5%] lg:-top-[1%] lg:-right-[5%] w-62.5 h-62.5 lg:w-124 lg:h-124 opacity-100 pointer-events-none z-0">
        <Image
          src="/icons/swoosh-decoration.svg"
          alt="Desktop Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* =========================================
         2. Mobile-Specific Background Decoration
         ========================================= 
         Using a specific asset (Ellipse-req-captain) to match the unique portrait orientation needs of mobile devices.
      */}
      <div className="absolute flex md:hidden z-20 top-0 -right-25 w-62.5 h-62.5 lg:w-124 lg:h-124 opacity-100 pointer-events-none">
        <Image
          src="/images/Ellipse-req-captain.svg"
          alt="Mobile Decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* =========================================
         3. Main Content Container
         ========================================= 
         Flexbox-driven layout:
         - Mobile: Vertical stack (flex-col)
         - Desktop: Side-by-side (lg:flex-row)
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-4 lg:gap-20">
        {/* Informational Section: Headings, descriptions, and criteria list */}
        <TextContent />

        {/* Visual Section: Main character illustration and interactive stars */}
        <IllustrationContent />
      </div>
    </section>
  );
}
