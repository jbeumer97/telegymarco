// Schiebt Events in den dataLayer für Google Tag Manager / Google Ads.
// Ohne eingebundenen GTM passiert nichts außer dem Befüllen des Arrays.
export function trackEvent(event, params = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
