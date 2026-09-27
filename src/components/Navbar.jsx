import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Globe, ShieldCheck, MapPin } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang].nav;

  return (
    <header className="navbar-container">
      {/* Top bar info */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-info">
            <span><MapPin size={14} className="icon-inline" /> Cusco & Valle Sagrado, Perú</span>
            <span className="divider">|</span>
            <span><Phone size={14} className="icon-inline" /> +51 967 040 149</span>
            <span className="divider">|</span>
            <span className="badge-official"><ShieldCheck size={14} className="icon-inline" /> RUC: 20601234567 • MINCETUR / DIRCETUR</span>
          </div>

          <div className="topbar-lang">
            <Globe size={15} />
            <button className={`lang-btn ${lang === 'es' ? 'active' : ''}`} onClick={() => setLang('es')}>🇪🇸 ES</button>
            <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>🇺🇸 EN</button>
            <button className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} onClick={() => setLang('pt')}>🇧🇷 PT</button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="main-nav">
        <div className="nav-brand">
          <a href="#home" className="brand-logo-official">
            <img src="/images/logo.png" alt="CONDORI EXPEDITION TRANSPORT" className="logo-img-header" />
          </a>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'mobile-active' : ''}`}>
          <li><a href="#home" onClick={() => setMobileOpen(false)}>{t.home}</a></li>
          <li><a href="#nosotros" onClick={() => setMobileOpen(false)}>{t.about}</a></li>
          <li><a href="#traslados" onClick={() => setMobileOpen(false)}>{t.transfers}</a></li>
          <li><a href="#tours" onClick={() => setMobileOpen(false)}>{t.tours}</a></li>
          <li><a href="#flota" onClick={() => setMobileOpen(false)}>{t.fleet}</a></li>
          <li><a href="#reseñas" onClick={() => setMobileOpen(false)}>{t.reviews}</a></li>
          <li><a href="#faq" onClick={() => setMobileOpen(false)}>{t.faq}</a></li>
          <li><a href="#contacto" onClick={() => setMobileOpen(false)}>{t.contact}</a></li>

          <li className="mobile-cta-item">
            <a 
              href="https://wa.me/51967040149?text=Hola%20Condori%20Expedition%20Transport,%20quisiera%20cotizar%20un%20servicio." 
              target="_blank" 
              rel="noreferrer"
              className="btn-ws-nav"
            >
              <MessageCircle size={18} /> {t.bookNow}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a 
            href="https://wa.me/51967040149?text=Hola%20Condori%20Expedition%20Transport,%20deseo%20informaci%C3%B3n." 
            target="_blank" 
            rel="noreferrer"
            className="btn-ws-desktop"
          >
            <MessageCircle size={18} />
            <span>{t.bookNow}</span>
          </a>

          <button className="mobile-menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle Navigation">
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
