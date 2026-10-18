import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Clock, MessageCircle, Compass, Mountain, CheckCircle2, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { toursData } from '../data/toursData';


export default function ToursPage() {
  const { lang } = useOutletContext();
  const [filterCat, setFilterCat] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTours = toursData.filter((tour) => {
    const title = (tour.title[lang] || tour.title.es).toLowerCase();
    const desc = (tour.description[lang] || tour.description.es).toLowerCase();
    const query = searchTerm.toLowerCase();
    const matchesSearch = title.includes(query) || desc.includes(query);
    if (filterCat === 'all') return matchesSearch;
    return matchesSearch && tour.category.toLowerCase().includes(filterCat.toLowerCase());
  });

  const handleBookTour = (tour) => {
    const titleText = tour.title[lang] || tour.title.es;
    const msg = `Hola Condori Expedition Transport! 🏔️%0A` +
      `Me gustaría cotizar el siguiente tour privado:%0A` +
      `📌 Tour: ${encodeURIComponent(titleText)}%0A` +
      `⏱️ Duración: ${encodeURIComponent(tour.duration)}%0A` +
      `💵 Precio desde: $${tour.priceFrom} USD%0A` +
      `Somos un grupo privado y deseamos coordinar fecha y disponibilidad.`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <div className="page-view-tours">
      <SEO 
        title="Tours Privados en Cusco y Valle Sagrado | Condori Expedition"
        description="Explora el Valle Sagrado, la Montaña de 7 Colores y la Laguna Humantay a tu propio ritmo con tours 100% privados en Cusco. Vehículos exclusivos y chofer profesional."
        canonical="/tours"
        keywords="tours Valle Sagrado, tour privado Cusco, montaña 7 colores privado, laguna humantay tour, city tour cusco privado"
      />

      {/* Page Header */}

      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/machupiccho.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">EXPERIENCIAS 100% PERSONALIZADAS</span>
          <h1>Tours Privados en Cusco y el Valle Sagrado</h1>
          <p className="page-hero-sub">
            Descubre los tesoros de la civilización inca sin la prisa de los grupos masivos. Vehículo exclusivo, chofer local experimentado y paradas a tu propio ritmo.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-content">
        {/* Barra de Filtros */}
        <div className="tours-filter-bar">
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar tour (ej. Valle Sagrado, Vinicunca, Humantay, City Tour)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar tours"
            />
          </div>

          <div className="filter-buttons-group">
            <button 
              type="button" 
              className={`filter-btn ${filterCat === 'all' ? 'active' : ''}`}
              onClick={() => setFilterCat('all')}
            >
              Todos los tours ({toursData.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterCat === 'full day' ? 'active' : ''}`}
              onClick={() => setFilterCat('full day')}
            >
              Full Day
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterCat === 'half day' ? 'active' : ''}`}
              onClick={() => setFilterCat('half day')}
            >
              Half Day
            </button>
          </div>
        </div>

        {/* Grid de Tours */}
        <div className="tours-catalog-grid">
          {filteredTours.map((tour) => {
            const title = tour.title[lang] || tour.title.es;
            const desc = tour.description[lang] || tour.description.es;
            const diff = tour.difficulty ? (tour.difficulty[lang] || tour.difficulty.es) : 'Moderada';

            return (
              <div key={tour.id} className="tour-catalog-card">
                <div className="tour-catalog-img-wrap">
                  <img 
                    src={tour.image} 
                    alt={`${title} - Condori Expedition Transporte`} 
                    loading="lazy"
                    className="tour-catalog-img" 
                  />
                  <span className="tour-cat-pill">{tour.category}</span>
                </div>

                <div className="tour-catalog-body">
                  <div className="tour-tags-row">
                    <span className="tag-duration"><Clock size={13} /> {tour.duration}</span>
                    <span className="tag-difficulty"><Mountain size={13} /> {diff}</span>
                  </div>

                  <h2 className="tour-title">{title}</h2>
                  <p className="tour-desc">{desc}</p>

                  <div className="tour-includes-preview">
                    <strong>Incluye:</strong> {tour.includesSummary || "Transporte 100% privado, chofer profesional, balón de oxígeno y paradas fotográficas ilimitadas."}
                  </div>

                  <div className="tour-card-footer">
                    <div className="tour-price-box">
                      <span className="price-label">Tarifa por servicio desde</span>
                      <span className="price-number">${tour.priceFrom} <small>USD</small></span>
                    </div>

                    <div className="tour-buttons-row">
                      <button 
                        type="button" 
                        className="btn-tour-ws-direct"
                        onClick={() => handleBookTour(tour)}
                      >
                        <MessageCircle size={16} /> Cotizar
                      </button>
                      <Link to={`/tours/${tour.id}`} className="btn-tour-detail-link">
                        <span>Ver Itinerario</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTours.length === 0 && (
          <div className="no-results-box">
            <p>No se encontraron tours con el término "{searchTerm}".</p>
            <button type="button" className="btn-secondary" onClick={() => { setSearchTerm(''); setFilterCat('all'); }}>
              Restablecer búsqueda
            </button>
          </div>
        )}

        {/* Garantías de Tours Privados */}
        <div className="tours-value-props">
          <div className="prop-box">
            <Compass size={24} className="prop-icon" />
            <h3>Itinerarios Flexibles</h3>
            <p>Sal a la hora que te convenga, evita las horas pico de turistas y quédate en cada lugar el tiempo que desees.</p>
          </div>
          <div className="prop-box">
            <ShieldCheck size={24} className="prop-icon" />
            <h3>Seguridad & Oxígeno</h3>
            <p>Todas nuestras unidades cuentan con balón de oxígeno medicinal y conductores capacitados en rutas de altura.</p>
          </div>
          <div className="prop-box">
            <CheckCircle2 size={24} className="prop-icon" />
            <h3>Sin Sorpresas en el Precio</h3>
            <p>Tarifas cerradas por vehículo completo. Combustible, peajes y chofer siempre incluidos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
