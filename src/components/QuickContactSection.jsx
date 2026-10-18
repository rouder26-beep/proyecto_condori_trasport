import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function QuickContactSection({ lang: _lang }) {

  return (
    <section className="quick-contact-section" id="contacto-rapido">
      <div className="container">
        <div className="quick-contact-card">
          <div className="quick-contact-info">
            <span className="badge-official-inline">
              <ShieldCheck size={16} /> GRUPO CONDORI RYD SAC • RUC 20616421744
            </span>
            <h2>¿Tienes dudas o necesitas un itinerario a tu medida?</h2>
            <p>
              Respondemos al instante por WhatsApp para resolver tus dudas de altitud, rutas combinadas, horarios de tren a Machu Picchu o equipaje especial.
            </p>

            <div className="quick-contact-features">
              <div className="feat-item">
                <Clock size={18} className="feat-icon" />
                <div>
                  <strong>Atención Inmediata</strong>
                  <span>Soporte 24/7 en español, inglés y portugués</span>
                </div>
              </div>
              <div className="feat-item">
                <Phone size={18} className="feat-icon" />
                <div>
                  <strong>Central Telefónica</strong>
                  <span>+51 910 958 898</span>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-contact-actions">
            <a 
              href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20deseo%20asesor%C3%ADa%20personalizada%20para%20mis%20traslados%20y%20tours%20en%20Cusco." 
              target="_blank" 
              rel="noreferrer"
              className="btn-quick-ws"
            >
              <MessageCircle size={22} />
              <div className="btn-ws-text">
                <span className="btn-title">Cotizar por WhatsApp</span>
                <span className="btn-sub">Respuesta promedio en menos de 5 min</span>
              </div>
            </a>

            <div className="quick-contact-secondary-links">
              <Link to="/contacto" className="link-more-contact">
                <span>Ver oficina, formulario y horarios</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
