/**
 * CATALOGO OFERTAS DEL MUNDIAL - JAVASCRIPT LOGIC
 * Contiene la base de datos de las computadoras, accesorios y lógica interactiva.
 */

// Teléfono de contacto para WhatsApp 
const WHATSAPP_PHONE = "5491151051596";

// Catálogo de Computadoras 
const PRODUCTOS_CATALOGO = [
  // --- SECCIÓN 1: LÍNEA GAMER Y ALTO RENDIMIENTO ---
  {
    id: "pc-gamer-apu-a8",
    seccion: 1,
    titulo: "PC ESCRITORIO GAMER AMD APU A8 9600",
    stock: 1, // 1 Unidad -> Muestra "¡ÚLTIMA UNIDAD!"
    precio: 329000,
    imagen: "gamer_case_neon", // ID para renderizado de gabinete dinámico
    specs: [
      { label: "Procesador", value: "AMD APU A8 9600 (Gen. 7ª)" },
      { label: "Memoria RAM", value: "8GB DDR4 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco M.2 NVME 120GB + 500GB HDD" },
      { label: "Gráficos", value: "Tarjeta Gráfica VEGA 7 GRAPHICS ONBOARD" },
      { label: "Monitores", value: "Soporta hasta 2 monitores Full HD+" },
      { label: "Puertos y WiFi", value: "Conexiones USB 2.0 x6 / USB 3.0 x2 / USB-C x1 + Placa WiFi" },
      { label: "Gabinete", value: "Gabinete con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-gamer-i3-9100f",
    seccion: 1,
    titulo: "PC ESCRITORIO INTEL CORE i3-9100F",
    stock: 1,
    precio: 339000,
    imagen: "slim_case_kelyx",
    specs: [
      { label: "Procesador", value: "Intel Core i3 9100F (Gen. 9ª)" },
      { label: "Memoria RAM", value: "8GB DDR4 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 240GB" },
      { label: "Gráficos", value: "Tarjeta Gráfica NVIDIA GEFORCE 210 1GB" },
      { label: "Monitores", value: "Soporta hasta 3 monitores Full HD" },
      { label: "Puertos y WiFi", value: "Conexiones USB 2.0 x6 / USB 3.0 x2 / USB-C x1 + Placa WiFi" },
      { label: "Gabinete", value: "Gabinete Slim Kelyx con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-gamer-i5-7500",
    seccion: 1,
    titulo: "PC ESCRITORIO INTEL CORE i5-7500",
    stock: 1,
    precio: 489000,
    imagen: "gamer_case_neon",
    specs: [
      { label: "Procesador", value: "Intel Core i5-7500 (Gen. 7ª)" },
      { label: "Memoria RAM", value: "16GB DDR4 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 240GB" },
      { label: "Gráficos", value: "Graficos Intel HD 2GB" },
      { label: "Monitores", value: "Soporta hasta 2 monitores Full HD+" },
      { label: "Puertos y WiFi", value: "Conexiones USB 2.0 x6 / USB 3.0 x2 + Placa WiFi" },
      { label: "Gabinete", value: "Gabinete gamer RGB con Fuente Corsair 550W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },

  // --- SECCIÓN 2: HOGAR, ESTUDIO Y OFICINA ---
  {
    id: "pc-oficina-i3-9100",
    seccion: 2,
    titulo: "PC ESCRITORIO INTEL CORE i3-9100",
    stock: 1,
    precio: 319000,
    imagen: "slim_case_bangho",
    specs: [
      { label: "Procesador", value: "Intel Core i3 9100 (Gen. 9ª)" },
      { label: "Memoria RAM", value: "8GB DDR4 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 240GB" },
      { label: "Monitores", value: "Soporta hasta 2 monitores Full HD+" },
      { label: "Puertos y WiFi", value: "Conexiones USB 2.0 x6 / USB 3.0 x2 / USB-C x1 + Placa WiFi" },
      { label: "Gabinete", value: "Gabinete Slim BANGHO con Fuente 400W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-oficina-i5-3330",
    seccion: 2,
    titulo: "PC ESCRITORIO INTEL CORE i5",
    stock: 6, // 6 Unidades -> Stock Disponible
    precio: 170000,
    imagen: "atx_case_office",
    specs: [
      { label: "Procesador", value: "Intel Core i5 3330 (Gen. 3ª)" },
      { label: "Placa Madre", value: "Mother Gigabyte H61M-S1" },
      { label: "Memoria RAM", value: "4GB DDR3 (Expandible a 16GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },

  // --- SECCIÓN 3: OPCIONES ECONÓMICAS - GENERACIÓN 2 Y 3 ---
  {
    id: "pc-eco-i5-3330",
    seccion: 3,
    titulo: "PC ESCRITORIO INTEL CORE i5",
    stock: 2,
    precio: 190000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i5 3330 3.0Ghz (Gen. 3ª)" },
      { label: "Placa Madre", value: "Mother INTEL DH61WW" },
      { label: "Memoria RAM", value: "4GB DDR3 (Expandible a 16GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-eco-i3-2100",
    seccion: 3,
    titulo: "PC ESCRITORIO INTEL CORE i3",
    stock: 2,
    precio: 180000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i3 2100 3.1Ghz (Gen. 2ª)" },
      { label: "Placa Madre", value: "Mother INTEL DH61CR" },
      { label: "Memoria RAM", value: "4GB DDR3 (Expandible a 16GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-eco-i3-2120",
    seccion: 3,
    titulo: "PC ESCRITORIO INTEL CORE i3",
    stock: 2,
    precio: 170000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i3 2120 3.1Ghz (Gen. 2ª)" },
      { label: "Placa Madre", value: "Mother INTEL DH61HO" },
      { label: "Memoria RAM", value: "4GB DDR3 (Expandible a 16GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },

  // --- SECCIÓN 4: MÁS POTENCIA, MÁS POSIBILIDADES - GENERACIÓN 2 ---
  {
    id: "pc-potencia-i5-2310",
    seccion: 4,
    titulo: "PC ESCRITORIO INTEL CORE i5",
    stock: 1,
    precio: 250000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i5 2310 2.9Ghz (Gen. 2ª)" },
      { label: "Placa Madre", value: "Mother INTEL DH61CR" },
      { label: "Memoria RAM", value: "8GB DDR3 (Expandible a 16GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-potencia-i7-2600s",
    seccion: 4,
    titulo: "PC ESCRITORIO INTEL CORE i7",
    stock: 1,
    precio: 355000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i7 2600s 2.8Ghz (Gen. 2ª)" },
      { label: "Placa Madre", value: "Mother INTEL DB75EN" },
      { label: "Puertos y Video", value: "Conexiones USB 3.0 x2 - VGA + DVI" },
      { label: "Memoria RAM", value: "8GB DDR3 (Expandible a 16GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 500W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-potencia-i3-2100",
    seccion: 4,
    titulo: "PC ESCRITORIO INTEL CORE i3",
    stock: 1,
    precio: 250000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i3 2100 3.1Ghz (Gen. 2ª)" },
      { label: "Placa Madre", value: "Mother INTEL DH77KC" },
      { label: "Video y Sonido", value: "DVI + DP + HDMI / E-SATA + USB 3.0 x2 + SONIDO 7.1" },
      { label: "Memoria RAM", value: "Memoria RAM 8GB DDR3 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },

  // --- SECCIÓN 5: GEN 4 - RENDIMIENTO CONFIABLE ---
  {
    id: "pc-gen4-i5-4590-h81",
    seccion: 5,
    titulo: "PC ESCRITORIO INTEL",
    stock: 1,
    precio: 290000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i5 4590 3.3Ghz (Gen. 4ª)" },
      { label: "Placa Madre", value: "Mother Gigabyte H81M-H" },
      { label: "Video y Puertos", value: "VGA + HDMI / USB 3.0 x2" },
      { label: "Memoria RAM", value: "Memoria RAM 8GB DDR3 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-gen4-i5-4440-s1",
    seccion: 5,
    titulo: "PC ESCRITORIO INTEL",
    stock: 4,
    precio: 260000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i5 4440 3.1Ghz (Gen. 4ª)" },
      { label: "Placa Madre", value: "Mother Gigabyte H81M-S1" },
      { label: "Video y Puertos", value: "VGA / USB 3.0 x2" },
      { label: "Memoria RAM", value: "Memoria RAM 8GB DDR3 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  },
  {
    id: "pc-gen4-i5-4590-s1",
    seccion: 5,
    titulo: "PC ESCRITORIO INTEL",
    stock: 3,
    precio: 280000,
    imagen: "atx_case_gamer",
    specs: [
      { label: "Procesador", value: "Intel Core i5 4590 3.3Ghz (Gen. 4ª)" },
      { label: "Placa Madre", value: "Mother Gigabyte H81M-S1" },
      { label: "Video y Puertos", value: "VGA / USB 3.0 x2" },
      { label: "Memoria RAM", value: "Memoria RAM 8GB DDR3 (Expandible a 32GB)" },
      { label: "Almacenamiento", value: "Disco SSD Gigabyte 120GB" },
      { label: "Gabinete", value: "Gabinete ATX con Fuente 450W" },
      { label: "Periféricos", value: "Mouse y teclado Gamer retroiluminado" },
      { label: "Sistema Operativo", value: "Windows 11 Pro Incluido" }
    ]
  }
];

// Accesorios de personalización
const ACCESORIOS = [
  { id: "monitores", nombre: "Monitores LED", icon: "📺" },
  { id: "gabinetes", nombre: "Gabinetes Gamer y Oficina", icon: "🕹️" },
  { id: "teclados", nombre: "Teclados y Mouse Gamer", icon: "🖱️" },
  { id: "kits", nombre: "Kits Teclado + Mouse inalámbricos", icon: "⌨️" },
  { id: "parlantes", nombre: "Parlantes y Auriculares", icon: "🔊" },
  { id: "wifi", nombre: "Adaptadores WiFi", icon: "📶" },
  { id: "ram", nombre: "Memoria RAM adicional", icon: "⚡" },
  { id: "ssd", nombre: "Discos SSD y NVMe de mayor capacidad", icon: "💾" }
];

// SVGs Dinámicos para los Gabinetes (para evitar imágenes vacías / placeholders)
const GABINETE_SVGS = {
  gamer_case_neon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" width="100%" height="100%">
      <!-- Estructura del Gabinete -->
      <rect x="15" y="10" width="70" height="110" rx="6" fill="#111827" stroke="#00f0ff" stroke-width="2" />
      <rect x="18" y="13" width="64" height="104" rx="4" fill="#1e293b" />
      
      <!-- Vidrio templado lateral -->
      <rect x="22" y="17" width="56" height="90" rx="3" fill="#0f172a" opacity="0.85" stroke="#38bdf8" stroke-dasharray="3 3" />
      
      <!-- Coolers RGB (Ventiladores) -->
      <circle cx="50" cy="35" r="14" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="10 5" />
      <circle cx="50" cy="35" r="8" fill="none" stroke="#d946ef" stroke-width="1" />
      <circle cx="50" cy="35" r="2" fill="#fff" />
      
      <circle cx="50" cy="70" r="14" fill="none" stroke="#00f0ff" stroke-width="1.5" stroke-dasharray="8 6" />
      <circle cx="50" cy="70" r="8" fill="none" stroke="#d946ef" stroke-width="1" />
      <circle cx="50" cy="70" r="2" fill="#fff" />
      
      <!-- Componentes internos iluminados -->
      <rect x="28" y="93" width="44" height="10" fill="#334155" />
      <line x1="30" y1="95" x2="70" y2="95" stroke="#a21caf" stroke-width="1.5" />
      <circle cx="35" cy="23" r="1.5" fill="#22c55e" />
      <circle cx="40" cy="23" r="1.5" fill="#ef4444" />
      
      <!-- Logo o panel frontal -->
      <path d="M 15 110 L 85 110 L 85 120 L 15 120 Z" fill="#090d16" />
      <line x1="25" y1="115" x2="35" y2="115" stroke="#00f0ff" stroke-width="1" />
    </svg>
  `,
  slim_case_kelyx: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" width="100%" height="100%">
      <!-- Gabinete Slim Kelyx -->
      <rect x="30" y="10" width="40" height="110" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="2" />
      <rect x="33" y="13" width="34" height="104" rx="2" fill="#1e293b" />
      
      <!-- Detalles frontales -->
      <rect x="38" y="20" width="24" height="6" fill="#090d16" rx="1" />
      <rect x="42" y="21" width="16" height="1.5" fill="#3b82f6" />
      
      <!-- Botón de Encendido con LED -->
      <circle cx="50" cy="40" r="3.5" fill="#0f172a" stroke="#00f0ff" stroke-width="1" />
      <circle cx="50" cy="40" r="1" fill="#00f0ff" />
      
      <!-- Rejillas de ventilación -->
      <line x1="38" y1="55" x2="62" y2="55" stroke="#475569" stroke-width="1" />
      <line x1="38" y1="60" x2="62" y2="60" stroke="#475569" stroke-width="1" />
      <line x1="38" y1="65" x2="62" y2="65" stroke="#475569" stroke-width="1" />
      <line x1="38" y1="70" x2="62" y2="70" stroke="#475569" stroke-width="1" />
      <line x1="38" y1="75" x2="62" y2="75" stroke="#475569" stroke-width="1" />
      <line x1="38" y1="80" x2="62" y2="80" stroke="#475569" stroke-width="1" />
      <line x1="38" y1="85" x2="62" y2="85" stroke="#475569" stroke-width="1" />
      
      <!-- Logo Kelyx sutil -->
      <text x="50" y="105" fill="#94a3b8" font-size="5" text-anchor="middle" font-family="sans-serif" letter-spacing="1">SLIM</text>
    </svg>
  `,
  slim_case_bangho: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" width="100%" height="100%">
      <!-- Gabinete Slim Bangho -->
      <rect x="28" y="10" width="44" height="110" rx="3" fill="#18181b" stroke="#52525b" stroke-width="2" />
      <rect x="31" y="13" width="38" height="104" rx="1.5" fill="#27272a" />
      
      <!-- Detalle de la marca -->
      <rect x="36" y="25" width="28" height="15" fill="#09090b" rx="1" />
      <text x="50" y="34" fill="#e4e4e7" font-size="6" text-anchor="middle" font-family="sans-serif" font-weight="bold">B.</text>
      
      <!-- Botón de encendido e indicadores -->
      <circle cx="50" cy="55" r="4" fill="none" stroke="#22c55e" stroke-width="1.5" />
      <circle cx="50" cy="55" r="1.5" fill="#22c55e" />
      
      <!-- Panel de puertos frontal -->
      <rect x="42" y="75" width="16" height="4" fill="#09090b" />
      <circle cx="45" cy="77" r="1" fill="#a1a1aa" />
      <circle cx="55" cy="77" r="1" fill="#a1a1aa" />
      
      <!-- Rejillas inferiores -->
      <line x1="38" y1="95" x2="62" y2="95" stroke="#3f3f46" stroke-width="1.5" />
      <line x1="38" y1="100" x2="62" y2="100" stroke="#3f3f46" stroke-width="1.5" />
      <line x1="38" y1="105" x2="62" y2="105" stroke="#3f3f46" stroke-width="1.5" />
    </svg>
  `,
  atx_case_office: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" width="100%" height="100%">
      <!-- Gabinete de Oficina ATX Estándar -->
      <rect x="18" y="10" width="64" height="110" rx="4" fill="#1c1917" stroke="#44403c" stroke-width="2" />
      <rect x="21" y="13" width="58" height="104" rx="2" fill="#292524" />
      
      <!-- Bahías lectoras superiores -->
      <rect x="26" y="20" width="48" height="12" fill="#1c1917" rx="1" />
      <line x1="28" y1="26" x2="72" y2="26" stroke="#44403c" stroke-width="1" />
      <rect x="26" y="36" width="48" height="12" fill="#1c1917" rx="1" />
      <line x1="28" y1="42" x2="72" y2="42" stroke="#44403c" stroke-width="1" />
      
      <!-- Botones e indicadores -->
      <circle cx="50" cy="62" r="3.5" fill="#1c1917" stroke="#3b82f6" stroke-width="1" />
      <circle cx="50" cy="62" r="1" fill="#3b82f6" />
      <circle cx="40" cy="62" r="1" fill="#22c55e" />
      <circle cx="60" cy="62" r="1" fill="#ef4444" />
      
      <!-- Rejillas inferiores de aireación -->
      <rect x="26" y="80" width="48" height="30" fill="#1c1917" rx="2" />
      <line x1="30" y1="86" x2="70" y2="86" stroke="#292524" stroke-width="2" stroke-dasharray="2 2" />
      <line x1="30" y1="92" x2="70" y2="92" stroke="#292524" stroke-width="2" stroke-dasharray="2 2" />
      <line x1="30" y1="98" x2="70" y2="98" stroke="#292524" stroke-width="2" stroke-dasharray="2 2" />
      <line x1="30" y1="104" x2="70" y2="104" stroke="#292524" stroke-width="2" stroke-dasharray="2 2" />
    </svg>
  `,
  atx_case_gamer: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 130" width="100%" height="100%">
      <!-- Gabinete Gamer con 3 Coolers Frontales RGB -->
      <rect x="18" y="10" width="64" height="110" rx="5" fill="#090d16" stroke="#00f0ff" stroke-width="2" />
      <rect x="21" y="13" width="58" height="104" rx="3" fill="#111827" />
      
      <!-- Rejilla frontal transparente -->
      <rect x="25" y="17" width="50" height="96" rx="2" fill="#1f2937" opacity="0.9" />
      
      <!-- Cooler Frontal 1 -->
      <circle cx="50" cy="33" r="12" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="8 4" />
      <circle cx="50" cy="33" r="8" fill="none" stroke="#d946ef" stroke-width="1" stroke-dasharray="4 2" />
      <circle cx="50" cy="33" r="2" fill="#fff" />
      
      <!-- Cooler Frontal 2 -->
      <circle cx="50" cy="65" r="12" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="6 6" />
      <circle cx="50" cy="65" r="8" fill="none" stroke="#d946ef" stroke-width="1" stroke-dasharray="3 3" />
      <circle cx="50" cy="65" r="2" fill="#fff" />
      
      <!-- Cooler Frontal 3 -->
      <circle cx="50" cy="97" r="12" fill="none" stroke="#00f0ff" stroke-width="2" stroke-dasharray="10 4" />
      <circle cx="50" cy="97" r="8" fill="none" stroke="#d946ef" stroke-width="1" stroke-dasharray="5 2" />
      <circle cx="50" cy="97" r="2" fill="#fff" />
      
      <!-- Reflejo en cristal -->
      <path d="M 27 19 L 60 19 L 27 100 Z" fill="#ffffff" opacity="0.05" />
    </svg>
  `
};

// Formatear precios a pesos argentinos (ej. $330.000)
function formatPrice(val) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(val);
}

// Generar el mensaje dinámico para WhatsApp al hacer la consulta
function generateWhatsAppUrl(producto, accesorioNombre = null) {
  let text = "";
  if (accesorioNombre) {
    text = `Hola! Vi las Ofertas del MUNDIAL. Me interesa el accesorio "${accesorioNombre}" para agregar a mi compra. ¿Me darías más información?`;
  } else {
    text = `Hola! Vi las Ofertas del MUNDIAL. Me interesa el equipo: "${producto.titulo}" con procesador ${producto.specs[0].value} por un valor de ${formatPrice(producto.precio)}. ¿Tienen disponibilidad?`;
  }
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

// Renderizar la grilla de productos agrupados por secciones
function renderCatalog() {
  const container = document.getElementById("catalog-sections-container");
  if (!container) return;

  // Limpiamos el contenedor
  container.innerHTML = "";

  // Agrupar por sección
  const seccionesInfo = {
    1: {
      titulo: "1. LÍNEA GAMER Y ALTO RENDIMIENTO",
      icon: "🎮",
      class: "sec-gamer",
      desc: "Equipos optimizados para videojuegos avanzados, streaming y procesamiento de alto rendimiento."
    },
    2: {
      titulo: "2. HOGAR, ESTUDIO Y OFICINA",
      icon: "🏠",
      class: "sec-home",
      desc: "Excelente rendimiento para tareas diarias de oficina, navegación web y estudio escolar/universitario."
    },
    3: {
      titulo: "3. OPCIONES ECONÓMICAS - GENERACIÓN 2 Y 3",
      icon: "📈",
      class: "sec-eco",
      desc: "PCs reacondicionadas y garantizadas, ideales para presupuestos ajustados con el mejor costo-beneficio."
    },
    4: {
      titulo: "4. MÁS POTENCIA, MÁS POSIBILIDADES - GENERACIÓN 2",
      icon: "⚡",
      class: "sec-potencia",
      desc: "Procesadores de alta gama de 2da generación para maximizar la multitarea y el rendimiento del día a día."
    },
    5: {
      titulo: "5. GEN 4 - RENDIMIENTO CONFIABLE",
      icon: "⚙️",
      class: "sec-gen4",
      desc: "Plataformas de 4ta generación Intel Core i5 estables, duraderas y preparadas para oficina o comercio."
    }
  };

  // Iterar sobre las 5 secciones
  for (let s = 1; s <= 5; s++) {
    const info = seccionesInfo[s];
    const productosDeSeccion = PRODUCTOS_CATALOGO.filter(p => p.seccion === s);

    if (productosDeSeccion.length === 0) continue;

    // Crear elemento de sección
    const sectionElement = document.createElement("section");
    sectionElement.className = `catalog-section ${info.class}`;
    sectionElement.id = `seccion-${s}`;

    // Header de la sección (idéntico en color y estructura al original)
    sectionElement.innerHTML = `
      <div class="section-header">
        <div class="section-header-title">
          <span class="section-icon">${info.icon}</span>
          <h2>${info.titulo}</h2>
        </div>
        <p class="section-desc">${info.desc}</p>
      </div>
      <div class="cards-grid"></div>
    `;

    const grid = sectionElement.querySelector(".cards-grid");

    // Agregar las tarjetas
    productosDeSeccion.forEach(p => {
      // Determinar badge de stock y clases
      let stockBadgeHtml = "";
      let isLastUnit = p.stock === 1;

      if (isLastUnit) {
        stockBadgeHtml = `
          <div class="stock-badge urgent">
            <span class="badge-pulse"></span>¡ÚLTIMA UNIDAD!
          </div>
          <div class="stock-label-footer red">[1 UNIDAD]</div>
        `;
      } else {
        stockBadgeHtml = `
          <div class="stock-badge available">
            STOCK DISPONIBLE
          </div>
          <div class="stock-label-footer green">[${p.stock} UNIDADES]</div>
        `;
      }

      // Obtener SVG del gabinete o renderizar imagen real si se provee una ruta
      let cabinetHtml = "";
      const isImagePath = p.imagen.includes("/") || p.imagen.includes(".") || p.imagen.startsWith("http");

      if (isImagePath) {
        cabinetHtml = `<img src="${p.imagen}" alt="${p.titulo}" class="cabinet-img" style="max-height: 100%; max-width: 100%; object-fit: contain;">`;
      } else {
        cabinetHtml = GABINETE_SVGS[p.imagen] || GABINETE_SVGS.atx_case_gamer;
      }

      // Crear tarjeta HTML
      const card = document.createElement("div");
      card.className = `pc-card ${isLastUnit ? 'highlight-last' : ''}`;
      card.id = `card-${p.id}`;

      // Detalle de las especificaciones
      const specsListHtml = p.specs.map(spec => {
        let specIcon = "🔹";
        const specLabelLower = spec.label.toLowerCase();

        if (specLabelLower.includes("procesador")) specIcon = "💻";
        else if (specLabelLower.includes("memoria")) specIcon = "🧠";
        else if (specLabelLower.includes("almacenamiento") || specLabelLower.includes("disco")) specIcon = "💾";
        else if (specLabelLower.includes("gráficos") || specLabelLower.includes("video")) specIcon = "🎮";
        else if (specLabelLower.includes("monitores") || specLabelLower.includes("pantalla")) specIcon = "📺";
        else if (specLabelLower.includes("puerto") || specLabelLower.includes("conexión")) specIcon = "🔌";
        else if (specLabelLower.includes("gabinete")) specIcon = "📦";
        else if (specLabelLower.includes("periférico")) specIcon = "⌨️";
        else if (specLabelLower.includes("sistema") || specLabelLower.includes("operativo")) specIcon = "⚙️";
        else if (specLabelLower.includes("placa madre") || specLabelLower.includes("mother")) specIcon = "📟";

        return `
          <li>
            <span class="spec-icon">${specIcon}</span>
            <div class="spec-content">
              <strong>${spec.label}:</strong> <span>${spec.value}</span>
            </div>
          </li>
        `;
      }).join("");

      // Renderizar el HTML interno de la tarjeta
      card.innerHTML = `
        <!-- Badge Superior de Stock -->
        <div class="card-badge-container">
          ${stockBadgeHtml.split('</div>')[0]}</div>
        </div>
        
        <!-- Galería/Imagen del Gabinete -->
        <div class="pc-image-container">
          <div class="cabinet-wrapper">
            ${cabinetHtml}
          </div>
          <!-- Nota sutil para cambiar imagen fácilmente -->
          <div class="image-replace-note">Reemplazable por imagen real (SVG/PNG)</div>
        </div>
        
        <!-- Cuerpo de Información -->
        <div class="pc-info">
          <h3 class="pc-title">${p.titulo}</h3>
          <ul class="pc-specs">
            ${specsListHtml}
          </ul>
        </div>
        
        <!-- Pie de tarjeta con precio y botón -->
        <div class="pc-footer">
          <div class="pc-pricing">
            <span class="price-label">Precio Oferta</span>
            <div class="price-value">${formatPrice(p.precio)}</div>
          </div>
          <div class="pc-actions">
            <!-- Badge Inferior con cantidades específicas -->
            ${stockBadgeHtml.split('</div>')[1] || ''}
            <a href="${generateWhatsAppUrl(p)}" target="_blank" class="btn-whatsapp-card" title="Consultar disponibilidad por WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 496l133.9-35.2c32.6 17.5 69.3 26.8 106.8 26.8 122.4 0 222-99.6 222-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-79.8 21 21.4-77.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
              Consultar Oferta
            </a>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    container.appendChild(sectionElement);
  }
}

// Renderizar la sección de accesorios en el panel de personalización
function renderAccessories() {
  const container = document.getElementById("accessories-grid-container");
  if (!container) return;

  container.innerHTML = "";

  ACCESORIOS.forEach(acc => {
    const item = document.createElement("div");
    item.className = "accessory-card";

    // URL de WhatsApp para este accesorio
    const waUrl = generateWhatsAppUrl(null, acc.nombre);

    item.innerHTML = `
      <div class="accessory-icon">${acc.icon}</div>
      <div class="accessory-name">${acc.nombre}</div>
      <a href="${waUrl}" target="_blank" class="accessory-btn">
        <span>Consultar</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="12" height="12" fill="currentColor">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
      </a>
    `;
    container.appendChild(item);
  });
}

// Lógica de Filtro y Buscador Dinámico de Computadoras
function setupFilters() {
  const searchInput = document.getElementById("catalog-search");
  const filterSection = document.getElementById("section-filter");

  if (!searchInput || !filterSection) return;

  const handleFilter = () => {
    const query = searchInput.value.toLowerCase().trim();
    const sectionVal = filterSection.value;

    PRODUCTOS_CATALOGO.forEach(p => {
      const card = document.getElementById(`card-${p.id}`);
      if (!card) return;

      // Evaluar texto de búsqueda (Título, Procesador, Gráficos)
      const matchesText = p.titulo.toLowerCase().includes(query) ||
        p.specs.some(spec => spec.value.toLowerCase().includes(query));

      // Evaluar sección
      const matchesSection = sectionVal === "all" || p.seccion.toString() === sectionVal;

      // Mostrar u ocultar
      if (matchesText && matchesSection) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });

    // Ocultar cabeceras de sección enteras si no tienen tarjetas visibles
    for (let s = 1; s <= 5; s++) {
      const sectionEl = document.getElementById(`seccion-${s}`);
      if (!sectionEl) continue;

      const cards = sectionEl.querySelectorAll(".pc-card");
      let hasVisibleCard = false;
      cards.forEach(c => {
        if (c.style.display !== "none") {
          hasVisibleCard = true;
        }
      });

      if (hasVisibleCard) {
        sectionEl.style.display = "block";
      } else {
        sectionEl.style.display = "none";
      }
    }
  };

  searchInput.addEventListener("input", handleFilter);
  filterSection.addEventListener("change", handleFilter);
}

// Inicialización de la Aplicación al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  renderCatalog();
  renderAccessories();
  setupFilters();

  // Configurar botón de WhatsApp global (flotante)
  const floatWa = document.getElementById("whatsapp-float");
  if (floatWa) {
    floatWa.href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Hola! Estoy navegando en el catálogo 'Ofertas del MUNDIAL' y me gustaría hacer una consulta general.")}`;
  }
});
