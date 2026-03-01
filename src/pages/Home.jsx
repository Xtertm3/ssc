import { useNavigate } from 'react-router-dom'
import './Home.css'
import { useState, useEffect } from 'react'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const slides = [
    {
      id: 1,
      title: 'Invest Smart, Grow Faster',
      subtitle: 'Join thousands of satisfied customers who have built wealth through chit funds',
      icon: '💰',
      gradient: 'gradient-1'
    },
    {
      id: 2,
      title: 'Secure Financial Growth',
      subtitle: 'Transparent, regulated, and trusted investment options for your future',
      icon: '🛡️',
      gradient: 'gradient-2'
    },
    {
      id: 3,
      title: 'Build Your Tomorrow',
      subtitle: 'Start your wealth journey with Sri Shakambari Chits today',
      icon: '🎯',
      gradient: 'gradient-3'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <div className={`hero-slider ${slides[currentSlide].gradient}`}>
        <div className="hero-slides-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="slide-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              <div className="slide-content">
                <div className="slide-icon">{slide.icon}</div>
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <button 
                  className="btn-primary hero-btn"
                  onClick={() => navigate('/schemes')}
                >
                  Explore Schemes
                  <span className="btn-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="slider-controls">
          <button className="control-btn prev" onClick={prevSlide}>
            <span>‹</span>
          </button>
          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button className="control-btn next" onClick={nextSlide}>
            <span>›</span>
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">💎</div>
              <h3>High Returns</h3>
              <p>Competitive interest rates with transparent calculations and guaranteed growth</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🔐</div>
              <h3>100% Secure</h3>
              <p>RBI regulated with professional management and complete financial protection</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">⚡</div>
              <h3>Quick Process</h3>
              <p>Simple documentation and fast fund allocation for your convenience</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">👥</div>
              <h3>Expert Support</h3>
              <p>Dedicated team available to guide you through every investment step</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Sri Shakambari Chits?</h2>
          <p className="section-subtitle">25+ Years of Trust & Excellence in Chit Funds</p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">01</div>
              <h3>Trusted Since 2000</h3>
              <p>Over two decades of proven track record with thousands of satisfied customers across the region</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">02</div>
              <h3>Flexible Schemes</h3>
              <p>Multiple investment options from ₹1 Lakh to ₹20 Lakh tailored to your financial goals</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">03</div>
              <h3>Fully Regulated</h3>
              <p>Complete compliance with RBI guidelines and transparent operations with zero hidden charges</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">04</div>
              <h3>Expert Team</h3>
              <p>Experienced directors with strong banking and finance backgrounds leading your investments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Start Your Wealth Journey?</h2>
            <p>Join our community of successful investors building a secure financial future</p>
            <div className="cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => navigate('/schemes')}
              >
                View Investment Schemes
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/contact')}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

