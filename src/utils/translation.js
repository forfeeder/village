// Utility function to get translated field value
export const getTranslatedField = (item, fieldName, language) => {
  if (language === 'hi' && item[`${fieldName}_hi`]) {
    return item[`${fieldName}_hi`];
  }
  return item[fieldName];
};

// Utility function to get translated array field
export const getTranslatedArrayField = (item, fieldName, language) => {
  if (language === 'hi' && item[`${fieldName}_hi`] && Array.isArray(item[`${fieldName}_hi`])) {
    return item[`${fieldName}_hi`];
  }
  return item[fieldName] || [];
};
