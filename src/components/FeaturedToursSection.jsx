import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, MessageCircle, Compass } from 'lucide-react';
import { toursData } from '../data/toursData';
import { translations } from '../data/translations';

export default function FeaturedToursSection({ lang = 'es' }) {
  const t = translations[lang]?.featuredTours || translations.es.featuredTours;
  const featured = toursData.slice(0, 3);

  const handleBookTour = (tour) => {
    const titleText = tour.title[lang] || tour.title.es;
    const msg = `${encodeURIComponent(t.waIntro)}%0A` +
      `🏔️ Tour: ${encodeURIComponent(titleText)}%0A` +
      `⏱️ ${encodeURIComponent(t.waMode)}: ${encodeURIComponent(tour.duration)}%0A` +
      `💵 ${encodeURIComponent(t.waPriceFrom)}: $${tour.priceFrom} USD%0A` +
      `${encodeURIComponent(t.waAsk)}`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <section className="featured-tours-section" id="tours-destacados">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <Compass size={14} className="icon-inline" /> {t.tag}
          </span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="featured-tours-grid">
          {featured.map((tour) => {
            const title = tour.title[lang] || tour.title.es;
            const desc = tour.description[lang] || tour.description.es;

            return (
              <div key={tour.id} className="featured-tour-card">
                <div className="tour-card-header">
                  <img 
                    src={tour.image} 
                    alt={`${title} - Condori Expedition Transport`} 
                    loading="lazy" 
                    className="tour-card-img" 
                  />
                  <span className="tour-badge-cat">{tour.category}</span>
                </div>

                <div className="tour-card-body">
                  <div className="tour-meta-row">
                    <span className="tour-duration">
                      <Clock size={14} /> {tour.duration}
                    </span>
                    <span className="tour-price-tag">
                      {t.from} <strong>${tour.priceFrom} USD</strong>
                    </span>
                  </div>

                  <h3 className="tour-card-title">{title}</h3>
                  <p className="tour-card-desc">{desc}</p>

                  <div className="tour-card-actions">
                    <button 
                      type="button" 
                      className="btn-tour-ws"
                      onClick={() => handleBookTour(tour)}
                    >
                      <MessageCircle size={16} /> {t.btnQuote}
                    </button>
                    <Link to={`/tours/${tour.id}`} className="btn-tour-link">
                      {t.btnDetails}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-cta-center">
          <Link to="/tours" className="btn-cta-primary">
            <span>{t.btnAllTours}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
