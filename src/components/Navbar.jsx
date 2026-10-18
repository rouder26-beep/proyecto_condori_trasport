import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Globe, ShieldCheck, MapPin } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = translations[lang].nav;

  const closeMenu = () => setMobileOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const handleHome = () => { closeMenu(); scrollToTop(); };

  return (
    <header className="navbar-container">
      {/* Top bar info */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-info">
            <span><MapPin size={14} className="icon-inline" /> San Antonio - San Sebastián, Cusco</span>
            <span className="divider">|</span>
            <a href="tel:+51910958898" className="topbar-link">
              <Phone size={14} className="icon-inline" /> +51 910 958 898
            </a>
            <span className="divider">|</span>
            <span className="badge-official"><ShieldCheck size={14} className="icon-inline" /> RUC: 20616421744 • SOAT TURISTICO • MTC</span>
          </div>

          <div className="topbar-lang" aria-label="Selector de idioma">
            <Globe size={15} />
            <button 
              type="button"
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`} 
              onClick={() => setLang('es')}
              aria-label="Español"
            >
              🇪🇸 ES
            </button>
            <button 
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`} 
              onClick={() => setLang('en')}
              aria-label="English"
            >
              🇺🇸 EN
            </button>
            <button 
              type="button"
              className={`lang-btn ${lang === 'pt' ? 'active' : ''}`} 
              onClick={() => setLang('pt')}
              aria-label="Português"
            >
              🇧🇷 PT
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="main-nav" aria-label="Navegación principal">
        <div className="nav-brand">
          <Link to="/" className="brand-logo-official" onClick={handleHome}>
            <img src="/images/logo.png" alt="CONDORI EXPEDITION TRANSPORT" className="logo-img-header" width="180" height="48" />
          </Link>
        </div>

        <ul className={`nav-links ${mobileOpen ? 'mobile-active' : ''}`}>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={handleHome}>
              {t.home || 'Inicio'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/traslados" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>
              {lang === 'es' ? 'Traslados' : t.transfers}
            </NavLink>
          </li>
          <li>
            <NavLink to="/tours" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>
              {lang === 'es' ? 'Tours' : t.tours}
            </NavLink>
          </li>
          <li>
            <NavLink to="/flota" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>
              {t.fleet || 'Flota'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/nosotros" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>
              {t.about || 'Nosotros'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'nav-link-active' : '')} onClick={closeMenu}>
              {t.contact || 'Contacto'}
            </NavLink>
          </li>

          <li className="mobile-cta-item">
            <a 
              href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20quisiera%20cotizar%20un%20servicio%20privado." 
              target="_blank" 
              rel="noreferrer"
              className="btn-ws-nav"
            >
              <MessageCircle size={18} /> {t.bookNow || 'Cotizar por WhatsApp'}
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a 
            href="https://wa.me/51910958898?text=Hola%20Condori%20Expedition%20Transport,%20quisiera%20cotizar%20un%20servicio%20privado." 
            target="_blank" 
            rel="noreferrer"
            className="btn-ws-desktop"
          >
            <MessageCircle size={18} />
            <span>{t.bookNow || 'Cotizar por WhatsApp'}</span>
          </a>

          <button 
            type="button"
            className="mobile-menu-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

