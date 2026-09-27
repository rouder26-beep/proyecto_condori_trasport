import React, { useState } from 'react';
import { Clock, MapPin, CheckCircle, XCircle, ArrowRight, X, Compass, Shield } from 'lucide-react';
import { toursData } from '../data/toursData';
import { translations } from '../data/translations';

export default function ToursSection({ lang }) {
  const t = translations[lang].tours;
  const [filter, setFilter] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const filteredTours = filter === 'All' 
    ? toursData 
    : toursData.filter(tour => tour.category === filter);

  const handleReserveTour = (tour) => {
    const title = tour.title[lang] || tour.title.es;
    const msg = `Hola Condori Expedition Transport, estoy interesado en reservar el tour privado:%0A` +
      `🏔️ Tour: ${title}%0A` +
      `⏱️ Duración: ${tour.duration}%0A` +
      `💵 Precio desde: $${tour.priceFrom} USD%0A` +
      `Por favor brindarme más detalles y fechas disponibles.`;
    window.open(`https://wa.me/51967040149?text=${msg}`, '_blank');
  };

  return (
    <section id="tours" className="tours-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EXPERIENCIAS INOLVIDABLES</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>

          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
              onClick={() => setFilter('All')}
            >
              {t.filterAll}
            </button>
            <button 
              className={`filter-btn ${filter === 'Full Day' ? 'active' : ''}`}
              onClick={() => setFilter('Full Day')}
            >
              {t.filterFullDay}
            </button>
            <button 
              className={`filter-btn ${filter === 'Half Day' ? 'active' : ''}`}
              onClick={() => setFilter('Half Day')}
            >
              {t.filterHalfDay}
            </button>
          </div>
        </div>

        <div className="tours-grid">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="tour-card">
              <div className="tour-img-wrap">
                <img src={tour.image} alt={tour.title[lang] || tour.title.es} />
                <span className="tour-badge-cat">{tour.category}</span>
                <span className="tour-price-badge">{t.from} ${tour.priceFrom} USD</span>
              </div>

              <div className="tour-card-body">
                <h3>{tour.title[lang] || tour.title.es}</h3>
                <p className="tour-desc">{tour.description[lang] || tour.description.es}</p>

                <div className="tour-meta-row">
                  <span><Clock size={15} /> {tour.duration}</span>
                  <span><Compass size={15} /> {t.difficulty}: {tour.difficulty[lang] || tour.difficulty.es}</span>
                </div>

                <div className="tour-includes-preview">
                  <strong>Incluye:</strong> Transporte privado, oxígeno, chofer profesional.
                </div>

                <div className="tour-card-actions">
                  <button className="btn-tour-details" onClick={() => setActiveModal(tour)}>
                    {t.btnDetails}
                  </button>
                  <button className="btn-tour-reserve" onClick={() => handleReserveTour(tour)}>
                    {t.btnReserveTour} <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Details Modal */}
      {activeModal && (
        <div className="modal-backdrop" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveModal(null)}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <span className="modal-tag">{activeModal.category}</span>
              <h2>{activeModal.title[lang] || activeModal.title.es}</h2>
              <p>{activeModal.description[lang] || activeModal.description.es}</p>
            </div>

            <div className="modal-body">
              <div className="itinerary-section">
                <h4>Itinerario Detallado</h4>
                <ul className="itinerary-timeline">
                  {activeModal.itinerary.map((step, i) => (
                    <li key={i}>
                      <span className="time">{step.time}</span>
                      <span className="detail">{step.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="includes-excludes-grid">
                <div className="inc-box">
                  <h4><CheckCircle size={18} color="#10b981" /> Incluye</h4>
                  <ul>
                    {activeModal.includes.map((inc, i) => (
                      <li key={i}><CheckCircle size={14} color="#10b981" /> {inc}</li>
                    ))}
                  </ul>
                </div>

                <div className="exc-box">
                  <h4><XCircle size={18} color="#ef4444" /> No Incluye</h4>
                  <ul>
                    {activeModal.excludes.map((exc, i) => (
                      <li key={i}><XCircle size={14} color="#ef4444" /> {exc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <span className="modal-price">Desde ${activeModal.priceFrom} USD (Por Vehículo)</span>
              <button className="btn-modal-reserve" onClick={() => handleReserveTour(activeModal)}>
                Reservar este Tour por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
