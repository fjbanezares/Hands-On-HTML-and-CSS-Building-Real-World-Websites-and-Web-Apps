/**
 * Proyecto Web Colaborativo 2026 - Universidad Francisco de Vitoria
 * Controlador de audio interactivo (Equipo 3)
 * 
 * Explicación didáctica:
 * 1. Esperamos al evento 'DOMContentLoaded' para que el HTML ya exista en memoria.
 * 2. Obtenemos referencias al <audio> y al <button> por su ID único.
 * 3. Comprobamos la propiedad .paused:
 *    - Si está pausado: llamamos a .play() y cambiamos el botón al modo Pausa.
 *    - Si está sonando: llamamos a .pause() y cambiamos el botón al modo Play.
 */

document.addEventListener("DOMContentLoaded", function () {
    const miAudio = document.getElementById("cancion-clase");
    const botonMusica = document.getElementById("btn-toggle-musica");

    if (botonMusica && miAudio) {
        botonMusica.addEventListener("click", function () {
            // Comprobamos si el audio está en pausa
            if (miAudio.paused) {
                miAudio.play()
                    .then(function () {
                        // Cambiamos el aspecto visual del botón
                        botonMusica.classList.add("reproduciendo");
                        botonMusica.innerHTML = '<span class="icono">⏸️</span> <span class="texto">Pausar Canción</span>';
                    })
                    .catch(function (error) {
                        console.warn("Reproducción impedida por la política del navegador:", error);
                    });
            } else {
                // Si estaba sonando, lo pausamos
                miAudio.pause();
                botonMusica.classList.remove("reproduciendo");
                botonMusica.innerHTML = '<span class="icono">▶️</span> <span class="texto">Reproducir Canción</span>';
            }
        });
    }
});
