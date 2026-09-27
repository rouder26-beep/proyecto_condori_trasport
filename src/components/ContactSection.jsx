import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, BookOpen, Clock } from 'lucide-react';
import { translations } from '../data/translations';

export default function ContactSection({ lang, onOpenReclamaciones }) {
  const t = translations[lang].contact;
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '51967040149';
    const message = encodeURIComponent(
      `Hola Condori Expedition Transport.\n\n` +
      `Nombre: ${formState.name}\n` +
      `Email: ${formState.email}\n` +
      `Teléfono: ${formState.phone}\n\n` +
      `Mensaje:\n${formState.message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ESTAMOS PARA ATENDERTE</span>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info-card">
            <h3>Condori Expedition Transport</h3>
            <p className="company-sub">Empresa Líder en Traslados Privados & Tours en Cusco</p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <strong>Dirección de Oficina:</strong>
                  <p>{t.directAddress}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MessageCircle size={20} /></div>
                <div>
                  <strong>WhatsApp 24/7 Directo:</strong>
                  <p><a href="https://wa.me/51967040149" target="_blank" rel="noreferrer">+51 967 040 149</a></p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <strong>Teléfono de Oficina:</strong>
                  <p>{t.directPhone}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <strong>Correo de Reservas:</strong>
                  <p>{t.directEmail}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Clock size={20} /></div>
                <div>
                  <strong>Horario de Atención:</strong>
                  <p>Lunes a Domingo: 05:00 AM - 10:00 PM (WhatsApp 24/7)</p>
                </div>
              </div>
            </div>

            <div className="social-follow-box contact-social-box">
              <span className="social-follow-label">SÍGUENOS EN REDES SOCIALES</span>
              <div className="social-icons-row">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn facebook" title="Facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn instagram" title="Instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-icon-btn tiktok" title="TikTok" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 0 0-5.83 6.3 6.34 6.34 0 0 0 10.74 4.5 6.32 6.32 0 0 0 1.86-4.5V9.45a8.27 8.27 0 0 0 4.74 1.49V7.49a4.83 4.83 0 0 1-1.4-.8z"/>
                  </svg>
                </a>
                <a href="https://wa.me/51967040149" target="_blank" rel="noreferrer" className="social-icon-btn whatsapp" title="WhatsApp" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="reclamaciones-trigger-box">
              <button className="btn-reclamaciones" onClick={onOpenReclamaciones}>
                <BookOpen size={18} /> {t.complaintsBook}
              </button>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="contact-form-card">
            <h3>Envíanos un Mensaje</h3>
            
            {submitted ? (
              <div className="form-success-banner">
                <p>✅ {t.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>{t.nameLabel}</label>
                  <input 
                    type="text" 
                    required 
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="Ej. Juan Carlos Pérez"
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>{t.emailLabel}</label>
                    <input 
                      type="email" 
                      required 
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      placeholder="juan@ejemplo.com"
                    />
                  </div>

                  <div className="form-group">
                    <label>{t.phoneLabel}</label>
                    <input 
                      type="tel" 
                      required 
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                      placeholder="+51 984 000 000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>{t.messageLabel}</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    placeholder="Hola, me gustaría cotizar transporte desde el aeropuerto hacia Ollantaytambo para el día 15 de Octubre para 4 personas..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-contact-submit">
                  <Send size={18} /> {t.btnSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
