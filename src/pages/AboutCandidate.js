import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import './AboutCandidate.css';

const AboutCandidate = () => {
  const { t } = useLanguage();
  // Load lists from translations so content is bilingual
  const qualifications = t('aboutCandidate.qualifications') || [];
  const experience = t('aboutCandidate.experience') || [];
  const achievements = t('aboutCandidate.achievements') || [];
  const visionPoints = t('aboutCandidate.visionPoints') || [];

  return (
    <div className="about-candidate-page">
      <HeroSection
        // title={t('aboutCandidate.heroTitle')}
        subtitle={t('aboutCandidate.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920"
      />

      {/* Introduction Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="mb-4 mb-lg-0 text-center">
              <div className="candidate-photo-container">
                <img 
                  src="https://via.placeholder.com/400x500/2E7D32/FFFFFF?text=Candidate+Photo" 
                  alt="Candidate"
                  className="candidate-photo img-fluid rounded shadow"
                />
              </div>
            </Col>
            <Col lg={8}>
              <div className="section-badge mb-3">
                <i className="bi bi-person-badge me-2"></i>
                {t('aboutCandidate.introBadge')}
              </div>
              <h2 className="candidate-name mb-2">{t('aboutCandidate.candidateName')}</h2>
              <p className="candidate-tagline text-success mb-4">
                <i className="bi bi-quote"></i>
                {t('aboutCandidate.tagline')}
                <i className="bi bi-quote"></i>
              </p>
              <p className="text-muted mb-3">
                {t('aboutCandidate.introText1')}
              </p>
              <p className="text-muted mb-4">
                {t('aboutCandidate.introText2')}
              </p>
              <div className="contact-details">
                <p className="mb-2">
                  <i className="bi bi-telephone-fill text-success me-2"></i>
                  <strong>{t('aboutCandidate.contactLabel')}</strong> +91 8193929161
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-fill text-success me-2"></i>
                  <strong>{t('aboutCandidate.emailLabel')}</strong> amansingh@forfeeder.in
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Qualifications & Experience */}
      {/* <section className="py-5 bg-light">
        <Container>
          <Row className="g-4">
            <Col lg={6}>
              <Card className="info-card h-100 shadow-sm">
                <Card.Body>
                  <div className="card-header-custom mb-4">
                    <i className="bi bi-mortarboard-fill me-2"></i>
                    <h4>{t('aboutCandidate.qualificationsBadge')}</h4>
                  </div>
                  <ul className="custom-list">
                    {qualifications.map((qual, index) => (
                      <li key={index}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {qual}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className="info-card h-100 shadow-sm">
                <Card.Body>
                  <div className="card-header-custom mb-4">
                    <i className="bi bi-briefcase-fill me-2"></i>
                    <h4>{t('aboutCandidate.experienceBadge')}</h4>
                  </div>
                  <div className="experience-timeline">
                    {experience.map((exp, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-badge"></div>
                        <div className="timeline-content">
                          <span className="timeline-year">{exp.year}</span>
                          <h6 className="timeline-role">{exp.role}</h6>
                          <p className="timeline-org text-muted">{exp.org}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>


      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-trophy-fill me-2"></i>
              {t('aboutCandidate.achievementsBadge')}
            </div>
            <h2 className="section-title">{t('aboutCandidate.achievementsTitle')}</h2>
          </div>

          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="achievements-card shadow-sm">
                <Card.Body>
                  <ul className="achievements-list">
                    {achievements.map((achievement, index) => (
                      <li key={index}>
                        <i className="bi bi-award-fill text-warning me-3"></i>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Vision Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-lightbulb-fill me-2"></i>
              {t('aboutCandidate.visionBadge')}
            </div>
            <h2 className="section-title">{t('aboutCandidate.visionTitle')}</h2>
            <p className="text-muted">{t('aboutCandidate.visionSubtitle')}</p>
          </div>

          <Row className="g-4">
            {visionPoints.map((point, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="vision-card h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="vision-icon mb-3">
                      <i className={`bi ${point.icon}`}></i>
                    </div>
                    <Card.Title className="vision-title">{point.title}</Card.Title>
                    <Card.Text className="text-muted">{point.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Message Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="message-card shadow-sm">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <i className="bi bi-chat-quote-fill display-4 text-success"></i>
                    <h3 className="mt-3">{t('aboutCandidate.messageTitle')}</h3>
                  </div>
                  <p className="lead text-muted text-center mb-4">
                    {t('aboutCandidate.messageText1')}
                  </p>
                  <p className="text-muted text-center mb-4">
                    {t('aboutCandidate.messageText2')}
                  </p>
                  <div className="text-center">
                    <Button 
                      variant="success" 
                      size="lg" 
                      href="/contact"
                      className="me-3"
                    >
                      <i className="bi bi-envelope-fill me-2"></i>
                      {t('aboutCandidate.contactMe')}
                    </Button>
                    {/* <Button 
                      variant="outline-success" 
                      size="lg"
                      href="#"
                      download
                    >
                      <i className="bi bi-download me-2"></i>
                      {t('aboutCandidate.downloadManifesto')}
                    </Button> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutCandidate;
