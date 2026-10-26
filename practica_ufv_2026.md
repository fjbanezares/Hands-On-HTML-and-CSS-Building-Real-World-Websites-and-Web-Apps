# 🚀 Práctica UFV 2026: Mi Primer CV Web, Control de Versiones con Git y Despliegue en GitHub Pages

> **Entorno de desarrollo recomendado:** Antigravity IDE & Git Bash / Terminal  
> **Formato de entrega en Canvas:** Enlace a GitHub Pages + Enlace al Repositorio + Vídeo reflexivo de 1 minuto  

---

## 📋 Resumen de la Actividad

En esta práctica aprenderás el flujo de trabajo real que utilizan los desarrolladores de software modernos:
1. **Colaboración en la nube:** Forking y clonado de repositorios en GitHub.
2. **Control de versiones con Git:** Ramas (`branches`), ciclo de vida de los cambios (`status`, `add`, `commit`), reversión segura (`revert`) y visualización del grafo (`log`).
3. **Fundamentos Web (HTML5 & CSS3):** Estructura semántica, especificidad de selectores (`id` vs `class`), el uso controlado de `!important`, y posicionamiento de elementos (`position`).
4. **Despliegue Continuo:** Publicación de tu sitio web personal (CV) al mundo mediante **GitHub Pages**.
5. **Autoevaluación:** Vídeo corto de reflexión sobre la experiencia y el uso de Git.

---

## 🎯 Objetivos de Aprendizaje

- [x] Comprender la diferencia entre un repositorio original (*upstream*) y una bifurcación personal (*fork*).
- [x] Dominar los comandos esenciales de Git en consola para trabajar sin miedo a romper el código.
- [x] Comprender cómo el navegador decide qué estilo aplicar según la especificidad de CSS.
- [x] Maquetar y personalizar un Curriculum Vitae web interactivo utilizando HTML y CSS.
- [x] Desplegar un sitio web estático accesible públicamente a través de una URL de GitHub Pages.

---

## 🛠️ Requisitos Previos

1. **Git instalado** en tu equipo (en Windows recomendamos encarecidamente **Git Bash**; en macOS/Linux la Terminal estándar).
2. **IDE Antigravity** instalado y configurado.
3. Conexión a Internet y navegador web moderno (Chrome, Firefox, Safari o Edge).

---

## 📖 Guía Paso a Paso de la Práctica

---

### Paso 1: Cuenta en GitHub

