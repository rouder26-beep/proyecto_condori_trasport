import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { translations } from '../data/translations';

export default function WhatsAppButton({ lang = 'es' }) {
  const [tooltipOpen, setTooltipOpen] = useState(true);
  const t = translations[lang]?.whatsappFloat || translations.es.whatsappFloat;

  const phone = "51910958898";
  const message = encodeURIComponent(t.message);
  const waUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="floating-ws-container">
      {tooltipOpen && (
        <div className="ws-tooltip">
          <button className="ws-tooltip-close" onClick={() => setTooltipOpen(false)} aria-label="Close">
            <X size={12} />
          </button>
          <div className="ws-tooltip-title">{t.title}</div>
          <div className="ws-tooltip-sub">{t.sub}</div>
        </div>
      )}

      <a 
        href={waUrl} 
        target="_blank" 
        rel="noreferrer" 
        className="ws-pulse-btn"
        aria-label={t.ariaLabel}
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
