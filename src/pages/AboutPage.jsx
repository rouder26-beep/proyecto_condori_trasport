import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ShieldCheck, Clock, Heart, MessageCircle } from 'lucide-react';

import SEO from '../components/SEO';
import { translations } from '../data/translations';
import TrustBadges from '../components/TrustBadges';

export default function AboutPage() {
  const { lang } = useOutletContext();
  const t = translations[lang]?.about || translations.es.about;
  const waHref = `https://wa.me/51910958898?text=${encodeURIComponent(t.waAdminMsg)}`;

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
          <span className="page-hero-badge">{t.heroBadge}</span>
          <h1>{t.heroTitle}</h1>
          <p className="page-hero-sub">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* Main Story & Credentials */}
      <div className="container py-content">
        <div className="about-main-grid">
          <div className="about-narrative-col">
            <span className="section-tag">{t.sectionTag}</span>
            <h2>{t.title}</h2>
            <h3 className="about-subhead">{t.subtitle}</h3>

            <p className="about-text-lead">{t.text1}</p>
            <p className="about-text-body">{t.text2}</p>

            <div className="about-mission-card">
              <h4>{t.missionTitle}</h4>
              <p>{t.mission}</p>
            </div>

            <div className="about-pillars-grid">
              <div className="pillar-item">
                <Clock size={22} className="pillar-icon" />
                <div>
                  <strong>{t.pillar1Title}</strong>
                  <p>{t.pillar1Desc}</p>
                </div>
              </div>

              <div className="pillar-item">
                <ShieldCheck size={22} className="pillar-icon" />
                <div>
                  <strong>{t.pillar2Title}</strong>
                  <p>{t.pillar2Desc}</p>
                </div>
              </div>

              <div className="pillar-item">
                <Heart size={22} className="pillar-icon" />
                <div>
                  <strong>{t.pillar3Title}</strong>
                  <p>{t.pillar3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Card & Badges */}
          <aside className="about-legal-sidebar">
            <div className="legal-credentials-box">
              <h3>{t.legalTitle}</h3>
              <p className="legal-desc">{t.legalDesc}</p>

              <div className="credential-row">
                <span className="cred-label">{t.credNameLabel}</span>
                <strong className="cred-val">Grupo Condori RYD SAC</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">{t.credRucLabel}</span>
                <strong className="cred-val highlight">20616421744</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">{t.credSunatLabel}</span>
                <strong className="cred-val text-success">{t.credSunatVal}</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">{t.credSoatLabel}</span>
                <strong className="cred-val">{t.credSoatVal}</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">{t.credMtcLabel}</span>
                <strong className="cred-val">{t.credMtcVal}</strong>
              </div>

              <div className="credential-row">
                <span className="cred-label">{t.credAddressLabel}</span>
                <strong className="cred-val">{t.credAddressVal}</strong>
              </div>

              <div className="legal-cta-box">
                <p>{t.legalCtaQuestion}</p>
                <a 
                  href={waHref} 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-legal-ws"
                >
                  <MessageCircle size={18} />
                  <span>{t.btnContactAdmin}</span>
                </a>
              </div>
            </div>

            <div className="about-stats-box">
              <div className="stat-unit">
                <span className="unit-number">10+</span>
                <span className="unit-label">{t.stat1Label}</span>
              </div>
              <div className="stat-unit">
                <span className="unit-number">100%</span>
                <span className="unit-label">{t.stat2Label}</span>
              </div>
              <div className="stat-unit">
                <span className="unit-number">5.0 ★</span>
                <span className="unit-label">{t.stat3Label}</span>
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
