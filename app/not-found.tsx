"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ActionButton } from "@/app/components/ui/ActionButton";
import DownloadAppSection from "./components/download-app/DownloadAppSection";

/**
 * Custom 404 - Not Found Page
 * Designed specifically for the Drobi Platform.
 * Theme: "The Wrong Way" / "Road Closure" concept.
 */
export default function NotFound() {
  return (
    <main
      className="min-h-screen w-full  flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-white"
      dir="rtl"
    >
      {/* 1. Visual Composition: 3D Illustration or Mascot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full  max-w-[320px] md:max-w-[450px] aspect-square mb-8"
      >
        <Image
          src="/images/avatar-3d.png"
          alt="404 - Page Not Found"
          fill
          className="object-contain mt-20 drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* 2. Textual Content */}
      <div className="relative z-10 mt-10 max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#1A1A1A] text-3xl md:text-4xl font-black mb-4 leading-tight"
        >
          يا ساتر! شكلنا <span className="text-[#390D8E]">ضعنا في الطريق؟</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#6B7280] text-base md:text-lg mb-10 leading-relaxed"
        >
          الصفحة اللي تدور عليها مهي موجودة، أو يمكن كابتن دروبي أخذ لفة غلط.
          بسيطة.. نرجعك للمسار الصحيح؟
        </motion.p>

        {/* 3. Navigation Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ActionButton
            label="الرجوع للرئيسية"
            href="/"
            variant="action"
            className="!w-full sm:!w-60"
          />

          <ActionButton
            label="تحميل التطبيق"
            href="#download-section"
            variant="outline"
            className="!w-full sm:!w-60 !border-[#390D8E] !text-[#390D8E]"
          />
        </motion.div>
      </div>

      {/* 4. Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-[#BFA2F7] rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] right-[5%] w-32 h-32 bg-[#390D8E] rounded-full blur-[100px]" />
          </div>
          <DownloadAppSection/>
    </main>
  );
}
