import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3 className="footer-logo">Sri Shakambari Chits</h3>
              <p className="footer-tagline">Pvt Ltd</p>
              <p className="footer-description">
                Your trusted partner in chit fund investments since 2005. Building relationships, securing futures.
              </p>
              <div className="footer-trust">
                <span className="trust-badge">✓ Registered Entity</span>
                <span className="trust-badge">✓ 6000+ Happy Customers</span>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/schemes">Chit Schemes</Link></li>
                <li><Link to="/team">Our Team</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/schemes">Mid Term Schemes</Link></li>
                <li><Link to="/schemes">Long Term Schemes</Link></li>
                <li><Link to="/payments">Payment Options</Link></li>
                <li><Link to="/gallery">Photo Gallery</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="footer-contact">
                <p>
                  <span className="contact-icon">📍</span>
                  75, Banashankari Market,<br />
                  Avenue Road, Bengaluru - 560002
                </p>
                <p>
                  <span className="contact-icon">📞</span>
                  <a href="tel:08022215473">080 22215473</a><br />
                  <a href="tel:+919986277180">+91 9986277180</a>
                </p>
                <p>
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:info@mrjchits.co.in">info@mrjchits.co.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Sri Shakambari Chits Pvt Ltd. All rights reserved.</p>
            <p className="footer-compliance">
              Complies with Companies Act 1956 | Operates as per Chit Fund Act 1982
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
