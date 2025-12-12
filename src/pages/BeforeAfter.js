import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import BeforeAfterComponent from '../components/BeforeAfter/BeforeAfter';
import { fetchData, filterByCategory } from '../utils/api';

const BeforeAfter = () => {
  const { t } = useLanguage();
  const [transformations, setTransformations] = useState([]);
  const [filteredTransformations, setFilteredTransformations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: t('beforeAfter.allTransformations') },
    { value: 'infrastructure', label: t('plans.infrastructure') },
    { value: 'environment', label: t('beforeAfter.environment') },
    { value: 'education', label: t('plans.education') },
    { value: 'healthcare', label: t('plans.healthcare') },
    { value: 'cleanliness', label: t('beforeAfter.cleanliness') },
    { value: 'recreation', label: t('beforeAfter.recreation') }
  ];

  useEffect(() => {
    loadTransformations();
  }, []);

  useEffect(() => {
    filterTransformations();
  }, [selectedCategory, transformations]);

  const loadTransformations = async () => {
    setLoading(true);
    const data = await fetchData('beforeAfter');
    setTransformations(data);
    setLoading(false);
  };

  const filterTransformations = () => {
    const filtered = filterByCategory(transformations, selectedCategory);
    setFilteredTransformations(filtered);
  };

  return (
    <div className="before-after-page">
      <HeroSection
        title={t('beforeAfter.heroTitle')}
        subtitle={t('beforeAfter.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920"
      />

      <section className="py-5">
        <Container>
          {/* Info Section */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <p className="lead text-muted">
                {t('beforeAfter.infoText')}
              </p>
            </Col>
          </Row>

          {/* Filter Section */}
          <Row className="mb-4">
            <Col lg={6} className="mx-auto">
              <Form.Select 
                size="lg"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          {/* Transformations Grid */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">{t('common.loading')}</span>
              </div>
            </div>
          ) : filteredTransformations.length > 0 ? (
            <>
              <div className="mb-4 text-center">
                <h4 className="text-muted">
                  {filteredTransformations.length} {filteredTransformations.length !== 1 ? t('beforeAfter.transformations') : t('beforeAfter.transformation')}
                </h4>
              </div>
              <Row className="g-4">
                {filteredTransformations.map((transformation) => (
                  <Col key={transformation.id} lg={6}>
                    <BeforeAfterComponent transformation={transformation} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-arrow-left-right display-1 text-muted"></i>
              <p className="text-muted mt-3">{t('beforeAfter.noTransformations')}</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default BeforeAfter;
