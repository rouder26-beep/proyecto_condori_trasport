import React, { useState } from 'react';
import { Calendar, Users, MapPin, Car, ArrowRight, ShieldCheck, Mail, Clock, Plane, Luggage, ChevronDown, ChevronUp } from 'lucide-react';
import { translations } from '../data/translations';
import { originsList, originsListI18n, destinationsList, destinationsListI18n, routesData } from '../data/routesData';

export default function BookingCalculator({ lang }) {
  const t = translations[lang]?.hero || translations.es.hero;

  const [originIdx, setOriginIdx] = useState(0);
  const [destIdx, setDestIdx] = useState(1);
  const [date, setDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [vehicle, setVehicle] = useState('suv');
  const [optionalOpen, setOptionalOpen] = useState(false);

  const esOrigin = originsList[originIdx] || originsList[0];
  const esDest = destinationsList[destIdx] || destinationsList[1];
  const displayOrigins = originsListI18n[lang] || originsListI18n.es;
  const displayDestinations = destinationsListI18n[lang] || destinationsListI18n.es;
  const displayOrigin = displayOrigins[originIdx] || esOrigin;
  const displayDest = displayDestinations[destIdx] || esDest;

  // Helper para normalizar y buscar coincidencias entre origen y destino (usando la clave en ES)
  const normalize = (str) =>
    (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  const normOrigin = normalize(esOrigin);
  const normDest = normalize(esDest);

  const matchedRoute = routesData.find(r => {
    const rOrig = normalize(r.origin);
    const rDest = normalize(r.destination);

    const originMatches =
      rOrig.includes(normOrigin) ||
      normOrigin.includes(rOrig) ||
      (normOrigin.includes('aeropuerto') && rOrig.includes('aeropuerto')) ||
      ((normOrigin.includes('hotel') || normOrigin.includes('cusco')) && (rOrig.includes('hotel') || rOrig.includes('cusco')));

    const destMatches =
      rDest.includes(normDest) ||
      normDest.includes(rDest) ||
      (normDest.includes('ollantaytambo') && rDest.includes('ollantaytambo')) ||
      (normDest.includes('urubamba') && rDest.includes('urubamba')) ||
      (normDest.includes('poroy') && rDest.includes('poroy')) ||
      (normDest.includes('hidroelectrica') && rDest.includes('hidroelectrica')) ||
      (normDest.includes('puno') && rDest.includes('puno')) ||
      (normDest.includes('pisac') && rDest.includes('pisac')) ||
      (normDest.includes('vinicunca') && rDest.includes('vinicunca')) ||
      (normDest.includes('humantay') && rDest.includes('humantay')) ||
      ((normDest.includes('hotel') || normDest.includes('centro')) && (rDest.includes('hotel') || rDest.includes('centro')));

    return originMatches && destMatches;
  });

  const vehicleOptions = [
    { id: 'sedan', label: 'Sedan', capacity: '1-3 Pax', luggage: t.luggage2 || '2 maletas' },
    { id: 'suv', label: 'SUV', capacity: '1-4 Pax', luggage: t.luggage3 || '3 maletas' },
    { id: 'minivan', label: 'MiniVan', capacity: '4-7 Pax', luggage: t.luggage6 || '6 maletas' },
    { id: 'sprinter10', label: 'Sprinter 10pax', capacity: '8-10 Pax', luggage: t.luggageGroup || 'Equipaje grupal' },
    { id: 'sprinter15', label: 'Sprinter 15pax', capacity: '11-15 Pax', luggage: t.luggageGroup || 'Equipaje grupal' },
  ];

  const defaultBasePrices = {
    sedan: 60,
    suv: 60,
    minivan: 70,
    sprinter10: 100,
    sprinter15: 130,
  };

  const getPriceForVehicle = (route, vehicleKey) => {
    if (!route || !route.prices) return defaultBasePrices[vehicleKey] || 60;
    if (vehicleKey === 'sedan' || vehicleKey === 'suv') {
      return route.prices.sedanSuv ?? route.prices.sedan ?? route.prices.suv ?? 60;
    }
    return route.prices[vehicleKey] ?? defaultBasePrices[vehicleKey] ?? 60;
  };

  const basePrice = matchedRoute
    ? getPriceForVehicle(matchedRoute, vehicle)
    : (defaultBasePrices[vehicle] || 60);

  const activeVehicleObj = vehicleOptions.find(v => v.id === vehicle) || vehicleOptions[1];
  const vehicleLabelFull = `${activeVehicleObj.label} (${activeVehicleObj.capacity})`;

  const emailSubject = encodeURIComponent(`${t.emailSubject} - ${displayOrigin} → ${displayDest}`);
  const emailBody = encodeURIComponent(
    `${t.emailBodyIntro}\n\n` +
    `📍 ${t.origin}: ${displayOrigin}\n` +
    `🏁 ${t.destination}: ${displayDest}\n` +
    `📅 ${t.date}: ${date || t.dateToConfirm}\n` +
    `⏰ ${t.pickupTimeLabel}: ${pickupTime || t.notSpecifiedFem}\n` +
    `✈️ ${t.flightNumberLabel}: ${flightNumber || t.notSpecified}\n` +
    `👥 ${t.passengers}: ${passengers}\n` +
    `🚘 ${t.vehicleType}: ${vehicleLabelFull}\n` +
    `💵 ${t.estimatedPrice} $${basePrice} USD (${t.perVehicleLabel})\n\n` +
    `${t.emailBodyIncludes}\n`
  );
  const emailQuoteHref = `mailto:condoriexpedition@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const handleWhatsAppQuote = (e) => {
    e.preventDefault();
    const flightInfo = flightNumber ? `%0A✈️ ${encodeURIComponent(t.flightNumberLabel)}: ${encodeURIComponent(flightNumber)}` : '';
    const timeInfo = pickupTime ? `%0A⏰ ${encodeURIComponent(t.pickupTimeLabel)}: ${encodeURIComponent(pickupTime)}` : '';
    const msg = `${encodeURIComponent(t.waQuoteIntro)}%0A` +
      `${encodeURIComponent(t.waQuoteSub)}%0A` +
      `📍 ${encodeURIComponent(t.origin)}: ${encodeURIComponent(displayOrigin)}%0A` +
      `🏁 ${encodeURIComponent(t.destination)}: ${encodeURIComponent(displayDest)}%0A` +
      `📅 ${encodeURIComponent(t.date)}: ${encodeURIComponent(date || t.dateToConfirm)}${timeInfo}${flightInfo}%0A` +
      `👥 ${encodeURIComponent(t.passengers)}: ${passengers}%0A` +
      `🚘 ${encodeURIComponent(t.vehicleType)}: ${encodeURIComponent(vehicleLabelFull)}%0A` +
      `💵 ${encodeURIComponent(t.estimatedPrice)} $${basePrice} USD (${encodeURIComponent(t.perVehicleLabel)})%0A` +
      `${encodeURIComponent(t.waQuoteOutro)}`;
    window.open(`https://wa.me/51910958898?text=${msg}`, '_blank');
  };

  return (
    <div className="hero-calc-card unified-calculator" id="calculador-traslado">
      <div className="calc-header">
        <h3>{t.calculatorTitle}</h3>
        <p className="calc-header-subtitle">{t.calculatorSub}</p>
      </div>

      {/* Trust badges — solo 2, en una línea */}
      <div className="calc-trust-badges">
        <span className="badge-pill"><ShieldCheck size={13} /> {t.noMiddlemen}</span>
        <span className="badge-pill"><Car size={13} /> {t.localDrivers}</span>
      </div>

      <form onSubmit={handleWhatsAppQuote} className="calc-form">
        <div className="form-group">
          <label htmlFor="calc-origin"><MapPin size={15} /> {t.origin}</label>
          <select
            id="calc-origin"
            value={originIdx}
            onChange={(e) => setOriginIdx(Number(e.target.value))}
          >
            {displayOrigins.map((o, idx) => (
              <option key={idx} value={idx}>{o}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="calc-destination"><MapPin size={15} /> {t.destination}</label>
          <select
            id="calc-destination"
            value={destIdx}
            onChange={(e) => setDestIdx(Number(e.target.value))}
          >
            {displayDestinations.map((d, idx) => (
              <option key={idx} value={idx}>{d}</option>
            ))}
          </select>
        </div>

        <div className="form-row-2">
          <div className="form-group">
            <label htmlFor="calc-date"><Calendar size={15} /> {t.date}</label>
            <input
              id="calc-date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="calc-passengers"><Users size={15} /> {t.passengers}</label>
            <select
              id="calc-passengers"
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 19].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? t.passengerSingular : t.passengerPlural}
                </option>
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
          {t.addOptional}
        </button>

        {optionalOpen && (
          <div className="form-row-2 optional-row">
            <div className="form-group">
              <label htmlFor="calc-time">
                <Clock size={14} /> {t.pickupTimeLabel}
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
                <Plane size={14} /> {t.flightNumberLabel}
              </label>
              <input
                id="calc-flight"
                type="text"
                placeholder={t.flightPlaceholder}
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="form-group">
          <label><Car size={15} /> {t.vehicleType}</label>
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
          <Luggage size={13} className="icon-inline" /> <strong>{activeVehicleObj.luggage}</strong> {t.recommended}
        </div>

        {/* Precio — sin recuadro verde */}
        <div className="calc-price-display unified-price">
          <div className="price-label">{t.estimatedPrice}</div>
          <div className="price-amount">
            ${basePrice} <span className="currency">USD</span>
            <span className="price-per-vehicle">{t.perVehicleLabel}</span>
          </div>
        </div>

        <button type="submit" className="btn-calc-submit">
          <span>{t.btnQuote}</span>
          <ArrowRight size={17} />
        </button>

        <a href={emailQuoteHref} className="btn-calc-email">
          <Mail size={15} />
          <span>{t.btnEmailQuote}</span>
        </a>
      </form>
    </div>
  );
}
