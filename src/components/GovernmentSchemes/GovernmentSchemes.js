import React from 'react';
import { Card, Accordion, Badge } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './GovernmentSchemes.css';

const GovernmentSchemes = ({ scheme }) => {
  const { t, language } = useLanguage();
  const getCategoryIcon = (category) => {
    const icons = {
      housing: 'bi-house-fill',
      agriculture: 'bi-tree-fill',
      pension: 'bi-currency-rupee',
      employment: 'bi-briefcase-fill',
      education: 'bi-mortarboard-fill',
      healthcare: 'bi-heart-pulse-fill',
      energy: 'bi-lightning-charge-fill',
      savings: 'bi-piggy-bank-fill'
    };
    return icons[category] || 'bi-award-fill';
  };

  return (
    <Card className="scheme-card h-100 shadow-sm">
      <Card.Body>
        <div className="scheme-header d-flex align-items-start mb-3">
          <div className="scheme-icon me-3">
            <i className={`bi ${getCategoryIcon(scheme.category)} text-success`}></i>
          </div>
          <div className="flex-grow-1">
            <Card.Title className="scheme-title">
              {language === 'hi' && scheme.title_hi ? scheme.title_hi : scheme.title}
            </Card.Title>
            <Badge bg="success" className="category-badge">
              {scheme.icon}
            </Badge>
          </div>
        </div>

        <Card.Text className="scheme-description text-muted">
          {language === 'hi' && scheme.description_hi ? scheme.description_hi : scheme.description}
        </Card.Text>

        <div className="amount-section mb-3">
          <div className="amount-badge">
            <i className="bi bi-cash-stack me-2"></i>
            <strong>{language === 'hi' && scheme.amount_hi ? scheme.amount_hi : scheme.amount}</strong>
          </div>
        </div>

        <Accordion className="scheme-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="bi bi-check-circle me-2 text-success"></i>
              {t('schemes.eligibility')}
            </Accordion.Header>
            <Accordion.Body>
              <ul className="criteria-list">
                {(language === 'hi' && scheme.eligibility_hi ? scheme.eligibility_hi : scheme.eligibility).map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-arrow-right-circle-fill text-success me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <i className="bi bi-file-earmark-text me-2 text-primary"></i>
              {t('schemes.documents')}
            </Accordion.Header>
            <Accordion.Body>
              <ul className="criteria-list">
                {(language === 'hi' && scheme.documents_hi ? scheme.documents_hi : scheme.documents).map((doc, index) => (
                  <li key={index}>
                    <i className="bi bi-file-earmark-check-fill text-primary me-2"></i>
                    {doc}
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <i className="bi bi-clipboard-check me-2 text-info"></i>
              {t('schemes.howToApply')}
            </Accordion.Header>
            <Accordion.Body>
              <ol className="steps-list">
                {(language === 'hi' && scheme.howToApply_hi ? scheme.howToApply_hi : scheme.howToApply).map((step, index) => (
                  <li key={index} className="step-item">
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">{step}</div>
                  </li>
                ))}
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {scheme.contact && (
          <div className="contact-helpline mt-3 p-3 bg-light rounded">
            <small className="fw-semibold">
              <i className="bi bi-telephone-fill text-success me-2"></i>
              {t('schemes.helpline')}
            </small>
            <br />
            <small className="text-muted">{scheme.contact}</small>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default GovernmentSchemes;
