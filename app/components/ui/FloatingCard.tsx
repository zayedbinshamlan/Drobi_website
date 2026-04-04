import React from "react";
import Image from "next/image";

/**
 * FloatingCardProps Interface
 * @interface FloatingCardProps
 * @property {string} label - The descriptive text for the metric (e.g., "Earnings").
 * @property {string} value - The numerical or status value to display.
 * @property {string} icon - Path to the icon asset.
 * @property {string} className - Tailwind classes for absolute positioning and unique styling.
 * @property {string} [dir="rtl"] - Content direction, defaults to Right-to-Left.
 */
interface FloatingCardProps {
  label: string;
  value: string;
  icon: string;
  className: string;
  dir?: string;
}

/**
 * FloatingCard Component
 * * A highly reusable, compact UI element used for displaying key metrics or status updates.
 * Features:
 * - Complex Layered Shadows: Uses a triple-shadow approach to achieve a realistic "floating" effect (Z-axis depth).
 * - Micro-Layout: Optimized padding and font sizes for a condensed yet readable presentation.
 * - Fluid Scaling: Responsively adjusts dimensions from mobile (w-36) up to desktop (w-48).
 * - Performance: Minimal DOM structure to maintain high frame rates during animations.
 * * @component
 */
export const FloatingCard = ({
  label,
  value,
  icon,
  className,
  dir = "rtl",
}: FloatingCardProps) => (
  <div
    /**
     * Component Architecture:
     * - bg-white: Clean base to pop against darker hero backgrounds.
     * - backdrop-blur-sm (Optional): Can be added if placed over complex patterns.
     * - Shadow: Customized violet-tinted shadow to match Drobi's brand palette.
     */
    className={`${className} w-36 md:w-44 lg:w-48 h-12 md:h-14 lg:h-16 bg-white rounded-xl lg:rounded-2xl p-2 lg:p-3 flex items-center gap-2.5 lg:gap-4 shadow-[0px_1.28px_2.57px_0px_#BB98FF14,0px_1.28px_1.28px_0px_#BB98FF1A,1.93px_1.28px_1.28px_0px_#A273FF4D]`}
  >
    {/* --- Icon Wrapper --- 
        Thematic green background (#DCFCE7) typically indicates growth or positive status.
    */}
    <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-lg lg:rounded-[10px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
      <Image
        src={icon}
        alt="Metric Icon"
        width={20}
        height={20}
        // Scaled icon to maintain visual balance within the compact container
        className="w-3.5 h-3.5 lg:w-6 lg:h-6"
      />
    </div>

    {/* --- Data Display Column --- */}
    <div className="flex flex-col text-right">
      {/* Label: Small, secondary text with grey-700 equivalent for hierarchy */}
      <span className="text-[#6B7280] text-[9px] lg:text-[11px] font-normal mb-0 lg:mb-0.5 whitespace-nowrap">
        {label}
      </span>

      {/* Value: Bold, primary brand color (#390D8E) to draw the eye first */}
      <span
        className="text-[#390D8E] text-[12px] lg:text-[15px] font-bold whitespace-nowrap text-right leading-tight"
        dir={dir}
      >
        {value}
      </span>
    </div>
  </div>
);
