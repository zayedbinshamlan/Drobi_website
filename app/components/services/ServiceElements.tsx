"use client";

import React, { useState } from "react";
import Image from "next/image";

/**
 * ServiceCardProps Interface
 * @interface ServiceCardProps
 * @property {string} title - The main heading for the service.
 * @property {string} description - The detailed text revealed on hover or click.
 * @property {string} iconPath - The relative path to the icon asset.
 */
interface ServiceCardProps {
  title: string;
  description: string;
  iconPath: string;
}

/**
 * ServiceCard Component
 * * An interactive UI element designed for high user engagement.
 * Features:
 * - Dual Interaction: Supports both desktop 'hover' and mobile 'click' states via a local `isActive` state.
 * - Dynamic Reveal: Uses `max-h` and `opacity` transitions to smoothly expand descriptive content.
 * - Layered Animations: Combines background sliding overlays, glass shine effects, and content translation.
 * - Fluid Scaling: Precisely adjusted for various screen sizes (Mobile, Tablet, Desktop).
 * * @component
 */
export const ServiceCard = ({
  title,
  description,
  iconPath,
}: ServiceCardProps) => {
  // Local state to handle persistent activation on touch devices
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`relative flex flex-col items-center justify-center bg-white overflow-hidden cursor-pointer group w-full max-w-85 lg:max-w-93 h-50 lg:h-56.5 rounded-[20px] lg:rounded-3xl border border-gray-100 shadow-sm transition-all duration-500 ${
        isActive ? "active" : ""
      }`}
    >
      {/* --- 1. Background Overlay Layer ---
          Sliding violet bar that expands to fill the background on interaction.
      */}
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#7F45F0] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) group-hover:w-full group-[.active]:w-full z-0" />

      {/* --- 2. Visual Polish Layer ---
          Glass/Shine effect that sweeps across the card for a high-end feel.
      */}
      <div className="absolute top-0 -left-full w-1/2 h-full bg-white/20 skew-x-[-25deg] transition-all duration-1000 ease-in-out group-hover:left-[150%] group-[.active]:left-[150%] z-5" />

      {/* --- 3. Content Interaction Layer --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 lg:px-8 w-full">
        {/* Animated Icon Container: Shrinks and moves upward to make room for description */}
        <div className="w-12 h-12 lg:w-15 lg:h-15 bg-[#EFE8FD] rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-4 transition-all duration-800 ease-in-out group-hover:scale-75 group-[.active]:scale-75 group-hover:-translate-y-4 lg:group-hover:-translate-y-6 group-[.active]:-translate-y-4 lg:group-[.active]:-translate-y-6 group-hover:bg-[#DFD0FB] group-[.active]:bg-[#DFD0FB]">
          <Image
            src={iconPath}
            alt={title}
            width={32}
            height={32}
            className="object-contain w-6 h-6 lg:w-8 lg:h-8 transition-all duration-800 ease-in-out"
          />
        </div>

        {/* Dynamic Service Title: Moves upward and scales down slightly on interaction */}
        <h3 className="text-[#1D124C] text-[17px] lg:text-[19px] font-bold transition-all duration-800 ease-in-out group-hover:-translate-y-6 lg:group-hover:-translate-y-9 group-[.active]:-translate-y-6 lg:group-[.active]:-translate-y-9 group-hover:scale-90 group-[.active]:scale-90 mb-1 lg:mb-2">
          {title}
        </h3>

        {/* Collapsible Content: Hidden by default, smoothly expanded via CSS transitions */}
        <p className="max-h-0 opacity-0 overflow-hidden text-[#241953] text-[15px] lg:text-base leading-relaxed transition-all duration-1000 ease-in-out group-hover:max-h-32 group-hover:opacity-100 group-[.active]:max-h-32 group-[.active]:opacity-100 group-hover:-translate-y-6 lg:group-hover:-translate-y-8 group-[.active]:-translate-y-6 lg:group-[.active]:-translate-y-8">
          {description}
        </p>
      </div>
    </div>
  );
};

/**
 * ServiceTitleSparkle Component
 * * A purely decorative visual accent for section headings.
 * - Positioning: Absolutely placed with relative offsets to "pop" out of the container bounds.
 * - Optimization: Marks as non-interactive via `pointer-events-none`.
 */
export const ServiceTitleSparkle = () => (
  <div className="absolute -top-3 -left-4 md:-top-4 md:-left-6 lg:-top-5 lg:-left-8 w-max pointer-events-none z-20">
    <Image
      src="/images/title-hero.svg"
      alt="Sparkle Decoration"
      width={55}
      height={35}
      className="w-8 md:w-10 lg:w-13.75 h-auto"
    />
  </div>
);
