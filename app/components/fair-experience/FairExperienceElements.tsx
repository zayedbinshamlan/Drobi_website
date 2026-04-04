"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FairFeature } from "@/app/data/FairExperienceData";

/**
 * Interface representing the props for the FairCard component.
 */
interface FairCardProps {
  feature: FairFeature;
}

/**
 * FairCard Component
 * * Functional Overview:
 * - Renders a modular feature card for the "Fair Experience" ecosystem.
 * - Implements a viewport-aware animation strategy to enhance mobile performance.
 * - Utilizes Tailwind CSS for high-fidelity styling and interactive hover states.
 * * @param {FairCardProps} props - The component props containing feature metadata.
 * @returns {JSX.Element} The rendered motion-enhanced card.
 */
export const FairCard: React.FC<FairCardProps> = ({ feature }) => {
  return (
    <motion.div
      /* =========================================
         1. Animation & Performance Strategy
         ========================================= 
         Responsive Initialization:
         - Mobile (< 1024px): Opacity is set to 1 immediately to reduce CPU overhead.
         - Desktop (>= 1024px): Fade-in effect is enabled for premium visual flow.
      */
      initial={{
        opacity:
          typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      /* =========================================
         2. Structural Design & Interactivity
         ========================================= 
         - Fixed dimensions (h-55) ensure grid symmetry.
         - Custom shadow and border transitions on hover for depth perception.
      */
      className={`
        relative w-full
        max-w-73
        mx-auto h-55 p-8 
        flex flex-col items-center justify-start text-center gap-4 
        bg-white rounded-3xl
        shadow-[0px_4px_20px_rgba(57,13,142,0.03)] 
        border border-transparent hover:border-[#EADDFF] 
        hover:shadow-[0px_8px_30px_rgba(57,13,142,0.08)] 
        transition-all duration-300 group cursor-default
      `}
    >
      {/* Icon Wrapper: Secondary scale effect localized to Desktop hover events */}
      <div className="w-14 h-14 bg-[#F3EEFF] rounded-2xl flex items-center justify-center shrink-0 lg:group-hover:scale-110 transition-transform duration-300">
        <div className="relative w-6 h-6">
          <Image
            src={feature.icon}
            alt={feature.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Semantic Text Content: Utilizing HONOR Sans hierarchy */}
      <div className="flex flex-col items-center gap-2 w-full">
        <h3 className="text-[#1A1A1A] font-bold text-[18px] leading-snug">
          {feature.title}
        </h3>

        {/* Dynamic clamping to prevent layout shifts across various feature descriptions */}
        <p className="text-[#6B7280] text-[14px] leading-relaxed line-clamp-2 font-normal">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};
