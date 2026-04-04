"use client";

import React, { useState } from "react";
import { faqData, tabs, TabName } from "@/app/data/faqData";
import { TabButton, AccordionItem, FAQBackground } from "./FAQElements";

/**
 * FAQSection Component
 * * The knowledge hub of the platform, organized via a tabbed accordion system.
 * Features:
 * - Dynamic State Management: Synchronizes active tabs with their respective accordion data.
 * - Responsive Grid Layout: Uses a 12-column grid to balance descriptive copy with interactive elements.
 * - Scrollable Navigation: Implements a custom-styled, scrollable tab bar for mobile viewports.
 * - Background Blending: Utilizes brand-specific gradients with 'overlay' mode for visual depth.
 * * @component
 */
export default function FAQSection() {
  // State to track the currently selected category
  const [activeTab, setActiveTab] = useState<TabName>("عن دروبي");
  
  // State to track the currently expanded accordion item (null means all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /**
   * toggleAccordion Logic
   * Handles the single-expansion behavior: opening a new item automatically closes the previous one.
   * @param {number} index - The index of the clicked accordion item.
   */
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      /**
       * Section Container Architecture:
       * Implements a sophisticated dual-gradient background to match Drobi's premium UI.
       */
      className="relative w-full py-12 lg:py-20 overflow-hidden"
      dir="rtl"
      style={{
        background: `linear-gradient(230deg, #BFA2F7, #BFA2F7), linear-gradient(239.44deg, #ece6f8 55.77%, #BFA2F7 214.29%)`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* =========================================
           1. Descriptive Column (Header Content)
           ========================================= 
           - order-1 (Mobile): Displays title first.
           - order-2 (Desktop): Positioned on the left (RTL context) for balance.
        */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-end lg:pt-4 relative z-10 w-full">
          {/* Subtle brand watermark behind the text */}
          <FAQBackground />

          <div className="pt-8 lg:pt-30 text-center flex flex-col items-center gap-3 lg:gap-5">
            <span className="text-[#6B7280] font-normal text-sm lg:text-base tracking-[0.2em] mb-2 lg:mb-4 uppercase">
              FAQ
            </span>
            <h2 className="text-[#0E0926] text-3xl md:text-4xl lg:text-5xl font-bold mb-2 lg:mb-6 leading-tight">
              الأسئلـــــــة{" "}
              <span className="text-[#6c3ec9]">الشـــــائــــعـــــة</span>
            </h2>
            <p className="text-[#181D27] text-sm lg:text-base font-semibold max-w-md">
              هنا تجد إجابات لأهم الأسئلة حول استخدام تطبيق DROBI، لمساعدتك في معرفة كل ما تحتاج إليه حول التسجيل، طلب الرحلات، والدفع بسهولة ووضوح.
            </p>
          </div>
        </div>

        {/* =========================================
           2. Interaction Column (Tabs & Accordions)
           ========================================= 
        */}
        <div className="order-2 lg:order-1 lg:col-span-7 w-full flex flex-col relative z-20 mt-4 lg:mt-0">
          
          {/* --- Horizontal Scrollable Tabs --- 
              Logic: Optimized for mobile touch-scrolling with hidden scrollbars.
          */}
          <div
            className="flex items-center justify-center lg:justify-start mb-6 lg:mb-8 gap-2 lg:gap-8 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Inline CSS to handle vendor-specific scrollbar hiding */}
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {tabs.map((tab) => (
              <div key={tab} className="shrink-0">
                <TabButton
                  tab={tab}
                  isActive={activeTab === tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null); // Reset accordions when switching categories
                  }}
                />
              </div>
            ))}
          </div>

          {/* --- Accordion Content Area --- 
              Maps through the centralized data based on the currently active tab state.
          */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {faqData[activeTab].map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                icon={item.icon}
                isOpen={openIndex === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}