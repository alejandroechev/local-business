// data.js — Datos estructurados para 15 ideas de negocio en Puerto Varas, Chile
// Generado a partir de estudios de factibilidad (mayo 2026)
// Tipo de cambio: 1 USD ≈ 960 CLP

window.businessIdeas = [
  // ───────────────────────────────────────────────
  // 1. ESCAPE ROOM
  // ───────────────────────────────────────────────
  {
    id: "escape-room",
    emoji: "🔐",
    name: "Escape Room",
    category: "entretenimiento",
    feasibility: 4,
    capexMin: 20000,
    capexMax: 130000,
    capexMid: 75000,
    opexMin: 5600,
    opexMax: 7800,
    revenueAnnual: 85200,
    breakeven: "30% de ocupación (operado por dueño)",
    payback: "2.5–3 años",
    summary: "Salas temáticas inmersivas donde grupos de 2-8 personas resuelven puzzles para \"escapar\" en 60 minutos. Puerto Varas tiene CERO escape rooms en toda la Región de Los Lagos — oportunidad de primer entrante en un mercado de 800.000+ personas con 178 días de lluvia al año que impulsan la demanda de entretenimiento indoor.",
    pros: [
      "Cero competencia en toda la Región de Los Lagos (800K+ habitantes)",
      "178 días de lluvia/año crean demanda cautiva de entretenimiento indoor",
      "Mercado nacional creciendo al 12,77% anual (USD $24M → $72M para 2033)",
      "Punto de equilibrio alcanzable incluso en invierno (30% ocupación)",
      "Temas locales únicos crean ventaja competitiva irreplicable"
    ],
    cons: [
      "Estacionalidad fuerte: 60-70% de ingresos en solo 5 meses (dic-mar + julio)",
      "CAPEX alto para versión mid-range ($80K-$130K para 2 salas)",
      "Las salas necesitan renovación cada 3-5 años ($15K-$30K por sala)",
      "Dificultad para encontrar personal bilingüe en la zona",
      "Se necesita reserva de caja para 6 meses de temporada baja"
    ],
    competition: "CERO escape rooms confirmados en toda la Región de Los Lagos y Los Ríos. El competidor más cercano está en Pucón (~5 horas), donde 'Los Misterios de la Casona' es la actividad indoor #1 con 5.0 estrellas. En Santiago hay 10-12 venues (Escapology, FUGA, Escape 60). El modelo de Pucón (30K habitantes) valida que el concepto funciona en ciudades turísticas.",
    capexBreakdown: [
      { item: "Construcción por sala (2 salas)", min: 13000, max: 90000 },
      { item: "Tecnología por sala (Arduino, sensores, cerraduras)", min: 908, max: 6660 },
      { item: "Monitoreo compartido (cámaras, intercom)", min: 1700, max: 5600 },
      { item: "Áreas comunes (recepción, sala de espera)", min: 3200, max: 11600 },
      { item: "Arriendo inicial (depósito + primer mes + corredor)", min: 10400, max: 13300 },
      { item: "Legal y permisos (SpA, patente, bomberos, seguros)", min: 1350, max: 5520 },
      { item: "Marketing y branding de lanzamiento", min: 2300, max: 10300 }
    ],
    opexBreakdown: [
      { item: "Personal (operado por dueño a equipo completo)", min: 766, max: 2957 },
      { item: "Arriendo (semi-central 200 m²)", min: 2600, max: 3300 },
      { item: "Servicios básicos (electricidad, agua, internet, calefacción)", min: 458, max: 458 },
      { item: "Seguros (responsabilidad civil + propiedad)", min: 83, max: 156 },
      { item: "Marketing continuo (Google Ads, Meta, flyers)", min: 333, max: 521 },
      { item: "Mantenimiento y reposición de props", min: 329, max: 658 },
      { item: "Software (booking, contabilidad, POS, cámaras)", min: 129, max: 129 },
      { item: "Contabilidad y cumplimiento legal", min: 125, max: 125 }
    ],
    revenueModel: "Precio promedio: CLP $15.000/persona (~$16 USD). Grupo promedio de 4 jugadores = CLP $60.000/sesión (~$63 USD). Máximo 5 sesiones/sala/día (10am-6pm), hasta 10 en temporada alta. 2 salas: capacidad de 10 juegos/día. Ingresos anuales estimados: $85.200 USD incluyendo corporativos y grupos. Temporada alta (dic-mar): 44% del ingreso anual. IVA del 19% incluido en el precio del ticket.",
    localAngle: "Temas únicos de la zona sur que ningún competidor puede replicar: 'La Erupción' 🌋 — el Volcán Osorno en erupción, descifra datos sísmicos para evacuar (el volcán es visible desde la ciudad). 'El Caleuche' 👻 — mitología del barco fantasma de Chiloé, escapa antes de que se sumerja. 'La Colonia Alemana' 🏠 — colonos alemanes de 1853, resuelve puzzles del siglo XIX. Lanzamiento recomendado: La Erupción + El Caleuche.",
    references: [
      { name: "Escape Room Pucón", url: "https://www.escaperoompucon.com/", note: "Punto de referencia — actividad indoor #1 en Pucón, 5.0 estrellas" },
      { name: "Escape Room Pucón (TripAdvisor)", url: "https://www.tripadvisor.co/ShowUserReviews-g294297-d33241719-r1015594123-Escape_Room_Pucon-Pucon_Araucania_Region.html", note: "Reseñas 5.0 estrellas, valida modelo en ciudad turística" },
      { name: "Escapology Santiago", url: "https://www.escapology.com/", note: "Marca internacional en Chile, 5+ salas, 4.8★" },
      { name: "FUGA Santiago", url: "https://www.instagram.com/fuga.escape/", note: "Escape room local exitoso, 4 salas, 5.0★" },
      { name: "Intrigma Viña del Mar", url: "https://www.instagram.com/intrigma/", note: "Operador chileno de escape rooms, 4 salas" }
    ]
  },

  // ───────────────────────────────────────────────
  // 2. BOARD GAME CAFÉ / LUDOTECA
  // ───────────────────────────────────────────────
  {
    id: "board-game-cafe",
    emoji: "🎲",
    name: "Board Game Café",
    category: "entretenimiento",
    feasibility: 4,
    capexMin: 46000,
    capexMax: 76000,
    capexMid: 57000,
    opexMin: 6500,
    opexMax: 11000,
    revenueAnnual: 109500,
    breakeven: "35-40% de ocupación con ingresos de F&B",
    payback: "2–3 años",
    summary: "Café con biblioteca de 200+ juegos de mesa, cobro de entrada + ingresos por comida y bebida, noches de juegos, torneos y sesiones de D&D. CERO ludotecas en todo el sur de Chile. La herencia alemana de Puerto Varas conecta directamente con la cultura de Eurogames (Catan se originó en Alemania).",
    pros: [
      "CERO competencia en todo el sur de Chile (1,2 millones de personas)",
      "Herencia alemana = cultura de juegos de mesa europeos (Catan, Agricola)",
      "178 días de lluvia = mercado cautivo ('¿qué hacemos hoy?')",
      "Ingresos estables por F&B (55-65% del total)",
      "Construye comunidad local que sostiene la temporada baja"
    ],
    cons: [
      "Juegos importados son 20-40% más caros en Chile",
      "Estacionalidad: 55% de ingresos en 4 meses de verano",
      "Riesgo de robo y daño de juegos",
      "Requiere personal que conozca y recomiende juegos"
    ],
    competition: "Ninguna ludoteca en la Región de Los Lagos. Las 8-15 ludotecas de Chile están concentradas en Santiago (El Tablero, Spieltisch, Mabanga, Café 2D6). El competidor más cercano está a más de 1.000 km. Bariloche, Argentina (perfil de ciudad casi idéntico) tiene ludotecas funcionando exitosamente.",
    capexBreakdown: [
      { item: "Biblioteca de juegos (200+ títulos)", min: 8000, max: 10000 },
      { item: "Equipamiento de café/cocina", min: 5000, max: 8000 },
      { item: "Renovación del local", min: 8000, max: 16000 },
      { item: "Mobiliario (mesas especiales para juegos)", min: 4000, max: 6000 },
      { item: "Legal, permisos y marketing", min: 3000, max: 6000 },
      { item: "Capital de trabajo (3 meses)", min: 18000, max: 30000 }
    ],
    opexBreakdown: [
      { item: "Personal (4-6 personas: baristas + anfitriones)", min: 2500, max: 3958 },
      { item: "Arriendo (120-150 m²)", min: 1875, max: 2292 },
      { item: "Costo de alimentos y bebidas (~30% ventas)", min: 1600, max: 2800 },
      { item: "Servicios básicos y calefacción", min: 300, max: 450 },
      { item: "Marketing y eventos", min: 225, max: 500 }
    ],
    revenueModel: "Entrada: CLP $4.000-$6.000/persona (~$4-6 USD). Consumo promedio F&B: ~CLP $5.000/persona. Eventos y torneos: CLP $25K-$40K/mesa. Ingreso anual estimado: $104K-$115K USD. El 55-65% proviene de alimentos y bebidas, no de la entrada. Noches temáticas y torneos impulsan tráfico en temporada baja.",
    localAngle: "La herencia alemana de Puerto Varas es el diferenciador perfecto: los Eurogames (Catan, Agrícola, Puerto Rico) se originaron en Alemania. Menú inspirado en la gastronomía alemana-chilena (kuchen, strudel, cervezas artesanales locales). Noches temáticas: 'Noche de Colonos', torneos de Catan, sesiones de rol ambientadas en la Patagonia.",
    references: [
      { name: "Café 2D6 Santiago", url: "https://www.cafe2d6.cl/", note: "Ludoteca referente en Santiago, CLP $2.500 entrada" },
      { name: "Café 2D6 Instagram", url: "https://www.instagram.com/cafe2d6/", note: "Presencia en redes sociales del referente chileno" },
      { name: "Draughts London", url: "https://draughtslondon.com/", note: "Modelo exitoso en ciudad lluviosa (Londres)" }
    ]
  },

  // ───────────────────────────────────────────────
  // 3. AXE THROWING
  // ───────────────────────────────────────────────
  {
    id: "axe-throwing",
    emoji: "🪓",
    name: "Lanzamiento de Hachas",
    category: "entretenimiento",
    feasibility: 3,
    capexMin: 42000,
    capexMax: 115000,
    capexMid: 75000,
    opexMin: 4200,
    opexMax: 6900,
    revenueAnnual: 144000,
    breakeven: "40% de ocupación de líneas",
    payback: "2.5–3.5 años",
    summary: "Recinto indoor con 4-6 líneas de lanzamiento de hachas, sesiones guiadas por coach, reservas grupales y eventos. Concepto totalmente nuevo en Chile — sería el primer venue del país. Alto potencial viral en redes sociales pero riesgo de aceptación cultural desconocido.",
    pros: [
      "CERO venues en TODO Chile — primer entrante absoluto",
      "Alto potencial viral en redes sociales",
      "Atractivo para despedidas, grupos y turismo de aventura",
      "Actividad indoor resistente a la lluvia"
    ],
    cons: [
      "Concepto no probado en Chile — aceptación cultural desconocida",
      "Responsabilidad civil y seguros sin precedentes en el país",
      "Restricción 18+ limita mercado familiar",
      "Abastecimiento de dianas en el sur de Chile es difícil",
      "Alto riesgo de mercado no probado"
    ],
    competition: "No existe ningún venue de lanzamiento de hachas en Chile. Solo Hacha México (Ciudad de México, 2 locales) opera en Latinoamérica. La Federación de Hachas (@federaciondehachas) promueve activamente la expansión en LatAm. Sería el primero en todo el continente sur.",
    capexBreakdown: [
      { item: "Jaulas de seguridad (4-6 líneas)", min: 6000, max: 15000 },
      { item: "Renovación del local (150-250 m²)", min: 15000, max: 45000 },
      { item: "Hachas, dianas y equipamiento", min: 5000, max: 11000 },
      { item: "Legal, seguros y permisos", min: 3000, max: 8000 },
      { item: "Marketing de lanzamiento", min: 2000, max: 5000 },
      { item: "Capital de trabajo (3 meses)", min: 11000, max: 31000 }
    ],
    opexBreakdown: [
      { item: "Personal (3-4: gerente/coach + asistentes)", min: 2600, max: 3400 },
      { item: "Arriendo (150-250 m²)", min: 1000, max: 1500 },
      { item: "Seguros de responsabilidad civil", min: 300, max: 700 },
      { item: "Reemplazo mensual de dianas", min: 200, max: 500 },
      { item: "Servicios básicos y marketing", min: 100, max: 800 }
    ],
    revenueModel: "Precio por persona: CLP $12.000-$20.000/sesión (~$13-22 USD). Eventos grupales: CLP $150K-$250K. Potencial mensual a 40% de ocupación: ~$12K-$18K USD. Ingresos anuales estimados: ~$144.000 USD. Sesiones incluyen instrucción básica de coach + tiempo libre de práctica.",
    localAngle: "La identidad de Puerto Varas como destino de turismo de aventura (kayak, trekking, volcanes) encaja con el lanzamiento de hachas como experiencia 'aventurera indoor'. Marketing como 'la aventura que no depende del clima'. Potencial para torneos regionales y ligas locales. Temática leñadora/pionera conecta con la historia colonizadora.",
    references: [
      { name: "Hacha México", url: "https://www.hachamexico.com.mx/", note: "Único referente de lanzamiento de hachas en Latinoamérica" },
      { name: "WATL", url: "https://worldaxethrowingleague.com/", note: "Liga mundial de lanzamiento de hachas — red global de venues" }
    ]
  },

  // ───────────────────────────────────────────────
  // 4. VR ARCADE
  // ───────────────────────────────────────────────
  {
    id: "vr-arcade",
    emoji: "🥽",
    name: "Arcade de Realidad Virtual",
    category: "entretenimiento",
    feasibility: 3,
    capexMin: 30000,
    capexMax: 70000,
    capexMid: 50000,
    opexMin: 5200,
    opexMax: 9400,
    revenueAnnual: 138000,
    breakeven: "35-40% de capacidad con modelo lean",
    payback: "2–3 años (sin contar renovación de equipos)",
    summary: "Centro de experiencias VR con 8-10 estaciones Meta Quest (modelo lean) o espacio free-roam premium. Juegos curados, escape rooms VR y simulaciones. No hay arcades VR en el sur de Chile — el más cercano está en Concepción a 450 km. Lucid Dreams VR en Santiago prueba la demanda chilena.",
    pros: [
      "Cero arcades VR en todo el sur de Chile",
      "Lucid Dreams VR (Santiago) valida demanda chilena a CLP $12K-$20K",
      "Factor de novedad turística muy alto",
      "Experiencia inmersiva para días de lluvia"
    ],
    cons: [
      "Obsolescencia tecnológica: equipos se renuevan cada 2-3 años ($15K-$30K por ciclo)",
      "Meta Quest cuesta 20-30% más en Chile que en EEUU",
      "Alto mantenimiento técnico continuo",
      "Preocupaciones higiénicas con visores compartidos",
      "Costos recurrentes de licencias de contenido"
    ],
    competition: "Ningún arcade VR en Los Lagos. Lucid Dreams VR opera en Santiago (260 m², free-roam) con precios de CLP $12K-$20K. Arena XP (Santiago) y Dream Paradise VR (Iquique) son los únicos otros referentes chilenos. El mercado está concentrado en la capital.",
    capexBreakdown: [
      { item: "Equipos VR (8-10 estaciones Quest)", min: 15000, max: 35000 },
      { item: "Adecuación del espacio (100-260 m²)", min: 5000, max: 15000 },
      { item: "Software y licencias iniciales", min: 3000, max: 8000 },
      { item: "Mobiliario y decoración", min: 3000, max: 5000 },
      { item: "Capital de trabajo", min: 4000, max: 7000 }
    ],
    opexBreakdown: [
      { item: "Personal (3-4: gerente + hosts VR)", min: 2800, max: 4000 },
      { item: "Arriendo (100-260 m²)", min: 780, max: 1560 },
      { item: "Licencias de software mensuales", min: 500, max: 1500 },
      { item: "Reserva depreciación de equipos", min: 500, max: 1000 },
      { item: "Servicios básicos y marketing", min: 620, max: 1340 }
    ],
    revenueModel: "Precio por sesión: CLP $12.000-$20.000 (~$13-22 USD). Paquetes de cumpleaños y corporativos premium. Potencial mensual a capacidad moderada: ~$10K-$13K USD. Ingreso anual estimado: ~$138.000 USD. Modelo lean con Quest es más accesible que free-roam ($92K-$216K).",
    localAngle: "Experiencias VR temáticas de la zona: vuelo virtual sobre el Volcán Osorno, navegación por los canales de Chiloé, exploración de glaciares patagónicos. 'Aventura virtual cuando la aventura real no es posible por el clima'. Compatible con turistas de aventura que buscan experiencias complementarias.",
    references: [
      { name: "Lucid Dreams VR Santiago", url: "https://luciddreams.cl/", note: "Arcade VR referente en Chile, 260 m², free-roam" },
      { name: "Arena XP Santiago", url: "https://arenaxp.cl/", note: "Centro de experiencias VR en Santiago" },
      { name: "Dream Paradise VR (TripAdvisor)", url: "https://www.tripadvisor.com/Attraction_Review-g297397-d32896747-Reviews-Dream_Paradise_Vr_Center-Iquique_Tarapaca_Region.html", note: "VR center en Iquique — referencia regional" }
    ]
  },

  // ───────────────────────────────────────────────
  // 5. INDOOR MINI GOLF
  // ───────────────────────────────────────────────
  {
    id: "mini-golf",
    emoji: "⛳",
    name: "Mini Golf Indoor Fluorescente",
    category: "entretenimiento",
    feasibility: 2.5,
    capexMin: 70000,
    capexMax: 138000,
    capexMid: 100000,
    opexMin: 5100,
    opexMax: 9600,
    revenueAnnual: 90000,
    breakeven: "15-28 visitantes/día",
    payback: "3.5–4.5 años",
    summary: "Pista de mini golf de 9 hoyos con iluminación UV fluorescente (glow-in-the-dark), temática creativa y ambiente oscuro con luz negra. Muy atractivo para Instagram. CERO mini golf indoor al sur de Santiago. El problema principal es que requiere un espacio enorme (350+ m²) difícil de encontrar en el centro de Puerto Varas.",
    pros: [
      "CERO mini golf indoor al sur de Santiago (Goolfy tiene 3 locales solo en Santiago)",
      "Atractivo para todas las edades — verdadera actividad familiar",
      "Glow-in-the-dark = muy compatible con Instagram",
      "Resistente al clima — ideal para 178 días de lluvia"
    ],
    cons: [
      "Requiere espacio ENORME: 350-550 m² para 9 hoyos",
      "Encontrar ese espacio en el centro turístico de Puerto Varas es difícil y caro",
      "Altos costos de electricidad para iluminación UV + calefacción",
      "Venue de actividad única limita visitas repetidas",
      "CAPEX excede el techo presupuestario del escape room"
    ],
    competition: "Ningún mini golf indoor en el sur de Chile. Goolfy Chile opera 3 locales en Santiago (36K seguidores en Instagram). Happy Birdie (Chicureo) es outdoor. Goolfy France es la marca original del concepto. No hay competencia directa posible en un radio de 1.000 km.",
    capexBreakdown: [
      { item: "Construcción de pistas (9 hoyos, 30-45 m² c/u)", min: 30000, max: 60000 },
      { item: "Iluminación UV y efectos especiales", min: 10000, max: 20000 },
      { item: "Decoración temática fluorescente", min: 10000, max: 25000 },
      { item: "Mobiliario y recepción", min: 5000, max: 10000 },
      { item: "Capital de trabajo y legal", min: 15000, max: 23000 }
    ],
    opexBreakdown: [
      { item: "Arriendo (350-550 m² — muy intensivo)", min: 2300, max: 4500 },
      { item: "Electricidad (iluminación UV + calefacción)", min: 680, max: 1360 },
      { item: "Personal (2-3 personas)", min: 1400, max: 2300 },
      { item: "Mantenimiento de pistas y equipos", min: 300, max: 500 },
      { item: "Marketing", min: 420, max: 940 }
    ],
    revenueModel: "Precio por persona: CLP $8.500-$13.000 (~$9-14 USD). Eventos corporativos: CLP $250K-$400K. Punto de equilibrio: 15-28 visitantes/día. Ingreso anual estimado: ~$90.000 USD. El desafío es llenar un espacio tan grande de forma consistente en un mercado pequeño.",
    localAngle: "Temática volcánica fluorescente: hoyos diseñados como el cráter del Osorno, lagos de lava neón, cascadas UV. 'Mini Golf Volcánico' como marca. Potencial para combinar con café/bar y zona de arcade para maximizar el uso del gran espacio requerido.",
    references: [
      { name: "Goolfy Chile", url: "https://www.goolfychile.cl/", note: "Mini golf indoor fluorescente — 3 locales en Santiago" },
      { name: "Goolfy Santiago", url: "https://www.goolfy.com/centres/santiago/", note: "Página internacional de la marca francesa en Chile" }
    ]
  },

  // ───────────────────────────────────────────────
  // 6. MURDER MYSTERY DINNER
  // ───────────────────────────────────────────────
  {
    id: "murder-mystery",
    emoji: "🕵️",
    name: "Cena con Misterio",
    category: "gastronomía",
    feasibility: 4.5,
    capexMin: 13000,
    capexMax: 34000,
    capexMid: 20000,
    opexMin: 5000,
    opexMax: 9200,
    revenueAnnual: 156000,
    breakeven: "8-10 shows/mes con 20+ asistentes",
    payback: "1–1.5 años",
    summary: "Teatro inmersivo con cena donde actores interpretan un misterio criminal durante 2-3 horas mientras los comensales participan. PRIMERO DE SU TIPO EN TODO CHILE. El modelo pop-up con restaurante socio elimina el costo de espacio. La herencia alemana de Puerto Varas ofrece un guion único e irreplicable: 'Das Geheimnis der Colonia' — misterio en la colonia alemana de 1910.",
    pros: [
      "Primero de su tipo en TODO Chile — primer entrante a nivel nacional",
      "Precio por ticket más alto de los 15 conceptos (CLP $38K-$75K/persona)",
      "Modelo pop-up = riesgo ultra bajo (costo de espacio cercano a $0)",
      "Herencia alemana colonial = guion de propiedad intelectual única e irreplicable",
      "Pool de actores disponible en universidades locales (UACh, U. Los Lagos)"
    ],
    cons: [
      "Requiere actores bilingües talentosos (español + noches en inglés)",
      "Escritura y adaptación de guiones es trabajo continuo",
      "Depende de la relación con restaurante socio",
      "Volumen limitado (máximo ~24 cubiertos por show)"
    ],
    competition: "No existe cena con misterio en ningún lugar de Chile. The Jury Experience (Santiago, CLP $29K-$33.5K, solo teatro sin cena) es el concepto más cercano. Cena Mortal opera B2B para team building. En España existen Cena con Crimen y La Cena Criminal como referentes internacionales.",
    capexBreakdown: [
      { item: "Guiones y dirección artística", min: 3000, max: 8000 },
      { item: "Vestuario y utilería", min: 2000, max: 6000 },
      { item: "Iluminación y equipo de sonido portátil", min: 2000, max: 5000 },
      { item: "Marketing de lanzamiento", min: 2000, max: 5000 },
      { item: "Legal y permisos", min: 1000, max: 3000 },
      { item: "Capital de trabajo (3 meses)", min: 3000, max: 7000 }
    ],
    opexBreakdown: [
      { item: "Actores (3-4 por show × 16 shows/mes)", min: 1250, max: 2708 },
      { item: "Director/productor", min: 800, max: 1500 },
      { item: "Comisión restaurante (15-20% del ingreso)", min: 1500, max: 3000 },
      { item: "Vestuario, props y reposición", min: 200, max: 500 },
      { item: "Marketing continuo", min: 500, max: 800 },
      { item: "Seguros y gastos legales", min: 200, max: 400 }
    ],
    revenueModel: "Precio por persona (incluye cena): CLP $38.000-$75.000 (~$40-78 USD). 16 shows/mes × 24 cubiertos = potencial CLP $10M-$28M/mes. Ingreso anual estimado: ~$156.000 USD. El precio más alto de todos los conceptos. Shows especiales bilingües para turistas internacionales. Potencial para eventos corporativos premium.",
    localAngle: "La herencia alemana de Puerto Varas es el diferenciador definitivo: 'Das Geheimnis der Colonia' — un misterio de asesinato ambientado en la colonia alemana de 1910. Personajes basados en familias fundadoras, conflictos entre colonos y comunidad local. El escenario histórico real (casonas alemanas, Club Alemán) añade autenticidad. Shows especiales en fechas clave: aniversario de la ciudad, Oktoberfest, Noche Valdiviana.",
    references: [
      { name: "CenaConCrimen (España)", url: "https://cenaconcrimen.com/", note: "Referente europeo de cenas con misterio" },
      { name: "La Cena Criminal (España)", url: "https://lacenacriminal.com/", note: "Modelo español de teatro inmersivo con cena" },
      { name: "The Dinner Detective (EEUU)", url: "https://thedinnerdetective.com/", note: "Cadena estadounidense en 100+ ciudades" },
      { name: "Murder Mystery CDMX", url: "https://murdermysteryexperiences.com/cdmx/", note: "Referencia latinoamericana en Ciudad de México" },
      { name: "The Jury Experience Santiago", url: "https://feverup.com/es/santiago/the-jury-experience", note: "Lo más cercano en Chile — teatro sin cena, CLP $29K-$33.5K" }
    ]
  },

  // ───────────────────────────────────────────────
  // 7. RAGE ROOM
  // ───────────────────────────────────────────────
  {
    id: "rage-room",
    emoji: "💥",
    name: "Rage Room / Sala de Destrucción",
    category: "entretenimiento",
    feasibility: 3,
    capexMin: 11000,
    capexMax: 21000,
    capexMid: 16000,
    opexMin: 2200,
    opexMax: 3500,
    revenueAnnual: 42000,
    breakeven: "50% de ocupación de 2 salas",
    payback: "6–12 meses",
    summary: "Paga para destruir platos, electrónicos y muebles en una sala acolchada con equipo de seguridad. El CAPEX MÁS BAJO de los 15 conceptos. Objetos rompibles se consiguen gratis/barato en mercados de pulgas. Como negocio independiente tiene techo de ingresos bajo — funciona MUCHO mejor como complemento de otro negocio (modelo probado por 60 No More en Santiago).",
    pros: [
      "CAPEX y OPEX ultra bajos — el más económico de los 15 conceptos",
      "Operación simple: 1 game master puede manejar todo",
      "Objetos rompibles gratis/baratos de ferias y donaciones",
      "Alto potencial viral en redes sociales",
      "Cero en Los Lagos — novedad absoluta"
    ],
    cons: [
      "Techo de ingresos bajo: sesiones de 15 min limitan el throughput",
      "Como independiente no justifica un arriendo dedicado",
      "Público nicho (mayormente 18-35 años)",
      "Impacto ambiental/óptica de residuos",
      "Novedad se agota para locales (baja repetición)"
    ],
    competition: "3 en Chile: 60 No More (Santiago, CLP $13K-$25K, DENTRO de un escape room — valida el modelo combo), Frenzy (Chicureo), TDAH Coffee & Rage Room (Viña del Mar, combina café + rage room). Cero en el sur de Chile.",
    capexBreakdown: [
      { item: "Construcción de sala(s) acolchada(s)", min: 4000, max: 8000 },
      { item: "Equipo de seguridad (overoles, cascos, guantes)", min: 1200, max: 1900 },
      { item: "Inventario inicial de rompibles", min: 500, max: 1200 },
      { item: "Adecuación general y limpieza", min: 2000, max: 4000 },
      { item: "Legal, permisos y capital de trabajo", min: 3300, max: 5900 }
    ],
    opexBreakdown: [
      { item: "Arriendo (80-120 m²)", min: 980, max: 1500 },
      { item: "Personal (1 game master)", min: 700, max: 920 },
      { item: "Inventario rompible mensual", min: 160, max: 435 },
      { item: "Seguros", min: 55, max: 130 },
      { item: "Limpieza, residuos y servicios básicos", min: 305, max: 515 }
    ],
    revenueModel: "Precio: CLP $13.000-$20.000/persona/15 min (~$14-21 USD). 2 salas a 50% de ocupación: ~$3.200-$3.750 USD/mes. Ingreso anual estimado: ~$42.000 USD. El techo de ingresos bajo hace que funcione mejor como ADD-ON a un escape room u otro negocio (modelo 60 No More). Paquetes combo con escape room aumentan ticket promedio.",
    localAngle: "Marketing como liberación de estrés post-aventura: 'Escalaste el volcán, ahora destruye algo'. Temática sureña: destruir leña decorativa, cerámicas con motivos locales. Combinar con escape room para paquete completo de entretenimiento. Ideal como complemento en un centro de entretenimiento integral.",
    references: [
      { name: "60 No More Santiago", url: "https://www.instagram.com/60nomoreescaperoom/", note: "Pionero en Chile desde 2019 — rage room DENTRO de escape room (valida combo)" },
      { name: "Frenzy Chicureo", url: "https://www.instagram.com/frenzy_rr/", note: "Rage room independiente en Santiago norte" },
      { name: "TDAH Coffee & Rage Room", url: "https://www.tripadvisor.com.sg/Restaurant_Review-g295425-d32990814-Reviews-Tdah_Coffee_Rage_Room-Vina_del_Mar_Valparaiso_Region.html", note: "Modelo híbrido café + rage room en Viña del Mar" }
    ]
  },

  // ───────────────────────────────────────────────
  // 8. POTTERY STUDIO
  // ───────────────────────────────────────────────
  {
    id: "pottery-studio",
    emoji: "🏺",
    name: "Taller de Cerámica",
    category: "arte",
    feasibility: 3.5,
    capexMin: 16000,
    capexMax: 26000,
    capexMid: 21000,
    opexMin: 1900,
    opexMax: 3600,
    revenueAnnual: 38400,
    breakeven: "6-8 alumnos/sesión, 4 sesiones/semana",
    payback: "1.5–2.5 años",
    summary: "Estudio de cerámica con sesiones drop-in de pintura de bisque, clases de torno y talleres combinados con café/vino. Ángulo de souvenir: 'pinta tu propia taza del Volcán Osorno'. CERO estudios de cerámica en toda la Región de Los Lagos. Conecta con la cultura artesanal local (lana, madera, greda). OPEX muy bajo pero techo de ingresos limitado.",
    pros: [
      "CERO estudios de cerámica en Los Lagos",
      "Souvenir único: 'pinta el Volcán Osorno en tu propia taza'",
      "Conecta con cultura artesanal local (greda, lana, madera)",
      "Viable en Airbnb Experiences desde el día 1",
      "OPEX muy bajo — potencial de fondos FONDART"
    ],
    cons: [
      "Techo de ingresos bajo (máximo 4-8 alumnos/sesión)",
      "Cocción toma 3-5 días (problema logístico para turistas — se resuelve con bisqueware)",
      "Requiere instructor calificado",
      "Insumos de arcilla/horno difíciles de conseguir en el sur",
      "Atractivo de nicho — no masivo"
    ],
    competition: "Ningún estudio de cerámica en el sur de Chile. En Santiago: K-Ro Cerámica (CLP $35K/clase, CLP $130K/mes), Cerámicas Grof, Cerámicas Chris. Espacio Greda (Pomaire) ofrece talleres móviles para 60+ personas. El concepto de cerámica recreativa es nuevo en Chile fuera de Santiago.",
    capexBreakdown: [
      { item: "Tornos de cerámica (4 unidades)", min: 2300, max: 4000 },
      { item: "Hornos cerámicos", min: 6400, max: 8200 },
      { item: "Herramientas, arcilla y materiales iniciales", min: 3000, max: 6000 },
      { item: "Adecuación del espacio (80-100 m²)", min: 2000, max: 4000 },
      { item: "Legal y capital de trabajo", min: 2300, max: 3800 }
    ],
    opexBreakdown: [
      { item: "Arriendo (80-100 m²)", min: 870, max: 1400 },
      { item: "Instructor de cerámica", min: 650, max: 1300 },
      { item: "Arcilla, esmaltes y consumibles", min: 110, max: 250 },
      { item: "Electricidad del horno", min: 87, max: 196 },
      { item: "Marketing y otros gastos", min: 183, max: 454 }
    ],
    revenueModel: "Pintura de bisque (taza/plato): CLP $18K-$22K ($19-23 USD). Clase de torno introductoria: CLP $28K-$35K ($29-37 USD). Clases mensuales: CLP $90K-$130K. Eventos privados y corporativos. Potencial mensual: ~$2.900-$3.500 USD. Ingreso anual estimado: ~$38.400 USD. El souvenir hecho a mano tiene alto valor percibido para turistas.",
    localAngle: "Temática inspirada en la naturaleza del sur: pintar volcanes, lagos, bosques nativos en cerámica. Talleres especiales: 'Cerámica y Vino con vista al lago', talleres al aire libre en verano. Conexión con la tradición de greda chilena y artesanía mapuche (con respeto cultural). Productos terminados como souvenirs premium de Puerto Varas.",
    references: [
      { name: "K-Ro Cerámica Santiago", url: "https://karoceramica.cl/", note: "Referente chileno: CLP $35K/clase, CLP $130K/mes de clases" },
      { name: "Cerámicas Grof", url: "https://www.ceramicasgrof.cl/", note: "Estudio de cerámica en Santiago" },
      { name: "Espacio Greda Pomaire", url: "https://espaciogreda.cl/", note: "Talleres móviles de cerámica para 60+ personas" }
    ]
  },

  // ───────────────────────────────────────────────
  // 9. INDOOR BOULDERING
  // ───────────────────────────────────────────────
  {
    id: "indoor-bouldering",
    emoji: "🧗",
    name: "Muro de Escalada Boulder",
    category: "fitness",
    feasibility: 3,
    capexMin: 69000,
    capexMax: 179000,
    capexMid: 100000,
    opexMin: 3200,
    opexMax: 5800,
    revenueAnnual: 72000,
    breakeven: "~120 membresías + 200 pases diarios/mes",
    payback: "3–4 años",
    summary: "Gimnasio de boulder indoor (sin cuerdas, altura 4-4.5m) con colchonetas de impacto, membresías y pases diarios. Sinergia perfecta con la cultura de turismo de aventura de Puerto Varas (volcanes, kayak, trekking). Es principalmente un negocio de fitness, no entretenimiento — los turistas son secundarios (~20-30% de ingresos). Las membresías deben sostener la temporada baja.",
    pros: [
      "Sinergia perfecta con cultura de aventura de Puerto Varas",
      "Extensión indoor del deporte outdoor cuando llueve",
      "Comunidad del Club Andino como base de clientes",
      "Membresías crean ingreso año-round",
      "Modelo probado en ciudades outdoor similares (Rifle CO, Fayetteville WV)"
    ],
    cons: [
      "Principalmente negocio de fitness, no entretenimiento — turistas son secundarios",
      "Membresías deben sostener temporada baja",
      "Presas de escalada deben importarse (caras)",
      "Necesita 300+ m² de espacio",
      "Seguros deportivos + riesgo de lesiones"
    ],
    competition: "Ningún gimnasio de escalada en Los Lagos ni Araucanía. En Santiago: Rock & Boulder y gimnasios universitarios. Solo 2 gyms de escalada se abrieron en todo México en 2025. Ascend Gym (Los Mochis, México, 167 m², autoconstruido) es el análogo más cercano en LatAm — ciudad pequeña de aventura.",
    capexBreakdown: [
      { item: "Construcción de muros de escalada", min: 15000, max: 45000 },
      { item: "Colchonetas de impacto y pisos", min: 8000, max: 20000 },
      { item: "Presas de escalada (importadas)", min: 8000, max: 20000 },
      { item: "Adecuación del local (200-450 m²)", min: 15000, max: 40000 },
      { item: "Capital de trabajo, legal y marketing", min: 23000, max: 54000 }
    ],
    opexBreakdown: [
      { item: "Arriendo (300+ m²)", min: 1300, max: 2800 },
      { item: "Personal (2-3: gerente/equipador + staff)", min: 1300, max: 2000 },
      { item: "Materiales de equipamiento de rutas", min: 90, max: 170 },
      { item: "Seguros deportivos", min: 200, max: 400 },
      { item: "Servicios básicos y marketing", min: 310, max: 430 }
    ],
    revenueModel: "Pase diario: CLP $4.500-$7.000 ($5-7 USD). Membresía mensual: CLP $22K-$35K ($23-37 USD). Clases y fiestas de cumpleaños como ingreso extra. Punto de equilibrio: ~120 membresías + 200 pases diarios/mes. Ingreso anual estimado: ~$72.000 USD. El 70-80% proviene de membresías locales, no turismo.",
    localAngle: "Puerto Varas es capital de turismo de aventura del sur de Chile. 'Cuando llueve, escalamos adentro.' Conexión natural con Club Andino y comunidad de escalada outdoor. Competencias de boulder como eventos sociales. Colaboración con tour operators para ofrecer escalada indoor como plan B en días de mal clima.",
    references: [
      { name: "Casa Boulder Santiago", url: "https://casaboulder.cl/", note: "Referente de boulder en Chile" },
      { name: "Hangar Boulder Santiago", url: "https://hangarboulder.cl/", note: "Gimnasio de boulder en la capital" }
    ]
  },

  // ───────────────────────────────────────────────
  // 10. LASER TAG
  // ───────────────────────────────────────────────
  {
    id: "laser-tag",
    emoji: "🔫",
    name: "Laser Tag Indoor",
    category: "entretenimiento",
    feasibility: 2.5,
    capexMin: 94000,
    capexMax: 240000,
    capexMid: 140000,
    opexMin: 4400,
    opexMax: 7700,
    revenueAnnual: 56400,
    breakeven: "800-1.000 juegos/semana (vs. promedio global Zone de 1.500)",
    payback: "4–5 años",
    summary: "Arena indoor de laser tag con sistema de 20+ chalecos, iluminación UV, máquinas de humo y arena temática. Verdadero atractivo familiar (7+ años) e imán de fiestas de cumpleaños. El equipamiento dura 10-30+ años. El problema: excede significativamente el presupuesto ($100K mínimo) y necesita un espacio masivo de 300-550 m².",
    pros: [
      "Verdadero atractivo familiar para todas las edades (7+)",
      "Imán de fiestas de cumpleaños",
      "Equipamiento dura 10-30+ años (Zone tiene equipos de 1990 funcionando)",
      "Cero en el sur de Chile",
      "Género neutral — amplio mercado"
    ],
    cons: [
      "CAPEX excede significativamente el presupuesto ($100K mínimo según Zone)",
      "Espacio masivo necesario: 300-550 m² total",
      "Equipamiento debe importarse de Australia",
      "Precio por juego bajo limita ingresos en mercado pequeño",
      "Construcción de arena es compleja"
    ],
    competition: "Ningún laser tag confirmado en el sur de Chile. Santiago probablemente tiene laser tag en centros de entretenimiento familiar (FEC), pero no venues independientes al sur. Zone Laser Tag opera 950+ sites globalmente pero ninguno en Chile.",
    capexBreakdown: [
      { item: "Equipamiento (20+ chalecos y armas)", min: 25000, max: 50000 },
      { item: "Construcción de arena temática", min: 20000, max: 70000 },
      { item: "Importación y envío desde Australia", min: 5000, max: 12000 },
      { item: "Iluminación UV y efectos especiales", min: 10000, max: 25000 },
      { item: "Adecuación general (300-550 m²)", min: 15000, max: 40000 },
      { item: "Capital de trabajo y legal", min: 19000, max: 43000 }
    ],
    opexBreakdown: [
      { item: "Arriendo (300-550 m²)", min: 1700, max: 3400 },
      { item: "Personal (3-4 personas)", min: 2000, max: 3000 },
      { item: "Electricidad (UV, humo, sistemas)", min: 220, max: 450 },
      { item: "Mantenimiento de equipos", min: 200, max: 400 },
      { item: "Marketing", min: 280, max: 450 }
    ],
    revenueModel: "Precio por juego: CLP $5.000-$10.000 ($5-10 USD). Fiestas de cumpleaños: CLP $120K-$200K. Benchmark Zone: 1.500 juegos/semana promedio global; realista para Puerto Varas: 500-800/semana. Potencial mensual conservador: $3.600-$5.800 USD. Ingreso anual estimado: ~$56.400 USD.",
    localAngle: "Arena temática de 'Exploración Patagónica' o 'Batalla del Volcán'. Fiestas de cumpleaños como servicio principal — Puerto Varas carece de opciones indoor para celebraciones infantiles. Paquetes para grupos escolares en excursiones. Combinación natural con otros conceptos de entretenimiento en un centro multifuncional.",
    references: [
      { name: "Zone Laser Tag", url: "https://lasertag.com/", note: "Red global de 950+ sites — confirma $100K mínimo de CAPEX" },
      { name: "Laser Game Chile", url: "https://www.lasergame.cl/", note: "Operador chileno de laser tag (Santiago)" }
    ]
  },

  // ───────────────────────────────────────────────
  // 11. THEMED CAFÉ
  // ───────────────────────────────────────────────
  {
    id: "themed-cafe",
    emoji: "☕",
    name: "Café Temático de Aventura",
    category: "gastronomía",
    feasibility: 3,
    capexMin: 41000,
    capexMax: 80000,
    capexMid: 60000,
    opexMin: 7600,
    opexMax: 12700,
    revenueAnnual: 144000,
    breakeven: "~60-80 clientes/día con ticket promedio CLP $6.000",
    payback: "2–3 años",
    summary: "Café con temática única — NO herencia alemana (ese mercado está EXTREMADAMENTE saturado con 140+ años de tradición). La mejor opción: 'Café Explorador Patagonia' con decoración de expediciones, juegos de mesa, café de especialidad. El Café Rosa (Puerto Montt) prueba que los cafés temáticos funcionan en la región. Márgenes de café son delgados (25-30% COGS).",
    pros: [
      "El Café Rosa (Puerto Montt, viral en TikTok) prueba que cafés temáticos funcionan en la región",
      "Ingreso estable de F&B — turismo + local",
      "Se puede combinar con juegos de mesa para diferenciación",
      "Múltiples horarios de servicio (desayuno, almuerzo, once)"
    ],
    cons: [
      "Mercado de cafés de herencia alemana EXTREMADAMENTE saturado (Club Alemán desde 1885)",
      "Márgenes delgados de café (25-30% COGS)",
      "Cat café tiene complejidad regulatoria con SEREMI de Salud",
      "Competencia directa con Club Alemán (2 locales, 140+ años), Puerto Dulce, Mano Alemana"
    ],
    competition: "ALTA para conceptos de café tradicional. Club Alemán (2 locales, 140+ años de historia), múltiples panaderías alemanas, Puerto Dulce, Mano Alemana. El Café Rosa en Puerto Montt (15 min) es café temático viral. PERO: un café temático de aventura/explorador sería único. No compita con herencia gastronómica — compita con experiencias.",
    capexBreakdown: [
      { item: "Equipamiento de cocina y café", min: 8000, max: 15000 },
      { item: "Decoración temática de aventura/explorador", min: 10000, max: 20000 },
      { item: "Mobiliario especial", min: 5000, max: 10000 },
      { item: "Renovación del local (80-150 m²)", min: 8000, max: 15000 },
      { item: "Marketing de lanzamiento", min: 3000, max: 6000 },
      { item: "Capital de trabajo (3 meses)", min: 7000, max: 14000 }
    ],
    opexBreakdown: [
      { item: "Personal (3.5-5 personas)", min: 3000, max: 4400 },
      { item: "Costo de alimentos y bebidas", min: 2500, max: 4000 },
      { item: "Arriendo (80-150 m²)", min: 900, max: 1800 },
      { item: "Servicios básicos y calefacción", min: 400, max: 700 },
      { item: "Marketing y otros", min: 800, max: 1800 }
    ],
    revenueModel: "Café: CLP $2.400-$3.900. Postres/kuchen: CLP $3.500-$5.900. Almuerzos: CLP $9.000-$14.000. Cat café agrega CLP $5.000 de reserva. Ingreso anual estimado: ~$144.000 USD. El 55-65% proviene de alimentos y bebidas. La diferenciación temática justifica precios superiores al café promedio.",
    localAngle: "Temática de 'Explorador Patagónico': mapas antiguos, equipo de expedición vintage, fotos históricas de exploración del sur de Chile. Menú inspirado en cocina de expedición con toques locales. Incluir biblioteca de juegos de mesa como diferenciador. Evitar completamente la temática alemana — 140 años de Club Alemán es imbatible en ese nicho.",
    references: [
      { name: "El Café Rosa", url: "https://www.instagram.com/elcaferosachile/", note: "Café temático viral en Puerto Montt — prueba modelo regional" },
      { name: "El Mundo de Dalí Cat Café", url: "https://www.elmundodedali.cl/", note: "Cat café en Santiago desde 2016 — referencia para concepto animal" }
    ]
  },

  // ───────────────────────────────────────────────
  // 12. CO-WORKING HYBRID
  // ───────────────────────────────────────────────
  {
    id: "coworking-hybrid",
    emoji: "💻",
    name: "Co-working Híbrido Día/Noche",
    category: "servicios",
    feasibility: 3,
    capexMin: 50000,
    capexMax: 169000,
    capexMid: 97000,
    opexMin: 5100,
    opexMax: 9400,
    revenueAnnual: 114000,
    breakeven: "20+ membresías fijas + eventos nocturnos regulares",
    payback: "2.5–4 años",
    summary: "Espacio híbrido: cowork de día (hot desks, salas de reunión, fibra óptica) + venue de entretenimiento de noche (juegos de mesa, cerveza artesanal, eventos). Solo existe 1 cowork dedicado en Puerto Varas (La Cima). La Grey (café+cowork) cierra a las 9:30pm — no hay opción nocturna. Internet de Puerto Varas es EXCELENTE (307 Mbps mediana). El mercado de nómadas digitales aún es pequeño (4/10 según nomadlio).",
    pros: [
      "Solo 1 cowork dedicado existe (La Cima) — baja competencia",
      "Internet excelente en Puerto Varas (307 Mbps mediana)",
      "Modelo híbrido día/noche maximiza uso del espacio",
      "Escena de nómadas digitales en crecimiento"
    ],
    cons: [
      "Comunidad de nómadas digitales calificada 4/10 (nomadlio)",
      "Ingresos de cowork solos son delgados ($1.500-$3.000 de membresías)",
      "Necesita masa crítica de 20+ miembros",
      "Compite con La Cima (24/7) y La Grey (café-cowork, vistas al lago)",
      "Puerto Varas puede ser mercado demasiado pequeño para cowork puro"
    ],
    competition: "La Cima CoWork (único dedicado, 24/7, básico), La Grey (café-cowork híbrido, vistas al lago, cierra 9:30pm), Santander Work/Café (gratis pero bloquea GitHub). COWO Puerto Montt (municipal). El mercado es pequeño pero la competencia también es limitada. El modelo híbrido día/noche es inexistente.",
    capexBreakdown: [
      { item: "Mobiliario de oficina (20+ escritorios)", min: 10000, max: 25000 },
      { item: "Infraestructura tecnológica (fibra, monitores, impresora)", min: 5000, max: 15000 },
      { item: "Renovación del espacio (150-350 m²)", min: 15000, max: 40000 },
      { item: "Equipamiento de bar/café para horario nocturno", min: 8000, max: 20000 },
      { item: "Marketing de lanzamiento y comunidad", min: 3000, max: 8000 },
      { item: "Capital de trabajo", min: 9000, max: 21000 }
    ],
    opexBreakdown: [
      { item: "Arriendo (150-350 m²)", min: 1500, max: 2800 },
      { item: "Personal (3.5-4.5: community manager, barista, host)", min: 2000, max: 3500 },
      { item: "Internet fibra óptica empresarial", min: 150, max: 300 },
      { item: "Electricidad y calefacción", min: 400, max: 700 },
      { item: "Marketing, comunidad y otros", min: 1050, max: 2100 }
    ],
    revenueModel: "Hot desk: CLP $96K-$144K/mes ($100-150 USD). Pase diario: CLP $11.5K-$17.3K ($12-18 USD). Salas de reunión: CLP $14.4K-$24K/hora ($15-25 USD). Entretenimiento nocturno: $8-15/persona. Potencial mensual: $9.500-$34.000. Ingreso anual estimado conservador: ~$114.000 USD.",
    localAngle: "Puerto Varas como 'hub de trabajo remoto del sur de Chile'. Conexión con la creciente comunidad de nómadas digitales que eligen ciudades con naturaleza. Eventos nocturnos temáticos: noches de networking, meetups tech, game nights. Alianza con hostales y Airbnbs para ofrecer pases de cowork a huéspedes. Panorámica del lago como diferenciador si se logra buena ubicación.",
    references: [
      { name: "La Grey Puerto Varas", url: "https://www.instagram.com/lagrey.cl/", note: "Café-cowork-yoga-arte en Puerto Varas — cierra 9:30pm" },
      { name: "COWO Puerto Montt", url: "https://coworkpuertomontt.cl/", note: "Cowork municipal en Puerto Montt — referencia regional" }
    ]
  },

  // ───────────────────────────────────────────────
  // 13. ART WORKSHOP (PAINT & WINE)
  // ───────────────────────────────────────────────
  {
    id: "art-workshop",
    emoji: "🎨",
    name: "Taller de Arte (Paint & Wine)",
    category: "arte",
    feasibility: 4.5,
    capexMin: 4200,
    capexMax: 8200,
    capexMid: 6200,
    opexMin: 1830,
    opexMax: 3330,
    revenueAnnual: 88200,
    breakeven: "3 sesiones/semana con 12 personas",
    payback: "3–6 meses",
    summary: "Sesiones guiadas de pintura de 2-3 horas con vino, materiales incluidos, te llevas tu cuadro. No requiere habilidad. SEGUNDO CAPEX MÁS BAJO de los 15 conceptos ($6.200 para empezar). 'Pinta el Volcán Osorno con vino chileno' es una experiencia turística que se vende sola. Cero competencia en Puerto Varas. Operable por 1 persona. El mejor ratio riesgo/retorno de todas las opciones.",
    pros: [
      "CAPEX y OPEX ultra bajos — puedes empezar literalmente el próximo mes",
      "Souvenir para llevar ('Pinté el Volcán Osorno') = marketing boca a boca poderoso",
      "178 días de lluvia = mercado cautivo",
      "Listable en Airbnb Experiences inmediatamente",
      "Operable por 1 persona sin formación especializada",
      "Perfecta 'Fase 1' — genera flujo de caja para financiar emprendimientos más grandes"
    ],
    cons: [
      "Sesiones limitadas a 15-20 personas máximo",
      "Ingreso absoluto menor que opciones de mayor CAPEX",
      "Necesita un anfitrión carismático",
      "Concepto Paint & Sip no establecido en Chile (riesgo educativo, pero también ventaja de primer entrante)"
    ],
    competition: "Ninguno en Puerto Varas ni en el sur de Chile. Grand Atelier (Santiago, CLP $40K/sesión de 4 hrs) es el referente local. Paint & Wine existe en Colombia. Pinta y Brinda opera en España (€35-45/sesión). El concepto no ha llegado formalmente a Chile fuera de Santiago.",
    capexBreakdown: [
      { item: "Caballetes (20 unidades)", min: 300, max: 500 },
      { item: "Lienzos y bastidores iniciales", min: 150, max: 250 },
      { item: "Pinturas, pinceles y paletas", min: 400, max: 700 },
      { item: "Mobiliario (mesas, sillas, estantes)", min: 800, max: 1500 },
      { item: "Preparación del local (60-120 m²)", min: 1000, max: 2500 },
      { item: "Marketing, legal y capital de trabajo", min: 1550, max: 2750 }
    ],
    opexBreakdown: [
      { item: "Arriendo (60-120 m²)", min: 700, max: 1200 },
      { item: "Instructor/anfitrión (medio tiempo)", min: 400, max: 630 },
      { item: "Materiales consumibles (lienzos, pintura, vino)", min: 450, max: 900 },
      { item: "Marketing", min: 100, max: 250 },
      { item: "Servicios básicos", min: 180, max: 350 }
    ],
    revenueModel: "Sesión de pintura con vino: CLP $20.000-$35.000/persona (~$21-37 USD). Eventos privados: CLP $350K-$600K. Corporativos: CLP $700K-$1.5M. Potencial mensual: ~$5.200-$9.500. Ingreso anual estimado: ~$88.200 USD. Maridaje con vinos locales del Valle del Maule y Biobío eleva la experiencia.",
    localAngle: "'Pinta el Volcán Osorno con vino chileno' — experiencia turística que se vende sola. Talleres al aire libre en verano con vista al volcán. Maridaje con vinos del sur de Chile y cervezas artesanales locales. Talleres especiales: acuarelas del lago Llanquihue, paisajes patagónicos. Colaboración con hoteles y Airbnb para experiencias exclusivas para huéspedes.",
    references: [
      { name: "Grand Atelier Santiago", url: "https://www.instagram.com/grandatelier.santiago/", note: "Referente chileno — CLP $40K/sesión de 4 horas, CLP $85K/mes" },
      { name: "Paint & Wine Colombia", url: "https://paint-wine.com/", note: "Modelo latinoamericano exitoso — COP $120K/persona" },
      { name: "Paint Nite", url: "https://www.paintnite.com/", note: "Red global de eventos de pintura social con bebidas" }
    ]
  },

  // ───────────────────────────────────────────────
  // 14. PRIVATE KARAOKE ROOMS
  // ───────────────────────────────────────────────
  {
    id: "karaoke",
    emoji: "🎤",
    name: "Karaoke en Salas Privadas",
    category: "entretenimiento",
    feasibility: 4,
    capexMin: 25000,
    capexMax: 75000,
    capexMid: 45000,
    opexMin: 3800,
    opexMax: 6700,
    revenueAnnual: 132000,
    breakeven: "50% de ocupación de salas en horario operativo",
    payback: "1.5–2.5 años",
    summary: "4-6 salas privadas temáticas estilo norebang coreano, con tablets de autoservicio, alimentos y bebidas. K-BOX Santiago (abrió feb 2026) prueba la demanda chilena a CLP $29K-$60K/hora. Las salas privadas eliminan la barrera de vergüenza (factor cultural enorme en LatAm). Cero karaoke privado en todo el sur de Chile. Buen potencial de F&B como complemento.",
    pros: [
      "Salas privadas = sin barrera de vergüenza (enorme en cultura LatAm)",
      "K-BOX Santiago (feb 2026) valida demanda chilena a CLP $29K-$60K/hr",
      "Fiestas de cumpleaños y celebraciones = demanda local estable",
      "Modelo autoservicio = bajo requerimiento de personal",
      "F&B agrega 30-50% al ingreso por sala"
    ],
    cons: [
      "Requiere Patente de Alcoholes (licencia compleja de obtener)",
      "Inversión significativa en insonorización por sala",
      "200+ m² de espacio necesario",
      "K-BOX es muy nuevo en Chile — concepto aún probándose",
      "Enfoque nocturno limita ingresos diurnos"
    ],
    competition: "Ningún karaoke privado en el sur de Chile. K-BOX (Santiago, 8 salas, abrió 2026, CLP $28.9K-$59.9K/hora). Sala Portugal (Santiago, karaoke tradicional de piso abierto, CLP $20K-$60K entrada). Puerto Montt tiene bares de karaoke tradicional pero no salas privadas.",
    capexBreakdown: [
      { item: "Insonorización (4-6 salas, $2K-$5K c/u)", min: 8000, max: 30000 },
      { item: "Equipos de audio y video por sala", min: 6000, max: 15000 },
      { item: "Mobiliario por sala", min: 3000, max: 8000 },
      { item: "Sistema de tablets y software de karaoke", min: 2000, max: 5000 },
      { item: "Adecuación general y bar", min: 3000, max: 8000 },
      { item: "Capital de trabajo y legal", min: 3000, max: 9000 }
    ],
    opexBreakdown: [
      { item: "Arriendo (200-350 m²)", min: 1400, max: 2500 },
      { item: "Personal (2-3: recepción/bar + monitor)", min: 1050, max: 1600 },
      { item: "Alimentos y bebidas", min: 800, max: 1500 },
      { item: "Servicios básicos (electricidad + calefacción)", min: 250, max: 450 },
      { item: "Licencias de música y software", min: 150, max: 300 },
      { item: "Marketing", min: 150, max: 350 }
    ],
    revenueModel: "Sala pequeña (2-4 pax): CLP $20K-$38K/hora (~$21-40 USD). Sala grande (6-10 pax): CLP $32K-$60K/hora (~$33-63 USD). Benchmark: K-BOX Santiago CLP $28.9K-$59.9K/hr. A 50% de ocupación: ~$8K-$14K/mes + F&B. Ingreso anual estimado: ~$132.000 USD. Fiestas y eventos corporativos son ingreso premium.",
    localAngle: "Salas temáticas: 'Sala Volcánica' (decoración de lava y fuego), 'Sala Lago Llanquihue' (azul y naturaleza), 'Sala Cervecera' (temática de cerveza artesanal local). Noches especiales: karaoke en alemán por herencia, noches de ranchera, K-pop nights. Paquetes de cumpleaños como servicio estrella. Conexión con la vida nocturna — Puerto Varas carece de opciones después de las 10pm.",
    references: [
      { name: "K-BOX Santiago", url: "https://www.instagram.com/kbox_santiago/", note: "8 salas privadas, abrió 2026 — CLP $28.9K-$59.9K/hora" },
      { name: "Sala Portugal Santiago", url: "https://www.instagram.com/salaportugal/", note: "Karaoke tradicional de referencia en Chile" }
    ]
  },

  // ───────────────────────────────────────────────
  // 15. PUZZLE ROOM
  // ───────────────────────────────────────────────
  {
    id: "puzzle-room",
    emoji: "🧩",
    name: "Puzzle Room / Centro de Juegos Mentales",
    category: "entretenimiento",
    feasibility: 4,
    capexMin: 8000,
    capexMax: 20000,
    capexMid: 14000,
    opexMin: 1840,
    opexMax: 3220,
    revenueAnnual: 126000,
    breakeven: "30-40% de capacidad con 15+ visitantes/día",
    payback: "3–6 meses",
    summary: "Espacio abierto con 10-12 estaciones de puzzles mecánicos, acertijos y juegos de lógica. Múltiples grupos juegan simultáneamente. TERCER CAPEX MÁS BAJO y OPEX MÁS BAJO de los 15 conceptos. El mayor throughput: 30-60 visitantes simultáneos (vs. 1 grupo por escape room). Walk-in friendly sin reserva previa. COMPLEMENTO PERFECTO del escape room — comparten espacio, personal y marketing.",
    pros: [
      "CAPEX y OPEX ultra bajos — trivial inversión",
      "5-12 grupos simultáneos vs. 1 por escape room = throughput masivo",
      "Walk-in friendly (sin reserva) captura tráfico turístico espontáneo",
      "Verdadero todas las edades (5-95 años)",
      "Reset instantáneo entre grupos (sin 15-30 min como escape rooms)",
      "1 persona puede operarlo. Literalmente."
    ],
    cons: [
      "Concepto casi desconocido en Chile — requiere educación de mercado",
      "Precio por ticket menor que escape rooms",
      "Puzzles deben importarse (España/China)",
      "Puede parecer demasiado simple para algunos clientes",
      "Menos 'viral' que experiencias inmersivas"
    ],
    competition: "Ninguno encontrado en Chile. FUGA Escape Room (Santiago, CLP $15K-$19K) y Escape Room Chile (Talca) son la categoría más cercana pero modelo diferente. Boda Borg (EEUU/Europa, $25-35/persona) es el referente internacional del concepto de puzzle rooms grupales.",
    capexBreakdown: [
      { item: "Puzzles y juegos mecánicos (50-80 unidades)", min: 2000, max: 6000 },
      { item: "Mobiliario (mesas, estantes, sillas)", min: 2300, max: 5500 },
      { item: "Decoración temática", min: 800, max: 2000 },
      { item: "Setup, legal y marketing de lanzamiento", min: 1200, max: 2700 },
      { item: "Capital de trabajo", min: 1700, max: 3800 }
    ],
    opexBreakdown: [
      { item: "Arriendo (80-150 m²)", min: 700, max: 1200 },
      { item: "Personal (1-2 personas)", min: 600, max: 900 },
      { item: "Servicios básicos", min: 80, max: 150 },
      { item: "Reposición de puzzles", min: 100, max: 300 },
      { item: "Marketing y otros", min: 360, max: 670 }
    ],
    revenueModel: "Entrada: CLP $8.000-$18.000/persona ($8-19 USD). Grupos escolares: CLP $6K-$9K/estudiante. Eventos privados: CLP $180K-$350K. A 50% de capacidad (30-60 pax simultáneos): ~$12.600-$18.900/mes. Ingreso anual estimado: ~$126.000 USD. Mayor throughput de todos los conceptos.",
    localAngle: "Puzzles temáticos de la zona: resolver el misterio del Volcán Osorno, descifrar códigos mapuches (con colaboración cultural), navegación del Lago Llanquihue. Espacio compartido con escape room = cross-selling natural. Walk-in ideal para turistas que pasan por Puerto Varas sin reserva previa. Competencias y rankings semanales para fidelizar locales.",
    references: [
      { name: "Boda Borg", url: "https://www.bodaborg.com/", note: "Concepto de puzzle rooms grupales — referente mundial" },
      { name: "Boda Borg Boston", url: "https://www.bodaborg.com/boston/", note: "Ubicación en EEUU — $25-35/persona, alta repetición" }
    ]
  }
];

