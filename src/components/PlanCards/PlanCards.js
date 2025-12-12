import React from 'react';
import { Card, ProgressBar, Badge } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './PlanCards.css';

const PlanCards = ({ plan }) => {
  const { t, language } = useLanguage();
  const getStatusVariant = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'primary';
      case 'planning':
        return 'warning';
      case 'active':
        return 'info';
      default:
        return 'secondary';
    }
  };

  const getStatusText = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return t('plans.status.completed');
      case 'in progress':
        return t('plans.status.inProgress');
      case 'planning':
        return t('plans.status.planning');
      case 'active':
        return t('plans.status.active');
      default:
        return status;
    }
  };

  const getProgressVariant = (progress) => {
    if (progress >= 75) return 'success';
    if (progress >= 50) return 'info';
    if (progress >= 25) return 'warning';
    return 'danger';
  };

  return (
    <Card className="plan-card h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div className="plan-icon">{plan.icon}</div>
          <Badge bg={getStatusVariant(plan.status)} className="status-badge">
            {getStatusText(plan.status)}
          </Badge>
        </div>
        
        <Card.Title className="plan-title">
          {language === 'hi' ? plan.title_hi : plan.title}
        </Card.Title>
        <Card.Text className="plan-description text-muted">
          {language === 'hi' ? plan.description_hi : plan.description}
        </Card.Text>

        {/* <div className="plan-meta mb-3">
          <div className="meta-item">
            <i className="bi bi-calendar3 me-2 text-success"></i>
            <small className="text-muted">{language === 'hi' ? plan.timeline_hi : plan.timeline}</small>
          </div>
          <div className="meta-item">
            <i className="bi bi-cash-coin me-2 text-success"></i>
            <small className="text-muted">{language === 'hi' ? plan.budget_hi : plan.budget}</small>
          </div>
        </div>

        <div className="progress-section">
          <div className="d-flex justify-content-between mb-2">
            <small className="fw-semibold">{t('plans.progress')}</small>
            <small className="fw-semibold">{plan.progress}%</small>
          </div>
          <ProgressBar 
            now={plan.progress} 
            variant={getProgressVariant(plan.progress)}
            className="custom-progress"
          />
        </div> */}

        {plan.benefits && plan.benefits.length > 0 && (
          <div className="benefits-section mt-3">
            <small className="fw-semibold text-success">{t('plans.keyBenefits')}</small>
            <ul className="benefits-list">
              {(language === 'hi' ? plan.benefits_hi : plan.benefits).slice(0, 3).map((benefit, index) => (
                <li key={index}>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  <small>{benefit}</small>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default PlanCards;
