import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <BSNavbar bg={theme} variant={theme} expand="lg" className="navbar-custom sticky-top shadow-sm">
      <Container>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <i className="bi bi-house-heart-fill me-2 fs-4"></i>
          <span className="brand-text">{t('navbar.brand')}</span>
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BSNavbar.Toggle>
        
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={NavLink} to="/" className="nav-link-custom">
              <i className="bi bi-house-door me-1"></i>
              {t('navbar.home')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/plans" className="nav-link-custom">
              <i className="bi bi-clipboard-check me-1"></i>
              {t('navbar.plans')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/skilled-villagers" className="nav-link-custom">
              <i className="bi bi-people me-1"></i>
              {t('navbar.skilledVillagers')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/schemes" className="nav-link-custom">
              <i className="bi bi-award me-1"></i>
              {t('navbar.schemes')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/gallery" className="nav-link-custom">
              <i className="bi bi-images me-1"></i>
              {t('navbar.gallery')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/before-after" className="nav-link-custom">
              <i className="bi bi-arrow-left-right me-1"></i>
              {t('navbar.beforeAfter')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/about-village" className="nav-link-custom">
              <i className="bi bi-info-circle me-1"></i>
              {t('navbar.aboutVillage')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/about-candidate" className="nav-link-custom">
              <i className="bi bi-person-badge me-1"></i>
              {t('navbar.candidate')}
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              <i className="bi bi-envelope me-1"></i>
              {t('navbar.contact')}
            </Nav.Link>
            
            <button 
              className="btn btn-outline-primary btn-sm ms-lg-2 mt-2 mt-lg-0 me-2"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              title={language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
            >
              <i className="bi bi-translate me-1"></i>
              {language === 'en' ? 'हिं' : 'EN'}
            </button>

            <button 
              className="btn btn-outline-secondary btn-sm ms-lg-1 mt-2 mt-lg-0"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={`bi bi-${theme === 'light' ? 'moon-stars-fill' : 'sun-fill'}`}></i>
            </button>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
