# 📸 Paso a Paso — Equipo 3: Columna Derecha con Foto y Música (JavaScript)

> **Asignación:** Equipo 3 (3 alumnos)  
> **Área de trabajo:** `<section id="equipo-derecha">` en `index.html`, `#equipo-derecha` en `styles/styles.css` y `scripts/musica.js`  
> **Objetivo:** Maquetar la columna derecha con una fotografía moderna con efectos hover y un reproductor musical interactivo con botón Play/Pause controlado con JavaScript.

---

## ⏱️ Hoja de Ruta Rápida (15-20 minutos)

### Paso 1: Crear y activar la rama de Git
Abrid la terminal en la carpeta del proyecto y ejecutad:
```bash
# 1. Aseguraros de estar en main al día
git checkout main
git pull origin main

# 2. Crear vuestra rama de trabajo
git checkout -b feature/equipo-3-derecha-musica
```

---

### Paso 2: Editar el HTML (`index.html`)
Abrid `8. PRACTICA_CLASE 2026/index.html` y buscad el bloque del **Equipo 3**:

Sustituid el contenido dentro de `<section id="equipo-derecha">` por este código:

```html
        <!-- ========================================================== -->
        <!-- EQUIPO 3: COLUMNA DERECHA (FOTO + MÚSICA CON JAVASCRIPT)   -->
        <!-- ========================================================== -->
        <section id="equipo-derecha" class="columna columna-der seccion-equipo-3">
            <div class="tarjeta-derecha">
                <div class="cabecera-tarjeta">
                    <span class="badge-tag">Multimedia</span>
                    <h2>📸 Momentos de la Clase</h2>
                </div>

                <!-- Contenedor con la imagen -->
                <div class="marco-imagen">
                    <img src="images/foto-clase.jpg" alt="Foto de la clase 2026" class="foto-destacada">
                    <div class="pie-foto">📍 Aula de Big Data — UFV 2026</div>
                </div>

                <!-- Reproductor musical interactivo -->
                <div class="reproductor-musica">
                    <div class="info-musica">
                        <span class="icono-nota">🎵</span>
                        <div>
                            <h4>Banda Sonora de la Sesión</h4>
                            <p class="subtitulo-cancion">"Caminitos" — Ritmo para programar</p>
                        </div>
                    </div>

                    <!-- Elemento de audio invisible -->
                    <audio id="cancion-clase" loop>
                        <source src="audio/caminitos.mp3" type="audio/mpeg">
                        Tu navegador no soporta el formato de audio.
                    </audio>

                    <!-- Botón de control interactivo -->
                    <button id="btn-toggle-musica" class="btn-musica">
                        <span class="icono">▶️</span> <span class="texto">Reproducir Canción</span>
                    </button>
                </div>
            </div>
        </section>
```

---

### Paso 3: Aplicar los Estilos CSS (`styles/styles.css`)
Abrid `8. PRACTICA_CLASE 2026/styles/styles.css`, buscad la sección `/* ZONA EQUIPO 3 */` y pegad estos estilos:

```css
/* ============================================================== */
/* ZONA EQUIPO 3: COLUMNA DERECHA (FOTO + MÚSICA)                */
/* ============================================================== */
#equipo-derecha .tarjeta-derecha {
    background: #161f30;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

#equipo-derecha .cabecera-tarjeta {
    margin-bottom: 20px;
}

#equipo-derecha .badge-tag {
    background: rgba(16, 185, 129, 0.15);
    color: #34d399;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

#equipo-derecha h2 {
    color: #f8fafc;
    font-size: 1.4rem;
    margin-top: 10px;
}

/* Marco para la imagen con zoom suave */
#equipo-derecha .marco-imagen {
    position: relative;
    border-radius: 14px;
    overflow: hidden;        /* ¡TRUCO! Evita que el zoom desborde la caja */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

#equipo-derecha .foto-destacada {
    width: 100%;             /* Ocupa el 100% de la columna */
    max-height: 280px;
    object-fit: cover;       /* Ajusta la foto sin deformarla */
    display: block;
    transition: transform 0.4s ease;
}

#equipo-derecha .foto-destacada:hover {
    transform: scale(1.05);  /* Efecto zoom al pasar el ratón */
}

#equipo-derecha .pie-foto {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    color: #ffffff;
    padding: 15px 12px 8px 12px;
    font-size: 0.85rem;
    font-weight: 500;
}

/* Caja del reproductor */
#equipo-derecha .reproductor-musica {
    margin-top: 25px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px dashed rgba(255, 255, 255, 0.15);
    border-radius: 14px;
    text-align: center;
}

#equipo-derecha .info-musica {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    text-align: left;
}

#equipo-derecha .icono-nota {
    font-size: 1.8rem;
    background: rgba(59, 130, 246, 0.2);
    padding: 10px;
    border-radius: 12px;
}

#equipo-derecha h4 {
    color: #f1f5f9;
    font-size: 1rem;
    margin-bottom: 2px;
}

#equipo-derecha .subtitulo-cancion {
    font-size: 0.85rem;
    color: #94a3b8;
}

/* Botón interactivo de música */
#equipo-derecha .btn-musica {
    width: 100%;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: none;
    padding: 14px 20px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

#equipo-derecha .btn-musica:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.45);
}

/* Estado activo: cuando la música está sonando */
#equipo-derecha .btn-musica.reproduciendo {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.35);
}
```

---

### Paso 4: Revisar el JavaScript (`scripts/musica.js`)
El archivo `scripts/musica.js` ya está preparado. Comprobad que su contenido sea:

```javascript
document.addEventListener("DOMContentLoaded", function () {
    const miAudio = document.getElementById("cancion-clase");
    const botonMusica = document.getElementById("btn-toggle-musica");

    if (botonMusica && miAudio) {
        botonMusica.addEventListener("click", function () {
            // Si el audio está pausado
            if (miAudio.paused) {
                miAudio.play()
                    .then(function () {
                        botonMusica.classList.add("reproduciendo");
                        botonMusica.innerHTML = '<span class="icono">⏸️</span> <span class="texto">Pausar Canción</span>';
                    })
                    .catch(function (error) {
                        console.warn("Reproducción bloqueada por política del navegador:", error);
                    });
            } else {
                // Si está sonando, pausarlo
                miAudio.pause();
                botonMusica.classList.remove("reproduciendo");
                botonMusica.innerHTML = '<span class="icono">▶️</span> <span class="texto">Reproducir Canción</span>';
            }
        });
    }
});
```

---

### Paso 5: Probar en el Navegador
Abrid `index.html` en Chrome:
1. Haced clic sobre el botón **"▶️ Reproducir Canción"**.
2. Deberá empezar a sonar la música y el botón cambiará a color rojo diciendo **"⏸️ Pausar Canción"**.
3. Al volver a pulsar, se pausa y vuelve al estado inicial.

---

### Paso 6: Guardar, Subir y Crear el Pull Request
```bash
# 1. Comprobar cambios
git status

# 2. Añadir cambios
git add .

# 3. Guardar commit
git commit -m "Equipo 3: Imagen con hover zoom y reproductor interactivo con JS"

# 4. Subir la rama a GitHub
git push -u origin feature/equipo-3-derecha-musica
```
Id a GitHub, pulsad **Compare & pull request** y avisad al profesor para revisarlo en vivo.
