/**
 * CATALOGO OFERTAS DEL MUNDIAL - ADMIN DASHBOARD LOGIC
 * Controla el acceso de seguridad (adminsasa / mundial2026), operaciones CRUD sobre
 * productos y categorías en localStorage, y la exportación de base de datos.
 */

// Credenciales Administrativas
const ADMIN_USER = "adminsasa";
const ADMIN_PASS = "mundial2026";

// Especificaciones técnicas predeterminadas para nuevos productos (Facilita la carga)
const DEFAULT_SPEC_LABELS = [
  "Procesador",
  "Memoria RAM",
  "Almacenamiento",
  "Gráficos",
  "Monitores",
  "Puertos y WiFi",
  "Gabinete",
  "Periféricos",
  "Sistema Operativo"
];

// Variables de estado local cargadas de localStorage
let productos = [];
let categorias = [];

// ==========================================
// SEGURIDAD & INICIALIZACIÓN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  checkSession();
  setupLogin();
  setupTabs();
  setupFormListeners();
});

// Comprobar si hay una sesión activa de administrador
function checkSession() {
  const isLoggedIn = sessionStorage.getItem("admin_logged_in") === "true";
  const loginSection = document.getElementById("login-container");
  const dashboardSection = document.getElementById("dashboard-container");

  if (isLoggedIn) {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    loadData();
    initDashboard();
  } else {
    loginSection.style.display = "flex";
    dashboardSection.style.display = "none";
  }
}

// Configurar el formulario de Login
function setupLogin() {
  const loginForm = document.getElementById("login-form");
  const errorMsg = document.getElementById("login-error-msg");

  if (!loginForm) return;

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userVal = document.getElementById("username").value.trim();
    const passVal = document.getElementById("password").value.trim();

    if (userVal === ADMIN_USER && passVal === ADMIN_PASS) {
      sessionStorage.setItem("admin_logged_in", "true");
      errorMsg.style.display = "none";
      loginForm.reset();
      checkSession();
    } else {
      errorMsg.style.display = "block";
      errorMsg.textContent = "Usuario o contraseña incorrectos.";
    }
  });

  // Configurar botón de cerrar sesión
  const btnLogout = document.getElementById("btn-logout");
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      sessionStorage.removeItem("admin_logged_in");
      checkSession();
    });
  }
}

// Cargar datos desde localStorage (o inicializar de app.js)
function loadData() {
  // Nota: Dado que index.html corre app.js, si ya se inicializó, los datos estarán en localStorage
  // de lo contrario, creamos un fallback con datos mínimos para evitar errores en admin.html
  productos = JSON.parse(localStorage.getItem("catalogo_pcs")) || [];
  categorias = JSON.parse(localStorage.getItem("catalogo_categorias")) || [];

  if (productos.length === 0 || categorias.length === 0) {
    alert("Inicia primero index.html en tu navegador para precargar la base de datos del folleto, o utiliza el botón 'Restablecer datos de fábrica'.");
  }
}

// ==========================================
// CONTROL DE PESTAÑAS (TABS)
// ==========================================
function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      // Remover activo de botones y paneles
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(pane => pane.classList.remove("active"));

      // Activar correspondiente
      btn.classList.add("active");
      const targetPane = document.getElementById(targetTab);
      if (targetPane) targetPane.classList.add("active");

      // Si se hace clic en la pestaña "Nuevo Producto" desde cero
      if (targetTab === "tab-nuevo-prod" && !btn.dataset.isEditing) {
        resetProductForm();
      }
      delete btn.dataset.isEditing;
    });
  });
}

// ==========================================
// INICIALIZACIÓN DE COMPONENTES DEL DASHBOARD
// ==========================================
function initDashboard() {
  renderProductsTable();
  renderCategoriesSelect();
  renderCategoriesList();
  renderSpecsInputs();
  setupSearch();
}

// ==========================================
// GESTIÓN DE PRODUCTOS (CRUD)
// ==========================================

