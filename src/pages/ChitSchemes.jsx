import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../components/ChitSchemes.css'

const ChitSchemes = () => {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')

  const schemes = [
    {
      id: 1,
      term: 'Long-Term',
      months: '40 Months',
      amount: '50,00,000',
      monthly: '1,25,000',
      popular: true
    },
    {
      id: 2,
      term: 'Short-Term',
      months: '25 Months',
      amount: '20,00,000',
      monthly: '80,000',
      popular: true
    },
    {
      id: 3,
      term: 'Long-Term',
      months: '40 Months',
      amount: '20,00,000',
      monthly: '50,000',
      popular: false
    },
    {
      id: 4,
      term: 'Short-Term',
      months: '25 Months',
      amount: '10,00,000',
      monthly: '40,000',
      popular: true
    },
    {
      id: 5,
      term: 'Short-Term',
      months: '25 Months',
      amount: '5,00,000',
      monthly: '20,000',
      popular: false
    },
    {
      id: 6,
      term: 'Mid-Term',
      months: '30 Months',
      amount: '3,00,000',
      monthly: '10,000',
      popular: false
    },
    {
      id: 7,
      term: 'Short-Term',
      months: '25 Months',
      amount: '2,00,000',
      monthly: '8,000',
      popular: false
    },
    {
      id: 8,
      term: 'Long-Term',
      months: '40 Months',
      amount: '2,00,000',
      monthly: '5,000',
      popular: false
    }
  ]

  const filters = [
    { key: 'all', label: 'All Schemes' },
    { key: 'short', label: 'Short-Term (25 Months)' },
    { key: 'mid', label: 'Mid-Term (30 Months)' },
    { key: 'long', label: 'Long-Term (40 Months)' }
  ]

  const getFilteredSchemes = () => {
    if (activeFilter === 'all') return schemes
    if (activeFilter === 'short') return schemes.filter(s => s.term === 'Short-Term')
    if (activeFilter === 'mid') return schemes.filter(s => s.term === 'Mid-Term')
    if (activeFilter === 'long') return schemes.filter(s => s.term === 'Long-Term')
    return schemes
  }

  const filteredSchemes = getFilteredSchemes()

  return (
    <div className="chit-schemes-page">
      <section className="chit-schemes">
        <div className="container">
          <h2 className="section-title">Chit Schemes</h2>
          <p className="section-subtitle">
            Choose the perfect investment plan that suits your financial goals
          </p>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Schemes Grid */}
          <div className="schemes-grid">
            {filteredSchemes.map((scheme) => (
              <div key={scheme.id} className={`scheme-card ${scheme.popular ? 'popular' : ''}`}>
                <div className="card-content">
                  {scheme.popular && (
                    <div className="popular-badge-top">Most Popular!</div>
                  )}
                  <div className="term-header">
                    <h3 className="term-title">{scheme.term}</h3>
                    <div className="duration">
                      <span className="duration-icon">📅</span>
                      <span>{scheme.months}</span>
                    </div>
                  </div>

                  <div className="chit-section">
                    <label className="section-label">CHIT VALUE</label>
                    <div className="amount-value">₹{scheme.amount}</div>
                  </div>

                  <div className="contribution-section">
                    <label className="section-label">Monthly Contribution</label>
                    <div className="contribution-amount">₹{scheme.monthly}<span className="period">/Month</span></div>
                  </div>

                  <div className="features">
                    <div className="feature">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">Transparent Process</span>
                    </div>
                    <div className="feature">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">Secure Investment</span>
                    </div>
                    <div className="feature">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">Easy Bidding</span>
                    </div>
                  </div>

                  <button 
                    className="btn-join"
                    onClick={() => navigate('/contact')}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="schemes-cta">
            <h3>Ready to Start Your Investment Journey?</h3>
            <p>Choose a scheme that fits your financial goals and secure your future today!</p>
            <button 
              className="btn-primary"
              onClick={() => navigate('/contact')}
            >
              Contact Us to Enroll
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChitSchemes
