import ServicesSection from '../components/Services'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import CallToAction from '../components/CallToAction'

export default function Services() {
  return (
    <>
      <div className="space">
        <ServicesSection />
        {/* <Pricing /> */}
        <Faq />
        <CallToAction />
      </div>
    </>
  )
}

