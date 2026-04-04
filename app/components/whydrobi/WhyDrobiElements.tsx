import React from "react";
import Image from "next/image";

/**
 * FloatingCaptainCard Component
 * * An interactive overlay card designed to provide visual feedback and status updates.
 * Features:
 * - Pulse Animation: Uses a dual-layer 'animate-ping' effect to draw user attention.
 * - Dynamic Scaling: Responsively adjusts width (90% to max-w-47.5) and internal spacing based on the viewport.
 * - Visual Depth: Implements a custom green-tinted shadow to signify positive status/location.
 * - Interactive Hover: Subtle scale-up effect to provide tactile feedback even on static elements.
 * * @component
 */
export const FloatingCaptainCard = () => (
  <div className="absolute bottom-[10%] left-[1%] md:left-[1%] lg:left-[11%] z-20 w-[90%] md:w-full min-w-30 md:min-w-33.75 max-w-38.75 md:max-w-47.5">
    <div className="w-full h-full bg-white rounded-xl p-1 md:p-1.5 flex items-center gap-2 md:gap-[5%] shadow-[0_8px_25px_rgba(5,166,96,0.15)] border border-gray-50 transition-transform hover:scale-105 duration-300 cursor-default">
      {/* --- Icon Wrapper with Pulse Animation --- 
          - animate-ping: Creates the expanding outer ring effect.
          - z-10: Ensures the main icon stays on top of the animation.
      */}
      <div className="relative w-[22%] max-w-6.5 md:max-w-8.5 aspect-square flex items-center justify-center shrink-0">
        <span className="absolute inset-0 bg-[#05A660] rounded-[25%] animate-ping opacity-30"></span>
        <div className="relative w-full h-full bg-[#DCFCE7] rounded-[25%] flex items-center justify-center z-10">
          <Image
            src="/icons/Vector-loc-drobi.svg"
            alt="Status Icon"
            width={16}
            height={16}
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
      </div>

      {/* --- Card Typography Content --- 
          Uses optimized line-height and minimal font sizes for a compact, secondary-info feel.
      */}
      <div className="flex flex-col text-right justify-center flex-1">
        <h4 className="text-[#390D8E] font-bold leading-tight mb-0.5 text-[9px] md:text-[11px]">
          وين دربك اليوم؟
        </h4>
        <p className="text-[#6B7280] leading-[1.2] text-[7px] md:text-[9px]">
          حدد وجهتك..وابدأ رحلتك بسهولة
        </p>
      </div>
    </div>
  </div>
);

/**
 * WhyDrobiDecorations Component
 * * A specialized fragment for managing complex background visual assets.
 * Features:
 * - Layered Compositing: Coordinates multiple SVG assets across different Z-indices (z-0 to z-50).
 * - Art Direction: Precisely positions geometric ellipses and star accents relative to the parent section.
 * - Performance: Marks all assets as `pointer-events-none` to ensure zero interference with interactive content.
 * - Responsive Scaling: Adjusts the dimensions of decorative images from mobile to ultra-wide screens.
 */
export const WhyDrobiDecorations = () => (
  <>
    {/* --- Primary Ellipse and Top Star Pattern --- 
        Creates the focal background anchor on the right side.
    */}
    <div className="absolute top-1/2 right-0 z-0 pointer-events-none transform translate-x-1/3 -translate-y-1/2">
      <div className="w-70 md:w-95 lg:w-123.75">
        <Image
          src="/images/Ellipse-why-drobi.svg"
          alt="Geometric Background"
          width={495}
          height={495}
          className="opacity-80 w-full h-auto"
        />
      </div>
      {/* Floating star accent relative to the ellipse */}
      <div className="absolute -top-20 right-17 lg:-top-30 lg:right-30">
        <Image
          src="/images/Star-rt.svg"
          alt="Decorative Accent"
          width={120}
          height={120}
          className="w-15 md:w-22.5 lg:w-30 h-auto"
        />
      </div>
    </div>

    {/* --- Secondary Ellipse Background --- 
        Provides visual balance on the left side with a semi-transparent layer.
    */}
    <div className="absolute top-[60%] left-0 z-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-30 md:w-37.5 lg:w-50">
        <Image
          src="/images/Ellipse-why-drobi-2.svg"
          alt="Geometric Background Secondary"
          width={200}
          height={200}
          className="opacity-80 w-full h-auto"
        />
      </div>
    </div>

    {/* --- Bottom Left Star Accent --- 
        High Z-index (z-20) to ensure it floats above all other background layers.
    */}
    <div className="absolute z-20 -bottom-8 -left-2 lg:-bottom-15 lg:left-5 pointer-events-none">
      <Image
        src="/images/Star-lt.svg"
        alt="Decorative Accent Left"
        width={75}
        height={75}
        className="w-11.25 md:w-15 lg:w-18.75 h-auto"
      />
    </div>
  </>
);
