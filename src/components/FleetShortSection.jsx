import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Luggage, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import { fleetData } from '../data/fleetData';
import { translations } from '../data/translations';

export default function FleetShortSection({ lang = 'es' }) {
  const t = translations[lang]?.fleetShort || translations.es.fleetShort;
  const shortFleet = fleetData.slice(0, 4);

  return (
    <section className="fleet-short-section" id="flota-corta">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <Car size={14} className="icon-inline" /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="fleet-short-grid">
          {shortFleet.map((item) => {
            const tagText = item.tagI18n?.[lang] || item.tag;
            const paxText = item.passengersI18n?.[lang] || item.passengers;
            const lugText = item.luggageI18n?.[lang] || item.luggage;
            return (
              <div key={item.id} className="fleet-short-card">
                <div className="fleet-img-wrap">
                  <img 
                    src={item.image} 
                    alt={`${item.name} - Condori Expedition Transport`} 
                    loading="lazy" 
                    className="fleet-card-img" 
                  />
                  <span className="fleet-short-tag">{tagText}</span>
                </div>

                <div className="fleet-short-body">
                  <h3 className="fleet-name">{item.name}</h3>

                  <div className="fleet-short-specs">
                    <div className="spec-badge">
                      <Users size={15} />
                      <span>{paxText}</span>
                    </div>
                    <div className="spec-badge">
                      <Luggage size={15} />
                      <span>{lugText}</span>
                    </div>
                  </div>

                  <div className="fleet-highlight-feature">
                    <ShieldCheck size={14} className="icon-inline" /> {t.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-cta-center">
          <Link to="/flota" className="btn-cta-secondary">
            <span>{t.btnAllFleet}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
