"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { SPONSORS_LOGOS } from "@/app/data/SponsorsData";

/**
 * SponsorsSection Component
 * * A dynamic partner showcase featuring an infinite horizontal scrolling marquee.
 * Features:
 * - High-Performance Animation: Powered by `react-fast-marquee` for smooth 60fps scrolling.
 * - Complex Background Blending: Utilizes a dual-gradient with `overlay` blend mode for a textured violet aesthetic.
 * - Interactive States: Implements a grayscale-to-color transition on hover to highlight individual partners.
 * - Auto-Fill Logic: Ensures the marquee is always populated regardless of the number of logo assets.
 * * @component
 */
export default function SponsorsSection() {
  return (
    <section
      /**
       * Section Background Configuration:
       * Uses a sophisticated overlay blending two linear gradients to match the platform's brand palette.
       */
      className="w-full py-6 md:py-10 overflow-hidden"
      style={{
        background: `linear-gradient(230deg, #BFA2F7, #BFA2F7), linear-gradient(239.44deg, #ece6f8 55.77%, #eae2fa 214.29%)`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Marquee Wrapper: 
        Enforces LTR (Left-to-Right) direction for the scrolling track regardless of the page-wide RTL setting.
      */}
      <div dir="ltr" className="w-full flex items-center">
        <Marquee
          speed={60} // Speed in pixels per second
          pauseOnHover={true} // Stops animation when user interacts for better accessibility
          direction="left"
          gradient={false} // Managed manually via section background
          autoFill={true} // Repeats logos to fill the entire container width
        >
          {SPONSORS_LOGOS.map((src, index) => (
            /**
             * Logo Container:
             * - Responsive Sizing: Scales from 64px (mobile) to 100px (desktop).
             * - Optimized Spacing: Uses `mx-6` to `mx-11.5` for balanced visual rhythm.
             */
            <div
              key={index}
              className="mx-6 md:mx-11.5 w-16 h-16 md:w-25 md:h-25 shrink-0 flex items-center justify-center group"
            >
              <Image
                src={src}
                alt={`Sponsor Logo ${index + 1}`}
                width={100}
                height={100}
                /**
                 * LCP Optimization:
                 * Logos are small but numerous; priority loading ensures they appear
                 * without flickers during the initial scroll animation.
                 */
                priority
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-full h-full cursor-pointer"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
