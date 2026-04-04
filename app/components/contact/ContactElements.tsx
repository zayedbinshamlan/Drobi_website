import React from "react";
import Image from "next/image";

/**
 * StatusCardProps Interface
 * @interface StatusCardProps
 * @property {string} text - The core message or status to display inside the card.
 * @property {string} opacity - Tailwind opacity class (e.g., 'opacity-100') to control visibility stages.
 * @property {string} width - Dynamic width class to handle varying layout requirements.
 * @property {string} px - Custom horizontal padding class, primarily for desktop fine-tuning.
 */
interface StatusCardProps {
  text: string;
  opacity: string;
  width: string;
  px: string;
}

/**
 * StatusCard Component
 * * A premium informational card utilizing the Glassmorphism design language.
 * Features:
 * - Visual Depth: Implements `backdrop-blur-md` and semi-transparent backgrounds for a frosted-glass effect.
 * - Interactive States: Smooth `scale` transitions on hover to provide tactile user feedback.
 * - Structural Integrity: Uses `min-h-17.5` and `shrink-0` to prevent layout collapse in fluid containers.
 * - Shadow Layering: Combined with `shadow-lg` to separate the card from complex backgrounds.
 * * @component
 */
export function StatusCard({ text, opacity, width, px }: StatusCardProps) {
  return (
    <div
      /**
       * Component Styling Logic:
       * - bg-[#EFE8FD]/80: 80% opacity brand-colored base.
       * - transition-all: Ensures color, scale, and shadow changes are fluid.
       */
      className={`
        ${width} h-auto min-h-17.5
         lg:h-[92.56px] 
         bg-[#EFE8FD]/80 ${opacity}
         py-4 lg:py-[23.14px] px-6 lg:${px}
         rounded-[20px] lg:rounded-[25.07px] shadow-lg
         flex items-center justify-between gap-4
         transition-all hover:scale-[1.02] lg:hover:scale-105 duration-300 backdrop-blur-md
      `}
    >
      {/* --- Icon Wrapper --- 
          Includes a shadow-inner and semi-transparent circular base for extra depth.
      */}
      <div className="w-10 h-10 lg:w-11.5 lg:h-11.5 shrink-0 bg-white/50 rounded-full p-1.5 shadow-inner">
        <Image
          src="/images/Frame-card-contact.svg"
          alt="Status Icon"
          width={46}
          height={46}
          className="object-contain w-full h-full"
        />
      </div>

      {/* --- Card Content --- 
          Responsive typography with RTL alignment (text-right).
      */}
      <span className="text-black font-semibold lg:font-normal text-sm md:text-base lg:text-[18px] leading-tight flex-1 text-right">
        {text}
      </span>
    </div>
  );
}

/**
 * BackgroundDecorations Component
 * * Manages the atmospheric branding elements for the section background.
 * Features:
 * - Dynamic Watermarking: A large-scale brand logo that shifts and fades based on viewport width.
 * - Asset Prioritization: The main watermark uses `priority` to ensure fast rendering of large-scale SVGs.
 * - Art Direction: A secondary 'Group.svg' asset appears only on desktop to fill visual whitespace.
 */
export const BackgroundDecorations = () => (
  <>
    {/* --- Primary Watermark Layer --- 
        Strategy: 
        - Mobile: Pushed to the right/faded.
        - Desktop: Becomes a prominent visual anchor (z-0).
    */}
    <div className="absolute right-[-20%] md:right-[20%] lg:right-[46%] top-10 w-full md:w-150 lg:w-212.5 opacity-20 md:opacity-40 lg:opacity-100 pointer-events-none">
      <Image
        src="/images/vector-logo.svg"
        alt="Vector Watermark"
        width={720}
        height={800}
        className="object-contain"
        /**
         * Priority Attribute:
         * This image is large and part of the visual structure; pre-loading prevents
         * sudden layout shifts as the user scrolls into the section.
         */
        priority
      />
    </div>

    {/* --- Secondary Decorative Accent --- 
        Desktop-only visual cue (Group.svg) that adds an extra layer of brand detail.
    */}
    <div className="hidden lg:block absolute right-[5%] lg:right-[55%] top-[2%] w-10 lg:w-20 origin-center ">
      <Image
        src="/images/Group.svg"
        alt="Decorative Shape"
        width={56}
        height={38}
        className="w-full h-auto"
      />
    </div>
  </>
);
