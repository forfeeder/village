import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import './AboutVillage.css';

const AboutVillage = () => {
  const { t } = useLanguage();
  
  const demographics = [
    { label: t('aboutVillage.totalPopulation'), value: '1000+', icon: 'bi-people-fill' },
    { label: t('aboutVillage.totalHouseholds'), value: '100+', icon: 'bi-house-fill' },
    { label: t('aboutVillage.farmlandArea'), value: '300 Acres', icon: 'bi-tree-fill' },
    { label: t('aboutVillage.literacyRate'), value: '90%', icon: 'bi-book-fill' }
  ];

  const facilities = [
    { title: t('aboutVillage.facilities.primarySchool'), icon: 'bi-building', description: t('aboutVillage.facilities.primarySchoolDesc') },
    // { title: t('aboutVillage.facilities.healthCenter'), icon: 'bi-hospital', description: t('aboutVillage.facilities.healthCenterDesc') },
    // { title: t('aboutVillage.facilities.communityHall'), icon: 'bi-people', description: t('aboutVillage.facilities.communityHallDesc') },
    // { title: t('aboutVillage.facilities.postOffice'), icon: 'bi-envelope', description: t('aboutVillage.facilities.postOfficeDesc') },
    // { title: t('aboutVillage.facilities.policeChowki'), icon: 'bi-shield-check', description: t('aboutVillage.facilities.policeChowkiDesc') },
    // { title: t('aboutVillage.facilities.bankBranch'), icon: 'bi-bank', description: t('aboutVillage.facilities.bankBranchDesc') }
  ];

  const festivals = [
    { name: t('aboutVillage.festivals.diwali'), description: t('aboutVillage.festivals.diwaliDesc') },
    { name: t('aboutVillage.festivals.holi'), description: t('aboutVillage.festivals.holiDesc') },
    { name: t('aboutVillage.festivals.harvest'), description: t('aboutVillage.festivals.harvestDesc') },
    { name: t('aboutVillage.festivals.independence'), description: t('aboutVillage.festivals.independenceDesc') },
    { name: t('aboutVillage.festivals.republic'), description: t('aboutVillage.festivals.republicDesc') },
    // { name: t('aboutVillage.festivals.foundation'), description: t('aboutVillage.festivals.foundationDesc') }
  ];

  return (
    <div className="about-village-page">
      <HeroSection
        title={t('aboutVillage.heroTitle')}
        subtitle={t('aboutVillage.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920"
      />

      {/* History Section */}
      {/* <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="section-badge mb-3">
                <i className="bi bi-clock-history me-2"></i>
                {t('aboutVillage.historyBadge')}
              </div>
              <h2 className="section-title mb-4">{t('aboutVillage.historyTitle')}</h2>
              <p className="text-muted mb-3">
                {t('aboutVillage.historyText1')}
              </p>
              <p className="text-muted mb-3">
                {t('aboutVillage.historyText2')}
              </p>
              <p className="text-muted">
                {t('aboutVillage.historyText3')} 
                preserving our values while adopting innovations that improve quality of life.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800" 
                alt="Village Temple"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Demographics Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-graph-up me-2"></i>
              {t('aboutVillage.demographicsBadge')}
            </div>
            <h2 className="section-title">{t('aboutVillage.demographicsTitle')}</h2>
          </div>

          <Row className="g-4">
            {demographics.map((item, index) => (
              <Col key={index} lg={3} md={6}>
                <Card className="demo-card text-center h-100 shadow-sm">
                  <Card.Body>
                    <div className="demo-icon mb-3">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <h3 className="demo-value">{item.value}</h3>
                    <p className="demo-label">{item.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Facilities Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-building me-2"></i>
              {t('aboutVillage.facilitiesBadge')}
            </div>
            <h2 className="section-title">{t('aboutVillage.facilitiesTitle')}</h2>
            <p className="text-muted">{t('aboutVillage.facilitiesSubtitle')}</p>
          </div>

          <Row className="g-4">{facilities.map((facility, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="facility-card h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="facility-icon mb-3">
                      <i className={`bi ${facility.icon}`}></i>
                    </div>
                    <Card.Title className="facility-title">{facility.title}</Card.Title>
                    <Card.Text className="text-muted">{facility.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Economy & Agriculture Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800" 
                alt="Agriculture"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col lg={6}>
              <div className="section-badge mb-3">
                <i className="bi bi-currency-rupee me-2"></i>
                {t('aboutVillage.economyBadge')}
              </div>
              <h2 className="section-title mb-4">{t('aboutVillage.economyTitle')}</h2>
              <p className="text-muted mb-3">
                {t('aboutVillage.economyText')}
              </p>
              <div className="mb-3">
                <h5 className="text-success mb-2">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  {t('aboutVillage.majorCrops')}
                </h5>
                <p className="text-muted ps-4">{t('aboutVillage.majorCropsText')}</p>
              </div>
              <div className="mb-3">
                <h5 className="text-success mb-2">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  {t('aboutVillage.otherOccupations')}
                </h5>
                <p className="text-muted ps-4">{t('aboutVillage.otherOccupationsText')}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Culture & Festivals Section */}
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-calendar-event me-2"></i>
              {t('aboutVillage.cultureBadge')}
            </div>
            <h2 className="section-title">{t('aboutVillage.cultureTitle')}</h2>
            <p className="text-muted">{t('aboutVillage.cultureSubtitle')}</p>
          </div>

          <Row className="g-4">
            {festivals.map((festival, index) => (
              <Col key={index} lg={4} md={6}>
                <Card className="festival-card h-100 shadow-sm">
                  <Card.Body>
                    <div className="festival-icon mb-3">
                      <i className="bi bi-stars"></i>
                    </div>
                    <Card.Title className="festival-name">{festival.name}</Card.Title>
                    <Card.Text className="text-muted">{festival.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutVillage;
