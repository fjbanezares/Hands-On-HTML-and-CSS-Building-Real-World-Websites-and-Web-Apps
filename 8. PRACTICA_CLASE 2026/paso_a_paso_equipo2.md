# 👣 Paso a Paso — Equipo 2: Footer al 100% y al Fondo

> **Asignación:** Equipo 2 (3 alumnos)  
> **Área de trabajo:** `<footer id="equipo-footer">` en `index.html` y `#equipo-footer` en `styles/styles.css`  
> **Objetivo:** Diseñar un pie de página profesional que ocupe el 100% del ancho (`width: 100%`) y se quede abajo del todo sin importar el tamaño de la pantalla.

---

## ⏱️ Hoja de Ruta Rápida (15-20 minutos)

### Paso 1: Crear y activar la rama de Git
Abrid la terminal en la carpeta del proyecto y ejecutad:
```bash
# 1. Aseguraros de estar en main al día
git checkout main
git pull origin main

# 2. Crear vuestra rama de trabajo
git checkout -b feature/equipo-2-footer
```

---

### Paso 2: Editar el HTML (`index.html`)
Abrid `8. PRACTICA_CLASE 2026/index.html` y buscad el bloque del **Equipo 2** al final del archivo:

Sustituid el contenido dentro de `<footer id="equipo-footer">` por este código:

```html
    <!-- ============================================================== -->
    <!-- EQUIPO 2: FOOTER (PIE DE PÁGINA: 100% DE ANCHO Y ABAJO DEL TODO) -->
    <!-- ============================================================== -->
    <footer id="equipo-footer" class="seccion-equipo-2">
        <div class="footer-grid">
            <!-- Columna 1: Información de la Asignatura -->
            <div class="footer-col">
                <h4 class="footer-titulo">🎓 Asignatura</h4>
                <p>Arquitectura del Big Data & Cloud</p>
                <p>Master en Business Analytics, IA & ML</p>
            </div>

            <!-- Columna 2: Créditos del Equipo -->
            <div class="footer-col">
                <h4 class="footer-titulo">👥 Desarrollado por</h4>
                <p class="nombres-alumnos">Equipo 2: [Pon aquí los 3 nombres de tu equipo]</p>
                <p class="universidad">Universidad Francisco de Vitoria — Madrid</p>
            </div>

            <!-- Columna 3: Enlaces de Interés -->
            <div class="footer-col">
                <h4 class="footer-titulo">🔗 Recursos</h4>
                <ul class="footer-links">
                    <li><a href="https://github.com/fjbanezares" target="_blank">Repositorio del Profesor</a></li>
                    <li><a href="https://www.ufv.es" target="_blank">Portal UFV</a></li>
                    <li><a href="#inicio">Volver arriba ⬆️</a></li>
                </ul>
            </div>
        </div>

        <!-- Barra inferior con copyright -->
        <div class="footer-bottom">
            <p>© 2026 Universidad Francisco de Vitoria. Todos los derechos reservados.</p>
        </div>
    </footer>
```

---

### Paso 3: Aplicar los Estilos CSS (`styles/styles.css`)
Abrid `8. PRACTICA_CLASE 2026/styles/styles.css`, buscad la sección `/* ZONA EQUIPO 2 */` y pegad estos estilos:

```css
/* ============================================================== */
/* ZONA EQUIPO 2: FOOTER (PIE DE PÁGINA AL 100%)                  */
/* ============================================================== */
#equipo-footer {
    width: 100%;                /* Ocupa el 100% del ancho de la ventana */
    margin-top: auto;           /* ¡TRUCO DE ORO! Empuja el footer al fondo si hay poco texto */
    background: linear-gradient(180deg, #0b0f19 0%, #030712 100%);
    color: #94a3b8;
    padding: 40px 20px 20px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    box-sizing: border-box;
}

#equipo-footer .footer-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 30px;
    flex-wrap: wrap;            /* Para adaptarse en pantallas pequeñas */
}

#equipo-footer .footer-col {
    flex: 1;
    min-width: 240px;
}

#equipo-footer .footer-titulo {
    color: #f1f5f9;
    font-size: 1.1rem;
    margin-bottom: 12px;
    border-bottom: 2px solid #3b82f6;
    display: inline-block;
    padding-bottom: 4px;
}

#equipo-footer p {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 6px;
}

#equipo-footer .nombres-alumnos {
    color: #38bdf8;
    font-weight: 600;
}

#equipo-footer .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

#equipo-footer .footer-links li {
    margin-bottom: 8px;
}

#equipo-footer .footer-links a {
    color: #94a3b8;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease, transform 0.2s ease;
    display: inline-block;
}

#equipo-footer .footer-links a:hover {
    color: #38bdf8;
    transform: translateX(4px);
}

#equipo-footer .footer-bottom {
    max-width: 1200px;
    margin: 30px auto 0 auto;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    text-align: center;
    font-size: 0.8rem;
    color: #64748b;
}
```

---

### Paso 4: Comprobar el Footer en Pantalla Completa
Abrid `index.html` en Chrome o Safari. Maximizad la ventana:
- Verificad que el fondo negro/oscuro del footer cubra el 100% de la anchura horizontal sin barras de scroll raras.
- Verificad que esté en el fondo de la pantalla gracias a `margin-top: auto`.

---

### Paso 5: Guardar, Subir y Crear el Pull Request
```bash
# 1. Comprobar cambios
git status

# 2. Añadir cambios
git add .

# 3. Guardar commit
git commit -m "Equipo 2: Footer completo al 100% responsive con créditos"

# 4. Subir la rama a GitHub
git push -u origin feature/equipo-2-footer
```
Id a GitHub, pulsad **Compare & pull request** y avisad al profesor para revisarlo en vivo.
