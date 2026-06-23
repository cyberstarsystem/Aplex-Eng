/**
 * SEO Component for Aplex Engineering Systems
 *
 * Usage:
 *   import SEO from '../seo/SEO'
 *   <SEO title="..." description="..." canonical="..." schema={schemaObj} />
 *
 * Requires: react-helmet-async (already installed)
 * Requires: <HelmetProvider> wrapping the app in main.jsx (already done)
 */

import { Helmet } from 'react-helmet-async'
import { SITE_NAME, SITE_URL, SITE_LOGO } from './seoConfig'

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = SITE_LOGO,
  schema = null,
  noindex = false,
}) {
  const fullTitle = title || `${SITE_NAME} | Industrial Drying & Evaporation Systems`
  const metaDesc =
    description ||
    'Aplex Engineering Systems – Leading manufacturer of Spray Dryers, Evaporators, Flash Dryers, Fluid Bed Dryers, and ZLD systems in India.'

  return (
    <Helmet>
      {/* ─── Core Meta ──────────────────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonical || SITE_URL} />

      {/* ─── Open Graph ─────────────────────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonical || SITE_URL} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_IN" />

      {/* ─── Twitter Card ───────────────────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* ─── JSON-LD Structured Data ─────────────────────────────────────────── */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
