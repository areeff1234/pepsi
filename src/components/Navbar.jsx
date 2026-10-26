import React, { useState, useEffect } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount] = useState(2)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
              <circle cx="30" cy="30" r="28" fill="#004B87" stroke="#fff" strokeWidth="2"/>
              <path d="M30 6 A24 24 0 0 1 54 30" fill="#EF1C25"/>
              <path d="M6 30 A24 24 0 0 1 30 6" fill="#fff"/>
              <path d="M30 54 A24 24 0 0 1 6 30" fill="#004B87"/>
            </svg>
          </div>
          <span className="navbar__logo-text">pepsi</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links">
          <li><a href="#" className="navbar__link navbar__link--active">Beranda</a></li>
          <li><a href="#products" className="navbar__link">Produk</a></li>
          <li><a href="#promo" className="navbar__link">Promo</a></li>
          <li><a href="#footer" className="navbar__link">Tentang Kami</a></li>
        </ul>

        {/* Search bar */}
        <div className="navbar__search">
          <i className="fas fa-search navbar__search-icon"></i>
          <input type="text" placeholder="Cari produk Pepsi..." className="navbar__search-input" />
        </div>

        {/* Icons */}
        <div className="navbar__icons">
          <button className="navbar__icon-btn">
            <i className="fas fa-user"></i>
          </button>
          <button className="navbar__icon-btn navbar__cart-btn">
            <i className="fas fa-shopping-cart"></i>
            {cartCount > 0 && (
              <span className="navbar__cart-badge">{cartCount}</span>
            )}
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Cari produk Pepsi..." />
        </div>
        <ul className="navbar__mobile-links">
          <li><a href="#" onClick={closeMenu}>Beranda</a></li>
          <li><a href="#products" onClick={closeMenu}>Produk</a></li>
          <li><a href="#promo" onClick={closeMenu}>Promo</a></li>
          <li><a href="#footer" onClick={closeMenu}>Tentang Kami</a></li>
        </ul>
        <div className="navbar__mobile-actions">
          <button className="navbar__mobile-action-btn">
            <i className="fas fa-user"></i> Akun
          </button>
          <button className="navbar__mobile-action-btn navbar__mobile-cart">
            <i className="fas fa-shopping-cart"></i> Keranjang
            <span className="navbar__cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
