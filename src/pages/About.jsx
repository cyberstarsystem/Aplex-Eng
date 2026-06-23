import SEO from '../seo/SEO'
import { seoMeta } from '../seo/seoConfig'

import AboutSection from '../components/About'
import OurMission from '../components/OurMission'
import OurVision from '../components/OurVision'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'

export default function About() {
  const meta = seoMeta['/about']
  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={meta.canonical}
      />
      <div className='space'>
        <AboutSection />
        {/* <Team />
        <Testimonials /> */}
        <OurMission />
        <OurVision />
      </div>
    </>
  )
}
