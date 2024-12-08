import { i18n } from 'i18next';

export const getCurrentLanguage = (i18n: i18n) => {
  return i18n.language || window.localStorage.getItem('i18nextLng') || 'en';
};

export const getDirection = (language: string) => {
  return ['ar', 'he', 'fa'].includes(language) ? 'rtl' : 'ltr';
};