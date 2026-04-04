import React from "react";
import Image from "next/image";
import { FLOATING_CARDS_DATA_JOIN_CAPTAIN } from "@/app/data/FloatingCardData";
import { FloatingCard } from "@/app/components/ui/FloatingCard";
import Link from "next/link";

/**
 * RightSideVector Decoration
 * * A specialized background asset for the JoinAsCaptain section.
 * Features:
 * - Layered Visual Depth: Positioned at `z-0` to provide a subtle texture behind the primary CTA.
 * - Multi-Engine Blending: Uses `mix-blend-overlay` to interact with the section's violet gradient,
 * ensuring the pattern looks integrated rather than just "placed on top".
 * - Adaptive Opacity: Switches from `opacity-20` (Mobile) to `opacity-60` (Desktop) to manage visual
 * clutter on smaller screens while providing rich detail on wider viewports.
 * - Strategic Positioning: Uses a significant negative top offset (`lg:-top-72.5`) on desktop to
 * align the pattern's focal point with the section's center.
 * * @component
 */
export const RightSideVector = () => (
  <div className="absolute top-0 lg:-top-72.5 left-0 lg:left-21.25 h-full z-0 pointer-events-none flex items-center justify-center lg:justify-start w-full lg:w-auto opacity-20 lg:opacity-60">
    <Image
      src="/images/vector-JoinAsCaptain.svg"
      alt="Background Vector Pattern Decoration"
      width={403}
      height={378}
      /**
       * Image Styling Strategy:
       * - object-cover: Ensures the pattern maintains its scale regardless of parent container shifts.
       * - max-w-75: Limits the decoration size on mobile to prevent it from overwhelming the content.
       */
      className="object-cover mix-blend-overlay w-full max-w-75 lg:max-w-none lg:w-100.75 h-auto"
    />
  </div>
);

/**
 * JoinContent Component
 * * Sub-component for managing the textual payload and primary CTA.
 * * Separated for better maintainability and cleaner main section file.
 */
export const JoinContent = () => (
  <div className="order-2 lg:order-1 w-full lg:w-1/2 h-full relative overflow-hidden bg-[linear-gradient(91.74deg,#26095E_-4.96%,#390D8E_99.24%)] py-12 lg:py-0">
    {/* Background visual cue (SVGs or Patterns) */}
    <RightSideVector />

    <div className="relative z-10 h-full px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-right text-white">
      {/* Headline: Uses a lighter violet accent (#BFA2F7) for the primary catchphrase */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] mb-4 lg:mb-6">
        خـلــــــــــي سيـــــــارتــــــــك <br />
        <span className="text-[#BFA2F7]">مصدر دخلك الأساسي</span>
      </h2>

      {/* Supporting Narrative: Constrained width for optimal reading rhythm */}
      <p className="text-[#ffffff] text-[15px] md:text-[18px] lg:text-[20px] mb-8 lg:mb-10 max-w-md leading-relaxed">
        انضم إلى مجتمع دروبي واستمتع بمرونة تامة في العمل مع دخل مجزي ومزايا
        حصرية للكباتن المتميزين
      </p>

      {/*  JoinAsCaptain Button:
      Updated to navigate to the Captain's registration page.
      Logic: Uses next/link for optimized pre-fetching and instant navigation
      */}
      <Link
        href="/captain"
        className="flex items-center justify-center gap-2 w-full max-w-70 lg:max-w-none lg:w-58.5 h-12 lg:h-14 px-8 lg:px-10 py-3 rounded-3xl bg-[linear-gradient(264.56deg,#EFE8FD_14%,#9F73F4_142.99%)] shadow-[0_0_4px_0_#0000001A,0_0_8px_0_#EFE8FD99] text-[#390D8E] text-[16px] lg:text-[18px] font-bold hover:scale-105 transition-transform duration-300 text-center"
      >
        انضم ككابتن الآن
      </Link>
    </div>
  </div>
);

/**
 * JoinVisuals Component
 * * Sub-component for managing the imagery and floating metadata layers.
 * * Handles the visual side of the JoinAsCaptain section.
 */
export const JoinVisuals = () => (
  <div className="order-1 lg:order-2 relative w-full lg:w-1/2 aspect-372/521 lg:aspect-auto lg:h-full lg:-mr-px">
    {/* Main Background Image: 
        Optimized with priority loading for immediate visual feedback.
    */}
    <Image
      src="/images/JoinAsCaptain.png"
      alt="Join as a Drobi Captain"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      quality={100}
      priority
    />

    {/* --- Floating Metadata Cards --- 
        Dynamically rendered from centralized FLOATING_CARDS_DATA.
        Positions are controlled via the `containerClass` property.
    */}
    {FLOATING_CARDS_DATA_JOIN_CAPTAIN.map((card) => (
      <FloatingCard
        key={card.id}
        label={card.label}
        value={card.value}
        icon={card.icon}
        className={card.containerClass}
        dir={card.dir}
      />
    ))}
  </div>
);
