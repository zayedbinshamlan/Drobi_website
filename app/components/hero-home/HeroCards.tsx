"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CARD_DIMENSIONS, ANIMATION_CONFIG } from "./HeroCardsConstants";
import {
  BackgroundBase,
  DottedEllipse,
  DownHeroDecoration,
  StarDecoration,
} from "./HeroCardsElements";

/**
 * HeroCards Component
 * * Orchestrates the visual centerpiece of the Hero section.
 * Features:
 * - Staggered Card Animation: Desktop view features an infinite, synchronized sliding animation for side cards.
 * - Responsive Dual-Rendering: Implements static, high-visibility layouts for mobile and full-motion graphics for desktop.
 * - Performance: Utilizes Next.js `priority` for the center-most asset (LCP) and Framer Motion for hardware-accelerated transitions.
 * - Geometric Compositions: Layers custom SVGs (Ellipses, Stars) to create depth around the main feature.
 * * @component
 */
export default function HeroCards() {
  const { sideWidth, sideHeight, centerWidth, centerHeight } = CARD_DIMENSIONS;
  const { duration, pauseTime, exitDistance } = ANIMATION_CONFIG;

  return (
    <div className="relative w-full
     h-75
      md:h-112.5
       lg:h-128.75
        flex justify-center items-start overflow-visible lg:overflow-hidden pt-4 lg:pt-0">
      {/* --- 1. Background & Decorative Elements Layer --- 
          Static brand assets that provide visual context and depth.
      */}
      <BackgroundBase />
      <StarDecoration side="right" distance={exitDistance} top="-2px" />
      <DownHeroDecoration />
      <DottedEllipse />

      {/* =========================================
         2. Right Card Section (Map/Location View)
         ========================================= 
      */}

      {/* Mobile/Tablet Static Layout: Focused on quick rendering and legibility */}
      <div
        className="lg:hidden absolute z-10 overflow-hidden rounded-[18px] md:rounded-3xl 
                   w-40
                    h-49
                     top-10
                      translate-x-26.25
                   md:w-55 
                   md:h-67.5
                    md:top-7.5
                     md:translate-x-37.5"
      >
        <Image
          src="/images/Right-Card-hero.png"
          alt="Map View Illustration"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop Animated Layout: Infinite sliding logic using keyframes */}
      <motion.div
        animate={{ x: [0, exitDistance, exitDistance, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay: pauseTime,
          times: [0, 0.25, 0.75, 1],
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute z-10 overflow-hidden rounded-4xl"
        style={{ width: sideWidth, height: sideHeight, top: "24px" }}
      >
        <Image
          src="/images/Right-Card-hero.png"
          alt="Map View Illustration"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* =========================================
         3. Left Card Section (App Interface View)
         ========================================= 
      */}

      {/* Mobile/Tablet Static Layout */}
      <div
        className="lg:hidden absolute z-10 overflow-hidden rounded-[18px] md:rounded-3xl 
                   w-40
                    h-49
                     top-10
                      -translate-x-26.25
                   md:w-55
                    md:h-67.5
                     md:top-7.5
                      md:-translate-x-37.5"
      >
        <Image
          src="/images/Left-Card-hero.png"
          alt="App Interface View"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop Animated Layout: Synchronized opposite motion to the right card */}
      <motion.div
        animate={{ x: [0, 0, -exitDistance, -exitDistance, 0] }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay: pauseTime,
          times: [0, 0.2, 0.5, 0.75, 1],
          ease: "easeInOut",
        }}
        className="hidden lg:block absolute z-10 overflow-hidden rounded-4xl"
        style={{ width: sideWidth, height: sideHeight, top: "24px" }}
      >
        <Image
          src="/images/Left-Card-hero.png"
          alt="App Interface View"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* =========================================
         4. Center Hero Card Section (Main Feature)
         ========================================= 
         Design logic: High-contrast elevation via heavy shadows and white borders 
         to establish the 'Car' as the primary focal point.
      */}

      {/* Mobile Layout */}
      <div
        className="lg:hidden relative z-20 overflow-hidden
                   bg-white shadow-[0_16px_32px_-12px_rgba(0,0,0,0.3)]
                   md:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)]
                   border-[3px] md:border-[6px] border-white 
                   w-46.25 
                   h-58.25
                    rounded-3xl
                   md:w-65
                    md:h-82.5
                     md:rounded-4xl"
      >
        <Image
          src="/images/car-hero.png"
          alt="Main Feature: Drobi Car"
          fill
          className="object-cover"
          priority 
        />
      </div>

      {/* Desktop Layout */}
      <div
        className="hidden lg:block relative z-20 overflow-hidden bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] border-[6px] border-white"
        style={{
          width: centerWidth,
          height: centerHeight,
          borderRadius: "32px",
        }}
      >
        <Image
          src="/images/car-hero.png"
          alt="Main Feature: Drobi Car"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Final Side Accents */}
      <StarDecoration side="left" distance={exitDistance} top="50px" />
    </div>
  );
}
