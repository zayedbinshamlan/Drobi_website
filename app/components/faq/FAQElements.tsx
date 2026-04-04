import React from "react";
import Image from "next/image";
import { TabName } from "@/app/data/faqData";

/**
 * TabButton Component
 * * Acts as the primary filter for FAQ categories.
 * Features:
 * - Dynamic Styling: Switches between brand violet (#390D8E) for active states and transparent for inactive.
 * - Fluid Transitions: 300ms duration for all state changes to ensure a premium feel.
 * - Responsive Padding: Adjusted from 16px to 64px (md:px-16) to maintain balanced spacing on wider screens.
 */
interface TabButtonProps {
  tab: TabName;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton = ({ tab, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`flex-1 text-center py-4 px-4 md:px-16 rounded-3xl font-bold text-[15px] md:text-lg transition-all duration-300 ${
      isActive
        ? "bg-[#390D8E] text-white shadow-md"
        : "bg-transparent text-[#1A1A1A] hover:bg-[#EFE8FD]"
    }`}
  >
    {tab}
  </button>
);

/**
 * AccordionItem Component
 * * A collapsible content box optimized for readability and smooth motion.
 * Features:
 * - CSS Grid Animation: Uses `grid-rows-[0fr]` to `grid-rows-[1fr]` for a robust, hardware-accelerated expansion effect.
 * - Glassmorphism: Semi-transparent background (#EFE8FD99) with 8px blur for a modern UI.
 * - Layout Stability: Uses `minHeight: "64px"` and `shrink-0` on icons to prevent visual flickering during toggle.
 */
interface AccordionItemProps {
  question: string;
  answer: string;
  icon: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem = ({
  question,
  answer,
  icon,
  isOpen,
  onToggle,
}: AccordionItemProps) => (
  <div
    className="overflow-hidden transition-all duration-300 w-full max-w-167"
    style={{
      background: "#EFE8FD99",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      boxShadow: "0px 1px 8px 0px #00000026",
      borderRadius: "24px",
    }}
  >
    {/* --- Question Trigger --- 
        The main interaction target for the accordion. 
    */}
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between focus:outline-none transition-all duration-300 px-6 pt-4 pb-6 gap-4 border-b border-[#E5E7EB]"
      style={{ minHeight: "64px", borderRadius: "24px" }}
    >
      <div className="flex items-center gap-4">
        {/* Thematic Icon Container */}
        <div className="flex items-center justify-center shrink-0 bg-[#DFD0FB] w-12 h-11 p-2 gap-2.5 rounded-xl overflow-hidden">
          <Image
            src={icon}
            alt="Question Category Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
        <span className="font-bold text-[#1A1A1A] text-[15px] lg:text-[17px] text-right leading-tight">
          {question}
        </span>
      </div>
      {/* State Indicator (+ / -) */}
      <div
        className="text-[#390D8E] text-2xl font-light shrink-0 ml-2"
        aria-hidden="true"
      >
        {isOpen ? "−" : "+"}
      </div>
    </button>

    {/* --- Expandable Answer Content --- 
        Technique: grid-rows animation allows the browser to calculate height dynamically 
        without using fixed pixel values or heavy JavaScript.
    */}
    <div
      className={`grid transition-all duration-300 ease-in-out ${
        isOpen
          ? "grid-rows-[1fr] opacity-100 pb-6 px-6 lg:px-21.5"
          : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden text-[#6B7280] leading-relaxed text-[14px] lg:text-[15px] text-right">
        {answer}
      </div>
    </div>
  </div>
);

/**
 * FAQBackground Component
 * * A decorative background watermark for visual branding.
 * - Positioning: Anchored absolutely to the center-bottom of the section.
 * - Scale Management: Shifts from 75px to 250px (lg:w-250) for device-specific art direction.
 */
export const FAQBackground = () => (
  <div className="absolute top-full left-[30%] transform -translate-x-1/2 -translate-y-[52%] w-75 h-75 md:w-112.5 md:h-112.5 lg:w-250 lg:h-175 -z-10 pointer-events-none">
    <Image
      src="/images/Frame-faq.svg"
      alt="FAQ Background Pattern"
      fill
      className="object-contain"
    />
  </div>
);
