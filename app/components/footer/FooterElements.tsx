"use client";

import React from "react";
import Link from "next/link";

/**
 * FooterButton Component - Drobi Platform
 * Core Features:
 * - Cache Busting: Resolves the "single-click" mobile issue by appending a unique timestamp to requests.
 * - Runtime Device Detection: Validates User-Agent at the moment of interaction for accurate redirection.
 * - Performance: Utilizes smooth-scroll for desktop and API-based redirection for mobile environments.
 */
export const FooterButton = ({
  label,
  href,
  variant = "primary",
  onClick,
}: {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  onClick?: (e: React.MouseEvent) => void;
}) => {
  const isPrimary = variant === "primary";

  /**
   * Orchestrates the interaction logic based on the hardware environment.
   * On mobile devices, it forces a fresh download request to bypass browser caching.
   */
  const handleInteraction = (e: React.MouseEvent) => {
    if (onClick) onClick(e);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (href.startsWith("#")) {
      e.preventDefault();

      if (isMobile) {
        const type = window.location.pathname.includes("/captain")
          ? "captain"
          : "home";

        // Magic Fix: Injecting a timestamp to ensure the URL is unique for every click event.
        const timestamp = new Date().getTime();
        window.location.assign(`/api/download?type=${type}&t=${timestamp}`);
      } else {
        // Desktop behavior: Smooth vertical scroll to the target anchor.
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleInteraction}
      // Applying HONOR Sans Medium (Weight: 500) via font-medium
      className={`flex items-center justify-center transition-all duration-500 ease-in-out shadow-lg rounded-3xl group whitespace-nowrap active:scale-95 font-medium ${
        isPrimary
          ? "bg-[#26095E] text-white hover:opacity-85"
          : "border border-[#D5D7DA] text-white hover:bg-white"
      }`}
      style={{
        width: isPrimary ? "210px" : "196px",
        height: "56px",
        padding: "12px 40px",
      }}
    >
      <span
        className={`text-[16px] transition-colors duration-500 ${
          !isPrimary && "group-hover:text-[#390D8E]"
        }`}
      >
        {label}
      </span>
    </Link>
  );
};

/**
 * FooterLinkList Component
 * Displays semantic navigation lists utilizing HONOR Sans Regular/Bold hierarchy.
 */
export const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) => (
  <div className="lg:col-span-2 text-right">
    {/* Header utilizing HONOR Sans Bold (Weight: 700) */}
    <h3 className="font-bold text-xl mb-6 text-white">{title}</h3>
    <ul className="space-y-4 text-white/80">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            // Item utilizing HONOR Sans Regular (Weight: 400)
            className="hover:text-white transition-colors font-normal inline-block"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
