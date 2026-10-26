import React from 'react'
import '../styles/Features.css'

const featureData = [
  {
    icon: 'fas fa-truck',
    title: 'Gratis Ongkir',
    desc: 'Min. pembelian Rp 100.000',
  },
  {
    icon: 'fas fa-shield-alt',
    title: '100% Original',
    desc: 'Produk resmi dari Pepsi',
  },
  {
    icon: 'fas fa-bolt',
    title: 'Pengiriman Cepat',
    desc: 'Di seluruh Indonesia',
  },
  {
    icon: 'fas fa-headset',
    title: 'Customer Service',
    desc: 'Siap membantu 24 jam',
  },
]

function Features() {
  return (
    <section className="features">
      <div className="features__container">
        {featureData.map((feat, idx) => (
          <div key={idx} className="features__item">
            <div className="features__icon">
              <i className={feat.icon}></i>
            </div>
            <div className="features__text">
              <h4 className="features__title">{feat.title}</h4>
              <p className="features__desc">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
