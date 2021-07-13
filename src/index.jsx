import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import App from './App';
import { resources } from './assets/locales';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'htmlTag', 'path', 'subdomain'],
    },
  });

const loadingMarkup = (
  <div>
    <h3>Loading..</h3>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={loadingMarkup}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
