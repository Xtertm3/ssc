import { useNavigate } from 'react-router-dom'
import '../components/ChitSchemes.css'

const ChitSchemes = () => {
  const navigate = useNavigate()

  const schemes = [
    {
      id: 1,
      term: 'Mid Term',
      months: '30 Months',
      amount: '6,00,000',
      monthly: '20,000/ Month'
    },
    {
      id: 2,
      term: 'Mid Term',
      months: '30 Months',
      amount: '3,00,000',
      monthly: '10,000/ Month'
    },
    {
      id: 3,
      term: 'Mid Term',
      months: '30 Months',
      amount: '1,50,000',
      monthly: '5,000/ Month'
    },
    {
      id: 4,
      term: 'Long Term',
      months: '40 Months',
      amount: '20,00,000',
      monthly: '50,000/ Month'
    },
    {
      id: 5,
      term: 'Long Term',
      months: '40 Months',
      amount: '10,00,000',
      monthly: '25,000/ Month'
    },
    {
      id: 6,
      term: 'Long Term',
      months: '40 Months',
      amount: '5,00,000',
      monthly: '12,500/ Month'
    },
    {
      id: 7,
      term: 'Long Term',
      months: '40 Months',
      amount: '2,00,000',
      monthly: '5,000/ Month'
    },
    {
      id: 8,
      term: 'Long Term',
      months: '40 Months',
      amount: '1,00,000',
      monthly: '2,500/ Month'
    }
  ]

  return (
    <div className="chit-schemes-page">
      <section className="chit-schemes">
        <div className="container">
          <h2 className="section-title">Chit Schemes</h2>
          <p className="section-subtitle">
            Click the below link to enroll to Sri Shakambari Chit Schemes
          </p>

          <div className="schemes-grid">
            {schemes.map((scheme) => (
              <div key={scheme.id} className={`scheme-card ${scheme.term.toLowerCase().replace(' ', '-')}`}>
                <div className="scheme-badge">{scheme.term}</div>
                <div className="scheme-duration">{scheme.months}</div>
                <div className="scheme-amount">₹{scheme.amount}</div>
                <div className="scheme-monthly">{scheme.monthly}</div>
                <button 
                  className="btn-signup"
                  onClick={() => navigate('/contact')}
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
