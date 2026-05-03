/**
 * Tracking utilities for Meta Pixel and Google Analytics
 */

declare global {
  interface Window {
    fbq?: any;
    gtag?: any;
    dataLayer?: any[];
  }
}

export const trackWhatsAppClick = (location: string) => {
  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'WhatsAppClick', { location });
    window.fbq('track', 'Lead', { content_name: `WhatsApp Lead - ${location}` });
  }

  // Google Analytics
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'conversion',
      event_label: location,
    });
  }

  console.log(`[Tracking] WhatsApp click tracked from: ${location}`);
};

export const trackPageView = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
};

export const trackViewContent = (contentName: string) => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', { content_name: contentName });
  }
};
