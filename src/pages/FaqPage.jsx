import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, CreditCard, Luggage, Wind, RefreshCw } from 'lucide-react';

import SEO from '../components/SEO';
import { faqData } from '../data/faqData';

// Preguntas adicionales específicas solicitadas: cancelaciones, sillas de bebé, etc.
const extendedFaqs = [
  ...faqData,
  {
    question: {
      es: "¿Cuál es la política de cancelación o cambio de fecha?",
      en: "What is your cancellation or rescheduling policy?",
      pt: "Qual é a política de cancelamento ou alteração de data?"
    },
    answer: {
      es: "Entendemos que los planes de viaje pueden variar. Puedes reprogramar o cancelar tu traslado sin penalidad avisándonos con al menos 24 horas de anticipación. Para vuelos retrasados o cancelados por aerolínea, no cobramos recargo alguno.",
      en: "You can reschedule or cancel free of charge with at least 24 hours notice. Flight delays or airline cancellations have zero penalties.",
      pt: "Você pode reagendar ou cancelar sem taxa avisando com 24 horas de antecedência. Voos cancelados pela companhia não têm custo extra."
    }
  },
  {
    question: {
      es: "¿Disponen de sillas de seguridad para bebés o niños pequeños?",
      en: "Do you have baby car seats available?",
      pt: "Vocês disponibilizam cadeirinha para bebê ou crianças pequenas?"
    },
    answer: {
      es: "Sí, disponemos de sillas homologadas para bebés y niños pequeños sin costo adicional. Solo debes indicarlo al momento de confirmar tu reserva para tenerla instalada en la unidad antes de tu llegada.",
      en: "Yes, certified baby and child seats are available at no extra cost upon request during your reservation.",
      pt: "Sim! Disponibilizamos cadeirinhas homologadas para bebês sem custo extra mediante solicitação prévia."
    }
  },
  {
    question: {
      es: "¿Cómo se maneja el tema del equipaje para el tren a Machu Picchu?",
      en: "How is luggage handled for the Machu Picchu train?",
      pt: "Como funciona a questão da bagagem para o trem de Machu Picchu?"
    },
    answer: {
      es: "Las empresas ferroviarias (PeruRail e Inca Rail) permiten solo equipaje de mano de 5 kg por pasajero. Si viajas con nosotros, puedes dejar tus maletas grandes en tu hotel en Cusco o coordinar que nuestro chofer las transporte de regreso de forma segura mientras visitas Machu Picchu.",
      en: "Trains allow 5 kg hand luggage per person. You can leave larger luggage safely at your hotel or arrange custody with us.",
      pt: "Os trens permitem apenas 5 kg de bagagem de mão por pessoa. Você pode deixar suas malas grandes no hotel em Cusco ou combinar a custódia conosco."
    }
  }
];

export default function FaqPage() {
  const { lang } = useOutletContext();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = extendedFaqs.filter((item) => {
    const q = (item.question[lang] || item.question.es).toLowerCase();
    const a = (item.answer[lang] || item.answer.es).toLowerCase();
    const term = searchTerm.toLowerCase();
    return q.includes(term) || a.includes(term);
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": extendedFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question[lang] || faq.question.es,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer[lang] || faq.answer.es
      }
    }))
  };

  return (
    <div className="page-view-faq">
      <SEO 
        title="Preguntas Frecuentes | Condori Expedition Transport Cusco"
        description="Respuestas a tus dudas sobre traslados privados en Cusco: métodos de pago, equipaje para tren a Machu Picchu, oxígeno medicinal y cancelaciones flexibles."
        canonical="/preguntas-frecuentes"
        keywords="preguntas frecuentes transporte cusco, equipaje tren machu picchu, oxigeno medicinal traslado cusco, pagos taxi cusco"
        schemaJson={faqSchema}
      />

      {/* Page Header */}

      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/laguna-humantay.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">RESOLVEMOS TODAS TUS DUDAS</span>
          <h1>Preguntas Frecuentes sobre Traslados y Tours</h1>
          <p className="page-hero-sub">
            Información clara sobre pagos, equipaje andino, altitud y oxígeno, retrasos de vuelos y cancelaciones sin letra pequeña.
          </p>
        </div>
      </section>

      <div className="container py-content">
        {/* Categorías Temáticas Rápidas */}
        <div className="faq-quick-topics">
          <div className="topic-card">
            <CreditCard size={22} className="topic-icon" />
            <strong>Medios de Pago</strong>
            <span>Efectivo, Tarjetas, Yape, Plin y PayPal</span>
          </div>
          <div className="topic-card">
            <Luggage size={22} className="topic-icon" />
            <strong>Equipaje & Maletas</strong>
            <span>Capacidades por unidad y trenes</span>
          </div>
          <div className="topic-card">
            <Wind size={22} className="topic-icon" />
            <strong>Oxígeno Medicinal</strong>
            <span>Balón a bordo en todas las rutas</span>
          </div>
          <div className="topic-card">
            <RefreshCw size={22} className="topic-icon" />
            <strong>Reprogramaciones</strong>
            <span>Cero costo por retrasos de vuelo</span>
          </div>
        </div>

        {/* Buscador de Preguntas */}
        <div className="faq-search-wrap">
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar en preguntas frecuentes (ej. pago, oxígeno, equipaje, vuelo, cancelación)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar preguntas frecuentes"
            />
          </div>
        </div>

        {/* Lista en Acordeón */}
        <div className="faq-accordion-list">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const q = faq.question[lang] || faq.question.es;
            const a = faq.answer[lang] || faq.answer.es;

            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? 'active' : ''}`}>
                <button 
                  type="button" 
                  className="faq-accordion-header"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{q}</span>
                  <span className="faq-q-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-accordion-body">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="no-results-box">
            <p>No se encontraron respuestas para tu búsqueda "{searchTerm}".</p>
            <button type="button" className="btn-secondary" onClick={() => setSearchTerm('')}>
              Ver todas las preguntas
            </button>
          </div>
        )}

        {/* Caja de Ayuda Directa por WhatsApp */}
        <div className="faq-contact-cta">
          <div className="faq-cta-inner">
            <HelpCircle size={32} className="faq-cta-icon" />
            <div>
              <h3>¿Tienes otra consulta que no está en la lista?</h3>
              <p>Escríbenos directamente por WhatsApp y nuestro equipo de operaciones te responderá en menos de 5 minutos.</p>
            </div>
            <a 
              href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20tengo%20una%20consulta%20adicional." 
              target="_blank" 
              rel="noreferrer"
              className="btn-ws-faq"
            >
              <MessageCircle size={18} />
              <span>Chatear por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
