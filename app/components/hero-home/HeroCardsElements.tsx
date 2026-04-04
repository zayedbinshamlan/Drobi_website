import React from "react";
import Image from "next/image";

/**
 * BackgroundBase Component
 * * Provides the foundational architectural SVG for the desktop Hero section.
 * - Performance: Uses `priority` to ensure the background loads instantly, preventing white-flash during LCP.
 * - Visibility: Exclusively for desktop (lg) to maintain a clean, uncluttered mobile viewport.
 */
export const BackgroundBase = () => (
  <div className="hidden lg:flex absolute inset-0 z-0 justify-center pointer-events-none">
    <Image
      src="/images/bg-cards.svg"
      alt="Hero Background Base"
      width={1653}
      height={693}
      priority
    />
  </div>
);

/**
 * DottedEllipse Component
 * * A specialized geometric decoration that frames the central card stack.
 * - Fluid Layout: Dynamically scales from 180% (Mobile) to 1000px (Desktop) to ensure the visual arc remains consistent.
 * - Translation Logic: Uses precise `translate-y` offsets to align with the visual baseline of the HeroCards.
 */
export const DottedEllipse = () => (
  <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
    <div className="relative w-[180%]
     md:w-175
      lg:w-250
       h-55
        md:h-50
         lg:h-75
          translate-y-26.25
           md:translate-y-30
            lg:translate-y-37.5">
      <Image
        src="/images/Ellipse-hero.svg"
        alt="Dotted Ellipse Decoration"
        fill
        className="object-contain"
      />
    </div>
  </div>
);

/**
 * DownHeroDecoration Component
 * * An atmospheric asset positioned at the bottom-left of the Hero section.
 * - Intent: Adds a final layer of brand depth to the desktop layout.
 * - Static Positioning: Anchored absolutely to ensure it remains outside the primary interaction zone.
 */
export const DownHeroDecoration = () => (
  <div className="hidden lg:block absolute bottom-4 left-4 z-10 pointer-events-none">
    <Image
      src="/images/down-hero.svg"
      alt="Bottom Decoration"
      width={250}
      height={350}
    />
  </div>
);

/**
 * StarDecoration Component
 * * A dynamic decorative element that tracks the movement of the sliding hero cards.
 * Features:
 * - Reactive Positioning: On desktop, the horizontal position is calculated using the `distance` prop to ensure the star follows the card's animation path.
 * - Responsive Overrides: Implements custom `mobileTop` logic to prevent overlap with headline text on small screens.
 * - Layer Management: Switches Z-index (0 vs 30) based on which side it's on to ensure correct visual stacking.
 * * @param {('right'|'left')} side - The horizontal orientation of the star.
 * @param {number} distance - The current displacement value from the main animation config.
 * @param {string} top - Vertical offset from the container top.
 */
export const StarDecoration = ({
  side,
  distance,
  top,
}: {
  side: "right" | "left";
  distance: number;
  top: string;
}) => {
  const isRight = side === "right";
  const baseWidth = isRight ? 100 : 80;

  // Visual refinement: ensures the right star (usually higher) stays clear of mobile titles
  const mobileTop = isRight ? "30px" : top;

  return (
    <div
      className={`absolute inset-0 ${isRight ? "z-0" : "z-30"} pointer-events-none flex justify-center`}
    >
      <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-300 h-full">
        {/* --- Mobile & Tablet Layout ---
            Focuses on static, safe positioning to avoid performance overhead of JS-calc on mobile.
        */}
        <div
          className={`lg:hidden absolute ${isRight ? "right-0 md:right-16" : "left-0 md:left-20"} transition-all duration-300`}
          style={{ top: mobileTop }}
        >
          <div className={`${isRight ? "w-12 md:w-16" : "w-10 md:w-14"}`}>
            <Image
              src={`/images/Star-${isRight ? "rt" : "lt"}.svg`}
              alt="Decorative Star"
              width={baseWidth}
              height={baseWidth}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* --- Desktop Layout (Animated) ---
            Logic: horizontal position = (Center Anchor %) - (Dynamic Distance + Static Offset).
            This creates a "tethered" effect where the star feels attached to the moving card stack.
        */}
        <div
          className="hidden lg:block absolute transition-all duration-300"
          style={{
            [isRight ? "right" : "left"]:
              `calc(${isRight ? "45%" : "46%"} - ${distance + 140}px)`,
            top: top,
          }}
        >
          <div className={`${isRight ? "w-25" : "w-20"}`}>
            <Image
              src={`/images/Star-${isRight ? "rt" : "lt"}.svg`}
              alt="Decorative Star"
              width={baseWidth}
              height={baseWidth}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
