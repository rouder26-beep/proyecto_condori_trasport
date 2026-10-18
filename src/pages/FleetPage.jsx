import React, { useState } from 'react';
import { Users, Luggage, Check, MessageCircle, Car } from 'lucide-react';
import SEO from '../components/SEO';
import { fleetData } from '../data/fleetData';

export default function FleetPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPax, setSelectedPax] = useState('all');


  const filteredFleet = fleetData.filter((item) => {
    // Filtro por tipo
    let matchesType = true;
    if (selectedType !== 'all') {
      matchesType = item.id.toLowerCase().includes(selectedType.toLowerCase()) || 
                    item.name.toLowerCase().includes(selectedType.toLowerCase());
    }

    // Filtro por capacidad
    let matchesPax = true;
    if (selectedPax === '1-3') matchesPax = item.id === 'fleet-sedan';
    else if (selectedPax === '1-4') matchesPax = item.id === 'fleet-suv' || item.id === 'fleet-sedan';
    else if (selectedPax === '4-7') matchesPax = item.id === 'fleet-minivan';
    else if (selectedPax === '8-15') matchesPax = item.id.includes('sprinter');

    return matchesType && matchesPax;
  });

  const handleBookVehicle = (item) => {
    const msg = `Hola Condori Expedition Transport! 🚗%0A` +
      `Me interesa cotizar un servicio con el vehículo: ${encodeURIComponent(item.name)} (${encodeURIComponent(item.model)}).%0A` +
      `Capacidad: ${encodeURIComponent(item.passengers)}.%0A` +
      `¿Podrían brindarme información y disponibilidad?`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <div className="page-view-fleet">
      <SEO 
        title="Nuestra Flota de Vehículos Turísticos en Cusco | Condori Expedition"
        description="Conoce nuestra flota de transporte privado en Cusco: Sedanes, SUVs 4x4, MiniVans familiares y Sprinter Mercedes-Benz. Equipadas con balón de oxígeno y SOAT turístico."
        canonical="/flota"
        keywords="flota turistica Cusco, alquiler van con chofer Cusco, sprinter Cusco, minivan turistica Cusco, transporte privado cusco"
      />

      {/* Page Header */}

      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/sprinter.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">FLOTA TURÍSTICA MODERNA</span>
          <h1>Nuestra Flota de Transporte Privado en Cusco</h1>
          <p className="page-hero-sub">
            Vehículos propios y homologados por el MTC, con tracción andina, mantenimiento riguroso y equipamiento de seguridad para viajar con total confort por el Valle Sagrado y Cusco.
          </p>
        </div>
      </section>

      <div className="container py-content">
        {/* Barra de Filtros Doble: Por Tipo y Por Número de Pasajeros */}
        <div className="fleet-filters-container">
          <div className="filter-row">
            <span className="filter-row-title"><Car size={16} /> Filtrar por Tipo de Vehículo:</span>
            <div className="filter-buttons-group">
              <button 
                type="button" 
                className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedType('all')}
              >
                Todos
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
            <span className="filter-row-title"><Users size={16} /> Filtrar por Número de Pasajeros:</span>
            <div className="filter-buttons-group">
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedPax('all')}
              >
                Cualquier grupo
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '1-3' ? 'active' : ''}`}
                onClick={() => setSelectedPax('1-3')}
              >
                1 - 3 Pasajeros
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '1-4' ? 'active' : ''}`}
                onClick={() => setSelectedPax('1-4')}
              >
                1 - 4 Pasajeros
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '4-7' ? 'active' : ''}`}
                onClick={() => setSelectedPax('4-7')}
              >
                4 - 7 Pasajeros
              </button>
              <button 
                type="button" 
                className={`filter-btn ${selectedPax === '8-15' ? 'active' : ''}`}
                onClick={() => setSelectedPax('8-15')}
              >
                8 - 15 Pasajeros (Grupal)
              </button>
            </div>
          </div>
        </div>

        {/* Grid de Vehículos */}
        <div className="fleet-catalog-grid">
          {filteredFleet.map((item) => (
            <div key={item.id} className="fleet-catalog-card">
              <div className="fleet-card-media">
                <img 
                  src={item.image} 
                  alt={`${item.name} - ${item.model} en Cusco`} 
                  loading="lazy" 
                  className="fleet-catalog-img" 
                />
                <span className="fleet-cat-badge">{item.tag}</span>
              </div>

              <div className="fleet-card-content">
                <h2 className="fleet-item-name">{item.name}</h2>
                <p className="fleet-item-model">{item.model}</p>

                <div className="fleet-specs-pills">
                  <div className="spec-pill">
                    <Users size={16} className="spec-icon" />
                    <strong>{item.passengers}</strong>
                  </div>
                  <div className="spec-pill">
                    <Luggage size={16} className="spec-icon" />
                    <strong>{item.luggage}</strong>
                  </div>
                </div>

                <div className="fleet-features-block">
                  <h4>Equipamiento & Seguridad a Bordo:</h4>
                  <ul className="fleet-features-list">
                    {item.features.map((feat, idx) => (
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
                    <span>Cotizar en este vehículo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFleet.length === 0 && (
          <div className="no-results-box">
            <p>No se encontraron unidades con los filtros seleccionados.</p>
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={() => { setSelectedType('all'); setSelectedPax('all'); }}
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {/* Nota Informativa sobre Equipaje */}
        <div className="fleet-luggage-advisory">
          <div className="advisory-icon"><Luggage size={26} /></div>
          <div>
            <h3>Consejo de Capacidad y Equipaje Andino</h3>
            <p>
              Para traslados con destino a la estación de tren de Ollantaytambo o Machu Picchu, recuerda que Inca Rail y Peru Rail aplican restricciones de equipaje de mano (5 kg por persona). Si llevas maletas grandes adicionales, recomendamos coordinar con nosotros el servicio de custodia o seleccionar una unidad con maletero de mayor capacidad (SUV o MiniVan).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
