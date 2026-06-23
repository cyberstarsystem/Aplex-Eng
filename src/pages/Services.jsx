import SEO from '../seo/SEO'
import { seoMeta } from '../seo/seoConfig'

import ServicesSection from '../components/Services'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import CallToAction from '../components/CallToAction'

export default function Services() {
  const meta = seoMeta['/services']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className="space">
        <ServicesSection />
        {/* <Pricing /> */}
        {/* <Faq /> */}
        <CallToAction />
      </div>
    </>
  )
}
