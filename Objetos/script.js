/* En programación, un objeto en JavaScript es como un recipiente especial que puede almacenar información y funciones relacionadas en un solo lugar. Puedes pensar en un objeto como una caja que guarda diferentes cosas.

Imagina que tienes un objeto llamado "coche". Dentro de este objeto, puedes guardar información sobre el coche, como su color, modelo y año de fabricación. Estos son los datos del coche. También puedes guardar funciones dentro del objeto, como "arrancar el coche" o "detener el coche". Estas funciones te permiten realizar acciones relacionadas con el coche.

El objeto te permite organizar la información y las funciones relacionadas de una manera estructurada y fácil de usar. Puedes acceder a la información y ejecutar las funciones dentro del objeto utilizando la sintaxis adecuada.

Por ejemplo, si quieres saber el color del coche, puedes acceder a la propiedad "color" del objeto coche. Si quieres arrancar el coche, puedes llamar a la función "arrancar" dentro del objeto coche.

Los objetos en JavaScript son una herramienta muy útil para organizar y manipular datos y funciones relacionadas en tu programa. Puedes crear tantos objetos como necesites y utilizarlos para representar diferentes cosas en tu código. */

//Sintaxis: Declaramos la variable. Por buenas practicas se recomienda asignarlo por const. Asignamos llaves y dentro de las llaves llamamos a las propiedades. Es decir las caracteristicas del objeto. En nombre podría ser la edad, el domicilio y demás.

//Esta sintaxis se llama objeto literal.


/* let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

console.log(persona1)
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.calle) */


/* let auto = { 
    marca: "Fiat", 
    color: "Rojo", 
    km: "0 km" 
} 

console.log(auto)
console.log(auto.marca)
console.log(auto.color)
console.log(auto.km)  */


/* let club = {
    nombre: "River Plate",
    color: "Rojo y Blanco",
    titulos: 69
}

console.log(club)
console.log(club.nombre)
console.log(club.titulos)
console.log(club.titulos) */

//Otra forma de obtener valores de las propiedades del objeto es por medio de la sintaxis corchetes ([]).En vez de poner el punto simplemente se asigna los corchetes para acceder a la información.

/* let nombre = "Homero";
let edad   = 39;
let calle  = "Av. Siempreviva 742";
// Los variables anteriores entran relacionados entre sí, entonces mejor usamos un objeto literal
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

console.log(persona1)
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1["calle"])
 */
/* let auto = { 
    marca: "Fiat", 
    color: "Rojo", 
    km: "0 km" 
} 

console.log(auto)
console.log(auto["marca"])
console.log(auto["color"])
console.log(auto["km"])

let club = {
    nombre: "River Plate",
    color: "Rojo y Blanco",
    titulos: 69
}

console.log(club)
console.log(club["nombre"])
console.log(club["color"])
console.log(club["titulos"]) */

/* La sintaxis del punto se utiliza cuando sabemos el nombre exacto de la propiedad a la que queremos acceder. Funciona de manera similar a decir "objeto.propiedad". Por ejemplo, si tenemos un objeto llamado "persona" y queremos acceder a su propiedad "nombre", podemos hacerlo utilizando la sintaxis del punto de esta manera: "persona.nombre". Esto nos devolverá el valor almacenado en la propiedad "nombre" del objeto "persona".

La sintaxis de corchetes, por otro lado, se utiliza cuando el nombre de la propiedad está almacenado en una variable o cuando el nombre de la propiedad contiene caracteres especiales o espacios. En lugar de escribir directamente el nombre de la propiedad después del punto, usamos corchetes y colocamos el nombre de la propiedad dentro de los corchetes. Por ejemplo, si tenemos una variable llamada "propiedad" que contiene el valor "nombre" y queremos acceder a la propiedad correspondiente en el objeto "persona", podemos hacerlo utilizando la sintaxis de corchetes de esta manera: "persona[propiedad]". Esto nos devolverá el valor almacenado en la propiedad "nombre" del objeto "persona".

La principal diferencia entre ambas sintaxis es que la del punto se utiliza cuando conocemos el nombre de la propiedad de antemano y podemos escribirlo directamente, mientras que la de corchetes se utiliza cuando necesitamos acceder a una propiedad dinámicamente usando una variable.

En resumen, la sintaxis del punto se utiliza para acceder a propiedades conocidas directamente, mientras que la sintaxis de corchetes se utiliza cuando el nombre de la propiedad está almacenado en una variable o contiene caracteres especiales. */

