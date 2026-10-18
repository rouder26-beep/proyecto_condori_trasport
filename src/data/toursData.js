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
    image: "/images/vinicunca.jpg",
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
    image: "/images/humantay.jpg",
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
  },
  {
    id: "tour-puente-qeswachaka",
    title: {
      es: "Puente Q'eswachaka (Último Puente Inca)",
      en: "Q'eswachaka Bridge (Last Inca Bridge)",
      pt: "Ponte Q'eswachaka (Última Ponte Inca)"
    },
    category: "Full Day",
    duration: "Full Day • Salida Flexible / A tu ritmo",
    difficulty: { es: "Moderada", en: "Moderate", pt: "Moderada" },
    priceFrom: "XX",
    image: "/images/queswachaca.jpg",
    description: {
      es: "Viaje privado hacia el último puente colgante inca tejido a mano con paja, renovado cada año por las comunidades locales. Disfruta del paisaje andino y de la cultura viva a tu propio ritmo.",
      en: "Private journey to the last handwoven Inca suspension bridge, renewed annually by local communities. Enjoy Andean landscapes and living culture at your own pace.",
      pt: "Viagem privada até a última ponte pênsil inca tecida à mão com palha, renovada anualmente pelas comunidades locais. Desfrute da paisagem andina e da cultura viva no seu próprio ritmo."
    },
    includesSummary: "Transporte 100% privado, chofer profesional y paradas fotográficas ilimitadas.",
    itinerary: [
      { detail: "Recojo de su hotel en Cusco en vehículo privado (horario coordinado a su elección)." },
      { detail: "Recorrido escénico por el circuito de las cuatro lagunas (Pomacanchi, Acopia, Asnaqocha y Pampamarca)." },
      { detail: "Llegada al cañón del río Apurímac y al histórico Puente Colgante Inca Q'eswachaka." },
      { detail: "Tiempo para cruzar el puente de paja brava ichu y conocer las tradiciones comunales vivas." },
      { detail: "Paradas fotográficas en miradores y almuerzo campestre/tradicional." },
      { detail: "Retorno tranquilo y seguro a la ciudad de Cusco directo a su hotel." }
    ],
    includes: [
      "Transporte 100% privado con chofer profesional",
      "Recojo y retorno en su hotel en Cusco",
      "Paradas fotográficas ilimitadas",
      "Tiempo libre y recorrido a su propio ritmo"
    ],
    excludes: [
      "Boleto o aporte comunal de ingreso al puente Q'eswachaka",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)"
    ]
  },
  {
    id: "tour-pallay-punchu",
    title: {
      es: "Montaña Pallay Punchu",
      en: "Pallay Punchu Mountain",
      pt: "Montanha Pallay Punchu"
    },
    category: "Full Day",
    duration: "Full Day • Salida Flexible / A tu ritmo",
    difficulty: { es: "Exigente (aprox. 4,900 m.s.n.m.)", en: "Challenging (approx. 4,900 m)", pt: "Exigente (aprox. 4.900 m)" },
    priceFrom: "XX",
    image: "/images/montana-pallaypuncho.jpg",
    description: {
      es: "Excursión privada a la espectacular Montaña Pallay Punchu, conocida por sus colores únicos y paisajes de otro mundo, con salida flexible y transporte cómodo.",
      en: "Private excursion to the spectacular Pallay Punchu Mountain, known for its sharp colored ridges and otherworldly landscapes, with flexible departure and comfortable transport.",
      pt: "Excursão privada à espetacular Montanha Pallay Punchu, conhecida por suas cores únicas e paisagens de outro mundo, com saída flexível e transporte confortável."
    },
    includesSummary: "Transporte 100% privado, chofer profesional, balón de oxígeno y paradas fotográficas ilimitadas.",
    itinerary: [
      { detail: "Pick-up privado en su hotel en Cusco (horario coordinado a su elección)." },
      { detail: "Viaje cómodo por el valle sur con parada para desayuno reconfortante." },
      { detail: "Llegada al punto de partida cerca de Layo y la laguna Langui." },
      { detail: "Ascenso a pie a su propio paso hacia la cresta afilada de colores de Pallay Punchu." },
      { detail: "Tiempo libre para fotos inolvidables con vistas a la laguna y las formaciones andinas." },
      { detail: "Descenso y almuerzo reconfortante." },
      { detail: "Retorno a la ciudad del Cusco directo a su alojamiento." }
    ],
    includes: [
      "Transporte 100% privado con chofer profesional",
      "Balón de oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas",
      "Manta térmica y asistencia en ruta"
    ],
    excludes: [
      "Boleto o ticket de ingreso comunal a Pallay Punchu",
      "Alimentación y bebidas",
      "Guía oficial de montaña (opcional adicional)"
    ]
  }
];
