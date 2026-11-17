export const toursData = [
  {
    id: "tour-valle-sagrado-vip",
    title: {
      es: "Valle Sagrado de los Incas VIP",
      en: "Sacred Valley of the Incas VIP",
      pt: "Vale Sagrado dos Incas VIP"
    },
    category: "Full Day",
    duration: "Full Day",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 120, // USD per vehicle / tour estimate
    image: "/images/valle-sagrado.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$120.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$160.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$170.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$200.00 USD" },
    ],
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
      "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
      "Flexibilidad total de paradas y tiempos a su gusto"
    ],
    excludes: [
      "Boleto Turístico del Cusco (BTC)",
      "Boleto de ingreso a Salineras de Maras (S/ 20)",
      "Guía oficial de turismo (opcional adicional)",
      "Alimentación y bebidas",
      "Propinas"
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
    duration: "Full Day",
    difficulty: { es: "Exigente (5,036 m.s.n.m.)", en: "Challenging (5,036 m)", pt: "Desafiador (5.036m)" },
    priceFrom: 120,
    image: "/images/vinicunca.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$120.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$150.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$180.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$220.00 USD" },
    ],
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
      "Oxígeno medicinal + pulsiómetro"
    ],
    excludes: [
      "Boleto de ingreso a la comunidad (S/ 25)",
      "Caballo de alquiler opcional",
      "Guía oficial de montaña",
      "Propinas"
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
    duration: "Full Day",
    difficulty: { es: "Moderada / Alta", en: "Moderate / High", pt: "Moderada / Alta" },
    priceFrom: 120,
    image: "/images/humantay.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$120.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$150.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$180.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$220.00 USD" },
    ],
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
      "Oxígeno medicinal de emergencia"
    ],
    excludes: [
      "Ingreso a la comunidad de Mollepata (S/ 20)",
      "Caballos opcionales",
      "Propinas"
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
    duration: "Half Day",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 50,
    image: "/images/city-tour-cusco.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$50.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$65.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$95.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$125.00 USD" },
    ],
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
      "Guía turístico",
      "Propinas"
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
    duration: "Full Day",
    difficulty: { es: "Moderada", en: "Moderate", pt: "Moderada" },
    priceFrom: 160,
    image: "/images/queswachaca.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$160.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$200.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$220.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$250.00 USD" },
    ],
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
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
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
    duration: "Full Day",
    difficulty: { es: "Exigente (aprox. 4,900 m.s.n.m.)", en: "Challenging (approx. 4,900 m)", pt: "Exigente (aprox. 4.900 m)" },
    priceFrom: 130,
    image: "/images/montana-pallaypuncho.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$130.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$160.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$210.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$250.00 USD" },
    ],
    description: {
      es: "Excursión privada a la espectacular Montaña Pallay Punchu, conocida por sus colores únicos y paisajes de otro mundo, con salida flexible y transporte cómodo.",
      en: "Private excursion to the spectacular Pallay Punchu Mountain, known for its sharp colored ridges and otherworldly landscapes, with flexible departure and comfortable transport.",
      pt: "Excursão privada à espetacular Montanha Pallay Punchu, conhecida por suas cores únicas e paisagens de outro mundo, com saída flexível e transporte confortável."
    },
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
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
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas",
      "Manta térmica y asistencia en ruta"
    ],
    excludes: [
      "Boleto o ticket de ingreso comunal a Pallay Punchu",
      "Alimentación y bebidas",
      "Guía oficial de montaña (opcional adicional)",
      "Propinas"
    ]
  },
  {
    id: "tour-7-lagunas-ausangate",
    title: {
      es: "Circuito 7 Lagunas de Ausangate",
      en: "Ausangate 7 Lakes Circuit",
      pt: "Circuito 7 Lagoas de Ausangate"
    },
    category: "Full Day",
    duration: "Full Day",
    difficulty: { es: "Moderada / Alta (4,200 - 4,600 m.s.n.m.)", en: "Moderate / High (4,200 - 4,600 m)", pt: "Moderada / Alta (4.200 - 4.600 m)" },
    priceFrom: 130,
    image: "/images/7lagunas-ausangate.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$130.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$160.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$200.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$240.00 USD" },
    ],
    description: {
      es: "Espectacular caminata a los pies del imponente nevado Ausangate visitando 7 lagunas de aguas turquesas y verdes (Pucacocha, Azulcocha, Otorongococha y más), culminando en las relajantes aguas termales de Pacchanta.",
      en: "Spectacular hike at the foot of mount Ausangate visiting 7 turquoise and green glacier lakes, finishing at the natural hot springs of Pacchanta.",
      pt: "Espetacular caminhada aos pés do nevado Ausangate visitando 7 lagoas de águas turquesas e verdes, terminando nas relaxantes águas termais de Pacchanta."
    },
    includesSummary: "Transporte 100% privado, chofer experimentado, oxígeno medicinal y tiempo en aguas termales de Pacchanta.",
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco de madrugada (horario coordinado a su elección)." },
      { detail: "Viaje panorámico hacia la comunidad andina de Pacchanta con parada para desayuno reconfortante." },
      { detail: "Inicio del trekking por el circuito de las 7 lagunas a los pies del nevado sagrado Ausangate (Pucacocha, Patacocha, Comercocha, Azulcocha, etc.)." },
      { detail: "Paradas fotográficas y contemplación de paisajes glaciares, flora y fauna andina (alpacas y vizcachas)." },
      { detail: "Retorno a Pacchanta y tiempo libre para disfrutar de las reconfortantes aguas termales medicinales." },
      { detail: "Almuerzo tradicional reconfortante en Pacchanta." },
      { detail: "Retorno cómodo y seguro en su transporte privado directo a su hotel en Cusco." }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Conductor profesional experimentado en rutas andinas",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas a su ritmo"
    ],
    excludes: [
      "Boleto de ingreso a la comunidad / ruta (aprox. S/ 10 - S/ 20)",
      "Ingreso a los baños termales de Pacchanta (S/ 5 opcional)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ]
  },
  {
    id: "tour-montana-palcoyo",
    title: {
      es: "Montaña Palcoyo (Cordillera de Colores)",
      en: "Palcoyo Mountain (Rainbow Mountain Range)",
      pt: "Montanha Palcoyo (Cordilheira Colorida)"
    },
    category: "Full Day",
    duration: "Full Day",
    difficulty: { es: "Fácil / Moderada (4,900 m.s.n.m.)", en: "Easy / Moderate (4,900 m)", pt: "Fácil / Moderada (4.900 m)" },
    priceFrom: 130,
    image: "/images/palcoyo.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$130.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$160.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$210.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$249.00 USD" },
    ],
    description: {
      es: "La mejor alternativa a Vinicunca con caminata suave y sin pendientes empinadas. Disfruta de la vista panorámica de 3 montañas de colores, el asombroso bosque de piedras geológico y vistas al nevado Ausangate sin aglomeraciones.",
      en: "The best gentle alternative to Vinicunca with easy walking. Enjoy 3 distinct rainbow mountains, a unique rock forest, and views of mount Ausangate with fewer crowds.",
      pt: "A melhor alternativa a Vinicunca com caminhada leve. Desfrute da vista de 3 montanhas coloridas, a floresta de pedras e vistas do nevado Ausangate sem multidões."
    },
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y caminata suave sin aglomeraciones.",
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco temprano por la mañana (horario coordinado a su elección)." },
      { detail: "Viaje cómodo por el valle sur pasando por Combapata con parada para desayuno reconfortante." },
      { detail: "Llegada al punto de inicio cerca de Palcoyo (aprox. 4,900 m.s.n.m.)." },
      { detail: "Caminata suave y casi plana de 45 min a 1 hora apreciando las tres montañas de colores." },
      { detail: "Visita y tiempo fotográfico en el impresionante Bosque de Piedras (formación geológica única)." },
      { detail: "Descenso y almuerzo reconfortante tradicional." },
      { detail: "Retorno tranquilo a Cusco en su movilidad privada directo a su hotel." }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Conductor profesional experimentado en rutas de montaña",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas y viaje a su ritmo"
    ],
    excludes: [
      "Boleto de ingreso a la comunidad de Palcoyo (aprox. S/ 15 - S/ 20)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ]
  },
  {
    id: "tour-valle-sur-cusco",
    title: {
      es: "Tour Valle Sur Cusco (Tipón, Pikillacta & Andahuaylillas)",
      en: "South Valley Cusco Tour (Tipon, Pikillacta & Andahuaylillas)",
      pt: "Tour Vale Sul Cusco (Tipón, Pikillacta e Andahuaylillas)"
    },
    category: "Half Day",
    duration: "Half Day",
    difficulty: { es: "Fácil (3,100 - 3,500 m.s.n.m.)", en: "Easy (3,100 - 3,500 m)", pt: "Fácil (3.100 - 3.500 m)" },
    priceFrom: 80,
    image: "/images/valle-sur-cusco.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$80.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$100.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$150.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$180.00 USD" },
    ],
    description: {
      es: "Ruta cultural que combina la asombrosa ingeniería hidráulica inca de Tipón, la imponente ciudadela pre-inca Wari de Pikillacta y la hermosa 'Capilla Sixtina de América' en la iglesia de San Pedro Apóstol de Andahuaylillas.",
      en: "A fascinating cultural journey combining the Inca hydraulic engineering of Tipon, the pre-Inca Wari city of Pikillacta, and the Andean Sistine Chapel in Andahuaylillas.",
      pt: "Uma rota cultural fascinante combinando a engenharia hidráulica inca de Tipón, a cidadela pré-inca Wari de Pikillacta e a Capela Sistina das Américas em Andahuaylillas."
    },
    includesSummary: "Transporte 100% privado, chofer profesional, paradas fotográficas ilimitadas y visita gastronómica opcional en Saylla o Huaro.",
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco en el horario coordinado (mañana o tarde)." },
      { detail: "Viaje cómodo hacia el Parque Arqueológico de Tipón para admirar sus fuentes ceremoniales y andenes hidráulicos." },
      { detail: "Recorrido por el complejo arqueológico de Pikillacta, testimonio urbanístico de la cultura Wari." },
      { detail: "Llegada al pueblo tradicional de Andahuaylillas y visita a su templo barroco con lienzos de la escuela cusqueña." },
      { detail: "Parada opcional en Saylla o Huaro para probar gastronomía típica tradicional (chicharrón o panes de Oropesa)." },
      { detail: "Retorno tranquilo y seguro a la ciudad de Cusco directo a su alojamiento." }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Combustible, peajes y conductor profesional local",
      "Flexibilidad total de paradas y tiempos a su gusto"
    ],
    excludes: [
      "Boleto Turístico del Cusco (BTC para Tipón y Pikillacta)",
      "Boleto de ingreso a la iglesia de Andahuaylillas (aprox. S/ 15)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ]
  },
  {
    id: "tour-glaciar-quelccaya",
    title: {
      es: "Glaciar Quelccaya (El Glaciar Tropical Más Grande del Mundo)",
      en: "Quelccaya Glacier (World's Largest Tropical Ice Cap)",
      pt: "Geleira Quelccaya (A Maior Geleira Tropical do Mundo)"
    },
    category: "Full Day",
    duration: "Full Day",
    difficulty: { es: "Exigente (5,100 - 5,200 m.s.n.m.)", en: "Challenging (5,100 - 5,200 m)", pt: "Desafiador (5.100 - 5.200 m)" },
    priceFrom: 280,
    image: "/images/glaciar-quelccaya.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$280.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$430.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$480.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$600.00 USD" },
    ],
    description: {
      es: "Expedición única al casquete de hielo tropical más extenso del planeta en la cordillera Vilcanota. Admira imponentes paredes de hielo turquesa de hasta 30 metros de altura, lagunas glaciares y paisajes vírgenes de alta montaña.",
      en: "Exclusive high-altitude expedition to the largest tropical ice cap on Earth. Witness massive 30-meter turquoise ice walls, crystal glacial lagoons, and pristine Andean wilderness.",
      pt: "Expedição única à maior calota de gelo tropical do planeta na cordilheira Vilcanota. Admire imponentes paredões de gelo turquesa de até 30 metros, lagoas glaciais e paisagens andinas intocadas."
    },
    includesSummary: "Transporte 100% privado 4x4 / turismo andino, chofer experimentado de alta montaña, oxígeno medicinal y asistencia permanente.",
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco de madrugada (aprox. 03:30 - 04:00 AM coordinado a su elección)." },
      { detail: "Viaje cómodo por la ruta sur andina con parada para desayuno reconfortante en Checacupe o Pitumarca." },
      { detail: "Paso por paisajes remotos de puna andina con presencia de alpacas, llamas y vicuñas en su hábitat natural." },
      { detail: "Llegada al punto de inicio cerca del glaciar y comienzo de la caminata hacia la base de la masa de hielo." },
      { detail: "Tiempo libre para explorar de cerca las monumentales cuevas y paredes de hielo cristalino y lagunas de deshielo." },
      { detail: "Descenso y almuerzo reconfortante tradicional en comunidad local." },
      { detail: "Retorno seguro a la ciudad de Cusco en su unidad privada directo a su alojamiento." }
    ],
    includes: [
      "Transporte turístico privado ida y vuelta apto para rutas andinas",
      "Conductor profesional experto en alta montaña",
      "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
      "Manta térmica y paradas fotográficas ilimitadas"
    ],
    excludes: [
      "Aporte o ticket comunal de ingreso (aprox. S/ 15 - S/ 20)",
      "Alimentación y bebidas",
      "Guía oficial de montaña (opcional adicional)",
      "Propinas"
    ]
  },
  {
    id: "tour-waqrapukara",
    title: {
      es: "Waqrapukara (Fortaleza Sagrada Inca)",
      en: "Waqrapukara (Sacred Inca Fortress)",
      pt: "Waqrapukara (Fortaleza Sagrada Inca)"
    },
    category: "Full Day",
    duration: "Full Day",
    difficulty: { es: "Moderada / Exigente (4,140 m.s.n.m.)", en: "Moderate / Challenging (4,140 m)", pt: "Moderada / Desafiadora (4.140 m)" },
    priceFrom: 150,
    image: "/images/waqrapukara.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$150.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$200.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$270.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$290.00 USD" },
    ],
    description: {
      es: "Aventura mística hacia una de las fortalezas y santuarios incas más impresionantes del Perú, construida en la cima de un gigantesco promontorio rocoso con forma de cuernos sobre el majestuoso cañón del río Apurímac.",
      en: "Mystical trek to one of Peru's most dramatic sacred Inca sanctuaries, perched on a horned rock formation high above the Apurimac River canyon.",
      pt: "Aventura mística a um dos santuários incas mais impressionantes do Peru, construído no topo de uma formação rochosa em forma de chifres sobre o cânion do rio Apurímac."
    },
    includesSummary: "Transporte 100% privado, chofer profesional experto en rutas andinas, oxígeno medicinal y caminata a tu propio ritmo.",
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco temprano por la mañana (horario coordinado a su elección)." },
      { detail: "Viaje cómodo por el valle sur andino con parada para desayuno reconfortante en Cusipata o Sangarará." },
      { detail: "Paso escénico por la laguna de Pomacanchi y llegada a la comunidad de Santa Lucía o Pitumarca (punto de inicio)." },
      { detail: "Inicio de la caminata hacia el monumento arqueológico de Waqrapukara con vistas panorámicas al cañón del Apurímac." },
      { detail: "Exploración completa del santuario: recintos ceremoniales, andenes incas, hornacinas de triple jamba y torreones." },
      { detail: "Tiempo para almuerzo campestre / box lunch con vista inolvidable." },
      { detail: "Retorno a la movilidad privada y traslado seguro de regreso a su hotel en Cusco." }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Conductor profesional experimentado en rutas andinas",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas y viaje a su propio ritmo"
    ],
    excludes: [
      "Aporte o boleto comunal de ingreso a Waqrapukara (aprox. S/ 10 - S/ 15)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ]
  },
  {
    id: "tour-maras-moray-salineras",
    title: {
      es: "Maras, Moray y Salineras (Cusco - Ollantaytambo)",
      en: "Maras, Moray & Salt Mines (Cusco - Ollantaytambo)",
      pt: "Maras, Moray e Salineras (Cusco - Ollantaytambo)"
    },
    category: "Half Day",
    duration: "Half Day",
    difficulty: { es: "Fácil", en: "Easy", pt: "Fácil" },
    priceFrom: 90,
    image: "/images/maras-moray-salineras.jpg",
    vehicleRates: [
      { vehicle: "Sedán - SUV", capacity: "3 pax", price: "$90.00 USD" },
      { vehicle: "Minivan", capacity: "6 pax", price: "$110.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "10 pax", price: "$140.00 USD" },
      { vehicle: "Mercedes-Benz", capacity: "15 pax", price: "$180.00 USD" },
    ],
    description: {
      es: "Recorrido privado ideal conectando Cusco con Ollantaytambo (o viceversa), visitando en ruta el pintoresco pueblo de Maras, los impresionantes andenes circulares de Moray y las miles de pozas milenarias de las Salineras de Maras.",
      en: "Private tour connecting Cusco and Ollantaytambo while visiting the colonial town of Maras, the circular Inca agricultural terraces of Moray, and the ancient Salt Mines of Maras.",
      pt: "Passeio privado conectando Cusco e Ollantaytambo, visitando no caminho o povoado de Maras, os terraços circulares incas de Moray e as impressionantes Salineras de Maras."
    },
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
    itinerary: [
      { detail: "Recojo privado en su hotel en Cusco (o estación/hotel en Ollantaytambo) en el horario coordinado a su elección." },
      { detail: "Viaje escénico por la meseta de Chinchero con vistas panorámicas a la cordillera de los Andes." },
      { detail: "Visita al Centro Arqueológico de Moray y sus famosos andenes circulares de experimentación agrícola inca." },
      { detail: "Paso por el pueblo colonial de Maras y sus históricas portadas de piedra." },
      { detail: "Exploración de las Salineras de Maras con más de 3,000 pozas de sal cristalina explotadas artesanalmente." },
      { detail: "Llegada directa a la estación de tren o a su hotel en Ollantaytambo (o retorno a Cusco según su ruta)." }
    ],
    includes: [
      "Transporte turístico 100% privado con chofer profesional",
      "Recojo en Cusco y desembarque en Ollantaytambo (o viceversa) con custodia de equipaje a bordo",
      "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
      "Paradas fotográficas ilimitadas y tiempos flexibles a su ritmo"
    ],
    excludes: [
      "Boleto Turístico del Cusco (BTC para Moray)",
      "Boleto de ingreso a Salineras de Maras (S/ 20)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ]
  }
];