Si aún no dispones de una cuenta en GitHub:
1. Entra en [github.com](https://github.com/).
2. Haz clic en **Sign Up** y sigue los pasos con tu correo institucional o personal.
3. Configura tu perfil básico.

---

### Paso 2: ¿Qué es un Fork y por qué es fundamental?

#### 💡 Explicación conceptual
Un **Fork** es una copia exacta de un repositorio ajeno que se clona directamente en **tu propia cuenta de GitHub**. 
- **¿Por qué no editar directamente el repositorio del profesor?** Porque no tienes permisos de escritura directa en el repositorio principal y, además, si todos los alumnos escribiesen sobre el mismo repositorio, se producirían conflictos destructivos constantes.
- **¿Para qué sirve?** Te da total libertad e independencia: puedes experimentar, crear ramas, romper cosas, arreglarlas y desplegar tu propia web en GitHub Pages sin afectar el repositorio original.

#### 🔧 Acción requerida
1. Dirígete al repositorio de la práctica del profesor:  
   👉 **`https://github.com/fjbanezares/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps`**
2. En la esquina superior derecha, haz clic en el botón **Fork**.
3. Selecciona tu usuario como destino y pulsa en **Create Fork**.  
   *Ahora tendrás en tu perfil: `https://github.com/TU_USUARIO/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps`.*

---

### Paso 3: Clonar tu repositorio en local (`git clone`)

#### 💡 Explicación conceptual
`git clone` descarga todo el repositorio remoto (archivos, carpetas y todo el historial de commits) desde los servidores de GitHub a una carpeta en tu ordenador. Además, configura automáticamente el puntero remoto llamado `origin` para que tu equipo sepa a qué repositorio de GitHub conectarse.

#### 🔧 Acción requerida
1. Abre tu terminal (**Git Bash** en Windows o **Terminal** en macOS/Linux).
2. Sitúate en la carpeta donde guardas tus proyectos (por ejemplo, `cd ~/Proyectos` o `cd Documents`).
3. Copia la URL de **tu fork** (¡asegúrate de que sea el tuyo y no el del profesor!) y ejecuta:

```bash
git clone https://github.com/TU_USUARIO/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps.git
```

4. Entra en la carpeta recién creada:

```bash
cd Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps
```

5. Abre este proyecto dentro de **Antigravity IDE**.

---

### Paso 4: Creación de una Rama de Trabajo (`git branch` / `git checkout`)

#### 💡 Explicación conceptual
Una **rama** (*branch*) es una línea independiente de desarrollo. La rama principal suele llamarse `main` o `master`. Crear una rama específica para tu trabajo te permite experimentar y desarrollar nuevas funcionalidades de forma aislada sin alterar la versión estable del proyecto.

#### 🔧 Acción requerida
1. Crea tu propia rama sustituyendo `xxx` por tu nombre o siglas:

```bash
# Opción directa (crea y se cambia a la rama):
git checkout -b branch_alumno_xxx

# O en versiones modernas de Git:
# git switch -c branch_alumno_xxx
```

2. Verifica en qué rama te encuentras ejecutando:

```bash
git branch
```
*(Aparecerá un asterisco `*` en verde junto a tu nueva rama `branch_alumno_xxx`).*

---

### Paso 5: Fundamentos de HTML & CSS (Especificidad, IDs, Clases y `!important`)

Antes de maquetar tu CV, vamos a revisar los conceptos clave que componen la Web:

1. **HTML (HyperText Markup Language):** Es el **esqueleto y la estructura semántica** de cualquier página web. Mediante etiquetas (`<h1>`, `<p>`, `<div>`, `<section>`, `<article>`), definimos los bloques de información y su jerarquía.
2. **CSS (Cascading Style Sheets):** Es la **capa visual y estética** (colores, tipografías, márgenes, bordes).
3. **La Cascada y la Especificidad:** Cuando dos o más reglas CSS afectan al mismo elemento, el navegador decide cuál aplicar usando una regla de pesos:
   - **Estilo en línea (`style=""`)**: Máxima prioridad estándar (1000 puntos).
   - **Selector de ID (`#id`)**: Muy alta prioridad (100 puntos). Gana siempre a las clases.
   - **Selector de Clase (`.clase`)**, pseudo-clases y atributos: Prioridad media (10 puntos).
   - **Selector de Elemento / Etiqueta (`h1`, `p`, `div`)**: Prioridad baja (1 punto).

#### 🧪 Ejercicio obligatorio previo: `2. CSS Basics/specificity.html`
Abre en tu navegador y en Antigravity el archivo:  
📄 `2. CSS Basics/specificity.html`

Inspecciona cómo están declaradas las reglas:
```css
/* Elemento (prioridad baja) */
h1 { font-size: 24px; color: gray; }

/* Clase (gana a elemento) */
.main-header { font-size: 28px; color: blue; }

/* ID (gana a clase y a elemento) */
#header-id { font-size: 40px; color: red; }
```

#### ⚠️ Mención Especial: `!important`
En `specificity.html` verás algo como:
```css
.main-header:hover {
  font-size: 36px;
  color: yellow !important;
}
```
- **¿Qué hace `!important`?** Es una directiva que anula cualquier otra regla de especificidad anterior, forzando la aplicación de ese estilo concreto.
- **¿Por qué se considera mala práctica?** Rompe el flujo natural de cascada de CSS. Cuando abusas de `!important`, para sobrescribir un estilo en el futuro tienes que poner otro `!important` más, generando un "código espagueti" muy difícil de depurar y mantener.
- **Tu misión en este ejercicio:** En `specificity.html`, prueba a modificar algún selector o a añadir `!important` en una clase para ver cómo aplasta la regla de un `#id`. **Prueba su poder, pero recuerda la regla de oro: en proyectos reales, ¡evítalo siempre que puedas!**

---

### Paso 6: Edición de tu CV Personal en `project_personal_CV`

Ahora aplicarás todo lo aprendido para dar vida a tu propio Currículum Vitae.

1. Navega en Antigravity a la carpeta:  
   📂 `project_personal_CV`
2. Encontrarás:
   - `index.html`: Estructura del CV.
   - `styles.css`: Hoja de estilos vinculada. *(Revisa que en `index.html` la etiqueta `<link rel="stylesheet" href="styles.css">` apunte a `styles.css`).*
3. **Revisa la teoría de Posicionamiento (`2. CSS Basics/10. Positioning/`):**
   - Estudia las propiedades: `position: static;`, `position: relative;`, `position: absolute;`, `position: fixed;` y `z-index`.
   - Utiliza estas propiedades para situar y maquetar los contenedores `<div>`, secciones o una foto de perfil donde tú decidas en la pantalla.
4. **Personaliza tu CV:**
   - Sustituye los datos ficticios ("Jane Doe") por **tus datos reales o profesionales** (tu nombre, titulación en la UFV, contacto, habilidades técnicas, proyectos).
   - Añade nuevas secciones si lo deseas (Idiomas, Enlaces a LinkedIn/GitHub, Fotografía personal).
   - Diseña una estética atractiva en `styles.css` aplicando colores acordes, buenas tipografías, bordes redondeados y sombras (`box-shadow`).
5. Abre `project_personal_CV/index.html` en tu navegador con recarga o Live Server para comprobar que el aspecto final te satisface.

---

### Paso 7: El Ciclo de Vida de Git: `git status` y `git add`

#### 💡 Explicación conceptual
- `git status`: Te informa del estado del proyecto: qué rama tienes activa, qué archivos han sido modificados (*Changes not staged for commit*) y cuáles son nuevos (*Untracked files*).
- `git add`: Mueve los cambios al **Staging Area** (área de preparación). Es como meter los archivos en una caja antes de precintarla.

#### 🔧 Acción requerida
1. Consulta el estado antes de añadir nada:
```bash
git status
```
*(Verás en color **rojo** los archivos modificados en `project_personal_CV/`).*

2. Añade todos los cambios al Staging Area:
```bash
git add .
# O añade específicamente: git add project_personal_CV/
```

3. Vuelve a consultar el estado:
```bash
git status
```
*(¡Comprueba la magia! Ahora los archivos aparecen en color **verde**, listos para ser guardados en el historial).*

---

### Paso 8: Guardar la Foto con `git commit`

#### 💡 Explicación conceptual
Un `commit` es una fotografía o instantánea inmutable del estado de tu proyecto en un momento determinado. Cada commit cuenta con un identificador único (hash SHA-1), fecha, autor y un mensaje que explica qué y por qué se cambió.

#### 🔧 Acción requerida
1. Crea tu commit con un mensaje descriptivo:
```bash
git commit -m "feat(cv): personalizacion de datos y estilos en el CV de alumno_xxx"
```
2. Al pulsar Intro verás un resumen con:
   - El hash corto del commit.
   - El número de archivos cambiados (`files changed`).
   - Las líneas añadidas (`insertions(+)`) y eliminadas (`deletions(-)`).

---

### Paso 9: ¿Te has equivocado? `git revert` y tu mejor amigo: `git log`

#### ↩️ ¿Y si te arrepientes después del commit? (`git revert`)
Si hiciste un commit y te das cuenta de que rompiste algo o quieres deshacerlo sin alterar de forma destructiva el historial:
```bash
# Deshace los cambios introducidos por el último commit creando un nuevo commit de reversión:
git revert HEAD --no-edit
```
A diferencia de `git reset --hard` (que borra la historia), `git revert` es **seguro y colaborativo** porque deja constancia de que se deshizo un cambio.

#### 🔄 Nuevas mejoras
Si quieres retocar algo más en el CV:
1. Modifica los archivos en Antigravity.
2. Repite: `git status` ➔ `git add .` ➔ `git commit -m "estilo: ajuste de colores y tipografia"`.

#### 🌳 Tu mejor amigo: El grafo de Git
Para ver de forma clara, compacta y gráfica lo que está sucediendo con tus ramas y commits, ejecuta este comando:
```bash
git log --oneline --all --graph
```
- `--oneline`: Muestra cada commit en una sola línea (hash corto + mensaje).
- `--all`: Muestra todas las ramas locales y remotas.
- `--graph`: Dibuja un árbol en texto ASCII con las bifurcaciones y uniones de ramas.

---

### Paso 10: Subir tus Cambios a GitHub con `git push`

#### 💡 Explicación conceptual
Hasta ahora, todos los commits viven exclusivamente en el disco duro de tu ordenador. Para enviarlos a la nube de GitHub, usamos `git push`. Al subir tu rama `branch_alumno_xxx`, se creará en tu repositorio remoto la rama equivalente: `origin/branch_alumno_xxx`.

#### 🔧 Acción requerida
1. Sube tu rama al repositorio remoto (`origin`):
```bash
git push -u origin branch_alumno_xxx
```
*(El modificador `-u` vincula tu rama local con la remota para futuros envíos).*

2. Vuelve a ejecutar tu comando favorito de visualización:
```bash
git log --oneline --all --graph
```
3. **Observa con atención:** Comprobarás que la etiqueta de la nube `origin/branch_alumno_xxx` apunta **exactamente al mismo commit** que tu rama local `branch_alumno_xxx`. ¡Tu trabajo ya está a salvo en los servidores de GitHub!

---

### Paso 11: Publicar tu CV en GitHub Pages

Vamos a hacer que tu CV sea accesible por cualquiera en Internet con una dirección web pública (`https://...`).

1. Entra en tu navegador a tu repositorio en GitHub:  
   `https://github.com/TU_USUARIO/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps`
2. Ve a la pestaña **Settings** (Configuración) del repositorio.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Source**, asegúrate de que esté seleccionado **Deploy from a branch**.
5. En **Branch**, selecciona tu rama: `branch_alumno_xxx` (o `main` si has hecho un Pull Request/Merge a tu main) y la carpeta `/ (root)`. Pulsa **Save**.
6. Espera entre 1 y 2 minutos mientras GitHub ejecuta la acción de despliegue.
7. Recarga la página de Pages hasta que aparezca el mensaje en verde:  
   **"Your site is live at https://TU_USUARIO.github.io/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps/"**
8. Como tu CV se encuentra dentro de la carpeta `project_personal_CV`, tu URL final de acceso será:  
   👉 **`https://TU_USUARIO.github.io/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps/project_personal_CV/`**
9. Comprueba en tu navegador que la web carga correctamente con todos tus estilos e información.

---

### Paso 12: Grabación de Vídeo Reflexivo (1 minuto) ⏱️

Grábate un vídeo breve (de aproximadamente 1 minuto de duración) con tu cámara o captura de pantalla donde respondas con total naturalidad a estas tres cuestiones:
1. **Sensaciones generales:** ¿Cómo te has sentido a lo largo de la práctica construyendo tu propio CV?
2. **Obstáculos y retos:** ¿En qué punto te has atascado más o qué concepto te ha costado más asimilar (especificidad CSS, posicionamiento con `divs`, rutas relativas, comandos de terminal)?
3. **Tu relación con Git:** ¿Cómo te sientes ahora utilizando Git y la línea de comandos en comparación a cuando empezaste? ¿Te aporta seguridad o sigues sintiendo incertidumbre?

*(Puedes subir el vídeo directamente a Canvas o alojarlo en OneDrive UFV / Google Drive / Loom / YouTube en oculto y pegar el enlace directo).*

---

## 📦 Entregables en Canvas

Debes enviar en la tarea correspondiente de Canvas un documento de texto o cuadro de texto con la siguiente información:

1. **URL pública de tu CV en GitHub Pages:**  
   `https://TU_USUARIO.github.io/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps/project_personal_CV/`
2. **URL de tu repositorio (Fork) en GitHub y de tu rama:**  
   `https://github.com/TU_USUARIO/Hands-On-HTML-and-CSS-Building-Real-World-Websites-and-Web-Apps/tree/branch_alumno_xxx`
3. **Vídeo de reflexión (1 minuto):**  
   Archivo adjunto o enlace accesible con permisos abiertos para el profesor.

---

## 📊 Rúbrica de Evaluación

| Criterio | Puntuación | Descripción |
| :--- | :---: | :--- |
| **Fork & Estructura de Ramas en Git** | 20% | Se ha realizado el fork correctamente y el trabajo se ha desarrollado y publicado en la rama `branch_alumno_xxx`. |
| **Historial de Commits & Buenas Prácticas** | 20% | Uso correcto de `git add`, `git status` y mensajes de commit descriptivos y coherentes. |
| **Calidad del CV en HTML & CSS** | 25% | Estructura semántica, datos personalizados del alumno, diseño cuidado, uso correcto de especificidad y posicionamiento de elementos. |
| **Despliegue en GitHub Pages** | 15% | La página web es accesible públicamente sin errores 404 ni enlaces rotos a estilos. |
| **Vídeo de Autoevaluación (1 min)** | 20% | Reflexión sincera y completa sobre el proceso, dificultades encontradas y sensaciones con Git y la consola. |

---
*¡Mucho éxito con la práctica! Recuerda que en el desarrollo de software cometer errores es la mejor manera de aprender a depurar y entender cómo funcionan las herramientas.*
