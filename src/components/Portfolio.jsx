import { useEffect, useRef } from 'react'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import portrait1 from '../assets/img/portfolio/spray-dryer.jpg'
import portfolio2 from '../assets/img/portfolio/evoporator.jpg'
import portrait2 from '../assets/img/portfolio/spray-2.jpg'
import portrait4 from '../assets/img/portfolio/jacked.jpg'
import portfolio5 from '../assets/img/portfolio/evoporator2.jpg'
import portfolio6 from '../assets/img/portfolio/spray3.jpg'
import portfolio7 from '../assets/img/portfolio/vessel.jpg'
import portfolio8 from '../assets/img/portfolio/jacket-vessel.jpg'
import portfolio9 from '../assets/img/portfolio/evoporator3.jpg'
import portfolio10 from '../assets/img/portfolio/PPH SCRUBBER TANK.jpeg'
import portfolio11 from '../assets/img/portfolio/PPH TANKS.jpeg'
import portfolio12 from '../assets/img/portfolio/PUMP.jpeg'
import portfolio13 from '../assets/img/portfolio/REACTOR.jpeg'
import portfolio14 from '../assets/img/portfolio/SCRRUBER.jpeg'
import portfolio15 from '../assets/img/portfolio/SCRUBBER PUMP.jpeg'
import portfolio16 from '../assets/img/portfolio/SFD COLUMN.jpeg'
import portfolio17 from '../assets/img/portfolio/SPRAY DRYER PLANT.jpeg'
import portfolio18 from '../assets/img/portfolio/SPRAY DRYER.jpeg'
import portfolio19 from '../assets/img/portfolio/TWIN SCREW.jpeg'
import portfolio20 from '../assets/img/portfolio/VIBRO-SHIFTER.jpeg'
import { Link } from 'react-router-dom'
import sprayDryers_3 from '../assets/img/products/SPRAY DRYERS - 3.webp'
import sprayDryers_2 from '../assets/img/products/SPRAY DRYERS - 2.jpg'
import closedLoopSprayDryer from '../assets/img/products/Closed-Loop-Spray-Dryer.webp'
import rotaryDryers from '../assets/img/products/ROTARY DRYERS 2.webp'
import flashDryers from '../assets/img/products/FLASH DRYERS - 2.jpg'
import flashDryers1 from '../assets/img/products/FLASH DRYERS - 1.png'
import hygienic1 from "../assets/img/products/PILOT SPRAY DRYER -1.jpeg"
import cageMillFlashDryer from '../assets/img/products/CAGE MILL FLASH DRYER - 1.webp'
import continuousFluidBedDryer from '../assets/img/products/CONTINUOUS FLUID BED DRYER (CFBD) - 1.png'
import vibratoryFuildBedDryers1 from '../assets/img/products/VIBRATORY FLUID BED DRYERS (VFBD) - 2.webp'
import hygienic3 from "../assets/img/products/MINI SPRAY DRYERS - 1.jpeg"
import productSpecificDryer1 from '../assets/img/products/LAB stainless-steel-spray-dryers.webp'
import hygienic2 from "../assets/img/products/ROTARY DISC ATOMIZATION- 1.webp"
import hygienic4 from "../assets/img/products/MINI SPRAY DRYERS - 2.webp"
import sprayNozzleAtomization from '../assets/img/products/SPRAY NOZZLE ATOMIZATION.jpg'
import zeroLiquidDischargeDryerImage1 from '../assets/img/products/ZERO LIQUID DISCHARGE (ZLD) DRYERS - 2.jpg'
import zeroLiquidDischargeDryerImage2 from '../assets/img/products/ZERO LIQUID DISCHARGE (ZLD) DRYERS - 3.webp'
import fallingFilmEvaporatorImage from '../assets/img/products/FALLING FILM EVAPORATOR - 1.jpg'
import forcedCirculationEvaporatorImage from '../assets/img/products/FORCED CIRCULATION EVAPORATOR -1.webp'
import multipleEffectEvaporatorImage from '../assets/img/products/MULTIPLE EFFECT EVAPORATOR (MEE) - 1.jpeg'
import chemicalReactorsImage1 from '../assets/img/SPAREPARTPHOTOS/CHEMICAL REACTOR - 1.png'
import forcedCirculationEvaporatorImage1 from '../assets/img/products/FORCED CIRCULATION EVAPORATOR - 2.webp'
import vesselsAndStorageTanksImage3 from '../assets/img/SPAREPARTPHOTOS/PRESSURE VESSELS - 1.jpg'
import vesselsAndStorageTanksImage4 from '../assets/img/SPAREPARTPHOTOS/DM WATER STORAGE TANK.webp'

import hotAirGenerator16 from '../assets/img/hotAirGenerator/Indirect Fired Hot Air Generator.jpeg'
import hotAirGenerator11 from '../assets/img/hotAirGenerator/Gas Fired Hot Air Generator.png'
import hotAirGenerator17 from '../assets/img/hotAirGenerator/Indirect-Fired-Hot-Air-Generator-1-1.webp'

const portfolioFilters = [
  { filter: '*', label: 'All' },
  { filter: '.filter-dryer', label: 'Dryers' },
  { filter: '.filter-evaporators', label: 'Evaporators' },
  { filter: '.filter-equipments', label: 'Equipments' },
  // { filter: '.filter-nature', label: 'Nature' },
]

