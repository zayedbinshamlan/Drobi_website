import React from "react";

/**
 * FormInputProps Interface
 * @interface FormInputProps
 * @property {string} label - The text displayed on the floating badge.
 * @property {string} type - Input category (text, email, tel, etc.).
 * @property {string} placeholder - Hint text displayed when the field is empty.
 */
interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
}

/**
 * FormField Component
 * * A custom input field featuring a stylized "Floating Label" effect.
 * Features:
 * - Precision Positioning: Labels are absolutely positioned (-top-3) to create a modern badge-like look.
 * - Interaction States: Focus-ring implementation for better keyboard accessibility.
 * - Thematic Coloring: Uses the brand's soft violet (#EFE8FD) to maintain visual harmony.
 * * @component
 */
export const FormField = ({ label, type, placeholder }: FormInputProps) => (
  <div className="relative w-full lg:w-[410.74px]">
    {/* Floating Badge Label: Positioned to overlap the top border */}
    <label className="absolute -top-3 right-4 bg-[#EFE8FD] px-2 text-[#414651] text-[12px] font-normal rounded-sm z-20 border border-[#E9EAEB]">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      /**
       * Input Styling:
       * - focus:ring-1: Provides a subtle glow upon user interaction.
       * - placeholder:text-[#390D8E]/40: Low-opacity brand color for hints.
       */
      className="w-full h-[53.99px] bg-[#EFE8FD] border-[0.96px] border-[#E9EAEB] rounded-xl p-3 text-[#414651] placeholder:text-[#390D8E]/40 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
    />
  </div>
);

/**
 * FormTextArea Component
 * * A specialized multiline input for detailed user messages.
 * Features:
 * - Fixed Height: Fixed at 4 rows to maintain layout consistency.
 * - Resize Prevention: `resize-none` ensures the user cannot break the UI container.
 */
export const FormTextArea = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="relative w-full lg:w-[410.74px]">
    {/* Consistent Label Badge Styling */}
    <label className="absolute -top-3 right-4 bg-[#EFE8FD] px-2 text-[#414651] text-[12px] font-normal rounded-sm z-20 border border-[#E9EAEB]">
      {label}
    </label>
    <textarea
      rows={4}
      placeholder={placeholder}
      className="w-full bg-[#EFE8FD] border-[0.96px] border-[#E9EAEB] rounded-xl p-3 text-[#390D8E] placeholder:text-[#390D8E]/40 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all resize-none"
    />
  </div>
);

/**
 * SubmitButton Component
 * * A high-impact CTA button with integrated motion feedback.
 * Features:
 * - Custom Gradient: Sophisticated diagonal transition from light to dark violet.
 * - Hover Micro-interactions:
 * 1. Card scales up slightly (105%).
 * 2. Arrow icon slides horizontally (translate-x).
 * - Multi-layer Shadows: Combines standard depth with a brand-colored glow (boxShadow).
 * * @component
 */
export const SubmitButton = () => (
  <button
    type="submit"
    className="w-52.75 h-12 flex items-center justify-center gap-2 pt-3 pr-8 pb-3 pl-8 rounded-3xl text-[#390D8E] font-bold text-[16px] whitespace-nowrap transition-all duration-300 hover:scale-105 active:scale-95 group"
    style={{
      background: "linear-gradient(264.56deg, #EFE8FD 14%, #9F73F4 142.99%)",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 8px 0px rgba(239, 232, 253, 0.6)",
    }}
  >
    ارسل طلبك الآن
    {/* Staggered Arrow Animation triggered by parent hover (group) */}
    <span className="group-hover:-translate-x-1 transition-transform text-xl">
      ←
    </span>
  </button>
);
