import React, { useEffect, useRef, useState } from 'react'
import '../styles/Promo.css'

function Promo() {
  const [timeLeft, setTimeLeft] = useState({ hours: 10, minutes: 30, seconds: 0 })
  const promoRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('promo--visible')
          }
        })
      },
      { threshold: 0.2 }
    )
    if (promoRef.current) observer.observe(promoRef.current)
    return () => observer.disconnect()
  }, [])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <section className="promo" id="promo" ref={promoRef}>
      <div className="promo__container">
        <div className="promo__bg-shape promo__bg-shape--1"></div>
        <div className="promo__bg-shape promo__bg-shape--2"></div>

        <div className="promo__content">
          {/* Left */}
          <div className="promo__left">
            <div className="promo__logo-small">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                <circle cx="30" cy="30" r="28" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
                <path d="M30 6 A24 24 0 0 1 54 30" fill="#fff"/>
                <path d="M6 30 A24 24 0 0 1 30 6" fill="rgba(255,255,255,0.4)"/>
                <path d="M30 54 A24 24 0 0 1 6 30" fill="rgba(255,255,255,0.15)"/>
              </svg>
              <span>pepsi</span>
            </div>

            <div className="promo__badge-event">🔥 PROMO SPESIAL</div>
            <h2 className="promo__title">PEPSI 10.10</h2>
            <p className="promo__desc">
              Diskon hingga 50% + Gratis Ongkir ke seluruh Indonesia!<br />
              Jangan sampai kehabisan!
            </p>

            {/* Countdown */}
            <div className="promo__countdown">
              <span className="promo__countdown-label">Berakhir dalam:</span>
              <div className="promo__timer">
                <div className="promo__timer-block">
                  <span className="promo__timer-num">{pad(timeLeft.hours)}</span>
                  <span className="promo__timer-label">Jam</span>
                </div>
                <span className="promo__timer-colon">:</span>
                <div className="promo__timer-block">
                  <span className="promo__timer-num">{pad(timeLeft.minutes)}</span>
                  <span className="promo__timer-label">Menit</span>
                </div>
                <span className="promo__timer-colon">:</span>
                <div className="promo__timer-block">
                  <span className="promo__timer-num">{pad(timeLeft.seconds)}</span>
                  <span className="promo__timer-label">Detik</span>
                </div>
              </div>
            </div>

            <a href="#products" className="promo__btn">
              Belanja Sekarang <i className="fas fa-arrow-right"></i>
            </a>
          </div>

          {/* Right - Visual */}
          <div className="promo__right">
            <div className="promo__discount-badge">
              <span className="promo__discount-text">DISKON</span>
              <span className="promo__discount-num">50%</span>
              <span className="promo__discount-label">HINGGA</span>
            </div>
            <div className="promo__can-wrapper">
              <img
                src="/assets/pepsi-can-splash.jpg"
                alt="Pepsi Promo"
                className="promo__can-img"
              />
              <div className="promo__can-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promo
