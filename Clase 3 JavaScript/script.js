/* let nombreUsuario = prompt("Ingrese tu nombre")

if (nombreUsuario.toLowerCase() == "lucio") {
    alert("Sos Lucio")
} */

/* let unNumero = 5

// Con (unNumero == 5) comparamos si unNumero es igual a 5
if (unNumero == 5){
    console.log("vas a ver este mensaje");
}


// Con (unNumero == 6) comparamos si unNumero es igual a 6
if (unNumero == 6){ 
    console.log("no vas a ver este mensaje");
}
 */

//let numeroUno = Number(prompt("Ingrese un numero"))

//"0" == 0 > true 
// "0" === 0 > false
// 0 === 0 > true

/* if (numeroUno == 0) {
    alert("Puedes ingresar al sistema")
}
 */
//Diferencia entre == y ===. El === evalua valor y tipo de dato.


//let unColor = "Azul"

/* // Con (unColor == "Rojo") comparamos si unColor es igual "Rojo"
if (unColor == "Rojo"){
    console.log("el color es Rojo");
}else{
//La instrucción se interpreta cuando unColor NO es "Rojo"
    console.log("el color NO es Rojo");
} */

/* let nota = Number(prompt("Ingrese una nota"))

if (nota >= 6) {
    alert("Aprobado")
}else{
    alert("Desaprobado")
}
 */

/* let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario == "") {
    alert("No ingresaste el nombre de usuario");
}
else {
    alert("Nombre de usuario ingresado " + nombreUsuario);
} */

/* let precio = 100.5;

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
} */

/* let cerveza = prompt("Comercializamos Brahma, Quilmes, Budweiser, Heineken y Stella")

if (cerveza == "Brahma") {
    alert("Has seleccionado Brahma")
}

else if (cerveza == "Quilmes") {
    alert("Has seleccionado Quilmes")
}

else if (cerveza == "Budweiser") {
    alert("Has seleccionado Budweiser")
}

else if (cerveza == "Heineken") {
    alert("Has seleccionado Heineken")
}

else if (cerveza == "Stella") {
    alert("Has seleccionado Stella")

}else{
alert("No vendemos ese tipo de Cerveza")
} */

/* let edad = prompt("Ingrese tu edad")
let esEstudiante = true 

if (edad >= 18) {
    alert("Eres mayor de edad")
    if (esEstudiante) {
        alert("Eres mayor de edad y eres estudiante")
    }else{
        alert("No eres mayor de edad pero no eres estudiante")
    }
}else{
    alert("Eres menor de edad")
}
 */

/* let numero   = 10;
let esMayor5 = (numero > 5); // su valor sera true
console.log(esMayor5)

if (esValida) {
    alert("Es boolean true");
}
 */

//Diferencias entre OPERADOR AND Y OR
// AND AMBAS CONDICIONES TIENEN QUE SER VERDADERAS PARA QUE SE CUMPLAN
// OR BASTA CON UNA VERDADERA PARA QUE LA CONDICION SE CUMPLA.

/* let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Nombre: "+nombreIngresado +"\nApellido: "+apellidoIngresado); 
}else{
    alert("Error: Ingresar nombre y apellido");
} */

/* let usuario = prompt("Ingresar usuario")
let password = prompt ("Ingresar password") */

/* if ((usuario == "Lucio") && (password == "123456")) {
alert("Has ingresado al sistema")
}else{
    alert("No podes ingresar al sistema")
} */

/* if ((usuario == "Lucio") || (password == "123456")) {
    alert("Has ingresado al sistema")
    }else{
        alert("No podes ingresar al sistema")
    } */

/* let recuperarPassword = prompt("Para recuperar la contraseña ingresa algun dato valido")

if ((recuperarPassword == "lucio.benedettelli@hotmail.com") || (recuperarPassword == 11495000)) {
alert("Se ha enviado notificacion para renovar credenciales")    
}else{
    alert("Sus datos no son correctos")
} */


/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado == "ANA") || (nombreIngresado =="ana") || nombreIngresado == "Ana"){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
} */

/* let nombreIngresado_dos = prompt("Ingresar nombre");

if(nombreIngresado_dos.toLowerCase() == "ana"){
    alert("El nombre ingresado es Ana"); 
}else{
    alert("El nombre ingresado NO ES Ana"); 
} */

/* let nombreIngresado   = prompt("Ingresar nombre");

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("Hola Ema"); 
}else{
    alert("Error: Ingresar nombre valido");
}
 */


/* let usuario = prompt("Necesita crear un usuario. Por favor escriba un nombre valido")
let password = prompt("Necesita crear una password. Por favor escriba una")

if (usuario ! "" && password != "") {
    let resultado = confirm("Deseas crear la cuenta?")
    console.log(resultado)

}else{
    alert("Tienes que rellenar los campos")
}

let login = prompt("Por favor ingrese su usuario para conectarse")
let login_ps = prompt ("Por favor ingrese su password para conectarse")

if (usuario == login && password == login_ps) {
    alert("Hola" + " " + usuario + " " + "bienvenido/a a la plataforma")
}else{
    alert("No puedes ingresar plataforma")
} */

/* let color = "azul";
let objeto = "silla";

if (!(color == "rojo" && objeto == "mesa")) {
	alert("Se cumple la condición.");
}


 */