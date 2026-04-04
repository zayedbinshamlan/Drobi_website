"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  BackgroundWatermark,
  TitleSparkle,
  StoreButton,
  QRCodeSection,
} from "./DownloadElements";

/**
 * DownloadAppSection Component
 * * Functional Scope:
 * - High-conversion landing segment focused on mobile application distribution.
 * - Dynamic route detection for switching between Passenger and Partner app metadata.
 * - Viewport-aware animation orchestration to optimize Largest Contentful Paint (LCP).
 */
export default function DownloadAppSection() {
  const pathname = usePathname();
  const isCaptainPage = pathname?.includes("/captain");

  /**
   * App Store Redirection Logic
   * Dynamically selects the target bundle ID based on the segment (Passenger/Captain).
   */
  const appleLink = isCaptainPage
    ? "https://apps.apple.com/sa/app/drobi-partners/id6753208879"
    : "https://apps.apple.com/sa/app/drobi/id6753208053";

  const googleLink = isCaptainPage
    ? "https://play.google.com/store/apps/details?id=com.aait.drobi_captain&hl=en"
    : "https://play.google.com/store/apps/details?id=com.aait.drobi&hl=en";

  return (
    <section
      id="download-section"
      className="relative w-full pt-12 md:pt-20 overflow-hidden"
      dir="rtl"
      style={{
        background: `linear-gradient(180deg, #ffffff 0%, #F3EEFF 100%)`,
      }}
    >
      {/* Structural brand watermarks for background depth */}
      <div className="scale-75 md:scale-100 origin-top">
        <BackgroundWatermark />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col items-center">
        {/* Section Header: Optimized for semantic SEO hierarchy */}
        <header className="text-center mb-8 flex flex-col items-center">
          <span className="text-[#181D27] font-semibold text-base md:text-xl mb-2 md:mb-3">
            جاهز تبدأ رحلتك؟
          </span>

          <div className="relative inline-block">
            <div className="scale-75 md:scale-100 origin-center">
              <TitleSparkle />
            </div>
            <h2 className="text-[#0E0926] text-3xl md:text-5xl lg:text-[40px] font-extrabold leading-tight">
              حمل <span className="text-[#390D8E]">تطبيق دروبي</span> الآن
            </h2>
          </div>
        </header>

        {/* Global Store CTA Group */}
        <nav className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-12 md:mb-16 w-full max-w-55 md:max-w-none">
          <StoreButton
            label="App Store"
            icon="/icons/App-store.svg"
            href={appleLink}
            target="_blank"
            rel="noopener noreferrer"
          />
          <StoreButton
            label="Google play"
            icon="/icons/googel-play.svg"
            href={googleLink}
            target="_blank"
            rel="noopener noreferrer"
          />
        </nav>

        {/* Visual Composition: QR Logic & Device Mockups */}
        <div className="w-full lg:block flex justify-center relative">
          <div className="w-full flex justify-center relative">
            {/* Context-aware QR Code Section */}
            <QRCodeSection />

            {/* Mobile Viewport Image: Priority loading for critical visual path */}
            <div className="relative bottom-0 w-45 block md:hidden z-30">
              <Image
                src="/images/Mockups.svg"
                width={550}
                height={600}
                alt="Phone Mockup Display"
                className="object-contain w-full h-auto drop-shadow-[0px_20px_40px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>

            {/* Desktop Viewport Motion Container: Sequential entry logic */}
            <motion.div
              initial={{
                opacity:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? 1
                    : 0,
                y:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? 0
                    : 100,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative bottom-0 hidden md:block md:w-125 lg:w-137.5 z-30"
            >
              <Image
                src="/images/Mockups.svg"
                width={550}
                height={600}
                alt="Phone Mockup Display"
                className="object-contain w-full h-auto drop-shadow-[0px_20px_40px_rgba(0,0,0,0.15)]"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
