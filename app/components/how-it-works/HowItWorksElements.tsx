import React from "react";
import Image from "next/image";

/**
 * StepCardProps Interface
 * @interface StepCardProps
 * @property {string} id - The step number (e.g., "01", "02"). Used for the outlined background decoration.
 * @property {string} title - The descriptive text for the step.
 * @property {boolean} hasLine - Conditional flag to render the dashed connector SVG between steps.
 * @property {boolean} [hideLineOnDesktop] - Optional flag to hide the connector line on larger screens.
 * @property {string} image - The dynamic path to the image representing the step mockup.
 */
interface StepCardProps {
  id: string;
  title: string;
  hasLine: boolean;
  hideLineOnDesktop?: boolean;
  image: string;
}

/**
 * StepCard Component
 * * A multi-layered visual represention of a workflow step.
 * Features:
 * - Text Stroke Effect: Uses `WebkitTextStroke` to create a large, hollow background ID for depth.
 * - Parallax-like Hover: The iPhone mockup and background circle scale independently on `group-hover`.
 * - Mockup Clipping: A rounded container acts as a mask, creating the illusion of the phone emerging from the base.
 * - Dynamic Connectors: Conditionally renders `Steps.svg` to visually bridge consecutive cards.
 * - Dynamic Images: Renders the specific mockup image passed via props.
 * * @component
 */
export const StepCard = ({
  id,
  title,
  hasLine,
  hideLineOnDesktop = false,
  image,
}: StepCardProps) => (
  <div
    className="relative flex flex-col items-center w-35 lg:w-45 group"
    dir="rtl"
  >
    {/* --- Visual Asset Container --- */}
    <div className="relative w-full h-55 lg:h-70">
      {/* Background ID Decoration: 
          Uses transparent fill with a light violet stroke for a subtle architectural feel.
      */}
      <div
        className="absolute top-15 lg:top-15 -right-9 lg:-right-15 z-0 text-[30px] lg:text-[50px] font-bold text-transparent transition-transform duration-300 group-hover:scale-105 pointer-events-none opacity-50"
        style={{ WebkitTextStroke: "1px #CBB0FF" }}
      >
        {id}
      </div>

      {/* Primary Circular Base: 
          Provides the colored anchor point for the step.
      */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 h-35 lg:w-45 lg:h-45 bg-[#8B5CF6] rounded-full z-10 opacity-40 transition-transform duration-500 group-hover:scale-105 origin-bottom" />

      {/* Masked iPhone Mockup: 
          The 'overflow-hidden' on the parent creates the clipping effect at the bottom.
      */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-35 lg:w-45 h-55 lg:h-65 rounded-b-[70px] lg:rounded-b-[90px] overflow-hidden z-20 transition-transform duration-500 group-hover:scale-105 origin-bottom">
        {/* The phone slides slightly upward on hover for a 3D effect */}
        <div className="absolute lg:-bottom-6  -bottom-2 left-1/2 -translate-x-1/2 w-30 lg:w-35 h-55 lg:h-65 transition-transform duration-500 lg:group-hover:-translate-y-3">
          <Image
            src={image} 
            alt={`${title} mockup`}
            width={140}
            height={260}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>

    {/* --- Typography Section --- */}
    <h3 className="text-[#1A1A1A] text-[16px] lg:text-[20px] font-bold mt-4 lg:mt-6 text-center transition-colors group-hover:text-[#390D8E]">
      {title}
    </h3>

    {/* --- Connector Bridge --- 
        Displayed only if 'hasLine' is true, bridging the gap to the next step.
        Uses 'hideLineOnDesktop' to dynamically hide the line on large screens.
    */}
    {hasLine && (
      <div
        className={`absolute top-35 -left-15 lg:top-45 lg:-left-21.25 z-0 pointer-events-none transition-opacity duration-300 ${
          hideLineOnDesktop ? "lg:hidden" : "block"
        }`}
      >
        <Image
          src="/icons/Steps.svg"
          alt="Connector Line"
          width={55}
          height={18}
          className="object-contain opacity-60 w-10 lg:w-13.75 h-auto"
        />
      </div>
    )}
  </div>
);

/**
 * TitleSparkle Component
 * * A branding accent used to highlight headers.
 * - Strategy: Positioned absolutely with offsets to hover over the parent's text.
 */
export const TitleSparkle = () => (
  <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 lg:-top-10 lg:-left-10 w-max pointer-events-none z-20">
    <Image
      src="/images/title-hero.svg"
      alt="Heading Sparkle Accent"
      width={56}
      height={38}
      className="w-10 md:w-12 lg:w-14 h-auto"
    />
  </div>
);