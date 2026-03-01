import '../components/Payments.css'

const Payments = () => {
  return (
    <div className="payments-page">
      <section className="payments">
        <div className="container">
          <h2 className="section-title">Payments</h2>
          <p className="section-subtitle">
            Multiple convenient payment options for your transactions
          </p>

          <div className="payment-methods">
            <div className="payment-card">
              <div className="payment-icon">🏦</div>
              <h3>NEFT and RTGS</h3>
              <div className="payment-details">
                <div className="detail-row">
                  <span className="detail-label">Bank:</span>
                  <span className="detail-value">Axis Bank</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Account Name:</span>
                  <span className="detail-value">Sri Shakambari Chits Pvt Ltd</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Account Number:</span>
                  <span className="detail-value important">913020056151836</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">IFSC Code:</span>
                  <span className="detail-value important">UTIB0001151</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Branch:</span>
                  <span className="detail-value">Cauvery Bhavan</span>
                </div>
              </div>
            </div>

            <div className="payment-card">
              <div className="payment-icon">📝</div>
              <h3>Cheque Payments</h3>
              <div className="payment-details">
                <p className="cheque-info">
                  Cheque remitted in the name <strong>"Sri Shakambari Chits Pvt Ltd."</strong> should contain this info.
                </p>
                <div className="cheque-instructions">
                  <h4>Instructions:</h4>
                  <ul>
                    <li>Ensure the cheque is properly signed</li>
                    <li>Write the correct account name</li>
                    <li>Mention your chit scheme number</li>
                    <li>Keep the cheque acknowledgment safe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="payment-notice">
            <div className="notice-icon">ℹ️</div>
            <div className="notice-content">
              <h4>Important Notice</h4>
              <p>Please ensure all payment details are accurate. After making the payment, kindly share the transaction details with us through the contact form or via phone for quick verification.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Payments
