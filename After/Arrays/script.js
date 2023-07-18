/*  Los arrays en JavaScript son como cajas que pueden contener varios elementos relacionados entre sí. Puedes pensar en ellos como una lista de cosas que quieres guardar juntas. Cada elemento dentro del array tiene una posición específica, que se llama índice.

Por ejemplo cuando vamos al Supermercado tenemos una lista de elementos a comprar que si bien no estan conectados, se relacionan entre si. Se relacionan entre si porque son los productos que necesitas para tu hogar, por ejemplo.

let supermercado = ["Azucar", "Pan", "Leche", "Yerba", "Yogurt"]

Fijense la estructura. Declaramos una variable con un nombre le asignamos el = y luego ponemos entre corchetes los nombres que queremos que esten en nuestra lista. Recordar que si es tipo de Dato String tendra que ir con comillas. Y si es un numero simplemente no hace falta. Lo que si observen que la separación de los elementos se separan con comas.

Otro ejemplo de Array podría ser una lista de frutas. Vamos a una verduleria a comprar frutas entonces necesitamos una lista de elementos.

let frutas = ["manzana", "Banana", "naranja"];
console.log(frutas)

Es importante remarcar que cada Array a diferencia de los objetos tiene su indice. Que significa esto que tienen un valor asignado según la posición del elemento. Por ejemplo en el ejemplo de las frutas Manzana sería el indice 0, banana sería el uno y naranja sería 2. Recordando que siempre los Arrays y los indices arrancan con el indice 0 y no con 1. Es decir el orden es por posición e indice.

Puedes acceder a los elementos de un array utilizando su índice. Por ejemplo, si quieres obtener el segundo elemento del array "frutas", puedes hacerlo de la siguiente manera: 

var segundoElemento = frutas[1];  // "Banana"
console.log(segundoElemento)

Lo mismo con la lista del Supermercado. Si queremos acceder al valor de Leche. Bastaría con contar los indices para llegar a ese valor
                      
                        0       1      2         3        4
let supermercado = ["Azucar", "Pan", "Leche", "Yerba", "Yogurt"]
let elemento_dos = supermercado[2] // Leche */

/* Tambien si quisieramos podríamos modificar algun elemento del array original. Por ejemplo si nos arrepentimos y no queremos comprar pan y queremos comprar facturas. Lo que podriamos hacer es reemplazar ese valor del array por el indice 

supermercado[1] = "Facturas";
console.log(facturas) */

//Lo mismo podriamos hacer si queremos hacer lo mismo de los productos de la verduleria. Bastaria con llamar el nombre de la variable y entre corchetes el indice que corresponde a ese valor. Por ejemplo si queremos sacar manzana y poner frutilla. Bastaría con algo asi.

/* frutas[0] = "frutilla"
console.log(frutas) */

//El array es una parte fundamental en la estructura de datos ya que con ellos podremos hacer multiples operaciones. Por ejemplo en un carrito de compras de un e-commerce los productos almacenados se almacenan dentro de un array. 

//Los arrays pueden y deber ser iterables. Es decir que tienen que ser recorridos a través de un ciclo. Por lo general se hace de un ciclo for. Esto es porque nosotros por lo general vamos a querer acceder a la totalidad de los elementos y por supuesto manipularlos.

//Ejemplo de la Diapo

/* const numeros = [1, 2, 3, 4, 5];
for (let index = 0; index < 5; index++) {
    alert(numeros[index]);
}
 */

//Si queremos hacer lo mismo con las frutas. Podríamos usar la propiedad .length

//let frutas = ["manzana", "Banana", "naranja"];


//La propiedad .length me devuelve la totalidad de elementos que tengo en el Array. De esta manera si tengo 5 elementos hará 5 iteraciones, si tengo 10 hara 10 iteraciones, si tengo 50 hará 50 iteraciones y así sucesivamente. Es importante que el .length es una propiedad. No es un METODO.

//let frutas = ["manzana", "Banana", "naranja"];

/* for (let index = 0; index < frutas.length; index++) {
    console.log(frutas.length)
    alert(frutas[index]);
}
 */

//Pero que pasa con el frutas[index]. Dado que frutas es mi array original donde tendré que hacer toda mi iteracion. Index es mi indice. Por lo tanto me imprimira todos los valores del array frutas. Porque primero pasará por manzana, despues por banana y despues por naranja. Esto va acompañado de la propiedad .length ya que con el .length le estamos indicando que haga un loop de 3 elementos de la variable fruta. Donde manzana tendra indice 0, banana indice 1, y naranja indice 2.

//Con numeros podríamos hacer lo siguiente

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i= 0; i < numeros.length; i++) {
    alert(numeros[i]);
} */

//Si queremos agregar más elementos podemos agregar mas elementos. Entonces con el length y usando numero[i] recorrerá el array en su totalidad.

