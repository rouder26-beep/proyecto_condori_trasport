import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import TransferCalculator from './components/TransferCalculator';
import ToursSection from './components/ToursSection';
import FleetSection from './components/FleetSection';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ReclamacionesModal from './components/ReclamacionesModal';

export default function App() {
  const [lang, setLang] = useState('es');
  const [reclamacionesOpen, setReclamacionesOpen] = useState(false);

  useEffect(() => {
    const sectionHeaders = document.querySelectorAll('.section-header');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    sectionHeaders.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-main-wrapper">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBadges lang={lang} />
      <TransferCalculator lang={lang} />
      <ToursSection lang={lang} />
      <FleetSection lang={lang} />
      <AboutSection lang={lang} />
      <ReviewsSection lang={lang} />
      <FaqSection lang={lang} />
      <ContactSection lang={lang} onOpenReclamaciones={() => setReclamacionesOpen(true)} />
      <Footer lang={lang} onOpenReclamaciones={() => setReclamacionesOpen(true)} />

      <WhatsAppButton />
      <ReclamacionesModal 
        isOpen={reclamacionesOpen} 
        onClose={() => setReclamacionesOpen(false)} 
      />
    </div>
  );
}
