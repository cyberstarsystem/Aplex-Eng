import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import c1 from "../assets/img/clients/client-1.svg";
import c2 from "../assets/img/clients/client-2.jpg";
import c3 from "../assets/img/clients/client-3.webp";
import c4 from "../assets/img/clients/client-4.webp";
import c5 from "../assets/img/clients/client-5.png";
import c6 from "../assets/img/clients/client-6.png";
import c7 from "../assets/img/clients/client-7.svg";
import c8 from "../assets/img/clients/client-8.webp";
import c9 from "../assets/img/clients/client-9.gif";
import c10 from "../assets/img/clients/client-10.png";
import c11 from "../assets/img/clients/client-11.webp";
import c12 from "../assets/img/clients/client-12.webp";
import c13 from "../assets/img/clients/client-13.avif";
import c14 from "../assets/img/clients/client-14.png";
import c15 from "../assets/img/clients/client-15.png";
import c16 from "../assets/img/clients/client-16.png";
import c17 from "../assets/img/clients/client-17.jpg";
import c18 from "../assets/img/clients/client-18.png";
import c19 from "../assets/img/clients/client-19.png";
import c20 from "../assets/img/clients/client-20.svg";


const clientLogos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20];

export default function Clients() {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    swiperInstance.current = new Swiper(swiperRef.current, {
      modules: [Autoplay], // 👈 IMPORTANT
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,

      },
      slidesPerView: "auto",
      spaceBetween: 40,
      breakpoints: {
        320: { slidesPerView: 2, spaceBetween: 20 },
        640: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 30 },
        1200: { slidesPerView: 6, spaceBetween: 40 },
      },
    });

    return () => {
      if (swiperInstance.current) swiperInstance.current.destroy(true, true);
    };
  }, []);

  const logos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="clients section">
      <div className="container section-title">
        <h2 className="mb-0">Our Valuable Clients</h2>
      </div>
      <div className="clients-slider swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {logos.map((src, i) => (
            <div key={i} className="swiper-slide">
              <div className="client-logo">
                <img src={src} className="img-fluid" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
