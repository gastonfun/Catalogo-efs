# Catálogo Digital "Ofertas del MUNDIAL" 🏆💻

Este proyecto consiste en un **landing-catalog premium** diseñado con una estética moderna de retail tecnológico ("Cyberpunk Retail") con acentos de neón azul, cian y morado. Cuenta con interactividad completa en tiempo real y una hoja de estilos de impresión sumamente optimizada para exportar el catálogo a formato **PDF A4** desde Google Chrome.

---

## 📂 Estructura del Proyecto

El desarrollo es 100% nativo (Vanilla HTML/CSS/JS) y se compone de los siguientes archivos en la raíz del espacio de trabajo:

*   **[`index.html`](index.html)**: Estructura semántica del catálogo. Incluye metatags SEO, secciones del folleto (1 a 5), cuadrícula interactiva de accesorios y pie de página comercial.
*   **[`style.css`](style.css)**: Estilos CSS organizados mediante variables. Define el tema oscuro, los efectos de resplandor de neón, las micro-animaciones (badges que pulsan) y las reglas de diseño responsivo y de impresión (`@media print`).
*   **[`app.js`](app.js)**: Base de datos estructurada con 13 configuraciones de computadoras transcritas fielmente de la maqueta, motor de renderizado dinámico, buscador y filtros en tiempo real, y generador dinámico de enlaces de consulta por WhatsApp.

---

## ✨ Características Principales

1.  **Estilo Gamer Tech**: Fondo oscuro de alto contraste y bordes luminosos neón.
2.  **Transcripción Fiel**: Contiene las 13 computadoras organizadas en sus 5 secciones originales con especificaciones exactas e iconos vectoriales explicativos.
3.  **Filtros Interactivos**: Buscador dinámico por texto (permite buscar por procesador, RAM o placa de video) y filtro por categoría para ubicar modelos específicos al instante.
4.  **Consulta Directa por WhatsApp**: Cada equipo y accesorio incluye un botón que abre un chat con un mensaje personalizado detallando el modelo exacto y su precio de oferta.
5.  **WhatsApp Flotante**: Botón interactivo global en la parte inferior derecha que permite realizar consultas generales.
6.  **Optimización PDF (Chrome)**:
    *   Oculta de forma automática los botones de consulta web, filtros y banners flotantes.
    *   Reorganiza el diseño en una cuadrícula compacta de **3 columnas** con fuentes más pequeñas para optimizar espacio.
    *   Fuerza saltos de página inteligentes para iniciar las secciones **3, 4 y 5 al tope de una nueva página**.
    *   Conserva y centra la barra inferior comercial de calidad como pie de página formal en el PDF.

---

## 🚀 Cómo Ejecutar el Proyecto

Puedes abrir y probar la aplicación inmediatamente de dos maneras:

### 1. Apertura Directa (Navegador)
Haz doble clic sobre el archivo `index.html` en tu explorador de archivos para abrirlo en tu navegador favorito de forma local.

### 2. Servidor Local (Recomendado)
Para emular un entorno de red real, abre tu terminal en el directorio del proyecto y ejecuta:
```powershell
npx http-server . -p 8000
```
Luego ingresa a `http://localhost:8000` en tu navegador.

---

## 🎨 Guía de Personalización

### Reemplazo de Gabinetes e Imágenes
Cada tarjeta cuenta con un gabinete vectorial interactivo renderizado por SVG. Para usar fotos reales (PNG/JPG):
1.  Guarda tus archivos de imagen en una carpeta (ej. `/images/`).
2.  Abre [`app.js`](app.js) y busca el array `PRODUCTOS_CATALOGO`.
3.  Reemplaza el valor de la propiedad `imagen` por la ruta de tu archivo:
    ```javascript
    // Ejemplo de cambio:
    imagen: "images/gabinete-gamer-ultra.png",
    ```
    *El sistema detectará automáticamente la extensión del archivo y reemplazará el SVG por una etiqueta `<img>` perfectamente escalada.*

### Ajuste de Teléfono de WhatsApp
Para redirigir las consultas de compra al número de tu comercio, abre [`app.js`](app.js) y modifica el número telefónico en la parte superior:
```javascript
const WHATSAPP_PHONE = "5491123456789"; // Ingresa el código de país y de área sin espacios ni guiones
```

---

## 🖨️ Instrucciones de Exportación a PDF

1.  Abre el sitio web en **Google Chrome**.
2.  Presiona **Ctrl + P** (Imprimir).
3.  Selecciona como destino **Guardar como PDF**.
4.  En la configuración avanzada:
    *   Elige tamaño de papel **A4**.
    *   Configura los márgenes como **Predeterminado**.
    *   **IMPORTANTE**: Asegúrate de **activar la casilla "Gráficos de fondo"** en las opciones de Chrome para que los colores de neón, cajas y headers se exporten correctamente.
5.  Haz clic en **Guardar**.
