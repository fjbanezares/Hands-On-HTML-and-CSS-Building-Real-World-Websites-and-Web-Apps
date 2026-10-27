# 💡 Cuaderno de Reflexiones: ¿Por qué la Web se comporta así?

> **Objetivo de este cuaderno:** Resolver las grandes preguntas de clase que todo el mundo se hace al empezar en desarrollo web: ¿Por qué usamos una lista para un menú horizontal? ¿Por qué se rompen las cajas con padding? ¿Cómo transforma CSS la estructura de HTML?

---

## 📑 Índice de Reflexiones

1. [El Misterio del Menú: ¿Por qué usamos una lista `<ul>`/`<li>` si luego sale en una línea horizontal?](#1-el-misterio-del-menú-por-qué-usamos-una-lista-ul-li-si-luego-sale-en-una-línea-horizontal)
2. [El antes y el después: ¿Cómo se hacía antes de Flexbox (`float: left`)?](#2-el-antes-y-el-después-cómo-se-hacía-antes-de-flexbox-float-left)
3. [El área de clic: ¿Por qué estilar el `<a>` y no el `<li>`?](#3-el-área-de-clic-por-qué-estilar-el-a-y-no-el-li)
4. [La levitación de `position: fixed`: ¿Por qué tapa el contenido si no dejamos margen?](#4-la-levitación-de-position-fixed-por-qué-tapa-el-contenido-si-no-dejamos-margen)
5. [La regla de oro del Box Model: ¿Por qué `box-sizing: border-box` salva vidas?](#5-la-regla-de-oro-del-box-model-por-qué-box-sizing-border-box-salva-vidas)
6. [La trampa de las APIs: ¿Por qué `fetch()` no lanza error con un 404 o 500?](#6-la-trampa-de-las-apis-por-qué-fetch-no-lanza-error-con-un-404-o-500)

---

## 1. El Misterio del Menú: ¿Por qué usamos una lista `<ul>`/`<li>` si luego sale en una línea horizontal?

En `index.html` tenemos este código para la barra de navegación:

```html
<nav class="navbar-demo">
    <span class="logo">🚀 Clase 2026</span>
    <ul class="nav-links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sugerencias">Sugerencias</a></li>
        <li><a href="#multimedia">Multimedia</a></li>
    </ul>
</nav>
```

A primera vista, cualquier persona sin experiencia pensaría:  
*«Si un menú es una barra horizontal con botones, ¿por qué demonios usamos `<ul>` (lista desordenada con viñetas) y `<li>` (elementos de lista vertical)? ¿No sería más fácil poner varios `<a>` o botones sueltos?»*

La respuesta se divide en **dos mundos**: **HTML** (significado) y **CSS** (presentación).

---

### A. La razón de HTML: Semántica y Accesibilidad (A11y)
* **Los navegadores y robots no tienen ojos:** Los motores de búsqueda (Google) y los **lectores de pantalla** que usan personas con discapacidad visual leen el código directamente.
* **Si pones enlaces sueltos en un `<div>`:** El lector de pantalla solo ve texto suelto sin estructura.
* **Si usas `<nav>` y `<ul>` con `<li>`:** El lector de pantalla anuncia:  
  📢 *"Región de navegación: Lista con 3 elementos"*.  
  Esto le permite al usuario invidente saber cuántos botones componen el menú, saltar al siguiente con una tecla de acceso rápido o saltarse la lista entera si ya la conoce.

> 🧠 **Principio clave:** En HTML elegimos las etiquetas por **lo que significan**, nunca por cómo se ven por defecto en la pantalla.

---

### B. La razón de CSS: La magia de `display: flex`

Por defecto en el navegador, tanto `<ul>` como `<li>` tienen `display: block;`. Eso significa que:
1. Cada `<li>` inicia en una línea nueva hacia abajo.
2. Tienen una viñeta (*bullet point* de punto negro) a la izquierda.
3. Tienen un `padding-left` de 40px por defecto en el navegador.

```
Por defecto en HTML (Vertical):
  • Inicio
  • Sugerencias
  • Multimedia
```

¿Cómo se convierte en una barra horizontal elegante? **Con solo 3 propiedades en CSS:**

```css
#equipo-header .nav-links {
    list-style: none;         /* 1. Elimina las viñetas negras por defecto */
    margin: 0; padding: 0;    /* 2. Quita las sangrías por defecto del navegador */
    display: flex;            /* 3. ¡LA MAGIA! Convierte la lista en horizontal */
    gap: 20px;                /* 4. Espacio automático y limpio entre botones */
}
```

```
Con Flexbox en CSS (Horizontal):
  [ Inicio ]     [ Sugerencias ]     [ Multimedia ]
```

#### ¿Qué hace exactamente `display: flex` sobre los `<li>`?
Al declarar `display: flex;` sobre el elemento padre (`<ul class="nav-links">`), activamos el **Contexto de Formato Flexible (Flexbox)**:
1. Todos los hijos directos (los `<li>`) dejan de ser bloques apilados verticalmente y pasan a ser **Flex Items**.
2. Por defecto, Flexbox alinea los elementos en el **eje horizontal principal** (`flex-direction: row`).
3. La propiedad `gap: 20px;` añade separación limpia entre cada botón sin tener que calcular `margin-right` ni preocuparse por el último elemento.

Y además, en el contenedor general `.navbar-demo`:
```css
#equipo-header .navbar-demo {
    display: flex;
    justify-content: space-between; /* Empuja el Logo a la izquierda y la lista a la derecha */
    align-items: center;            /* Centra ambos verticalmente en la barra */
}
```

---

## 2. El antes y el después: ¿Cómo se hacía antes de Flexbox (`float: left`)?

Hace unos años, cuando Flexbox no existía en los navegadores, para poner una lista en horizontal los desarrolladores recurrían a:

```css
/* Técnica antigua con float (Compleja y propensa a fallos) */
.nav-links li {
    float: left;            /* Obliga a cada li a flotar a la izquierda */
    margin-right: 15px;
}
.nav-links {
    overflow: hidden;       /* Necesario para el truco del "clearfix" */
}
```

* **El problema de `float`:** El elemento flotante se salía del flujo normal de la caja padre, provocando que el contenedor padre perdiera su altura y colapsara a 0 píxeles a menos que se usara un truco llamado *clearfix* (`clear: both`).
* **La ventaja de Flexbox moderno:** No hay colapsos, la alineación vertical es perfecta (`align-items: center`) y el espacio entre botones se gestiona de forma nativa con `gap`.

---

## 3. El área de clic: ¿Por qué estilar el `<a>` y no el `<li>`?

Observa este código en `styles.css`:

```css
/* ✅ BIEN: El padding y el hover se le dan al enlace <a> */
#equipo-header .nav-links a {
    padding: 8px 16px;
    border-radius: 8px;
    display: inline-block;
}

#equipo-header .nav-links a:hover {
    background: rgba(59, 130, 246, 0.2);
}
```

* **¿Qué pasaría si le dieses el `padding` al `<li>`?**  
  Visualmente verías un botón azul, pero si el usuario hace clic en los bordes del botón, ¡el enlace no se activaría! Solo se activaría si pulsa exactamente encima del texto.
* **Solución profesional:** Dale el padding, el fondo y el efecto `:hover` a la etiqueta `<a>`, asegurando que **toda la superficie coloreada sea interactiva y táctil**.

---

## 4. La levitación de `position: fixed`: ¿Por qué tapa el contenido si no dejamos margen?

En el **Equipo 1** aprendemos que el menú superior tiene:
```css
#equipo-header {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 70px;
}
```

* **¿Qué le ocurre a una caja con `position: fixed`?**  
  Se "despega" del papel (del flujo del documento). Pasa a flotar sobre una capa superior anclada al cristal de la ventana (*viewport*).
* **La consecuencia:** Como la barra ya no ocupa espacio físico en el documento, el siguiente elemento (`<main>` o el contenido de la página) sube hasta el borde superior de la ventana (`top: 0`) y queda **tapado detrás de la barra**.
* **La solución obligatoria:** Darle al contenido que viene a continuación un margen superior igual o mayor que la altura de la barra:
  ```css
  .contenedor-principal {
      margin-top: 90px; /* Deja 20px de aire por debajo de la barra de 70px */
  }
  ```

---

## 5. La regla de oro del Box Model: ¿Por qué `box-sizing: border-box` salva vidas?

Por defecto en CSS histórico (`box-sizing: content-box`):
* Si a un `div` le pones `width: 100%;` y luego le añades `padding: 20px;` y `border: 2px solid white;`, el ancho total calculado por el navegador será:
  $$\text{Ancho total} = 100\% + 40\text{px (padding izq+der)} + 4\text{px (bordes)} = \text{¡Más del 100%!}$$
  **Resultado:** Aparece una horrible barra de scroll horizontal en la web y el diseño se descuadra.

Con la regla universal al inicio de `styles.css`:
```css
* {
    box-sizing: border-box;
}
```
El navegador calcula el tamaño "hacia adentro": si defines `width: 100%`, el padding y el borde se absorben dentro de ese 100%. **La web nunca se desborda.**

---

## 6. La trampa de las APIs: ¿Por qué `fetch()` no lanza error con un 404 o 500?

En `index_api.html` y en `scripts/clima.js` conectamos con la API meteorológica. Es común cometer este error:

```javascript
// ❌ ERROR TÍPICO: Creer que el catch capturará un error 404
try {
    const res = await fetch("https://api.servidor.com/datos-inexistentes");
    const data = await res.json();
} catch (error) {
    // ¡ESTE CÓDIGO NUNCA SE EJECUTA CON UN 404 O 500!
}
```

* **¿Por qué?** Porque para `fetch()`, que un servidor te responda *"404 No encontrado"* o *"500 Error de servidor"* sigue siendo una **respuesta HTTP válida**. El servidor ha contestado al teléfono.
* **¿Cuándo se ejecuta el `catch`?** Únicamente cuando hay un fallo físico de red: el usuario no tiene conexión, el cable se desconecta o el nombre de dominio no existe.
* **La solución en código:**
  ```javascript
  const res = await fetch(url);
  if (!res.ok) { // res.ok es false si el código es 4xx o 5xx
      console.error(`Fallo HTTP: ${res.status}`);
      return;
  }
  ```

---

*Este cuaderno de reflexiones se irá ampliando durante el curso con los descubrimientos de cada sesión práctica.* 🚀
