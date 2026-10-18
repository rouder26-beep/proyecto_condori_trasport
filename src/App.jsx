import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import TransfersPage from './pages/TransfersPage';
import ToursPage from './pages/ToursPage';
import TourDetailPage from './pages/TourDetailPage';
import FleetPage from './pages/FleetPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';

export default function App() {
  const [lang, setLang] = useState('es');

  useEffect(() => {
    const handleScrollAnimations = () => {
      const sectionHeaders = document.querySelectorAll('.section-header');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      sectionHeaders.forEach((header) => observer.observe(header));
      return () => observer.disconnect();
    };

    const cleanup = handleScrollAnimations();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout lang={lang} setLang={setLang} />}>
        <Route index element={<HomePage />} />
        <Route path="traslados" element={<TransfersPage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="tours/:slug" element={<TourDetailPage />} />
        <Route path="flota" element={<FleetPage />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="preguntas-frecuentes" element={<FaqPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

