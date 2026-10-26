import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <div className="footer__container">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <circle cx="30" cy="30" r="28" fill="#004B87" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                <path d="M30 6 A24 24 0 0 1 54 30" fill="#EF1C25"/>
                <path d="M6 30 A24 24 0 0 1 30 6" fill="#fff"/>
                <path d="M30 54 A24 24 0 0 1 6 30" fill="#004B87"/>
              </svg>
              <div>
                <span className="footer__logo-text">pepsi</span>
                <span className="footer__tagline">Live For Now</span>
              </div>
            </div>
            <p className="footer__brand-desc">
              Nikmati kesegaran terbaik Pepsi di setiap momen. 
              Rasakan perbedaannya bersama jutaan penikmat Pepsi di seluruh Indonesia.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="footer__social-link" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="footer__menu">
            <h4 className="footer__menu-title">Menu</h4>
            <ul className="footer__menu-list">
              <li><a href="#">Beranda</a></li>
              <li><a href="#products">Produk</a></li>
              <li><a href="#promo">Promo</a></li>
              <li><a href="#footer">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Bantuan */}
          <div className="footer__menu">
            <h4 className="footer__menu-title">Bantuan</h4>
            <ul className="footer__menu-list">
              <li><a href="#">Cara Belanja</a></li>
              <li><a href="#">Pengiriman</a></li>
              <li><a href="#">Pembayaran</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Ikuti Kami */}
          <div className="footer__menu">
            <h4 className="footer__menu-title">Ikuti Kami</h4>
            <ul className="footer__menu-list">
              <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
              <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
              <li><a href="#"><i className="fab fa-tiktok"></i> TikTok</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__container footer__bottom-inner">
          <p className="footer__copy">© 2025 Pepsi. Semua hak dilindungi.</p>
          <div className="footer__payment">
            <span className="footer__payment-label">Metode Pembayaran:</span>
            <div className="footer__payment-icons">
              <span className="footer__payment-icon">VISA</span>
              <span className="footer__payment-icon">MC</span>
              <span className="footer__payment-icon">GoPay</span>
              <span className="footer__payment-icon">BCA</span>
              <span className="footer__payment-icon">OVO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
