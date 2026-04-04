"use client";

import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarActions from "./NavbarActions";
import { Menu, X } from "lucide-react";
import Image from "next/image";

/**
 * NavbarProps Interface
 * @interface NavbarProps
 * @property {object} user - Optional user object containing profile details.
 */
interface NavbarProps {
  user?: {
    name: string;
    image: string;
  };
}

/**
 * Navbar Component
 * * The primary navigation system for the Drobi platform.
 * Features:
 * - Adaptive Styling: Dynamically adjusts scale and opacity based on scroll position.
 * - Mobile Menu Logic: Full-screen overlay with scroll-lock integration for better UX.
 * - Dynamic User Profile: Renders user-specific data in the mobile view when authenticated.
 * - Glassmorphism: Implements backdrop-blur and soft shadows for a premium UI feel.
 * * @component
 */
export default function Navbar({ user }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Scroll Handler
   * Monitors vertical scroll position to toggle the "compact" state of the navbar.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Body Scroll Lock
   * Prevents the background content from scrolling when the mobile menu is active.
   * This is a standard UX practice for full-screen overlays.
   */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full py-4 px-4 lg:px-6 z-50 font-lato transition-all duration-500"
      dir="rtl"
    >
      {/* --- Main Navigation Container --- 
        Implements dynamic scaling and opacity changes based on 'isScrolled' state.
      */}
      <div
        className={`max-w-310 mx-auto flex items-center 
          justify-between
           rounded-full
            transition-all duration-500 px-6 py-3 lg:px-8 
            lg:py-4 pointer-events-auto
             bg-[#390D8E] shadow-lg relative
              z-70
          ${isScrolled && !isOpen ? "scale-95 opacity-90 backdrop-blur-lg" : "scale-100"}
          ${isOpen ? "shadow-none" : ""}`}
      >
        {/* Brand Identity: Logo Component */}
        <div className="shrink-0">
          <NavbarLogo />
        </div>

        {/* Desktop Layout: Navigation Links & Actions */}
        <div className="hidden lg:flex flex-1 items-center justify-center px-4 xl:px-8">
          <NavbarLinks />
        </div>

        <div className="hidden lg:flex items-center shrink-0">
          <NavbarActions />
        </div>

        {/* Mobile Layout: Toggle Button (Hamburger / Close) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          className="lg:hidden flex items-center bg-[#F4EEFF] text-[#181D27] justify-center w-10 h-10 rounded-full transition-all active:scale-90"
        >
          {isOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- Mobile Menu Overlay --- 
        Full-screen gradient background with slide-in transition.
      */}
      <div
        className={`fixed inset-0
           h-dvh
            bg-linear-to-b from-[#EFE9FF] to-[#F4EEFF]
             z-60
             flex flex-col transition-all duration-500 ease-in-out lg:hidden pt-32 pb-8 px-8 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        dir="rtl"
      >
        <div className="flex-1 flex flex-col w-full max-w-sm mx-auto overflow-y-auto hide-scrollbar">
          {/* User Profile Section (Mobile Only) */}
          {user && (
            <div className="flex flex-col items-center mb-8">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-sm mb-3">
                <Image
                  src={user.image}
                  alt={`${user.name} Profile`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-[#2B1B54] font-bold text-lg font-cairo">
                {user.name}
              </h3>
            </div>
          )}

          {/* Links & Actions for Mobile Orientation */}
          <div className="w-full flex flex-col text-[#2B1B54]">
            <NavbarLinks isMobile closeMenu={() => setIsOpen(false)} />
          </div>

          <div className="w-full mt-8 flex flex-col gap-4">
            <NavbarActions isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}
