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
    priceFrom: 120,
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
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, medical oxygen, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Recojo de su hotel en Cusco en vehículo privado (horario coordinado a su elección).",
        en: "Private pickup from your hotel in Cusco (departure time coordinated to your preference).",
        pt: "Busca privada em seu hotel em Cusco (horário combinado de sua preferência)."
      },
      {
        detail: "Visita al pueblo tradicional de Chinchero y demostración de textilería viva ancestral.",
        en: "Visit to the traditional town of Chinchero and ancestral Andean weaving demonstration.",
        pt: "Visita ao povoado tradicional de Chinchero e demonstração de tecelagem ancestral."
      },
      {
        detail: "Recorrido por los andenes circulares y laboratorio agrícola inca de Moray.",
        en: "Tour of the circular terraces and Inca agricultural laboratory of Moray.",
        pt: "Passeio pelos terraços circulares e laboratório agrícola inca de Moray."
      },
      {
        detail: "Visita a las miles de pozas de extracción artesanal de Salineras de Maras.",
        en: "Visit to the thousands of artisanal salt ponds at the Maras Salt Mines.",
        pt: "Visita às milhares de piscinas de extração artesanal das Salineras de Maras."
      },
      {
        detail: "Parada para almuerzo buffet en Urubamba (opcional y sin prisas).",
        en: "Stop for a buffet lunch in Urubamba (optional and unhurried).",
        pt: "Parada para almoço buffet em Urubamba (opcional e sem pressa)."
      },
      {
        detail: "Exploración del impresionante Complejo Arqueológico y fortaleza de Ollantaytambo.",
        en: "Exploration of the impressive Archaeological Complex and fortress of Ollantaytambo.",
        pt: "Exploração do impressionante Complexo Arqueológico e fortaleza de Ollantaytambo."
      },
      {
        detail: "Retorno tranquilo a Cusco o traslado directo a la estación de tren de Ollantaytambo.",
        en: "Comfortable return to Cusco or direct drop-off at the Ollantaytambo train station.",
        pt: "Retorno tranquilo a Cusco ou desembarque direto na estação de trem de Ollantaytambo."
      }
    ],
    includes: [
      "Transporte turístico 100% privado con chofer profesional",
      "Recojo y retorno en su hotel",
      "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
      "Flexibilidad total de paradas y tiempos a su gusto"
    ],
    includesI18n: {
      es: [
        "Transporte turístico 100% privado con chofer profesional",
        "Recojo y retorno en su hotel",
        "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
        "Flexibilidad total de paradas y tiempos a su gusto"
      ],
      en: [
        "100% private tourist transport with professional driver",
        "Hotel pickup and drop-off",
        "Medical oxygen on board and first aid kit",
        "Total flexibility for stops and timing at your own pace"
      ],
      pt: [
        "Transporte turístico 100% privado com motorista profissional",
        "Busca e retorno em seu hotel",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Flexibilidade total de paradas e horários ao seu gosto"
      ]
    },
    excludes: [
      "Boleto Turístico del Cusco (BTC)",
      "Boleto de ingreso a Salineras de Maras (S/ 20)",
      "Guía oficial de turismo (opcional adicional)",
      "Alimentación y bebidas",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto Turístico del Cusco (BTC)",
        "Boleto de ingreso a Salineras de Maras (S/ 20)",
        "Guía oficial de turismo (opcional adicional)",
        "Alimentación y bebidas",
        "Propinas"
      ],
      en: [
        "Cusco Tourist Ticket (BTC)",
        "Maras Salt Mines entrance ticket (S/ 20)",
        "Official tour guide (optional add-on)",
        "Meals and beverages",
        "Gratuities / Tips"
      ],
      pt: [
        "Bilhete Turístico de Cusco (BTC)",
        "Ingresso para as Salineras de Maras (S/ 20)",
        "Guia oficial de turismo (opcional adicional)",
        "Alimentação e bebidas",
        "Gorjetas"
      ]
    }
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
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, medical oxygen, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Pick-up privado directo en la puerta de su hotel en Cusco.",
        en: "Direct private pickup at the door of your hotel in Cusco.",
        pt: "Busca privada direta na porta do seu hotel em Cusco."
      },
      {
        detail: "Parada para desayuno tradicional reconfortante en Cusipata.",
        en: "Stop for a comforting traditional breakfast in Cusipata.",
        pt: "Parada para café da manhã tradicional reconfortante em Cusipata."
      },
      {
        detail: "Llegada al punto de inicio en Phulawasipata y comienzo de la caminata a tu propio paso.",
        en: "Arrival at the Phulawasipata trailhead and start of the hike at your own pace.",
        pt: "Chegada ao ponto de início em Phulawasipata e começo da caminhada no seu próprio ritmo."
      },
      {
        detail: "Llegada a la cumbre de la Montaña de 7 Colores con tiempo libre para fotos y contemplar el paisaje.",
        en: "Arrival at the summit of Rainbow Mountain with free time for photos and admiring the scenery.",
        pt: "Chegada ao cume da Montanha de 7 Cores com tempo livre para fotos e contemplar a paisagem."
      },
      {
        detail: "Descenso y almuerzo buffet reconfortante.",
        en: "Descent and comforting buffet lunch.",
        pt: "Descida e almoço buffet reconfortante."
      },
      {
        detail: "Retorno cómodo y seguro a la ciudad de Cusco en su unidad privada.",
        en: "Comfortable and safe return to Cusco in your private vehicle.",
        pt: "Retorno confortável e seguro à cidade de Cusco em seu veículo privado."
      }
    ],
    includes: [
      "Transporte turístico privado ida y vuelta",
      "Conductor experimentado en rutas de montaña",
      "Oxígeno medicinal + pulsiómetro"
    ],
    includesI18n: {
      es: [
        "Transporte turístico privado ida y vuelta",
        "Conductor experimentado en rutas de montaña",
        "Oxígeno medicinal + pulsiómetro"
      ],
      en: [
        "Round-trip private tourist transportation",
        "Driver experienced in high-mountain routes",
        "Medical oxygen + pulse oximeter"
      ],
      pt: [
        "Transporte turístico privado de ida e volta",
        "Motorista experiente em rotas de montanha",
        "Oxigênio medicinal + oxímetro de pulso"
      ]
    },
    excludes: [
      "Boleto de ingreso a la comunidad (S/ 25)",
      "Caballo de alquiler opcional",
      "Guía oficial de montaña",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto de ingreso a la comunidad (S/ 25)",
        "Caballo de alquiler opcional",
        "Guía oficial de montaña",
        "Propinas"
      ],
      en: [
        "Community entrance ticket (S/ 25)",
        "Optional horse rental",
        "Official mountain guide",
        "Gratuities / Tips"
      ],
      pt: [
        "Ingresso da comunidade local (S/ 25)",
        "Aluguel de cavalo opcional",
        "Guia oficial de montanha",
        "Gorjetas"
      ]
    }
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
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, medical oxygen, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco a la hora previamente acordada.",
        en: "Private pickup from your hotel in Cusco at the pre-arranged time.",
        pt: "Busca privada em seu hotel em Cusco no horário previamente combinado."
      },
      {
        detail: "Parada para desayuno energético en Mollepata.",
        en: "Stop for an energizing breakfast in Mollepata.",
        pt: "Parada para café da manhã energético em Mollepata."
      },
      {
        detail: "Llegada a Soraypampa e inicio de la caminata hacia la laguna a tu propio ritmo.",
        en: "Arrival at Soraypampa and start of the hike to the lagoon at your own pace.",
        pt: "Chegada a Soraypampa e início da caminhada até a lagoa no seu próprio ritmo."
      },
      {
        detail: "Tiempo libre para disfrutar, meditar y fotografiar las aguas turquesas de la Laguna Humantay.",
        en: "Free time to enjoy, relax, and photograph the turquoise waters of Humantay Lake.",
        pt: "Tempo livre para aproveitar, relaxar e fotografar as águas turquesas da Lagoa Humantay."
      },
      {
        detail: "Descenso y almuerzo tradicional en Mollepata.",
        en: "Descent and traditional lunch in Mollepata.",
        pt: "Descida e almoço tradicional em Mollepata."
      },
      {
        detail: "Retorno a la ciudad del Cusco directo a su hotel.",
        en: "Return to Cusco directly to your hotel.",
        pt: "Retorno à cidade de Cusco direto ao seu hotel."
      }
    ],
    includes: [
      "Transporte privado A/C Cusco - Soraypampa - Cusco",
      "Chofer capacitado en primeros auxilios",
      "Oxígeno medicinal de emergencia"
    ],
    includesI18n: {
      es: [
        "Transporte privado A/C Cusco - Soraypampa - Cusco",
        "Chofer capacitado en primeros auxilios",
        "Oxígeno medicinal de emergencia"
      ],
      en: [
        "Private A/C transport Cusco - Soraypampa - Cusco",
        "Driver trained in first aid",
        "Emergency medical oxygen"
      ],
      pt: [
        "Transporte privado com A/C Cusco - Soraypampa - Cusco",
        "Motorista treinado em primeiros socorros",
        "Oxigênio medicinal de emergência"
      ]
    },
    excludes: [
      "Ingreso a la comunidad de Mollepata (S/ 20)",
      "Caballos opcionales",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Ingreso a la comunidad de Mollepata (S/ 20)",
        "Caballos opcionales",
        "Propinas"
      ],
      en: [
        "Mollepata community entrance fee (S/ 20)",
        "Optional horses",
        "Gratuities / Tips"
      ],
      pt: [
        "Entrada na comunidade de Mollepata (S/ 20)",
        "Cavalos opcionais",
        "Gorjetas"
      ]
    }
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
    includesSummary: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, medical oxygen, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Recojo en su hotel en el horario que elija (mañana o tarde).",
        en: "Pickup at your hotel at your preferred schedule (morning or afternoon).",
        pt: "Busca em seu hotel no horário de sua escolha (manhã ou tarde)."
      },
      {
        detail: "Visita y exploración del imponente Parque Arqueológico de Sacsayhuamán.",
        en: "Visit and exploration of the impressive Sacsayhuamán Archaeological Park.",
        pt: "Visita e exploração do imponente Parque Arqueológico de Sacsayhuamán."
      },
      {
        detail: "Recorrido por el centro laberíntico y ceremonial de Qenqo.",
        en: "Tour through the labyrinthine ceremonial center of Qenqo.",
        pt: "Passeio pelo centro labiríntico e cerimonial de Qenqo."
      },
      {
        detail: "Visita panorámica a la fortaleza militar de Puka Pukara.",
        en: "Panoramic visit to the military fortress of Puka Pukara.",
        pt: "Visita panorâmica à fortaleza militar de Puka Pukara."
      },
      {
        detail: "Exploración de los baños sagrados del Inca en Tambomachay.",
        en: "Exploration of the sacred Inca baths at Tambomachay.",
        pt: "Exploração dos banhos sagrados do Inca em Tambomachay."
      },
      {
        detail: "Retorno cómodo al centro histórico de Cusco.",
        en: "Comfortable return to the historic center of Cusco.",
        pt: "Retorno confortável ao centro histórico de Cusco."
      }
    ],
    includes: [
      "Transporte turístico privado de primer nivel",
      "Combustible, chofer y peajes incluidos",
      "Paradas personalizadas para fotos"
    ],
    includesI18n: {
      es: [
        "Transporte turístico privado de primer nivel",
        "Combustible, chofer y peajes incluidos",
        "Paradas personalizadas para fotos"
      ],
      en: [
        "Top-tier private tourist transportation",
        "Fuel, professional driver, and tolls included",
        "Customized photo stops"
      ],
      pt: [
        "Transporte turístico privado de primeira linha",
        "Combustível, motorista e pedágios incluídos",
        "Paradas personalizadas para fotos"
      ]
    },
    excludes: [
      "Boleto Turístico del Cusco (BTC)",
      "Guía turístico",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto Turístico del Cusco (BTC)",
        "Guía turístico",
        "Propinas"
      ],
      en: [
        "Cusco Tourist Ticket (BTC)",
        "Tour guide",
        "Gratuities / Tips"
      ],
      pt: [
        "Bilhete Turístico de Cusco (BTC)",
        "Guia turístico",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Recojo de su hotel en Cusco en vehículo privado (horario coordinado a su elección).",
        en: "Pickup from your hotel in Cusco in a private vehicle (time coordinated to your preference).",
        pt: "Busca em seu hotel em Cusco em veículo privado (horário combinado de sua escolha)."
      },
      {
        detail: "Recorrido escénico por el circuito de las cuatro lagunas (Pomacanchi, Acopia, Asnaqocha y Pampamarca).",
        en: "Scenic drive through the Four Lagoons circuit (Pomacanchi, Acopia, Asnaqocha, and Pampamarca).",
        pt: "Passeio panorâmico pelo circuito das quatro lagoas (Pomacanchi, Acopia, Asnaqocha e Pampamarca)."
      },
      {
        detail: "Llegada al cañón del río Apurímac y al histórico Puente Colgante Inca Q'eswachaka.",
        en: "Arrival at the Apurímac River canyon and the historic Q'eswachaka Inca Suspension Bridge.",
        pt: "Chegada ao cânion do rio Apurímac e à histórica Ponte Pênsil Inca Q'eswachaka."
      },
      {
        detail: "Tiempo para cruzar el puente de paja brava ichu y conocer las tradiciones comunales vivas.",
        en: "Time to cross the handwoven ichu grass bridge and learn about living local traditions.",
        pt: "Tempo para atravessar a ponte de palha ichu e conhecer as tradições comunitárias vivas."
      },
      {
        detail: "Paradas fotográficas en miradores y almuerzo campestre/tradicional.",
        en: "Photo stops at scenic viewpoints and traditional countryside lunch.",
        pt: "Paradas para fotos em mirantes e almoço campestre/tradicional."
      },
      {
        detail: "Retorno tranquilo y seguro a la ciudad de Cusco directo a su hotel.",
        en: "Comfortable and safe return to Cusco directly to your hotel.",
        pt: "Retorno tranquilo e seguro à cidade de Cusco direto ao seu hotel."
      }
    ],
    includes: [
      "Transporte 100% privado con chofer profesional",
      "Recojo y retorno en su hotel en Cusco",
      "Paradas fotográficas ilimitadas",
      "Tiempo libre y recorrido a su propio ritmo"
    ],
    includesI18n: {
      es: [
        "Transporte 100% privado con chofer profesional",
        "Recojo y retorno en su hotel en Cusco",
        "Paradas fotográficas ilimitadas",
        "Tiempo libre y recorrido a su propio ritmo"
      ],
      en: [
        "100% private transport with professional driver",
        "Hotel pickup and drop-off in Cusco",
        "Unlimited photo stops",
        "Free time and tour at your own pace"
      ],
      pt: [
        "Transporte 100% privado com motorista profissional",
        "Busca e retorno em seu hotel em Cusco",
        "Paradas ilimitadas para fotos",
        "Tempo livre e passeio no seu próprio ritmo"
      ]
    },
    excludes: [
      "Boleto o aporte comunal de ingreso al puente Q'eswachaka",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto o aporte comunal de ingreso al puente Q'eswachaka",
        "Alimentación y bebidas",
        "Guía oficial de turismo (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Community entrance ticket to Q'eswachaka Bridge",
        "Meals and beverages",
        "Official tour guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Ingresso comunitário para a ponte Q'eswachaka",
        "Alimentação e bebidas",
        "Guia oficial de turismo (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, medical oxygen, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Pick-up privado en su hotel en Cusco (horario coordinado a su elección).",
        en: "Private pickup from your hotel in Cusco (time coordinated to your preference).",
        pt: "Busca privada em seu hotel em Cusco (horário combinado de sua preferência)."
      },
      {
        detail: "Viaje cómodo por el valle sur con parada para desayuno reconfortante.",
        en: "Comfortable drive through the South Valley with a stop for a comforting breakfast.",
        pt: "Viagem confortável pelo vale sul com parada para café da manhã reconfortante."
      },
      {
        detail: "Llegada al punto de partida cerca de Layo y la laguna Langui.",
        en: "Arrival at the starting point near Layo and Langui Lagoon.",
        pt: "Chegada ao ponto de partida perto de Layo e da lagoa Langui."
      },
      {
        detail: "Ascenso a pie a su propio paso hacia la cresta afilada de colores de Pallay Punchu.",
        en: "Hike up at your own pace toward the sharp colored ridges of Pallay Punchu.",
        pt: "Subida a pé no seu próprio ritmo até a crista colorida de Pallay Punchu."
      },
      {
        detail: "Tiempo libre para fotos inolvidables con vistas a la laguna y las formaciones andinas.",
        en: "Free time for unforgettable photos overlooking the lagoon and Andean formations.",
        pt: "Tempo livre para fotos inesquecíveis com vista para a lagoa e formações andinas."
      },
      {
        detail: "Descenso y almuerzo reconfortante.",
        en: "Descent and comforting lunch.",
        pt: "Descida e almoço reconfortante."
      },
      {
        detail: "Retorno a la ciudad del Cusco directo a su alojamiento.",
        en: "Return to the city of Cusco directly to your accommodation.",
        pt: "Retorno à cidade de Cusco direto à sua hospedagem."
      }
    ],
    includes: [
      "Transporte 100% privado con chofer profesional",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas",
      "Manta térmica y asistencia en ruta"
    ],
    includesI18n: {
      es: [
        "Transporte 100% privado con chofer profesional",
        "Oxígeno medicinal a bordo y botiquín",
        "Paradas fotográficas ilimitadas",
        "Manta térmica y asistencia en ruta"
      ],
      en: [
        "100% private transport with professional driver",
        "Medical oxygen on board and first aid kit",
        "Unlimited photo stops",
        "Thermal blanket and route assistance"
      ],
      pt: [
        "Transporte 100% privado com motorista profissional",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Paradas ilimitadas para fotos",
        "Manta térmica e assistência na rota"
      ]
    },
    excludes: [
      "Boleto o ticket de ingreso comunal a Pallay Punchu",
      "Alimentación y bebidas",
      "Guía oficial de montaña (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto o ticket de ingreso comunal a Pallay Punchu",
        "Alimentación y bebidas",
        "Guía oficial de montaña (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Community entrance ticket to Pallay Punchu",
        "Meals and beverages",
        "Official mountain guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Ingresso comunitário para Pallay Punchu",
        "Alimentação e bebidas",
        "Guia oficial de montanha (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer experimentado, oxígeno medicinal y tiempo en aguas termales de Pacchanta.",
      en: "100% private transport, experienced driver, medical oxygen, and time at Pacchanta hot springs.",
      pt: "Transporte 100% privado, motorista experiente, oxigênio medicinal e tempo nas águas termais de Pacchanta."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco de madrugada (horario coordinado a su elección).",
        en: "Early morning private pickup from your hotel in Cusco (time coordinated to your preference).",
        pt: "Busca privada de madrugada em seu hotel em Cusco (horário combinado de sua preferência)."
      },
      {
        detail: "Viaje panorámico hacia la comunidad andina de Pacchanta con parada para desayuno reconfortante.",
        en: "Scenic drive toward the Andean community of Pacchanta with a stop for a comforting breakfast.",
        pt: "Viagem panorâmica até a comunidade andina de Pacchanta com parada para café da manhã reconfortante."
      },
      {
        detail: "Inicio del trekking por el circuito de las 7 lagunas a los pies del nevado sagrado Ausangate (Pucacocha, Patacocha, Comercocha, Azulcocha, etc.).",
        en: "Start of the trek around the 7 lagoons circuit at the foot of sacred Mount Ausangate (Pucacocha, Patacocha, Comercocha, Azulcocha, etc.).",
        pt: "Início do trekking pelo circuito das 7 lagoas aos pés do sagrado nevado Ausangate (Pucacocha, Patacocha, Comercocha, Azulcocha, etc.)."
      },
      {
        detail: "Paradas fotográficas y contemplación de paisajes glaciares, flora y fauna andina (alpacas y vizcachas).",
        en: "Photo stops and contemplation of glacial landscapes, Andean flora, and wildlife (alpacas and vizcachas).",
        pt: "Paradas para fotos e contemplação de paisagens glaciais, flora e fauna andina (alpacas e vizcachas)."
      },
      {
        detail: "Retorno a Pacchanta y tiempo libre para disfrutar de las reconfortantes aguas termales medicinales.",
        en: "Return to Pacchanta and free time to enjoy the soothing medicinal hot springs.",
        pt: "Retorno a Pacchanta e tempo livre para aproveitar as relaxantes águas termais medicinais."
      },
      {
        detail: "Almuerzo tradicional reconfortante en Pacchanta.",
        en: "Comforting traditional lunch in Pacchanta.",
        pt: "Almoço tradicional reconfortante em Pacchanta."
      },
      {
        detail: "Retorno cómodo y seguro en su transporte privado directo a su hotel en Cusco.",
        en: "Comfortable and safe return in your private transport directly to your hotel in Cusco.",
        pt: "Retorno confortável e seguro em seu transporte privado direto ao seu hotel em Cusco."
      }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Conductor profesional experimentado en rutas andinas",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas a su ritmo"
    ],
    includesI18n: {
      es: [
        "Transporte turístico 100% privado ida y vuelta",
        "Conductor profesional experimentado en rutas andinas",
        "Oxígeno medicinal a bordo y botiquín",
        "Paradas fotográficas ilimitadas a su ritmo"
      ],
      en: [
        "Round-trip 100% private tourist transportation",
        "Professional driver experienced in Andean routes",
        "Medical oxygen on board and first aid kit",
        "Unlimited photo stops at your own pace"
      ],
      pt: [
        "Transporte turístico 100% privado de ida e volta",
        "Motorista profissional experiente em rotas andinas",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Paradas ilimitadas para fotos no seu ritmo"
      ]
    },
    excludes: [
      "Boleto de ingreso a la comunidad / ruta (aprox. S/ 10 - S/ 20)",
      "Ingreso a los baños termales de Pacchanta (S/ 5 opcional)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto de ingreso a la comunidad / ruta (aprox. S/ 10 - S/ 20)",
        "Ingreso a los baños termales de Pacchanta (S/ 5 opcional)",
        "Alimentación y bebidas",
        "Guía oficial de turismo (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Community / trail entrance ticket (approx. S/ 10 - S/ 20)",
        "Pacchanta hot springs entrance fee (S/ 5 optional)",
        "Meals and beverages",
        "Official tour guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Ingresso da comunidade / trilha (aprox. S/ 10 - S/ 20)",
        "Entrada nas águas termais de Pacchanta (S/ 5 opcional)",
        "Alimentação e bebidas",
        "Guia oficial de turismo (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y caminata suave sin aglomeraciones.",
      en: "100% private transport, professional driver, medical oxygen, and gentle walk without crowds.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e caminhada leve sem multidões."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco temprano por la mañana (horario coordinado a su elección).",
        en: "Early morning private pickup from your hotel in Cusco (time coordinated to your preference).",
        pt: "Busca privada em seu hotel em Cusco cedo pela manhã (horário combinado de sua preferência)."
      },
      {
        detail: "Viaje cómodo por el valle sur pasando por Combapata con parada para desayuno reconfortante.",
        en: "Comfortable drive through the South Valley passing Combapata with a stop for breakfast.",
        pt: "Viagem confortável pelo vale sul passando por Combapata com parada para café da manhã."
      },
      {
        detail: "Llegada al punto de inicio cerca de Palcoyo (aprox. 4,900 m.s.n.m.).",
        en: "Arrival at the trailhead near Palcoyo (approx. 4,900 m / 16,076 ft).",
        pt: "Chegada ao ponto de início perto de Palcoyo (aprox. 4.900 m)."
      },
      {
        detail: "Caminata suave y casi plana de 45 min a 1 hora apreciando las tres montañas de colores.",
        en: "Gentle, mostly flat 45-to-60-minute walk admiring the three rainbow mountains.",
        pt: "Caminhada leve e quase plana de 45 min a 1 hora apreciando as três montanhas coloridas."
      },
      {
        detail: "Visita y tiempo fotográfico en el impresionante Bosque de Piedras (formación geológica única).",
        en: "Visit and photo time at the impressive Stone Forest (unique geological formation).",
        pt: "Visita e tempo para fotos na impressionante Floresta de Pedras (formação geológica única)."
      },
      {
        detail: "Descenso y almuerzo reconfortante tradicional.",
        en: "Descent and traditional comforting lunch.",
        pt: "Descida e almoço tradicional reconfortante."
      },
      {
        detail: "Retorno tranquilo a Cusco en su movilidad privada directo a su hotel.",
        en: "Peaceful return to Cusco in your private vehicle directly to your hotel.",
        pt: "Retorno tranquilo a Cusco em seu veículo privado direto ao seu hotel."
      }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Conductor profesional experimentado en rutas de montaña",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas y viaje a su ritmo"
    ],
    includesI18n: {
      es: [
        "Transporte turístico 100% privado ida y vuelta",
        "Conductor profesional experimentado en rutas de montaña",
        "Oxígeno medicinal a bordo y botiquín",
        "Paradas fotográficas ilimitadas y viaje a su ritmo"
      ],
      en: [
        "Round-trip 100% private tourist transportation",
        "Professional driver experienced in mountain routes",
        "Medical oxygen on board and first aid kit",
        "Unlimited photo stops and travel at your own pace"
      ],
      pt: [
        "Transporte turístico 100% privado de ida e volta",
        "Motorista profissional experiente em rotas de montanha",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Paradas ilimitadas para fotos e viagem no seu ritmo"
      ]
    },
    excludes: [
      "Boleto de ingreso a la comunidad de Palcoyo (aprox. S/ 15 - S/ 20)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto de ingreso a la comunidad de Palcoyo (aprox. S/ 15 - S/ 20)",
        "Alimentación y bebidas",
        "Guía oficial de turismo (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Palcoyo community entrance ticket (approx. S/ 15 - S/ 20)",
        "Meals and beverages",
        "Official tour guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Ingresso da comunidade de Palcoyo (aprox. S/ 15 - S/ 20)",
        "Alimentação e bebidas",
        "Guia oficial de turismo (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, paradas fotográficas ilimitadas y visita gastronómica opcional en Saylla o Huaro.",
      en: "100% private transport, professional driver, unlimited photo stops, and optional culinary stop in Saylla or Huaro.",
      pt: "Transporte 100% privado, motorista profissional, paradas ilimitadas para fotos e parada gastronômica opcional em Saylla ou Huaro."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco en el horario coordinado (mañana o tarde).",
        en: "Private pickup from your hotel in Cusco at the coordinated time (morning or afternoon).",
        pt: "Busca privada em seu hotel em Cusco no horário combinado (manhã ou tarde)."
      },
      {
        detail: "Viaje cómodo hacia el Parque Arqueológico de Tipón para admirar sus fuentes ceremoniales y andenes hidráulicos.",
        en: "Comfortable drive to Tipón Archaeological Park to admire its ceremonial fountains and hydraulic terraces.",
        pt: "Viagem confortável ao Parque Arqueológico de Tipón para admirar suas fontes cerimoniais e terraços hidráulicos."
      },
      {
        detail: "Recorrido por el complejo arqueológico de Pikillacta, testimonio urbanístico de la cultura Wari.",
        en: "Tour of the Pikillacta archaeological complex, an urban masterpiece of the pre-Inca Wari culture.",
        pt: "Passeio pelo complexo arqueológico de Pikillacta, marco urbanístico da cultura pré-inca Wari."
      },
      {
        detail: "Llegada al pueblo tradicional de Andahuaylillas y visita a su templo barroco con lienzos de la escuela cusqueña.",
        en: "Arrival at the traditional town of Andahuaylillas and visit to its Baroque church featuring Cusco School paintings.",
        pt: "Chegada ao povoado tradicional de Andahuaylillas e visita à sua igreja barroca com obras da Escola Cusquenha."
      },
      {
        detail: "Parada opcional en Saylla o Huaro para probar gastronomía típica tradicional (chicharrón o panes de Oropesa).",
        en: "Optional stop in Saylla or Huaro to taste traditional local cuisine (Cusco chicharrón or Oropesa bread).",
        pt: "Parada opcional em Saylla ou Huaro para provar a gastronomia típica tradicional."
      },
      {
        detail: "Retorno tranquilo y seguro a la ciudad de Cusco directo a su alojamiento.",
        en: "Peaceful and safe return to Cusco directly to your accommodation.",
        pt: "Retorno tranquilo e seguro à cidade de Cusco direto à sua hospedagem."
      }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Combustible, peajes y conductor profesional local",
      "Flexibilidad total de paradas y tiempos a su gusto"
    ],
    includesI18n: {
      es: [
        "Transporte turístico 100% privado ida y vuelta",
        "Combustible, peajes y conductor profesional local",
        "Flexibilidad total de paradas y tiempos a su gusto"
      ],
      en: [
        "Round-trip 100% private tourist transportation",
        "Fuel, tolls, and professional local driver",
        "Total flexibility for stops and timing at your own pace"
      ],
      pt: [
        "Transporte turístico 100% privado de ida e volta",
        "Combustível, pedágios e motorista profissional local",
        "Flexibilidade total de paradas e horários ao seu gosto"
      ]
    },
    excludes: [
      "Boleto Turístico del Cusco (BTC para Tipón y Pikillacta)",
      "Boleto de ingreso a la iglesia de Andahuaylillas (aprox. S/ 15)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto Turístico del Cusco (BTC para Tipón y Pikillacta)",
        "Boleto de ingreso a la iglesia de Andahuaylillas (aprox. S/ 15)",
        "Alimentación y bebidas",
        "Guía oficial de turismo (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Cusco Tourist Ticket (BTC for Tipón and Pikillacta)",
        "Andahuaylillas church entrance ticket (approx. S/ 15)",
        "Meals and beverages",
        "Official tour guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Bilhete Turístico de Cusco (BTC para Tipón e Pikillacta)",
        "Ingresso para a igreja de Andahuaylillas (aprox. S/ 15)",
        "Alimentação e bebidas",
        "Guia oficial de turismo (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado 4x4 / turismo andino, chofer experimentado de alta montaña, oxígeno medicinal y asistencia permanente.",
      en: "100% private 4x4 / Andean transport, experienced high-mountain driver, medical oxygen, and continuous assistance.",
      pt: "Transporte 100% privado 4x4 / turismo andino, motorista experiente em alta montanha, oxigênio medicinal e assistência permanente."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco de madrugada (aprox. 03:30 - 04:00 AM coordinado a su elección).",
        en: "Early morning private pickup from your hotel in Cusco (approx. 3:30 - 4:00 AM coordinated to your preference).",
        pt: "Busca privada de madrugada em seu hotel em Cusco (aprox. 03h30 - 04h00 combinado de sua escolha)."
      },
      {
        detail: "Viaje cómodo por la ruta sur andina con parada para desayuno reconfortante en Checacupe o Pitumarca.",
        en: "Comfortable drive along the southern Andean route with a stop for breakfast in Checacupe or Pitumarca.",
        pt: "Viagem confortável pela rota sul andina com parada para café da manhã em Checacupe ou Pitumarca."
      },
      {
        detail: "Paso por paisajes remotos de puna andina con presencia de alpacas, llamas y vicuñas en su hábitat natural.",
        en: "Drive through remote high-Andean landscapes spotting alpacas, llamas, and vicuñas in their natural habitat.",
        pt: "Passagem por paisagens remotas da puna andina com alpacas, lhamas e vicunhas em seu habitat natural."
      },
      {
        detail: "Llegada al punto de inicio cerca del glaciar y comienzo de la caminata hacia la base de la masa de hielo.",
        en: "Arrival at the starting point near the glacier and hike toward the base of the ice cap.",
        pt: "Chegada ao ponto de início perto da geleira e começo da caminhada até a base do gelo."
      },
      {
        detail: "Tiempo libre para explorar de cerca las monumentales cuevas y paredes de hielo cristalino y lagunas de deshielo.",
        en: "Free time to explore the monumental crystal ice walls, caves, and glacial lagoons up close.",
        pt: "Tempo livre para explorar de perto os monumentais paredões de gelo cristalino e lagoas glaciais."
      },
      {
        detail: "Descenso y almuerzo reconfortante tradicional en comunidad local.",
        en: "Descent and comforting traditional lunch in a local community.",
        pt: "Descida e almoço tradicional reconfortante em comunidade local."
      },
      {
        detail: "Retorno seguro a la ciudad de Cusco en su unidad privada directo a su alojamiento.",
        en: "Safe return to Cusco in your private vehicle directly to your accommodation.",
        pt: "Retorno seguro à cidade de Cusco em seu veículo privado direto à sua hospedagem."
      }
    ],
    includes: [
      "Transporte turístico privado ida y vuelta apto para rutas andinas",
      "Conductor profesional experto en alta montaña",
      "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
      "Manta térmica y paradas fotográficas ilimitadas"
    ],
    includesI18n: {
      es: [
        "Transporte turístico privado ida y vuelta apto para rutas andinas",
        "Conductor profesional experto en alta montaña",
        "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
        "Manta térmica y paradas fotográficas ilimitadas"
      ],
      en: [
        "Round-trip private tourist transport suited for high-Andean routes",
        "Professional driver specialized in high-mountain roads",
        "Medical oxygen on board and first aid kit",
        "Thermal blanket and unlimited photo stops"
      ],
      pt: [
        "Transporte turístico privado de ida e volta apto para rotas andinas",
        "Motorista profissional especialista em alta montanha",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Manta térmica e paradas ilimitadas para fotos"
      ]
    },
    excludes: [
      "Aporte o ticket comunal de ingreso (aprox. S/ 15 - S/ 20)",
      "Alimentación y bebidas",
      "Guía oficial de montaña (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Aporte o ticket comunal de ingreso (aprox. S/ 15 - S/ 20)",
        "Alimentación y bebidas",
        "Guía oficial de montaña (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Community entrance fee (approx. S/ 15 - S/ 20)",
        "Meals and beverages",
        "Official mountain guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Taxa ou ingresso comunitário de entrada (aprox. S/ 15 - S/ 20)",
        "Alimentação e bebidas",
        "Guia oficial de montanha (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional experto en rutas andinas, oxígeno medicinal y caminata a tu propio ritmo.",
      en: "100% private transport, professional driver experienced in Andean routes, medical oxygen, and hike at your own pace.",
      pt: "Transporte 100% privado, motorista profissional experiente em rotas andinas, oxigênio medicinal e caminhada no seu próprio ritmo."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco temprano por la mañana (horario coordinado a su elección).",
        en: "Early morning private pickup from your hotel in Cusco (time coordinated to your preference).",
        pt: "Busca privada em seu hotel em Cusco cedo pela manhã (horário combinado de sua preferência)."
      },
      {
        detail: "Viaje cómodo por el valle sur andino con parada para desayuno reconfortante en Cusipata o Sangarará.",
        en: "Comfortable drive through the southern Andean valley with a breakfast stop in Cusipata or Sangarará.",
        pt: "Viagem confortável pelo vale sul andino com parada para café da manhã em Cusipata ou Sangarará."
      },
      {
        detail: "Paso escénico por la laguna de Pomacanchi y llegada a la comunidad de Santa Lucía o Pitumarca (punto de inicio).",
        en: "Scenic pass by Pomacanchi Lagoon and arrival at Santa Lucía or Pitumarca community (trailhead).",
        pt: "Passagem panorâmica pela lagoa de Pomacanchi e chegada à comunidade de Santa Lucía ou Pitumarca (ponto de início)."
      },
      {
        detail: "Inicio de la caminata hacia el monumento arqueológico de Waqrapukara con vistas panorámicas al cañón del Apurímac.",
        en: "Start of the hike toward the Waqrapukara archaeological sanctuary with panoramic views of the Apurímac canyon.",
        pt: "Início da caminhada até o santuário arqueológico de Waqrapukara com vistas panorâmicas do cânion do Apurímac."
      },
      {
        detail: "Exploración completa del santuario: recintos ceremoniales, andenes incas, hornacinas de triple jamba y torreones.",
        en: "Full exploration of the sanctuary: ceremonial enclosures, Inca terraces, triple-jamb niches, and towers.",
        pt: "Exploração completa do santuário: recintos cerimoniais, terraços incas, nichos de tripla ombreira e torres."
      },
      {
        detail: "Tiempo para almuerzo campestre / box lunch con vista inolvidable.",
        en: "Time for a picnic / box lunch with an unforgettable view.",
        pt: "Tempo para almoço campestre / box lunch com vista inesquecível."
      },
      {
        detail: "Retorno a la movilidad privada y traslado seguro de regreso a su hotel en Cusco.",
        en: "Return to your private vehicle and safe transfer back to your hotel in Cusco.",
        pt: "Retorno ao veículo privado e traslado seguro de volta ao seu hotel em Cusco."
      }
    ],
    includes: [
      "Transporte turístico 100% privado ida y vuelta",
      "Conductor profesional experimentado en rutas andinas",
      "Oxígeno medicinal a bordo y botiquín",
      "Paradas fotográficas ilimitadas y viaje a su propio ritmo"
    ],
    includesI18n: {
      es: [
        "Transporte turístico 100% privado ida y vuelta",
        "Conductor profesional experimentado en rutas andinas",
        "Oxígeno medicinal a bordo y botiquín",
        "Paradas fotográficas ilimitadas y viaje a su propio ritmo"
      ],
      en: [
        "Round-trip 100% private tourist transportation",
        "Professional driver experienced in Andean routes",
        "Medical oxygen on board and first aid kit",
        "Unlimited photo stops and travel at your own pace"
      ],
      pt: [
        "Transporte turístico 100% privado de ida e volta",
        "Motorista profissional experiente em rotas andinas",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Paradas ilimitadas para fotos e viagem no seu próprio ritmo"
      ]
    },
    excludes: [
      "Aporte o boleto comunal de ingreso a Waqrapukara (aprox. S/ 10 - S/ 15)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Aporte o boleto comunal de ingreso a Waqrapukara (aprox. S/ 10 - S/ 15)",
        "Alimentación y bebidas",
        "Guía oficial de turismo (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Waqrapukara community entrance ticket (approx. S/ 10 - S/ 15)",
        "Meals and beverages",
        "Official tour guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Ingresso comunitário para Waqrapukara (aprox. S/ 10 - S/ 15)",
        "Alimentação e bebidas",
        "Guia oficial de turismo (opcional adicional)",
        "Gorjetas"
      ]
    }
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
    includesSummaryI18n: {
      es: "Transporte 100% privado, chofer profesional, oxígeno medicinal y paradas fotográficas ilimitadas.",
      en: "100% private transport, professional driver, medical oxygen, and unlimited photo stops.",
      pt: "Transporte 100% privado, motorista profissional, oxigênio medicinal e paradas ilimitadas para fotos."
    },
    itinerary: [
      {
        detail: "Recojo privado en su hotel en Cusco (o estación/hotel en Ollantaytambo) en el horario coordinado a su elección.",
        en: "Private pickup at your hotel in Cusco (or station/hotel in Ollantaytambo) at your preferred time.",
        pt: "Busca privada em seu hotel em Cusco (ou estação/hotel em Ollantaytambo) no horário de sua preferência."
      },
      {
        detail: "Viaje escénico por la meseta de Chinchero con vistas panorámicas a la cordillera de los Andes.",
        en: "Scenic drive across the Chinchero plateau with panoramic views of the Andes mountains.",
        pt: "Viagem panorâmica pelo planalto de Chinchero com vistas para a cordilheira dos Andes."
      },
      {
        detail: "Visita al Centro Arqueológico de Moray y sus famosos andenes circulares de experimentación agrícola inca.",
        en: "Visit to the Moray Archaeological Site and its famous circular Inca agricultural terraces.",
        pt: "Visita ao Sítio Arqueológico de Moray e seus famosos terraços circulares de experimentação agrícola inca."
      },
      {
        detail: "Paso por el pueblo colonial de Maras y sus históricas portadas de piedra.",
        en: "Pass through the colonial town of Maras and its historic carved stone doorways.",
        pt: "Passagem pelo povoado colonial de Maras e seus históricos portais de pedra."
      },
      {
        detail: "Exploración de las Salineras de Maras con más de 3,000 pozas de sal cristalina explotadas artesanalmente.",
        en: "Exploration of the Maras Salt Mines featuring over 3,000 artisanal crystalline salt ponds.",
        pt: "Exploração das Salineras de Maras com mais de 3.000 piscinas de sal cristalino cultivadas artesanalmente."
      },
      {
        detail: "Llegada directa a la estación de tren o a su hotel en Ollantaytambo (o retorno a Cusco según su ruta).",
        en: "Direct arrival at the train station or your hotel in Ollantaytambo (or return to Cusco according to your route).",
        pt: "Chegada direta à estação de trem ou ao seu hotel em Ollantaytambo (ou retorno a Cusco conforme sua rota)."
      }
    ],
    includes: [
      "Transporte turístico 100% privado con chofer profesional",
      "Recojo en Cusco y desembarque en Ollantaytambo (o viceversa) con custodia de equipaje a bordo",
      "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
      "Paradas fotográficas ilimitadas y tiempos flexibles a su ritmo"
    ],
    includesI18n: {
      es: [
        "Transporte turístico 100% privado con chofer profesional",
        "Recojo en Cusco y desembarque en Ollantaytambo (o viceversa) con custodia de equipaje a bordo",
        "Oxígeno medicinal a bordo y botiquín de primeros auxilios",
        "Paradas fotográficas ilimitadas y tiempos flexibles a su ritmo"
      ],
      en: [
        "100% private tourist transport with professional driver",
        "Pickup in Cusco and drop-off in Ollantaytambo (or vice versa) with luggage kept safely on board",
        "Medical oxygen on board and first aid kit",
        "Unlimited photo stops and flexible timing at your own pace"
      ],
      pt: [
        "Transporte turístico 100% privado com motorista profissional",
        "Busca em Cusco e desembarque em Ollantaytambo (ou vice-versa) com guarda de bagagem a bordo",
        "Oxigênio medicinal a bordo e kit de primeiros socorros",
        "Paradas ilimitadas para fotos e horários flexíveis no seu ritmo"
      ]
    },
    excludes: [
      "Boleto Turístico del Cusco (BTC para Moray)",
      "Boleto de ingreso a Salineras de Maras (S/ 20)",
      "Alimentación y bebidas",
      "Guía oficial de turismo (opcional adicional)",
      "Propinas"
    ],
    excludesI18n: {
      es: [
        "Boleto Turístico del Cusco (BTC para Moray)",
        "Boleto de ingreso a Salineras de Maras (S/ 20)",
        "Alimentación y bebidas",
        "Guía oficial de turismo (opcional adicional)",
        "Propinas"
      ],
      en: [
        "Cusco Tourist Ticket (BTC for Moray)",
        "Maras Salt Mines entrance ticket (S/ 20)",
        "Meals and beverages",
        "Official tour guide (optional add-on)",
        "Gratuities / Tips"
      ],
      pt: [
        "Bilhete Turístico de Cusco (BTC para Moray)",
        "Ingresso para as Salineras de Maras (S/ 20)",
        "Alimentação e bebidas",
        "Guia oficial de turismo (opcional adicional)",
        "Gorjetas"
      ]
    }
  }
];
