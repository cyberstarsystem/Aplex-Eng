/**
 * Analytics Integration for Aplex Engineering Systems
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * USAGE: Import and render <Analytics /> inside App.jsx (or MainLayout.jsx)
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Google Analytics 4 (GA4):
 *    - Go to https://analytics.google.com → Admin → Create Property
 *    - Copy your Measurement ID (format: G-XXXXXXXXXX)
 *    - Replace GA4_MEASUREMENT_ID below
 *
 * 2. Google Search Console Verification:
 *    - Go to https://search.google.com/search-console
 *    - Add property for https://www.aplexengg.com
 *    - Choose "HTML tag" method → copy the content value
 *    - Paste it in index.html: <meta name="google-site-verification" content="YOUR_TOKEN" />
 *
 * 3. Microsoft Clarity:
 *    - Go to https://clarity.microsoft.com → Create New Project
 *    - Copy your Project ID (format: alphanumeric string)
 *    - Replace CLARITY_PROJECT_ID below
 */

// ─── Configuration – UPDATE THESE VALUES ─────────────────────────────────────
const GA4_MEASUREMENT_ID = 'G-P5CXTVWEY4'
const CLARITY_PROJECT_ID = 'x8dx86g6mm'
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ─── Google Analytics 4 Page View Tracker ────────────────────────────────────
function useGA4PageView() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: location.pathname + location.search,
    })
  }, [location])
}

// ─── Script Injector Utility ──────────────────────────────────────────────────
function injectScript(id, createScript) {
  if (document.getElementById(id)) return
  const script = createScript()
  script.id = id
  document.head.appendChild(script)
}

// ─── Analytics Component ──────────────────────────────────────────────────────
export default function Analytics() {
  // Track SPA route changes in GA4
  useGA4PageView()

  useEffect(() => {
    // ── Google Analytics 4 ──────────────────────────────────────────────────
    injectScript('ga4-loader', () => {
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`
      return s
    })

    injectScript('ga4-init', () => {
      const s = document.createElement('script')
      s.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_MEASUREMENT_ID}', {
          send_page_view: false
        });
      `
      return s
    })

    // ── Microsoft Clarity ───────────────────────────────────────────────────
    injectScript('clarity-init', () => {
      const s = document.createElement('script')
      s.text = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `
      return s
    })
  }, [])

  return null
}
