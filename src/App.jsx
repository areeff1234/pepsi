import React, { useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import Products from "./components/Products.jsx"
import AnimatedShowcase from "./components/AnimatedShowcase.jsx"
import Promo from "./components/Promo.jsx"
import Footer from "./components/Footer.jsx"
import "./styles/App.css"

function App() {
  // Global scroll animation observer for .aos-init elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate")
          }
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll(".aos-init")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <AnimatedShowcase />
      <Promo />
      <Footer />
    </div>
  )
}

export default App
