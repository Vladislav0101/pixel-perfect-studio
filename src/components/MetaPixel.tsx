import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: typeof window.fbq;
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;

export function MetaPixel() {
  const location = useLocation();

  useEffect(() => {
    if (!PIXEL_ID) return;

    // Load Facebook Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
    `;
    script.id = 'meta-pixel';
    document.head.appendChild(script);

    // Noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.alt = '';
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);

    return () => {
      document.getElementById('meta-pixel')?.remove();
      noscript.remove();
    };
  }, []);

  // Track PageView on route change (SPA)
  useEffect(() => {
    if (!PIXEL_ID || typeof window.fbq !== 'function') return;
    window.fbq('track', 'PageView');
  }, [location.pathname]);

  // Track Scroll Depth (50%, 100%)
  useEffect(() => {
    if (!PIXEL_ID || typeof window.fbq !== 'function') return;

    const thresholds = { 50: false, 100: false };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      if (percent >= 50 && !thresholds[50]) {
        thresholds[50] = true;
        window.fbq!('trackCustom', 'Scroll_Depth', { depth: 50 });
      }
      if (percent >= 100 && !thresholds[100]) {
        thresholds[100] = true;
        window.fbq!('trackCustom', 'Scroll_Depth', { depth: 100 });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return null;
}

/** Lead — успешная отправка формы контакта */
export function trackMetaPixelLead() {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
}

/** Contact — клик по CTA «связаться» (Узнать цену, Получить предложение и т.п.) */
export function trackMetaPixelToContact(resource: string, page?: string) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', {
      content_name: resource,
      ...(page && { page }),
    });
  }
}

/** CTA_Click — клик по вторичным CTA (Посмотреть работы, Узнать больше) */
export function trackMetaPixelCTAClick(label?: string) {
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', 'CTA_Click', label ? { cta_name: label } : undefined);
  }
}

/** ViewContent — просмотр контента (проект, услуга) */
export function trackMetaPixelViewContent(contentName: string, contentType?: string) {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'ViewContent', {
      content_name: contentName,
      ...(contentType && { content_type: contentType }),
    });
  }
}
