import './ChitSchemes.css'

const ChitSchemes = ({ scrollToSection }) => {
  const schemes = [
    {
      id: 1,
      term: 'Long-Term',
      months: '40 Months',
      amount: '50,00,000',
      monthly: '1,25,000/month',
      popular: true
    },
    {
      id: 2,
      term: 'Short-Term',
      months: '25 Months',
      amount: '20,00,000',
      monthly: '80,000/month',
      popular: true
    },
    {
      id: 3,
      term: 'Long-Term',
      months: '40 Months',
      amount: '20,00,000',
      monthly: '50,000/month',
      popular: false
    },
    {
      id: 4,
      term: 'Short-Term',
      months: '25 Months',
      amount: '10,00,000',
      monthly: '40,000/month',
      popular: true
    },
    {
      id: 5,
      term: 'Short-Term',
      months: '25 Months',
      amount: '5,00,000',
      monthly: '20,000/month',
      popular: false
    },
    {
      id: 6,
      term: 'Mid-Term',
      months: '30 Months',
      amount: '3,00,000',
      monthly: '10,000/month',
      popular: false
    },
    {
      id: 7,
      term: 'Short-Term',
      months: '25 Months',
      amount: '2,00,000',
      monthly: '8,000/month',
      popular: false
    },
    {
      id: 8,
      term: 'Long-Term',
      months: '40 Months',
      amount: '2,00,000',
      monthly: '5,000/month',
      popular: false
    }
  ]

  return (
    <div className="chit-schemes">
      <div className="container">
        <h2 className="section-title">Chit Schemes</h2>
        <p className="section-subtitle">
          Click the below link to enroll to Sri Shakambari Chit Schemes
        </p>

        <div className="schemes-grid">
          {schemes.map((scheme) => (
            <div key={scheme.id} className={`scheme-card ${scheme.term.toLowerCase().replace('-', '-')} ${scheme.popular ? 'popular' : ''}`}>
              <div className="scheme-badge">
                {scheme.term}
                {scheme.popular && <span className="popular-badge">Popular</span>}
              </div>
              <div className="scheme-duration">{scheme.months}</div>
              <div className="scheme-amount">₹{scheme.amount}</div>
              <div className="scheme-monthly">{scheme.monthly}</div>
              <button 
                className="btn-signup"
                onClick={() => scrollToSection('contact')}
              >
                Sign up!
              </button>
            </div>
          ))}
        </div>

        <div className="schemes-cta">
          <h3>Ready to Start Your Investment Journey?</h3>
          <p>Choose a scheme that fits your financial goals and secure your future today!</p>
          <button 
            className="btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Contact Us to Enroll
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChitSchemes
