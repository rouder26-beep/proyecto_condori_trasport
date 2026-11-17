import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { Clock, Mountain, ArrowLeft, MessageCircle, Mail, CheckCircle, XCircle, ShieldCheck, Compass, Car } from 'lucide-react';
import SEO from '../components/SEO';
import { toursData } from '../data/toursData';
import { translations } from '../data/translations';

export default function TourDetailPage() {
  const { slug } = useParams();
  const { lang } = useOutletContext();
  const t = translations[lang]?.tours || translations.es.tours;

  const tour = toursData.find(item => item.id === slug);

  if (!tour) {
    return (
      <div className="container py-content text-center" style={{ padding: '80px 20px' }}>
        <SEO 
          title={`${t.notFoundTitle} | Condori Expedition Transport`}
          description={t.notFoundDesc}
        />
        <h2>{t.notFoundTitle}</h2>
        <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
          {t.notFoundDesc}
        </p>
        <Link to="/tours" className="btn-cta-primary" style={{ marginTop: '24px' }}>
          <ArrowLeft size={18} /> {t.btnBackAllTours}
        </Link>
      </div>
    );
  }

  const title = tour.title[lang] || tour.title.es;
  const desc = tour.description[lang] || tour.description.es;
  const diff = tour.difficulty ? (tour.difficulty[lang] || tour.difficulty.es) : 'Moderada';
  const includesList = tour.includesI18n?.[lang] || tour.includes;
  const excludesList = tour.excludesI18n?.[lang] || tour.excludes;

  const otherTours = toursData.filter(item => item.id !== tour.id).slice(0, 2);

  const handleWhatsAppBooking = () => {
    const msg = `${encodeURIComponent(t.waBookIntro)}%0A` +
      `${encodeURIComponent(t.waDetailSub)}%0A` +
      `📌 Tour: ${encodeURIComponent(title)}%0A` +
      `⏱️ ${encodeURIComponent(t.duration)}: ${encodeURIComponent(tour.duration)}%0A` +
      `💵 ${encodeURIComponent(t.fromPrice)}: $${tour.priceFrom} USD%0A` +
      `${encodeURIComponent(t.waDetailAsk)}`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  const emailSubject = encodeURIComponent(`${t.emailSubjectPrefix}: ${title}`);
  const emailBody = encodeURIComponent(
    `${t.emailBodyGreeting}\n\n` +
    `${t.emailBodyLine1} "${title}".\n` +
    `${t.emailBodyLine2}\n\n` +
    `${t.emailBodyClosing}`
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
        title={`${title} | Condori Expedition Transport`}
        description={`${desc.slice(0, 155)}...`}
        canonical={`/tours/${tour.id}`}
        image={tour.image}
        keywords={`${title}, tour privado Cusco, Valle Sagrado, transporte turístico Cusco`}
        schemaJson={tourSchema}
      />

      {/* Breadcrumb Bar */}
      <div className="tour-breadcrumb-bar">
        <div className="container">
          <Link to="/tours" className="back-link">
            <ArrowLeft size={16} /> {t.backCatalog}
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
                alt={`${title} - Condori Expedition Transport`} 
                className="tour-hero-img" 
              />
              <span className="tour-detail-tag">{tour.category}</span>
            </div>

            <div className="tour-header-meta">
              <div className="meta-pill"><Clock size={15} /> {tour.duration}</div>
              <div className="meta-pill"><Mountain size={15} /> {t.difficulty}: {diff}</div>
              <div className="meta-pill"><ShieldCheck size={15} /> {t.privateTransportPill}</div>
            </div>

            <h1 className="tour-detail-title">{title}</h1>
            <p className="tour-detail-intro">{desc}</p>

            {/* Itinerario Paso a Paso */}
            <div className="tour-itinerary-section">
              <h2 className="section-subtitle">
                <Compass size={22} className="icon-inline" /> {t.itineraryTitle}
              </h2>
              <div className="itinerary-timeline">
                {tour.itinerary.map((step, index) => {
                  const stepText = (lang !== 'es' && step[lang]) ? step[lang] : step.detail;
                  return (
                    <div key={index} className="timeline-step">
                      <div className="timeline-marker">{index + 1}</div>
                      <div className="timeline-content">
                        <p>{stepText}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tarifas por vehículo (si están definidas) */}
            {tour.vehicleRates && tour.vehicleRates.length > 0 && (
              <div className="tour-vehicle-rates-section">
                <h2 className="section-subtitle">
                  <Car size={22} className="icon-inline" /> {t.ratesPerVehicle || 'Tarifas por vehículo'}
                </h2>
                <div className="vehicle-rates-card">
                  {tour.vehicleRates.map((rate, rIdx) => (
                    <div key={rIdx} className="vehicle-rate-row">
                      <div className="rate-vehicle-info">
                        <strong className="rate-vehicle-name">{rate.vehicle}</strong>
                        <span className="rate-vehicle-pax">({rate.capacity})</span>
                      </div>
                      <div className="rate-dotted-filler" aria-hidden="true" />
                      <div className="rate-price-tag">{rate.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Incluye / No incluye */}
            <div className="tour-inclusions-grid">
              <div className="inc-box includes">
                <h3><CheckCircle size={20} className="inc-icon check" /> {t.whatIncludes}</h3>
                <ul>
                  {includesList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="inc-box excludes">
                <h3><XCircle size={20} className="inc-icon x" /> {t.whatExcludes}</h3>
                <ul>
                  {excludesList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                  <li>{t.personalExpenses || 'Gastos personales'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <aside className="tour-sidebar">
            <div className="tour-booking-card">
              <span className="card-top-tag">{t.sidebarTopTag}</span>
              <div className="sidebar-price-display">
                <span className="price-from-label">{t.estimatedPriceFrom}</span>
                <div className="price-num">${tour.priceFrom} <span className="currency">USD</span></div>
                <span className="price-note">{t.perVehicleNote}</span>
              </div>

              <div className="sidebar-perks">
                <div className="perk-item">
                  <ShieldCheck size={16} className="perk-icon" />
                  <span>{t.perk1}</span>
                </div>
                <div className="perk-item">
                  <Clock size={16} className="perk-icon" />
                  <span>{t.perk2}</span>
                </div>
                <div className="perk-item">
                  <CheckCircle size={16} className="perk-icon" />
                  <span>{t.perk3}</span>
                </div>
              </div>

              <button 
                type="button" 
                className="btn-sidebar-ws"
                onClick={handleWhatsAppBooking}
              >
                <MessageCircle size={18} />
                <span>{t.btnQuoteWa}</span>
              </button>

              <a href={emailHref} className="btn-sidebar-email">
                <Mail size={16} />
                <span>{t.btnInquireEmail}</span>
              </a>

              <div className="sidebar-support-note">
                <p>{t.supportNote1} <strong>+51 910 958 898</strong>. {t.supportNote2}</p>
              </div>
            </div>

            {/* Otros tours sugeridos */}
            <div className="other-tours-sidebar">
              <h4>{t.otherToursTitle}</h4>
              <div className="other-tours-list">
                {otherTours.map((ot) => (
                  <Link key={ot.id} to={`/tours/${ot.id}`} className="other-tour-item">
                    <img src={ot.image} alt={ot.title[lang] || ot.title.es} className="other-tour-thumb" />
                    <div>
                      <strong>{ot.title[lang] || ot.title.es}</strong>
                      <span>{t.fromPrice} ${ot.priceFrom} USD</span>
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
