import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { routesData } from '../data/routesData';

export default function PopularRoutesSection({ lang: _lang }) {

  // Tomar las 4 rutas populares más solicitadas
  const popularRoutes = routesData.filter(r => r.popular).slice(0, 4);

  const handleBook = (route) => {
    const minPrice = route.prices.sedan || route.prices.suv;
    const msg = `Hola Condori Expedition Transport, deseo cotizar la ruta más solicitada:%0A` +
      `📌 ${route.origin} → ${route.destination}%0A` +
      `⏱️ Duración: ${route.duration}%0A` +
      `💵 Tarifa desde: $${minPrice} USD%0A` +
      `¿Tienen disponibilidad?`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <section className="popular-routes-section" id="rutas-populares">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <Sparkles size={14} className="icon-inline" /> RUTAS MÁS SOLICITADAS
          </span>
          <h2>Traslados Privados Más Pedidos en Cusco</h2>
          <p>
            Viaja sin demoras ni intermediarios con recogida puntual en el aeropuerto o en tu hotel hacia las estaciones de tren y el Valle Sagrado.
          </p>
        </div>

        <div className="popular-routes-grid">
          {popularRoutes.map((route) => {
            const minPrice = route.prices.sedan || route.prices.suv;
            return (
              <div key={route.id} className="popular-route-card">
                <div className="popular-route-badge">Ruta Frecuente</div>
                <div className="popular-route-locations">
                  <div className="loc-item">
                    <MapPin size={16} className="loc-icon origin" />
                    <div>
                      <span className="loc-label">Origen</span>
                      <strong className="loc-name">{route.origin}</strong>
                    </div>
                  </div>
                  <div className="loc-divider">
                    <span className="arrow-down">↓</span>
                  </div>
                  <div className="loc-item">
                    <MapPin size={16} className="loc-icon dest" />
                    <div>
                      <span className="loc-label">Destino</span>
                      <strong className="loc-name">{route.destination}</strong>
                    </div>
                  </div>
                </div>

                <div className="popular-route-meta">
                  <span className="route-duration">
                    <Clock size={14} /> {route.duration}
                  </span>
                  <div className="route-price-from">
                    <span className="from-label">Desde</span>
                    <span className="from-amount">${minPrice} <small>USD</small></span>
                  </div>
                </div>

                <p className="route-card-note">Precio por vehículo completo (incluye chofer y peajes)</p>

                <div className="popular-route-actions">
                  <button 
                    type="button" 
                    className="btn-route-ws"
                    onClick={() => handleBook(route)}
                  >
                    <MessageCircle size={16} /> Cotizar
                  </button>
                  <Link to="/traslados" className="btn-route-details">
                    Ver vehículos
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="section-cta-center">
          <Link to="/traslados" className="btn-cta-primary">
            <span>Ver todas las tarifas</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
