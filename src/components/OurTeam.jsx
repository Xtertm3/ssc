import './OurTeam.css'

const OurTeam = () => {
  const team = [
    {
      id: 1,
      name: 'V Munnanju',
      position: 'Managing Director',
      description: 'V Munnanju former vice president of PLD bank. Having above 10 years of experience in the area of banking industry He is part of SRI SHAKAMBARI CHITS PVT LTD since its inception. With immense trust and support from customers it motivated the firm to grow to great heights. He is also the director MRJ Chit Pvt Ltd.',
      imagePlaceholder: 'V_MUNNANJU_IMAGE'
    },
    {
      id: 2,
      name: 'D. Ramaiah',
      position: 'Director',
      description: 'D.Ramaiah Former employee of Karnataka Industrial Co-operative bank.who was inspired with chit funds started chits ranging from 10000 to 25000. having more than 20 years of experience in the domain chits funds and mortgage. He is also the director MRJ Chit Pvt Ltd.',
      imagePlaceholder: 'D_RAMAIAH_IMAGE'
    },
    {
      id: 3,
      name: 'M Jairaj',
      position: 'Director',
      description: 'M Jairaj Entrepreneur of Sri Raghavendra finance corp. Jairaj renowned industrialist unite with MRJ Chits Pvt Ltd with wide range of customer network. Joined as Director SSCPL.',
      imagePlaceholder: 'M_JAIRAJ_IMAGE'
    },
    {
      id: 4,
      name: 'R Srinivas',
      position: 'Director',
      description: 'R Srinivas MBA Joined as director of SSCPL. Srinivas comes with wide knowledge in commerce and IT enabled transformation in the domain of finance. He is also the director MRJ Chit Pvt Ltd.',
      imagePlaceholder: 'R_SRINIVAS_IMAGE'
    }
  ]

  return (
    <div className="our-team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the experienced leaders driving our success
        </p>

        <div className="team-list">
          {team.map((member) => (
            <div key={member.id} className="team-member">
              <div className="member-image">
                <div className="image-placeholder-team">
                  <span className="placeholder-icon-team">👤</span>
                  <span className="placeholder-label-team">{member.imagePlaceholder}</span>
                  <p className="image-instruction-team">Place team member photo here</p>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-position">{member.position}</div>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-note">
          <p><strong>📁 Image Location:</strong> Place team member photos in <code>/public/team/</code> folder</p>
          <p>Recommended: Professional headshots (600x600px) with transparent or clean background</p>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
