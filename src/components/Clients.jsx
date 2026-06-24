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


const clientLogos = [
  { logo: c1, name: "Aries Agro Limited" },
  { logo: c2, name: "Meghmani Organics Ltd" },
  { logo: c3, name: "Jay Microcell" },
  { logo: c4, name: "UMA Group" },
  { logo: c5, name: "Ashby Chemicals Pvt Ltd" },
  { logo: c6, name: "Sigachi Industries" },
  { logo: c7, name: "Accent Bonding Precision" },
  { logo: c8, name: "Krishna Industries" },
  { logo: c9, name: "Harsh Organo Chem India Pvt Ltd" },
  { logo: c10, name: "Chhatral Environment Management System Pvt Ltd" },
  { logo: c11, name: "Shreeji Enterprise" },
  { logo: c12, name: "Shree Ambica Geotex Pvt Ltd" },
  { logo: c13, name: "Meridian" },
  { logo: c14, name: "Bliss GVS Pharma Limited" },
  { logo: c15, name: "KBH Polymers Pvt Ltd" },
  { logo: c16, name: "Sudarshan" },
  { logo: c17, name: "Client Company Logo" },
  { logo: c18, name: "Crescent Biotech" },
  { logo: c19, name: "Anha Biochem Science LLP" },
  { logo: c20, name: "Sudarshan" }
]

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
          {logos.map((client, i) => (
            <div key={i} className="swiper-slide">
              <div className="client-logo">
                <img
                  src={client.logo}
                  className="img-fluid"
                  alt={`${client.name} Logo`}
                  title={client.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
