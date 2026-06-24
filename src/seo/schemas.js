/**
 * JSON-LD Schema Markup for Aplex Engineering Systems
 * https://www.aplexengg.com
 *
 * Provides: Organization, LocalBusiness, WebSite, BreadcrumbList, Product schemas
 */

import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL, SITE_ADDRESS, SITE_LOGO } from './seoConfig'

// ─── Organization Schema ──────────────────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  description:
    'Aplex Engineering Systems is a leading manufacturer of Spray Dryers, Evaporators, Flash Dryers, Fluid Bed Dryers, and Zero Liquid Discharge (ZLD) systems based in Ahmedabad, India.',
  foundingDate: '2020',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Gujarati'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1207, Rajyash Rise, Vishala',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380055',
    addressCountry: 'IN',
  },
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  sameAs: ['https://www.indiamart.com/aplexengineeringsystem/'],
}

// ─── LocalBusiness Schema ─────────────────────────────────────────────────────
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  image: SITE_LOGO,
  url: SITE_URL,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A-1207, Rajyash Rise, Vishala',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    postalCode: '380055',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.0225,
    longitude: 72.5714,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  description:
    'Aplex Engineering Systems manufactures Spray Dryers, Evaporators, Flash Dryers, ZLD Systems and related industrial processing equipment in Ahmedabad, Gujarat, India.',
}

// ─── WebSite Schema ───────────────────────────────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description:
    'Aplex Engineering Systems – Experts in Spray Dryers, Evaporators, Drying Systems, and Industrial Processing Equipment.',
}

// ─── BreadcrumbList Schema (dynamic) ─────────────────────────────────────────
/**
 * @param {Array<{name: string, url: string}>} items - breadcrumb items
 */
export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ─── Product Schema (dynamic) ─────────────────────────────────────────────────
/**
 * @param {Object} product - product object from productsData
 * @param {string} categorySlug - category URL slug
 * @param {string} categoryName - display name of category
 */
// export function getProductSchema({ product, categorySlug, categoryName }) {
//   return {
//     '@context': 'https://schema.org',
//     '@type': 'Product',

//     name: product.title,
//     sku: product.slug,
//     image: product.images?.[0] || SITE_LOGO,

//     description: product.fullDescription || product.shortDescription,

//     brand: {
//       '@type': 'Organization',
//       name: SITE_NAME,
//     },

//     manufacturer: {
//       '@type': 'Organization',
//       name: SITE_NAME,
//       url: SITE_URL,
//     },

//     category: categoryName,

//     url: `${SITE_URL}/products/${categorySlug}/${product.slug}`,

//     offers: {
//       '@type': 'Offer',
//       priceCurrency: 'INR',
//       availability: 'https://schema.org/InStock',

//       seller: {
//         '@type': 'Organization',
//         name: SITE_NAME,
//       },

//       url: `${SITE_URL}/contact`,
//     },
//   }
// }

export function getProductSchema({ product, categorySlug, categoryName }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',

    name: product.title,
    sku: product.slug,
    image: product.images?.[0] || SITE_LOGO,

    description: product.fullDescription || product.shortDescription,

    brand: {
      '@type': 'Organization',
      name: SITE_NAME,
    },

    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },

    category: categoryName,

    url: `${SITE_URL}/products/${categorySlug}/${product.slug}`,
  }
}