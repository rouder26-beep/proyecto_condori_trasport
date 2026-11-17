import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Clock, MessageCircle, Search, Car, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { routesData } from '../data/routesData';
import { translations } from '../data/translations';
import BookingCalculator from '../components/BookingCalculator';

export default function TransfersPage() {
  const { lang } = useOutletContext();
  const t = translations[lang]?.transfers || translations.es.transfers;

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const vehicleLabels = {
    sedanSuv: 'Sedan–SUV (1-3 Pax)',
    minivan: 'MiniVan (4-6 Pax)',
    sprinter10: 'Mercedes-Benz 10pax',
    sprinter15: 'Mercedes-Benz 15pax',
  };

  const handleBookRoute = (route, vehicleType) => {
    const price = route.prices[vehicleType] || route.prices.sedanSuv;
    const orig = route.originI18n?.[lang] || route.origin;
    const dest = route.destinationI18n?.[lang] || route.destination;
    const dur = route.durationI18n?.[lang] || route.duration;
    const msg = `${encodeURIComponent(t.waIntro)}%0A` +
      `${encodeURIComponent(t.waSub)}%0A` +
      `📌 ${encodeURIComponent(t.waRoute)}: ${encodeURIComponent(orig)} → ${encodeURIComponent(dest)}%0A` +
      `⏱️ ${encodeURIComponent(t.waDuration)}: ${encodeURIComponent(dur)}%0A` +
      `🚘 ${encodeURIComponent(t.waVehicle)}: ${encodeURIComponent(vehicleLabels[vehicleType] || vehicleType.toUpperCase())}%0A` +
      `💵 ${encodeURIComponent(t.waRate)}: $${price} USD (${encodeURIComponent(t.waPerVehicle)})%0A` +
      `${encodeURIComponent(t.waOutro)}`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  const filteredRoutes = routesData.filter((route) => {
    const query = searchTerm.toLowerCase();
    const orig = (route.originI18n?.[lang] || route.origin).toLowerCase();
    const dest = (route.destinationI18n?.[lang] || route.destination).toLowerCase();
    const matchesSearch =
      orig.includes(query) ||
      dest.includes(query) ||
      route.origin.toLowerCase().includes(query) ||
      route.destination.toLowerCase().includes(query);
    if (filterType === 'popular') return matchesSearch && route.popular;
    return matchesSearch;
  });

  return (
    <div className="page-view-transfers">
      <SEO 
        title="Tarifas de Traslados Privados en Cusco y Ollantaytambo | Condori Expedition"
        description="Tarifario oficial de traslados en Cusco: Aeropuerto a Hotel, Estación de Ollantaytambo y Valle Sagrado. Precios transparentes por vehículo completo, chofer y peajes incluidos."
        canonical="/traslados"
        keywords="traslado Cusco aeropuerto, traslado Ollantaytambo, taxi privado Cusco, tarifas traslados Cusco, transporte Cusco estacion tren"
      />

      {/* Page Header */}
      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/suv.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">{t.heroBadge}</span>
          <h1>{t.heroTitle}</h1>
          <p className="page-hero-sub">
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container py-content">
        {/* Guía rápida de vehículos */}
        <div className="transfers-vehicle-guide">
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>{t.guide1Title}</strong>
              <span>{t.guide1Desc}</span>
            </div>
          </div>
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>{t.guide2Title}</strong>
              <span>{t.guide2Desc}</span>
            </div>
          </div>
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>{t.guide3Title}</strong>
              <span>{t.guide3Desc}</span>
            </div>
          </div>
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>{t.guide4Title}</strong>
              <span>{t.guide4Desc}</span>
            </div>
          </div>
        </div>

        {/* Buscador y Filtros */}
        <div className="transfers-filter-bar">
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
              className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              {t.filterAll} ({routesData.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterType === 'popular' ? 'active' : ''}`}
              onClick={() => setFilterType('popular')}
            >
              {t.filterPopular}
            </button>
          </div>
        </div>

        {/* Tabla completa de tarifas */}
        <div className="routes-table-wrap">
          <table className="routes-table">
            <thead>
              <tr>
                <th>{t.route || 'Ruta'}</th>
                <th>{t.duration || 'Duración'}</th>
                <th>{t.vehicleSedan || 'Sedan–SUV (3 pax)'}</th>
                <th>{t.vehicleMinivan || 'Minivan (6 pax)'}</th>
                <th>{t.vehicleSprinter10 || 'Mercedes-Benz 10 pax'}</th>
                <th>{t.vehicleSprinter15 || 'Mercedes-Benz 15 pax'}</th>
                <th>{t.actionCol || 'Acción'}</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoutes.map((route) => {
                const orig = route.originI18n?.[lang] || route.origin;
                const dest = route.destinationI18n?.[lang] || route.destination;
                const dur = route.durationI18n?.[lang] || route.duration;
                return (
                  <tr key={route.id} className={route.popular ? 'row-popular' : ''}>
                    <td className="cell-route">
                      <div className="route-names">
                        <strong className="route-origin">{orig}</strong>
                        <span className="route-arrow">→</span>
                        <strong className="route-dest">{dest}</strong>
                      </div>
                      <div style={{display:'flex', gap:'6px', flexWrap:'wrap', marginTop:'4px'}}>
                        {route.popular && <span className="badge-popular">{t.badgePopular}</span>}
                        {!route.hideTripType && (
                          <span className="badge-one-way">
                            {route.tripType === 'roundTrip' ? t.roundTrip : t.oneWay}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="cell-duration">
                      <span className="duration-tag">
                        <Clock size={14} />
                        <span className="duration-approx">{t.approx || 'aprox.'}</span>
                        {dur}
                      </span>
                    </td>

                    {/* Sedan–SUV (destacado naranja) */}
                    <td className="cell-price">
                      <div className="price-box highlight">
                        <span className="amount">${route.prices.sedanSuv} USD</span>
                        <button 
                          type="button"
                          className="btn-small-ws" 
                          onClick={() => handleBookRoute(route, 'sedanSuv')}
                          title={`${t.btnBookSmall} Sedan–SUV`}
                        >
                          {t.btnBookSmall}
                        </button>
                      </div>
                    </td>

                    {/* Minivan */}
                    <td className="cell-price">
                      <div className="price-box">
                        <span className="amount">${route.prices.minivan} USD</span>
                        <button 
                          type="button"
                          className="btn-small-ws" 
                          onClick={() => handleBookRoute(route, 'minivan')}
                          title={`${t.btnBookSmall} MiniVan`}
                        >
                          {t.btnBookSmall}
                        </button>
                      </div>
                    </td>

                    {/* Mercedes-Benz 10 pax */}
                    <td className="cell-price">
                      <div className="price-box">
                        <span className="amount">${route.prices.sprinter10} USD</span>
                        <button 
                          type="button"
                          className="btn-small-ws" 
                          onClick={() => handleBookRoute(route, 'sprinter10')}
                          title={`${t.btnBookSmall} Mercedes-Benz 10pax`}
                        >
                          {t.btnBookSmall}
                        </button>
                      </div>
                    </td>

                    {/* Mercedes-Benz 15 pax */}
                    <td className="cell-price">
                      <div className="price-box">
                        <span className="amount">${route.prices.sprinter15} USD</span>
                        <button 
                          type="button"
                          className="btn-small-ws" 
                          onClick={() => handleBookRoute(route, 'sprinter15')}
                          title={`${t.btnBookSmall} Mercedes-Benz 15pax`}
                        >
                          {t.btnBookSmall}
                        </button>
                      </div>
                    </td>

                    {/* Acción — Cotizar */}
                    <td className="cell-action">
                      <button 
                        type="button"
                        className="btn-table-ws" 
                        onClick={() => handleBookRoute(route, 'sedanSuv')}
                      >
                        <MessageCircle size={16} /> {t.btnQuote}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="routes-table-note">
            <Clock size={13} /> {t.trafficNote || 'Los tiempos son referenciales y pueden variar según el tráfico.'}
          </p>
        </div>

        {filteredRoutes.length === 0 && (
          <div className="no-results-box">
            <p>{t.noResults} "{searchTerm}".</p>
            <button type="button" className="btn-secondary" onClick={() => setSearchTerm('')}>
              {t.btnResetSearch}
            </button>
          </div>
        )}

        {/* Disclaimer y Garantías */}
        <div className="transfers-guarantee-grid">
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>{t.guar1Title}</strong>
              <p>{t.guar1Desc}</p>
            </div>
          </div>
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>{t.guar2Title}</strong>
              <p>{t.guar2Desc}</p>
            </div>
          </div>
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>{t.guar3Title}</strong>
              <p>{t.guar3Desc}</p>
            </div>
          </div>
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>{t.guar4Title}</strong>
              <p>{t.guar4Desc}</p>
            </div>
          </div>
        </div>

        {/* Sección de Calculador interactivo para rutas personalizadas */}
        <div className="transfers-calc-block">
          <div className="section-header center">
            <span className="section-tag">{t.calcTag}</span>
            <h2>{t.calcTitle}</h2>
            <p>{t.calcSub}</p>
          </div>
          <div className="calc-center-wrap">
            <BookingCalculator lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
