/* let nombre = prompt("Ingrese tu nombre")
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre)
console.log(nombre) */

/* let nombre = prompt("Ingrese tu nombre")
for (let i = 0; i <= 10; i++) {
  console.log(i + " " + nombre)
  
} */

// Lucio > 1 
// Lucio > 2
// Lucio > 3
// Lucio > 4
// Lucio > 5 
// Lucio > 6
// Lucio > 7
// Lucio > 8
// Lucio > 9
// Lucio > 10

/* for (let i = 0; i < 10 ; i++) {
  let nombre = prompt("Por favor ingrese tu nombre")
  console.log(nombre)
  
} */

/* for (let i = 1; i <= 10; i++) {
  alert(i);
}
 */

// Solicitamos un valor al usuario
/* let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
}
 */

/* for (let i = 1; i <= 20; i++) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
 */

/* for (let i = 1; i <=10; i++) {
  //Si la variable i es igual 5 interrumpo el for. 
  if(i == 5){
      break;
  }
  alert(i);
} */

/* for (let i = 1; i <= 10; i++) {
  //Si la variable i es 5, no se interpreta la repetición
  if(i == 5){
      continue;
  }
  alert(i);
} */

/* let entrada = prompt("Ingresar un dato");
//Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada.toLowerCase() != "esc" ){
    alert("El usuario ingresó "+ entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
} */

/* let usuarioCorrecta = "Administrador"
let password = "123456"

let usuario = prompt("Ingrese nombre de usuario")
let password_login = prompt("Ingrese su contraseña")

while (usuario !== usuarioCorrecta || password !== password_login) {
  usuario = prompt("Nombre de usuario incorrecto. Ingrese otro usuario")
  password = prompt("Password incorrecta. Ingrese otra password")
} */


/* let repetir = false;
do{
console.log("¡Solo una vez!");
}while(repetir) */

/* let respuesta = prompt("Deseas continuar responde si o no")

do {
  

  if (respuesta == "si") {
    alert("Continuando..")
  }

  else if (respuesta == "no") {
    alert("Saliendo")

  }else{
    respuesta = prompt("Respuesta invalida. Por favor responda si o no")
  }

} while(respuesta !== "si" && respuesta !== "no") */

/* let cerveza = prompt("Ingrese tu cerveza")
switch (cerveza.toLowerCase()) {
  case "brahma":
   alert("Has seleccionado Brahma") 
   break;

   case "corona":
   alert("Has seleccionado Corona") 
   break;

   case "budweiser":
   alert("Has seleccionado Budweiser") 
   break;

   case "imperial":
   alert("Has seleccionado imperial")
   break; 
   

  default:
    alert("Has seleccionado una opcion incorrecta")
    break;
} */

/* let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
} */



