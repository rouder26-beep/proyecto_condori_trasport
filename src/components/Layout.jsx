import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ReclamacionesModal from './ReclamacionesModal';
import ScrollToTop from './ScrollToTop';

export default function Layout({ lang, setLang }) {
  const [reclamacionesOpen, setReclamacionesOpen] = useState(false);

  return (
    <div className="app-main-wrapper">
      <ScrollToTop />
      <Navbar lang={lang} setLang={setLang} />
      <main id="main-content" tabIndex="-1">
        <Outlet context={{ lang }} />
      </main>
      <Footer lang={lang} onOpenReclamaciones={() => setReclamacionesOpen(true)} />
      <WhatsAppButton />
      <ReclamacionesModal
        isOpen={reclamacionesOpen}
        onClose={() => setReclamacionesOpen(false)}
      />
    </div>
  );
}
