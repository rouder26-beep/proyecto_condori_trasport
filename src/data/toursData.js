export const toursData = [
  {
    id: "tour-valle-sagrado-vip",
    title: {
      es: "Valle Sagrado de los Incas VIP",
      en: "Sacred Valley of the Incas VIP",
      pt: "Vale Sagrado dos Incas VIP"
    },
    category: "Full Day",
    duration: "Full Day • Horario Libre / A tu ritmo",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 70, // USD per vehicle / tour estimate
    image: "/images/hero.jpg",
    description: {
      es: "Recorrido privado exclusivo visitando Chinchero (textilería tradicional), Salineras de Maras, Centro Arqueológico de Moray, Urubamba y la fortaleza viva de Ollantaytambo.",
      en: "Exclusive private tour visiting Chinchero, Salt Mines of Maras, Moray terraces, Urubamba, and Ollantaytambo Fortress.",
      pt: "Tour privado exclusivo visitando Chinchero, Salineras de Maras, Moray, Urubamba e Ollantaytambo."
    },
    itinerary: [
      { detail: "Recojo de su hotel en Cusco en vehículo privado (horario coordinado a su elección)." },
      { detail: "Visita al pueblo tradicional de Chinchero y demostración de textilería viva ancestral." },
      { detail: "Recorrido por los andenes circulares y laboratorio agrícola inca de Moray." },
      { detail: "Visita a las miles de pozas de extracción artesanal de Salineras de Maras." },
      { detail: "Parada para almuerzo buffet en Urubamba (opcional y sin prisas)." },
      { detail: "Exploración del impresionante Complejo Arqueológico y fortaleza de Ollantaytambo." },
      { detail: "Retorno tranquilo a Cusco o traslado directo a la estación de tren de Ollantaytambo." }
    ],
    includes: [
      "Transporte turístico 100% privado con chofer profesional",
      "Recojo y retorno en su hotel",
      "Balón de oxígeno a bordo y botiquín de primeros auxilios",
      "Flexibilidad total de paradas y tiempos a su gusto"
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
    duration: "Full Day • Salida Flexible / A tu ritmo",
    difficulty: { es: "Exigente (5,036 m.s.n.m.)", en: "Challenging (5,036 m)", pt: "Desafiador (5.036m)" },
    priceFrom: 85,
    image: "/images/suv.jpg",
    description: {
      es: "Viaje cómodo y sin apresuramientos hacia la impresionante Montaña Arcoíris. Salida en privado con oxígeno suplementario a bordo.",
      en: "Comfortable private day trip to Rainbow Mountain with supplementary oxygen on board.",
      pt: "Viagem confortável e sem pressa para a impressionante Montanha Colorida com oxigênio a bordo."
    },
    itinerary: [
      { detail: "Pick-up privado directo en la puerta de su hotel en Cusco." },
      { detail: "Parada para desayuno tradicional reconfortante en Cusipata." },
      { detail: "Llegada al punto de inicio en Phulawasipata y comienzo de la caminata a tu propio paso." },
      { detail: "Llegada a la cumbre de la Montaña de 7 Colores con tiempo libre para fotos y contemplar el paisaje." },
      { detail: "Descenso y almuerzo buffet reconfortante." },
      { detail: "Retorno cómodo y seguro a la ciudad de Cusco en su unidad privada." }
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
    duration: "Full Day • Salida Flexible / A tu ritmo",
    difficulty: { es: "Moderada / Alta", en: "Moderate / High", pt: "Moderada / Alta" },
    priceFrom: 80,
    image: "/images/minivan.jpg",
    description: {
      es: "Admira las deslumbrantes aguas turquesas al pie del imponente nevado Salkantay con transporte privado a tu propio ritmo.",
      en: "Witness the stunning turquoise waters at the base of Salkantay peak in private comfort.",
      pt: "Admire as incríveis águas turquesas aos pés do nevado Salkantay com transporte privado."
    },
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco a la hora previamente acordada." },
      { detail: "Parada para desayuno energético en Mollepata." },
      { detail: "Llegada a Soraypampa e inicio de la caminata hacia la laguna a tu propio ritmo." },
      { detail: "Tiempo libre para disfrutar, meditar y fotografiar las aguas turquesas de la Laguna Humantay." },
      { detail: "Descenso y almuerzo tradicional en Mollepata." },
      { detail: "Retorno a la ciudad del Cusco directo a su hotel." }
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
    duration: "Half Day • Horario Libre a Elección",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 45,
    image: "/images/sprinter.jpg",
    description: {
      es: "Explora Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay en un recorrido cómodo sin grupos multitudinarios.",
      en: "Explore Sacsayhuaman, Qenqo, Puka Pukara, and Tambomachay with your private driver.",
      pt: "Explore Sacsayhuamán, Qenqo, Puka Pukara e Tambomachay no seu próprio ritmo."
    },
    itinerary: [
      { detail: "Recojo en su hotel en el horario que elija (mañana o tarde)." },
      { detail: "Visita y exploración del imponente Parque Arqueológico de Sacsayhuamán." },
      { detail: "Recorrido por el centro laberíntico y ceremonial de Qenqo." },
      { detail: "Visita panorámica a la fortaleza militar de Puka Pukara." },
      { detail: "Exploración de los baños sagrados del Inca en Tambomachay." },
      { detail: "Retorno cómodo al centro histórico de Cusco." }
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
