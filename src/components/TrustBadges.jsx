import React from 'react';
import { ShieldCheck, HeartPulse, FileCheck, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustBadges({ lang }) {
  const t = translations[lang]?.trust || translations.es.trust;

  return (
    <section className="trust-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">{t.tag}</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <h4>{t.card1Title}</h4>
            <p>{t.soat}</p>
            <span className="trust-status"><CheckCircle2 size={14} /> {t.card1Status}</span>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrap">
              <FileCheck size={32} />
            </div>
            <h4>{t.card2Title}</h4>
            <p>Grupo Condori RYD SAC</p>
            <span className="trust-status"><CheckCircle2 size={14} /> RUC: 20616421744</span>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrap">
              <HeartPulse size={32} />
            </div>
            <h4>{t.card3Title}</h4>
            <p>{t.oxygen}</p>
            <span className="trust-status"><CheckCircle2 size={14} /> {t.card3Status}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
