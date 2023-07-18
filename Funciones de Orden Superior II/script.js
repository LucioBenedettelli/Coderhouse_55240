/* let ingreseNumero = Number(prompt("Ingrese su numero")) */

/* function pedirNumero (ingreseNumero) {
    //let resultado = Math.ceil(ingreseNumero)
    //let resultado = Math.floor(ingreseNumero)
    //let resultado = Math.round(ingreseNumero)
    /* let resultado = Math.sqrt(ingreseNumero)
    console.log(resultado)
} */

//pedirNumero(ingreseNumero) */

//Redondea para arriba el Ceil el numero decimal
// Redondea para abajo el numero decimal
//Redondea al decimal mas cercano. Por ejemplo si ponemos 4.5 redondea a 5. Si pones
//4.1 redondea a 4.
//Retorna la raiz cuadrada de un numero. Osea si ponemos 9 nos da, 3. Si ponemos 16 nos da 4 y asi

//let numeroRandom = Number(prompt("Adivine su numero"))

//Con esto generamos numeros aleatorios entre 1 y 5 pero tiene en cuenta todos los decimales.

//numeroRandom = Math.random(numeroRandom) * 5 

//Con esto lo que hacemos es generar numeros enteros de un numero a otro numero es decr por rangos

//Paso a paso.
//numeroRandom = Math.floor(Math.random() * 6) + 1;
/* numeroRandom = (Math.random() * 6)
console.log(numeroRandom)

numeroRandom = Math.floor(numeroRandom)
console.log(numeroRandom)

numeroRandom = numeroRandom + 1
console.log(numeroRandom) */

//Esto no me sirve porque si yo pongo 6 me lo va a redondear a 5.


//Con este codigo generamos un dado establecemos un numero aleatorio que vaya entre 1 y 6. Pero ese numero aleatorio nos devuelve un monton de decimales entonces con el metodo floor lo que hacemos es redondearlo. Pero al redondearlo nos va a dar numeros que van entre el 0 y el 5. Porque acuerdense que Math.Floor baja al numero mas baja. Y con el +1 lo que hacemos es cambiar el rango

/* const generadorNumero = () => {
    return Math.round( Math.random() * 100 )
}

console.log( generadorNumero() ) */

//Con Math.round a diferencia de Math.Floor redondeamos al numero mas cercano que devuelve math.round asi que no tenemos que hacer la suma en Math.floor (por ejemplo)

//Fechas
//console.log( new Date() )

//Nos genera fechas y tiempo actual en este formato

//Fijense que se usa el new del metodo constructor estamos creando un objeto fecha donde podemos ir creando distintas fechas. Que devuelven formato fecha, hora, minutos y segundos.

/* console.log( new Date()) */

/* console.log(new Date(2020, 1, 15)) */
// Sat Feb 15 2020 00:00:00 GMT-0300 (hora estándar de Argentina)

/* const casiNavidad = new Date(2021, 11, 25, 23, 59, 59)
console.log(casiNavidad) */
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

//2021 = año
//11 mes que equivale a diciembre
//25 dia de diciembre
//23 es la hora
//59 los minutos
//59 los segundos.

/* const casiNavidad = new Date("December 25, 2021 23:59:59")
console.log(casiNavidad) */
// Sat Dec 25 2021 23:59:59 GMT-0300 (hora estándar de Argentina)

/* const hoy = new Date("December 17, 2021")

console.log( hoy.toDateString() ) // Fri Dec 17 2021
console.log( hoy.toLocaleString() ) // 17/12/2021 00:00:00
console.log( hoy.toLocaleDateString() ) // 17/12/2021
console.log( hoy.toTimeString() ) // 00:00:00 GMT-0300 (hora estándar de Argentina)

toDateString(): Convierte la parte de fecha del objeto Date en una cadena de texto en inglés, en el formato DDD MMM DD YYYY, donde DDD es el día de la semana (como Mon, Tue, etc.), MMM es el nombre abreviado del mes (como Jan, Feb, etc.), DD es el día del mes y YYYY es el año.

toLocaleString(): Convierte la fecha y la hora del objeto Date a una cadena de texto, utilizando la configuración regional del sistema del usuario. El formato de salida puede variar dependiendo de la configuración regional del usuario. Por ejemplo, puede incluir la fecha y la hora, y el formato de la fecha y la hora también puede variar.

toLocaleDateString(): Similar a toLocaleString(), pero solo convierte la parte de la fecha del objeto Date a una cadena de texto, ignorando la hora. Nuevamente, el formato de la fecha depende de la configuración regional del usuario.

toTimeString(): Convierte la parte de la hora del objeto Date en una cadena de texto, en un formato como HH:MM:SS GMT-XXXX, donde HH:MM:SS es la hora, minutos y segundos, y GMT-XXXX es la zona horaria.

Es importante notar que los métodos toLocaleString(), toLocaleDateString() y toLocaleTimeString() pueden ser influenciados por la configuración de la localización del sistema operativo del usuario, mientras que toDateString() y toTimeString() están estandarizados y no cambiarán de acuerdo a la localización del usuario. */


/* const hoy = new Date("December 17, 2021")

console.log(hoy.getFullYear()) // 2021
console.log(hoy.getMonth()) // 11  (diciembre)
console.log(hoy.getDay()) */ // 5  (viernes

//El primero retorna 2021 porque te retona el año de la variable hoy que es una fecha con año 2021

//El segundo retorna 11 porque te retona el mes de la variable hoy que es una fecha diciembre. Y acuerdense que en JavaScript los meses van de a 0 a 11.

//El tercero retorna 5 porque Diciembre 17 del 2021 justo cayó viernes. Entonces me retorna el día que fue esa fecha.

/* const navidad = new Date("December 25, 2021")
console.log(navidad)
const otraFecha = new Date("December 17, 2021")
console.log(otraFecha)

console.log( navidad - hoy ) // 691200000

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia) // 8
 */





