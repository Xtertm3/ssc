import './PhotoGallery.css'

const PhotoGallery = () => {
  // 4 rows x 2 columns = 8 images
  const images = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    placeholder: `GALLERY_IMAGE_${i + 1}`
  }))

  return (
    <div className="photo-gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">
          Capturing our journey of trust and excellence over the years
        </p>

        <div className="gallery-grid">
          {images.map((img) => (
            <div key={img.id} className="gallery-item">
              <div className="gallery-image-placeholder">
                <span className="placeholder-icon">📷</span>
                <span className="placeholder-label">{img.placeholder}</span>
                <p className="image-instruction">Drop image here</p>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p><strong>📁 Image Location:</strong> Place your gallery images in <code>/public/gallery/</code> folder</p>
          <p>Recommended: High-quality images (1200x800px) of your office, team events, ceremonies, etc.</p>
        </div>
      </div>
    </div>
  )
}

export default PhotoGallery
