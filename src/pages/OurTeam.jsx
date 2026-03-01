import '../components/OurTeam.css'

const OurTeam = () => {
  const team = [
    {
      id: 1,
      name: 'V Munnanju',
      position: 'Managing Director',
      description: 'Former VP of PLD Bank with 10+ years banking experience. Leading SSCPL since inception.',
      image: '/team/v-munnanju.jpg'
    },
    {
      id: 2,
      name: 'D. Ramaiah',
      position: 'Director',
      description: 'Ex-Karnataka Industrial Co-op Bank. 20+ years in chit funds & mortgage expertise.',
      image: '/team/d-ramaiah.jpg'
    },
    {
      id: 3,
      name: 'M Jairaj',
      position: 'Director',
      description: 'Entrepreneur & renowned industrialist with wide customer network.',
      image: '/team/m-jairaj.jpg'
    },
    {
      id: 4,
      name: 'R Srinivas',
      position: 'Director',
      description: 'MBA with expertise in commerce & IT transformation in finance domain.',
      image: '/team/r-srinivas.jpg'
    }
  ]

  return (
    <div className="our-team-page">
      <section className="our-team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            Meet the experienced leaders driving our success
          </p>

          <div className="team-grid-1x4">
            {team.map((member) => (
              <div key={member.id} className="team-member">
                <div className="team-member-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <span className="placeholder-icon" style={{ display: 'none' }}>👤</span>
                </div>
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-position">{member.position}</p>
                  <p className="team-member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurTeam
