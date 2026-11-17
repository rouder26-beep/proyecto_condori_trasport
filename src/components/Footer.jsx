import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, BookOpen } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ lang, onOpenReclamaciones }) {
  const t = translations[lang]?.footer || translations.es.footer;
  const navT = translations[lang]?.nav || translations.es.nav;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-col brand-col">
            <div className="brand-logo footer-logo">
              <Link to="/">
                <img src="/images/logo.png" alt="CONDORI EXPEDITION TRANSPORT" className="logo-img-footer" width="180" height="48" />
              </Link>
            </div>

            <p className="footer-about-text">
              {t.aboutText}
            </p>

            <div className="footer-badges">
              <span className="badge-item"><ShieldCheck size={14} /> {t.badgeSoat}</span>
              <span className="badge-item"><ShieldCheck size={14} /> {t.badgeRuc}</span>
            </div>

            <div className="social-follow-box">
              <span className="social-follow-label">{t.followUs || 'SÍGUENOS'}</span>
              <div className="social-icons-row">
                <a href="https://www.facebook.com/profile.php?id=61595821621754" target="_blank" rel="noreferrer" className="social-icon-btn facebook" title="Facebook - Condori Expedition" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/condori_expedition?utm_source=qr&mdxt=ODJucHF6YTBlMWlz" target="_blank" rel="noreferrer" className="social-icon-btn instagram" title="Instagram - @condori_expedition" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://tiktok.com/@Condori_expedition" target="_blank" rel="noreferrer" className="social-icon-btn tiktok" title="TikTok - @Condori_expedition" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.83V7.63a6.34 6.34 0 0 0-5.83 6.3 6.34 6.34 0 0 0 10.74 4.5 6.32 6.32 0 0 0 1.86-4.5V9.45a8.27 8.27 0 0 0 4.74 1.49V7.49a4.83 4.83 0 0 1-1.4-.8z"/>
                  </svg>
                </a>
                <a href="https://wa.me/51910958898" target="_blank" rel="noreferrer" className="social-icon-btn whatsapp" title="WhatsApp" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t.navColTitle}</h4>
            <ul>
              <li><Link to="/">{navT.home}</Link></li>
              <li><Link to="/traslados">{navT.transfers}</Link></li>
              <li><Link to="/tours">{navT.tours}</Link></li>
              <li><Link to="/flota">{navT.fleet}</Link></li>
              <li><Link to="/nosotros">{navT.about}</Link></li>
              <li><Link to="/preguntas-frecuentes">{navT.faq}</Link></li>
              <li><Link to="/contacto">{navT.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.servicesColTitle}</h4>
            <ul>
              <li><Link to="/traslados">{t.service1}</Link></li>
              <li><Link to="/traslados">{t.service2}</Link></li>
              <li><Link to="/tours/tour-valle-sagrado-vip">{t.service3}</Link></li>
              <li><Link to="/tours/tour-vinicunca">{t.service4}</Link></li>
              <li><Link to="/tours/tour-humantay">{t.service5}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t.contactColTitle}</h4>
            <ul className="footer-contact-list">
              <li><MapPin size={15} /> San Antonio - San Sebastián, Cusco - Perú</li>
              <li><Phone size={15} /> <a href="tel:+51910958898" style={{ color: 'inherit' }}>+51 910 958 898</a></li>
              <li><Mail size={15} /> <a href="mailto:condoriexpedition@gmail.com">condoriexpedition@gmail.com</a></li>
              <li style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>Grupo Condori RYD SAC • RUC 20616421744</li>
            </ul>

            <button type="button" className="btn-footer-reclamaciones" onClick={onOpenReclamaciones}>
              <BookOpen size={16} /> {t.complaintsBook}
            </button>
          </div>
        </div>

        <div className="footer-payment-methods">
          <span className="payment-methods-title">{t.paymentMethodsTitle}</span>
          <div className="payment-methods-list">
            <span className="payment-badge">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="payment-icon">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="2" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
              <span>{t.paymentCash}</span>
            </span>
            <span className="payment-badge visa-badge">
              <svg viewBox="0 0 48 48" width="34" height="22" className="visa-svg-logo" aria-label="Visa">
                <rect width="48" height="28" y="10" rx="4" fill="#ffffff" />
                <path d="M19.4 28.5l2.2-13.4h3.5l-2.2 13.4h-3.5zm13.7-13.1c-.7-.3-1.8-.5-3.2-.5-3.5 0-6 1.8-6 4.4 0 1.9 1.8 3 3.1 3.6 1.4.7 1.9 1.1 1.9 1.7 0 .9-1.1 1.4-2.2 1.4-1.4 0-2.2-.2-3.4-.7l-.5-.2-.5 3.1c.9.4 2.5.7 4.2.7 3.9 0 6.5-1.9 6.5-4.6 0-1.5-.9-2.7-3-3.7-1.3-.6-2.1-1.1-2.1-1.7 0-.6.7-1.2 2.2-1.2 1.2 0 2.1.2 2.8.5l.3.2.7-3.2zm8.5 0h-2.7c-.8 0-1.5.2-1.9 1.1l-5.3 12.3h3.7l.7-2h4.5l.4 2h3.3l-2.7-13.4zm-4.7 8.7l1.9-5.1.7 2.1.4 3h-3zm-19.8-8.7l-3.4 9.1-.4-1.8c-.6-2-2.5-4.2-4.6-5.3l3 11.4h3.7l5.5-13.4h-3.8z" fill="#1A1F71"/>
                <path d="M12.1 15.4H6.7l-.1.3c4.2 1 6.9 3.5 8 6.6l-1.2-5.9c-.2-.7-.7-1-1.3-1z" fill="#F7B600"/>
              </svg>
              <span>{t.paymentVisa}</span>
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CONDORI EXPEDITION TRANSPORT. {t.rights}</p>
          <div className="footer-legal-links">
            <Link to="/preguntas-frecuentes">{navT.faq}</Link>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>•</span>
            <Link to="/contacto">{t.legal}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