// Renderizar la tabla de productos en el listado
function renderProductsTable() {
  const tbody = document.getElementById("admin-products-table-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (productos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#64748b;">No hay productos cargados en el catálogo.</td></tr>`;
    return;
  }

  // Diccionario para buscar títulos de categorías rápidamente
  const catDict = {};
  categorias.forEach(c => {
    catDict[c.id] = c.titulo;
  });

  productos.forEach(p => {
    const tr = document.createElement("tr");

    // Gabinete SVG o ruta
    let imageHtml = "";
    const isImagePath = p.imagen.includes("/") || p.imagen.includes(".") || p.imagen.startsWith("http");
    if (isImagePath) {
      imageHtml = `<img src="${p.imagen}" alt="PC" style="height:35px; width:auto; object-fit:contain;">`;
    } else {
      imageHtml = `<span style="font-size:1.2rem;">📦</span>`;
    }

    const catName = catDict[p.seccion] || `Sección ${p.seccion} (Eliminada)`;
    
    // Formatear precio para la tabla
    const precioFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(p.precio);

    tr.innerHTML = `
      <td style="text-align:center;">${imageHtml}</td>
      <td style="font-weight:600; color:#fff;">${p.titulo}</td>
      <td><span class="user-badge" style="font-size:0.75rem; color:#94a3b8; border-color:rgba(255,255,255,0.05);">${catName}</span></td>
      <td class="admin-table-price">${precioFormat}</td>
      <td>
        <span class="stock-label-footer ${p.stock === 1 ? 'red' : 'green'}">
          ${p.stock} U.
        </span>
      </td>
      <td>
        <div class="action-btns">
          <button class="btn-edit" onclick="editProduct('${p.id}')">Editar</button>
          <button class="btn-delete" onclick="deleteProduct('${p.id}')">Eliminar</button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Búsqueda de productos en tiempo real en la tabla
function setupSearch() {
  const searchInput = document.getElementById("admin-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const rows = document.querySelectorAll("#admin-products-table-body tr");

    rows.forEach(row => {
      // Ignorar fila vacía
      if (row.cells.length === 1) return;

      const title = row.cells[1].textContent.toLowerCase();
      const category = row.cells[2].textContent.toLowerCase();
      const price = row.cells[3].textContent.toLowerCase();

      if (title.includes(query) || category.includes(query) || price.includes(query)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

// Renderizar formulario de especificaciones técnicas (9 campos)
function renderSpecsInputs(specs = null) {
  const container = document.getElementById("specs-inputs-container");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    row.className = "spec-input-row";

    let label = DEFAULT_SPEC_LABELS[i] || "";
    let value = "";

    // Si estamos editando y hay especificaciones guardadas
    if (specs && specs[i]) {
      label = specs[i].label;
      value = specs[i].value;
    }

    row.innerHTML = `
      <input type="text" class="filter-input spec-label" placeholder="Etiqueta (Ej: Procesador)" value="${label}" required>
      <input type="text" class="filter-input spec-value" placeholder="Detalle técnico (Ej: Intel Core i5 3.3Ghz)" value="${value}">
    `;
    container.appendChild(row);
  }
}

// Poblar dropdown de selección de categorías
function renderCategoriesSelect() {
  const select = document.getElementById("prod-category");
  if (!select) return;

  select.innerHTML = categorias.map(c => `<option value="${c.id}">${c.titulo}</option>`).join("");
}

// Configurar comportamiento para el selector de gabinetes (custom)
function setupFormListeners() {
  const imgSelect = document.getElementById("prod-image");
  const customGroup = document.getElementById("custom-image-group");

  if (imgSelect && customGroup) {
    imgSelect.addEventListener("change", () => {
      if (imgSelect.value === "custom") {
        customGroup.style.display = "block";
        document.getElementById("prod-image-custom").setAttribute("required", "true");
      } else {
        customGroup.style.display = "none";
        document.getElementById("prod-image-custom").removeAttribute("required");
      }
    });
  }

  // Botón cancelar del formulario de productos
  const btnCancel = document.getElementById("btn-cancel-form");
  if (btnCancel) {
    btnCancel.addEventListener("click", () => {
      document.querySelector('[data-tab="tab-productos"]').click();
    });
  }

  // Reset de fábrica
  const btnReset = document.getElementById("btn-reset-factory");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (confirm("¿Estás seguro de que deseas restablecer la base de datos de fábrica? Perderás todos los cambios que hayas guardado en tu navegador.")) {
        localStorage.removeItem("catalogo_pcs");
        localStorage.removeItem("catalogo_categorias");
        alert("Base de datos limpia. Recargando panel...");
        location.reload();
      }
    });
  }

  // Configuración del botón de copiar base de datos
  const btnExportCode = document.getElementById("btn-export-code");
  const btnExportCats = document.getElementById("btn-export-cats");
  const codeOutput = document.getElementById("code-output");

  if (btnExportCode && codeOutput) {
    btnExportCode.addEventListener("click", () => {
      const code = `const PRODUCTOS_CATALOGO_DEFAULT = ${JSON.stringify(productos, null, 2)};`;
      codeOutput.value = code;
      
      // Copiar al portapapeles
      navigator.clipboard.writeText(code).then(() => {
        alert("¡Base de datos de productos copiada al portapapeles! Reemplaza el array PRODUCTOS_CATALOGO_DEFAULT en tu archivo app.js.");
      }).catch(err => {
        alert("No se pudo copiar automáticamente. Copia el texto directamente desde el cuadro de previsualización.");
      });
    });
  }

  if (btnExportCats && codeOutput) {
    btnExportCats.addEventListener("click", () => {
      const code = `const CATEGORIAS_DEFAULT = ${JSON.stringify(categorias, null, 2)};`;
      codeOutput.value = code;

      // Copiar al portapapeles
      navigator.clipboard.writeText(code).then(() => {
        alert("¡Base de datos de categorías copiada al portapapeles! Reemplaza el array CATEGORIAS_DEFAULT en tu archivo app.js.");
      }).catch(err => {
        alert("No se pudo copiar automáticamente. Copia el texto directamente desde el cuadro de previsualización.");
      });
    });
  }

  // Manejar el submit del formulario de productos (Agregar/Editar)
  const productForm = document.getElementById("product-form");
  if (productForm) {
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const editId = document.getElementById("edit-product-id").value;
      const title = document.getElementById("prod-title").value.trim();
      const category = parseInt(document.getElementById("prod-category").value);
      const price = parseFloat(document.getElementById("prod-price").value);
      const stock = parseInt(document.getElementById("prod-stock").value);
      
      let imageVal = document.getElementById("prod-image").value;
      if (imageVal === "custom") {
        imageVal = document.getElementById("prod-image-custom").value.trim();
      }

      // Procesar especificaciones técnicas
      const specRows = document.querySelectorAll(".spec-input-row");
      const specs = [];
      specRows.forEach(row => {
        const label = row.querySelector(".spec-label").value.trim();
        const value = row.querySelector(".spec-value").value.trim();
        // Solo guardamos si el label tiene contenido
        if (label) {
          specs.push({ label, value });
        }
      });

      if (editId) {
        // Modo Edición
        const idx = productos.findIndex(p => p.id === editId);
        if (idx !== -1) {
          productos[idx] = {
            id: editId,
            seccion: category,
            titulo: title,
            stock: stock,
            precio: price,
            imagen: imageVal,
            specs: specs
          };
          alert("¡Producto actualizado exitosamente!");
        }
      } else {
        // Modo Creación
        const newId = `pc-${Date.now()}`;
        productos.push({
          id: newId,
          seccion: category,
          titulo: title,
          stock: stock,
          precio: price,
          imagen: imageVal,
          specs: specs
        });
        alert("¡Producto agregado exitosamente!");
      }

      // Guardar en localStorage
      localStorage.setItem("catalogo_pcs", JSON.stringify(productos));

      // Actualizar interfaz y volver al listado
      renderProductsTable();
      resetProductForm();
      document.querySelector('[data-tab="tab-productos"]').click();
    });
  }
}

// Resetear el formulario de productos
function resetProductForm() {
  document.getElementById("product-form").reset();
  document.getElementById("edit-product-id").value = "";
  document.getElementById("form-title").textContent = "Agregar Nuevo Producto";
  document.getElementById("custom-image-group").style.display = "none";
  document.getElementById("prod-image-custom").removeAttribute("required");
  
  // Resetear las especificaciones a las etiquetas por defecto
  renderSpecsInputs();
}

// Iniciar modo edición para un producto
window.editProduct = function(id) {
  const p = productos.find(prod => prod.id === id);
  if (!p) return;

  // Llenar campos básicos
  document.getElementById("edit-product-id").value = p.id;
  document.getElementById("prod-title").value = p.titulo;
  document.getElementById("prod-category").value = p.seccion;
  document.getElementById("prod-price").value = p.precio;
  document.getElementById("prod-stock").value = p.stock;

  // Configurar campo de imagen
  const imgSelect = document.getElementById("prod-image");
  const customGroup = document.getElementById("custom-image-group");
  const customInput = document.getElementById("prod-image-custom");

  if (p.imagen === "gamer_case_neon" || p.imagen === "atx_case_gamer" || 
      p.imagen === "slim_case_kelyx" || p.imagen === "slim_case_bangho" || 
      p.imagen === "atx_case_office") {
    imgSelect.value = p.imagen;
    customGroup.style.display = "none";
    customInput.removeAttribute("required");
    customInput.value = "";
  } else {
    imgSelect.value = "custom";
    customGroup.style.display = "block";
    customInput.setAttribute("required", "true");
    customInput.value = p.imagen;
  }

  // Cargar especificaciones en inputs
  renderSpecsInputs(p.specs);

  // Cambiar título y saltar a pestaña de formulario
  document.getElementById("form-title").textContent = "Editar Producto: " + p.titulo;
  const tabTrigger = document.getElementById("tab-form-trigger");
  tabTrigger.dataset.isEditing = "true";
  tabTrigger.click();
};

// Eliminar un producto
window.deleteProduct = function(id) {
  if (confirm("¿Estás seguro de que deseas eliminar este producto del catálogo?")) {
    productos = productos.filter(p => p.id !== id);
    localStorage.setItem("catalogo_pcs", JSON.stringify(productos));
    renderProductsTable();
    alert("Producto eliminado exitosamente.");
  }
};


// ==========================================
// GESTIÓN DE CATEGORÍAS (CRUD)
// ==========================================

// Renderizar la lista de categorías
function renderCategoriesList() {
  const listContainer = document.getElementById("admin-categories-list");
  if (!listContainer) return;

  listContainer.innerHTML = "";

  if (categorias.length === 0) {
    listContainer.innerHTML = `<p style="color:#64748b; font-size:0.9rem;">No hay categorías cargadas.</p>`;
    return;
  }

  categorias.forEach(cat => {
    const item = document.createElement("div");
    item.className = `category-item-admin border-${cat.class.replace('sec-', '')}`;
    
    // Contar cuántos productos tiene esta categoría
    const count = productos.filter(p => p.seccion == cat.id).length;

    item.innerHTML = `
      <div class="category-admin-info">
        <div class="category-admin-title">
          <span>${cat.icon}</span> ${cat.titulo}
          <span class="user-badge" style="font-size:0.65rem; padding: 0.15rem 0.4rem;">${count} PCs</span>
        </div>
        <div class="category-admin-desc">${cat.desc}</div>
      </div>
      <div class="action-btns">
        <button class="btn-edit" onclick="editCategory(${cat.id})">Editar</button>
        <button class="btn-delete" onclick="deleteCategory(${cat.id})">Eliminar</button>
      </div>
    `;
    listContainer.appendChild(item);
  });
}

// Agregar o Editar Categoría
const categoryForm = document.getElementById("category-form");
if (categoryForm) {
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editId = document.getElementById("edit-category-id").value;
    const name = document.getElementById("cat-name").value.trim();
    const icon = document.getElementById("cat-icon").value.trim();
    const desc = document.getElementById("cat-desc").value.trim();
    const cssClass = document.getElementById("cat-class").value;

    if (editId) {
      // Modo Edición
      const idx = categorias.findIndex(c => c.id == editId);
      if (idx !== -1) {
        categorias[idx] = {
          id: parseInt(editId),
          titulo: name,
          icon: icon,
          class: cssClass,
          desc: desc
        };
        alert("¡Categoría actualizada exitosamente!");
      }
    } else {
      // Modo Creación: Generar ID único
      const nextId = categorias.length > 0 ? Math.max(...categorias.map(c => c.id)) + 1 : 1;
      categorias.push({
        id: nextId,
        titulo: name,
        icon: icon,
        class: cssClass,
        desc: desc
      });
      alert("¡Categoría creada exitosamente!");
    }

    // Guardar en localStorage
    localStorage.setItem("catalogo_categorias", JSON.stringify(categorias));

    // Resetear formulario y recargar datos
    resetCategoryForm();
    renderCategoriesList();
    renderCategoriesSelect();
    renderProductsTable();
  });
}