// ───────────────────────────────────────────────
// OPORTUNIDADES DE COMBO
// ───────────────────────────────────────────────
window.comboOpportunities = [
  {
    id: "entertainment-hub",
    name: "Centro de Entretenimiento",
    emoji: "🎮",
    businesses: ["board-game-cafe", "puzzle-room", "rage-room"],
    totalCapex: 87000,
    description: "Board game café como negocio ancla (ingresos estables de F&B) + puzzle room como zona de overflow walk-in (misma demografía) + rage room como complemento (modelo probado por 60 No More en Santiago). Espacio, personal, baños y marketing compartidos. Recorrido del cliente: llegar → jugar juegos de mesa → desafío de puzzles → destruir cosas → tomar café.",
    phase: 1
  },
  {
    id: "experiential-tourism",
    name: "Turismo Experiencial",
    emoji: "✨",
    businesses: ["art-workshop", "murder-mystery"],
    totalCapex: 26000,
    description: "Taller de arte de día, cena con misterio de noche. MISMO espacio físico (mesas y sillas sirven para ambos). Menor inversión inicial de todos los combos. Arte = souvenir para llevar. Misterio = historia inolvidable. Cross-marketing: 'Pinta la escena del crimen de día, resuelve el misterio de noche.'",
    phase: 1
  },
  {
    id: "social-night",
    name: "Noche Social",
    emoji: "🌙",
    businesses: ["board-game-cafe", "karaoke"],
    totalCapex: 92000,
    description: "Board games para la tarde y familias. Karaoke para la noche y grupos. Infraestructura de café/bar compartida. Diferentes horarios pico maximizan el uso del espacio. Board games atiende mercado familiar diurno; karaoke captura mercado nocturno de celebraciones.",
    phase: 2
  },
  {
    id: "full-center",
    name: "Centro Completo (Visión 4 años)",
    emoji: "🏢",
    businesses: ["art-workshop", "murder-mystery", "board-game-cafe", "puzzle-room", "escape-room", "rage-room", "karaoke"],
    totalCapex: 185000,
    phases: [
      { year: 1, investment: 30000, items: "Taller de Arte + Cena con Misterio pop-up" },
      { year: 2, investment: 70000, items: "Board Game Café + Puzzle Room" },
      { year: 3, investment: 50000, items: "Escape Room + Rage Room" },
      { year: 4, investment: 35000, items: "Salas de Karaoke" }
    ],
    description: "Destino completo de entretenimiento indoor, único en todo el sur de Chile. Inversión escalonada en 4 años reduce riesgo. Cada fase genera flujo de caja para financiar la siguiente. Visión final: el lugar donde todo Puerto Varas, Puerto Montt y los turistas vienen cuando llueve (178 días al año)."
  }
];
