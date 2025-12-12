import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import PlanCards from '../components/PlanCards/PlanCards';
import { fetchData, filterByCategory } from '../utils/api';

const Plans = () => {
  const { t } = useLanguage();
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: t('plans.allPlans'), icon: 'bi-grid-fill' },
    { value: 'infrastructure', label: t('plans.infrastructure'), icon: 'bi-building' },
    { value: 'education', label: t('plans.education'), icon: 'bi-mortarboard' },
    { value: 'healthcare', label: t('plans.healthcare'), icon: 'bi-heart-pulse' },
    { value: 'employment', label: t('plans.employment'), icon: 'bi-briefcase' },
    { value: 'water', label: t('plans.water'), icon: 'bi-droplet' },
    { value: 'agriculture', label: t('plans.agriculture'), icon: 'bi-tree' },
    { value: 'social', label: t('plans.social'), icon: 'bi-people' }
  ];

  useEffect(() => {
    loadPlans();
  }, []);

  useEffect(() => {
    filterPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, plans]);

  const loadPlans = async () => {
    setLoading(true);
    const data = await fetchData('plans');
    setPlans(data);
    setLoading(false);
  };

  const filterPlans = () => {
    const filtered = filterByCategory(plans, selectedCategory);
    setFilteredPlans(filtered);
  };

  return (
    <div className="plans-page">
      <HeroSection
        title={t('plans.heroTitle')}
        subtitle={t('plans.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920"
      />

      <section className="py-5">
        <Container>
          {/* Filter Section */}
          <div className="filter-section mb-5">
            <h5 className="mb-3">{t('plans.filterLabel')}</h5>
            <div className="d-flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'success' : 'outline-success'}
                  onClick={() => setSelectedCategory(category.value)}
                  className="filter-btn"
                >
                  <i className={`bi ${category.icon} me-2`}></i>
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">{t('common.loading')}</span>
              </div>
            </div>
          ) : filteredPlans.length > 0 ? (
            <>
              <div className="mb-4">
                <h4 className="text-muted">
                  {t('plans.showing')} {filteredPlans.length} {filteredPlans.length !== 1 ? t('plans.plans') : t('plans.plan')}
                </h4>
              </div>
              <Row className="g-4">
                {filteredPlans.map((plan) => (
                  <Col key={plan.id} lg={4} md={6}>
                    <PlanCards plan={plan} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-inbox display-1 text-muted"></i>
              <p className="text-muted mt-3">{t('plans.noPlans')}</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Plans;
