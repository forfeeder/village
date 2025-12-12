import React, { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './BeforeAfter.css';

const BeforeAfter = ({ transformation }) => {
  const { t, language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

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
            src={transformation.after} 
            alt={`${transformation.title} - After`}
            className="comparison-image"
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
            src={transformation.before} 
            alt={`${transformation.title} - Before`}
            className="comparison-image"
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
        <Card.Title className="transformation-title">
          {language === 'hi' && transformation.title_hi ? transformation.title_hi : transformation.title}
        </Card.Title>
        
        <Card.Text className="transformation-description text-muted">
          {language === 'hi' && transformation.description_hi ? transformation.description_hi : transformation.description}
        </Card.Text>

        <div className="transformation-meta">
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
        )}
      </Card.Body>
    </Card>
  );
};

export default BeforeAfter;
