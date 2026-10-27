# 🌐 Del Dato a la Web: Guía Explicativa de la Infografía

> **Documento de apoyo para la clase:** Del backend y las APIs a la pantalla del navegador.  
> **Materiales asociados en esta carpeta:**  
> 📄 **[Del_dato_a_la_web.pdf](Del_dato_a_la_web.pdf)** *(Versión formal y sobria para estudio)*  
> 🖼️ **Infografías visuales:** 12 láminas temáticas numeradas del `01` al `12`.

---

## 🧭 ¿Qué cuenta esta infografía? (El Hilo Conductor)

Esta infografía narra el **viaje completo de un dato**: desde que nace como un registro en la memoria de un servidor o base de datos hasta que se transforma en una tarjeta interactiva en una página web con la que un usuario puede hacer clic.

Seguimos el caso práctico de **Ana (20 años)** a través de **4 grandes fases**:

```
[ BACKEND / SERVIDOR ]                 [ TRANSPORTE ]               [ FRONT-END / NAVEGADOR ]
  01. Representar         --->        02. Transportar    --->     03. Presentar     --->     04. Actuar
 (JSON, XML, Esquemas)               (Serializar bytes)          (HTML5 + CSS3)            (DOM + JavaScript)
```

---

## 🗺️ Desglose Lámina a Lámina (12 Pasos)

---

### Fase 1: Representar y Modelar el Dato

#### Lámina 1: Un dato, varios lenguajes (El Mapa)
![Lámina 1 - Un dato sale de viaje](1.%20Un%20dato%20sale%20de%20viaje-1.png)

* **Concepto clave:** No todo lenguaje informático es un lenguaje de programación.
  - Hay lenguajes para **describir información** (JSON, XML).
  - Lenguajes para **marcar documentos** (HTML).
  - Lenguajes para **declarar estilos visuales** (CSS).
  - Lenguajes para **programar algoritmos y comportamiento** (JavaScript, Python, Java).
* **Pregunta guía:** *¿Estoy describiendo información, declarando un aspecto o programando un comportamiento?*

---

#### Lámina 2: XML y JSON: Dos envoltorios para el mismo dato
![Lámina 2 - XML y JSON](2.%20XML%20y%20JSON_%20dos%20envoltorios-2.png)

* **El mismo contenido, dos sintaxis:**
  - **JSON (`{ "nombre": "Ana", "edad": 20 }`):** Estructura ligera de clave-valor. Es el estándar de facto en las APIs REST web modernas.
  - **XML (`<alumno><nombre>Ana</nombre><edad>20</edad></alumno>`):** Formato extensible basado en etiquetas. Muy utilizado en integraciones empresariales clásicas, SOAP, SVG y ofimática.
* **Nota importante:** JSON no es código ejecutable, es únicamente representación de datos en texto plano.

---

#### Lámina 3: Las etiquetas también pesan (El coste en la red)
![Lámina 3 - Las etiquetas también pesan](3.%20Las%20etiquetas%20tambi%C3%A9n%20pesan-3.png)
*(Véase también lámina complementaria: [Corrección definitiva de bytes](3.%20Correcci%C3%B3n%20definitiva%20de%20bytes%20y%20JSON-13.png))*

* **La anatomía de los bytes:**
  - En un JSON de 26 bytes: `{"nombre":"Ana","edad":20}`
  - El dato real (`Ana` + `20`) solo ocupa **5 bytes**.
  - Los **21 bytes restantes** son nombres de campo (`nombre`, `edad`) y sintaxis estructural (`"`, `{`, `:`, `,`).
* **En Big Data:** Cuando envías millones de peticiones por segundo, esa sobrecarga de texto repetitivo multiplica el tráfico de red y el consumo de CPU.

---

#### Lámina 4: El esquema es un contrato compartido
![Lámina 4 - El esquema un contrato](4.%20El%20esquema_%20un%20contrato%20compartido-4.png)

* **¿Para qué sirve un contrato?** Antes de que dos sistemas hablen (Servicio A y Servicio B), deben acordar qué campos existen y qué tipos admiten.
* **Herramientas de validación:**
  - **JSON Schema:** Define que `nombre` debe ser texto y `edad` un entero $\ge 0$.
  - **XSD (en XML):** Valida tipos y restricciones estrictas.
* **Ojo al detalle:** Añadir un JSON Schema no comprime el mensaje; solo sirve para verificar que no viajen datos corruptos.

---

### Fase 2: Transportar y Serializar

#### Lámina 5: Binario no significa comprimido
![Lámina 5 - Serialización y binario](5.%20Empaquetar%20no%20es%20comprimir-5.png)

* **Codificar (Serializar):** Sustituir claves de texto por identificadores numéricos y tipos binarios eficientes.
  - En **Protocol Buffers (Protobuf)**, el mensaje de Ana pasa de 26 bytes a **7 bytes**.
* **Comprimir (Gzip, Brotli, Zstandard):** Algoritmos matemáticos que buscan patrones repetidos.
* **Regla de oro:** Comprimir mensajes minúsculos puede aumentar su tamaño por culpa de las cabeceras del algoritmo. Hay que medir con datos reales.

---

#### Lámina 6: Feria de serializadores (¿Cuál elegir en arquitectura?)
![Lámina 6 - Serializadores](6.%20Feria%20de%20serializadores%20robo%CC%81ticos-6.png)

