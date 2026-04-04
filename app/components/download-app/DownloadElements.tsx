import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
/**
 * BackgroundWatermark Component
 * * A large-scale decorative asset providing textural depth to the section.
 * Features:
 * - Absolute Layering: Positioned at the top-right (z-50) to frame the section content.
 * - UX Safety: pointer-events-none ensures the watermark doesn't block clicks.
 */
export const BackgroundWatermark = () => (
  <div className="absolute right-[-1%] top-0 w-150 h-150 pointer-events-none z-50">
    <Image
      src="/images/Download-Section.svg"
      alt="Background Decorative Shape"
      fill
      className="object-contain"
    />
  </div>
);

/**
 * TitleSparkle Component
 * * A localized visual accent (Sparkle) that highlights the primary headline.
 * - Responsive Positioning: Offsets shift based on screen size for optical balance.
 */
export const TitleSparkle = () => (
  <div className="absolute -top-10 -left-20 md:-left-10 w-max pointer-events-none z-20">
    <Image
      src="/images/title-hero.svg"
      alt="Heading Decoration"
      width={56}
      height={38}
    />
  </div>
);

/**
 * StoreButton Interface
 * @interface StoreButtonProps
 */
interface StoreButtonProps {
  label: string;
  icon: string;
  href: string;
  target?: string;
  rel?: string;
}

/**
 * StoreButton Component
 * * A reusable CTA button for App Store and Google Play redirection.
 * * Optimization: Uses passed props for rel and target with secure defaults.
 */
export const StoreButton = ({
  label,
  icon,
  href,
  rel = "noopener noreferrer",
  target = "_blank",
}: StoreButtonProps) => (
  <Link
    href={href}
    className="flex items-center justify-center gap-2 bg-[#EAE2FB] text-[#181D27] rounded-xl hover:bg-[#DED2F9] transition-all duration-300 shadow-sm hover:scale-105"
    style={{ width: "164px", height: "44px" }}
    rel={rel} 
    target={target}
  >
    <span className="font-medium text-[14px]">{label}</span>
    <Image
      src={icon}
      width={18}
      height={18}
      alt={`${label} Icon`}
      className="object-contain"
    />
  </Link>
);

/**
 * QRCodeSection Component
 * Desktop-exclusive conversion tool to bridge the gap between PC and mobile.
 * Features:
 * - Dynamic QR Rendering: Swaps between Passenger and Captain smart QR codes based on route.
 * - Single Smart Link Integration: Uses a single QR code that triggers device detection via API.
 */
export const QRCodeSection = () => {
  const pathname = usePathname();
  const isCaptainPage = pathname?.includes("/captain");

  const smartQrImage = isCaptainPage
    ? "/icons/qr-smart-captain.svg"
    : "/icons/qr-smart-home.svg";

  return (
    <div className="absolute left-0 lg:left-[-5%] xl:left-[-2%] bottom-[10%] hidden lg:flex items-start gap-2 xl:gap-4 z-40 transform lg:scale-85 xl:scale-100 origin-bottom-left">
      <div className="flex flex-col text-right">
        <span className="font-medium text-[#181D27] text-base xl:text-lg leading-tight">
          حمل الآن
        </span>
        <span className="font-medium text-[#181D27] text-base xl:text-lg leading-tight">
          تطبيق دروبي
        </span>
      </div>
      <div
        className="text-xl xl:text-2xl text-[#1A1A1A] font-light mt-1"
        aria-hidden="true"
      >
        ←
      </div>
      <Image
        src={smartQrImage}
        width={120}
        height={120}
        alt="Download App Smart QR Code"
        className="w-22.5 h-22.5 xl:w-30 xl:h-30"
      />
    </div>
  );
};