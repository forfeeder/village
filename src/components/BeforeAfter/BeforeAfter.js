import React, { useState } from 'react';
import { Card, Badge, Modal } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './BeforeAfter.css';

// Resolve image paths: allow absolute URLs or local images stored in src/images/before-after
const resolveImage = (path) => {
  if (!path) return '';
  // If it's already an external URL, return as-is
  if (/^https?:\/\//i.test(path)) return path;

  // Try to require the image from the before-after images folder
  try {
    // webpack/CRA will return the resolved URL string
    return require(`../../images/before-after/${path}`);
  } catch (err) {
    console.warn('Could not resolve local image', path, err);
    return path; // fallback to the original string
  }
};

const BeforeAfter = ({ transformation }) => {
  const { t, language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    if (percentage >= 0 && percentage <= 100) {
      setSliderPosition(percentage);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    if (percentage >= 0 && percentage <= 100) {
      setSliderPosition(percentage);
    }
  };

  const openImage = (src, alt) => {
    setModalSrc(src);
    setModalAlt(alt);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <Card className="before-after-card shadow-sm">
      <div 
        className="comparison-container"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After Image (Background) */}
        <div className="image-container">
          <img 
            src={resolveImage(transformation.after)} 
            alt={`${transformation.title} - After`}
            className="comparison-image clickable-image"
            onClick={() => openImage(resolveImage(transformation.after), `${transformation.title} - After`)}
          />
          <Badge bg="success" className="image-label image-label-right">
            {t('beforeAfter.after')}
          </Badge>
        </div>

        {/* Before Image (Foreground with clip) */}
        <div 
          className="image-container before-container"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={resolveImage(transformation.before)} 
            alt={`${transformation.title} - Before`}
            className="comparison-image clickable-image"
            onClick={() => openImage(resolveImage(transformation.before), `${transformation.title} - Before`)}
          />
          <Badge bg="danger" className="image-label image-label-left">
            {t('beforeAfter.before')}
          </Badge>
        </div>

        {/* Slider Handle */}
        <div 
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          <div 
            className="slider-handle"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            <i className="bi bi-chevron-left"></i>
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>

      <Card.Body>
        {/* <Card.Title className="transformation-title">
          {language === 'hi' && transformation.title_hi ? transformation.title_hi : transformation.title}
        </Card.Title>
        
        <Card.Text className="transformation-description text-muted">
          {language === 'hi' && transformation.description_hi ? transformation.description_hi : transformation.description}
        </Card.Text> */}

        {/* <div className="transformation-meta">
          <div className="meta-item">
            <i className="bi bi-calendar3 text-success me-2"></i>
            <small className="text-muted">{transformation.year}</small>
          </div>
          
          <div className="meta-item">
            <i className="bi bi-tag text-primary me-2"></i>
            <small className="text-muted text-capitalize">{transformation.category}</small>
          </div>
        </div>

        {transformation.impact && (
          <div className="impact-section mt-3 p-3 bg-light rounded">
            <small className="fw-semibold text-success">
              <i className="bi bi-graph-up-arrow me-2"></i>
              {t('beforeAfter.impact')}
            </small>
            <p className="mb-0 mt-2">
              <small>{language === 'hi' && transformation.impact_hi ? transformation.impact_hi : transformation.impact}</small>
            </p>
          </div>
        )} */}
      </Card.Body>
      {/* Image Modal */}
      <Modal show={showModal} onHide={closeModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalAlt}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-0">
          <img src={modalSrc} alt={modalAlt} style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain' }} />
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default BeforeAfter;
