import '../components/PhotoGallery.css'

const PhotoGallery = () => {
  // Gallery images from /public/gallery/
  const images = [
    { id: 1, src: '/gallery/gallery-1.jpg' },
    { id: 2, src: '/gallery/gallery-2.jpg' },
    { id: 3, src: '/gallery/gallery-3.jpg' },
    { id: 4, src: '/gallery/gallery-4.jpg' },
    { id: 5, src: '/gallery/gallery-5.jpg' },
    { id: 6, src: '/gallery/gallery-6.jpg' },
    { id: 7, src: '/gallery/gallery-7.jpg' },
    { id: 8, src: '/gallery/gallery-8.jpg' }
  ]

  return (
    <div className="photo-gallery-page">
      <section className="photo-gallery">
        <div className="container">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">
            Capturing our journey of trust and excellence over the years
          </p>

          <div className="gallery-grid-2x4">
            {images.map((img) => (
              <div key={img.id} className="gallery-item">
                <img 
                  src={img.src} 
                  alt={`Gallery ${img.id}`}
                  className="gallery-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="gallery-image-placeholder"><span class="placeholder-icon">📷</span></div>'
                  }}
                />
              </div>
            ))}
          </div>


        </div>
      </section>
    </div>
  )
}

export default PhotoGallery