// Iniciar edición de categoría
window.editCategory = function(id) {
  const cat = categorias.find(c => c.id == id);
  if (!cat) return;

  document.getElementById("edit-category-id").value = cat.id;
  document.getElementById("cat-name").value = cat.titulo;
  document.getElementById("cat-icon").value = cat.icon;
  document.getElementById("cat-desc").value = cat.desc;
  document.getElementById("cat-class").value = cat.class;

  document.getElementById("btn-save-cat").textContent = "Guardar Cambios";
  document.getElementById("btn-cancel-cat").style.display = "inline-block";
};

// Cancelar edición de categoría
const btnCancelCat = document.getElementById("btn-cancel-cat");
if (btnCancelCat) {
  btnCancelCat.addEventListener("click", () => {
    resetCategoryForm();
  });
}

function resetCategoryForm() {
  document.getElementById("category-form").reset();
  document.getElementById("edit-category-id").value = "";
  document.getElementById("btn-save-cat").textContent = "Crear Categoría";
  document.getElementById("btn-cancel-cat").style.display = "none";
}

// Eliminar categoría
window.deleteCategory = function(id) {
  const hasProducts = productos.some(p => p.seccion == id);
  
  let confirmMsg = "¿Estás seguro de que deseas eliminar esta categoría?";
  if (hasProducts) {
    confirmMsg = "⚠️ ¡ATENCIÓN! Esta categoría contiene computadoras asignadas. Si la eliminas, las PCs seguirán existiendo pero no se mostrarán en la web pública hasta que les asignes otra categoría. ¿Deseas continuar?";
  }

  if (confirm(confirmMsg)) {
    categorias = categorias.filter(c => c.id != id);
    localStorage.setItem("catalogo_categorias", JSON.stringify(categorias));
    
    renderCategoriesList();
    renderCategoriesSelect();
    renderProductsTable();
    alert("Categoría eliminada exitosamente.");
  }
};
