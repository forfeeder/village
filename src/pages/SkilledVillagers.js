import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import VillagerBiodata from '../components/VillagerBiodata/VillagerBiodata';
import { fetchData, searchData, filterByCategory } from '../utils/api';

const SkilledVillagers = () => {
  const { t } = useLanguage();
  const [villagers, setVillagers] = useState([]);
  const [filteredVillagers, setFilteredVillagers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: t('villagers.allCategories') },
    { value: 'government', label: t('villagers.government') },
    { value: 'private', label: t('villagers.private') },
    { value: 'business', label: t('villagers.business') },
    { value: 'sports', label: t('villagers.sports') },
    { value: 'healthcare', label: t('villagers.healthcare') },
    { value: 'arts', label: t('villagers.arts') },
    { value: 'education', label: t('plans.education') },
    { value: 'defense', label: t('villagers.defense') },
    { value: 'social', label: t('villagers.socialWork') }
  ];

  useEffect(() => {
    loadVillagers();
  }, []);

  useEffect(() => {
    filterVillagers();
  }, [searchQuery, selectedCategory, villagers]);

  const loadVillagers = async () => {
    setLoading(true);
    const data = await fetchData('villagers');
    setVillagers(data);
    setLoading(false);
  };

  const filterVillagers = () => {
    let filtered = filterByCategory(villagers, selectedCategory);
    filtered = searchData(filtered, searchQuery, ['name', 'profession', 'qualification', 'achievements']);
    setFilteredVillagers(filtered);
  };

  return (
    <div className="skilled-villagers-page">
      <HeroSection
        title={t('villagers.heroTitle')}
        subtitle={t('villagers.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920"
      />

      <section className="py-5">
        <Container>
          {/* Search and Filter */}
          <Row className="mb-4">
            <Col lg={6} className="mb-3 mb-lg-0">
              <InputGroup size="lg">
                <InputGroup.Text>
                  <i className="bi bi-search"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder={t('villagers.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
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

          {/* Villagers Grid */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">{t('common.loading')}</span>
              </div>
            </div>
          ) : filteredVillagers.length > 0 ? (
            <>
              <div className="mb-4">
                <h4 className="text-muted">
                  {t('villagers.found')} {filteredVillagers.length} {filteredVillagers.length !== 1 ? t('villagers.villagers') : t('villagers.villager')}
                </h4>
              </div>
              <Row className="g-4">
                {filteredVillagers.map((villager) => (
                  <Col key={villager.id} lg={4} md={6}>
                    <VillagerBiodata villager={villager} />
                  </Col>
                ))}
              </Row>
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-people display-1 text-muted"></i>
              <p className="text-muted mt-3">{t('villagers.noVillagers')}</p>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

export default SkilledVillagers;
