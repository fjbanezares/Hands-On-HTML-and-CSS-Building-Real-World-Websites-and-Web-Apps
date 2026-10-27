# ⚡ Guía Rápida Paso a Paso por Equipos — Práctica 2026

> Esta guía está pensada para ir directamente al grano en clase: sin rodeos teóricos, con comandos exactos, código probado y pasos directos para cada equipo.

---

## 🧭 ¿En qué equipo estás?

Haz clic en la guía de tu equipo:

* 🚀 **[Equipo 1: Header / Menú Fijo con Scroll](paso_a_paso_equipo1.md)**
  - *Tag HTML:* `<header id="equipo-header">`
  - *Rama Git:* `feature/equipo-1-menu`
  - *Misión:* Crear una barra fija superior (`position: fixed`) con efecto glassmorphism y enlaces `:hover`.

* 👣 **[Equipo 2: Footer Completo al 100% y al Fondo](paso_a_paso_equipo2.md)**
  - *Tag HTML:* `<footer id="equipo-footer">`
  - *Rama Git:* `feature/equipo-2-footer`
  - *Misión:* Pie de página institucional que abarca el 100% de la pantalla y se ancla al fondo con `margin-top: auto`.

* 📸 **[Equipo 3: Columna Derecha — Foto y Música con Botón ON/OFF](paso_a_paso_equipo3.md)**
  - *Tag HTML:* `<section id="equipo-derecha">`
  - *Rama Git:* `feature/equipo-3-derecha-musica`
  - *Misión:* Imagen con efecto zoom hover y reproductor musical con botón interactivo programado en JavaScript (`audio.paused ? play() : pause()`).

* 💡 **[Equipo 4: Columna Izquierda — Aspectos a Mejorar y Sugerencias](paso_a_paso_equipo4.md)**
  - *Tag HTML:* `<section id="equipo-izquierda">`
  - *Rama Git:* `feature/equipo-4-izquierda-mejoras`
  - *Misión:* Lista estilizada de propuestas para la clase y formulario interactivo de sugerencias con efectos hover.

* 💡 **[Cuaderno de Reflexiones de Diseño Web](reflexiones.md)**
  - *¿Por qué el menú se escribe como `<ul>` y se ve en una línea horizontal?* (Flexbox, accesibilidad, semántica, box-sizing y APIs).

---

## 🚨 Reglas de Convivencia para no provocar Conflictos de Git
1. **No toques el bloque de otro equipo:** Si eres el Equipo 3, edita exclusivamente dentro de `<section id="equipo-derecha">`.
2. **Prefija siempre tus estilos CSS:** Empieza siempre con el ID de tu equipo (ejemplo: `#equipo-derecha .mi-clase { ... }`) para evitar cambiar el diseño de los demás.
3. **Sube tus cambios mediante Pull Request:** El profesor revisará y unirá las 4 ramas en la pantalla del aula.
