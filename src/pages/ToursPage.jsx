import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Clock, MessageCircle, Compass, Mountain, CheckCircle2, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { toursData } from '../data/toursData';
import { translations } from '../data/translations';

export default function ToursPage() {
  const { lang } = useOutletContext();
  const t = translations[lang]?.tours || translations.es.tours;
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
    const msg = `${encodeURIComponent(t.waBookIntro)}%0A` +
      `${encodeURIComponent(t.waBookSub)}%0A` +
      `📌 Tour: ${encodeURIComponent(titleText)}%0A` +
      `⏱️ ${encodeURIComponent(t.duration)}: ${encodeURIComponent(tour.duration)}%0A` +
      `💵 ${encodeURIComponent(t.fromPrice)}: $${tour.priceFrom} USD%0A` +
      `${encodeURIComponent(t.waBookGroup)}`;
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
          <span className="page-hero-badge">{t.heroBadge}</span>
          <h1>{t.heroTitle}</h1>
          <p className="page-hero-sub">
            {t.heroSub}
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
              placeholder={t.searchPlaceholder} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label={t.searchAria}
            />
          </div>

          <div className="filter-buttons-group">
            <button 
              type="button" 
              className={`filter-btn ${filterCat === 'all' ? 'active' : ''}`}
              onClick={() => setFilterCat('all')}
            >
              {t.filterAll} ({toursData.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterCat === 'full day' ? 'active' : ''}`}
              onClick={() => setFilterCat('full day')}
            >
              {t.filterFullDay}
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterCat === 'half day' ? 'active' : ''}`}
              onClick={() => setFilterCat('half day')}
            >
              {t.filterHalfDay}
            </button>
          </div>
        </div>

        {/* Grid de Tours */}
        <div className="tours-catalog-grid">
          {filteredTours.map((tour) => {
            const title = tour.title[lang] || tour.title.es;
            const desc = tour.description[lang] || tour.description.es;
            const diff = tour.difficulty ? (tour.difficulty[lang] || tour.difficulty.es) : 'Moderada';
            const summary = tour.includesSummaryI18n?.[lang] || tour.includesSummary;

            return (
              <div key={tour.id} className="tour-catalog-card">
                <div className="tour-catalog-img-wrap">
                  <img 
                    src={tour.image} 
                    alt={`${title} - Condori Expedition Transport`} 
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
                    <strong>{t.includes}:</strong> {summary}
                  </div>

                  <div className="tour-card-footer">
                    <div className="tour-price-box">
                      <span className="price-label">{t.priceFromLabel}</span>
                      <span className="price-number">${tour.priceFrom} <small>USD</small></span>
                    </div>

                    <div className="tour-buttons-row">
                      <button 
                        type="button" 
                        className="btn-tour-ws-direct"
                        onClick={() => handleBookTour(tour)}
                      >
                        <MessageCircle size={16} /> {t.btnQuote}
                      </button>
                      <Link to={`/tours/${tour.id}`} className="btn-tour-detail-link">
                        <span>{t.btnViewItinerary}</span>
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
            <p>{t.noResults} "{searchTerm}".</p>
            <button type="button" className="btn-secondary" onClick={() => { setSearchTerm(''); setFilterCat('all'); }}>
              {t.btnResetSearch}
            </button>
          </div>
        )}

        {/* Garantías de Tours Privados */}
        <div className="tours-value-props">
          <div className="prop-box">
            <Compass size={24} className="prop-icon" />
            <h3>{t.prop1Title}</h3>
            <p>{t.prop1Desc}</p>
          </div>
          <div className="prop-box">
            <ShieldCheck size={24} className="prop-icon" />
            <h3>{t.prop2Title}</h3>
            <p>{t.prop2Desc}</p>
          </div>
          <div className="prop-box">
            <CheckCircle2 size={24} className="prop-icon" />
            <h3>{t.prop3Title}</h3>
            <p>{t.prop3Desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