| Formato | Tipo | ¿Requiere Esquema Externo? | Caso de Uso Típico |
| :--- | :--- | :--- | :--- |
| **JSON / XML** | Texto legible | Opcional | APIs públicas web y depuración fácil. |
| **Protobuf** | Binario compacto | Sí (`.proto`) | Microservicios de alto rendimiento y gRPC. |
| **Apache Avro** | Binario con schema | Sí (esquema JSON) | Streaming en Big Data con Apache Kafka. |
| **MessagePack / CBOR** | Binario sin esquema | No | Alternativa directa a JSON en binario sin `.proto`. |
| **BSON / FlatBuffers** | Binario indexado | No (BSON) / Sí (FlatBuffers) | MongoDB (BSON) y videojuegos/dispositivos embebidos. |

---

### Fase 3: Presentar en la Web (HTML5 y CSS3)

#### Lámina 7: HTML: Estructura con significado
![Lámina 7 - HTML semántico](7.%20HTML_%20el%20esqueleto%20con%20significado-7.png)

* **No todo es un `<div>`:**
  - Un `<article>` representa un contenido con entidad propia.
  - Un `<h1>` declara el título principal.
  - Un `<button>` ofrece foco accesible por teclado de forma nativa.
* **HTML describe el "qué es"**; jamás se debe usar una etiqueta por cómo se ve por defecto, sino por lo que significa.

---

#### Lámina 8: Distribución: Cajas `block` e `inline`
![Lámina 8 - Cajas block e inline](8.%20Cajitas%20que%20fluyen%20en%20CSS-8.png)

* **`block`:** Salta a una línea nueva y ocupa todo el ancho horizontal disponible (`<p>`, `<div>`, `<h1>`).
* **`inline`:** Fluye dentro del texto sin saltar de línea; no acepta ancho ni alto (`<span>`, `<a>`).
* **`inline-block`:** Se alinea en línea con el texto pero **sí** respeta anchura y altura.
* **Flexbox y Grid:** Modifican el comportamiento del flujo sin cambiar el significado semántico del HTML.

---

#### Lámina 9: CSS declara el resultado (Box Model y Posicionamiento)
![Lámina 9 - CSS decorador y modelo de caja](9.%20CSS_%20el%20decorador%20declarativo-11.png)

* **El Modelo de Caja (*Box Model*):**
  - `margin` (exterior) $\rightarrow$ `border` (borde) $\rightarrow$ `padding` (aire interior) $\rightarrow$ `contenido`.
  - Con `box-sizing: border-box;`, el ancho declarado incluye el padding y el borde, evitando descuadres.
* **Posicionamiento:**
  - `static`: Flujo natural.
  - `relative`: Mueve la caja conservando su hueco original.
  - `absolute`: Se desliga del flujo y se coloca respecto a su ancestro relativo más cercano.
  - `fixed`: Se congela en la ventana del navegador (ideal para menús fijos con scroll).
  - `sticky`: Híbrido que se fija al llegar a un umbral.

---

#### Lámina 10: Selectores: ¿A quién viste el CSS?
![Lámina 10 - Selectores CSS](10.%20Selectores%20CSS_%20a%20quie%CC%81n%20vestimos-9.png)

* `button`: Afecta a todos los botones.
* `#saludar`: Afecta al elemento único con ese ID.
* `.boton`: Afecta a cualquier elemento con esa clase.
* `.boton:hover`: Pseudoclase de estado (cuando el ratón pasa por encima).
* `.tarjeta > p`: Hijo directo.
* `.tarjeta p`: Descendiente a cualquier profundidad.

---

#### Lámina 11: La Cascada y la Especificidad
![Lámina 11 - Especificidad en CSS](11.%20CSS_%20gana%20la%20mayor%20especificidad-10.png)

* ¿Qué ocurre si dos reglas definen colores diferentes para el mismo elemento?
* **El navegador calcula la terna de especificidad `(ID, Clase, Tipo)`:**
  - `#saludar` = `(1, 0, 0)` $\rightarrow$ **¡Gana verde!**
  - `.boton` = `(0, 1, 0)`
  - `button` = `(0, 0, 1)`
* `style="..."` en línea supera a las anteriores, y `!important` altera el nivel de cascada pero debe usarse con precaución.

---

### Fase 4: Actuar e Interactuar (DOM y JavaScript)

#### Lámina 12: Del HTML al DOM… y al clic interactivo
![Lámina 12 - DOM y JavaScript](12.%20DOM%20%2B%20JavaScript_%20%C2%A1la%20web%20se%20mueve!-12.png)

* **¿Qué es el DOM (*Document Object Model*)?**
  - No es el archivo HTML de texto. Es un **árbol vivo de objetos en la memoria RAM** del navegador.
* **El ciclo de vida:**
  1. El navegador descarga y analiza el HTML $\rightarrow$ Construye el árbol DOM.
  2. Aplica las reglas de CSS $\rightarrow$ Calcula el diseño (*layout* y pintura).
  3. **JavaScript:** Escucha eventos del usuario (`addEventListener('click')`) y muta nodos del DOM en memoria (cambia textos o añade clases con `classList.toggle()`).
  4. El navegador redibuja los cambios instantáneamente.

---

## 💡 Comparativa: ¿Cuándo consultar el PDF y cuándo las Láminas?

* 📄 **El PDF ([Del_dato_a_la_web.pdf](Del_dato_a_la_web.pdf)):**  
  Presentación sobria, formal, con tipografía limpia y maquetación editorial. Es la mejor referencia para repasar definiciones técnicas, consultar fuentes oficiales (MDN, RFC 8949, Protobuf docs) y preparar exámenes o entrevistas.
* 🖼️ **Las Imágenes PNG (`1. ...` a `12. ...`):**  
  Ideales para proyectar en clase, recordar conceptos visuales de un vistazo rápido (el modelo de caja, las comparativas de bytes o el árbol DOM) y usar en presentaciones de equipo.
