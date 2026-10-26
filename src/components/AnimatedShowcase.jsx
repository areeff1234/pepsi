import React, { useEffect, useRef } from 'react'
import '../styles/AnimatedShowcase.css'

function AnimatedShowcase() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('showcase__visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = sectionRef.current?.querySelectorAll('.showcase__animate')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="showcase" ref={sectionRef}>
      {/* Background decorations */}
      <div className="showcase__bg-circle showcase__bg-circle--1"></div>
      <div className="showcase__bg-circle showcase__bg-circle--2"></div>

      <div className="showcase__container">
        {/* Row 1: Text left, Image right */}
        <div className="showcase__row">
          <div className="showcase__text-block showcase__animate slide-from-left">
            <span className="showcase__tag">Sensasi Dingin</span>
            <h2 className="showcase__title">
              Dingin &amp; Segar <br />
              <span className="showcase__title-accent">Setiap Saat</span>
            </h2>
            <p className="showcase__desc">
              Pepsi hadir dengan cita rasa yang menyegarkan, sempurna menemani 
              setiap momen harimu. Setiap tegukan membawa sensasi kesegaran 
              yang tak terlupakan bersama es dan percikan soda.
            </p>
            <ul className="showcase__list">
              <li className="showcase__list-item">
                <i className="fas fa-check-circle"></i>
                Minuman berkarbonasi berkualitas tinggi
              </li>
              <li className="showcase__list-item">
                <i className="fas fa-check-circle"></i>
                Diproduksi dengan standar internasional
              </li>
              <li className="showcase__list-item">
                <i className="fas fa-check-circle"></i>
                Tersedia dalam berbagai varian rasa
              </li>
            </ul>
            <a href="#products" className="showcase__btn">
              Pesan Sekarang <i className="fas fa-shopping-cart"></i>
            </a>
          </div>

          <div className="showcase__img-block showcase__animate slide-from-right">
            <div className="showcase__img-glow showcase__img-glow--blue"></div>
            <div className="showcase__img-wrapper">
              <img
                src="/assets/pepsi-can-splash.jpg"
                alt="Pepsi Can Splash Effect"
                className="showcase__img showcase__img--floating"
              />
            </div>
            {/* Floating stats badges */}
            <div className="showcase__badge showcase__badge--1">
              <i className="fas fa-star"></i>
              <div>
                <strong>4.9</strong>
                <span>Rating</span>
              </div>
            </div>
            <div className="showcase__badge showcase__badge--2">
              <i className="fas fa-users"></i>
              <div>
                <strong>2M+</strong>
                <span>Pembeli</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="showcase__divider"></div>

        {/* Row 2: Image left, Text right */}
        <div className="showcase__row showcase__row--reverse">
          <div className="showcase__text-block showcase__animate slide-from-right">
            <span className="showcase__tag showcase__tag--dark">Edisi Premium</span>
            <h2 className="showcase__title">
              Tampilan <span className="showcase__title-accent">Elegan</span><br />
              Rasa Terbaik
            </h2>
            <p className="showcase__desc">
              Desain kaleng Pepsi yang ikonik mencerminkan kualitas premium 
              di setiap detail. Identitas visual yang kuat dengan warna biru 
              khas Pepsi yang telah dikenal di seluruh dunia selama puluhan tahun.
            </p>
            <div className="showcase__stats">
              <div className="showcase__stat">
                <strong>120+</strong>
                <span>Tahun Pengalaman</span>
              </div>
              <div className="showcase__stat">
                <strong>200+</strong>
                <span>Negara</span>
              </div>
              <div className="showcase__stat">
                <strong>#1</strong>
                <span>Pilihan Generasi</span>
              </div>
            </div>
            <a href="#promo" className="showcase__btn showcase__btn--outline">
              Lihat Promo Spesial <i className="fas fa-tag"></i>
            </a>
          </div>

          <div className="showcase__img-block showcase__animate slide-from-left">
            <div className="showcase__img-glow showcase__img-glow--purple"></div>
            <div className="showcase__img-wrapper showcase__img-wrapper--alt">
              <img
                src="/assets/pepsi-can-tilt.jpg"
                alt="Pepsi Can Tilt"
                className="showcase__img showcase__img--tilt"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedShowcase
