"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { SOCIAL_ICONS, STATUS_CARDS_DATA } from "@/app/data/ContactData";
import {
  StatusCard,
  BackgroundDecorations,
} from "@/app/components/contact/ContactElements";

/**
 * ContactSection Component
 * * Functional Overview:
 * - Serves as the primary lead generation and support interface for the Drobi platform.
 * - Implements advanced CSS blending modes and Framer Motion for high-end UI/UX.
 * - Performance-optimized for mobile by conditionally disabling non-critical animations.
 */
export default function ContactSection() {
  return (
    <section
      className="relative w-full min-h-screen py-10 lg:py-32 overflow-hidden"
      style={{
        background: `linear-gradient(230deg, #BFA2F7, #BFA2F7), linear-gradient(239.44deg, #ece6f8 55.77%, #eae2fa 214.29%)`,
        backgroundBlendMode: "overlay",
      }}
      dir="rtl"
    >
      {/* Structural brand elements and vector overlays */}
      <BackgroundDecorations />

      <div className="container mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* =========================================
            Column 1: Brand Narrative & Visual Assets
            ========================================= */}
        <div className="flex-1 flex flex-col items-center lg:items-start w-full order-1 text-center lg:text-right">
          {/* Typography & Copywriting */}
          <header className="md:mb-10 lg:mb-12 relative z-20 w-full">
            <h1 className="text-[#1A1A1A] text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 leading-tight md:leading-snug">
              خلّينا نبدأ رحلتك{" "}
              <span className="text-[#390D8E]">مع دروبي!</span>
            </h1>
            <p className="text-[#6B7280] text-[15px] sm:text-base lg:text-lg max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0 leading-relaxed">
              عندك استفسار بخصوص رحلة؟ أو محتاج مساعدة؟ فريقنا جاهز للرد عليك
              بأسرع وقت.
            </p>
          </header>

          {/* Visual Asset Composition (3D Avatar & Metadata Cards) */}
          <div className="flex flex-row items-center justify-center lg:grid lg:grid-cols-12 w-full relative max-w-62.5 lg:max-w-none mx-auto lg:mx-0 mt-8 sm:mt-12">
            {/* 3D Mascot: Viewport-aware animation logic to prevent mobile lag */}
            <motion.div
              initial={{
                opacity:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? 1
                    : 0,
                y:
                  typeof window !== "undefined" && window.innerWidth < 1024
                    ? 0
                    : 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-full lg:col-span-7 relative z-30 flex justify-center lg:justify-start"
            >
              <div className="w-45 sm:w-62.5 md:w-70 lg:w-87.5 transform -translate-x-15 sm:-translate-x-2 lg:-translate-x-14 scale-[1.5] sm:scale-[1.7] lg:scale-[1.4] transition-transform origin-center">
                <Image
                  src="/images/avatar-3d.png"
                  alt="3D Avatar Mascot"
                  width={520}
                  height={352}
                  className="object-contain w-full h-auto drop-shadow-2xl"
                  priority
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Information Cards: Staggered entry orchestration */}
            <div className="w-full lg:w-full lg:col-span-5 flex flex-col items-start lg:-mr-13 z-10 sm:-mr-20 md:-mr-12">
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-3.75 w-full transform scale-[0.80] sm:scale-[0.80] md:scale-90 lg:scale-100 origin-right transition-transform">
                {STATUS_CARDS_DATA.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity:
                        typeof window !== "undefined" &&
                        window.innerWidth < 1024
                          ? 1
                          : 0,
                      x:
                        typeof window !== "undefined" &&
                        window.innerWidth < 1024
                          ? 0
                          : -30,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay:
                        typeof window !== "undefined" &&
                        window.innerWidth < 1024
                          ? 0
                          : index * 0.15,
                      ease: "easeOut",
                    }}
                    className={`${card.margin} whitespace-nowrap`}
                  >
                    <StatusCard
                      text={card.text}
                      opacity={card.opacity}
                      width={card.width || "auto"}
                      px={card.px}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Proof & Navigation */}
          <div className="mt-8 sm:mt-10 lg:mt-20 flex flex-col items-center lg:items-start gap-2 sm:gap-3 w-full relative z-20">
            <span className="text-[#1D124C] font-bold text-base sm:text-[18px]">
              تابعنا على
            </span>

            <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
              {SOCIAL_ICONS.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="relative w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-[#390D8E] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out group"
                >
                  {/* Floating Tooltip Component */}
                  <span className="absolute top-full mt-1.5 left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 invisible group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out bg-[#390D8E] text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap z-30 pointer-events-none">
                    {icon.name}
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#390D8E] rotate-45 rounded-sm"></span>
                  </span>

                  {/* Icon Filter Inversion on Hover */}
                  <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5 transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-105">
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            Column 2: Lead Generation Interface
            ========================================= */}
        <aside className="w-full lg:w-max order-2 relative z-20 mt-12 md:mt-16 lg:mt-0">
          <ContactForm />
        </aside>
      </div>
    </section>
  );
}
