import React from "react";
import Image from "next/image";
import { REQUIREMENTS_DATA } from "@/app/data/RequirementsData";
import { motion } from "framer-motion";

// ==========================================
// Interfaces
// ==========================================

/**
 * @interface RequirementItemProps
 * @property {string} title - The requirement text to be displayed.
 */
interface RequirementItemProps {
  title: string;
}

// ==========================================
// Sub-Components
// ==========================================

/**
 * RequirementItem Component
 * * Renders an individual requirement card with a custom check icon.
 * Features:
 * - Glassmorphism UI: Implements backdrop-blur and semi-transparent background for a modern feel.
 * - Responsive Sizing: Maintains consistent proportions across mobile and desktop.
 * - Interaction: Smooth transition on hover to enhance user engagement.
 */
export const RequirementItem: React.FC<RequirementItemProps> = ({ title }) => (
  <div className="w-full max-w-200 min-h-20 flex items-center gap-2.5 p-6 bg-[#EFE8FD99] backdrop-blur-sm shadow-[0px_3px_4px_0px_#00000014] rounded-3xl hover:bg-[#F3EEFF] transition-colors duration-300 relative z-10 opacity-85">
    {/* Custom Icon Wrapper with rounded containment */}
    <div className="relative w-8 h-8 flex items-center justify-center rounded-full bg-[#DFD0FB] shrink-0 overflow-hidden">
      <Image
        src="/icons/Chack.svg"
        alt="Check Icon"
        fill
        className="object-contain p-1"
      />
    </div>

    {/* Requirement Text with optimized font weights for readability */}
    <span className="text-[#1D124C] font-bold text-sm md:text-base lg:text-[18px]">
      {title}
    </span>
  </div>
);

/**
 * TextContent Component
 * * Manages the informational content of the section.
 * - Adaptive Layout: Swaps order on mobile (order-2) to follow the visual-first hierarchy.
 * - Rich Decoration: Includes absolute-positioned SVG decorations around the header.
 */
export const TextContent = () => (
  <div className="w-full lg:w-1/2 flex flex-col items-start relative z-10 order-2 lg:order-1">
    {/* Semantic Badge for categorized context */}
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F3EEFF] rounded-full mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-[#390D8E]" />
      <span className="text-[#390D8E] text-sm md:text-base font-semibold">
        تنقل بذكاء
      </span>
    </div>

    {/* Header Section with localized title decoration */}
    <div className="relative mb-4">
      <div className="absolute -top-6 -left-8 md:-top-8 md:-left-10 lg:-top-5 lg:-left-12 w-max pointer-events-none z-20">
        <Image
          src="/images/title-hero.svg"
          alt="Title Decoration"
          width={55}
          height={35}
          className="w-10 md:w-12 lg:w-13.75 h-auto"
        />
      </div>
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1D124C] leading-tight">
        متطلبات الإنضمام
      </h2>
    </div>

    {/* Informational Paragraph */}
    <p className="text-[#6B7280] text-base md:text-lg mb-8 max-w-lg font-medium">
      تأكد من توفر هذه المستندات لتسريع عملية تفعيل حسابك ككابتن.
    </p>

    {/* List Container: Maps through RequirementsData for scalability */}
    <div className="w-full flex flex-col gap-3 lg:gap-4">
      {REQUIREMENTS_DATA.map((item, index) => (
        <RequirementItem key={index} title={item} />
      ))}
    </div>
  </div>
);

/**
 * IllustrationContent Component
 * * Handles the visual assets and floating elements.
 * - Animation Strategy: Uses a vertical 'Slide Up' effect (y: 100 to 0) to reveal the main illustration.
 * - Z-Index Management: Ensures floating stars are layered correctly relative to the main image.
 */
export const IllustrationContent = () => (
  <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end z-10 order-1 lg:order-2">
    {/* --- Floating Visual Elements (Stars) --- 
        Responsive visibility: Hidden on small mobiles to avoid visual clutter.
    */}
    <div className="absolute hidden md:flex -top-10 -right-4 lg:top-27 lg:-right-1 w-10 h-10 lg:w-16 lg:h-16">
      <Image
        src="/images/Star-rt.svg"
        alt="Yellow Star"
        fill
        className="object-contain"
      />
    </div>
    <div className="absolute bottom-5 left-4 lg:bottom-8 lg:left-2 w-8 h-8 lg:w-12 lg:h-12 z-20">
      <Image
        src="/images/Star-lt.svg"
        alt="Purple Star"
        fill
        className="object-contain"
      />
    </div>

    {/* --- Main 3D Illustration Container --- 
        Animated via Framer Motion for a dynamic entry upon entering the viewport.
    */}
    <motion.div
      /**
       * Animation Strategy: Responsive Entry
       */
      initial={{
        opacity:
          typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 0,
        y: typeof window !== "undefined" && window.innerWidth < 1024 ? 0 : 100,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-[320px] h-80 md:w-112.5 md:h-112.5 mt-0 lg:mt-20 lg:w-125 lg:h-125 z-10"
    >
      <Image
        src="/images/Requirements.png"
        alt="Requirements Illustration"
        fill
        className="object-contain"
        quality={95}
      />
    </motion.div>
  </div>
);
