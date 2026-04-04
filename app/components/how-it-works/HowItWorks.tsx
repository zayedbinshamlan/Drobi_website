"use client";

import React from "react";
import { STEPS_DATA } from "@/app/data/HowItWorksData";
import { StepCard, TitleSparkle } from "./HowItWorksElements";

/**
 * HowItWorks Section Component
 * * A visual guide explaining the application's operational workflow.
 * Features:
 * - Hybrid Layout: Seamlessly switches from a touch-optimized horizontal slider (Mobile) to a centered grid (Desktop).
 * - Snap Interaction: Implements `snap-x snap-mandatory` to ensure cards lock into place during mobile scrolling.
 * - UX Refinement: Hidden scrollbars across all engines (WebKit/Firefox) for a clean, app-like interface.
 * - RTL Architecture: Fully compatible with right-to-left flow, ensuring correct step sequencing (1 -> 2 -> 3).
 * * @component
 */
export default function HowItWorks() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="container mx-auto px-0 lg:px-20 flex flex-col items-center w-full">
        {/* =========================================
            1. Section Header (Context & Branding)
            ========================================= 
            Orchestrates the main headline with a decorative sparkle accent.
        */}
        <div className="px-6 text-center flex flex-col items-center mb-8 lg:mb-12 relative w-full">
          <h2 className="text-[#1A1A1A] text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 relative z-10">
            كيف يعمل{" "}
            <span className="text-[#390D8E] relative inline-block">
              دروبي؟
              {/* Localized decorative asset positioned relative to the highlighted text */}
              <TitleSparkle />
            </span>
          </h2>

          <p className="text-[#6B7280] text-sm md:text-base lg:text-[18px] max-w-2xl leading-relaxed mt-2">
            حدد موقعك ووجهتك، اختر نوع السيارة، ثم اطلب رحلتك ليصلك أقرب كابتن
            بسرعة ويأخذك بأمان إلى وجهتك.
          </p>
        </div>

        {/* =========================================
            2. Steps Interaction Layer
            ========================================= 
            Logic:
            - lg:flex-wrap: Switches to grid display on large screens.
            - overflow-x-auto: Enables natural touch-swiping on small viewports.
            - snap-center: Ensures each step card is perfectly centered after a swipe.
        */}
        <div
          className="flex flex-nowrap lg:flex-wrap lg:justify-center items-start w-full gap-x-20 lg:gap-x-30 gap-y-6 lg:max-w-325 overflow-x-auto overflow-y-hidden lg:overflow-visible px-12 lg:px-0 snap-x snap-mandatory pb-8 lg:pb-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Vendor-specific scrollbar hiding via Styled JSX */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Iterating through centralized STEPS_DATA to render polymorphic cards */}
          {STEPS_DATA.map((step) => (
            <div key={step.id} className="shrink-0 snap-center">
              <StepCard
                id={step.id}
                title={step.title}
                hasLine={step.hasLine}
                hideLineOnDesktop={step.id === "04"}
                image={step.image} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
