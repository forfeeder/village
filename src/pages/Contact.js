import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import ContactForm from '../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  
  const contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: t('contact.officeAddress'),
      details: ['Dhanaura-Pheena road', 'Village Name - Jaleelpur Mungra', 'State - Uttar Pradesh, India', 'PIN - 244231'],
      color: '#2E7D32'
    },
    {
      icon: 'bi-telephone-fill',
      title: t('contact.phoneNumbers'),
      details: ['Number : +91 8193929161', 'Panchayat Office: +91 **********', 'Emergency: 108'],
      color: '#1565C0'
    },
    {
      icon: 'bi-envelope-fill',
      title: t('contact.emailAddresses'),
      details: ['General: amansingh@forfeeder.in'],
      color: '#8D6E63'
    },
    {
      icon: 'bi-clock-fill',
      title: t('contact.officeHours'),
      details: ['Saturday: 9:00 AM - 5:00 PM', 'Sunday: 9:00 AM - 5:00 PM'],
      color: '#FF6F00'
    }
  ];

  const socialMedia = [
    { icon: 'bi-facebook', name: 'Facebook', link: 'https://facebook.com', color: '#1877F2' },
    { icon: 'bi-twitter', name: 'Twitter', link: 'https://twitter.com', color: '#1DA1F2' },
    { icon: 'bi-instagram', name: 'Instagram', link: 'https://instagram.com', color: '#E4405F' },
    { icon: 'bi-youtube', name: 'YouTube', link: 'https://youtube.com', color: '#FF0000' },
    { icon: 'bi-whatsapp', name: 'WhatsApp', link: 'https://wa.me/919876543210', color: '#25D366' },
    { icon: 'bi-telegram', name: 'Telegram', link: 'https://t.me', color: '#0088CC' }
  ];

  return (
    <div className="contact-page">
      <HeroSection
        title={t('contact.heroTitle')}
        subtitle={t('contact.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
      />

      {/* Contact Info Cards */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-info-circle-fill me-2"></i>
              {t('contact.infoBadge')}
            </div>
            <h2 className="section-title">{t('contact.infoTitle')}</h2>
          </div>

          <Row className="g-4">
            {contactInfo.map((info, index) => (
              <Col key={index} lg={6}>
                <Card className="contact-info-card h-100 shadow-sm">
                  <Card.Body>
                    <div className="contact-icon mb-3" style={{ color: info.color }}>
                      <i className={`bi ${info.icon}`}></i>
                    </div>
                    <Card.Title className="contact-title">{info.title}</Card.Title>
                    <ul className="contact-details-list">
                      {info.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Form Section
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="text-center mb-5">
                <div className="section-badge mb-3">
                  <i className="bi bi-envelope-fill me-2"></i>
                  {t('contact.formBadge')}
                </div>
                <h2 className="section-title">{t('contact.formTitle')}</h2>
                <p className="text-muted">{t('contact.formSubtitle')}</p>
              </div>
              
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* Map Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-4">
            <div className="section-badge mb-3">
              <i className="bi bi-map-fill me-2"></i>
              {t('contact.mapBadge')}
            </div>
            <h2 className="section-title">{t('contact.mapTitle')}</h2>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps?q=29.010120,78.302402&z=15&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Village Location Map"
            ></iframe>
          </div>
        </Container>
      </section>

      {/* Social Media Section
      <section className="py-5">
        <Container>
          <div className="text-center mb-5">
            <div className="section-badge mb-3">
              <i className="bi bi-share-fill me-2"></i>
              {t('contact.socialBadge')}
            </div>
            <h2 className="section-title">{t('contact.socialTitle')}</h2>
            <p className="text-muted">{t('contact.socialSubtitle')}</p>
          </div>

          <Row className="justify-content-center">
            {socialMedia.map((social, index) => (
              <Col key={index} lg={2} md={4} sm={6} className="mb-4">
                <a 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Card className="social-card shadow-sm h-100">
                    <Card.Body className="text-center">
                      <div 
                        className="social-icon mb-2" 
                        style={{ color: social.color }}
                      >
                        <i className={`bi ${social.icon}`}></i>
                      </div>
                      <p className="social-name mb-0">{social.name}</p>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </section> */}

      {/* Emergency Contacts */}
      <section className="py-5 bg-danger text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h3 className="mb-3">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                {t('contact.emergencyTitle')}
              </h3>
              <p className="lead mb-0">
                {t('contact.emergencyText')}
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <a 
                href="tel:108" 
                className="btn btn-light btn-lg"
              >
                <i className="bi bi-telephone-fill me-2"></i>
                {t('contact.callButton')}
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
