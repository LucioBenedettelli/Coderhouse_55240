// Evento click

/* let boton = document.getElementById("btnPrincipal")
boton.addEventListener("click", respuestaClick)
function respuestaClick() {
    console.log("Respuesta evento");
}
 */

/* let boton = document.getElementById("btnPrincipal")
      boton.onclick = () =>{console.log("Respuesta 2")}
 */

//Evento onMouseMove y Click.

/*       let boton = document.getElementById("btnMain")
      boton.onclick = () => {console.log("Click")}
      boton.onmousemove = () => {console.log("Move")}
       */

//Eventos de teclado
/* let input1 = document.getElementById("nombre")
let input2 = document.getElementById("edad")
input1.onkeyup = () => { console.log("keyUp") }
input2.onkeydown = () => { console.log("keyDown") } */

//Evento Change

/* let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
input1.onchange = () => {console.log("valor1")};
input2.onchange = () => {console.log("valor2")} */

//Evento input. Registra todos los movimientos que hacemos con el teclado
/* let input1  = document.getElementById("nombre")
input1.addEventListener("input", () => {
     console.log(input1.value)
}) */

/* let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario); */

/* function validarFormulario(e){
    console.log(e)
    e.preventDefault();
    console.log("Formulario Enviado");    
}
 */


//Por defecto los navegadores se recargan. Es por eso que le pasamos a validarFormulario la palabra e y despues llamamos a la propiedades preventDefault


/* let miFormulario  = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    //Cancelamos el comportamiento del evento
    e.preventDefault();
    //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target
    console.log(formulario)
    //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value); 
    //Obtengo el valor del segundo hijo <input type="number"> 
    console.log(formulario.children[1].value);  
} */

/* Cuando haces clic en un botón o realizas alguna acción en una página web, ocurre un evento. event.target es una forma de identificar el elemento en el que se produjo ese evento.

Imagina que estás en una habitación con varios objetos, como una mesa, una silla y una lámpara. Si tocas un objeto en particular, puedes saber cuál es ese objeto. En JavaScript, cuando ocurre un evento, event.target te permite saber qué elemento específico fue "tocado" o "activado" durante ese evento en la página web.

Por ejemplo, si tienes varios botones en tu página y quieres saber cuál de ellos fue clickeado, puedes usar event.target para obtener esa información. */

/* document.addEventListener('click', function(event) {
    console.log('Se hizo clic en:', event.target);
  }); */

/*   En este caso, hemos agregado un controlador de eventos 'click' a todo el documento (la página web). Cuando haces clic en cualquier lugar de la página, el controlador de eventos se ejecuta y muestra en la consola el elemento en el que se hizo clic (event.target).

En resumen, event.target es una forma de identificar el elemento específico en el que se produjo un evento, como un clic. Te permite saber qué objeto o elemento fue "tocado" o "activado" durante ese evento en la página web. */
  

/* Cuando se produce un evento, JavaScript crea un objeto de evento que contiene información sobre el evento en sí y el elemento donde ocurrió. Este objeto de evento se pasa automáticamente como argumento a la función de controlador de eventos asociada.

Aquí es donde entra e.target. e.target es una propiedad del objeto de evento que hace referencia al elemento específico en el que ocurrió el evento. Puede ser útil cuando deseas realizar alguna acción o modificar ese elemento específico en respuesta al evento.

Por ejemplo, supongamos que tienes un botón en tu página web y deseas cambiar su color cuando se hace clic en él. Puedes utilizar un controlador de eventos en JavaScript para lograr esto. Aquí tienes un ejemplo básico: */

/* En resumen, e.target te permite acceder al elemento específico en el que ocurrió un evento, lo que te permite realizar acciones específicas en respuesta a ese evento */

/* const button = document.getElementById('myButton');

button.addEventListener('click', function(e) {
  e.target.style.backgroundColor = 'red';
}); */


//Primer ejemplo de Event.Target
/* var elementoClicado = document.getElementById("elemento-clicado");

    // Añadimos listeners de evento a los botones
    var botones = document.querySelectorAll("button");
    botones.forEach(function(boton) {
      boton.addEventListener("click", function(event) {
        // Mostramos el elemento en el que se hizo clic usando event.target
        elementoClicado.textContent = event.target.id;
      });
    }); */

    //Segundo ejemplo de Event Target

/*     var button = document.getElementById('myButton');
    var counter = document.getElementById('counter');

    // Inicializamos el contador
    var clickCount = 0;

    // Función que se ejecuta al hacer click en el botón
    function handleClick(event) {
      // Incrementamos el contador de clicks
      clickCount++;

      // Actualizamos el texto del párrafo del contador
      counter.textContent = clickCount + ' clicks';

      // Imprimimos el elemento objetivo (button) en la consola
      console.log(event.target);
    }

    // Agregamos el evento click al botón y llamamos a la función handleClick
    button.addEventListener('click', handleClick); */