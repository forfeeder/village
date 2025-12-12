import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import { isValidEmail, isValidPhone } from '../../utils/api';
import './ContactForm.css';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('contact.form.errors.phoneRequired');
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = t('contact.form.errors.phoneInvalid');
    }

    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.form.errors.messageMin');
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="contact-form-container">
      {showSuccess && (
        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
          <i className="bi bi-check-circle-fill me-2"></i>
          {t('contact.form.successMessage')}
        </Alert>
      )}

      <Form onSubmit={handleSubmit} className="contact-form">
        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-person-fill me-2 text-success"></i>
            {t('contact.form.name')} <span className="text-danger">{t('contact.form.required')}</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder={t('contact.form.namePlaceholder')}
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-envelope-fill me-2 text-success"></i>
            {t('contact.form.email')} <span className="text-danger">{t('contact.form.required')}</span>
          </Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder={t('contact.form.emailPlaceholder')}
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-telephone-fill me-2 text-success"></i>
            {t('contact.form.phone')} <span className="text-danger">{t('contact.form.required')}</span>
          </Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder={t('contact.form.phonePlaceholder')}
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            <i className="bi bi-chat-square-text-fill me-2 text-success"></i>
            {t('contact.form.subject')} <span className="text-danger">{t('contact.form.required')}</span>
          </Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder={t('contact.form.subjectPlaceholder')}
            value={formData.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>
            <i className="bi bi-file-text-fill me-2 text-success"></i>
            {t('contact.form.message')} <span className="text-danger">{t('contact.form.required')}</span>
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            placeholder={t('contact.form.messagePlaceholder')}
            value={formData.message}
            onChange={handleChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button 
          variant="success" 
          type="submit" 
          size="lg"
          className="w-100 submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              <i className="bi bi-send-fill me-2"></i>
              {t('contact.form.submit')}
            </>
          )}
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
