import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ShieldCheck, Clock, Heart, MessageCircle } from 'lucide-react';

import SEO from '../components/SEO';
import { translations } from '../data/translations';
import TrustBadges from '../components/TrustBadges';

export default function AboutPage() {
  const { lang } = useOutletContext();
  const t = translations[lang]?.about || translations.es.about;

  return (
    <div className="page-view-about">
      <SEO 
        title="Nosotros | Condori Expedition Transport - Grupo Condori RYD SAC"
        description="Empresa formal de transporte turístico en Cusco con más de 10 años de experiencia. RUC 20616421744, SOAT turístico y autorización MTC. Puntualidad y trato directo."
        canonical="/nosotros"
        keywords="empresa transporte turistico cusco, Grupo Condori RYD SAC, RUC 20616421744, agencia transporte formal cusco"
      />

      {/* Page Header */}

      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/cusco.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">EMPRESA FORMAL CUSQUEÑA</span>
          <h1>Sobre Condori Expedition Transport</h1>
          <p className="page-hero-sub">
            Más de 10 años brindando transporte turístico privado, seguro y puntual en Cusco, Ollantaytambo y el Valle Sagrado de los Incas.
          </p>
        </div>
      </section>

      {/* Main Story & Credentials */}
      <div className="container py-content">
        <div className="about-main-grid">
          <div className="about-narrative-col">
            <span className="section-tag">NUESTRA TRAYECTORIA</span>
            <h2>{t.title || 'Pasión por el Turismo y la Excelencia en Cada Ruta'}</h2>
            <h3 className="about-subhead">{t.subtitle || 'Una empresa familiar nacida en el corazón de Cusco'}</h3>

            <p className="about-text-lead">{t.text1}</p>
            <p className="about-text-body">{t.text2}</p>

            <div className="about-mission-card">
              <h4>Nuestra Misión</h4>
              <p>{t.mission || 'Brindar traslados y recorridos privados de alta calidad, garantizando puntualidad milimétrica, máxima seguridad y precios justos sin intermediarios.'}</p>
            </div>

            <div className="about-pillars-grid">
              <div className="pillar-item">
                <Clock size={22} className="pillar-icon" />
                <div>
                  <strong>Puntualidad Rigurosa</strong>
                  <p>Llegamos 15 minutos antes a tu hotel o puerta de aeropuerto para que no pierdas ningún tren ni vuelo.</p>
                </div>
              </div>

              <div className="pillar-item">
                <ShieldCheck size={22} className="pillar-icon" />
                <div>
                  <strong>Conductores Locales Expertos</strong>
                  <p>Choferes profesionales con récord impecable y amplio conocimiento histórico de las carreteras andinas.</p>
                </div>
              </div>

              <div className="pillar-item">
                <Heart size={22} className="pillar-icon" />
                <div>
                  <strong>Trato Cálido y Cercano</strong>
                  <p>Atención directa y personalizada desde el primer mensaje de WhatsApp hasta tu llegada a destino.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Card & Badges */}
          <aside className="about-legal-sidebar">
            <div className="legal-credentials-box">
              <h3>Datos Formales de la Empresa</h3>
              <p className="legal-desc">Empresa formal inscrita y regulada según la normativa turística peruana:</p>

              <div className="credential-row">
                <span className="cred-label">Razón Social:</span>
                <strong className="cred-val">Grupo Condori RYD SAC</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">RUC Oficial:</span>
                <strong className="cred-val highlight">20616421744</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">Estado SUNAT:</span>
                <strong className="cred-val text-success">Activo y Habido</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">Póliza de Seguros:</span>
                <strong className="cred-val">SOAT Turístico Vigente</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">Autorización:</span>
                <strong className="cred-val">MTC / Gerencia de Transportes Cusco</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">Sede Principal:</span>
                <strong className="cred-val">San Antonio - San Sebastián, Cusco</strong>
              </div>

              <div className="legal-cta-box">
                <p>¿Deseas coordinar un servicio corporativo o particular?</p>
                <a 
                  href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20su%20servicio%20formal." 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-legal-ws"
                >
                  <MessageCircle size={18} />
                  <span>Contactar con la Administración</span>
                </a>
              </div>
            </div>

            <div className="about-stats-box">
              <div className="stat-unit">
                <span className="unit-number">10+</span>
                <span className="unit-label">Años de experiencia en Cusco</span>
              </div>
              <div className="stat-unit">
                <span className="unit-number">100%</span>
                <span className="unit-label">Servicio Privado y Exclusivo</span>
              </div>
              <div className="stat-unit">
                <span className="unit-number">5.0 ★</span>
                <span className="unit-label">Calificación de satisfacción</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Insignias de confianza integradas */}
        <div className="about-trust-wrap">
          <TrustBadges lang={lang} />
        </div>
      </div>
    </div>
  );
}