const portfolioItems = [
  { img: portrait1, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: sprayDryers_2, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: sprayDryers_3, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: closedLoopSprayDryer, title: 'Closed-Loop Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: rotaryDryers, title: 'Rotary Dryers', category: 'Dryers', filter: 'filter-dryer' },
  { img: flashDryers, title: 'Flash Dryers', category: 'Dryers', filter: 'filter-dryer' },
  { img: flashDryers1, title: 'Flash Dryers', category: 'Dryers', filter: 'filter-dryer' },
  { img: cageMillFlashDryer, title: 'Caga Mill Flash Dryers', category: 'Dryers', filter: 'filter-dryer' },
  { img: hygienic1, title: 'Pilot Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: continuousFluidBedDryer, title: 'Continuous Fluid Bed Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: vibratoryFuildBedDryers1, title: 'Vibratory Fuild Bed Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: hygienic3, title: 'Hygienic Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: productSpecificDryer1, title: 'Product Specific Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: hygienic4, title: 'Mini Spray Dryers', category: 'Dryers', filter: 'filter-dryer' },
  { img: sprayNozzleAtomization, title: 'Spray Nozzle Atomization', category: 'Dryers', filter: 'filter-dryer' },
  { img: zeroLiquidDischargeDryerImage1, title: 'Zero Liquid Discharge', category: 'Dryers', filter: 'filter-dryer' },
  { img: zeroLiquidDischargeDryerImage2, title: 'Zero Liquid Discharge', category: 'Dryers', filter: 'filter-dryer' },

  { img: hotAirGenerator16, title: 'Hot Air Generator Components', category: 'Dryers', filter: 'filter-dryer' },
  { img: hotAirGenerator11, title: 'Hot Air Generator Components', category: 'Dryers', filter: 'filter-dryer' },
  { img: hotAirGenerator17, title: 'Hot Air Generator Components', category: 'Dryers', filter: 'filter-dryer' },








  { img: fallingFilmEvaporatorImage, title: 'Falling Film Evaporator', category: 'Evaporators', filter: 'filter-evaporators' },
  { img: forcedCirculationEvaporatorImage, title: 'Forced Circulation Evaporator', category: 'Evaporators', filter: 'filter-evaporators' },
  { img: multipleEffectEvaporatorImage, title: 'Zero Liquid Discharge', category: 'Evaporators', filter: 'filter-evaporators' },




  { img: portfolio2, title: 'Evoporator', category: 'Evaporators', filter: 'filter-evaporators' },
  // { img: portrait2, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: portrait4, title: 'Jacketed Process Vessels', category: 'Equipments', filter: 'filter-equipments' },
  { img: portfolio5, title: 'Evoporator', category: 'Evaporators', filter: 'filter-evaporators' },
  { img: portfolio6, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  // { img: portfolio7, title: 'SS Chemical Reactor Vessel', category: 'Equipments', filter: 'filter-equipments' },
  { img: portfolio8, title: 'Dimple Jacket Vessels', category: 'Equipments', filter: 'filter-equipments' },
  { img: chemicalReactorsImage1, title: 'Chemical Reactors', category: 'Equipments', filter: 'filter-equipments' },


  { img: vesselsAndStorageTanksImage4, title: 'Vessels & Storage Tanks', category: 'Equipments', filter: 'filter-equipments' },
  { img: forcedCirculationEvaporatorImage1, title: 'Crystallizers', category: 'Equipments', filter: 'filter-equipments' },
  { img: vesselsAndStorageTanksImage3, title: 'Vessels & Storage Tanks', category: 'Equipments', filter: 'filter-equipments' },

  // { img: portfolio9, title: 'Evoporator', category: 'Evaporators', filter: 'filter-evaporators' },
  // { img: portfolio10, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio11, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio12, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio13, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio14, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio15, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio16, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio17, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio18, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio19, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
  // { img: portfolio20, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
]

export default function Portfolio() {
  const isotopeRef = useRef(null)
  const isotopeInstance = useRef(null)
const lightboxRef = useRef(null)

  useEffect(() => {
    const container = isotopeRef.current?.querySelector('.isotope-container')
    if (!container) return

    imagesLoaded(container, () => {
      isotopeInstance.current = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        filter: '*',
        sortBy: 'original-order',
      })
    })
    lightboxRef.current = GLightbox({
      selector: '.glightbox',
    })

    return () => {
      if (isotopeInstance.current) isotopeInstance.current.destroy()
    }
  }, [])

  const handleFilter = (e) => {
    const filter = e.currentTarget.getAttribute('data-filter')
    isotopeRef.current?.querySelectorAll('.isotope-filters li').forEach((li) => li.classList.remove('filter-active'))
    e.currentTarget.classList.add('filter-active')
    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({ filter })
    }
  }

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Explore our completed industrial projects and engineering solutions.</p>
      </div>
      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order" ref={isotopeRef}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center mt-4">
              <ul className="portfolio-filters isotope-filters">
                {portfolioFilters.map((f, i) => (
                  <li
                    key={f.filter}
                    data-filter={f.filter}
                    className={i === 0 ? 'filter-active' : ''}
                    onClick={handleFilter}
                  >
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row gy-4 portfolio-container isotope-container">
            {portfolioItems.map((item, i) => (
              <div
                key={i}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.filter}`}
              >
                <div className="portfolio-wrap">
                  <img src={item.img} className="img-fluid" alt="Portfolio" loading="lazy" />
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                    <div className="portfolio-links">
                      <a
                        href={item.img}
                        className="glightbox"
                        data-gallery="portfolio-gallery"
                        title={item.title}
                      >
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      {/* <Link to={`/product/${item.slug}`} title="More Details">
                        <i className="bi bi-link-45deg"></i>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
