"use client";

import React from "react";
import Link from "next/link";

/**
 * ActionButton Component - Drobi Platform
 * * Supported Variants:
 * - 'primary': Fixed width with brand gradient.
 * - 'outline': Fixed width with border and transparent background.
 * - 'special': Responsive bold solid background with pill-shape rounding.
 * - 'action': Dynamic width with scale-up hover effect.
 * - 'ghost': Full-width solid white background (30px rounding).
 * - 'glass': Semi-transparent blurred border style for overlaying on colored backgrounds.
 */
interface ActionButtonProps {
  label: string;
  variant?: "primary" | "outline" | "special" | "action" | "ghost" | "glass";
  href: string;
  isDownloadLink?: boolean;
  type?: "captain" | "home";
  className?: string;
}

export const ActionButton = ({
  label,
  variant = "primary",
  href,
  isDownloadLink = false,
  type = "captain",
  className = "",
}: ActionButtonProps) => {
  /**
   * Environmental Interaction Handler
   * Core Logic: Combines mobile cache-busting for downloads and smooth anchor scrolling.
   */
  const handleInteraction = (e: React.MouseEvent) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (href.startsWith("#")) {
      e.preventDefault();
      if (isMobile && isDownloadLink) {
        const timestamp = new Date().getTime();
        window.location.assign(`/api/download?type=${type}&t=${timestamp}`);
      } else {
        document
          .getElementById(href.substring(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (isDownloadLink && isMobile) {
      e.preventDefault();
      const timestamp = new Date().getTime();
      window.location.assign(`${href}&t=${timestamp}`);
    }
  };

  const baseStyles =
    "flex items-center justify-center transition-all duration-300 active:scale-95 whitespace-nowrap";
const variants = {
  primary:
    "flex-1 sm:flex-none sm:w-58.5 h-12 md:h-14 px-2 md:px-10 py-3 rounded-3xl bg-[linear-gradient(257.36deg,#50457F_-36.46%,#4C12BD_87.14%)] text-white shadow-lg hover:opacity-90 hover:scale-105 font-medium text-[13px] md:text-[16px] lg:text-[18px]",

  outline:
    "flex-1 sm:flex-none sm:w-58.5 h-12 md:h-14 px-2 md:px-10 py-3 rounded-3xl bg-white text-[#390D8E] border border-[#390D8E]/10 shadow-lg hover:bg-gray-50 hover:scale-105 font-medium text-[13px] md:text-[16px] lg:text-[18px]",

  special:
    "bg-[#390D8E] hover:bg-[#4A14B3] w-52 h-12 md:w-56 md:h-14 lg:w-60 rounded-full md:rounded-3xl shadow-lg transition-all duration-500 ease-in-out font-bold text-white text-lg md:text-[20px]",

  action:
    "bg-[#390D8E] text-white font-bold text-[16px] py-3 lg:py-4 px-10 rounded-full shadow-lg hover:scale-105 hover:bg-[#2b086e] w-auto h-auto",

  
  ghost:
    "w-full h-14 rounded-[30px] bg-[#390D8E] text-white text-lg font-bold shadow-sm border-none active:scale-95 hover:bg-[#2b086e]",

  
  glass:
    "bg-[#390D8E] bg-opacity-90 gap-1 w-38 h-12 px-6 rounded-3xl border border-white border-opacity-30 text-white text-sm font-medium shadow-none hover:bg-opacity-100",
};

  return (
    <Link
      href={href}
      onClick={handleInteraction}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </Link>
  );
};
