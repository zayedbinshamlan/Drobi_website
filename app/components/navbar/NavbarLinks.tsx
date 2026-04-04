"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, MORE_LINKS } from "@/app/data/NavbarData";
import { DropdownIcon, ActiveIndicator } from "./NavbarElements";

/**
 * NavbarLinksProps Interface
 * @interface NavbarLinksProps
 * @property {boolean} isMobile - Toggle between mobile-optimized vertical list and desktop horizontal bar.
 * @property {function} closeMenu - Callback to trigger parent menu closure (primarily for mobile drawer).
 */
interface NavbarLinksProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

/**
 * NavbarLinks Component
 * * Core navigation logic handler for the Drobi platform.
 * Features:
 * - Smart Dropdown: Desktop-only dropdown with "click-outside" detection to improve UX.
 * - Dynamic Link Merging: Combines standard and 'more' links into a single list for mobile efficiency.
 * - State Synchronization: Tracks active link index and dropdown visibility.
 * - Interaction Refinement: Prevents default navigation on dropdown parent links to allow menu expansion.
 * * @component
 */
const NavbarLinks = ({ isMobile, closeMenu }: NavbarLinksProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /**
   * Click-Outside Detection Hook
   * Closes the desktop dropdown automatically if the user clicks anywhere else on the page.
   * This ensures the menu doesn't stay 'stuck' open.
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isMobile &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  /* =========================================
     1. Mobile Navigation View
     ========================================= 
     Flattens the navigation structure for a seamless scrolling experience in the mobile drawer.
  */
  if (isMobile) {
    // Merging standard links and sub-menu links for mobile accessibility
    const mobileLinks = [
      ...NAV_LINKS.filter((link) => !link.hasDropdown),
      ...MORE_LINKS,
    ];

    return (
      <div className="flex flex-col w-full gap-1" dir="rtl">
        {mobileLinks.map((link, index) => (
          <div key={index} className="w-full">
            <Link
              href={link.href}
              onClick={() => closeMenu?.()}
              className="flex items-center justify-start w-full py-3 px-2 text-[#1D124C] text-lg font-bold transition-all active:opacity-60"
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    );
  }

  /* =========================================
     2. Desktop Navigation View
     ========================================= 
     Horizontal bar with animated indicators and state-aware dropdown menus.
  */
  return (
    <div
      className="flex flex-row items-center gap-6 h-7 w-auto relative"
      dir="rtl"
    >
      {NAV_LINKS.map((link, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            key={link.name}
            className="relative"
            // Attaching ref only to the element that triggers a dropdown
            ref={link.hasDropdown ? dropdownRef : null}
          >
            {/* Main Navigation Link */}
            <Link
              href={link.href}
              onClick={(e) => {
                setActiveIndex(index);
                if (link.hasDropdown) {
                  e.preventDefault(); 
                  setIsDropdownOpen(!isDropdownOpen);
                } else {
                  setIsDropdownOpen(false);
                }
              }}
              className="group relative text-white text-[15px] font-normal leading-6 flex items-center gap-2 py-1 transition-all"
            >
              {link.name}
              {/* Conditional rendering of the chevron and active underline */}
              {link.hasDropdown && <DropdownIcon isOpen={isDropdownOpen} />}
              <ActiveIndicator isActive={isActive} />
            </Link>

            {/* --- Desktop Dropdown Overlay --- 
                Features CSS transitions for opacity, translation, and scaling.
            */}
            {link.hasDropdown && (
              <div
                className={`absolute top-[calc(100%+12px)] right-0 w-42.5 bg-white rounded-xl shadow-2xl py-3 z-50 transition-all duration-500 ease-in-out transform ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                    : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                }`}
              >
                {MORE_LINKS.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsDropdownOpen(false)}
                    className="block w-full text-right px-5 py-4 text-[#1D124C] text-sm font-normal hover:bg-[#F3EEFF] hover:text-[#390D8E] transition-all duration-300 border-b border-gray-50 last:border-none"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavbarLinks;
