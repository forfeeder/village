import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer-custom bg-dark text-light py-5 mt-5">
      <Container>
        <Row className="g-4">
          {/* About Section */}
          <Col lg={4} md={6}>
            <h5 className="footer-heading mb-3">
              <i className="bi bi-house-heart-fill me-2"></i>
              {t('footer.aboutTitle')}
            </h5>
            <p className="footer-text">
              {t('footer.aboutText')}
            </p>
            <div className="social-links mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="footer-heading mb-3">{t('footer.quickLinks')}</h5>
            <ul className="footer-links">
              <li><Link to="/">{t('navbar.home')}</Link></li>
              <li><Link to="/plans">{t('navbar.plans')}</Link></li>
              <li><Link to="/skilled-villagers">{t('navbar.skilledVillagers')}</Link></li>
              <li><Link to="/schemes">{t('navbar.schemes')}</Link></li>
              <li><Link to="/gallery">{t('navbar.gallery')}</Link></li>
            </ul>
          </Col>

          {/* Important Links */}
          <Col lg={3} md={6}>
            <h5 className="footer-heading mb-3">{t('footer.aboutLinks')}</h5>
            <ul className="footer-links">
              <li><Link to="/about-village">{t('navbar.aboutVillage')}</Link></li>
              <li><Link to="/about-candidate">{t('navbar.candidate')}</Link></li>
              <li><Link to="/before-after">{t('navbar.beforeAfter')}</Link></li>
              <li><Link to="/contact">{t('navbar.contact')}</Link></li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h5 className="footer-heading mb-3">{t('footer.contactInfo')}</h5>
            <ul className="footer-contact">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>
                {t('footer.address')}
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>
                +91 8193929161
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                amansingh@forfeeder.in
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider my-4" />

        {/* Bottom Footer */}
        <Row>
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 footer-copyright">
              &copy; {currentYear} {t('footer.copyright')}
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0 footer-credit">
              {t('footer.credit')}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
