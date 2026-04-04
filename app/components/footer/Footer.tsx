"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SOCIAL_MEDIA,
  QUICK_LINKS,
  LEGAL_LINKS,
  CONTACT_INFO,
} from "@/app/data/FooterData";
import { FooterButton, FooterLinkList } from "./FooterElements";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
/**
 * Footer Component
 * The structural foundation of the Drobi platform UI.
 * Features:
 * - High-Impact CTA: A dedicated conversion zone with a vibrant brand gradient.
 * - Multi-Column Navigation: Organizes links, social media, and contact data using a 10-column grid on desktop.
 * - Branding and Social Integration: Features optimized logo rendering and interactive social media iconography.
 * - Localization: Supports RTL layout for Arabic content while maintaining LTR for specific data.
 * - Legal Compliance: Displays clickable Commercial Registration and Tax numbers linked to official PDF certificates safely using English filenames.
 * - Interactive Contact: Includes copy-to-clipboard functionality with a modern inline UI feedback for email links.
 * @component
 */
export default function Footer() {
  const pathname = usePathname();
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  
  const isCaptainPage = pathname?.includes("/captain");


  const router = useRouter();

  const handleNavigation = (e: React.MouseEvent, type: "home" | "captain") => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);


    if (isMobile) {
    e.preventDefault();
    router.push(`/api/download?type=${type}`);
  } else {
    const element = document.getElementById("download-section");
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
    const handleEmailCopy = (href: string, text: string) => {
      if (href.startsWith("mailto:")) {
        navigator.clipboard.writeText(text);
        setIsEmailCopied(true);
        setTimeout(() => {
          setIsEmailCopied(false);
        }, 2000);
      }
  };
  
 

    return (
      <footer className="w-full" dir="rtl">
        {/* 1. Upper Section: Call to Action (CTA) */}
        <div
          className="flex flex-col items-center justify-center mx-auto gap-8 py-12 px-2 text-center"
          style={{
            background:
              "linear-gradient(91.74deg, #26095E -4.96%, #390D8E 99.24%)",
            minHeight: "289px",
          }}
        >
          <div className="max-w-2xl px-4">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 md:mb-10">
              {isCaptainPage
                ? "ابدأ اليوم وكن جزءًا من عائلة دروبي"
                : "جاهز تبدأ مشوارك؟"}
            </h2>
            <p className="text-white/80 text-[14px] md:text-base">
              {isCaptainPage
                ? "أكثر من 20,000 كابتن في المملكة يثقون بنا. ماذا تنتظر؟"
                : "توصيل أسرع وأسهل.. مع دروبي"}
            </p>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-row items-center justify-center gap-2 md:gap-4 w-full px-4">
            {isCaptainPage ? (
              <>
                <FooterButton
                  label="انضــم الآن"
                  variant="primary"
                  href="#download-section"
                  onClick={(e) => handleNavigation(e, "captain")}
                />
                <FooterButton
                  label="تحدّث معنا"
                  variant="outline"
                  href="https://wa.me/966558686141"
                />
              </>
            ) : (
              <>
                <FooterButton
                  label="حمل التطبيق الآن"
                  variant="primary"
                  href="#download-section"
                  onClick={(e) => handleNavigation(e, "home")}
                />
                <FooterButton
                  label="سجل ككابتن"
                  variant="outline"
                  href="/captain"
                />
              </>
            )}
          </div>
        </div>
        {/* 2. Bottom Section: Master Navigation */}
        <div
          className="w-full text-white pt-12 pb-8"
          style={{
            background:
              "linear-gradient(89.55deg, #26095E -14.74%, #390D8E 87.34%)",
          }}
        >
          <div className="container mx-auto px-4 lg:px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-10 lg:gap-12 mb-12">
              {/* Column 1: Branding and Social Presence */}
              <div className="lg:col-span-3 flex flex-col lg:gap-20 gap-6 items-center lg:items-start order-1 mb-4 lg:mb-0">
                <Image
                  src="/images/drobi-logo.svg"
                  alt="Drobi Brand Logo"
                  width={215}
                  height={88}
                  className="mb-2 w-45 lg:w-53.75 h-auto"
                />
                <div className="flex items-center gap-2">
                  {SOCIAL_MEDIA.map((icon) => (
                    <Link
                      key={icon.name}
                      href={icon.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="group w-10 h-10 bg-[#1D124C] rounded-full flex items-center justify-center transition-all hover:bg-[#26095E] hover:scale-110"
                    >
                      <Image
                        src={icon.src}
                        alt={icon.name}
                        width={20}
                        height={20}
                        className="brightness-0 invert group-hover:opacity-80 transition-opacity"
                      />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="lg:col-span-2 order-2 text-right">
                <FooterLinkList title="روابط سريعة" links={QUICK_LINKS} />
              </div>

              {/* Column 3: Legal Compliance */}
              <div className="lg:col-span-2 order-3 text-right">
                <FooterLinkList title="روابط قانونية" links={LEGAL_LINKS} />
              </div>

              {/* Column 4: Direct Contact */}
              <div className="lg:col-span-3 order-4 text-right">
                <h3 className="font-bold text-xl mb-6 text-white">
                  تواصل معنا
                </h3>
                <ul className="space-y-4 font-normal text-white/80">
                  {CONTACT_INFO.map((info, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-start gap-3"
                    >
                      <Image
                        src={info.icon}
                        alt="Contact Icon"
                        width={20}
                        height={20}
                      />

                      {info.href ? (
                        <div className="flex items-center gap-2">
                          <a
                            href={info.href}
                            dir={info.isLtr ? "ltr" : "rtl"}
                            onClick={() =>
                              handleEmailCopy(info.href, info.text)
                            }
                            className="text-sm font-normal hover:text-white transition-colors duration-300 cursor-pointer"
                          >
                            {info.text}
                          </a>

                          {info.href.startsWith("mailto:") && isEmailCopied && (
                            <span className="text-[10px] bg-white text-[#26095E] px-2 py-0.5 rounded-full font-bold animate-pulse">
                              تم النسخ ✔
                            </span>
                          )}
                        </div>
                      ) : (
                        <span
                          dir={info.isLtr ? "ltr" : "rtl"}
                          className="text-sm font-normal"
                        >
                          {info.text}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. Legal, Registration, and Copyright Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between text-white/40 text-sm font-normal gap-4">
              {/* Downloadable Certificates Links */}
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center">
                <a
                  href="/شهادة_السجل_التجاري.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  aria-label="View Commercial Registration Certificate"
                >
                  السجل التجاري: 7051511736
                </a>

                <span className="hidden md:block">|</span>

                <a
                  href="/الشهادة_الضريبة.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                  aria-label="View VAT Registration Certificate"
                >
                  الرقم الضريبي: 314199310700003
                </a>
              </div>

              {/* Copyright */}
              <div dir="ltr" className="text-center">
                <p>© 2026 Drobi. جميع الحقوق محفوظة</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
