export const routesData = [
  {
    id: "route-1",
    origin: "Aeropuerto",
    destination: "Hotel / Centro de Cusco / Estación de tren",
    duration: "15 min",
    prices: {
      sedanSuv: 15,
      minivan: 20,
      sprinter10: 35,
      sprinter15: 50,
    },
    popular: true
  },
  {
    id: "route-2",
    origin: "Aeropuerto / Hotel / Centro de Cusco",
    destination: "Ollantaytambo / Hotel / Estación de tren",
    duration: "1 h 45 min",
    prices: {
      sedanSuv: 60,
      minivan: 70,
      sprinter10: 100,
      sprinter15: 131,
    },
    popular: true
  },
  {
    id: "route-3",
    origin: "Aeropuerto / Hotel / Centro de Cusco",
    destination: "Estación de tren de Poroy",
    duration: "45 min",
    prices: {
      sedanSuv: 20,
      minivan: 30,
      sprinter10: 50,
      sprinter15: 55,
    },
    popular: false
  },
  {
    id: "route-4",
    origin: "Aeropuerto / Hotel / Centro de Cusco",
    destination: "Urubamba / Hotel / Estación de tren",
    duration: "1 h 30 min",
    prices: {
      sedanSuv: 60,
      minivan: 70,
      sprinter10: 100,
      sprinter15: 130,
    },
    popular: true
  },
  {
    id: "route-5",
    origin: "Cusco / Hotel",
    destination: "Estación de tren (Wanchaq, Av. El Sol, San Pedro)",
    duration: "20 min",
    prices: {
      sedanSuv: 10,
      minivan: 15,
      sprinter10: 20,
      sprinter15: 25,
    },
    popular: false
  },
  {
    id: "route-6",
    origin: "Aeropuerto / Hotel",
    destination: "Pisac / Centro arqueológico de Pisac",
    duration: "1 h",
    prices: {
      sedanSuv: 45,
      minivan: 60,
      sprinter10: 75,
      sprinter15: 90,
    },
    popular: true
  },
  {
    id: "route-7",
    origin: "Cusco / Hotel / Aeropuerto",
    destination: "Montaña 7 Colores (Vinicunca)",
    duration: "Full Day",
    hideTripType: true,
    prices: {
      sedanSuv: 120,
      minivan: 150,
      sprinter10: 180,
      sprinter15: 220,
    },
    popular: true
  },
  {
    id: "route-8",
    origin: "Cusco / Hotel / Aeropuerto",
    destination: "Laguna Humantay",
    duration: "Full Day",
    hideTripType: true,
    prices: {
      sedanSuv: 120,
      minivan: 150,
      sprinter10: 180,
      sprinter15: 220,
    },
    popular: true
  },
  {
    id: "route-9",
    origin: "Cusco / Hotel / Aeropuerto",
    destination: "Puno / Lago Titicaca (Hotel / Terminal)",
    duration: "7 h",
    prices: {
      sedanSuv: 300,
      minivan: 350,
      sprinter10: 400,
      sprinter15: 450,
    },
    popular: true
  },
  {
    id: "route-10",
    origin: "Cusco / Hotel",
    destination: "Hidroeléctrica (Machu Picchu por auto)",
    duration: "6 h (por tramo)",
    tripType: "roundTrip", // Ida y vuelta
    prices: {
      sedanSuv: 220,
      minivan: 255,
      sprinter10: 320,
      sprinter15: 420,
    },
    popular: true
  },
];

export const originsList = [
  "Aeropuerto Cusco (CUZ)",
  "Hotel Cusco Centro / San Blas",
  "Estación de Poroy",
  "Urubamba / Valle Sagrado",
  "Ollantaytambo",
  "Pisac",
  "Estación de tren (Wanchaq, Av. El Sol, San Pedro)"
];

export const destinationsList = [
  "Hotel Cusco Centro / San Blas",
  "Estación de Ollantaytambo (Tren Machu Picchu)",
  "Urubamba / Valle Sagrado (Hoteles)",
  "Hidroeléctrica (Ida y Vuelta)",
  "Puno / Lago Titicaca (Hotel / Terminal)",
  "Estación de tren de Poroy",
  "Estación de tren (Wanchaq, Av. El Sol, San Pedro)",
  "Pisac / Centro arqueológico",
  "Montaña 7 Colores (Vinicunca)",
  "Laguna Humantay"
];
