import React, { useEffect, useState } from 'react';
import { Calendar, Users, MapPin, Car, ArrowRight, ShieldCheck, Star, Clock, Award } from 'lucide-react';
import { translations } from '../data/translations';
import { originsList, destinationsList, routesData } from '../data/routesData';

const heroImages = [
  '/images/hero.jpg',
  '/images/7colores.jpg',
  '/images/queswachaca.jpg',
  '/images/suv.jpg',
  '/images/machupiccho.jpg',
];

export default function Hero({ lang }) {
  const t = translations[lang].hero;

  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [origin, setOrigin] = useState(originsList[0]);
  const [destination, setDestination] = useState(destinationsList[1]);
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState(2);
  const [vehicle, setVehicle] = useState('suv');

  useEffect(() => {
    const imageInterval = window.setInterval(() => {
      setActiveHeroImage((currentImage) => (currentImage + 1) % heroImages.length);
    }, 6000);

    return () => window.clearInterval(imageInterval);
  }, []);

  // Estimate price
  const matchedRoute = routesData.find(
    r => (r.origin.includes(origin) || origin.includes(r.origin)) &&
         (r.destination.includes(destination) || destination.includes(r.destination))
  );

  const basePrice = matchedRoute ? matchedRoute.prices[vehicle] : (vehicle === 'sedan' ? 40 : vehicle === 'suv' ? 55 : vehicle === 'minivan' ? 75 : 110);

  const handleWhatsAppQuote = (e) => {
    e.preventDefault();
    const msg = `Hola Condori Expedition Transport! 🚗%0A` +
      `Me gustaría cotizar el siguiente traslado privado:%0A` +
      `📍 Origen: ${origin}%0A` +
      `🏁 Destino: ${destination}%0A` +
      `📅 Fecha: ${date || 'Por confirmar'}%0A` +
      `👥 Pasajeros: ${passengers}%0A` +
      `🚘 Vehículo: ${vehicle.toUpperCase()}%0A` +
      `💵 Estímado mostrado: $${basePrice} USD%0A` +
      `Quedo a la espera de confirmación. ¡Muchas gracias!`;
    window.open(`https://wa.me/51967040149?text=${msg}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-overlay" />
      {heroImages.map((image, index) => (
        <img
          key={`${image}-${index}`}
          src={image}
          alt=""
          aria-hidden="true"
          className={`hero-bg-img ${index === activeHeroImage ? 'active' : ''}`}
        />
      ))}

      <div className="hero-content container">
        <div className="hero-grid">
          {/* Left Text Column */}
          <div className="hero-text-col">
            <div className="hero-tag-badge">
              <Award size={16} /> {t.tag}
            </div>
            
            <h1 className="hero-title">{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>

            <div className="hero-stats-grid">
              <div className="stat-card">
                <div className="stat-value">{t.stat1}</div>
                <div className="stat-sub">{t.stat1Sub}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value"><Star size={18} fill="#f59e0b" color="#f59e0b" className="icon-inline" /> 5.0</div>
                <div className="stat-sub">{t.stat2Sub}</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{t.stat3}</div>
                <div className="stat-sub">{t.stat3Sub}</div>
              </div>
            </div>
          </div>

          {/* Right Instant Calculator Form */}
          <div className="hero-form-col">
            <div className="hero-calc-card">
              <div className="calc-header">
                <h3>{t.calculatorTitle}</h3>
                <span className="calc-sub-badge">Precios Transparentes • Sin intermediarios</span>
              </div>

              <form onSubmit={handleWhatsAppQuote} className="calc-form">
                <div className="form-group">
                  <label><MapPin size={16} /> {t.origin}</label>
                  <select value={origin} onChange={(e) => setOrigin(e.target.value)}>
                    {originsList.map((o, idx) => (
                      <option key={idx} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label><MapPin size={16} /> {t.destination}</label>
                  <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                    {destinationsList.map((d, idx) => (
                      <option key={idx} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label><Calendar size={16} /> {t.date}</label>
                    <input 
                      type="date" 
                      value={date} 
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label><Users size={16} /> {t.passengers}</label>
                    <select value={passengers} onChange={(e) => setPassengers(Number(e.target.value))}>
                      {[1,2,3,4,5,6,7,8,9,10,12,15,19].map(num => (
                        <option key={num} value={num}>{num} pax</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label><Car size={16} /> {t.vehicleType}</label>
                  <div className="vehicle-pills">
                    <button 
                      type="button" 
                      className={`pill-btn ${vehicle === 'sedan' ? 'active' : ''}`}
                      onClick={() => setVehicle('sedan')}
                    >
                      Sedán (1-3)
                    </button>
                    <button 
                      type="button" 
                      className={`pill-btn ${vehicle === 'suv' ? 'active' : ''}`}
                      onClick={() => setVehicle('suv')}
                    >
                      SUV/Minivan (4-7)
                    </button>
                    <button 
                      type="button" 
                      className={`pill-btn ${vehicle === 'sprinter' ? 'active' : ''}`}
                      onClick={() => setVehicle('sprinter')}
                    >
                      Sprinter (8-15)
                    </button>
                  </div>
                </div>

                <div className="calc-price-display">
                  <div className="price-label">Precio Aproximado:</div>
                  <div className="price-amount">${basePrice} <span className="currency">USD</span></div>
                </div>

                <p className="calc-note">
                  <ShieldCheck size={14} className="icon-inline" /> {t.perVehicleNote}
                </p>

                <button type="submit" className="btn-calc-submit">
                  <span>{t.btnQuote}</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
