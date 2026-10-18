import React from 'react';
import { useOutletContext } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import PopularRoutesSection from '../components/PopularRoutesSection';
import FleetShortSection from '../components/FleetShortSection';
import ReviewsSection from '../components/ReviewsSection';
import FeaturedToursSection from '../components/FeaturedToursSection';
import QuickContactSection from '../components/QuickContactSection';

export default function HomePage() {
  const { lang } = useOutletContext();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Condori Expedition Transport",
    "alternateName": "Grupo Condori RYD SAC",
    "legalName": "Grupo Condori RYD SAC",
    "taxID": "20616421744",
    "url": "https://condoriexpedition.com",
    "logo": "https://condoriexpedition.com/images/logo.png",
    "image": "https://condoriexpedition.com/images/hero.jpg",
    "description": "Transporte turístico privado y tours en Cusco, Ollantaytambo y Valle Sagrado. Traslado aeropuerto Cusco con precio fijo por vehículo, monitoreo de vuelos y balón de oxígeno a bordo.",
    "telephone": "+51910958898",
    "email": "condoriexpedition@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "San Antonio",
      "addressLocality": "San Sebastián, Cusco",
      "addressRegion": "Cusco",
      "postalCode": "08000",
      "addressCountry": "PE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -13.532353,
      "longitude": -71.940733
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://facebook.com/Condori_expedition",
      "https://instagram.com/Condori_expedition",
      "https://tiktok.com/@Condori_expedition"
    ]
  };

  return (
    <div className="home-page-container">
      <SEO 
        title="Condori Expedition Transport | Transporte Privado y Tours en Cusco"
        description="Transporte turístico privado en Cusco, Ollantaytambo y Valle Sagrado. Precios fijos por vehículo, chofer local experto, sin intermediarios y asistencia con oxígeno."
        canonical="/"
        keywords="traslado Cusco aeropuerto, traslado Ollantaytambo, taxi privado Cusco, tours Valle Sagrado, transporte turístico Cusco"
        schemaJson={localBusinessSchema}
      />

      {/* 1. Hero con calculador de traslados unificado y botón de WhatsApp */}

      <Hero lang={lang} />

      {/* Badges de confianza oficiales */}
      <TrustBadges lang={lang} />

      {/* 2. Rutas más pedidas: 4 tarjetas con precio "desde" y botón "Ver todas las tarifas" */}
      <PopularRoutesSection lang={lang} />

      {/* 3. Flota en versión corta: tipos de vehículos con enlace "Ver flota completa" */}
      <FleetShortSection lang={lang} />

      {/* 4. Reseñas: mejores testimonios con enlaces a Google y TripAdvisor */}
      <ReviewsSection lang={lang} />

      {/* 5. Tours destacados: 3 tarjetas con botón "Ver todos los tours" */}
      <FeaturedToursSection lang={lang} />

      {/* 6. Contacto rápido con llamada a la acción por WhatsApp */}
      <QuickContactSection lang={lang} />
    </div>
  );
}
