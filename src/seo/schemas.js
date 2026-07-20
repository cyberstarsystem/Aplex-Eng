/**
 * JSON-LD Schema Markup for Aplex Engineering Systems
 * https://www.aplexengg.com
 *
 * Provides: Organization, LocalBusiness, WebSite, BreadcrumbList, ProductModel schemas
 */

import { SITE_URL, SITE_NAME, SITE_PHONE, SITE_EMAIL, SITE_ADDRESS, SITE_LOGO } from './seoConfig'

// ─── Organization Schema ──────────────────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  legalName: 'Aplex Engineering Systems',
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_LOGO,
  description:
    'Aplex Engineering Systems is a leading manufacturer of Spray Dryers, Evaporators, Flash Dryers, Fluid Bed Dryers, and Zero Liquid Discharge (ZLD) systems based in Ahmedabad, India.',
  foundingDate: '2020',
  isicV4: '28', // Manufacture of machinery and equipment n.e.c.
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
  isicV4: '28', // Manufacture of machinery and equipment n.e.c.
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
export function getProductSchema({ product, categorySlug, categoryName }) {
  // Format image URLs as absolute using the SITE_URL base safely
  const resolveImageUrl = (img) => {
    if (!img || typeof img !== 'string') {
      return null
    }
    if (img.startsWith('http://') || img.startsWith('https://')) {
      return img
    }
    return `${SITE_URL}${img.startsWith('/') ? '' : '/'}${img}`
  }

  const rawImages = product.images || (product.image ? [product.image] : [])
  const imagesArray = Array.isArray(rawImages) ? rawImages : [rawImages]
  const imageUrls = imagesArray
    .map(resolveImageUrl)
    .filter(Boolean)

  const resolvedImages = imageUrls.length > 0 ? imageUrls : [SITE_LOGO]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProductModel',
    name: product.title,
    description: product.fullDescription || product.shortDescription,
    image: resolvedImages,
    
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },

    manufacturer: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_LOGO,
    },

    category: categoryName,
    url: `${SITE_URL}/products/${categorySlug}/${product.slug}`,
  }

  // Improve ProductModel schema by adding optional properties only when available
  if (product.additionalType) {
    schema.additionalType = product.additionalType
  }
  if (product.isSimilarTo) {
    schema.isSimilarTo = product.isSimilarTo
  }
  if (product.keywords) {
    schema.keywords = product.keywords
  }
  if (product.audience) {
    schema.audience = product.audience
  }
  if (product.material) {
    schema.material = product.material
  } else if (product.materials) {
    schema.material = Array.isArray(product.materials) ? product.materials.join(', ') : product.materials
  }
  if (product.productionDate) {
    schema.productionDate = product.productionDate
  }

  // Additional specifications for industrial equipment
  const additionalProperty = []

  if (product.features && product.features.length > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Key Features',
      value: product.features.join(', '),
    })
  }

  if (product.industries && product.industries.length > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Industries Served',
      value: product.industries.join(', '),
    })
  }

  if (product.materials && product.materials.length > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Materials of Construction',
      value: product.materials.join(', '),
    })
  }

  if (product.mainComponents && product.mainComponents.length > 0) {
    additionalProperty.push({
      '@type': 'PropertyValue',
      name: 'Main Components',
      value: product.mainComponents.join(', '),
    })
  }

  if (additionalProperty.length > 0) {
    schema.additionalProperty = additionalProperty
  }

  return schema
}