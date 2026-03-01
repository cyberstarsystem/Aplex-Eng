import { useEffect, useRef } from 'react'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
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


const portfolioFilters = [
  { filter: '*', label: 'All' },
  { filter: '.filter-dryer', label: 'Dryers' },
  { filter: '.filter-evaporators', label: 'Evaporators' },
  { filter: '.filter-equipments', label: 'Equipments' },
  // { filter: '.filter-nature', label: 'Nature' },
]

const portfolioItems = [
  { img: portrait1, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: portfolio2, title: 'Evoporator', category: 'Evaporators', filter: 'filter-evaporators' },
  { img: portrait2, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: portrait4, title: 'Jacketed Process Vessels', category: 'Equipments', filter: 'filter-equipments' },
  { img: portfolio5, title: 'Evoporator', category: 'Evaporators', filter: 'filter-evaporators' },
  { img: portfolio6, title: 'Spray Dryer', category: 'Dryers', filter: 'filter-dryer' },
  { img: portfolio7, title: 'SS Chemical Reactor Vessel', category: 'Equipments', filter: 'filter-equipments' },
  { img: portfolio8, title: 'Dimple Jacket Vessels', category: 'Equipments', filter: 'filter-equipments' },
  { img: portfolio9, title: 'Evoporator', category: 'Evaporators', filter: 'filter-evaporators' },
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
                      <a href={item.img} className="glightbox" title={item.title}>
                        <i className="bi bi-zoom-in"></i>
                      </a>
                      <a href="#portfolio" title="More Details">
                        <i className="bi bi-link-45deg"></i>
                      </a>
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
