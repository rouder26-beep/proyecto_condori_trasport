import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Luggage, ArrowRight, ShieldCheck, Car } from 'lucide-react';
import { fleetData } from '../data/fleetData';

export default function FleetShortSection({ lang: _lang }) {

  // Tomamos los 4 tipos representativos
  const shortFleet = fleetData.slice(0, 4);

  return (
    <section className="fleet-short-section" id="flota-corta">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">
            <Car size={14} className="icon-inline" /> NUESTRAS UNIDADES
          </span>
          <h2>Flota Moderna para Cada Tipo de Viaje</h2>
          <p>
            Unidades equipadas con aire acondicionado, tracción andina, monitoreo GPS y balón de oxígeno medicinal para tu seguridad en las alturas de Cusco.
          </p>
        </div>

        <div className="fleet-short-grid">
          {shortFleet.map((item) => (
            <div key={item.id} className="fleet-short-card">
              <div className="fleet-img-wrap">
                <img 
                  src={item.image} 
                  alt={`${item.name} - ${item.model} Condori Expedition Transport`} 
                  loading="lazy" 
                  className="fleet-card-img" 
                />
                <span className="fleet-short-tag">{item.tag}</span>
              </div>

              <div className="fleet-short-body">
                <h3 className="fleet-name">{item.name}</h3>
                <p className="fleet-model">{item.model}</p>

                <div className="fleet-short-specs">
                  <div className="spec-badge">
                    <Users size={15} />
                    <span>{item.passengers}</span>
                  </div>
                  <div className="spec-badge">
                    <Luggage size={15} />
                    <span>{item.luggage}</span>
                  </div>
                </div>

                <div className="fleet-highlight-feature">
                  <ShieldCheck size={14} className="icon-inline" /> Balón de oxígeno y SOAT turístico vigente
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta-center">
          <Link to="/flota" className="btn-cta-secondary">
            <span>Ver flota completa y características</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
