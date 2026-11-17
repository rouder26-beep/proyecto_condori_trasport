import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function QuickContactSection({ lang = 'es' }) {
  const t = translations[lang]?.quickContact || translations.es.quickContact;
  const waHref = `https://wa.me/51910958898?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <section className="quick-contact-section" id="contacto-rapido">
      <div className="container">
        <div className="quick-contact-card">
          <div className="quick-contact-info">
            <span className="badge-official-inline">
              <ShieldCheck size={16} /> GRUPO CONDORI RYD SAC • RUC 20616421744
            </span>
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>

            <div className="quick-contact-features">
              <div className="feat-item">
                <Clock size={18} className="feat-icon" />
                <div>
                  <strong>{t.feat1Title}</strong>
                  <span>{t.feat1Sub}</span>
                </div>
              </div>
              <div className="feat-item">
                <Phone size={18} className="feat-icon" />
                <div>
                  <strong>{t.feat2Title}</strong>
                  <span>+51 910 958 898</span>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-contact-actions">
            <a 
              href={waHref} 
              target="_blank" 
              rel="noreferrer"
              className="btn-quick-ws"
            >
              <MessageCircle size={22} />
              <div className="btn-ws-text">
                <span className="btn-title">{t.btnTitle}</span>
                <span className="btn-sub">{t.btnSub}</span>
              </div>
            </a>

            <div className="quick-contact-secondary-links">
              <Link to="/contacto" className="link-more-contact">
                <span>{t.linkMore}</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
