import '../components/RecentPosts.css'

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      title: 'Why Sri Shakambari Chits Pvt Ltd',
      excerpt: 'SRI SHAKAMBARI CHITS PVT LTD goodwill and trust with over 6000 happy customers. SRI SHAKAMBARI CHITS PVT LTD retains a long term relationship with its clients from the inception.',
      link: '#'
    },
    {
      id: 2,
      title: 'The Chit Fund Act',
      excerpt: 'The Chits Funds Act,1982 Be it enacted by Parliament in the Thirty-third Year of the Republic of India as follows: STATEMENT OF OBJECTS AND REASONS 1-A „conventional chit‟ is an',
      link: '#'
    },
    {
      id: 3,
      title: 'About Chits',
      excerpt: 'Why Chit Funds? 5 Times better than FD\'s Best and most trusted investment plan to meet your short term needs. In simple terms, it could be said as interest free',
      link: '#'
    },
    {
      id: 4,
      title: 'Chit Operation',
      excerpt: 'How does chit operate ? Chit is a mutually beneficial scheme where in a group of people contributes towards the chit value and one member from the group is given',
      link: '#'
    }
  ]

  return (
    <div className="recent-posts-page">
      <section className="recent-posts">
        <div className="container">
          <h2 className="section-title">Recent Posts</h2>
          <p className="section-subtitle">
            Stay informed with the latest updates and insights
          </p>

          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-icon">📄</div>
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <a href={post.link} className="post-link">
                  Continue Reading
                  <span className="arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecentPosts
