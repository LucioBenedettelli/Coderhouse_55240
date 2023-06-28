/* //Declaramos la funcion
function caminar() {
  console.log("Llegue a casa despues de caminar. Estoy muy cansado")
}

function cocinar() {
  console.log("La hamburguesa esta lista")
}

function ducha() {
  console.log("Me bañé. Estoy limpio")
}

function limpiar() {
  console.log("Hoy vienen visitas. Asi que limpie toda la casa")
}

//Invocacion o ejecucion de la función
caminar() */

/* function saludar() {
  console.log("¡Hola estudiantes!");
}

saludar()

function saludar() {
  console.log("¡Hola estudiantes de esta comision!");
}

saludar() */

/* function solicitarClub() {
  let club = prompt("Ingrese tu cuadro de futbol")
  alert("El club ingresado es " + club)
}

solicitarClub()
solicitarClub()
solicitarClub()
solicitarClub()
solicitarClub() */

/* let resultado;
let num1;
let num2; */

/* function calculadora() {
  let operacion = prompt("Que operacion desear realizar? (+), (-) (*) (/)")
  switch (operacion) {
    case "+":
      num1 = parseFloat(prompt("Ingrese el primer numero"))
      num2 = parseFloat(prompt("Ingrese el segundo numero"))
      resultado = num1 + num2
      alert(resultado)
      break;

    case "-":
      num1 = parseFloat(prompt("Ingrese el primer numero"))
      num2 = parseFloat(prompt("Ingrese el segundo numero"))
      resultado = num1 - num2
      alert(resultado)
      break;
    case "*":
      num1 = parseFloat(prompt("Ingrese el primer numero"))
      num2 = parseFloat(prompt("Ingrese el segundo numero"))
      resultado = num1 * num2
      alert(resultado)
      break;
    case "/":
      num1 = parseFloat(prompt("Ingrese el primer numero"))
      num2 = parseFloat(prompt("Ingrese el segundo numero"))
      resultado = num1 / num2
      alert(resultado)
      break;

    default:
      alert("Operacion invalida")
      break;
  }
}

calculadora() */

/* function sumar() {
  let numero_uno = Number(prompt("Ingrese primer numero"))
  let numero_dos = Number(prompt("Ingrese segundo numero"))
  alert(numero_uno + numero_dos)
}

function restar() {
  let numero_uno = Number(prompt("Ingrese primer numero"))
  let numero_dos = Number(prompt("Ingrese segundo numero"))
  alert(numero_uno - numero_dos)
}

function multiplicar() {
  let numero_uno = Number(prompt("Ingrese primer numero"))
  let numero_dos = Number(prompt("Ingrese segundo numero"))
  alert(numero_uno * numero_dos)
}

function dividir() {
  let numero_uno = Number(prompt("Ingrese primer numero"))
  let numero_dos = Number(prompt("Ingrese segundo numero"))
  alert(numero_uno / numero_dos)
}

function calculadora() {
  let operacion = prompt("Que operacion desear realizar? (+), (-) (*) (/)")
  switch (operacion) {
    case "+":
      sumar()
      break;

    case "-":
      restar()
      break;

    case "*":
      multiplicar()
      break;

    case "/":
      dividir()
      break;

    default:
      break;
  }
}

calculadora() */

/* function sumar(x, y) {
  console.log(x + y) // 10 + 20
}

sumar(10,20) */

/* let nombre = prompt("Ingrese tu nombre")
let apellido = prompt("Ingrese tu apellido")

function nombreCompleto (nombre, apellido) {
  alert("Tu nombre completo es: " + nombre + " " + apellido)
}

nombreCompleto("Lucio", "Benedettelli") */

//Declaración de variable para guardar el resultado de la suma
/* let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje)
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            */ 
//mostrar(resultado); 

/* function suma(num1, num2) {
  return num1 + num2
}

let resultado = suma(10,30)
console.log(resultado) */

/* function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
      case "+":
          return primerNumero + segundoNumero;
          
      case "-":
          return primerNumero - segundoNumero;
          
      case "*":
          return primerNumero * segundoNumero;
          
      case "/":
          return primerNumero / segundoNumero;
          
      default:
          return 0;
          
  }
}
console.log(calculadora(10, 5, "*")); */

/* for (let index = 0; index < 10; index++) {
  console.log(index)
  
}

console.log(index) */

/* let globalVariable = "Variable Global"

function localScopeExample() {
  let localVariable = "Variable Local"
  console.log(localVariable)
  console.log(globalVariable)
}

localScopeExample()
console.log(globalVariable)
console.log(localVariable)
 */

/* let resultado = 0

function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(5,6);
//Se puede acceder a la variable resultado porque es global
console.log(resultado); */

/* function sumar(primerNumero, segundoNumero) {
  let resultado = primerNumero + segundoNumero;
}
//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado); */

/* let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder” */

/* function exampleVar () {
  if (true) {
    var x = 10
    console.log(x)
  }
  console.log(x)
}

exampleVar()
console.log(x)
 */

/* function exampleLet() {
  if (true) {
    let y = 20
    console.log(y)
  }
  console.log(y)
}

exampleLet()
console.log(y) */

/* var x = 10
var x = 20

console.log(x) */

/* let x = 10
x = 20

console.log(x) */

//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
/* const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) ) */


/* const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ;
console.log( suma(15,20) )
console.log( resta(20,5) )
 */

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)

