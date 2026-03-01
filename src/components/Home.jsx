import { useState, useEffect } from 'react'
import './Home.css'

const Home = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'One Stop Solution for Chits',
      subtitle: 'This is an opportunity for you to invest and build a beautiful life',
      imagePlaceholder: 'SLIDE_1_IMAGE'
    },
    {
      id: 2,
      title: 'One Stop Solution for Chits',
      subtitle: 'This is an opportunity for you to invest and build a beautiful life',
      imagePlaceholder: 'SLIDE_2_IMAGE'
    },
    {
      id: 3,
      title: 'One Stop Solution for Chits',
      subtitle: 'This is an opportunity for you to invest and build a beautiful life',
      imagePlaceholder: 'SLIDE_3_IMAGE'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="home">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="slide-background">
              {/* IMAGE PLACEHOLDER: Add your hero image here */}
              <div className="image-placeholder">
                <div className="placeholder-text">{slide.imagePlaceholder}</div>
                <p className="placeholder-instruction">
                  Place your professional financial/creative image here
                </p>
              </div>
            </div>
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="container">
                <h1 className="hero-title" data-aos="fade-up">{slide.title}</h1>
                <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
                  {slide.subtitle}
                </p>
                <button 
                  className="btn-primary hero-btn" 
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div>
    </div>
  )
}

export default Home
