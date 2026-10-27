/**
 * ==============================================================
 * EJEMPLO DIDÁCTICO: Conexión con una API Pública (Open-Meteo)
 * ==============================================================
 * 
 * ¿Qué es una API (Application Programming Interface)?
 * Una API es un puente de comunicación entre dos programas. En este caso,
 * nuestro navegador (cliente) le pide datos del clima a un servidor remoto (Open-Meteo).
 * 
 * Flujo:
 * 1. El usuario introduce una ciudad (ej. "Madrid").
 * 2. Enviamos una petición HTTP GET con fetch().
 * 3. IMPORTANTE: fetch() NO falla automáticamente si el servidor responde con error 404 o 500.
 *    Es obligatorio comprobar `res.ok` (o `res.status === 200`).
 * 4. Mostramos el resultado y actualizamos la radiografía de las Cabeceras HTTP tanto en éxito como en fallo.
 */

async function consultarClima(ciudad) {
    const inputCiudad = document.getElementById("input-ciudad");
    const resultadoDiv = document.getElementById("resultado-clima");
    const infoHeadersDiv = document.getElementById("info-cabeceras");

    const nombreCiudad = ciudad || (inputCiudad ? inputCiudad.value.trim() : "Madrid") || "Madrid";

    if (!resultadoDiv) return;

    resultadoDiv.innerHTML = `⏳ Conectando con la API para <strong>${nombreCiudad}</strong>...`;
    resultadoDiv.className = "resultado-temperatura cargando";

    try {
        // PASO 1: Geocodificación (Convertir texto "Madrid" a Latitud y Longitud)
        const urlGeo = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nombreCiudad)}&count=1&language=es&format=json`;
        
        const tiempoInicioGeo = performance.now();
        const resGeo = await fetch(urlGeo);
        const latenciaGeo = Math.round(performance.now() - tiempoInicioGeo);

        // Control de errores HTTP en Geocodificación (ej. 400, 500)
        if (!resGeo.ok) {
            resultadoDiv.innerHTML = `❌ Error HTTP en la API de Geocodificación: Código <strong>${resGeo.status} ${resGeo.statusText || 'Error'}</strong>`;
            resultadoDiv.className = "resultado-temperatura error";

            if (infoHeadersDiv) {
                infoHeadersDiv.innerHTML = `
                    <div class="tarjeta-headers tarjeta-headers-error">
                        <strong>⚠️ Radiografía del Fallo HTTP (Geocodificación):</strong>
                        <ul>
                            <li><strong>URL llamada:</strong> <code>${urlGeo}</code></li>
                            <li><strong>Código de Estado:</strong> <span class="badge-status error">${resGeo.status} ${resGeo.statusText || 'Error'}</span></li>
                            <li><strong>Tiempo de respuesta:</strong> ${latenciaGeo} ms</li>
                            <li><strong>Cabecera <code>Content-Type</code>:</strong> <code>${resGeo.headers.get("content-type") || "desconocido"}</code></li>
                            <li><strong>Lección Didáctica:</strong> El servidor respondió con un código de error (${resGeo.status}). En JavaScript, <code>fetch()</code> no lanza excepción en errores 4xx o 5xx: el desarrollador debe verificar explícitamente <code>if (!res.ok)</code>.</li>
                        </ul>
                    </div>
                `;
            }
            return;
        }

        const dataGeo = await resGeo.json();

        // Control de datos vacíos (la llamada fue 200 OK, pero la ciudad no existe)
        if (!dataGeo.results || dataGeo.results.length === 0) {
            resultadoDiv.innerHTML = `❌ No se encontró ninguna ciudad con el nombre "<strong>${nombreCiudad}</strong>". Prueba con otra (ej. Barcelona, Paris, Tokyo).`;
            resultadoDiv.className = "resultado-temperatura error";

            if (infoHeadersDiv) {
                infoHeadersDiv.innerHTML = `
                    <div class="tarjeta-headers tarjeta-headers-warning">
                        <strong>ℹ️ Radiografía del Caso "Dato no encontrado":</strong>
                        <ul>
                            <li><strong>Código HTTP:</strong> <span class="badge-status">200 OK</span> (La petición fue técnicamente exitosa a nivel de red)</li>
                            <li><strong>Cuerpo recibido (JSON):</strong> <code>{"results": []}</code> (La base de datos no tiene ninguna coincidencia con ese texto)</li>
                            <li><strong>Lección Didáctica:</strong> Un código <code>200 OK</code> significa que la comunicación funcionó, pero el contenido de la respuesta puede indicar un resultado vacío de negocio.</li>
                        </ul>
                    </div>
                `;
            }
            return;
        }

        const lugar = dataGeo.results[0];

        // PASO 2: Llamada a la API Meteorológica con las coordenadas obtenidas
        const urlClima = `https://api.open-meteo.com/v1/forecast?latitude=${lugar.latitude}&longitude=${lugar.longitude}&current=temperature_2m&timezone=auto`;
        
        const tiempoInicioClima = performance.now();
        const resClima = await fetch(urlClima);
        const latenciaClima = Math.round(performance.now() - tiempoInicioClima);

        // Control de errores HTTP en la API del Clima (ej. 400, 429, 500)
        if (!resClima.ok) {
            resultadoDiv.innerHTML = `❌ Error en el servidor meteorológico: Código <strong>${resClima.status} ${resClima.statusText || 'Error'}</strong>`;
            resultadoDiv.className = "resultado-temperatura error";

            if (infoHeadersDiv) {
                infoHeadersDiv.innerHTML = `
                    <div class="tarjeta-headers tarjeta-headers-error">
                        <strong>⚠️ Radiografía del Fallo HTTP (Clima):</strong>
                        <ul>
                            <li><strong>URL llamada:</strong> <code>${urlClima}</code></li>
                            <li><strong>Código de Estado:</strong> <span class="badge-status error">${resClima.status} ${resClima.statusText || 'Error'}</span></li>
                            <li><strong>Tiempo de respuesta:</strong> ${latenciaClima} ms</li>
                            <li><strong>Cabecera <code>Content-Type</code>:</strong> <code>${resClima.headers.get("content-type") || "desconocido"}</code></li>
                            <li><strong>Explicación:</strong> La API devolvió un código distinto de 200, por lo que no hay datos climáticos disponibles para mostrar.</li>
                        </ul>
                    </div>
                `;
            }
            return;
        }

        // PASO 3: Convertir el flujo de bytes a objeto JavaScript (JSON)
        const dataClima = await resClima.json();
        const temp = dataClima.current ? dataClima.current.temperature_2m : undefined;
        const unidad = dataClima.current_units ? dataClima.current_units.temperature_2m : "°C";

        if (temp === undefined) {
            throw new Error("El formato del JSON recibido no contiene la propiedad 'current.temperature_2m'");
        }

        // PASO 4: Pintar el dato exitoso en la pantalla
        resultadoDiv.innerHTML = `🌤️ En <strong>${lugar.name} (${lugar.country || ""})</strong> hay actualmente <strong>${temp} ${unidad}</strong>`;
        resultadoDiv.className = "resultado-temperatura exito";

        // PASO 5: Reflexión didáctica sobre las Cabeceras HTTP (Headers) en éxito
        if (infoHeadersDiv) {
            const contentType = resClima.headers.get("content-type") || "application/json";
            infoHeadersDiv.innerHTML = `
                <div class="tarjeta-headers">
                    <strong>📡 Radiografía de la Petición HTTP a la API (Éxito 200 OK):</strong>
                    <ul>
                        <li><strong>URL llamada:</strong> <code>${urlClima}</code></li>
                        <li><strong>Código de Estado:</strong> <span class="badge-status">200 OK</span> (Petición procesada y respondida con éxito)</li>
                        <li><strong>Tiempo de respuesta (latencia):</strong> ${latenciaClima} ms</li>
                        <li><strong>Cabecera <code>Content-Type</code>:</strong> <code>${contentType}</code> (El servidor nos indica que envía texto formateado como JSON en UTF-8)</li>
                        <li><strong>CORS (Seguridad web):</strong> La API incluye <code>Access-Control-Allow-Origin: *</code>, lo que permite que nuestro navegador lea la respuesta sin bloqueos.</li>
                    </ul>
                </div>
            `;
        }

    } catch (error) {
        // Errores de red a bajo nivel (offline, DNS caído, fallo de conexión o CORS bloqueado)
        console.error("Error al consultar la API:", error);
        resultadoDiv.innerHTML = `⚠️ Fallo de conexión o red: ${error.message}`;
        resultadoDiv.className = "resultado-temperatura error";

        if (infoHeadersDiv) {
            infoHeadersDiv.innerHTML = `
                <div class="tarjeta-headers tarjeta-headers-error">
                    <strong>🚨 Error de Red a Bajo Nivel:</strong>
                    <ul>
                        <li><strong>Mensaje de error:</strong> <code>${error.message}</code></li>
                        <li><strong>Causa habitual:</strong> Dispositivo sin conexión a Internet, URL inaccesible o bloqueo por firewall/política CORS del navegador.</li>
                        <li><strong>Lección Didáctica:</strong> A diferencia de los errores HTTP (404, 500) donde sí hay respuesta del servidor, aquí la conexión ni siquiera pudo completarse.</li>
                    </ul>
                </div>
            `;
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    const btnClima = document.getElementById("btn-consultar-clima");
    const inputCiudad = document.getElementById("input-ciudad");

    if (btnClima) {
        btnClima.addEventListener("click", function () {
            consultarClima();
        });
    }

    if (inputCiudad) {
        inputCiudad.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                consultarClima();
            }
        });
    }

    // Consulta inicial automática para Madrid al cargar la página
    consultarClima("Madrid");
});
