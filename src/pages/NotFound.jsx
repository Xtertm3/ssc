import { useNavigate } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <button 
          className="btn-primary"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
