import React, { useEffect, useRef, useState } from 'react'
import '../styles/Hero.css'

function Hero() {
  const videoRef = useRef(null)
  const [videoError, setVideoError] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      headline: 'RASA YANG SELALU',
      subheadline: 'MENYATUKAN',
      desc: 'Nikmati kesegaran Pepsi di setiap momen spesialmu.',
    },
    {
      headline: 'SEGARNYA TIADA',
      subheadline: 'TANDING',
      desc: 'Rasakan sensasi dingin Pepsi di setiap tegukan.',
    },
    {
      headline: 'MOMEN TERBAIK',
      subheadline: 'BERSAMA PEPSI',
      desc: 'Jadikan setiap momen lebih bermakna dengan Pepsi.',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="hero__video-wrapper">
        {!videoError ? (
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src="/assets/pepsi-banner.mp4" type="video/mp4" />
            <source src="/assets/pepsi-banner.webm" type="video/webm" />
          </video>
        ) : (
          /* Fallback gradient background if no video */
          <div className="hero__video-fallback"></div>
        )}
        <div className="hero__overlay"></div>
      </div>

      {/* Animated particles */}
      <div className="hero__particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`hero__particle hero__particle--${i + 1}`}></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__logo-badge">
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
              <circle cx="30" cy="30" r="28" fill="#004B87" stroke="#fff" strokeWidth="2"/>
              <path d="M30 6 A24 24 0 0 1 54 30" fill="#EF1C25"/>
              <path d="M6 30 A24 24 0 0 1 30 6" fill="#fff"/>
              <path d="M30 54 A24 24 0 0 1 6 30" fill="#004B87"/>
            </svg>
            <span className="hero__logo-name">pepsi</span>
          </div>

          <div className="hero__text-wrapper">
            {slides.map((slide, idx) => (
              <div key={idx} className={`hero__slide ${idx === currentSlide ? 'hero__slide--active' : ''}`}>
                <h1 className="hero__headline">
                  {slide.headline}<br />
                  <span className="hero__headline-accent">{slide.subheadline}</span>
                </h1>
                <p className="hero__desc">{slide.desc}</p>
              </div>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#products" className="hero__btn hero__btn--primary">
              Belanja Sekarang <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#promo" className="hero__btn hero__btn--secondary">
              Lihat Promo
            </a>
          </div>

          {/* Slide Dots */}
          <div className="hero__dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`hero__dot ${idx === currentSlide ? 'hero__dot--active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Hero Visual Side */}
        <div className="hero__visual">
          <div className="hero__visual-glow"></div>
          <img
            src="/assets/pepsi-can-splash.jpg"
            alt="Pepsi Can Splash"
            className="hero__can-img"
          />
          <div className="hero__ripple hero__ripple--1"></div>
          <div className="hero__ripple hero__ripple--2"></div>
          <div className="hero__ripple hero__ripple--3"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"></div>
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}

export default Hero
