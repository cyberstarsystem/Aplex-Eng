import Hero from '../components/Hero'
import About from '../components/About'
import Clients from '../components/Clients'
import FeaturedServices from '../components/FeaturedServices'
import HowWeWork from '../components/HowWeWork'
import Features from '../components/Features'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import CallToAction from '../components/CallToAction'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Clients />
      <FeaturedServices />
      {/* <HowWeWork /> */}
      
      {/* <Features /> */}
      <Services />
      {/* <Pricing /> */}
      {/* <Faq /> */}
      <CallToAction />
      {/* <Testimonials /> */}
      <Portfolio />
      {/* <Team /> */}
      <Contact />
    </>
  )
}

