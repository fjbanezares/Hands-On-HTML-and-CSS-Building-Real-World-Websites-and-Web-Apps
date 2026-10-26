# 💡 Paso a Paso — Equipo 4: Columna Izquierda con Sugerencias y Mejoras

> **Asignación:** Equipo 4 (3 alumnos)  
> **Área de trabajo:** `<section id="equipo-izquierda">` en `index.html` y `#equipo-izquierda` en `styles/styles.css`  
> **Objetivo:** Maquetar la columna izquierda con una lista atractiva de aspectos a mejorar de la clase y un formulario interactivo de sugerencias para los compañeros.

---

## ⏱️ Hoja de Ruta Rápida (15-20 minutos)

### Paso 1: Crear y activar la rama de Git
Abrid la terminal en la carpeta del proyecto y ejecutad:
```bash
# 1. Aseguraros de estar en main al día
git checkout main
git pull origin main

# 2. Crear vuestra rama de trabajo
git checkout -b feature/equipo-4-izquierda-mejoras
```

---

### Paso 2: Editar el HTML (`index.html`)
Abrid `8. PRACTICA_CLASE 2026/index.html` y buscad el bloque del **Equipo 4**:

Sustituid el contenido dentro de `<section id="equipo-izquierda">` por este código:

```html
        <!-- ========================================================== -->
        <!-- EQUIPO 4: COLUMNA IZQUIERDA (ASPECTOS A MEJORAR / BUZÓN)   -->
        <!-- ========================================================== -->
        <section id="equipo-izquierda" class="columna columna-izq seccion-equipo-4">
            <div class="tarjeta-izquierda">
                <div class="cabecera-tarjeta">
                    <span class="badge-feedback">Feedback 2026</span>
                    <h2>💡 Aspectos a Mejorar de la Clase</h2>
                    <p class="bajada-texto">Propuestas recopiladas por los alumnos para optimizar las sesiones de clase:</p>
                </div>

                <!-- Lista de propuestas destacadas -->
                <ul class="lista-mejoras">
                    <li class="item-mejora">
                        <span class="icono-mejora">☕</span>
                        <div>
                            <strong>Pausas de café activas</strong>
                            <p>Descansos de 10 min a mitad de sesión para oxigenar la mente.</p>
                        </div>
                    </li>
                    <li class="item-mejora">
                        <span class="icono-mejora">💻</span>
                        <div>
                            <strong>Talleres de resolución de conflictos Git</strong>
                            <p>Practicar en vivo cómo solucionar fusiones complejas.</p>
                        </div>
                    </li>
                    <li class="item-mejora">
                        <span class="icono-mejora">🍕</span>
                        <div>
                            <strong>Hackathon de final de curso</strong>
                            <p>Construir un proyecto en equipo con entrega en tiempo real.</p>
                        </div>
                    </li>
                </ul>

                <!-- Formulario interactivo de sugerencias -->
                <div class="buzon-formulario">
                    <h3>✉️ Envía tu sugerencia anónima</h3>
                    <form id="form-sugerencias-equipo4" onsubmit="event.preventDefault(); alert('¡Muchas gracias! Tu sugerencia ha sido registrada para la clase.');">
                        <input type="text" placeholder="Tu nombre o apodo (opcional)" class="input-form">
                        <textarea placeholder="¿Qué aspecto de la asignatura te gustaría potenciar o cambiar?" rows="3" required class="textarea-form"></textarea>
                        <button type="submit" class="btn-enviar-sugerencia">Enviar Propuesta 🚀</button>
                    </form>
                </div>
            </div>
        </section>
```

---

### Paso 3: Aplicar los Estilos CSS (`styles/styles.css`)
Abrid `8. PRACTICA_CLASE 2026/styles/styles.css`, buscad la sección `/* ZONA EQUIPO 4 */` y pegad estos estilos:

```css
/* ============================================================== */
/* ZONA EQUIPO 4: COLUMNA IZQUIERDA (ASPECTOS A MEJORAR)          */
/* ============================================================== */
#equipo-izquierda .tarjeta-izquierda {
    background: #161f30;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

#equipo-izquierda .badge-feedback {
    background: rgba(59, 130, 246, 0.15);
    color: #60a5fa;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

#equipo-izquierda h2 {
    color: #f8fafc;
    font-size: 1.4rem;
    margin-top: 10px;
    margin-bottom: 6px;
}

#equipo-izquierda .bajada-texto {
    font-size: 0.9rem;
    color: #94a3b8;
    margin-bottom: 20px;
}

/* Lista de propuestas estilizadas */
#equipo-izquierda .lista-mejoras {
    list-style: none;
    padding: 0;
    margin: 0 0 25px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

#equipo-izquierda .item-mejora {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-left: 4px solid #3b82f6; /* Borde de acento azul */
    border-radius: 0 12px 12px 0;
    padding: 12px 15px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: transform 0.25s ease, background 0.25s ease;
}

#equipo-izquierda .item-mejora:hover {
    transform: translateX(6px);
    background: rgba(59, 130, 246, 0.08);
}

#equipo-izquierda .icono-mejora {
    font-size: 1.5rem;
    line-height: 1;
}

#equipo-izquierda .item-mejora strong {
    color: #f1f5f9;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 2px;
}

#equipo-izquierda .item-mejora p {
    font-size: 0.85rem;
    color: #94a3b8;
    margin: 0;
}

/* Buzón de sugerencias */
#equipo-izquierda .buzon-formulario {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    padding: 20px;
}

#equipo-izquierda .buzon-formulario h3 {
    color: #f8fafc;
    font-size: 1.05rem;
    margin-top: 0;
    margin-bottom: 12px;
}

#equipo-izquierda .input-form,
#equipo-izquierda .textarea-form {
    width: 100%;
    background: #0b0f19;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    padding: 10px 14px;
    color: #ffffff;
    font-family: inherit;
    font-size: 0.9rem;
    margin-bottom: 12px;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;
}

#equipo-izquierda .input-form:focus,
#equipo-izquierda .textarea-form:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

#equipo-izquierda .btn-enviar-sugerencia {
    width: 100%;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
}

#equipo-izquierda .btn-enviar-sugerencia:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
    transform: translateY(-2px);
}
```

---

### Paso 4: Probar en el Navegador
Abrid `index.html` en Chrome:
- Comprobad que al pasar el ratón sobre cada propuesta de la lista, esta se desplaza suavemente a la derecha con el efecto hover.
- Rellenad el formulario de prueba y comprobad que al enviar aparece la confirmación en pantalla.

---

### Paso 5: Guardar, Subir y Crear el Pull Request
```bash
# 1. Comprobar cambios
git status

# 2. Añadir cambios
git add .

# 3. Guardar commit
git commit -m "Equipo 4: Panel interactivo de sugerencias y mejoras con formulario"

# 4. Subir la rama a GitHub
git push -u origin feature/equipo-4-izquierda-mejoras
```
Id a GitHub, pulsad **Compare & pull request** y avisad al profesor para revisarlo en vivo.
