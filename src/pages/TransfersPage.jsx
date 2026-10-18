import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Clock, MessageCircle, Search, Car, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { routesData } from '../data/routesData';
import BookingCalculator from '../components/BookingCalculator';

export default function TransfersPage() {
  const { lang } = useOutletContext();



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
    const msg = `Hola Condori Expedition Transport! 🚗%0A` +
      `Deseo reservar el siguiente traslado privado:%0A` +
      `📌 Ruta: ${encodeURIComponent(route.origin)} → ${encodeURIComponent(route.destination)}%0A` +
      `⏱️ Duración aproximada: ${encodeURIComponent(route.duration)}%0A` +
      `🚘 Vehículo: ${encodeURIComponent(vehicleLabels[vehicleType] || vehicleType.toUpperCase())}%0A` +
      `💵 Tarifa fija: $${price} USD (Precio por vehículo)%0A` +
      `Por favor confirmar disponibilidad.`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  const filteredRoutes = routesData.filter((route) => {
    const query = searchTerm.toLowerCase();
    const matchesSearch = route.origin.toLowerCase().includes(query) || route.destination.toLowerCase().includes(query);
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
          <span className="page-hero-badge">TARIFAS FORMALES Y TRANSPARENTES</span>
          <h1>Tarifario Completo de Traslados Privados en Cusco</h1>
          <p className="page-hero-sub">
            Precios fijos por vehículo completo (no por persona). Incluye chofer profesional bilingüe/local, combustible, peajes y asistencia 24/7.
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
              <strong>Sedan – SUV (1-3 Pax)</strong>
              <span>Hasta 3 maletas. Ideal para parejas, viajes de negocios y rutas andinas.</span>
            </div>
          </div>
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>MiniVan (4-6 Pax)</strong>
              <span>Hasta 6 maletas. Espacio amplio para familias y grupos medianos.</span>
            </div>
          </div>
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>Mercedes-Benz 10 Pax</strong>
              <span>Vehículo ejecutivo de alta gama para grupos medianos-grandes.</span>
            </div>
          </div>
          <div className="guide-card">
            <Car size={20} className="guide-icon" />
            <div>
              <strong>Mercedes-Benz 15 Pax</strong>
              <span>Máxima capacidad y confort turístico para grupos grandes.</span>
            </div>
          </div>
        </div>

        {/* Buscador y Filtros */}
        <div className="transfers-filter-bar">
          <div className="search-input-box">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar por origen o destino (ej. Aeropuerto, Ollantaytambo, Urubamba)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Buscar rutas de traslado"
            />
          </div>

          <div className="filter-buttons-group">
            <button 
              type="button" 
              className={`filter-btn ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => setFilterType('all')}
            >
              Todas las rutas ({routesData.length})
            </button>
            <button 
              type="button" 
              className={`filter-btn ${filterType === 'popular' ? 'active' : ''}`}
              onClick={() => setFilterType('popular')}
            >
              Más solicitadas
            </button>
          </div>
        </div>

        {/* Tabla completa de tarifas */}
        <div className="routes-table-wrap">
          <table className="routes-table">
            <thead>
              <tr>
                <th>Ruta</th>
                <th>Duración</th>
                <th>Sedan–SUV (3 pax)</th>
                <th>Minivan (6 pax)</th>
                <th>Mercedes-Benz 10 pax</th>
                <th>Mercedes-Benz 15 pax</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filteredRoutes.map((route) => (
                <tr key={route.id} className={route.popular ? 'row-popular' : ''}>
                  <td className="cell-route">
                    <div className="route-names">
                      <strong className="route-origin">{route.origin}</strong>
                      <span className="route-arrow">→</span>
                      <strong className="route-dest">{route.destination}</strong>
                    </div>
                    <div style={{display:'flex', gap:'6px', flexWrap:'wrap', marginTop:'4px'}}>
                      {route.popular && <span className="badge-popular">Ruta más solicitada</span>}
                      <span className="badge-one-way">Solo ida</span>
                    </div>
                  </td>

                  <td className="cell-duration">
                    <span className="duration-tag"><Clock size={14} /> {route.duration}</span>
                  </td>

                  {/* Sedan–SUV (destacado naranja) */}
                  <td className="cell-price">
                    <div className="price-box highlight">
                      <span className="amount">${route.prices.sedanSuv} USD</span>
                      <button 
                        type="button"
                        className="btn-small-ws" 
                        onClick={() => handleBookRoute(route, 'sedanSuv')}
                        title="Reservar en Sedan–SUV"
                      >
                        Reservar
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
                        title="Reservar en MiniVan"
                      >
                        Reservar
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
                        title="Reservar en Mercedes-Benz 10pax"
                      >
                        Reservar
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
                        title="Reservar en Mercedes-Benz 15pax"
                      >
                        Reservar
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
                      <MessageCircle size={16} /> Cotizar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRoutes.length === 0 && (
          <div className="no-results-box">
            <p>No se encontraron rutas con el término "{searchTerm}".</p>
            <button type="button" className="btn-secondary" onClick={() => setSearchTerm('')}>
              Ver todas las rutas
            </button>
          </div>
        )}

        {/* Disclaimer y Garantías */}
        <div className="transfers-guarantee-grid">
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>Precio por Vehículo Completo</strong>
              <p>El valor mostrado no es por pasajero; cubre toda la unidad para tu grupo exclusivo.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>Todo Incluido</strong>
              <p>Incluye combustible, peajes, estacionamiento de aeropuerto y chofer profesional.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>Seguimiento de Vuelo Sin Recargo</strong>
              <p>Monitoreamos tu número de vuelo en tiempo real; si se atrasa, te esperamos sin cobro extra.</p>
            </div>
          </div>
          <div className="guarantee-item">
            <CheckCircle2 size={18} className="guar-icon" />
            <div>
              <strong>Balón de Oxígeno a Bordo</strong>
              <p>Asistencia medicinal preventiva para evitar y aliviar el mal de altura (soroche).</p>
            </div>
          </div>
        </div>

        {/* Sección de Calculador interactivo para rutas personalizadas */}
        <div className="transfers-calc-block">
          <div className="section-header center">
            <span className="section-tag">¿TU RUTA O DESTINO NO ESTÁ EN LA TABLA?</span>
            <h2>Calcula o Cotiza tu Traslado a Medida</h2>
            <p>Selecciona tu fecha y vehículo o escríbenos directamente con tu itinerario.</p>
          </div>
          <div className="calc-center-wrap">
            <BookingCalculator lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
