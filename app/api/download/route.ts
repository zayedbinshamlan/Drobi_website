import { NextResponse } from "next/server";

/**
 * Force dynamic rendering to prevent Next.js from aggressively caching the API route.
 * This ensures headers (user-agent) are read fresh on every request.
 */
export const dynamic = "force-dynamic";

/**
 * Smart Download Redirect API
 * Evaluates the device user-agent and requested app type to route users.
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const userAgent = request.headers.get("user-agent") || "";

  

  const isIOS = /iPad|iPhone|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);

  const links = {
    captain: {
      ios: "https://apps.apple.com/sa/app/drobi-partners/id6753208879",
      android: "https://play.google.com/store/apps/details?id=com.aait.drobi_captain&hl=en",
    },
    home: {
      ios: "https://apps.apple.com/sa/app/drobi/id6753208053",
      android: "https://play.google.com/store/apps/details?id=com.aait.drobi&hl=en",
    },
  };

  const targetLinks = type === "captain" ? links.captain : links.home;

  if (isIOS) {
    return NextResponse.redirect(targetLinks.ios);
  } else if (isAndroid) {
    return NextResponse.redirect(targetLinks.android);
  }

  // Fallback for Desktop/PC users: Redirect them to the download section
  return NextResponse.redirect(new URL("/#download-section", request.url));
}