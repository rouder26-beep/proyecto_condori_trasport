import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Users, Luggage, Check, MessageCircle, Car } from 'lucide-react';
import SEO from '../components/SEO';
import { fleetData } from '../data/fleetData';
import { translations } from '../data/translations';

export default function FleetPage() {
  const { lang } = useOutletContext();
  const t = translations[lang]?.fleet || translations.es.fleet;
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPax, setSelectedPax] = useState('all');

  const filteredFleet = fleetData.filter((item) => {
    let matchesType = true;
    if (selectedType !== 'all') {
      matchesType = item.id.toLowerCase().includes(selectedType.toLowerCase()) || 
                    item.name.toLowerCase().includes(selectedType.toLowerCase());
    }

    let matchesPax = true;
    if (selectedPax === '1-3') matchesPax = item.id === 'fleet-sedan';
    else if (selectedPax === '1-4') matchesPax = item.id === 'fleet-suv' || item.id === 'fleet-sedan';
    else if (selectedPax === '4-7') matchesPax = item.id === 'fleet-minivan';
    else if (selectedPax === '8-15') matchesPax = item.id.includes('sprinter');

    return matchesType && matchesPax;
  });

  const handleBookVehicle = (item) => {
    const paxText = item.passengersI18n?.[lang] || item.passengers;
    const msg = `${encodeURIComponent(t.waIntro)}%0A` +
      `${encodeURIComponent(t.waSub)} ${encodeURIComponent(item.name)}.%0A` +
      `👥 ${encodeURIComponent(t.waCapacity)}: ${encodeURIComponent(paxText)}.%0A` +
      `${encodeURIComponent(t.waAsk)}`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <div className="page-view-fleet">
      <SEO 
        title="Nuestra Flota de Vehículos Turísticos en Cusco | Condori Expedition"
        description="Conoce nuestra flota de transporte privado en Cusco: Sedanes, SUVs 4x4, MiniVans familiares y Sprinter Mercedes-Benz. Equipadas con oxígeno medicinal y SOAT turístico."
        canonical="/flota"
        keywords="flota turistica Cusco, alquiler van con chofer Cusco, sprinter Cusco, minivan turistica Cusco, transporte privado cusco"
      />

      {/* Page Header */}
      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/sprinter.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">{t.heroBadge}</span>
          <h1>{t.heroTitle}</h1>
          <p className="page-hero-sub">
            {t.heroSub}
          </p>
        </div>
      </section>

      <div className="container py-content">
        {/* Barra de Filtros Doble: Por Tipo y Por Número de Pasajeros */}
        <div className="fleet-filters-container">
          <div className="filter-row">
            <span className="filter-row-title"><Car size={16} /> {t.filterTypeTitle}</span>
            <div className="filter-buttons-group">
              <button 
                type="button" 
                className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedType('all')}
              >
                {t.filterAllTypes}
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedType === 'sedan' ? 'active' : ''}`}
                onClick={() => setSelectedType('sedan')}
              >
                Sedan
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedType === 'suv' ? 'active' : ''}`}
                onClick={() => setSelectedType('suv')}
              >
                SUV
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedType === 'minivan' ? 'active' : ''}`}
                onClick={() => setSelectedType('minivan')}
              >
                MiniVan
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedType === 'sprinter' ? 'active' : ''}`}
                onClick={() => setSelectedType('sprinter')}
              >
                Mercedes Sprinter
              </button>
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-row-title"><Users size={16} /> {t.filterPaxTitle}</span>
            <div className="filter-buttons-group">
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedPax('all')}
              >
                {t.filterAnyGroup}
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '1-3' ? 'active' : ''}`}
                onClick={() => setSelectedPax('1-3')}
              >
                {t.filterPax1_3}
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '1-4' ? 'active' : ''}`}
                onClick={() => setSelectedPax('1-4')}
              >
                {t.filterPax1_4}
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '4-7' ? 'active' : ''}`}
                onClick={() => setSelectedPax('4-7')}
              >
                {t.filterPax4_7}
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '8-15' ? 'active' : ''}`}
                onClick={() => setSelectedPax('8-15')}
              >
                {t.filterPax8_15}
              </button>
            </div>
          </div>
        </div>

        {/* Grid de Vehículos */}
        <div className="fleet-catalog-grid">
          {filteredFleet.map((item) => {
            const tagText = item.tagI18n?.[lang] || item.tag;
            const paxText = item.passengersI18n?.[lang] || item.passengers;
            const lugText = item.luggageI18n?.[lang] || item.luggage;
            const featList = item.featuresI18n?.[lang] || item.features;

            return (
              <div key={item.id} className="fleet-catalog-card">
                <div className="fleet-card-media">
                  <img 
                    src={item.image} 
                    alt={`${item.name} - Condori Expedition Transport`} 
                    loading="lazy" 
                    className="fleet-catalog-img" 
                  />
                  <span className="fleet-cat-badge">{tagText}</span>
                </div>

                <div className="fleet-card-content">
                  <h2 className="fleet-item-name">{item.name}</h2>
                  <p className="fleet-item-model">{item.model}</p>

                  <div className="fleet-specs-pills">
                    <div className="spec-pill">
                      <Users size={16} className="spec-icon" />
                      <strong>{paxText}</strong>
                    </div>
                    <div className="spec-pill">
                      <Luggage size={16} className="spec-icon" />
                      <strong>{lugText}</strong>
                    </div>
                  </div>

                  <div className="fleet-features-block">
                    <h4>{t.equipmentTitle}</h4>
                    <ul className="fleet-features-list">
                      {featList.map((feat, idx) => (
                        <li key={idx}>
                          <Check size={15} className="feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="fleet-card-action">
                    <button 
                      type="button" 
                      className="btn-fleet-ws"
                      onClick={() => handleBookVehicle(item)}
                    >
                      <MessageCircle size={18} />
                      <span>{t.btnQuoteVehicle}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFleet.length === 0 && (
          <div className="no-results-box">
            <p>{t.noResults}</p>
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={() => { setSelectedType('all'); setSelectedPax('all'); }}
            >
              {t.btnResetFilters}
            </button>
          </div>
        )}

        {/* Nota Informativa sobre Equipaje */}
        <div className="fleet-luggage-advisory">
          <div className="advisory-icon"><Luggage size={26} /></div>
          <div>
            <h3>{t.advisoryTitle}</h3>
            <p>{t.advisoryDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
