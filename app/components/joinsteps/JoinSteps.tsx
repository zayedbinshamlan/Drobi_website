"use client";

import React from "react";
import { STEPS_DATA } from "@/app/data/JoinStepsData";
import { StepCard } from "./JoinStepsElements";

/**
 * JoinSteps Component
 * * Orchestrates the onboarding process overview for prospective Captains.
 * Features:
 * - Sequential Flow: Renders a series of actionable steps using a modular data-driven approach.
 * - Dynamic Gradient Background: Implements a subtle vertical transition to guide the eye downward.
 * - Responsive Orchestration: Switches from a vertical stack on mobile to a horizontal flow on desktop.
 * * @component
 * @returns {JSX.Element} The rendered "How it Works" or "Join Steps" section.
 */
export default function JoinSteps() {
  return (
    <section
      /**
       * Section Container:
       * - py-12 to py-24: Balanced padding for distinct section separation.
       * - bg-linear-to-b: Custom brand-aligned gradient from soft violet to a deeper hue.
       * - overflow-hidden: Prevents potential layout shifts from animated child components.
       */
      className="relative w-full py-12 lg:py-24 bg-linear-to-b from-[#F9F6FF] to-[#F3EEFF] overflow-hidden"
      dir="rtl"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* =========================================
           1. Section Header (Title & Subtitle)
           ========================================= 
           Uses semantic typography and brand colors to emphasize the ease of joining.
        */}
        <div className="text-center mb-10 md:mb-16 lg:mb-24">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold text-[#1A1A1A] mb-3 md:mb-4">
            خطوات بسيطة <span className="text-[#390D8E]">للإنضمام</span>
          </h2>
          <p className="text-[#6B7280] text-sm md:text-lg lg:text-[20px] font-medium">
            رحلتك كشريك نجاح تبدأ بلمسات بسيطة.
          </p>
        </div>

        {/* =========================================
           2. Steps Interaction Container
           ========================================= 
           - Flex configuration: flex-col (Mobile) -> lg:flex-row (Desktop).
           - Passing totalSteps and index to child components to handle conditional 
             logic like connecting lines or progress indicators.
        */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8">
          {STEPS_DATA.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              totalSteps={STEPS_DATA.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
