"use client";

import React from "react";
import HeroCards from "./HeroCards";
import {
  TopDecoration,
  TitleSparkle,
  DownloadButton,
} from "@/app/components/hero-home/HeroElements";

/**
 * Hero Component (Home Page)
 * * The primary landing zone designed to deliver the platform's core value proposition.
 * Features:
 * - Layered Compositing: Integrates static decorative SVGs with dynamic UI cards (HeroCards).
 * - Typography Focus: Implements a bold, high-contrast headline with localized decorative accents (TitleSparkle).
 * - Responsive Verticality: Dynamic padding-top (pt-28 to pt-40) ensures the content is perfectly framed below the global Navbar.
 * - Anti-Aliasing: Uses optimized font smoothing and tracking (-4%) for a clean, professional aesthetic.
 * * @component
 * @returns {JSX.Element} The hero section for the main landing page.
 */
export default function Hero() {
  return (
    <div
      /**
       * Root Container:
       * - overflow-hidden: Prevents background decorations from triggering accidental horizontal scrollbars.
       * - dir="rtl": Enforces Right-to-Left alignment for the Arabic-first interface.
       */
      className="relative flex flex-col items-center w-full bg-transparent overflow-hidden"
      dir="rtl"
    >
      <p className="sr-only">
        دروبي هو تطبيق التوصيل والمشاوير في المملكة العربية السعودية. يتيح حجز
        المشاوير بسهولة وأمان داخل المدن السعودية مع إمكانية التسجيل كسائق توصيل
        وزيادة فرص الدخل.
      </p>
      {/* --- 1. Background Decoration Layer --- 
          Strategy: Hidden on mobile to reduce visual noise; strictly for tablet/desktop visual depth.
      */}
      <div className="hidden md:block pointer-events-none absolute inset-0 z-0">
        <TopDecoration />
      </div>

      {/* --- 2. Main Content Container --- 
          Orchestrates the vertical flow of the headline, subheadline, and primary CTA.
      */}
      <div className="flex flex-col items-center w-full opacity-100 z-10 pt-28 md:pt-36 lg:pt-40">
        {/* Text and Call-to-Action Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 w-full mb-8 md:mb-10">
          <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-9 w-full px-4 md:px-8">
            {/* Primary Headline: 
                Uses a 'span' with relative positioning to host the TitleSparkle element precisely.
            */}
            <h1 className=" text-[#232426] text-3xl md:text-5xl lg:text-[56px] font-black leading-[1.3] md:leading-[1.2] tracking-[-4%] text-center antialiased">
              وين ما كنت… <span className="text-[#390D8E]">دروبي أقرب </span>
              <span className="relative text-[#390D8E] inline-block">
                لك
                <TitleSparkle />
              </span>
            </h1>

            {/* Supporting Subheadline:
                Constrained max-width to ensure optimal line length for readability.
            */}
            <p className="text-[#535862] text-lg md:text-xl lg:text-[24px] font-normal leading-normal tracking-[-4%] text-center antialiased max-w-[90%] md:max-w-xl lg:max-w-175">
              خيارات أكثر. أمان أعلى. تجربة أفضل.
            </p>
          </div>

          {/* Primary CTA Trigger */}
          <DownloadButton />
        </div>

        {/* --- 3. Dynamic Graphic Showcase --- 
            Injects the interactive elements and mobile mockups with floating data cards.
        */}
        <HeroCards />
      </div>
    </div>
  );
}
