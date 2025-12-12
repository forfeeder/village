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
    ,
    {
      icon: 'bi-arrow-left-right',
      title: t('home.quickLinks.beforeAfter.title'),
      description: t('home.quickLinks.beforeAfter.description'),
      link: '/before-after',
      color: '#17a2b8'
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
              <p className="lead text-muted mb-4">
                {t('home.aboutText1')}
              </p>
              <p className="text-muted mb-4">
                {t('home.aboutText2')}
              </p>
              <Link to="/about-village">
                <Button variant="success" size="lg">
                  {t('home.learnMore')} <i className="bi bi-arrow-right ms-2"></i>
                </Button>
              </Link>
            </Col>
            {/* <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800" 
                alt="Village View"
                className="img-fluid rounded shadow"
              />
            </Col> */}
          </Row>
        </Container>
      </section>

      {/* Village Highlights */}
      <section className="highlights-section py-5 bg-light">
        <Container>
          <Row className="g-4">
            {highlights.map((highlight, index) => (
              <Col key={index} lg={3} md={6}>
                <div className="highlight-card text-center">
                  <div className="highlight-icon">
                    <i className={`bi ${highlight.icon}`}></i>
                  </div>
                  <h3 className="highlight-value">{highlight.value}</h3>
                  <p className="highlight-label">{highlight.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quick Navigation */}
      <section className="quick-links-section py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-compass-fill me-2"></i>
              {t('home.highlightsBadge')}
            </div>
            <h2 className="section-title">{t('home.highlightsTitle')}</h2>
            <p className="text-muted">{t('home.highlightsSubtitle')}</p>
          </div>

          <Row className="g-4">
            {quickLinks.map((link, index) => (
              <Col key={index} lg={3} md={6}>
                <Link to={link.link} className="text-decoration-none">
                  <Card className="quick-link-card h-100 shadow-sm">
                    <Card.Body className="text-center">
                      <div 
                        className="quick-link-icon mb-3"
                        style={{ color: link.color }}
                      >
                        <i className={`bi ${link.icon}`}></i>
                      </div>
                      <Card.Title className="quick-link-title">{link.title}</Card.Title>
                      <Card.Text className="text-muted">
                        {link.description}
                      </Card.Text>
                      <div className="quick-link-arrow">
                        <i className="bi bi-arrow-right-circle-fill"></i>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      {/* <section className="cta-section py-5 bg-success text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="mb-3">{t('home.ctaTitle')}</h2>
              <p className="lead mb-0">
                {t('home.ctaText')}
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Link to="/contact">
                <Button variant="light" size="lg" className="fw-semibold">
                  <i className="bi bi-envelope-fill me-2"></i>
                  {t('home.ctaButton')}
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section> */}
    </div>
  );
};

export default Home;
