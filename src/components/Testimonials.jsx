import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I'm one of happy customer associated with SSCPL since 3 years and the service n system implementation is so good and we feel it is trusted n reputed organisation and really we can invest our money without second thought. System in SSCPL shows the level of their experience and quality of services they offer. I feel it's a right platform to invest money n save it.",
      name: 'Kiran',
      company: 'Digiflic Controls India Pvt Ltd'
    },
    {
      id: 2,
      text: "One of the most trusted and renowned brand. We have been associated with this co for more than 20 yrs feels secured, most important is our investment and returns are free from fraudulent. I have personally experienced that they are customer focused and very much flexible to my expectations. With recent automation and system change over, I'm able to manage transactions on-line, such as statement request, on-line funds transfer, on-line bidding etc.",
      name: 'Mohan',
      company: 'Volvo'
    },
    {
      id: 3,
      text: "The best thing about Sri Shakambari Chits is that you get to save money for long term with short term returns. This is really helpful when you need money in an emergency such as marriage,medical issues or school fee where you can bid and get your money immediately without any issues for the registered chit amt. I am really happy to be part of this firm for the last 15 yrs and also proud that my first car down payment was from my savings in SSCPL. In today's world there are people who cheat by running chit funds at home or by renting a small place and runaway. I can definitely say I am in SAFE hands. I will definitely recommend more people to join us.",
      name: 'Chethan',
      company: 'Lenovo India'
    }
  ]

  return (
    <div className="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          What our valued customers say about us
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-company">{testimonial.company}</div>
                </div>
              </div>
              <div className="rating">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
