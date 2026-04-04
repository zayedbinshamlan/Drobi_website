"use client";

import React from "react";
import { FAIR_EXPERIENCE_DATA } from "@/app/data/FairExperienceData";
import { FairCard } from "./FairExperienceElements";

/**
 * FairExperience Component
 * * Displays the "Fair and Transparent Experience" section for the captains.
 * Features a fully responsive 4-column grid layout and a soft vertical gradient background.
 * * @component
 * @returns {JSX.Element} The rendered section.
 */
export default function FairExperience() {
  return (
    <section
      className="relative w-full py-16 lg:py-24 overflow-hidden"
      // Soft gradient background matching the UI design specifications
      style={{
        background: `linear-gradient(180deg, #FDFBFF 0%, #F4EEFF 100%)`,
      }}
      dir="rtl"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* ========================================= */}
        {/* Section Header (Title & Subtitle)         */}
        {/* ========================================= */}
        <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
          <h2 className="text-[#1A1A1A] text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4">
            تجربة عادلة وشفافة
          </h2>
          <p className="text-[#535862] text-base md:text-lg lg:text-[20px] font-medium max-w-2xl">
            نحن نؤمن بالوضوح التام في كل ما يخص شراكتنا معك.
          </p>
        </div>

        {/* ========================================= */}
        {/* Features Grid Layout                      */}
        
        {/* ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {FAIR_EXPERIENCE_DATA.map((feature) => (
            <FairCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
