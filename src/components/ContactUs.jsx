import { useState } from 'react'
import './ContactUs.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, this would send to info@mrjchits.co.in
    setTimeout(() => {
      setSubmitMessage('Thank you! Your message has been sent successfully.')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1500)
  }

  return (
    <div className="contact-us">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch with us for any inquiries or assistance
        </p>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Visit Us</h3>
              <p>
                <strong>MRJ Chits Pvt Ltd</strong><br />
                #75, BANASHANKARI Market,<br />
                Avenue Road, Cubbonpet,<br />
                Bangalore-560 002
              </p>
              <p className="address-alt">
                <strong>Sri Shakambari Chits Private Ltd.</strong><br />
                75, Banashankari Market,<br />
                Jumma Masjid Road, Avenue Road Cross,<br />
                Ganigarpet, Nagarathpete,<br />
                Bengaluru, Karnataka 560002
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>
                <a href="tel:08022215473">080 22215473</a><br />
                <a href="tel:08022217639">080 22217639</a><br />
                <a href="tel:+919448168227">+91 9448168227</a><br />
                <a href="tel:+919986277180">+91 9986277180</a>
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>
                <a href="mailto:info@srishakambarichits.com">info@srishakambarichits.com</a>
              </p>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <h3>Send Us a Message</h3>
              {submitMessage && (
                <div className="submit-message">{submitMessage}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              <p className="form-note">
                * Message will be sent to: <strong>info@mrjchits.co.in</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us on Map</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=Sri+Shakambari+Chits+Private+Ltd,+75,+Banashankari+Market,+Jumma+Masjid+Road,+Avenue+Road+Cross,+Ganigarpet,+Nagarathpete,+Bengaluru,+Karnataka+560002&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '15px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Shakambari Chits Location"
            ></iframe>
          </div>
          <p className="map-note">
            <strong>Exact Location:</strong>{' '}
            <a
              href="https://maps.app.goo.gl/N2sHDF7RmzuaFQ8y6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
