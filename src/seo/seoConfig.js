/**
 * SEO Configuration for Aplex Engineering Systems
 * https://www.aplexengg.com
 */

export const SITE_URL = 'https://www.aplexengg.com'
export const SITE_NAME = 'Aplex Engineering Systems'
export const SITE_TAGLINE =
  'Experts in Spray Dryers, Evaporators & Industrial Drying Systems'

export const SITE_PHONE = '+91 84870 13321'
export const SITE_EMAIL = 'sales@aplexengg.com'
export const SITE_ADDRESS =
  'A-1207, Rajyash Rise, Vishala, Ahmedabad, Gujarat 380055, India'

export const SITE_LOGO = `${SITE_URL}/favicon.png`

export const seoMeta = {
  '/': {
    title:
      'Aplex Engineering Systems | Spray Dryer & Evaporator Manufacturer India',
    description:
      'Aplex Engineering Systems is a leading manufacturer of Spray Dryers, Evaporators, Flash Dryers, Fluid Bed Dryers, Rotary Dryers and Zero Liquid Discharge (ZLD) Systems in India. Based in Ahmedabad with 120+ successful industrial projects.',
    keywords:
      'spray dryer manufacturer India, evaporator manufacturer India, zero liquid discharge system manufacturer, ZLD plant manufacturer, industrial evaporator manufacturer, drying system manufacturer, spray dryer supplier India, fluid bed dryer manufacturer, flash dryer manufacturer, Ahmedabad engineering company',
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },

  '/about': {
    title:
      'About Aplex Engineering Systems | Industrial Drying & Evaporation Experts',
    description:
      'Learn about Aplex Engineering Systems, a trusted engineering company specializing in Spray Dryers, Evaporators, Drying Systems and Process Equipment for multiple industries across India.',
    keywords:
      'about Aplex Engineering, industrial equipment manufacturer Ahmedabad, drying system company India, engineering solutions Gujarat, spray dryer experts India',
    canonical: `${SITE_URL}/about`,
    ogType: 'website',
  },

  '/services': {
    title:
      'Services | AMC, Refurbishment & Custom Engineering Solutions | Aplex Engineering',
    description:
      'Explore AMC Services, Plant Refurbishment, System Customization, Spare Parts Supply, Product Trial Facilities and Operation Contracts for industrial drying and evaporation systems.',
    keywords:
      'spray dryer AMC service, industrial dryer maintenance, dryer customization India, refurbishment services Ahmedabad, evaporator maintenance services',
    canonical: `${SITE_URL}/services`,
    ogType: 'website',
  },

  '/portfolio': {
    title:
      'Portfolio | Spray Dryer, Evaporator & Industrial Plant Projects | Aplex Engineering',
    description:
      'View Aplex Engineering Systems project portfolio featuring Spray Dryers, Evaporators, Flash Dryers, Fluid Bed Dryers and ZLD installations across various industries.',
    keywords:
      'spray dryer projects India, evaporator installation, drying system portfolio, industrial project gallery, ZLD projects India',
    canonical: `${SITE_URL}/portfolio`,
    ogType: 'website',
  },

  '/contact': {
    title:
      'Contact Aplex Engineering Systems | Request a Quote for Industrial Drying Solutions',
    description:
      'Contact Aplex Engineering Systems in Ahmedabad, Gujarat for Spray Dryers, Evaporators, ZLD Systems, Drying Plants and Industrial Process Equipment. Call +91 84870 13321.',
    keywords:
      'contact Aplex Engineering, spray dryer quote India, industrial dryer inquiry Ahmedabad, evaporator supplier contact, ZLD system manufacturer contact',
    canonical: `${SITE_URL}/contact`,
    ogType: 'website',
  },
}

/**
 * Dynamic Product SEO
 */
export function getProductSeoMeta({
  product,
  categorySlug,
  categoryName,
}) {
  const title = `${product.title} | Aplex Engineering Systems`

  const description = product.shortDescription
    ? `${product.shortDescription} Manufactured by Aplex Engineering Systems, Ahmedabad, India. Contact us for specifications, pricing and project consultation.`
    : `${product.title} manufactured by Aplex Engineering Systems. Industrial-grade equipment designed for performance, efficiency and reliability.`

  const canonical = `${SITE_URL}/products/${categorySlug}/${product.slug}`

  const keywords = `${product.title}, ${categoryName}, spray dryer manufacturer India, evaporator manufacturer India, industrial drying systems, process equipment manufacturer, Aplex Engineering Systems`

  return {
    title,
    description,
    canonical,
    keywords,
    ogType: 'website',
  }
}