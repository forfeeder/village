import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import './Home.css';

const Home = () => {
  const { t } = useLanguage();

  const quickLinks = [
    {
      icon: 'bi-clipboard-check',
      title: t('home.quickLinks.plans.title'),
      description: t('home.quickLinks.plans.description'),
      link: '/plans',
      color: '#2E7D32'
    },
    {
      icon: 'bi-people',
      title: t('home.quickLinks.villagers.title'),
      description: t('home.quickLinks.villagers.description'),
      link: '/skilled-villagers',
      color: '#1565C0'
    },
    {
      icon: 'bi-award',
      title: t('home.quickLinks.schemes.title'),
      description: t('home.quickLinks.schemes.description'),
      link: '/schemes',
      color: '#8D6E63'
    },
    {
      icon: 'bi-images',
      title: t('home.quickLinks.gallery.title'),
      description: t('home.quickLinks.gallery.description'),
      link: '/gallery',
      color: '#FF6F00'
    }
  ];

  const highlights = [
    {
      icon: 'bi-house-heart',
      value: '100+',
      label: t('home.households')
    },
    {
      icon: 'bi-people-fill',
      value: '1000+',
      label: t('home.population')
    },
    {
      icon: 'bi-tree-fill',
      value: '300+',
      label: t('home.farmland')
    },
    {
      icon: 'bi-trophy-fill',
      value: '50+',
      label: t('home.achievers')
    }
  ];

  return (
    <div className="home-page">
      <HeroSection
        title={t('home.heroTitle')}
        subtitle={t('home.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920"
        height="600px"
      />

      {/* Introduction Section */}
      <section className="intro-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="section-badge mb-3">
                <i className="bi bi-heart-fill me-2"></i>
                {t('home.aboutBadge')}
              </div>
              <h2 className="section-title mb-4">
                {t('home.aboutTitle')}
              </h2>
              <p className="text-muted mb-3">
                {t('home.aboutText1')}
              </p>
              <p className="text-muted mb-4">
                {t('home.aboutText2')}
              </p>
              <Button variant="primary" as={Link} to="/about-village" className="custom-btn">
                <i className="bi bi-arrow-right-circle me-2"></i>
                {t('home.learnMore')}
              </Button>
            </Col>
            <Col lg={6}>
              <div className="intro-image">
                <img 
                  src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600" 
                  alt="Village landscape"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3 d-inline-block">
              <i className="bi bi-star-fill me-2"></i>
              {t('home.highlightsBadge')}
            </div>
            <h2 className="section-title mb-3">{t('home.highlightsTitle')}</h2>
            <p className="text-muted">{t('home.highlightsSubtitle')}</p>
          </div>

          <Row className="g-4">
            {highlights.map((item, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="highlight-card text-center h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="highlight-icon mb-3">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h3 className="highlight-value mb-2">{item.value}</h3>
                    <p className="highlight-label mb-0">{item.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section py-5">
        <Container>
          <Row className="g-4">
            {quickLinks.map((link, index) => (
              <Col key={index} lg={3} md={6}>
                <Card 
                  as={Link} 
                  to={link.link} 
                  className="quick-link-card h-100 border-0 shadow-sm text-decoration-none"
                  style={{ '--card-color': link.color }}
                >
                  <Card.Body className="d-flex flex-column">
                    <div className="quick-link-icon mb-3">
                      <i className={`bi ${link.icon}`}></i>
                    </div>
                    <h5 className="card-title mb-2">{link.title}</h5>
                    <p className="card-text text-muted flex-grow-1">{link.description}</p>
                    <div className="mt-auto">
                      <span className="text-primary">
                        {t('common.readMore')} <i className="bi bi-arrow-right"></i>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">{t('home.ctaTitle')}</h2>
              <p className="mb-0 fs-5">
                {t('home.ctaText')}
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Button 
                variant="light" 
                size="lg" 
                as={Link} 
                to="/contact"
                className="custom-btn"
              >
                <i className="bi bi-envelope me-2"></i>
                {t('home.ctaButton')}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
