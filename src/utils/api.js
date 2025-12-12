// Utility functions for API/data handling

/**
 * Simulate API call with local JSON data
 * @param {string} dataFile - Name of the JSON file to load
 * @returns {Promise} Promise resolving to the data
 */
export const fetchData = async (dataFile) => {
  try {
    const data = await import(`../data/${dataFile}.json`);
    return data.default;
  } catch (error) {
    console.error(`Error loading ${dataFile}:`, error);
    return [];
  }
};

/**
 * Search function for filtering data
 * @param {Array} data - Array to search in
 * @param {string} query - Search query
 * @param {Array} fields - Fields to search in
 * @returns {Array} Filtered results
 */
export const searchData = (data, query, fields) => {
  if (!query) return data;
  
  const lowercaseQuery = query.toLowerCase();
  return data.filter(item =>
    fields.some(field => {
      const value = item[field];
      if (Array.isArray(value)) {
        return value.some(v => 
          String(v).toLowerCase().includes(lowercaseQuery)
        );
      }
      return String(value).toLowerCase().includes(lowercaseQuery);
    })
  );
};

/**
 * Filter data by category
 * @param {Array} data - Array to filter
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered results
 */
export const filterByCategory = (data, category) => {
  if (!category || category === 'all') return data;
  return data.filter(item => item.category === category);
};

/**
 * Sort data by field
 * @param {Array} data - Array to sort
 * @param {string} field - Field to sort by
 * @param {string} order - 'asc' or 'desc'
 * @returns {Array} Sorted array
 */
export const sortData = (data, field, order = 'asc') => {
  const sorted = [...data].sort((a, b) => {
    if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
    if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
    return 0;
  });
  return sorted;
};

/**
 * Format currency in Indian Rupee format
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Get theme from localStorage
 * @returns {string} 'light' or 'dark'
 */
export const getTheme = () => {
  return localStorage.getItem('theme') || 'light';
};

/**
 * Set theme in localStorage and apply to document
 * @param {string} theme - 'light' or 'dark'
 */
export const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);
};

/**
 * Smooth scroll to section
 * @param {string} elementId - ID of element to scroll to
 */
export const scrollToSection = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid phone
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Get unique categories from data
 * @param {Array} data - Array of objects
 * @param {string} field - Field containing category
 * @returns {Array} Array of unique categories
 */
export const getUniqueCategories = (data, field = 'category') => {
  const categories = data.map(item => item[field]);
  return ['all', ...new Set(categories)];
};

/**
 * Debounce function for search inputs
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
