import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import GovernmentSchemes from '../components/GovernmentSchemes/GovernmentSchemes';
import { fetchData, filterByCategory } from '../utils/api';

const Schemes = () => {
  const { t } = useLanguage();
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: t('schemes.allSchemes') },
    { value: 'housing', label: t('schemes.housing') },
    { value: 'agriculture', label: t('plans.agriculture') },
    { value: 'pension', label: t('schemes.pension') },
    { value: 'employment', label: t('plans.employment') },
    { value: 'education', label: t('plans.education') },
    { value: 'healthcare', label: t('plans.healthcare') },
    { value: 'energy', label: t('schemes.energy') },
    { value: 'savings', label: t('schemes.savings') }
  ];

  useEffect(() => {
    loadSchemes();
  }, []);

  useEffect(() => {
    filterSchemes();
  }, [selectedCategory, schemes]);

  const loadSchemes = async () => {
    setLoading(true);
    const data = await fetchData('schemes');
    setSchemes(data);
    setLoading(false);
  };

  const filterSchemes = () => {
    const filtered = filterByCategory(schemes, selectedCategory);
    setFilteredSchemes(filtered);
  };

  return (
    <div className="schemes-page">
      <HeroSection
        title={t('schemes.heroTitle')}
        subtitle={t('schemes.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920"
      />

      <section className="py-5">
        <Container>
          {/* Info Banner */}
          <div className="alert alert-info mb-4" role="alert">
            <i className="bi bi-info-circle-fill me-2"></i>
            <strong>{t('schemes.alertTitle')}</strong> {t('schemes.alertText')}
          </div>

          {/* Filter Section */}
          <Row className="mb-4">
            <Col lg={6} className="mb-3 mb-lg-0">
              <h5>{t('schemes.filterLabel')}</h5>
            </Col>
            <Col lg={6}>
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

          {/* Schemes Grid */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">{t('common.loading')}</span>
              </div>
            </div>
          ) : filteredSchemes.length > 0 ? (
            <>
              <div className="mb-4">
                <h4 className="text-muted">
                  {t('schemes.showing')} {filteredSchemes.length} {filteredSchemes.length !== 1 ? t('schemes.schemes') : t('schemes.scheme')}
                </h4>
              </div>
              <Row className="g-4">
                {filteredSchemes.map((scheme) => (
                  <Col key={scheme.id} lg={6}>
                    <GovernmentSchemes scheme={scheme} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-inbox display-1 text-muted"></i>
              <p className="text-muted mt-3">{t('schemes.noSchemes')}</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Schemes;