//Si queremos modificar las propiedades de un objeto podriamos hacer lo siguiente

/* const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}

console.log(persona1)                   
persona1["nombre"] = "Marge"
persona1["edad"] = 36
console.log(persona1["nombre"])
console.log(persona1["edad"])
console.log(persona1)

 */

/* 
const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"}
console.log(persona1)                   
persona1.nombre = "Marge"
persona1.edad = 36 
console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1)

//Otra forma de hacer un objeto es a través de funciones constructoras. Las funciones constructoras son funciones que se utilizan para crear objetos. Es una sintaxis vieja del lenguaje que aun se sigue usando.

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
console.log(persona1)
console.log(persona2)

//El this es un termino muy amplio en Programación. Que veremos más adelante en detalle pero en resumen utilizamos la palabra reservada this para crear una propiedad del objeto. Fijense que la funcion constructora es muy similar a una funcion tradicional. 

//Usamos la palabra reservada Function seguido del nombre del objeto. En este caso la palabra del objeto siempre comienza con una letra mayuscula. Y en los parametros asignamos las propiedades que queremos que tenga nuestro objeto

//Posteriormente lo que usamos es el this.nombre para ir creando nuestro objeto y le asignamos el nombre (que coincide con el parametro pasando en la funcion) para ir creando las propiedades.

//Con esto tendriamos las propiedades del objeto pero OJO. Todavia nuestro objeto no estaría creado.

//En las siguientes lineas utilizamos la siguiente sintaxis.

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

//Lo que hacemos aca es declarar una variable (donde se almacenerá todo nuestro objeto creado) utilizamos la palabra reservada new para crear el objeto. Y en los parentesis lo reemplazamos por los valores que queremos que tenga las propiedad de nuestro objeto. En este caso son ejemplos de los Simpson pero podría ser cualquier cosa.

//En resumen con la funcion constructora lo que hacemos es crear nuestro molde para luego crear una torta.

//Es importante que luego del New tiene que ir el nombre de la clase que le ponemos luego de la palabra reservada Function.

//Otros ejemplos:

function Clubes(nombre, edad, calle) {
    this.club = club;
    this.color 	 = color;
    this.titulos  = titulos;
}
const club1 = new Clubes("River", "Rojo y Blanco", 69);
const club2 = new Clubes("Boca", "Azul y Amarillo", 74);
console.log(club1)
console.log(club2)

Funciones: Generalmente retornar un valor y son de acceso global.
function f1(){
    return this;
} */

//Metodos

//Diferencia entre Funciones y Metodos. Las funciones son funciones creados por nosotros, los programadores. Por ejemplo la clase anterior creamos una función calculadora que sumaba los numeros. En cambio los metodos son funciones ya creadas por el propio lenguaje JavaScript. Es decir en cada actualización de JavaScript se van agregando metodos nuevos que solucionan la vida del programador. En este curso ya hemos usado muchos de ellos. Como toFixed(2), toLowerCase(), toUpperCase(), etc.
//Fijense que siempre los metodos (al igual que las funciones) van entre parentesis. Eso es porque nosotros no estamos creando la función. De eso justamente se encarga por atrás JS. Lo que estamos haciendo es invocando o ejecutando el metodo y devolviendo un resultado.

//Sin embargo a través de los objetos nosotros podríamos crear nuestros propios metodos. Porque un metodo no deja de ser parte de un objeto global

//console.log(this)
//Si hacemos console.log en la palabra reservada this fuera de un objeto verán que hace referencia al Window del navegador. De esa manera nos trae todos los metodos que tiene JavaScript. Por ejemplo podemos ver en un momento el metodo prompt. Que en realidad es un objeto que adentro tiene un metodo que hace la funcionalidad del prompt.

//Creando metodos en JavaScript.

/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ 
    console.log("HOLA SOY "+ this.nombre)}
    this.caminar = function(){ 
    console.log("Estoy caminando")}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
persona2.caminar(); 
console.log(persona1)
console.log(persona2)
*/

