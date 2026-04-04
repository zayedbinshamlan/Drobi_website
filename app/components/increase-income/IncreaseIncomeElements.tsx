import React from "react";
import Image from "next/image";
import { FEATURES, Feature } from "@/app/data/IncreaseIncomeData";
import { motion } from "framer-motion";
import { ActionButton } from "../ui/ActionButton";
// ==========================================
// Sub-Components & Elements
// ==========================================

/**
 * FeatureItem Component
 * * Renders an individual value proposition with an icon and text.
 * - Animation: Subtle vertical fade-in using Framer Motion.
 * - Layout: Flexbox container with a circular icon wrapper.
 * * @param {Feature} feature - Data object containing icon, title, and description.
 */
export const FeatureItem = ({ feature }: { feature: Feature }) => (
  <motion.div
    /**
     * Animation Strategy: Dynamic responsive animations
     */
    initial={{
      opacity:
        typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 0,
    }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex items-start gap-4"
  >
    {/* Icon Wrapper: Thematic violet background with centralized alignment */}
    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#EADDFF] flex items-center justify-center shrink-0">
      <Image
        src={feature.icon}
        alt={feature.title}
        width={24}
        height={24}
        className="object-contain"
      />
    </div>

    {/* Text Content: Structured with a semantic heading and descriptive paragraph */}
    <div className="flex flex-col mt-1 lg:mt-2">
      {/* استخدام أوزان خط HONOR Sans Arabic UI (Bold 700) */}
      <h4 className="text-[#1D124C] font-bold text-[16px] lg:text-[20px] mb-1">
        {feature.title}
      </h4>
      <p className="text-[#6B7280] text-[14px] lg:text-[16px] font-normal">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

/**
 * TextContent Component
 * * Handles the informational side of the section (Copy, List, CTA).
 * - Layout: Uses 'order-2' to move below the image on mobile, 'lg:order-1' to stay right on desktop.
 */
export const TextContent = () => (
  <div className="w-full lg:w-1/2 flex flex-col items-start text-right order-2 lg:order-1">
    {/* Main Typography Header */}
    <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1A1A1A] mb-4 leading-tight">
      زود دخلك <br />
      <span className="text-[#390D8E] mt-2 inline-block">مع دروبي Drobi</span>
    </h2>

    {/* Section Context / Description */}
    <p className="text-[#6B7280] text-base lg:text-[18px] mb-10 max-w-lg leading-relaxed">
      كن مدير نفسك، وتحكم في وقتك.
      <br />
      انضم إلى أسطول دروبي وتمتع بمزايا حصرية وعمولات عادلة. نحن شركاء نجاحك.
    </p>

    {/* Feature List: Mapped from centralized data source */}
    <div className="flex flex-col gap-6 lg:gap-8 mb-10 w-full">
      {FEATURES.map((feature) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>

    {/* Primary CTA: Registration trigger with micro-interaction states */}
    <ActionButton
      label="انضم ككابتن الآن"
      variant="action"
      href="#download-section"
      isDownloadLink={true}
      type="captain"
    />
  </div>
);

/**
 * ImageContent Component
 * * Manages the visual composition of the section.
 * - Performance: Uses the 'aspect-ratio' utility to prevent layout shift during image load.
 * - Animation: Slide-in effect (from x: -150 to 0) to draw user attention to the brand asset.
 */
export const ImageContent = () => (
  <div className="w-[calc(100%+3rem)] -mx-6 lg:w-2/3 lg:mx-0 relative flex justify-center lg:justify-end order-1 lg:order-2 mt-8 lg:mt-0">
    {/* Fixed Aspect-Ratio Wrapper: Ensures the image keeps its specific design dimensions */}
    <div className="relative w-full max-w-250 aspect-626/349">
      {/* --- Decorative Vector (Vectorincrease) ---
          Positioned absolutely to bleed out of the main container. 
          Hidden on mobile to optimize viewport real estate.
      */}
      <div
        className="absolute hidden lg:flex -bottom-8 -left-8 md:-bottom-12 md:-left-12 lg:-bottom-70 
      lg:-left-24 w-37.5 h-37.5 md:w-50 rotate-2 md:h-50 lg:w-125 lg:h-125 -z-10 pointer-events-none"
      >
        <Image
          src="/images/Vectorincrease.svg"
          alt="Decorative Vector"
          fill
          className="object-contain"
        />
      </div>

      {/* --- Main Hero Illustration ---
          Encapsulated in a motion container for the "Entry from Side" effect.
          Responsive behavior: 'object-cover' ensures the focal point remains sharp.
      */}
      <motion.div
        className="relative w-full h-full overflow-hidden"
        /**
         * Animation Strategy: Responsive Entry
         */
        initial={{
          opacity:
            typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 0,
          x:
            typeof window !== "undefined" && window.innerWidth < 1024
              ? 0
              : -150,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/images/Drobi-Captain.png"
          alt="كابتن دروبي يمسك الجوال"
          fill
          className="object-cover"
          priority={false}
          quality={90}
        />
      </motion.div>
    </div>
  </div>
);
