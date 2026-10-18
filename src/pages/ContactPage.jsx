import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { faqData } from '../data/faqData';

export default function ContactPage() {
  const { lang } = useOutletContext();


  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // 3 preguntas frecuentes para la sección de dudas en contacto
  const previewFaqs = faqData.slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '51910958898';
    const message = encodeURIComponent(
      `Hola Condori Expedition Transport! 🚗%0A` +
      `Nombre: ${formState.name}%0A` +
      `Email: ${formState.email}%0A` +
      `Teléfono: ${formState.phone}%0A` +
      `Consulta:%0A${formState.message}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="page-view-contact">
      <SEO 
        title="Contacto y Reservas 24/7 | Condori Expedition Transport Cusco"
        description="Contáctanos para reservar tu traslado privado o tour en Cusco. WhatsApp +51 910 958 898, oficina en San Sebastián y atención directa 24 horas."
        canonical="/contacto"
        keywords="contacto transporte cusco, telefono taxi cusco, whatsapp traslado aeropuerto cusco, direccion condori expedition"
      />

      {/* Page Header */}

      <section className="page-hero-banner" style={{'--page-hero-img': "url('/images/queswachaca.jpg')"}}>
        <div className="container">
          <span className="page-hero-badge">ATENCIÓN PERSONALIZADA 24/7</span>
          <h1>Contáctanos y Planifica tu Viaje por Cusco</h1>
          <p className="page-hero-sub">
            Estamos listos para coordinar tus traslados, resolver inquietudes sobre altitud y trenes, y armar tu itinerario ideal sin intermediarios.
          </p>
        </div>
      </section>

      <div className="container py-content">
        <div className="contact-main-grid">
          {/* Columna de Información Directa */}
          <div className="contact-info-col">
            <div className="contact-details-box">
              <h3>Canales de Atención Directa</h3>
              <p className="contact-intro">Escríbenos o llámanos a cualquier hora; nuestro equipo de guardia responderá de inmediato.</p>

              <div className="contact-cards-list">
                <a 
                  href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20deseo%20informaci%C3%B3n." 
                  target="_blank" 
                  rel="noreferrer"
                  className="contact-touch-card ws-touch"
                >
                  <div className="touch-icon"><MessageCircle size={24} /></div>
                  <div className="touch-info">
                    <strong>WhatsApp 24/7 (Respuesta Rápida)</strong>
                    <span className="touch-val">+51 910 958 898</span>
                    <span className="touch-sub">Canal prioritario de reservas</span>
                  </div>
                </a>

                <a href="tel:+51910958898" className="contact-touch-card">
                  <div className="touch-icon"><Phone size={24} /></div>
                  <div className="touch-info">
                    <strong>Llamadas Directas</strong>
                    <span className="touch-val">+51 910 958 898</span>
                    <span className="touch-sub">Atención en español e inglés</span>
                  </div>
                </a>

                <a href="mailto:condoriexpedition@gmail.com" className="contact-touch-card">
                  <div className="touch-icon"><Mail size={24} /></div>
                  <div className="touch-info">
                    <strong>Correo Electrónico</strong>
                    <span className="touch-val">condoriexpedition@gmail.com</span>
                    <span className="touch-sub">Cotizaciones y facturación corporativa</span>
                  </div>
                </a>

                <div className="contact-touch-card no-link">
                  <div className="touch-icon"><Clock size={24} /></div>
                  <div className="touch-info">
                    <strong>Horarios de Atención</strong>
                    <span className="touch-val">Operaciones & Traslados: 24 Horas / 7 Días</span>
                    <span className="touch-sub">Oficina comercial: 06:00 a 22:00</span>
                  </div>
                </div>

                <div className="contact-touch-card no-link">
                  <div className="touch-icon"><MapPin size={24} /></div>
                  <div className="touch-info">
                    <strong>Ubicación de Oficina</strong>
                    <span className="touch-val">San Antonio - San Sebastián, Cusco, Perú</span>
                    <span className="touch-sub">Grupo Condori RYD SAC • RUC: 20616421744</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Formulario */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3>Envíanos un Mensaje</h3>
              <p>Completa tus datos y te responderemos por WhatsApp o correo en minutos.</p>

              {submitted && (
                <div className="form-success-banner">
                  ¡Mensaje preparado con éxito! Abriendo chat de WhatsApp para confirmación inmediata.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-elements">
                <div className="form-group">
                  <label htmlFor="contact-name">Nombre y Apellido *</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    placeholder="Ej. Juan Pérez" 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-email">Correo Electrónico *</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      placeholder="nombre@email.com" 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">WhatsApp / Teléfono *</label>
                    <input 
                      id="contact-phone"
                      type="tel" 
                      placeholder="+51 999 999 999" 
                      required 
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">¿Qué traslado o tour necesitas coordinar? *</label>
                  <textarea 
                    id="contact-message"
                    rows="4" 
                    placeholder="Indícanos fecha tentativa, número de pasajeros y destinos de tu interés..." 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-contact-submit">
                  <Send size={18} />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa y Ubicación en Cusco */}
        <div className="contact-map-section">
          <div className="section-header center">
            <span className="section-tag"><MapPin size={14} className="icon-inline" /> SEDE CUSCO</span>
            <h2>Nuestra Ubicación en Cusco</h2>
            <p>Estratégicamente ubicados cerca de las principales avenidas y del Aeropuerto Internacional Alejandro Velasco Astete (CUZ).</p>
          </div>

          <div className="map-frame-box">
            <iframe
              title="Ubicación Condori Expedition Transport Cusco"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15516.299066632668!2d-71.940733!3d-13.532353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e537d94562fa5%3A0x600c3b88b488796!2sSan%20Sebasti%C3%A1n%2C%20Cusco%2C%20Per%C3%BA!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Sección de Preguntas Frecuentes en Contacto */}
        <div className="contact-faqs-preview">
          <div className="section-header center">
            <span className="section-tag"><HelpCircle size={14} className="icon-inline" /> DUDAS RÁPIDAS</span>
            <h2>Preguntas Frecuentes Antes de Contactarnos</h2>
            <p>Aquí respondemos a las consultas más comunes de nuestros viajeros.</p>
          </div>

          <div className="faqs-simple-grid">
            {previewFaqs.map((faq, index) => (
              <div key={index} className="faq-simple-card">
                <h4>{faq.question[lang] || faq.question.es}</h4>
                <p>{faq.answer[lang] || faq.answer.es}</p>
              </div>
            ))}
          </div>

          <div className="section-cta-center">
            <Link to="/preguntas-frecuentes" className="btn-cta-secondary">
              <span>Ver todas las preguntas frecuentes (pagos, equipaje, altitud)</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
