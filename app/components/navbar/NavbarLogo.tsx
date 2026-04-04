import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * NavbarLogoProps Interface
 * @interface NavbarLogoProps
 * @property {number} width - Custom width for the logo (defaults to 107px).
 * @property {number} height - Custom height for the logo (defaults to 42px).
 * @property {string} className - Additional CSS classes for custom styling/positioning.
 */
interface NavbarLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

/**
 * NavbarLogo Component
 * * The brand identity trigger for the Drobi platform.
 * Features:
 * - Optimized Loading: Uses Next.js `priority` attribute to ensure the logo loads
 * immediately, as it's a critical 'Above the Fold' element (LCP).
 * - Accessibility: Wrapped in a semantic `Link` with a descriptive `aria-label`
 * for screen readers.
 * - Fluid Scaling: Implements `object-contain` to maintain aspect ratio integrity.
 * * @param {NavbarLogoProps} props - Component properties.
 * @returns {JSX.Element} The brand logo wrapped in a home navigation link.
 */
const NavbarLogo = ({
  width = 107,
  height = 42,
  className = "",
}: NavbarLogoProps) => {
  return (
    <Link
      href="/"
      // 'shrink-0' ensures the logo doesn't compress in tight flex layouts
      className={`block shrink-0 ${className}`}
      aria-label="Drobi - Home"
    >
      <Image
        src="/images/drobi-logo.svg"
        alt="Drobi Logo"
        width={width}
        height={height}
        /**
         * Priority Attribute:
         * This tells Next.js to preload this image. Since the logo is the first
         * thing a user sees, this significantly improves the Largest Contentful Paint (LCP).
         */
        priority
        className="object-contain"
      />
    </Link>
  );
};

export default NavbarLogo;