//Para agregar elementos tambien tenemos metodos para hacer eso. Uno de ellos es el metodo push. Con push (o pushear) lo que podemos hacer es agregar elementos a nuestro array original. Sin necesidad de modificar alguno.

//Por ejemplo antes haciamos esto 


//let frutas = ["manzana", "Banana", "naranja"];
//frutas[0] = "Frutilla"

//Pero eso solamente nos servirá para reemplazar valores dentro de un Array. Lo que nosotros queremos es agregar mas frutas a nuestro array. Y como dijimos para eso usaremos el push. Sintaxis del Push.

/* let cervezas = ["Quilmes", "Budweiser", "Brahma", "Stella"] */
//Si queremos agregar mas productos podriamos agregar la sentencia Push

/* cervezas.push("Corona")
console.log(cervezas)
 */
//Veremos la cerveza Corona agregado a nuestro array original. Vean que la corona se agrega al final del Array y no al inicio. El push lo que hace es justamente eso. Agrega un elemento al final de tu lista.

//Si lo que queremos hacer es agregar los productos al principio del Array deberíamos usar otra sentencia. 


/* let cervezas_copy = ["Quilmes", "Budweiser", "Brahma", "Stella"]

cervezas.unshift("Miller")
console.log(cerveza)
 */
//Con un unshift a diferencia del push lo que hacemos es agregar elementos al principio del array y no al final. Recuerden que pueden agregar la cantidad de elementos que quieran según la condición. De hecho podrían hacer una función por ejemplo que les permita pushear o usar un unshift para agregar muchos elementos.

//Tambien podriamos necesitar quitar elementos en vez de agregarlo. Para eso tenemos dos sentencias. Pop y shift.

//Con Pop lo que haremos es sacar el ultimo elemento del array. Por ejemplo en nuestro ejemplo de Cervezas:

/* 
let cervezas_copy = ["Quilmes", "Budweiser", "Brahma", "Stella"]

cervezas.pop()
console.log(cerveza) */

//Lo que haremos es sacar el elemento Stella. Es importante que a diferencia de los metodos de agregado con pop solo es necesario invocar al metodo es decir ponerlo entre parentesis.

//Con shift es al reves. Lo que hacemos con un Shift es eliminar el primer elemento de la lista.

/* let cervezas_copy_two = ["Quilmes", "Budweiser", "Brahma", "Stella"]

cervezas.shift() //En este caso sacaremos la Quilmes.
console.log(cerveza)
 */

// Los arrays nos permiten usar multiples metodos que veremos a lo largo del curso. Gracias a eso podremos sacar toda la potencialidad a esta estructura de datos.

//Si queremos eliminar dos elementos por ejemplo podriamos usar el metodo Splice.

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
nombres.splice(1, 2)

console.log(nombres)
// ['Rita', 'Ana', 'Vanesa'] */

/* const pizzas = ["Muzza", "Napolitana", "Roquefort", "Fugazzeta", "Anchoas"] */
//Contamos los indices y borramos lo que necesites.

/* pizzas.splice(2, 4)
console.log(pizzas)
 */
//En este caso va a borrar del elemento 2 al elemento 4. Por lo tanto nos quedamos con Muzza y Napolitana.

//Tambien lo que podemos hacer es convertir un Array a un String separado por comas

//Por ejemplo tenemos un Array de frutas.

/* let fruta_uno = ["Banana", "Pera", "Manzana"]


let arrayUnidos = fruta_uno.join(",") */


//Tambien lo que podemos hacer es unir dos Arrays. Para eso utilizaremos el metodo Concat.

/* let clubes = ["River", "Boca", "Independiente"]
let clubes_dos = ["Racing", "San Lorenzo", "Estudiantes"]
let resultado = clubes.concat(clubes_dos)
console.log(resultado) */

//Tambien podemos hacer copia de los arrays a través del metodo Slice.

//Si tenemos el siguiente Array

/* let libros = ["Harry Potter", "Animales Fantásticos", "Narnia", "Spiderman"];
let libros_modificados = libros.slice(0, 2);
console.log(libros_modificados); */

//Es importante que tenes que especificarle un principio y un final. En este caso el principio del indice el 0. El final tiene que ser un numero más ya que es exclusivo de este metodo.

//Por ejemplo si queremos extraer Narnia y Spiderman

/* let libros_dos = ["Harry Potter", "Animales Fantásticos", "Narnia", "Spiderman"];
let libros_modificados_dos = libros.slice(2, 4);
console.log(libros_modificados_dos); */


/* const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// masculinos contiene ['Pedro','Miguel']
console.log(masculinos)
 */

//Metodo IndexOf
/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

console.log( nombres.indexOf('Rita') ) // ⇒ 0
console.log( nombres.indexOf('Ana') ) // ⇒ 3
console.log( nombres.indexOf('Julieta') ) // ⇒ -1
 */

