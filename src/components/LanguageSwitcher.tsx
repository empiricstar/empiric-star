import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en'
            ? 'bg-primary text-white'
            : 'text-gray-300 hover:text-primary-light'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('ms')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'ms'
            ? 'bg-primary text-white'
            : 'text-gray-300 hover:text-primary-light'
        }`}
      >
        BM
      </button>
      <button
        onClick={() => i18n.changeLanguage('zh')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'zh'
            ? 'bg-primary text-white'
            : 'text-gray-300 hover:text-primary-light'
        }`}
      >
        中文
      </button>
    </div>
  );
}