import React, { useState, useEffect, useRef } from 'react'
import '../styles/Products.css'

const products = [
  {
    id: 1,
    name: 'Pepsi Original',
    size: '330ml',
    price: 'Rp 4.500',
    originalPrice: null,
    badge: 'Best Seller',
    badgeColor: 'blue',
    bgGradient: 'linear-gradient(145deg, #003f7a, #0066cc)',
    img: 'https://pngimg.com/uploads/pepsi/pepsi_PNG8953.png',
    rating: 4.9,
    sold: '12rb',
    desc: 'Rasa original khas Pepsi yang menyegarkan',
  },
  {
    id: 2,
    name: 'Pepsi Black',
    size: '450ml',
    price: 'Rp 6.000',
    originalPrice: 'Rp 8.000',
    badge: 'Promo',
    badgeColor: 'red',
    bgGradient: 'linear-gradient(145deg, #0d0d1a, #1a1a3e)',
    img: 'https://banner2.cleanpng.com/20180613/fwi/kisspng-aluminum-can-fizzy-drinks-pepsi-tin-can-energy-dri-pepsi-max-5b20a0aa78c1a7.6575337515288649384946.jpg',
    rating: 4.8,
    sold: '8rb',
    desc: 'Sensasi bold dengan kafein ekstra',
  },
  {
    id: 3,
    name: 'Pepsi Zero Sugar',
    size: '330ml',
    price: 'Rp 5.000',
    originalPrice: null,
    badge: '0 Kalori',
    badgeColor: 'green',
    bgGradient: 'linear-gradient(145deg, #003366, #0052a3)',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Pepsizerosugar.png',
    rating: 4.7,
    sold: '6rb',
    desc: 'Rasa penuh tanpa gula, tanpa kalori',
  },
  {
    id: 4,
    name: 'Pepsi Botol 1.5L',
    size: '1.5 Liter',
    price: 'Rp 12.000',
    originalPrice: 'Rp 15.000',
    badge: 'Hemat',
    badgeColor: 'orange',
    bgGradient: 'linear-gradient(145deg, #004080, #0070d6)',
    img: 'https://pngimg.com/uploads/pepsi/pepsi_PNG5.png',
    rating: 4.8,
    sold: '9rb',
    desc: 'Ukuran besar, cocok untuk keluarga',
  },
]

function ProductCard({ product, onAddToCart }) {
  const [isWishlist, setIsWishlist] = useState(false)
  const [addedAnim, setAddedAnim] = useState(false)

  const handleAdd = () => {
    onAddToCart(product)
    setAddedAnim(true)
    setTimeout(() => setAddedAnim(false), 600)
  }

  return (
    <div className="product-card">
      {/* Badge */}
      <span className={`product-card__badge product-card__badge--${product.badgeColor}`}>
        {product.badge}
      </span>

      {/* Wishlist Button */}
      <button
        className={`product-card__wishlist ${isWishlist ? 'product-card__wishlist--active' : ''}`}
        onClick={() => setIsWishlist(!isWishlist)}
        aria-label="Wishlist"
      >
        <i className={isWishlist ? 'fas fa-heart' : 'far fa-heart'}></i>
      </button>

      {/* Image Area */}
      <div className="product-card__img-wrapper" style={{ background: product.bgGradient }}>
        <div className="product-card__img-inner">
          <img
            src={product.img}
            alt={product.name}
            className="product-card__img"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          {/* Fallback SVG jika gambar gagal load */}
          <div className="product-card__img-fallback" style={{ display: 'none' }}>
            <svg viewBox="0 0 80 140" xmlns="http://www.w3.org/2000/svg" width="70" height="130">
              <rect x="10" y="20" width="60" height="100" rx="8" fill="rgba(255,255,255,0.15)"/>
              <ellipse cx="40" cy="20" rx="30" ry="8" fill="rgba(255,255,255,0.2)"/>
              <ellipse cx="40" cy="120" rx="30" ry="8" fill="rgba(255,255,255,0.1)"/>
              <circle cx="40" cy="68" r="22" fill="#fff" fillOpacity="0.9"/>
              <path d="M40 46 A22 22 0 0 1 62 68" fill="#EF1C25"/>
              <path d="M18 68 A22 22 0 0 1 40 46" fill="#fff"/>
              <path d="M40 90 A22 22 0 0 1 18 68" fill="rgba(0,75,135,0.8)"/>
              <path d="M40 90 A22 22 0 0 0 62 68" fill="rgba(0,75,135,0.8)"/>
              <text x="40" y="100" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" fontFamily="Arial">pepsi</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="product-card__info">
        {/* Rating & Sold */}
        <div className="product-card__meta">
          <div className="product-card__rating">
            <i className="fas fa-star"></i>
            <span>{product.rating}</span>
          </div>
          <span className="product-card__sold">{product.sold} terjual</span>
        </div>

        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__size">{product.size} &bull; {product.desc}</p>

        <div className="product-card__footer">
          <div className="product-card__price-group">
            <span className="product-card__price">{product.price}</span>
            {product.originalPrice && (
              <span className="product-card__original-price">{product.originalPrice}</span>
            )}
          </div>
          <button
            className={`product-card__btn ${addedAnim ? 'product-card__btn--added' : ''}`}
            onClick={handleAdd}
          >
            <i className={addedAnim ? 'fas fa-check' : 'fas fa-shopping-cart'}></i>
          </button>
        </div>
      </div>
    </div>
  )
}

function Products() {
  const [notification, setNotification] = useState(null)
  const gridRef = useRef(null)

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.product-card')
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('product-card--visible'), i * 120)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (gridRef.current) observer.observe(gridRef.current)
    return () => observer.disconnect()
  }, [])

  const addToCart = (product) => {
    setNotification(`${product.name} ditambahkan ke keranjang!`)
    setTimeout(() => setNotification(null), 2500)
  }

  return (
    <section className="products" id="products">
      {notification && (
        <div className="products__toast">
          <i className="fas fa-check-circle"></i>
          {notification}
        </div>
      )}

      <div className="products__container">
        <div className="products__header">
          <div>
            <span className="products__tag">Koleksi Kami</span>
            <h2 className="products__title">Produk Unggulan</h2>
            <p className="products__subtitle">Temukan varian Pepsi favoritmu</p>
          </div>
          <a href="#" className="products__see-all">
            Lihat Semua <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <div className="products__grid" ref={gridRef}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