/* let libros = ["Harry Potter", "Animales Fantásticos", "Narnia", "Spiderman"];
console.log( libros.indexOf('Harry Potter') ) // ⇒ 0
console.log( libros.indexOf('Narnia') ) // ⇒ 3
console.log( libros.indexOf('Spiderman') )
console.log( libros.indexOf('Ironman') ) // SI no existe te dirá que es -1 */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

console.log( nombres.includes('Rita') ) // ⇒ true
console.log( nombres.includes('Miguel') ) // ⇒ true
console.log( nombres.includes('Julieta') ) // ⇒ false */

/* Esto se usa muchisimo para cuando queremos chequear que un email es valido por ejemplo.chequear. Es decir si el email contiene un @ es valido. */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
nombres.reverse()
console.log( nombres ) 
// ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita'] */


/* var productos = [];

function agregarProducto() {
  var producto = prompt("Ingrese el nombre del producto:");

  if (producto !== null && producto !== "") {
    productos.push(producto);
    console.log("Producto agregado: " + producto);
  } else {
    console.log("Ingrese un nombre de producto válido.");
  }
}

while (true) {
  agregarProducto();

  var agregarMas = confirm("¿Desea agregar otro producto?");

  if (!agregarMas) {
    break;
  }
}

console.log("Productos ingresados:");
console.log(productos);
 */

/*  let productos = [
    {
        producto: "Leche",
        precio: 500,
        stock: 100
    },

    {
        producto: "Harina",
        precio: 500,
        stock: 100
    },

    {
        producto: "Coca Cola",
        precio: 500,
        stock: 100
    },

    {
        producto: "Pepsi",
        precio: 500,
        stock: 100
    }
]  */

/* for (let index = 0; index < productos.length; index++) {
    const element = productos[index];
    console.log(element)
}  */

/* for (const producto of productos) {
  console.log(producto.producto);

} */

/* let array = [];

class Clubes {
  constructor(club, titulos, colores) {
    this.club = club;
    this.titulos = titulos;
    this.colores = colores;
  }

  soy_bostero() {
    if (this.club === "Boca" && this.titulos === 74 && this.colores === "Azul y Oro") {
      let mensaje = "Eres de " + this.club + ", el mejor club del país";
      console.log(mensaje)
      return mensaje
    } else {
      return null;
    }
  }

  soy_river() {
    if (this.club === "River" && this.titulos === 69 && this.colores === "Rojo y Blanco") {
      let mensaje = "Eres de " + this.club + ", el mejor club del país";
      console.log(mensaje)
      return mensaje
    } else {
      return null
    }
  }
}

const club = prompt("Ingresa el nombre del club: ");
const titulos = parseInt(prompt("Ingresa la cantidad de títulos: "));
const colores = prompt("Ingresa los colores del club: ");

const miClub = new Clubes(club, titulos, colores);


const resultadoBostero = miClub.soy_bostero();
const resultadoRiver = miClub.soy_river();

if (resultadoBostero) {
  array.push(miClub);
}

if (resultadoRiver) {
  array.push(miClub);
}

console.log(array); */


 let productos = [
  {
    id: 1,
    nombreProducto: "Pepsi",
    precio: 500,
  },

  {
    id: 2,
    nombreProducto: "Coca Cola",
    precio: 600,
  },

  {
    id: 3,
    nombreProducto: "Sprite",
    precio: 300,
  },

  {
    id: 4,
    nombreProducto: "Seven Up",
    precio: 450,
  },

  {
    id: 5,
    nombreProducto: "Fanta",
    precio: 450,
  },

  {
    id: 6,
    nombreProducto: "Coca Zero",
    precio: 450,
  }
]


let producto = null;
let carrito = [];

 function buscarProducto() {
  let seleccion = prompt("Ingrese el nombre del producto que desea seleccionar: (Pepsi, Coca Cola, Sprite, Seven Up, Fanta, Coca Zero)");

  for (let i = 0; i < productos.length; i++) {
    if (productos[i].nombreProducto.toLowerCase() === seleccion.toLowerCase()) {
      producto = productos[i];
      break;
    }
  }
}

function agregarCarrito() {
  if (producto) {
    let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
    carrito.push({
      producto: producto.nombreProducto,
      cantidad: cantidad,
      subtotal: producto.precio * cantidad
    });
  } else {
    alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
  }
}

function confirmarCarrito() {
  while (true) {
    buscarProducto();
    agregarCarrito();

    if (!confirm("¿Desea agregar otro producto al carrito?")) {
      break;
    }
  }
}

function calcularTotal() {
  let total = 0;

  console.log("Carrito de compras:");
  for (let item of carrito) {
    total += item.subtotal;
    console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
  }

  console.log(`Total a pagar: ${total}`);
}

function vaciarCarrito() {
  carrito = [];
  console.log("El carrito ha sido vaciado.");
}

confirmarCarrito();

if (carrito.length > 0) {
  if (confirm("¿Desea vaciar el carrito?")) {
    vaciarCarrito();
  }
}

calcularTotal(); 


