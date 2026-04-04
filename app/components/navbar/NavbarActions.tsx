"use client";

import React from "react";
import { ActionButton } from "../ui/ActionButton";
import { usePathname } from "next/navigation";

/**
 * NavbarActionsProps Interface
 * @interface NavbarActionsProps
 * @property {boolean} isMobile - Optional flag to switch between mobile and desktop rendering styles.
 */
interface NavbarActionsProps {
  isMobile?: boolean;
}

/**
 * NavbarActions Component
 * * Handles the primary Call-to-Action (CTA) buttons within the Navigation Bar.
 * Features:
 * - Dynamic Routing: Uses usePathname to dynamically set the app download type (Captain or Home).
 * - Polymorphic Rendering: Adapts its entire layout and styling based on the viewport context (isMobile).
 * - Tactile Feedback: Implements `active:scale-95` to provide instant haptic-like visual response on click.
 * - Brand Consistency: Uses the platform's signature violet (#390D8E) and contrast whites.
 * * @param {NavbarActionsProps} props - Component properties.
 * @returns {JSX.Element} The rendered action buttons (Login & Start Journey).
 */
const NavbarActions = ({ isMobile }: NavbarActionsProps) => {
  // قراءة المسار الحالي لتحديد وجهة التطبيق ديناميكياً
  const pathname = usePathname();
  const isCaptainPage = pathname?.includes("/captain");
  const currentType = isCaptainPage ? "captain" : "home";

  /* =========================================
     1. Mobile Layout Logic
     ========================================= 
     Designed for thumb-friendly interaction with full-width buttons and larger touch targets.
  */
  if (isMobile) {
    return (
      <div className="flex flex-col w-full gap-4 px-4 mt-auto pb-10">
        {/* Mobile Login Button: High-contrast primary action */}
        {/* <button className="flex items-center justify-center w-full h-14 rounded-[30px] bg-[#390D8E] text-white text-lg font-bold shadow-lg transition-all active:scale-95">
          تسجيل الدخول
        </button> */}

        {/* Mobile Start Journey Button: Secondary action with subtle shadow */}
        <ActionButton
          label="ابدأ رحلتك الآن"
          href="#download-section"
          variant="ghost"
          isDownloadLink={true}
          type={currentType}
        />
      </div>
    );
  }

  /* =========================================
     2. Desktop Layout Logic
     ========================================= 
     Compact design meant to sit within the horizontal navbar flow with hover-state refinements.
  */
  return (
    <div className="flex items-center gap-4 h-12">
      {/* Desktop Login Button: Solid white for visibility against dark navbar backgrounds */}
      {/* <button className="flex items-center justify-center gap-1 w-38 h-12 px-6 rounded-3xl bg-white text-[#432095] text-sm font-medium transition-all hover:bg-opacity-90 active:scale-95">
        تسجيل الدخول
      </button> */}

      {/* Desktop Start Journey Button: Ghost-style button with semi-transparent border */}
      <ActionButton
        label="ابدأ رحلتك الآن"
        href="#download-section"
        variant="glass"
        isDownloadLink={true}
        type={currentType}
      />
    </div>
  );
};

export default NavbarActions;
