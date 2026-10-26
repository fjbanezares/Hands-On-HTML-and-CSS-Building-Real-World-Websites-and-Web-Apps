# 🎓 Práctica Colaborativa 2026: Construyendo una Web en Tiempo Real con Git, HTML5, CSS3 y JavaScript

> **Modalidad:** 4 Equipos de 3 Personas (12 alumnos en total).  
> **Objetivo:** Maquetar una página web completa y funcional colaborando sobre el mismo repositorio Git, donde cada equipo construye una sección independiente sin provocar conflictos de código.  
> **Nivel previo requerido:** Ninguno. Partimos desde cero absoluto con 3 micro-tutoriales prácticos de 5, 10 y 5 minutos.  
> **Guías rápidas directas:** Si estás en clase y quieres ir directo al código de tu equipo sin perder tiempo, salta a la [Guía Paso a Paso de tu Equipo](#-guias-paso-a-paso-directas-para-cada-equipo).

---

## ⚡ Guías Paso a Paso Directas para Cada Equipo

Para no perder tiempo en clase leyendo teoría si necesitas avanzar ya, cada equipo tiene su guía dedicada con el código listo para copiar, pegar y personalizar:

* 🚀 **[Paso a Paso — Equipo 1: Header / Menú Fijo con Scroll](paso_a_paso_equipo1.md)**
* 👣 **[Paso a Paso — Equipo 2: Footer Completo al 100% y al Fondo](paso_a_paso_equipo2.md)**
* 📸 **[Paso a Paso — Equipo 3: Columna Derecha — Foto y Música con Botón JS](paso_a_paso_equipo3.md)**
* 💡 **[Paso a Paso — Equipo 4: Columna Izquierda — Aspectos a Mejorar y Sugerencias](paso_a_paso_equipo4.md)**
* 📋 **[Índice Unificado Paso a Paso](paso_a_paso.md)**

---

## 📑 Tabla de Contenidos

1. [El Reto y la Dinámica de Trabajo (4 Equipos)](#-1-el-reto-y-la-dinámica-de-trabajo)
2. [⏱️ Tutorial de 5 Minutos de HTML](#-2-tutorial-de-5-minutos-de-html-lo-imprescindible)
3. [⏱️ Tutorial de 10 Minutos de CSS](#-3-tutorial-de-10-minutos-de-css-el-secreto-del-diseño)
   - [Especificidad: ¿Por qué manda una regla sobre otra?](#31-especificidad-en-css-por-qué-manda-una-regla-sobre-otra)
   - [Inline vs Block: Cómo se dibujan los elementos](#32-inline-vs-block-cómo-se-comportan-los-elementos)
   - [La propiedad Display](#33-la-propiedad-display)
   - [Float y las dos cajas del medio (Left & Right)](#34-float-y-las-dos-cajas-centrales-left--right)
   - [Posicionamiento Fixed y Ancho 100%](#35-posicionamiento-fixed-y-anchura-del-100)
4. [⏱️ Tutorial de 5 Minutos de JavaScript](#-4-tutorial-de-5-minutos-de-javascript-audio-y-eventos)
5. [Estructura del HTML Base de Partida](#-5-estructura-del-html-base-de-partida)
6. [Flujo de Trabajo Colaborativo con Git](#-6-flujo-de-trabajo-colaborativo-con-git)
7. [Secretos y Trucos de Años Anteriores (2024 y 2025)](#-7-secretos-y-trucos-de-años-anteriores-2024-y-2025)
8. [Checklist Final de Entrega](#-8-checklist-final-de-entrega)

---

## 🎯 1. El Reto y la Dinámica de Trabajo

En desarrollo de software, varios ingenieros trabajan sobre la misma base de código. Si todos tocan el mismo archivo sin orden, surgen conflictos destructivos de Git (*Merge Conflicts*).

Para esta práctica dividiremos el aula en **4 equipos de 3 personas (12 alumnos)**:

```
+--------------------------------------------------------------------+
|  EQUIPO 1: Menú / Título Fijo (Header Sticky/Fixed)                |
+---------------------------------+----------------------------------+
|  EQUIPO 4:                      |  EQUIPO 3:                       |
|  Columna Izquierda (Div Left)   |  Columna Derecha (Div Right)     |
|  - Aspectos a mejorar de clase  |  - Fotografía con diseño         |
|  - Buzón de sugerencias         |  - Botón Play/Pause Música (JS)  |
+---------------------------------+----------------------------------+
|  EQUIPO 2: Footer Completo (100% de ancho, anclado al fondo)       |
+--------------------------------------------------------------------+
```

### Reglas de Oro:
1. **Cada equipo solo toca su bloque HTML:**
   - Equipo 1: `<header id="equipo-header">`
   - Equipo 2: `<footer id="equipo-footer">`
   - Equipo 3: `<section id="equipo-derecha">`
   - Equipo 4: `<section id="equipo-izquierda">`
2. **Prefija siempre tus clases en CSS:** Todo tu CSS debe empezar con el ID de tu equipo (ejemplo: `#equipo-header .btn` o `#equipo-derecha .tarjeta`). Así nunca le cambiarás el color ni el tamaño a los demás.
3. **Una rama por equipo:** Nadie sube directamente a `main`. Trabajamos en ramas (`feature/equipo-X`) y se fusionan mediante Pull Request.

---

## ⏱️ 2. Tutorial de 5 Minutos de HTML: Lo Imprescindible

HTML (*HyperText Markup Language*) define la **estructura y el contenido** de una página mediante etiquetas rodeadas por `< >`.

### 1. La Estructura Básica
Toda página web sigue este esquema jerárquico. Puedes comprobarlo en el archivo de ejemplo del repositorio:
📁 **[1. HTML basics/elements.html](../1.%20HTML%20basics/elements.html)**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Título en la pestaña</title>
</head>
<body>
    <!-- Aquí va todo lo visible para el usuario -->
    <h1>Título Principal</h1>
    <p>Párrafo de texto explicativo.</p>
</body>
</html>
```

### 2. Enlaces y Anclas (`<a>`)
Permiten saltar a otra página o hacer scroll hacia una sección con su `id` (ancla interna):
📁 **[1. HTML basics/1. anchor_examples.html](../1.%20HTML%20basics/1.%20anchor_examples.html)**
```html
<!-- Enlace externo -->
<a href="https://www.ufv.es" target="_blank">Ir a la web de la UFV</a>

<!-- Enlace interno (scroll a un bloque de la misma página) -->
<a href="#equipo-izquierda">Ir a la sección de Mejoras</a>
```

### 3. Listas (`<ul>` y `<ol>`)
Ideales para organizar sugerencias o menús de navegación:
📁 **[1. HTML basics/10. html_bold_lists_links.html](../1.%20HTML%20basics/10.%20html_bold_lists_links.html)**
```html
<ul>
    <li>Elemento con viñeta 1</li>
    <li>Elemento con viñeta 2</li>
</ul>
```

### 4. Imágenes (`<img>`) y Audio (`<audio>`)
- Las imágenes no tienen etiqueta de cierre (`<img src="..." alt="...">`).
- El audio permite reproducir pistas locales o remotas:
```html
<img src="images/foto-clase.jpg" alt="Foto de la clase" width="300">

<audio id="cancion-clase">
    <source src="audio/caminitos.mp3" type="audio/mpeg">
</audio>
```

### 5. ¿Qué es un `<div>`?
Un `<div>` es una **caja invisible** para agrupar elementos. No tiene significado visual por sí mismo, pero con CSS podemos darle ancho, color, borde y colocarlo donde queramos.

---

## ⏱️ 3. Tutorial de 10 Minutos de CSS: El Secreto del Diseño

CSS (*Cascading Style Sheets*) es el lenguaje que da color, tamaño, efectos y posición a las cajas de HTML.

---

### 3.1. Especificidad en CSS: ¿Por qué manda una regla sobre otra?
Cuando dos reglas de CSS intentan darle estilo al mismo elemento con propiedades distintas (por ejemplo, una dice `color: red` y otra dice `color: blue`), el navegador resuelve el conflicto mediante la **Especificidad**.

Los archivos del repositorio que mejor lo demuestran son:  
📁 **[2. CSS Basics/specificity.html](../2.%20CSS%20Basics/specificity.html)** y su versión comentada **[specificity-comments.html](../2.%20CSS%20Basics/specificity-comments.html)**.

#### La Escala de Puntos de Especificidad:
| Selector | Ejemplo | Puntuación | Explicación |
| :--- | :--- | :--- | :--- |
| **Etiqueta** | `h1 { color: gray; }` | **1 punto** | Muy genérico. Afecta a todos los `h1`. |
| **Clase** | `.main-header { color: blue; }` | **10 puntos** | Más específico. Gana a la etiqueta. |
| **ID** | `#header-id { color: red; }` | **100 puntos** | Muy fuerte. **Gana a la clase y a la etiqueta**. |
| **Estilo Inline** | `<h1 style="color: purple;">` | **1000 puntos** | Escrito dentro del HTML. Gana al ID. |
| **`!important`** | `color: yellow !important;` | **Insuperable** | Rompe la cascada normal. Usar con cautela. |

> 🛡️ **Por qué esto es vital en la práctica:**  
> Si el Equipo 1 escribe `#equipo-header h2 { color: white; }`, su selector tiene un peso de **101 puntos** (1 ID + 1 etiqueta).  
> Si otro equipo escribe simplemente `h2 { color: black; }` (1 punto), ¡el Equipo 1 no se romperá!

---

### 3.2. Inline vs Block: Cómo se comportan los elementos

Los dos archivos clave para entender esto son:  
📁 **[2. CSS Basics/block-elements.html](../2.%20CSS%20Basics/block-elements.html)**  
📁 **[2. CSS Basics/span-inline-elements-basic.html](../2.%20CSS%20Basics/span-inline-elements-basic.html)**

#### Elementos de Bloque (`display: block`):
- Ejemplos: `<div>`, `<p>`, `<h1>`, `<ul>`, `<section>`.
- **Comportamiento:** Empiezan siempre en una **nueva línea** y ocupan por defecto el **100% del ancho** del contenedor padre.
- **Medidas:** Se les puede asignar libremente `width` y `height`, además de `margin` y `padding` en los cuatro costados.

#### Elementos en Línea (`display: inline`):
- Ejemplos: `<span>`, `<a>`, `<strong>`, `<em>`.
- **Comportamiento:** Se colocan uno al lado de otro dentro de la misma línea, como palabras en una frase. Solo ocupan el ancho exacto de su contenido.
- **Medidas:** **NO** aceptan `width` ni `height`, y los márgenes verticales no empujan a otras líneas.

---

### 3.3. La Propiedad Display
Puedes ver todos los modos en acción en:  
📁 **[2. CSS Basics/display-basics.html](../2.%20CSS%20Basics/display-basics.html)**

- `display: block;` — Se comporta como un bloque vertical.
- `display: inline;` — Fluye en línea de texto.
- `display: inline-block;` — Híbrido: se coloca en línea con otros elementos, pero **sí** respeta `width` y `height`. Perfecto para botones (`<button>`).
- `display: flex;` — Transforma el contenedor en flexible para alinear y repartir espacio entre sus hijos.
- `display: none;` — Oculta el elemento de la pantalla por completo.

---

### 3.4. Float y las Dos Cajas Centrales (Left & Right)
¿Cómo colocamos la columna del Equipo 4 (izquierda) y la del Equipo 3 (derecha) una al lado de la otra en una misma línea?

Puedes estudiar el ejemplo histórico del repositorio en:  
📁 **[1. HTML basics/6. float_clear_flex.html](../1.%20HTML%20basics/6.%20float_clear_flex.html)** y en **[2. CSS Basics/12 Float/solution.html](../2.%20CSS%20Basics/12%20Float/solution.html)**.

#### 1. Método Tradicional con `float`:
```css
/* El contenedor padre debe limpiar el float con overflow: auto */
.contenedor-medio {
    overflow: auto;
}

/* Caja Izquierda: flota a la izquierda */
.columna-izq {
    float: left;
    width: 48%;
}

/* Caja Derecha: flota a la derecha */
.columna-der {
    float: right;
    width: 48%;
}
```

#### 2. Método Moderno con `display: flex` (El que usamos en la práctica):
En lugar de tener que limpiar floats con `clear: both`, el método moderno es más robusto y no se descoloca:
```css
.contenedor-principal {
    display: flex;             /* Pone las dos cajas en la misma línea horizontal */
    gap: 30px;                 /* Espacio de separación automático entre ambas */
}

.columna {
    flex: 1;                   /* Cada una toma exactamente el 50% del espacio */
}
```

---

### 3.5. Posicionamiento Fixed y Anchura del 100%

#### El Menú Fijo con Scroll (`position: fixed`):
Archivos de referencia en el repo:  
📁 **[1. HTML basics/8. fixed_positioning_uses copy.html](../1.%20HTML%20basics/8.%20fixed_positioning_uses%20copy.html)**  
📁 **[1. HTML basics/9. improved_fixed_positioning_uses.html](../1.%20HTML%20basics/9.%20improved_fixed_positioning_uses.html)**

Cuando aplicas `position: fixed; top: 0; left: 0; width: 100%;`:
- El elemento se despega del documento y queda anclado a la pantalla de la ventana (*viewport*).
- Aunque el usuario haga scroll hacia abajo 3000 píxeles, la barra no se mueve de la parte superior.
- **Requiere `z-index: 1000;`** para asegurar que ninguna imagen o tarjeta pase por encima del menú al scrollear.

#### El Footer al 100% de Ancho:
Archivo de referencia en el repo:  
📁 **[2. CSS Basics/with100.html](../2.%20CSS%20Basics/with100.html)**

Para que el footer abarque toda la pantalla de extremo a extremo sin márgenes blancos en los bordes:
```css
#equipo-footer {
    width: 100%;
    box-sizing: border-box;
    margin-top: auto; /* Empuja el pie abajo del todo */
}
```

---

## ⏱️ 4. Tutorial de 5 Minutos de JavaScript: Audio y Eventos

JavaScript es el lenguaje que aporta **interactividad** y comportamiento en tiempo real a la web.

Archivos de referencia en el repo:  
📁 **[4. Javascript basics/index.html](../4.%20Javascript%20basics/index.html)**  
📁 **[6. PRACTICA_CLASE/index.js](../6.%20PRACTICA_CLASE/index.js)**

### ¿Cómo funciona el botón de música del Equipo 3?
Solo necesitamos 3 pasos lógicos:

1. **Obtener el elemento del HTML:** Usamos `document.getElementById("id")` para guardar la referencia del audio y del botón.
2. **Escuchar el clic del usuario:** Usamos `.addEventListener("click", function() { ... })`.
3. **Comprobar si está sonando o pausado:**
   - Si `miAudio.paused` es `true`: ejecutamos `miAudio.play()` y cambiamos el texto a "⏸️ Pausar".
   - Si `miAudio.paused` es `false`: ejecutamos `miAudio.pause()` y cambiamos el texto a "▶️ Reproducir".

```javascript
// scripts/musica.js
document.addEventListener("DOMContentLoaded", function () {
    const miAudio = document.getElementById("cancion-clase");
    const botonMusica = document.getElementById("btn-toggle-musica");

    if (botonMusica && miAudio) {
        botonMusica.addEventListener("click", function () {
            if (miAudio.paused) {
                miAudio.play().then(() => {
                    botonMusica.classList.add("reproduciendo");
                    botonMusica.innerHTML = '<span class="icono">⏸️</span> <span class="texto">Pausar Canción</span>';
                });
            } else {
                miAudio.pause();
                botonMusica.classList.remove("reproduciendo");
                botonMusica.innerHTML = '<span class="icono">▶️</span> <span class="texto">Reproducir Canción</span>';
            }
        });
    }
});
```

---

## 🏗️ 5. Estructura del HTML Base de Partida

En `index.html` de esta carpeta encontraréis la plantilla lista. Cada equipo trabaja en su etiqueta:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clase 2026 - Proyecto Web Colaborativo UFV</title>
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>

    <!-- EQUIPO 1: HEADER FIJO POR SCROLL -->
    <header id="equipo-header">
        <!-- Vuestro código de menú aquí -->
    </header>

    <!-- CONTENEDOR CENTRAL: DOS COLUMNAS (IZQUIERDA Y DERECHA) -->
    <main class="contenedor-principal">
        
        <!-- EQUIPO 4: COLUMNA IZQUIERDA (SUGERENCIAS Y MEJORAS) -->
        <section id="equipo-izquierda" class="columna columna-izq">
            <!-- Vuestras mejoras aquí -->
        </section>

        <!-- EQUIPO 3: COLUMNA DERECHA (FOTO + MÚSICA CON JS) -->
        <section id="equipo-derecha" class="columna columna-der">
            <!-- Vuestra imagen y reproductor musical aquí -->
        </section>

    </main>

    <!-- EQUIPO 2: FOOTER AL 100% Y AL FONDO -->
    <footer id="equipo-footer">
        <!-- Vuestro pie de página institucional aquí -->
    </footer>

    <script src="scripts/musica.js"></script>
</body>
</html>
```

---

## 🔄 6. Flujo de Trabajo Colaborativo con Git

Para evitar conflictos y trabajar como desarrolladores profesionales:

```bash
# 1. Asegúrate de tener la última versión de main
git checkout main
git pull origin main

# 2. Crea la rama de tu equipo (ejemplo para Equipo 1):
git checkout -b feature/equipo-1-menu

# 3. Haz tus cambios en index.html y styles/styles.css

# 4. Guarda y sube tu rama a GitHub:
git status
git add .
git commit -m "Equipo 1: Barra de navegacion fija con estilo"
git push -u origin feature/equipo-1-menu
```
Luego entrad en GitHub, pulsad **Compare & pull request** y el profesor validará la fusión en vivo ante la clase.

---

## 💡 7. Secretos y Trucos de Años Anteriores (2024 y 2025)

1. **Evitar pisar estilos de otros equipos:** Nunca escribas selectores globales como `h2 { ... }` o `button { ... }`. Prefija con el ID de tu equipo: `#equipo-derecha .btn-musica { ... }`.
2. **El Menú no debe ser tapado:** Dale siempre `z-index: 1000;` al header fixed.
3. **El Truco del margen superior:** Como el menú fixed flota fuera del flujo, dale `margin-top: 90px;` al `.contenedor-principal` para que el texto de arriba no quede oculto bajo la barra.
4. **Imágenes de alta resolución:** Para evitar que fotos de móvil desborden la página, usa siempre `width: 100%; max-height: 280px; object-fit: cover;`.
5. **Autoplay de música:** Los navegadores bloquean el sonido automático sin interacción. Por eso es obligatorio reproducir la música dentro del evento `click` del botón.
6. **Footer siempre abajo:** En pantallas grandes, usa en el `body` `min-height: 100vh; display: flex; flex-direction: column;` y en el footer `margin-top: auto;`.

---

## ✅ 8. Checklist Final de Entrega

- [ ] ¿He editado **únicamente** la etiqueta HTML de mi equipo?
- [ ] ¿Mis selectores CSS empiezan con el ID de mi equipo (`#equipo-X ...`)?
- [ ] ¿He probado que la página se vea limpia y sin desbordes horizontales?
- [ ] ¿El menú permanece fijo al hacer scroll y no tapa el primer texto?
- [ ] ¿El footer abarca el 100% y se queda pegado al fondo?
- [ ] ¿El botón de música enciende y apaga la canción correctamente?
- [ ] ¿Hemos subido la rama a GitHub con `git push` y abierto el **Pull Request**?

¡Todo listo para crear la web de la Clase 2026 en tiempo real! 🚀
