# Catálogo Digital "Ofertas del MUNDIAL" 🏆💻

Este proyecto consiste en un **landing-catalog premium** diseñado con una estética moderna de retail tecnológico ("Cyberpunk Retail") con acentos de neón azul, cian y morado. Cuenta con interactividad completa en tiempo real, una hoja de estilos de impresión sumamente optimizada para exportar el catálogo a formato **PDF A4** y un **Dashboard de Administración** para gestionar productos y categorías de forma dinámica sin base de datos en servidor.

---

## 📂 Estructura del Proyecto

El desarrollo es 100% nativo (Vanilla HTML/CSS/JS) y se compone de los siguientes archivos en la raíz del espacio de trabajo:

*   **[`index.html`](index.html)**: Estructura semántica del catálogo. Incluye metatags SEO, secciones dinámicas de productos, cuadrícula de accesorios y pie de página comercial.
*   **[`admin.html`](admin.html)**: Interfaz del panel de control de administración. Cuenta con pantalla de acceso de login y formularios para gestionar categorías y computadoras.
*   **[`style.css`](style.css)**: Estilos CSS organizados mediante variables. Define el tema oscuro, los efectos de neón, el responsivo móvil, la diagramación del panel administrativo y las reglas de PDF (`@media print`).
*   **[`app.js`](app.js)**: Motor público del catálogo. Carga dinámicamente las PCs y categorías desde `localStorage` (o fallback inicial), maneja filtros y genera enlaces de WhatsApp.
*   **[`admin.js`](admin.js)**: Lógica interna del administrador. Valida las credenciales, maneja las operaciones CRUD locales, genera plantillas de especificaciones técnicas y expone el exportador de base de datos.

---

## ✨ Características Principales

1.  **Estilo Gamer Tech**: Fondo oscuro de alto contraste y bordes luminosos neón.
2.  **Dashboard Administrativo**: Panel protegido por contraseña para crear, editar y borrar productos o categorías en tiempo real.
3.  **Categorías Editables**: Las categorías se pueden agregar, renombrar, cambiar de color neón o eliminar por completo desde la administración.
4.  **Mensajes Dinámicos**: Los botones de WhatsApp de la web se configuran automáticamente con el nombre de la PC seleccionada, su procesador y precio actual.
5.  **Optimización PDF (Chrome)**:
    *   Oculta los botones interactivos, filtros y WhatsApp flotante.
    *   Formatea el listado en una grilla compacta de **3 columnas** con fuentes reducidas.
    *   Aplica saltos de página inteligentes de forma dinámica (las secciones a partir de la 3ª inician al tope de una nueva página).
    *   Centra la barra de sellos comerciales (`EQUIPOS PROBADOS | COMPONENTES DE CALIDAD...`) como pie de página formal en el PDF.

---

## 🚀 Cómo Ejecutar el Proyecto

Puedes abrir y probar la aplicación inmediatamente de dos maneras:

### 1. Apertura Directa (Navegador)
Haz doble clic sobre el archivo `index.html` en tu explorador de archivos para abrirlo en tu navegador favorito. Para acceder al panel de administración, haz clic en el enlace "Administración" del footer o abre `admin.html`.

### 2. Servidor Local (Recomendado)
Para simular el entorno de red de GitHub Pages de forma local, ejecuta:
```powershell
npx http-server . -p 8000
```
Luego ingresa a `http://localhost:8000` (Público) o `http://localhost:8000/admin.html` (Administración).

---

## 🔑 Acceso al Panel de Administración

Para ingresar al dashboard, utiliza las siguientes credenciales predefinidas:

*   **Usuario**: `adminsasa`
*   **Contraseña**: `OCULTA POR EL DESARROLLADOR XD`

---

## 🛠️ Gestión de Datos y Publicación en GitHub Pages

Dado que la aplicación se aloja de forma estática y gratuita en GitHub Pages (sin bases de datos SQL/NoSQL en servidor), los cambios que guardas en el panel de administración se almacenan **únicamente en el almacenamiento local de tu navegador (`localStorage`)**.

Para publicar tus cambios de manera que **todos los clientes de Internet** puedan ver las nuevas PCs, precios y categorías, sigue estos sencillos pasos:

1.  Realiza todas tus modificaciones (añadir productos, cambiar precios, renombrar categorías) en tu panel administrativo (`admin.html`).
2.  Ve a la pestaña **"Exportar Base de Datos"** dentro del Dashboard.
3.  Haz clic en **"📋 Copiar Base de Datos de Productos"**.
4.  Abre el archivo `app.js` en tu editor de código, busca el array `PRODUCTOS_CATALOGO_DEFAULT` y reemplaza todo su contenido pegando el código copiado.
5.  Haz lo mismo haciendo clic en **"📋 Copiar Base de Datos de Categorías"** y reemplazando `CATEGORIAS_DEFAULT` en `app.js`.
6.  Guarda el archivo `app.js`, realiza un `git commit` y un `git push` a tu repositorio de GitHub Pages.
7.  *¡Listo! Tu catálogo en línea estará permanentemente actualizado para todo el mundo.*

*Nota: Si cometes algún error en las cargas o deseas regresar a la configuración original, puedes hacer clic en **"⚠️ Restablecer Datos de Fábrica"** en el panel de administración.*
