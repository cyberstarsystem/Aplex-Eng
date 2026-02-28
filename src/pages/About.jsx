import AboutSection from '../components/About'
import OurMission from '../components/OurMission'
import OurVision from '../components/OurVision'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'

export default function About() {
  return (
    <>
      <div className='space' >
        <AboutSection />
        {/* <Team />
        <Testimonials /> */}
        <OurMission />
        <OurVision />
      </div>
    </>
  )
}

