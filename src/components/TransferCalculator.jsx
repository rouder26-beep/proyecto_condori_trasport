import React from 'react';
import { Clock, MessageCircle, Info, ChevronRight, Check } from 'lucide-react';
import { routesData } from '../data/routesData';
import { translations } from '../data/translations';

export default function TransferCalculator({ lang }) {
  const t = translations[lang].transfers;

  const handleBookRoute = (route, vehicleType) => {
    const price = route.prices[vehicleType];
    const msg = `Hola Condori Expedition Transport, deseo reservar la siguiente ruta:%0A` +
      `📌 Ruta: ${route.origin} → ${route.destination}%0A` +
      `⏱️ Duración: ${route.duration}%0A` +
      `🚗 Vehículo: ${vehicleType.toUpperCase()}%0A` +
      `💵 Tarifario: $${price} USD (Precio por vehículo)%0A` +
      `Por favor indíquenme disponibilidad.`;
    window.open(`https://wa.me/51967040149?text=${msg}`, '_blank');
  };

  return (
    <section id="traslados" className="transfers-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TARIFARIO DE RUTAS FRECUENTES</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="routes-table-wrap">
          <table className="routes-table">
            <thead>
              <tr>
                <th>{t.route}</th>
                <th>{t.duration}</th>
                <th>{t.vehicleSedan}</th>
                <th>{t.vehicleMinivan}</th>
                <th>{t.vehicleSprinter}</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {routesData.map((route) => (
                <tr key={route.id} className={route.popular ? 'row-popular' : ''}>
                  <td className="cell-route">
                    <div className="route-names">
                      <strong className="route-origin">{route.origin}</strong>
                      <span className="route-arrow">→</span>
                      <strong className="route-dest">{route.destination}</strong>
                    </div>
                    {route.popular && <span className="badge-popular">Ruta más solicitada</span>}
                  </td>
                  <td className="cell-duration">
                    <span className="duration-tag"><Clock size={14} /> {route.duration}</span>
                  </td>
                  <td className="cell-price">
                    <div className="price-box">
                      <span className="amount">${route.prices.sedan} USD</span>
                      <button className="btn-small-ws" onClick={() => handleBookRoute(route, 'sedan')}>
                        Reservar
                      </button>
                    </div>
                  </td>
                  <td className="cell-price">
                    <div className="price-box highlight">
                      <span className="amount">${route.prices.suv} USD</span>
                      <button className="btn-small-ws" onClick={() => handleBookRoute(route, 'suv')}>
                        Reservar
                      </button>
                    </div>
                  </td>
                  <td className="cell-price">
                    <div className="price-box">
                      <span className="amount">${route.prices.sprinter} USD</span>
                      <button className="btn-small-ws" onClick={() => handleBookRoute(route, 'sprinter')}>
                        Reservar
                      </button>
                    </div>
                  </td>
                  <td className="cell-action">
                    <button className="btn-table-ws" onClick={() => handleBookRoute(route, 'suv')}>
                      <MessageCircle size={16} /> Cotizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="transfers-disclaimer">
          <Info size={18} />
          <span>{t.disclaimer}</span>
        </div>
      </div>
    </section>
  );
}
