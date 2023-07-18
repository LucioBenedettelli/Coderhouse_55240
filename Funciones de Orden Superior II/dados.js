// Esta función obtiene la fecha actual en formato DD/M/YYYY.
function obtenerFechaActual() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses en JavaScript comienzan desde 0.
    var anio = fecha.getFullYear();
    return dia + '/' + mes + '/' + anio;
}

// Esta función genera un número aleatorio entre 1 y 6.
function obtenerNumeroAleatorio() {
    return Math.round(Math.random() * 5) + 1;
}

// Esta es la función principal que ejecuta el juego.
function ejecutarJuego() {
    var fechaUsuario = prompt("Ingrese la fecha de hoy en formato DD/M/YYYY");
    if (fechaUsuario !== obtenerFechaActual()) {
        alert("No puedes continuar porque no eres humano");
        return;
    }

    let numeroAleatorio = obtenerNumeroAleatorio();
    let intentos = [];
    let acertado = false;
    
    while (!acertado) {
        var numeroUsuario = parseInt(prompt("Ingrese un número del 1 al 6"));
        if (numeroUsuario === numeroAleatorio) {
            alert("Has adivinado el número");
            acertado = true;
        } else {
            intentos.push(numeroUsuario);
            alert("No has adivinado el número. Tus intentos anteriores fueron: " + intentos.join(", ") + ". Intenta de nuevo.");
        }
    }

    alert("Los números que intentaste fueron: " + intentos.join(", ") + ". El número correcto era: " + numeroAleatorio + ".");
}

// Llamamos a la función principal para ejecutar el juego.
ejecutarJuego();
