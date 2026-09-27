import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  const phone = "51967040149";
  const message = encodeURIComponent("¡Hola Condori Expedition Transport! 🚗 Deseo consultar la disponibilidad de un traslado privado / tour en Cusco.");
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="floating-ws-container">
      {tooltipOpen && (
        <div className="ws-tooltip">
          <button className="ws-tooltip-close" onClick={() => setTooltipOpen(false)}>
            <X size={12} />
          </button>
          <div className="ws-tooltip-title">¿Necesitas transporte en Cusco?</div>
          <div className="ws-tooltip-sub">Chatea con nosotros en vivo 24/7</div>
        </div>
      )}

      <a 
        href={waUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="ws-pulse-btn"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
