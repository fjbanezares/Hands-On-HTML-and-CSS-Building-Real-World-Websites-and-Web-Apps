# 🚀 Paso a Paso — Equipo 1: Header y Menú Superior Fijo

> **Asignación:** Equipo 1 (3 alumnos)  
> **Área de trabajo:** `<header id="equipo-header">` en `index.html` y `#equipo-header` en `styles/styles.css`  
> **Objetivo:** Crear una barra de navegación profesional que se quede congelada en la parte superior al hacer scroll (`position: fixed`).

---

## ⏱️ Hoja de Ruta Rápida (15-20 minutos)

### Paso 1: Crear y activar la rama de Git
Abrid la terminal en la carpeta del proyecto y ejecutad:
```bash
# 1. Aseguraros de estar en main al día
git checkout main
git pull origin main

# 2. Crear vuestra rama de trabajo
git checkout -b feature/equipo-1-menu
```

---

### Paso 2: Editar el HTML (`index.html`)
Abrid `8. PRACTICA_CLASE 2026/index.html` y localizad el bloque del **Equipo 1**:

Sustituid el contenido dentro de `<header id="equipo-header">` por el siguiente código (podéis personalizar el nombre del logo y los textos de los enlaces):

```html
    <!-- ============================================================== -->
    <!-- EQUIPO 1: HEADER / MENÚ SUPERIOR (POSICIÓN FIJA POR SCROLL)    -->
    <!-- ============================================================== -->
    <header id="equipo-header" class="seccion-equipo-1">
        <div class="nav-contenedor">
            <!-- Logo o título a la izquierda -->
            <a href="#inicio" class="nav-logo">
                <span class="icono-cohete">🚀</span> 
                <span class="texto-logo">Clase 2026 UFV</span>
            </a>

            <!-- Enlaces de navegación a la derecha -->
            <ul class="nav-menu">
                <li><a href="#inicio" class="enlace-activo">Inicio</a></li>
                <li><a href="#equipo-izquierda">Sugerencias</a></li>
                <li><a href="#equipo-derecha">Multimedia</a></li>
                <li><a href="#equipo-footer" class="btn-contacto">Contacto</a></li>
            </ul>
        </div>
    </header>
```

---

### Paso 3: Aplicar los Estilos CSS (`styles/styles.css`)
Abrid `8. PRACTICA_CLASE 2026/styles/styles.css`, buscad la sección `/* ZONA EQUIPO 1 */` y pegad estos estilos:

```css
/* ============================================================== */
/* ZONA EQUIPO 1: HEADER / MENÚ SUPERIOR                          */
/* ============================================================== */
#equipo-header {
    position: fixed;            /* Fijo: se congela en la pantalla durante el scroll */
    top: 0;
    left: 0;
    width: 100%;                /* Ocupa todo el ancho */
    height: 70px;               /* Altura fija de la barra */
    background: rgba(15, 23, 42, 0.85); /* Fondo oscuro semitransparente */
    backdrop-filter: blur(12px);          /* Efecto cristal esmerilado (Glassmorphism) */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 1000;              /* ¡TRUCO CLAVE! Máxima prioridad para que nada lo tape */
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-sizing: border-box;
}

#equipo-header .nav-contenedor {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between; /* Logo a la izquierda, enlaces a la derecha */
    align-items: center;
}

#equipo-header .nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.25rem;
}

#equipo-header .icono-cohete {
    font-size: 1.4rem;
}

#equipo-header .nav-menu {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0;
    padding: 0;
}

#equipo-header .nav-menu a {
    color: #cbd5e1;
    text-decoration: none;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 8px;
    transition: all 0.25s ease;
}

/* Efecto al pasar el ratón */
#equipo-header .nav-menu a:hover {
    color: #ffffff;
    background: rgba(59, 130, 246, 0.2);
    transform: translateY(-2px);
}

/* Botón destacado */
#equipo-header .btn-contacto {
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: #ffffff !important;
    font-weight: 600;
}

#equipo-header .btn-contacto:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}
```

---

### Paso 4: Comprobar el Truco del Padding
Al poner `position: fixed`, el menú se "despega" del documento y flota. Verificad en el navegador que el primer texto de la página no quede tapado por la barra. 
* Si se tapa, comprobad que `.contenedor-principal` tenga `margin-top: 90px;`.

---

### Paso 5: Guardar, Subir y Crear el Pull Request
Abrid la terminal y ejecutad:
```bash
# 1. Ver qué habéis tocado
git status

# 2. Añadir los cambios
git add .

# 3. Guardar con commit
git commit -m "Equipo 1: Barra de navegacion fija con efecto glassmorphism"

# 4. Subir la rama a GitHub
git push -u origin feature/equipo-1-menu
```
Id a GitHub, pulsad el botón verde **Compare & pull request** y avisad al profesor para revisarlo en vivo.
