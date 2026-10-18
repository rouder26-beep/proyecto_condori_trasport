import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, MessageCircle, Compass } from 'lucide-react';
import { toursData } from '../data/toursData';

export default function FeaturedToursSection({ lang }) {
  const featured = toursData.slice(0, 3);

  const handleBookTour = (tour) => {
    const titleText = tour.title[lang] || tour.title.es;
    const msg = `Hola Condori Expedition Transport, deseo cotizar el tour privado:%0A` +
      `🏔️ Tour: ${titleText}%0A` +
      `⏱️ Modalidad: ${tour.duration}%0A` +
      `💵 Precio desde: $${tour.priceFrom} USD%0A` +
      `¿Podrían brindarme información y disponibilidad?`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <section className="featured-tours-section" id="tours-destacados">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <Compass size={14} className="icon-inline" /> EXPERIENCIAS PRIVADAS
          </span>
          <h2>Tours Privados Destacados en Cusco</h2>
          <p>
            Descubre las maravillas incas y andinas a tu propio ritmo, sin horarios impuestos y con movilidad exclusiva para ti y tu grupo.
          </p>
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
                    alt={`${title} - Tour privado en Cusco`} 
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
                      Desde <strong>${tour.priceFrom} USD</strong>
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
                      <MessageCircle size={16} /> Cotizar
                    </button>
                    <Link to={`/tours/${tour.id}`} className="btn-tour-link">
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-cta-center">
          <Link to="/tours" className="btn-cta-primary">
            <span>Ver todos los tours</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
