import React from 'react';
import { Users, Briefcase, CheckCircle2, ShieldCheck, HeartPulse, Wifi, Snowflake } from 'lucide-react';
import { fleetData } from '../data/fleetData';
import { translations } from '../data/translations';

export default function FleetSection({ lang }) {
  const t = translations[lang].fleet;

  const handleInquireVehicle = (vehicle) => {
    const msg = `Hola Condori Expedition Transport, deseo consultar la disponibilidad del vehículo:%0A` +
      `🚘 Vehículo: ${vehicle.name} (${vehicle.model})%0A` +
      `👥 Capacidad: ${vehicle.passengers}%0A` +
      `🧳 Equipaje: ${vehicle.luggage}`;
    window.open(`https://wa.me/51967040149?text=${msg}`, '_blank');
  };

  return (
    <section id="flota" className="fleet-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">UNIDADES MODERNAS & EQUIPADAS</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="fleet-grid">
          {fleetData.map((vehicle) => (
            <div key={vehicle.id} className="fleet-card">
              <div className="fleet-img-wrap">
                <img src={vehicle.image} alt={vehicle.name} />
                <span className="fleet-tag">{vehicle.tag}</span>
              </div>

              <div className="fleet-card-body">
                <h3>{vehicle.name}</h3>
                <p className="fleet-model">{vehicle.model}</p>

                <div className="fleet-specs-row">
                  <div className="spec-item">
                    <Users size={18} />
                    <div>
                      <span className="spec-label">{t.capacity}</span>
                      <strong className="spec-val">{vehicle.passengers}</strong>
                    </div>
                  </div>

                  <div className="spec-item">
                    <Briefcase size={18} />
                    <div>
                      <span className="spec-label">{t.luggage}</span>
                      <strong className="spec-val">{vehicle.luggage}</strong>
                    </div>
                  </div>
                </div>

                <div className="fleet-features-list">
                  <h4>{t.features}:</h4>
                  <ul>
                    {vehicle.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} className="feat-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-fleet-inquire" onClick={() => handleInquireVehicle(vehicle)}>
                  {t.btnInquire}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
