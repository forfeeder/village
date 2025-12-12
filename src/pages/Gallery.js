import React, { useState, useEffect } from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection/HeroSection';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import { fetchData, filterByCategory } from '../utils/api';

const Gallery = () => {
  const { t } = useLanguage();
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: 'all', label: t('gallery.allPhotos'), icon: 'bi-grid-3x3' },
    { value: 'nature', label: t('gallery.nature'), icon: 'bi-tree' },
    { value: 'infrastructure', label: t('plans.infrastructure'), icon: 'bi-building' },
    { value: 'events', label: t('gallery.events'), icon: 'bi-calendar-event' },
    { value: 'public-places', label: t('gallery.publicPlaces'), icon: 'bi-map' }
  ];

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    filterImages();
  }, [selectedCategory, images]);

  const loadImages = async () => {
    setLoading(true);
    const data = await fetchData('gallery');
    setImages(data);
    setLoading(false);
  };

  const filterImages = () => {
    const filtered = filterByCategory(images, selectedCategory);
    setFilteredImages(filtered);
  };

  return (
    <div className="gallery-page">
      <HeroSection
        title={t('gallery.heroTitle')}
        subtitle={t('gallery.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1920"
      />

      <section className="py-5">
        <Container>
          {/* Filter Section */}
          <div className="filter-section mb-5 text-center">
            <h5 className="mb-3">{t('gallery.browseLabel')}</h5>
            <ButtonGroup className="flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'success' : 'outline-success'}
                  onClick={() => setSelectedCategory(category.value)}
                  className="filter-btn mb-2"
                >
                  <i className={`bi ${category.icon} me-2`}></i>
                  {category.label}
                </Button>
              ))}
            </ButtonGroup>
          </div>

          {/* Images Gallery */}
          {/* {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">{t('common.loading')}</span>
              </div>
            </div>
          ) : filteredImages.length > 0 ? (
            <>
              <div className="mb-4 text-center">
                <h4 className="text-muted">
                  {filteredImages.length} {filteredImages.length !== 1 ? t('gallery.photos') : t('gallery.photo')}
                </h4>
              </div>
              <ImageGallery images={filteredImages} />
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-image display-1 text-muted"></i>
              <p className="text-muted mt-3">{t('gallery.noPhotos')}</p>
            </div>
          )} */}
        </Container>
      </section>
    </div>
  );
};

export default Gallery;
