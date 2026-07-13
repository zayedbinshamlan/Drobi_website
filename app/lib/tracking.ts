/**
 * Marketing analytics helpers (GTM dataLayer).
 *
 * Download CTAs on mobile redirect through /api/download (server-side store
 * routing), so the click never carries a store URL for GTM to match on. This
 * helper pushes an explicit `app_download_click` event to the dataLayer right
 * before the redirect, giving GTM a reliable signal to fire the ad pixels on.
 */
type AppType = "home" | "captain";

export function pushDownloadEvent(appType: AppType) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "app_download_click", app_type: appType });
}
