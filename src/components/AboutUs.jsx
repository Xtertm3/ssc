import { useState } from 'react'
import './AboutUs.css'
import PolicyModal from './PolicyModal'

const AboutUs = () => {
  const [modalContent, setModalContent] = useState(null)

  const openModal = (type) => {
    setModalContent(type)
  }

  const closeModal = () => {
    setModalContent(null)
  }

  return (
    <div className="about-us">
      {/* Floating background icons */}
      <div className="animated-background">
        <div className="floating-icon icon-1">📜</div>
        <div className="floating-icon icon-2">🏆</div>
        <div className="floating-icon icon-3">🎖️</div>
        <div className="floating-icon icon-4">📋</div>
        <div className="floating-icon icon-5">✅</div>
        <div className="floating-icon icon-6">🌟</div>
      </div>

      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              <strong>V Munnanju, Managing Director</strong> started the business in 2005 with limited chit schemes, which was then incorporated in 2005 and formed a registered entity as <strong>Sri Shakambari Chits Pvt Ltd</strong>. The firm complies with companies Act of 1956 & operates as per the Chit Fund act 1982. Sri Shakambari Chits Pvt Ltd celebrates 11 years of continuous success.
            </p>
            
            <p>
              Sri Shakambari Chits Pvt Ltd is a most renowned chit fund that operates in traditional way. Sri Shakambari Chits Pvt Ltd's mission is to maintain the goodwill and retain long term relationship with their clients. Since 2005, the company has promoted and operated various chit groups amounting from Rs 25000/- to Rs 25,00,000/- It has served more than 6000 satisfied customers till date. We are proud to be recognised as a trustworthy firm and we will continue to give the best service to all our subscribers in the same manner.
            </p>
            
            <p>
              In early 2000's the business segmented limited target customers such as small scale business man, working individuals etc. With continuous support and reliability business expanded and attracted professionals like Doctors, IT professionals, CA's to big industrialists etc. Sri Shakambari Chits Pvt Ltd is known for its trust and goodwill which helped in retaining the existing customers for more than 25 years.
            </p>
          </div>

          <div className="policy-buttons">
            <button 
              className="btn-policy" 
              onClick={() => openModal('privacy')}
            >
              Privacy Policy
            </button>
            <button 
              className="btn-policy" 
              onClick={() => openModal('refund')}
            >
              Refund and Cancellation Policy
            </button>
            <button 
              className="btn-policy" 
              onClick={() => openModal('terms')}
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>

      {modalContent && (
        <PolicyModal type={modalContent} onClose={closeModal} />
      )}
    </div>
  )
}

export default AboutUs
