import React from 'react';
import { Container } from 'react-bootstrap';
import './HeroSection.css';

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = '500px',
  overlay = true 
}) => {
  const sectionStyle = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    minHeight: height,
  };

  return (
    <section className="hero-section" style={sectionStyle}>
      {overlay && <div className="hero-overlay"></div>}
      <Container className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title animate-fade-in">{title}</h1>
          {subtitle && <p className="hero-subtitle animate-fade-in-delay">{subtitle}</p>}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
