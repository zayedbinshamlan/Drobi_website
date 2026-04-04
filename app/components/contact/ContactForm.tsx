"use client";

import React from "react";
import {
  FormField,
  FormTextArea,
  SubmitButton,
} from "@/app/components/contact/FormElements";

/**
 * ContactForm Component
 * * A high-fidelity lead generation form for user inquiries.
 * Features:
 * - Brand-Centric Aesthetic: Implements a deep violet gradient (linear-to-br) with semi-transparent overlays.
 * - Glassmorphism Accents: Uses high-radius corners (50px) and backdrop-aware coloring for a modern UI.
 * - Modular Construction: Orchestrates specialized form fields (FormField, FormTextArea) for consistent data entry.
 * - Responsive Sizing: Precisely tuned for desktop (lg:w-117.75) and full-width mobile views.
 * * @component
 */
export default function ContactForm() {
  return (
    <div
      /**
       * Root Form Container:
       * - bg-linear-to-br: Creates a sophisticated diagonal transition from transparent-violet to solid-violet.
       * - shadow-2xl: Provides strong elevation to separate the form from the background patterns.
       */
      className="relative flex flex-col w-full lg:w-117.75 lg:min-h-171 overflow-hidden rounded-[50px] shadow-2xl px-8 py-10 lg:px-10 lg:py-11 gap-12 bg-linear-to-br from-[#390D8E]/50 to-[#390D8E]"
      dir="rtl"
    >
      {/* =========================================
         1. Header Section (Context & Greeting)
         ========================================= 
         Sets the tone for user interaction with high-contrast typography and supportive subtext.
      */}
      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-white">أرسل لنا رسالة</h2>
        {/* Supporting text with a lighter violet hue for visual hierarchy */}
        <p className="text-[#CBB0FF]">يسعدنا تواصلك معنا</p>
      </div>

      {/* =========================================
         2. Interactive Form Section
         ========================================= 
         Logic: Uses a column flex layout with space-y-8 to maintain vertical rhythm.
         Note: e.preventDefault() is currently handling submissions for client-side validation logic.
      */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 flex flex-col flex-1 items-start space-y-8"
      >
        {/* Identity Input: Full Name with customized placeholder */}
        <FormField
          label="الاسم بالكامل"
          type="text"
          placeholder="أدخل اسمك بالكامل"
        />

        {/* Communication Input: Email address with standard validation attributes */}
        <FormField
          label="الإيميل"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
        />

        {/* Narrative Input: Detailed message area for multi-line user feedback */}
        <FormTextArea label="كيف يمكننا مساعدتك" placeholder="أدخل رسالتك..." />

        {/* =========================================
           3. Action & Assurance Section
           ========================================= 
           Includes the submission trigger and a supporting "SLA" notice (Response time).
        */}
        <div className="flex flex-col items-start w-full gap-8 mt-auto">
          {/* Customized Primary Action Button */}
          <SubmitButton />

          {/* Trust Element: Reassuring the user with an expected response time frame */}
          <p className="pr-4 text-sm font-normal text-white opacity-90">
            عادةً نرد خلال 24 ساعة
          </p>
        </div>
      </form>
    </div>
  );
}
