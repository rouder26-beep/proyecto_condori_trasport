import React from 'react';
import { ShieldCheck, Award, HeartPulse, FileCheck, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustBadges({ lang }) {
  const t = translations[lang].trust;

  return (
    <section className="trust-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">SEGURIDAD Y FORMALIDAD</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon-wrap">
              <Award size={32} />
            </div>
            <h4>MINCETUR</h4>
            <p>{t.mincetur}</p>
            <span className="trust-status"><CheckCircle2 size={14} /> Verificado</span>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrap">
              <ShieldCheck size={32} />
            </div>
            <h4>DIRCETUR CUSCO</h4>
            <p>{t.dircetur}</p>
            <span className="trust-status"><CheckCircle2 size={14} /> Licencia Oficial</span>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrap">
              <FileCheck size={32} />
            </div>
            <h4>SUNAT RUC</h4>
            <p>{t.sunat}</p>
            <span className="trust-status"><CheckCircle2 size={14} /> RUC: 20601234567</span>
          </div>

          <div className="trust-card">
            <div className="trust-icon-wrap">
              <HeartPulse size={32} />
            </div>
            <h4>OXÍGENO A BORDO</h4>
            <p>{t.oxygen}</p>
            <span className="trust-status"><CheckCircle2 size={14} /> Incluido sin costo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
