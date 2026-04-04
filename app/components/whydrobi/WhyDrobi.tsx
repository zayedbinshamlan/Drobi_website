"use client";

import React from "react";
import Image from "next/image";
import { featuresData } from "@/app/data/featuresData";
import { FloatingCaptainCard, WhyDrobiDecorations } from "./WhyDrobiElements";
import { motion } from "framer-motion";

/**
 * WhyDrobi Component
 * * A high-conversion section showcasing the platform's value propositions.
 * Features:
 * - Responsive Layout: Swaps column order on mobile (Image first) vs desktop (Text first) for better visual flow.
 * - Staggered Reveal: Uses Framer Motion's `whileInView` for subtle fade-in effects on feature cards.
 * - Layered Compositing: Integrates decorative SVGs, floating status cards, and main illustrations.
 * - Glassmorphism: Applies backdrop-blur to feature cards for a modern, airy aesthetic.
 * * @component
 */
export default function WhyDrobi() {
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* =========================================
           1. Content Column (Copy & Features)
           ========================================= 
           - order-2 (Mobile): Moves text below the image for mobile-first visual impact.
           - order-1 (Desktop): Keeps text on the right (RTL context) as the primary focal point.
        */}
        <div className="order-2 lg:order-1 lg:w-1/2 flex flex-col items-start w-full">
          {/* Section Badge: Visual categorization indicator */}
          <div className="mb-4 lg:mb-6 bg-[#DFD0FB] text-[#390D8E] px-4 py-2 rounded-[44px] w-max h-8 lg:h-10 text-xs lg:text-sm font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#390D8E] rounded-full"></span>
            تنقل بذكاء
          </div>

          {/* Heading: Features a relative-positioned decorative sparkle asset */}
          <h2 className="text-[#1A1A1A] text-3xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            لماذا{" "}
            <span className="text-[#390D8E] relative inline-block">
              دروبي؟
              <div className="absolute -top-6 -left-8 md:-top-8 md:-left-10 lg:-top-10 lg:-left-12 w-max pointer-events-none z-20">
                <Image
                  src="/images/title-hero.svg"
                  alt="Headline Decoration"
                  width={55}
                  height={35}
                  className="w-10 md:w-12 lg:w-13.75 h-auto"
                />
              </div>
            </span>
          </h2>

          <p className="text-[#535862] text-base md:text-lg lg:text-xl mb-8 lg:mb-12">
            لأننا نقدّم تجربة تنقل تركّز عليك.
          </p>

          {/* Features Grid: Iterative rendering of value props with motion enhancements */}
          <div className="w-full flex flex-col gap-4 lg:gap-6">
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
                /**
                 * Animation Strategy: Dynamic responsive animations
                 * يتم تفعيل الأنميشن فقط إذا كانت الشاشة أكبر من 1024px (Desktop)
                 * في الجوال، تكون الحالة الابتدائية والنهائية متطابقة (opacity: 1) لتعطيل الحركة.
                 */
                initial={{
                  opacity:
                    typeof window !== "undefined" && window.innerWidth < 1024
                      ? 1
                      : 0,
                }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  // اختيارياً: يمكنك تعطيل الـ transition تماماً في الجوال
                  delay:
                    typeof window !== "undefined" && window.innerWidth < 1024
                      ? 0
                      : 0.1,
                }}
                className="flex items-start gap-4 lg:gap-6 z-10 bg-[#EFE8FD99] backdrop-blur-sm shadow-sm p-4 lg:p-6 rounded-2xl lg:rounded-3xl border border-transparent hover:shadow-lg transition-all"
              >
                {/* Icon Wrapper */}
                <div className="w-10 h-10 lg:w-12 lg:h-11 bg-[#DFD0FB] rounded-lg lg:rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                    className="w-6 h-6 lg:w-7 lg:h-7 object-contain"
                  />
                </div>

                {/* Textual Payload */}
                <div className="flex flex-col justify-center">
                  {/* استخدام وزن Semibold (600) لخط HONOR Sans */}
                  <h3 className="text-[#0E0926] text-[17px] lg:text-[20px] font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-[#535862] text-[14px] lg:text-[15px] leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
           2. Asset Column (Illustration & Decorations)
           ========================================= 
           - order-1 (Mobile): Ensures the main visual is seen first on small screens.
        */}
        <div className="order-1 lg:order-2 relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          {/* Abstract background shapes and floating visual cues */}
          <WhyDrobiDecorations />

          {/* Core Visual Wrapper: Maintains aspect ratio and contains floating components */}
          <div className="relative w-full max-w-87.5 md:max-w-112.5 lg:max-w-175">
            <Image
              src="/images/why-drobi.png"
              alt="Drobi Captain Illustration"
              width={700}
              height={700}
              /**
               * Priority Loading: Critical for LCP performance as it's a large image in the fold.
               */
              priority
              className="object-cover relative z-10 w-full h-auto"
            />

            {/* Anchored status card: Provides social proof/real-time context */}
            <FloatingCaptainCard />
          </div>
        </div>
      </div>
    </section>
  );
}
