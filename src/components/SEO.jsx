import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Condori Expedition Transport | Transporte Turístico y Tours en Cusco',
  description = 'Servicio formal de transporte turístico privado y tours en Cusco, Ollantaytambo y Valle Sagrado. Traslado aeropuerto Cusco, precios fijos por vehículo y conductores locales.',
  canonical = 'https://condoriexpedition.com',
  keywords = 'traslado Cusco aeropuerto, traslado Ollantaytambo, taxi privado Cusco, tours Valle Sagrado, transporte turístico Cusco',
  image = '/images/hero.jpg',
  schemaJson = null
}) {
  const siteUrl = 'https://condoriexpedition.com';
  const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:site_name" content="Condori Expedition Transport" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_PE" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
}
