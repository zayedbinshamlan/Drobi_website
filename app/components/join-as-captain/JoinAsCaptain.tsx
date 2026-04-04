"use client";

import React from "react";
import { JoinContent, JoinVisuals } from "./JoinAsCaptainElements";

/**
 * JoinAsCaptain Section Component
 * * A high-conversion split-screen layout targeting potential captains.
 * Features:
 * - Dynamic Background Gradients: Implements a dual-tone violet gradient (#26095E to #390D8E) for brand consistency.
 * - Responsive Ordering: Reverses the visual flow on mobile (Image first) vs desktop (Text first) to prioritize visual impact.
 * - Aspect Ratio Control: Uses `aspect-372/521` on mobile to maintain the integrity of the hero asset.
 * - Floating UI Layer: Orchestrates a series of interactive stat cards (FloatingCard) anchored to specific visual coordinates.
 * - Performance: Marks the large section image as `priority` to stabilize LCP on the captain's onboarding page.
 * * @component
 */
export default function JoinAsCaptain() {
  return (
    <section
      /**
       * Root Container:
       * - lg:h-234: Fixed height on desktop to create a cinematic "Poster" look.
       * - bg-[#26095E]: Fallback brand color to prevent layout flicker during gradient load.
       */
      className="w-full flex flex-col lg:flex-row lg:h-234 overflow-hidden bg-[#26095E]"
      dir="rtl"
    >
      {/* Renders the textual content and CTA section */}
      <JoinContent />

      {/* Renders the visual assets and floating info cards */}
      <JoinVisuals />
    </section>
  );
}
