import React, { useState } from 'react';
import { Calendar, Users, MapPin, Car, ArrowRight, ShieldCheck, Mail, Clock, Plane, Luggage, ChevronDown, ChevronUp } from 'lucide-react';
import { translations } from '../data/translations';
import { originsList, destinationsList, routesData } from '../data/routesData';

export default function BookingCalculator({ lang }) {
  const t = translations[lang]?.hero || translations.es.hero;

  const [origin, setOrigin] = useState(originsList[0] || 'Aeropuerto Cusco (CUZ)');
  const [destination, setDestination] = useState(destinationsList[1] || 'Ollantaytambo Estación');
  const [date, setDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [vehicle, setVehicle] = useState('suv');
  const [optionalOpen, setOptionalOpen] = useState(false);

  // Estimate price — no se toca la lógica de precios
  const matchedRoute = routesData.find(
    r => (r.origin.toLowerCase().includes(origin.toLowerCase()) || origin.toLowerCase().includes(r.origin.toLowerCase())) &&
         (r.destination.toLowerCase().includes(destination.toLowerCase()) || destination.toLowerCase().includes(r.destination.toLowerCase()))
  );

  const vehicleOptions = [
    { id: 'sedan', label: 'Sedan', capacity: '1-3 Pax', luggage: '2 maletas' },
    { id: 'suv', label: 'SUV', capacity: '1-4 Pax', luggage: '3 maletas' },
    { id: 'minivan', label: 'MiniVan', capacity: '4-7 Pax', luggage: '6 maletas' },
    { id: 'sprinter10', label: 'Sprinter 10pax', capacity: '8-10 Pax', luggage: 'Equipaje grupal' },
    { id: 'sprinter15', label: 'Sprinter 15pax', capacity: '11-15 Pax', luggage: 'Equipaje grupal' },
  ];

  const defaultBasePrices = {
    sedan: 40,
    suv: 55,
    minivan: 70,
    sprinter10: 100,
    sprinter15: 120,
  };

  const basePrice = matchedRoute
    ? (matchedRoute.prices[vehicle] || matchedRoute.prices.sedan)
    : (defaultBasePrices[vehicle] || 55);

  const activeVehicleObj = vehicleOptions.find(v => v.id === vehicle) || vehicleOptions[1];
  const vehicleLabelFull = `${activeVehicleObj.label} (${activeVehicleObj.capacity})`;

  // "por vehículo" en 3 idiomas
  const perVehicleLabel = { es: 'por vehículo', en: 'per vehicle', pt: 'por veículo' }[lang] || 'por vehículo';
  // "+ Agregar hora y vuelo" en 3 idiomas
  const addOptionalLabel = {
    es: '+ Agregar hora y vuelo (opcional)',
    en: '+ Add pickup time & flight (optional)',
    pt: '+ Adicionar hora e voo (opcional)',
  }[lang] || '+ Agregar hora y vuelo (opcional)';

  const emailSubject = encodeURIComponent(`Cotización de traslado privado - ${origin} a ${destination}`);
  const emailBody = encodeURIComponent(
    `Solicitud de Traslado Privado en Cusco:\n\n` +
    `📍 Origen: ${origin}\n` +
    `🏁 Destino: ${destination}\n` +
    `📅 Fecha: ${date || 'Por confirmar'}\n` +
    `⏰ Hora de recogida: ${pickupTime || 'No especificada'}\n` +
    `✈️ N° Vuelo: ${flightNumber || 'No especificado'}\n` +
    `👥 Pasajeros: ${passengers}\n` +
    `🚘 Vehículo: ${vehicleLabelFull}\n` +
    `💵 Tarifa estimada: $${basePrice} USD (Precio por vehículo completo)\n\n` +
    `Incluye: Combustible, peajes y chofer profesional.\n`
  );
  const emailQuoteHref = `mailto:condoriexpedition@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const handleWhatsAppQuote = (e) => {
    e.preventDefault();
    const flightInfo = flightNumber ? `%0A✈️ N° Vuelo: ${encodeURIComponent(flightNumber)}` : '';
    const timeInfo = pickupTime ? `%0A⏰ Hora de recogida: ${encodeURIComponent(pickupTime)}` : '';
    const msg = `Hola Condori Expedition Transport! 🚗%0A` +
      `Me gustaría cotizar el siguiente traslado privado:%0A` +
      `📍 Origen: ${encodeURIComponent(origin)}%0A` +
      `🏁 Destino: ${encodeURIComponent(destination)}%0A` +
      `📅 Fecha: ${date || 'Por confirmar'}${timeInfo}${flightInfo}%0A` +
      `👥 Pasajeros: ${passengers}%0A` +
      `🚘 Vehículo: ${encodeURIComponent(vehicleLabelFull)}%0A` +
      `💵 Precio por vehículo: $${basePrice} USD%0A` +
      `Quedo a la espera de confirmación y disponibilidad. ¡Muchas gracias!`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <div className="hero-calc-card unified-calculator" id="calculador-traslado">
      <div className="calc-header">
        <h3>Calcula tu Traslado al Instante</h3>
        <p className="calc-header-subtitle">Tarifas transparentes por vehículo completo</p>
      </div>

      {/* Trust badges — solo 2, en una línea */}
      <div className="calc-trust-badges">
        <span className="badge-pill"><ShieldCheck size={13} /> Sin intermediarios</span>
        <span className="badge-pill"><Car size={13} /> Conductores locales</span>
      </div>

      <form onSubmit={handleWhatsAppQuote} className="calc-form">
        <div className="form-group">
          <label htmlFor="calc-origin"><MapPin size={15} /> {t.origin || 'Lugar de Origen'}</label>
          <select
            id="calc-origin"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          >
            {originsList.map((o, idx) => (
              <option key={idx} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="calc-destination"><MapPin size={15} /> {t.destination || 'Destino'}</label>
          <select
            id="calc-destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            {destinationsList.map((d, idx) => (
              <option key={idx} value={d}>{d}</option>
            ))}
          </select>
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="calc-date"><Calendar size={15} /> {t.date || 'Fecha del viaje'}</label>
            <input
              id="calc-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="calc-passengers"><Users size={15} /> {t.passengers || 'Pasajeros'}</label>
            <select
              id="calc-passengers"
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 19].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'pasajero' : 'pasajeros'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Campos opcionales colapsables */}
        <button
          type="button"
          className="btn-optional-toggle"
          onClick={() => setOptionalOpen(o => !o)}
          aria-expanded={optionalOpen}
        >
          {optionalOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {addOptionalLabel}
        </button>

        {optionalOpen && (
          <div className="form-row-2 optional-row">
            <div className="form-group">
              <label htmlFor="calc-time">
                <Clock size={14} /> Hora recogida
              </label>
              <input
                id="calc-time"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="calc-flight">
                <Plane size={14} /> N° de vuelo
              </label>
              <input
                id="calc-flight"
                type="text"
                placeholder="Ej. LA 2012"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="form-group">
          <label><Car size={15} /> {t.vehicleType || 'Tipo de Vehículo'}</label>
          <div className="vehicle-pills vehicle-pills-detailed">
            {vehicleOptions.map((v) => (
              <button
                key={v.id}
                type="button"
                className={`pill-btn ${vehicle === v.id ? 'active' : ''}`}
                onClick={() => setVehicle(v.id)}
              >
                <span className="pill-name">{v.label}</span>
                <span className="pill-sub">{v.capacity}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Nota de equipaje compacta */}
        <div className="calc-luggage-notice">
          <Luggage size={13} className="icon-inline" /> <strong>{activeVehicleObj.luggage}</strong> recomendado
        </div>

        {/* Precio — sin recuadro verde */}
        <div className="calc-price-display unified-price">
          <div className="price-label">Tarifa estimada:</div>
          <div className="price-amount">
            ${basePrice} <span className="currency">USD</span>
            <span className="price-per-vehicle">{perVehicleLabel}</span>
          </div>
        </div>

        <button type="submit" className="btn-calc-submit">
          <span>Cotizar por WhatsApp</span>
          <ArrowRight size={17} />
        </button>

        <a href={emailQuoteHref} className="btn-calc-email">
          <Mail size={15} />
          <span>Cotizar por correo electrónico</span>
        </a>
      </form>
    </div>
  );
}
