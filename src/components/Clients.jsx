import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import c1 from "../assets/img/clients/clients-1.webp";
import c2 from "../assets/img/clients/clients-2.webp";
import c3 from "../assets/img/clients/clients-3.webp";
import c4 from "../assets/img/clients/clients-4.webp";
import c5 from "../assets/img/clients/clients-5.webp";
import c6 from "../assets/img/clients/clients-6.webp";

const clientLogos = [c1, c2, c3, c4, c5, c6];

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
