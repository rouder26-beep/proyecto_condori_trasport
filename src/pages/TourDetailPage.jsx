import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { Clock, Mountain, ArrowLeft, MessageCircle, Mail, CheckCircle, XCircle, ShieldCheck, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import { toursData } from '../data/toursData';

export default function TourDetailPage() {
  const { slug } = useParams();
  const { lang } = useOutletContext();

  const tour = toursData.find(item => item.id === slug);

  if (!tour) {
    return (
      <div className="container py-content text-center" style={{ padding: '80px 20px' }}>
        <SEO 
          title="Tour no encontrado | Condori Expedition Transport"
          description="El tour privado solicitado no está disponible. Consulta nuestro catálogo completo de tours en Cusco."
        />
        <h2>Tour no encontrado</h2>
        <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
          El tour que buscas no existe o ha cambiado de enlace.
        </p>
        <Link to="/tours" className="btn-cta-primary" style={{ marginTop: '24px' }}>
          <ArrowLeft size={18} /> Ver todos los tours disponibles
        </Link>
      </div>
    );
  }

  const title = tour.title[lang] || tour.title.es;
  const desc = tour.description[lang] || tour.description.es;
  const diff = tour.difficulty ? (tour.difficulty[lang] || tour.difficulty.es) : 'Moderada';

  const otherTours = toursData.filter(t => t.id !== tour.id).slice(0, 2);

  const handleWhatsAppBooking = () => {
    const msg = `Hola Condori Expedition Transport! 🏔️%0A` +
      `Me interesa reservar o cotizar el siguiente tour privado:%0A` +
      `📌 Tour: ${encodeURIComponent(title)}%0A` +
      `⏱️ Modalidad: ${encodeURIComponent(tour.duration)}%0A` +
      `💵 Tarifa desde: $${tour.priceFrom} USD%0A` +
      `¿Podrían confirmarme disponibilidad y detalles para mi grupo? ¡Muchas gracias!`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  const emailSubject = encodeURIComponent(`Consulta Tour Privado: ${title}`);
  const emailBody = encodeURIComponent(
    `Hola equipo de Condori Expedition Transport,\n\n` +
    `Deseo consultar sobre el tour privado "${title}".\n` +
    `Por favor envíenme cotización y detalles de itinerario.\n\n` +
    `Muchas gracias.`
  );
  const emailHref = `mailto:condoriexpedition@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": title,
    "description": desc,
    "touristType": ["Families", "Couples", "Private Groups"],
    "offers": {
      "@type": "Offer",
      "price": tour.priceFrom,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "provider": {
      "@type": "TravelAgency",
      "name": "Condori Expedition Transport",
      "telephone": "+51910958898"
    }
  };

  return (
    <div className="page-view-tour-detail">
      <SEO 
        title={`${title} en Cusco | Condori Expedition Transport`}
        description={`${desc.slice(0, 155)}... Reserva con transporte 100% privado en Cusco.`}
        canonical={`/tours/${tour.id}`}
        image={tour.image}
        keywords={`${title}, tour privado Cusco, Valle Sagrado, transporte turístico Cusco`}
        schemaJson={tourSchema}
      />

      {/* Breadcrumb Bar */}
      <div className="tour-breadcrumb-bar">
        <div className="container">
          <Link to="/tours" className="back-link">
            <ArrowLeft size={16} /> Volver a Catálogo de Tours
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{title}</span>

        </div>
      </div>

      <div className="container py-content">
        <div className="tour-detail-layout">
          {/* Main Info Column */}
          <div className="tour-main-content">
            <div className="tour-hero-img-box">
              <img 
                src={tour.image} 
                alt={`${title} - Tour privado en Cusco`} 
                className="tour-hero-img" 
              />
              <span className="tour-detail-tag">{tour.category}</span>
            </div>

            <div className="tour-header-meta">
              <div className="meta-pill"><Clock size={15} /> {tour.duration}</div>
              <div className="meta-pill"><Mountain size={15} /> Dificultad: {diff}</div>
              <div className="meta-pill"><ShieldCheck size={15} /> 100% Transporte Privado</div>
            </div>

            <h1 className="tour-detail-title">{title}</h1>
            <p className="tour-detail-intro">{desc}</p>

            {/* Itinerario Paso a Paso */}
            <div className="tour-itinerary-section">
              <h2 className="section-subtitle">
                <Compass size={22} className="icon-inline" /> Itinerario Detallado del Recorrido
              </h2>
              <div className="itinerary-timeline">
                {tour.itinerary.map((step, index) => (
                  <div key={index} className="timeline-step">
                    <div className="timeline-marker">{index + 1}</div>
                    <div className="timeline-content">
                      <p>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incluye / No incluye */}
            <div className="tour-inclusions-grid">
              <div className="inc-box includes">
                <h3><CheckCircle size={20} className="inc-icon check" /> Qué Incluye</h3>
                <ul>
                  {tour.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="inc-box excludes">
                <h3><XCircle size={20} className="inc-icon x" /> Qué No Incluye</h3>
                <ul>
                  {tour.excludes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <aside className="tour-sidebar">
            <div className="tour-booking-card">
              <span className="card-top-tag">RESERVA DIRECTA SIN INTERMEDIARIOS</span>
              <div className="sidebar-price-display">
                <span className="price-from-label">Precio estimado desde</span>
                <div className="price-num">${tour.priceFrom} <span className="currency">USD</span></div>
                <span className="price-note">Tarifa total por vehículo (no por persona)</span>
              </div>

              <div className="sidebar-perks">
                <div className="perk-item">
                  <ShieldCheck size={16} className="perk-icon" />
                  <span>Servicio privado exclusivo para ti y tu grupo</span>
                </div>
                <div className="perk-item">
                  <Clock size={16} className="perk-icon" />
                  <span>Horario de recojo coordinado a tu elección</span>
                </div>
                <div className="perk-item">
                  <CheckCircle size={16} className="perk-icon" />
                  <span>Balón de oxígeno y botiquín a bordo</span>
                </div>
              </div>

              <button 
                type="button" 
                className="btn-sidebar-ws"
                onClick={handleWhatsAppBooking}
              >
                <MessageCircle size={18} />
                <span>Cotizar Tour por WhatsApp</span>
              </button>

              <a href={emailHref} className="btn-sidebar-email">
                <Mail size={16} />
                <span>Consultar por Correo</span>
              </a>

              <div className="sidebar-support-note">
                <p>¿Preguntas antes de reservar? Llámanos o escríbenos al <strong>+51 910 958 898</strong>. Respondemos 24/7.</p>
              </div>
            </div>

            {/* Otros tours sugeridos */}
            <div className="other-tours-sidebar">
              <h4>Otros Tours Sugeridos</h4>
              <div className="other-tours-list">
                {otherTours.map((ot) => (
                  <Link key={ot.id} to={`/tours/${ot.id}`} className="other-tour-item">
                    <img src={ot.image} alt={ot.title[lang] || ot.title.es} className="other-tour-thumb" />
                    <div>
                      <strong>{ot.title[lang] || ot.title.es}</strong>
                      <span>Desde ${ot.priceFrom} USD</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
