"use client";
import Image from "next/image";
import { FLOATING_CARDS_DATA_HERO_CAPTAIN } from "@/app/data/FloatingCardData";
import { FloatingCard } from "@/app/components/ui/FloatingCard";
import { ActionButton } from "../ui/ActionButton";
/**
 * HeroCaptain Component
 * The primary landing and conversion zone for the Captain registration funnel.
 * Features:
 * - Art Direction: Dynamically switches background assets between mobile (portrait) and desktop (landscape) for optimal focal point preservation.
 * - LCP Optimization: Uses `priority` and `unoptimized` flags to ensure the largest contentful paint is rendered instantly with maximum fidelity.
 * - Dynamic Typography: Implements a dual-tone heading with a CSS text-gradient for brand emphasis.
 * - Responsive Layout: Leverages `h-dvh` to handle mobile browser chrome variations while maintaining full-screen impact.
 * @component
 */
export default function Hero() {
  
  
  return (
    <section
      /**
       * Root Section Architecture:
       * - h-dvh: Dynamic Viewport Height ensures no content is cut off by mobile UI.
       * - border-white/10: Subtle glassmorphism border to define the section boundary.
       */
      className="relative w-full mx-auto h-dvh min-h-162.5 md:h-187.5 lg:h-225 flex items-center overflow-hidden rounded-t-3xl border-t-4 border-r-4 border-l-4 border-white/10"
      dir="rtl"
    >
      <p className="sr-only">
        التسجيل ككابتن دروبي للعمل كسائق توصيل في المملكة العربية السعودية يتيح
        فرص دخل مرنة مع نظام عمل مناسب للكباتن داخل المدن السعودية.
      </p>
      {/* 1. Background Asset Layer (Art Direction) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile-Optimized Asset: Vertical orientation (Phone aspect ratio) */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src="/images/Hero-captain-phone.png"
            alt="Hero Captain Mobile View"
            fill
            className="object-cover object-center"
            unoptimized={true}
            priority
          />
        </div>

        {/* Desktop-Optimized Asset: Horizontal orientation (Widescreen aspect ratio) */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/Hero-captain.png"
            alt="Hero Captain Desktop View"
            fill
            className="object-cover object-center"
            unoptimized={true}
            priority
          />
        </div>
      </div>

      {/* 2. Main Content & Interaction Layer */}
      <div className="mx-auto px-4 relative z-10 flex flex-col justify-center lg:justify-start pb-12 md:pb-16 lg:pb-0 lg:flex-row lg:items-center h-full w-full">
        {/* Copywriting & CTA Column */}
        <div className="w-full lg:w-[42%] flex flex-col items-center pt-72 md:pt-0 text-center gap-4 md:gap-6 lg:gap-8">
          {/* Main Headline */}
          <h1 className="text-white text-[38px] md:text-5xl lg:text-[60px] font-bold leading-[1.2] lg:leading-[1.1]">
            خلي سيارتك <br />
            <span className="bg-linear-to-r from-[#390D8E] to-[#13042F] bg-clip-text text-transparent">
              مصدر دخلك
            </span>
          </h1>

          {/* Value Proposition Subtext */}
          <p className="text-white/95 text-[14px] md:text-base lg:text-xl leading-relaxed font-normal px-2 lg:px-0">
            انضم إلى دروبي واستقبل رحلات قريبة منك بمرونة وأرباح واضحة. كن
            شريكاً في منصة وطنية تدعم طموحاتك.
          </p>

          <div className="flex flex-row items-center justify-center gap-3 md:gap-4 mt-2 w-full lg:w-auto px-2 lg:px-0">
            <ActionButton
              label="انضم ككابتن الآن"
              variant="primary"
              href="#download-section"
              isDownloadLink={true}
              type="captain"
            />

            {/* Secondary CTA: Earnings Calculator tool */}
            {/* <button className="flex-1 sm:flex-none sm:w-58.5 h-12 md:h-14 flex items-center justify-center gap-2 px-2 md:px-10 py-3 rounded-3xl bg-white text-[#390D8E] font-medium text-[13px] md:text-[16px] lg:text-[18px] border border-[#390D8E]/10 hover:bg-gray-50 transition-all duration-300 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)] hover:shadow-md hover:scale-105 active:scale-95 whitespace-nowrap">
              احسب أرباحك
            </button> */}
          </div>
        </div>

        {/* 3. Floating Metadata Layer */}
        {FLOATING_CARDS_DATA_HERO_CAPTAIN.map((card) => (
          <FloatingCard
            key={card.id}
            label={card.label}
            value={card.value}
            icon={card.icon}
            className={card.containerClass}
            dir={card.dir}
          />
        ))}
      </div>
    </section>
  );
}
