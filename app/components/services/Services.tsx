"use client";

import React from "react";
import Image from "next/image";
import { servicesData } from "@/app/data/servicesData";
import { ServiceCard, ServiceTitleSparkle } from "./ServiceElements";

/**
 * Services Component
 * * The primary showcase for Drobi's core transportation and logistics offerings.
 * Features:
 * - Brand-Centric Design: Utilizes the signature deep violet (#390D8E) background with rounded-top geometry.
 * - Responsive Grid Architecture: Implements a 1-column (Mobile), 2-column (Tablet), and 3-column (Desktop) grid.
 * - Layered Visuals: Combines priority-loaded background decorations with interactive service cards.
 * - LCP Optimization: Marks the critical background SVG as `priority` for faster initial rendering.
 * * @component
 * @returns {JSX.Element} The full-width services overview section.
 */
export default function Services() {
  return (
    <section
      /**
       * Root Section Styling:
       * - max-w-360: Constrains horizontal growth on ultra-wide displays.
       * - rounded-t: Dynamic top-radius that scales with screen size for a cohesive mobile-to-desktop look.
       * - bg-[#390D8E]: The platform's primary brand identity color.
       */
      className="relative w-full max-w-360 mx-auto bg-[#390D8E] rounded-t-[30px] md:rounded-t-[40px] lg:rounded-t-[50px] pt-12 md:pt-16 lg:pt-20 pb-8 lg:pb-10 px-6 md:px-12 lg:px-25 flex flex-col gap-8 md:gap-12 lg:gap-15 overflow-hidden"
      dir="rtl"
    >
      {/* --- 1. Decorative Background Layer ---
          This asset (top-hero.svg) is a high-priority visual that provides 
          textural depth to the section's top-right corner.
      */}
      <div className="absolute top-0 right-0 z-10 pointer-events-none w-45 md:w-62.5 lg:w-87.5 opacity-40 lg:opacity-100">
        <Image
          src="/images/top-hero.svg"
          alt="Section Background Decoration"
          width={350}
          height={442}
          className="w-full h-auto object-contain"
          /**
           * Priority Attribute:
           * Essential for background assets that appear immediately on scroll
           * to improve the Largest Contentful Paint (LCP) performance score.
           */
          priority
        />
      </div>

      {/* --- 2. Section Header Layer ---
          Features a semantic hierarchy with a bold <h2> and supporting subtext.
          Includes a localized 'Sparkle' accent for brand consistency.
      */}
      <div className="relative z-20 text-center flex flex-col gap-2 lg:gap-4">
        <h2 className="text-white font-bold text-center align-middle text-4xl md:text-5xl lg:text-[60px] leading-tight lg:leading-18.75">
          خدمات{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#BFA2F7]">دروبي</span>
            {/* Functional Sparkle Component positioned relative to the highlighted text */}
            <ServiceTitleSparkle />
          </span>
        </h2>
        <p className="text-white/90 text-[16px] md:text-[18px] lg:text-[20px] mt-2 lg:mt-4">
          تجربة رحلات متكاملة صممت خصيصاً لراحتك
        </p>
      </div>

      {/* --- 3. Interactive Services Grid ---
          Optimized spacing using Tailwind's custom gap utilities.
          Uses a 'justify-items-center' strategy to maintain visual balance on all viewports.
      */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-11.5 gap-y-6 lg:gap-y-10 justify-items-center">
        {/* Iterating through centralized servicesData to render individual cards */}
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconPath={service.iconPath}
          />
        ))}
      </div>
    </section>
  );
}
