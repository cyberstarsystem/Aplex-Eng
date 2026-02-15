import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import GLightbox from 'glightbox'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'
import Preloader from '../components/Preloader'

export default function MainLayout() {
  const location = useLocation()

  useEffect(() => {
    const glightbox = GLightbox({ selector: '.glightbox' })
    return () => glightbox.destroy()
  }, [])

  useEffect(() => {
    const navmenuScrollspy = () => {
      const navmenulinks = document.querySelectorAll('.navmenu a')
      const position = window.scrollY + 200

      navmenulinks.forEach((navmenulink) => {
        const href = navmenulink.getAttribute('href')
        if (!href || !href.startsWith('#')) return

        const section = document.querySelector(href)
        if (!section) return

        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll('.navmenu a.active').forEach((link) => link.classList.remove('active'))
          navmenulink.classList.add('active')
        } else {
          navmenulink.classList.remove('active')
        }
      })
    }

    window.addEventListener('load', navmenuScrollspy)
    window.addEventListener('scroll', navmenuScrollspy)
    return () => {
      window.removeEventListener('load', navmenuScrollspy)
      window.removeEventListener('scroll', navmenuScrollspy)
    }
  }, [])

  useEffect(() => {
    const isHome = location.pathname === '/'

    const toggleScrolled = () => {
      const selectHeader = document.querySelector('#header')
      if (!selectHeader?.classList.contains('fixed-top')) return

      // if (!isHome) {
      //   // On all non-home pages, keep navbar in "scrolled" (solid) state
      //   document.body.classList.add('scrolled')
      //   return
      // }

      if (window.scrollY > 100) {
        document.body.classList.add('scrolled')
      } else {
        document.body.classList.remove('scrolled')
      }
    }

    // Apply correct state immediately and on scroll/load
    toggleScrolled()
    document.addEventListener('scroll', toggleScrolled)
    window.addEventListener('load', toggleScrolled)

    return () => {
      document.removeEventListener('scroll', toggleScrolled)
      window.removeEventListener('load', toggleScrolled)
    }
  }, [location.pathname])

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

