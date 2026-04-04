import React from "react";
import Image from "next/image";
import { ActionButton } from "../ui/ActionButton";
/**
 * TopDecoration Component
 * * A large-scale decorative SVG positioned in the top-right corner of the Hero.
 * Features:
 * - Layered Visual Depth: Positioned at `z-0` to sit behind the main headline.
 * - Performance: marked with `priority` to ensure it renders as part of the initial frame,
 * helping stabilize the Largest Contentful Paint (LCP).
 * - UX Safety: `pointer-events-none` prevents the asset from intercepting clicks meant for the Navbar.
 */
export const TopDecoration = () => (
  <div className="absolute -top-10 -right-10 z-0 pointer-events-none opacity-90">
    <Image
      src="/images/top-hero.svg"
      alt="Top Corner Brand Decoration"
      width={303}
      height={442}
      className="object-contain"
      priority
    />
  </div>
);

/**
 * TitleSparkle Component
 * * A localized visual accent used to highlight the core brand message in the headline.
 * Features:
 * - Responsive Calibration: Dynamically shifts from `-top-2` (Mobile) to `-top-7` (Desktop)
 * to maintain optical alignment with varying font sizes.
 * - Fluid Transitions: Uses `duration-300` for seamless scaling during window resizing.
 * - Precise Centering: Utilizes `-translate-x-1/2` to stay anchored relative to the text span.
 */
export const TitleSparkle = () => (
  <div className="absolute -top-2 md:-top-7 -left-2 md:-left-1/12 -translate-x-1/2 w-max pointer-events-none transition-all duration-300">
    <Image
      src="/images/title-hero.svg"
      alt="Decorative Sparkle Icon"
      width={55}
      height={35}
      className="w-8 md:w-13.75
       h-auto transition-all duration-300"
    />
  </div>
);

export const DownloadButton = () => {
  return (
    <ActionButton
      label="حمّل التطبيق الآن"
      href="#download-section"
      variant="special"
      isDownloadLink={true}
      type="home"
    />
  );
};