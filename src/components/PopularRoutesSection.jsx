import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { routesData } from '../data/routesData';
import { translations } from '../data/translations';

export default function PopularRoutesSection({ lang = 'es' }) {
  const t = translations[lang]?.popularRoutes || translations.es.popularRoutes;
  const popularRoutes = routesData.filter(r => r.popular).slice(0, 4);

  const handleBook = (route) => {
    const minPrice = route.prices.sedanSuv;
    const orig = route.originI18n?.[lang] || route.origin;
    const dest = route.destinationI18n?.[lang] || route.destination;
    const dur = route.durationI18n?.[lang] || route.duration;
    const msg = `${encodeURIComponent(t.waIntro)}%0A` +
      `📌 ${encodeURIComponent(orig)} → ${encodeURIComponent(dest)}%0A` +
      `⏱️ ${encodeURIComponent(t.waDuration)}: ${encodeURIComponent(dur)}%0A` +
      `💵 ${encodeURIComponent(t.waRateFrom)}: $${minPrice} USD%0A` +
      `${encodeURIComponent(t.waAsk)}`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <section className="popular-routes-section" id="rutas-populares">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <Sparkles size={14} className="icon-inline" /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="popular-routes-grid">
          {popularRoutes.map((route) => {
            const minPrice = route.prices.sedanSuv;
            const orig = route.originI18n?.[lang] || route.origin;
            const dest = route.destinationI18n?.[lang] || route.destination;
            const dur = route.durationI18n?.[lang] || route.duration;
            return (
              <div key={route.id} className="popular-route-card">
                <div className="popular-route-badge">{t.badge}</div>
                <div className="popular-route-locations">
                  <div className="loc-item">
                    <MapPin size={16} className="loc-icon origin" />
                    <div>
                      <span className="loc-label">{t.originLabel}</span>
                      <strong className="loc-name">{orig}</strong>
                    </div>
                  </div>
                  <div className="loc-divider">
                    <span className="arrow-down">↓</span>
                  </div>
                  <div className="loc-item">
                    <MapPin size={16} className="loc-icon dest" />
                    <div>
                      <span className="loc-label">{t.destLabel}</span>
                      <strong className="loc-name">{dest}</strong>
                    </div>
                  </div>
                </div>

                <div className="popular-route-meta">
                  <span className="route-duration">
                    <Clock size={14} /> {dur}
                  </span>
                  <div className="route-price-from">
                    <span className="from-label">{t.fromLabel}</span>
                    <span className="from-amount">${minPrice} <small>USD</small></span>
                  </div>
                </div>

                <p className="route-card-note">{t.cardNote}</p>

                <div className="popular-route-actions">
                  <button 
                    type="button" 
                    className="btn-route-ws"
                    onClick={() => handleBook(route)}
                  >
                    <MessageCircle size={16} /> {t.btnQuote}
                  </button>
                  <Link to="/traslados" className="btn-route-details">
                    {t.btnVehicles}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-cta-center">
          <Link to="/traslados" className="btn-cta-primary">
            <span>{t.btnAllRates}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
