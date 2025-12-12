import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <>
      <div className="image-gallery">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <img 
              src={image.thumbnail || image.image} 
              alt={image.title}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <div className="gallery-info">
                <h6 className="gallery-title">{image.title}</h6>
                <p className="gallery-category">
                  <i className="bi bi-tag-fill me-2"></i>
                  {image.category}
                </p>
              </div>
              <div className="gallery-action">
                <i className="bi bi-zoom-in"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Modal 
        show={showModal} 
        onHide={handleClose}
        size="xl"
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="lightbox-container">
            <button 
              className="lightbox-nav lightbox-prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            
            <img 
              src={selectedImage?.image} 
              alt={selectedImage?.title}
              className="lightbox-image"
            />
            
            <button 
              className="lightbox-nav lightbox-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          
          {selectedImage?.description && (
            <div className="lightbox-info p-3">
              <p className="mb-2">{selectedImage.description}</p>
              <small className="text-muted">
                <i className="bi bi-calendar3 me-2"></i>
                {selectedImage.date}
              </small>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageGallery;
