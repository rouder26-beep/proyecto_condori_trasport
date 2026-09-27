import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';

const reviewsList = [
  {
    id: 1,
    name: "Carlos M.",
    country: "🇲🇽 México",
    rating: 5,
    date: "Hace 2 semanas",
    route: "Traslado Cusco a Ollantaytambo",
    comment: "Excelente servicio. Rudy y su equipo fueron súper puntuales en el aeropuerto de Cusco. El vehículo estaba impecable y contaba con oxígeno que nos ayudó bastante con la altura.",
    source: "Google Review"
  },
  {
    id: 2,
    name: "Sarah & David Jenkins",
    country: "🇺🇸 USA",
    rating: 5,
    date: "Hace 1 mes",
    route: "Sacred Valley VIP Private Tour",
    comment: "Best private transfer company in Cusco! Very transparent prices per vehicle with no surprises. Our driver was extremely friendly and knowledgeable. Highly recommended!",
    source: "TripAdvisor"
  },
  {
    id: 3,
    name: "Juliana Rossi",
    country: "🇧🇷 Brasil",
    rating: 5,
    date: "Hace 3 semanas",
    route: "Tour Montanha 7 Cores",
    comment: "Viagem maravilhosa! Carro super confortável, motorista muito atencioso e seguro nas curvas da montanha. O balão de oxigênio nos deu muita tranquilidade.",
    source: "Google Review"
  },
  {
    id: 4,
    name: "Fernando & Lucía",
    country: "🇪🇸 España",
    rating: 5,
    date: "Hace 1 mes",
    route: "Traslado Aeropuerto + Valle Sagrado",
    comment: "Un 10/10 en puntualidad y atención. Rudy estuvo pendiente de nuestro vuelo atrasado en todo momento sin cobrarnos nada extra. Repetiremos sin duda.",
    source: "Google Review"
  }
];

export default function ReviewsSection({ lang }) {
  const t = translations[lang].reviews;

  return (
    <section id="reseñas" className="reviews-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">TESTIMONIOS REALES DE CLIENTES</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>

          <div className="reviews-score-badge">
            <div className="stars-row">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={22} fill="#f59e0b" color="#f59e0b" />
              ))}
            </div>
            <span className="score-text">5.0 / 5.0 Excelente • +500 Viajeros Atendidos</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviewsList.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="rev-top">
                <Quote size={28} className="quote-icon" />
                <span className="rev-source">{rev.source}</span>
              </div>

              <p className="rev-text">"{rev.comment}"</p>

              <div className="rev-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <div className="rev-user-row">
                <div className="rev-user-info">
                  <strong>{rev.name}</strong>
                  <span className="rev-meta">{rev.country} • {rev.route}</span>
                </div>
                <span className="badge-verified"><CheckCircle2 size={13} /> {t.verified}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
