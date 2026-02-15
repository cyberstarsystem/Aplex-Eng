import { useEffect, useRef } from 'react'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'
import portrait1 from '../assets/img/portfolio/portfolio-portrait-1.webp'
import portfolio2 from '../assets/img/portfolio/portfolio-2.webp'
import portrait2 from '../assets/img/portfolio/portfolio-portrait-2.webp'
import portrait4 from '../assets/img/portfolio/portfolio-portrait-4.webp'
import portfolio5 from '../assets/img/portfolio/portfolio-5.webp'
import portfolio6 from '../assets/img/portfolio/portfolio-6.webp'

const portfolioFilters = [
  { filter: '*', label: 'All' },
  { filter: '.filter-photography', label: 'Photography' },
  { filter: '.filter-design', label: 'Design' },
  { filter: '.filter-automotive', label: 'Automotive' },
  { filter: '.filter-nature', label: 'Nature' },
]

const portfolioItems = [
  { img: portrait1, title: 'Capturing Moments', category: 'Photography', filter: 'filter-photography' },
  { img: portfolio2, title: 'Woodcraft Design', category: 'Web Design', filter: 'filter-design' },
  { img: portrait2, title: 'Classic Beauty', category: 'Automotive', filter: 'filter-automotive' },
  { img: portrait4, title: 'Natural Growth', category: 'Nature', filter: 'filter-nature' },
  { img: portfolio5, title: 'Urban Stories', category: 'Photography', filter: 'filter-photography' },
  { img: portfolio6, title: 'Digital Experience', category: 'Web Design', filter: 'filter-design' },
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
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
