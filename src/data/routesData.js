export const routesData = [
  {
    id: "route-1",
    origin: "Aeropuerto Cusco (CUZ)",
    destination: "Hotel Cusco Centro / San Blas",
    duration: "25 - 35 min",
    prices: {
      sedan: 15, // USD ($60 PEN aprox)
      suv: 25,
      minivan: 35,
      sprinter: 50
    },
    popular: true
  },
  {
    id: "route-2",
    origin: "Cusco (Hotel / Aeropuerto)",
    destination: "Estación de Ollantaytambo (Tren Machu Picchu)",
    duration: "1h 45 min",
    prices: {
      sedan: 45,
      suv: 60,
      minivan: 75,
      sprinter: 110
    },
    popular: true
  },
  {
    id: "route-3",
    origin: "Cusco",
    destination: "Urubamba / Valle Sagrado (Hoteles)",
    duration: "1h 15 min",
    prices: {
      sedan: 40,
      suv: 55,
      minivan: 70,
      sprinter: 100
    },
    popular: true
  },
  {
    id: "route-4",
    origin: "Cusco",
    destination: "Pisac (Pueblo / ruinas)",
    duration: "50 min",
    prices: {
      sedan: 35,
      suv: 45,
      minivan: 60,
      sprinter: 85
    },
    popular: false
  },
  {
    id: "route-5",
    origin: "Cusco",
    destination: "Estación de Poroy",
    duration: "30 min",
    prices: {
      sedan: 20,
      suv: 30,
      minivan: 40,
      sprinter: 60
    },
    popular: false
  },
  {
    id: "route-6",
    origin: "Cusco",
    destination: "Maras & Moray (Tour de paso a Ollantaytambo)",
    duration: "4 - 5 horas",
    prices: {
      sedan: 65,
      suv: 85,
      minivan: 105,
      sprinter: 150
    },
    popular: true
  },
  {
    id: "route-7",
    origin: "Cusco",
    destination: "Santa Teresa / Hidroeléctrica (Ruta Alterna Machu Picchu)",
    duration: "6 horas",
    prices: {
      sedan: 130,
      suv: 160,
      minivan: 190,
      sprinter: 270
    },
    popular: false
  },
  {
    id: "route-8",
    origin: "Cusco",
    destination: "Puno / Lago Titicaca (Traslado directo o Ruta del Sol)",
    duration: "7 - 8 horas",
    prices: {
      sedan: 180,
      suv: 220,
      minivan: 280,
      sprinter: 400
    },
    popular: false
  }
];

export const originsList = [
  "Aeropuerto Cusco (CUZ)",
  "Hotel Cusco Centro / San Blas",
  "Estación de Poroy",
  "Urubamba / Valle Sagrado",
  "Ollantaytambo",
  "Pisac"
];

export const destinationsList = [
  "Hotel Cusco Centro / San Blas",
  "Estación de Ollantaytambo (Tren Machu Picchu)",
  "Urubamba / Valle Sagrado (Hoteles)",
  "Pisac (Pueblo / ruinas)",
  "Estación de Poroy",
  "Maras & Moray",
  "Montaña 7 Colores (Vinicunca)",
  "Laguna Humantay",
  "Santa Teresa / Hidroeléctrica",
  "Puno / Lago Titicaca"
];
