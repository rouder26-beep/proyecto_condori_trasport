export const toursData = [
  {
    id: "tour-valle-sagrado-vip",
    title: {
      es: "Valle Sagrado de los Incas VIP",
      en: "Sacred Valley of the Incas VIP",
      pt: "Vale Sagrado dos Incas VIP"
    },
    category: "Full Day",
    duration: "Full Day (7:00 AM - 6:30 PM)",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 70, // USD per vehicle / tour estimate
    image: "/images/hero.jpg",
    description: {
      es: "Recorrido privado exclusivo visitando Chinchero (textilería tradicional), Salineras de Maras, Centro Arqueológico de Moray, Urubamba y la fortaleza viva de Ollantaytambo.",
      en: "Exclusive private tour visiting Chinchero, Salt Mines of Maras, Moray terraces, Urubamba, and Ollantaytambo Fortress.",
      pt: "Tour privado exclusivo visitando Chinchero, Salineras de Maras, Moray, Urubamba e Ollantaytambo."
    },
    itinerary: [
      { time: "07:00 AM", detail: "Recojo de su hotel en Cusco en vehículo privado." },
      { time: "08:15 AM", detail: "Visita al pueblo tradicional de Chinchero y demostración textil." },
      { time: "10:00 AM", detail: "Recorrido por las terrazas agrícolas concéntricas de Moray." },
      { time: "11:30 AM", detail: "Visita a las miles de pozas de Salineras de Maras." },
      { time: "01:00 PM", detail: "Almuerzo buffet en Urubamba (Opcional)." },
      { time: "03:00 PM", detail: "Exploración del Complejo Arqueológico de Ollantaytambo." },
      { time: "06:30 PM", detail: "Retorno a Cusco o traslado a la estación de tren de Ollantaytambo." }
    ],
    includes: [
      "Transporte turístico 100% privado con chofer profesional",
      "Recojo y retorno en su hotel",
      "Balón de oxígeno a bordo y botiquín de primeros auxilios",
      "Flexibilidad total de paradas y tiempos"
    ],
    excludes: [
      "Boleto Turístico del Cusco (BTC)",
      "Boleto de ingreso a Salineras de Maras (S/ 20)",
      "Guía oficial de turismo (opcional adicional)",
      "Alimentación y bebidas"
    ]
  },
  {
    id: "tour-vinicunca",
    title: {
      es: "Montaña de 7 Colores (Vinicunca)",
      en: "Rainbow Mountain (Vinicunca)",
      pt: "Montanha Colorida (Vinicunca)"
    },
    category: "Full Day",
    duration: "Full Day (4:00 AM - 4:30 PM)",
    difficulty: { es: "Exigente (5,036 m.s.n.m.)", en: "Challenging (5,036 m)", pt: "Desafiador (5.036m)" },
    priceFrom: 85,
    image: "/images/suv.jpg",
    description: {
      es: "Viaje cómodo y sin apresuramientos hacia la impresionante Montaña Arcoíris. Salida en privado con oxígeno suplementario a bordo.",
      en: "Comfortable private day trip to Rainbow Mountain with supplementary oxygen on board.",
      pt: "Viagem confortável e sem pressa para a impressionante Montanha Colorida com oxigênio a bordo."
    },
    itinerary: [
      { time: "04:00 AM", detail: "Pick-up privado directo en su hotel." },
      { time: "06:30 AM", detail: "Desayuno buffet tradicional en Cusipata." },
      { time: "08:30 AM", detail: "Llegada al punto de inicio de caminata en Phulawasipata." },
      { time: "10:30 AM", detail: "Llegada a la cima de la Montaña de 7 Colores (Fotos & Mirador)." },
      { time: "01:30 PM", detail: "Almuerzo buffet reconfortante." },
      { time: "04:30 PM", detail: "Llegada a Cusco." }
    ],
    includes: [
      "Transporte turístico privado ida y vuelta",
      "Conductor experimentado en rutas de montaña",
      "Balón de oxígeno medicinal + pulsiómetro",
      "Manta térmica y snacks a bordo"
    ],
    excludes: [
      "Boleto de ingreso a la comunidad (S/ 25)",
      "Caballo de alquiler opcional",
      "Guía oficial de montaña"
    ]
  },
  {
    id: "tour-humantay",
    title: {
      es: "Laguna Humantay Turquesa",
      en: "Humantay Lake Turquoise Tour",
      pt: "Lagoa Humantay Turquesa"
    },
    category: "Full Day",
    duration: "Full Day (4:30 AM - 5:00 PM)",
    difficulty: { es: "Moderada / Alta", en: "Moderate / High", pt: "Moderada / Alta" },
    priceFrom: 80,
    image: "/images/minivan.jpg",
    description: {
      es: "Admira las deslumbrantes aguas turquesas al pie del imponente nevado Salkantay con transporte privado a tu propio ritmo.",
      en: "Witness the stunning turquoise waters at the base of Salkantay peak in private comfort.",
      pt: "Admire as incríveis águas turquesas aos pés do nevado Salkantay com transporte privado."
    },
    itinerary: [
      { time: "04:30 AM", detail: "Recojo en hotel en Cusco." },
      { time: "07:00 AM", detail: "Desayuno en Mollepata." },
      { time: "09:00 AM", detail: "Inicio de la caminata desde Soraypampa." },
      { time: "11:00 AM", detail: "Tiempo para disfrutar y fotografiar la Laguna Humantay." },
      { time: "02:00 PM", detail: "Almuerzo buffet en Mollepata." },
      { time: "05:00 PM", detail: "Retorno a la ciudad del Cusco." }
    ],
    includes: [
      "Transporte privado A/C Cusco - Soraypampa - Cusco",
      "Chofer capacitado en primeros auxilios",
      "Balón de oxígeno de emergencia"
    ],
    excludes: [
      "Ingreso a la comunidad de Mollepata (S/ 20)",
      "Caballos opcionales"
    ]
  },
  {
    id: "tour-city-tour-cusco",
    title: {
      es: "City Tour Privado Cusco & 4 Ruinas",
      en: "Private Cusco City Tour & 4 Ruins",
      pt: "City Tour Privado Cusco e 4 Ruínas"
    },
    category: "Half Day",
    duration: "Half Day (4 Horas)",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 45,
    image: "/images/sprinter.jpg",
    description: {
      es: "Explora Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay en un recorrido cómodo sin grupos multitudinarios.",
      en: "Explore Sacsayhuaman, Qenqo, Puka Pukara, and Tambomachay with your private driver.",
      pt: "Explore Sacsayhuamán, Qenqo, Puka Pukara e Tambomachay no seu próprio ritmo."
    },
    itinerary: [
      { time: "01:30 PM", detail: "Recojo en el hotel." },
      { time: "02:00 PM", detail: "Visita al imponente Parque Arqueológico de Sacsayhuamán." },
      { time: "03:15 PM", detail: "Recorrido por el centro laberíntico de Qenqo." },
      { time: "04:15 PM", detail: "Visita a Puka Pukara y los baños del Inca en Tambomachay." },
      { time: "05:30 PM", detail: "Retorno al centro de Cusco." }
    ],
    includes: [
      "Transporte turístico privado de primer nivel",
      "Combustible, chofer y peajes incluidos",
      "Paradas personalizadas para fotos"
    ],
    excludes: [
      "Boleto Turístico del Cusco (BTC)",
      "Guía turístico"
    ]
  }
];
