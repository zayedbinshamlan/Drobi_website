import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Step } from "@/app/data/JoinStepsData";

// ==========================================
// Interfaces
// ==========================================

/**
 * @interface StepCardProps
 * @property {Step} step - The data object for the individual step (icon, title, description).
 * @property {number} index - The current position in the steps array (used for staggered delays).
 * @property {number} totalSteps - The total count of steps (used for conditional rendering of lines).
 */
interface StepCardProps {
  step: Step;
  index: number;
  totalSteps: number;
}

// ==========================================
// Sub-Components
// ==========================================

/**
 * StepCard Component
 * * Represents a single stage in the Captain's journey.
 * Features:
 * - Staggered Motion: Implements a sequential fade-in-up effect using the index-based delay.
 * - Conditional Connectors: Renders a dashed line between steps exclusively for the desktop view.
 * - Contextual Decoration: Displays a unique background vector only behind the final step.
 * - High-Contrast UI: Features a soft-shadowed card for the icon to emphasize hierarchy.
 */
export const StepCard: React.FC<StepCardProps> = ({ step, index, totalSteps }) => (
  <motion.div
    /* =========================================
     1. Animation Strategy: Responsive Setup
     ========================================= 
  */
    initial={{
      opacity:
        typeof window !== "undefined" && window.innerWidth < 1024 ? 1 : 0,
      y: typeof window !== "undefined" && window.innerWidth < 1024 ? 0 : 50,
    }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{
      duration: 0.6,
      delay:
        typeof window !== "undefined" && window.innerWidth < 1024
          ? 0
          : index * 0.3,
      ease: "easeOut",
    }}
    className="relative z-10 flex flex-col items-center text-center w-full lg:w-1/3"
  >
    {/* --- Desktop Connecting Line --- */}
    {index !== totalSteps - 1 && (
      <div className="hidden lg:block absolute w-[60%] top-12 md:top-[25%] right-[74%] h-3.75 -translate-y-1/2 -z-10">
        <Image src="/icons/Line-join.svg" alt="Connector Line" fill />
      </div>
    )}

    {/* --- Final Step Decoration --- */}
    {index === totalSteps - 1 && (
      <div className="absolute top-[-20%] md:top-[-113%] right-[-60%] rotate-3 -translate-x-1/2 w-125 h-125 -z-10 pointer-events-none opacity-80">
        <Image
          src="/icons/Vector-steps.svg"
          alt="Final Step Decoration"
          fill
          className="object-contain"
        />
      </div>
    )}

    {/* --- Step Icon Container --- */}
    <div className="w-16 h-16 md:w-28 md:h-28 bg-white rounded-2xl md:rounded-4xl shadow-[0px_8px_24px_rgba(57,13,142,0.08)] flex items-center justify-center mb-4 md:mb-8 relative">
      <div className="relative w-6 h-6 md:w-10 md:h-10">
        <Image
          src={step.icon}
          alt={step.title}
          fill
          className="object-contain"
        />
      </div>
    </div>

    {/* --- Step Textual Content --- */}
    <h3 className="text-[#000000] font-bold text-base md:text-[22px] mb-2 md:mb-4">
      {step.title}
    </h3>
    <p className="text-[#535862] text-xs md:text-[15px] leading-relaxed max-w-62.5 md:max-w-70">
      {step.description}
    </p>
  </motion.div>
);
