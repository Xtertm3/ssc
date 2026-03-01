import { useEffect } from 'react'
import './PolicyModal.css'
import { privacyPolicy, refundPolicy, termsAndConditions } from './policyData'

const PolicyModal = ({ type, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return privacyPolicy
      case 'refund':
        return refundPolicy
      case 'terms':
        return termsAndConditions
      default:
        return { title: '', content: '' }
    }
  }

  const { title, content } = getContent()

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  )
}

export default PolicyModal
