import SEO from '../seo/SEO'
import { seoMeta } from '../seo/seoConfig'

import ContactSection from '../components/Contact'
import CallToAction from '../components/CallToAction'

export default function Contact() {
  const meta = seoMeta['/contact']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className="space">
        <ContactSection />
        <CallToAction />
      </div>
    </>
  )
}