//Fijense la sintaxis a través de la palabra reservada this le asignamos un nombre a ese metodo. Y luego despues de igualdad le asignamos la palabra reservada function() entre llaves. Como si una funcion tradicional se tratase. Recuerden englobar todo entre llaves y dentro de las llaves hacer la funcionalidad que requieran. Despues una vez que se crea el objeto tienen que invocar o ejecutar la función como por ejemplo como haciamos la clase anterior con las funciones tradicionales.

//Tal y como existen metodos como for. Tambien existe el metodo for in. El metodo for in nos permite iterar o recorrer objetos. Esto nos servirá para recorrer las clave:valor. Es importante que este metodo solo funcionará con objetos puros y no con otro tipo de dato. Por ejemplo no podremos usarlo en Arrays.


/* const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
} */

//Fijense que obtuvimos la totalidad de nuestro objeto. Esto nos podria servir si en algun momento tenemos muchas propiedades y queremos acceder a todas. Entonces de esa manera nos ahorrariamos acceder a las propiedades con el punto o el corchete.

//Clases

//Esta será la sintaxis más importante de la clase de hoy. Las clases nos permite hacer lo mismo que el objeto literal y la funcion constructora. La diferencia es que la potencialidad es enorme. Salió con la más fuerte actualización de JavaScript (ECMA 6) junto con let y junto con Arrows Functions que vimos la clase anterior. Es muy importante que conozcan bien esta sintaxis ya que en Programacion Moderna estarán utilizando esta funcionalidad. En React por ejemplo se usa, y en el backend tambíen. Las empresas buscan candidatos que sepan utilizar este tipo de sintaxis. Lo que buscó JS con esta funcionalidad es asemejarse lo más posible a Java. Ya que JavaScript NO es un lenguaje orientado a objetos. Como comentamos la clase anterior es un lenguaje interpretado y funcional. En cambio Java y tambien Python es un lenguaje orientado a objetos. Lo cual introducir esta funcionalidad le da más potencia a JS como lenguaje.

//Otra ventaja mas limpia es que la sintaxis es muy amigable y limpia. Veamos un ejemplo

/* class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742"); */

//Utilizamos la palabra reservada Class junto con el nombre de la Clase. Recuerden que al igual que una función constructora el nombre la primera letra tendrá que ir en mayuscula. Todo eso tendrá que ser englobado entre llaves. 
//Luego debemos utilizar reservada constructor que es el metodo que hará crear el molde. Entre los parentesis tendremos que pasarle las propiedades que quiere recibir nuestro objeto. 
//Por ultimo debemos usar la misma logica que la funcion constructora. Es decir deberemos usar this.nombre = nombre para empezar a crear las propiedades de nuestro objeto.

//Recuerden y sumamente importante que el objeto no será creado hasta que usemos la palabra new tal cual pasa con la Funcion Constructora. En ese sentido las sintaxis son muy parecidas. Solo que debemos crear un constructor que reciba las propiedades del objeto.

// Pero como creamos un metodo con Clases?

//Para crear un metodo con Clases luego del constructor deberemos usar la sintaxis del nombre del metodo seguido entre parentesis (). Todo eso deberá estar englobado entre llaves por supuesto. La ventaja que tiene esto es que no tienen que crear un this.caminar = function {} como anteriormente hacemos en la funcion constructora. Directamente llamamos al metodo y listo. 

//Ejemplo:

/* class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar(); */

//Si queremos agregar más metodos podriamos hacer lo siguiente. 

/* class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }
    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }

    caminar(){
        console.log("Estoy caminando");
    }

    cocinar(){
        console.log("Estoy cocinando");
    }

    lavando(){
        console.log("Estoy lavando");
    }
    
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.hablar();
persona1.caminar()
persona1.cocinar()
persona1.lavando()
//Si hacemos un console.log veremos las propiedades y tambien los metodos.
console.log(persona1) */

//Recuerden siempre crear el objeto con la palabra reservada new y posteriormente llamar a los metodos. Ya que si no está creado el objeto. No podrán ejecutar los metodos.

//Otro ejemplo

/* class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender(); */

