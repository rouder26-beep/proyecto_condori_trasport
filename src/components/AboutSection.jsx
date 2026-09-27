import React from 'react';
import { Shield, Clock, Heart, Award, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function AboutSection({ lang }) {
  const t = translations[lang].about;

  return (
    <section id="nosotros" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img src="/images/hero.jpg" alt="Condori Expedition Transport Team" className="about-main-img" />
              <div className="about-experience-badge">
                <span className="years">10+</span>
                <span className="text">Años de Trayectoria en Cusco</span>
              </div>
            </div>
          </div>

          <div className="about-text-column">
            <span className="section-tag">CONOCE NUESTRA HISTORIA</span>
            <h2>{t.title}</h2>
            <h4 className="about-sub">{t.subtitle}</h4>

            <p className="about-para">{t.text1}</p>
            <p className="about-para">{t.text2}</p>

            <div className="about-values-grid">
              <div className="value-card">
                <Clock size={24} className="val-icon" />
                <div>
                  <h4>Puntualidad Rigurosa</h4>
                  <p>Llegamos 15 minutos antes a tu hotel o aeropuerto.</p>
                </div>
              </div>

              <div className="value-card">
                <Shield size={24} className="val-icon" />
                <div>
                  <h4>Seguridad Garantizada</h4>
                  <p>Conductores profesionales y unidades con SOAT turístico.</p>
                </div>
              </div>

              <div className="value-card">
                <Heart size={24} className="val-icon" />
                <div>
                  <h4>Trato Cálido y Cercano</h4>
                  <p>Atención personalizada en cada kilómetro del recorrido.</p>
                </div>
              </div>
            </div>

            <div className="about-mission-box">
              <p><strong>{t.mission}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
