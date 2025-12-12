import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './VillagerBiodata.css';

const VillagerBiodata = ({ villager }) => {
  const { t, language } = useLanguage();
  const getCategoryName = (category) => {
    const categoryMap = {
      government: t('villagers.government'),
      private: t('villagers.private'),
      business: t('villagers.business'),
      sports: t('villagers.sports'),
      healthcare: t('villagers.healthcare'),
      arts: t('villagers.arts'),
      education: t('plans.education'),
      defense: t('villagers.defense'),
      social: t('villagers.socialWork')
    };
    return categoryMap[category] || category;
  };

  const getCategoryColor = (category) => {
    const colors = {
      government: 'success',
      private: 'primary',
      business: 'warning',
      sports: 'danger',
      healthcare: 'info',
      arts: 'secondary',
      education: 'dark',
      defense: 'success',
      social: 'pink'
    };
    return colors[category] || 'secondary';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      government: 'bi-building',
      private: 'bi-laptop',
      business: 'bi-shop',
      sports: 'bi-trophy',
      healthcare: 'bi-heart-pulse',
      arts: 'bi-palette',
      education: 'bi-mortarboard',
      defense: 'bi-shield-fill-check',
      social: 'bi-people-fill'
    };
    return icons[category] || 'bi-person';
  };

  return (
    <Card className="villager-card h-100 shadow-sm">
      <div className="villager-image-container">
        <img 
          src={villager.photo} 
          alt={villager.name}
          className="villager-image"
        />
        <Badge 
          bg={getCategoryColor(villager.category)} 
          className="category-badge"
        >
          <i className={`bi ${getCategoryIcon(villager.category)} me-1`}></i>
          {getCategoryName(villager.category)}
        </Badge>
      </div>
      
      <Card.Body>
        <Card.Title className="villager-name">{language === 'hi' ? villager.name_hi : villager.name}</Card.Title>
        <div className="villager-profession mb-3">
          <i className="bi bi-briefcase-fill text-success me-2"></i>
          <strong>{language === 'hi' ? villager.profession_hi : villager.profession}</strong>
        </div>

        <div className="villager-info">
          <div className="info-item">
            <i className="bi bi-mortarboard-fill text-primary me-2"></i>
            <small className="text-muted">{language === 'hi' ? villager.qualification_hi : villager.qualification}</small>
          </div>
          
          <div className="info-item">
            <i className="bi bi-clock-history text-warning me-2"></i>
            <small className="text-muted">{language === 'hi' ? villager.experience_hi : villager.experience} {t('villagers.experience')}</small>
          </div>
        </div>

        {/* {villager.achievements && villager.achievements.length > 0 && (
          <div className="achievements-section mt-3">
            <small className="fw-semibold text-success">
              <i className="bi bi-award-fill me-2"></i>
              {t('villagers.achievements')}
            </small>
            <ul className="achievements-list">
              {(language === 'hi' ? villager.achievements_hi : villager.achievements).map((achievement, index) => (
                <li key={index}>
                  <i className="bi bi-star-fill text-warning me-2"></i>
                  <small>{achievement}</small>
                </li>
              ))}
            </ul>
          </div>
        )} */}

        {/* {villager.contact && (
          <div className="contact-info mt-3 pt-3 border-top">
            <small className="text-muted">
              <i className="bi bi-envelope-fill me-2"></i>
              {villager.contact}
            </small>
          </div>
        )} */}
      </Card.Body>
    </Card>
  );
};

export default VillagerBiodata;