/* function Persona() {
    this.nombre = prompt("Ingrese el nombre:");
    this.edad = parseInt(prompt("Ingrese la edad:"));
    
    this.saludar = function() {
      console.log("¡Hola! Mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
  }
  
  // Crear un nuevo objeto de tipo Persona
  let persona1 = new Persona();
  console.log(persona1)
  
  // Llamar al método saludar del objeto persona1
  persona1.saludar(); */

  //En este caso a la igualdad del this.nombre no hace falta pasarle la palabra nombre y ponerlo en los parametros. Porque directamente estamos llamando al prompt en la propiedad.

  //Mas maneras de hacerlo

  /* function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    
    this.saludar = function() {
      console.log("¡Hola! Mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
  }
  
  // Crear un nuevo objeto de tipo Persona
  let persona1 = new Persona(prompt("Ingrese el nombre:"), parseInt(prompt("Ingrese la edad:")));
  console.log(persona1)
  
  // Llamar al método saludar del objeto persona1
  persona1.saludar(); */

  //Forma mas optima para hacerlo de manera dinamica.

  /* let nombre = prompt("Ingrese tu nombre")
  let edad = prompt("Ingrese tu edad")

  function Persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    
    this.saludar = function() {
      console.log("¡Hola! Mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
    }
  }
  
  // Crear un nuevo objeto de tipo Persona
  let persona1 = new Persona(nombre, edad)
  console.log(persona1)
  
  // Llamar al método saludar del objeto persona1
  persona1.saludar(); */

  //Esta forma es la mas optima porque estamos usando una variable global para setear los prompts. Y despues a esas variables lo estamos pasando como parametro en nuestra funcion constructora. Mantenemos la misma logica que la manera tradicional con el this asignando el mismo nombre que los parametros. Y despues cuando creamos el objeto directamente llamamos a nombre y edad que hacen referencia a nuestra variable global que fue pasando por nuestros parametros.

  /* class Producto {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Crear un objeto para almacenar los productos
  const productos = {};
  
  // Contador para asignar las claves
  let contador = 1;
  
  // Solicitar 10 productos al usuario
  while (contador <= 10) {
    const nombreProducto = prompt(`Ingrese el nombre del producto ${contador}:`);
    const clave = `producto_${contador}`;
    productos[clave] = new Producto(nombreProducto);
    contador++;
  }
  
  // Imprimir los productos almacenados
  console.log(productos); */


  /* class Producto {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Crear un objeto para almacenar los productos
  const productos = {};
  
  // Contador para asignar las claves
  let contador = 1;
  
  // Solicitar 10 productos al usuario
  while (contador <= 10) {
    const nombreProducto = prompt(`Ingrese el nombre del producto ${contador}:`);
    const clave = `producto_${contador}`;
    productos[clave] = new Producto(nombreProducto);
    contador++;
  }
  
  // Imprimir los productos almacenados
  console.log(productos); */

  //Otra forma pero con for

 /*  class Producto {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Crear un objeto para almacenar los productos
  const productos = {};
  
  // Ciclo for para solicitar 10 productos al usuario
  for (let contador = 1; contador <= 10; contador++) {
    const nombreProducto = prompt(`Ingrese el nombre del producto ${contador}:`);
    const clave = `producto_${contador}`;
    productos[clave] = new Producto(nombreProducto);
  }
  
  // Imprimir los productos almacenados
  console.log(productos);
   */

  /* class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    calcularPrecioConIVA() {
      return this.precio * 1.21;
    }
  }
  
  let producto;
  
  console.log("Productos:");
  
  for (let i = 1; i <= 5; i++) {
    let nombre = prompt(`Ingrese el nombre del producto ${i}:`);
    let precio = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));
    producto = new Producto(nombre, precio);
  
    console.log(
      `${producto.nombre}: Precio sin IVA: ${producto.precio.toFixed(
        2
      )} - Precio con IVA: ${producto.calcularPrecioConIVA().toFixed(2)}`
    );

    console.log(producto)
  } */
  
 // Ejemplo de Objeto Literal con Metodos
 
/*  const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Ingeniero',
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  },
  trabajar: function() {
    console.log(`Soy ${this.profesion} y estoy trabajando en un proyecto.`);
  }
};

// Accediendo a las propiedades del objeto
console.log(persona.nombre); // Output: Juan
console.log(persona.edad); // Output: 30

// Llamando a los métodos del objeto
persona.saludar(); // Output: Hola, mi nombre es Juan y tengo 30 años.
persona.trabajar(); // Output: Soy Ingeniero y estoy trabajando en un proyecto.
 */