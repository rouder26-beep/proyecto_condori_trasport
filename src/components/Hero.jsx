import React, { useEffect, useState } from 'react';
import { Star, Award, MessageCircle } from 'lucide-react';
import { translations } from '../data/translations';
import BookingCalculator from './BookingCalculator';

const heroImages = [
  '/images/montana-pallaypuncho.jpg',
  '/images/cusco.jpg',
  '/images/laguna-humantay.jpg',
  '/images/hero.jpg',
  '/images/7colores.jpg',
  '/images/queswachaca.jpg',
  '/images/suv.jpg',
  '/images/machupiccho.jpg',
];

export default function Hero({ lang }) {
  const t = translations[lang]?.hero || translations.es.hero;
  const [activeHeroImage, setActiveHeroImage] = useState(0);

  useEffect(() => {
    const imageInterval = window.setInterval(() => {
      setActiveHeroImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(imageInterval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay" />
      {heroImages.map((image, index) => (
        <img
          key={`${image}-${index}`}
          src={image}
          alt={`Paisaje de Cusco y Valle Sagrado - Condori Expedition Transporte ${index + 1}`}
          loading={index === 0 ? 'eager' : 'lazy'}
          className={`hero-bg-img ${index === activeHeroImage ? 'active' : ''}`}
        />
      ))}

      <div className="hero-content container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-text-col">
            <div className="hero-tag-badge">
              <Award size={16} /> {t.tag}
            </div>
            
            <h1 className="hero-title">{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>

            <div className="hero-stats-grid">
              <div className="stat-card">
                <div className="stat-value">{t.stat1}</div>
                <div className="stat-sub">{t.stat1Sub}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <Star size={18} fill="#f59e0b" color="#f59e0b" className="icon-inline" /> 5.0
                </div>
                <div className="stat-sub">{t.stat2Sub}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{t.stat3}</div>
                <div className="stat-sub">{t.stat3Sub}</div>
              </div>
            </div>

            <div className="hero-direct-ws-box">
              <a 
                href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20deseo%20consultar%20por%20un%20traslado%20o%20tour%20en%20Cusco." 
                target="_blank" 
                rel="noreferrer"
                className="btn-hero-ws"
              >
                <MessageCircle size={20} />
                <span>Respuesta rápida por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Instant Calculator Form */}
          <div className="hero-form-col">
            <BookingCalculator lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}

