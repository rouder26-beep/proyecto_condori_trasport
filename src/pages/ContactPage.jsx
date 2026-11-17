import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { faqData } from '../data/faqData';
import { translations } from '../data/translations';

export default function ContactPage() {
  const { lang } = useOutletContext();
  const t = translations[lang]?.contact || translations.es.contact;

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const previewFaqs = faqData.slice(0, 3);
  const waDirectHref = `https://wa.me/51910958898?text=${encodeURIComponent(t.waDirectMsg)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '51910958898';
    const message = encodeURIComponent(
      `${t.waFormIntro}\n` +
      `${t.waFormName}: ${formState.name}\n` +
      `Email: ${formState.email}\n` +
      `${t.waFormPhone}: ${formState.phone}\n` +
      `${t.waFormQuery}:\n${formState.message}`
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
          <span className="page-hero-badge">{t.heroBadge}</span>
          <h1>{t.heroTitle}</h1>
          <p className="page-hero-sub">
            {t.heroSub}
          </p>
        </div>
      </section>

      <div className="container py-content">
        <div className="contact-main-grid">
          {/* Columna de Información Directa */}
          <div className="contact-info-col">
            <div className="contact-details-box">
              <h3>{t.channelsTitle}</h3>
              <p className="contact-intro">{t.channelsIntro}</p>

              <div className="contact-cards-list">
                <a 
                  href={waDirectHref} 
                  target="_blank" 
                  rel="noreferrer"
                  className="contact-touch-card ws-touch"
                >
                  <div className="touch-icon"><MessageCircle size={24} /></div>
                  <div className="touch-info">
                    <strong>{t.cardWaTitle}</strong>
                    <span className="touch-val">+51 910 958 898</span>
                    <span className="touch-sub">{t.cardWaSub}</span>
                  </div>
                </a>

                <a href="tel:+51910958898" className="contact-touch-card">
                  <div className="touch-icon"><Phone size={24} /></div>
                  <div className="touch-info">
                    <strong>{t.cardPhoneTitle}</strong>
                    <span className="touch-val">+51 910 958 898</span>
                    <span className="touch-sub">{t.cardPhoneSub}</span>
                  </div>
                </a>

                <a href="mailto:condoriexpedition@gmail.com" className="contact-touch-card">
                  <div className="touch-icon"><Mail size={24} /></div>
                  <div className="touch-info">
                    <strong>{t.cardEmailTitle}</strong>
                    <span className="touch-val">condoriexpedition@gmail.com</span>
                    <span className="touch-sub">{t.cardEmailSub}</span>
                  </div>
                </a>

                <div className="contact-touch-card no-link">
                  <div className="touch-icon"><Clock size={24} /></div>
                  <div className="touch-info">
                    <strong>{t.cardHoursTitle}</strong>
                    <span className="touch-val">{t.cardHoursVal}</span>
                    <span className="touch-sub">{t.cardHoursSub}</span>
                  </div>
                </div>

                <div className="contact-touch-card no-link">
                  <div className="touch-icon"><MapPin size={24} /></div>
                  <div className="touch-info">
                    <strong>{t.cardLocationTitle}</strong>
                    <span className="touch-val">{t.directAddress}</span>
                    <span className="touch-sub">Grupo Condori RYD SAC • RUC: 20616421744</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna de Formulario */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3>{t.formTitle}</h3>
              <p>{t.formSub}</p>

              {submitted && (
                <div className="form-success-banner">
                  {t.formSuccessBanner}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form-elements">
                <div className="form-group">
                  <label htmlFor="contact-name">{t.nameLabel}</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    placeholder={t.namePlaceholder} 
                    required 
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-email">{t.emailLabel}</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      placeholder={t.emailPlaceholder} 
                      required 
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">{t.phoneLabel}</label>
                    <input 
                      id="contact-phone"
                      type="tel" 
                      placeholder={t.phonePlaceholder} 
                      required 
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">{t.messageLabel}</label>
                  <textarea 
                    id="contact-message"
                    rows="4" 
                    placeholder={t.messagePlaceholder} 
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-contact-submit">
                  <Send size={18} />
                  <span>{t.btnSubmit}</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Mapa y Ubicación en Cusco */}
        <div className="contact-map-section">
          <div className="section-header center">
            <span className="section-tag"><MapPin size={14} className="icon-inline" /> {t.mapTag}</span>
            <h2>{t.mapTitle}</h2>
            <p>{t.mapSub}</p>
          </div>

          <div className="map-frame-box">
            <iframe
              title={t.mapIframeTitle}
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
            <span className="section-tag"><HelpCircle size={14} className="icon-inline" /> {t.faqTag}</span>
            <h2>{t.faqTitle}</h2>
            <p>{t.faqSub}</p>
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
              <span>{t.btnAllFaqs}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
