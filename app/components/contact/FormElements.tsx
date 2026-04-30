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
  name: string; // أضفنا هذا
  required?: boolean; // أضفنا هذا
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
export const FormField = ({
  label,
  type,
  placeholder,
  name,
  required = false,
  value,
  onChange,
}: FormInputProps) => (
  <div className="relative w-full lg:w-[410.74px]">
    <label className="absolute -top-3 right-4 bg-[#EFE8FD] px-2 text-[#414651] text-[12px] font-normal rounded-sm z-20 border border-[#E9EAEB]">
      {label}
    </label>
    <input
      name={name} // ضروري لـ FormData
      type={type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
  name,
  required = false,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className="relative w-full lg:w-[410.74px]">
    <label className="absolute -top-3 right-4 bg-[#EFE8FD] px-2 text-[#414651] text-[12px] font-normal rounded-sm z-20 border border-[#E9EAEB]">
      {label}
    </label>
    <textarea
      name={name}
      required={required}
      rows={4}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
export const SubmitButton = ({ disabled = false }: { disabled?: boolean }) => (
  <button
    type="submit"
    disabled={disabled}
    aria-busy={disabled}
    className={`w-52.75 h-12 flex items-center cursor-pointer justify-center gap-2 px-8 rounded-3xl text-[#390D8E] font-bold text-[16px] transition-all duration-300 group ${
      disabled
        ? "opacity-70 cursor-not-allowed"
        : "hover:scale-105 active:scale-95"
    }`}
    style={{
      background: "linear-gradient(264.56deg, #EFE8FD 14%, #9F73F4 142.99%)",
      boxShadow:
        "0px 0px 4px 0px rgba(0, 0, 0, 0.10), 0px 0px 8px 0px rgba(239, 232, 253, 0.6)",
    }}
  >
    {disabled ? (
      <>
        {/* أيقونة الدوران (Spinner) */}
        <svg
          className="animate-spin h-5 w-5 text-[#390D8E]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
        <span>جاري الإرسال...</span>
      </>
    ) : (
      <>
        <span>ارسل طلبك الآن</span>
        <span className="group-hover:-translate-x-1 transition-transform text-xl">
          ←
        </span>
      </>
    )}
  </button>
);
