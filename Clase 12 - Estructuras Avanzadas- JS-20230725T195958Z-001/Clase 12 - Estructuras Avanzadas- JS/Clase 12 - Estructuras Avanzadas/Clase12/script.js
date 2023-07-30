//let num = 10

// aumentar en 1 el valor
//num = num + 1

// primera simplificacion
//num += 1

// o bien
//num++

// O bien

//for (let i = 0; i<= 10; i++) {
    //console.log(i)
    
//}

//for (let i = 0; i<= 10; i = i +1) {
    //console.log(i)
    
//}

//for (let i = 0; i<= 10; i+=1) {
   //console.log(i)
    
//}

//___________________________________________________________________________

//Primera forma con el if tradicional

//let temperatura = 31

//if (temperatura > 30) {
  //alert("Día caluroso!")
//} else {
  //alert("Día agradable")
//}

// SEGUNDA FORMA CON EL TERNARIO
//temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")
//- Temperatura es la variable 
// ? seria el if 
// ?? el else


//____________________________________________________________________________
//OTRO EJEMPLO CON TERNARIOS Y FORMA TRADICIONAL

/* const usuario = {
    edad: 20
}

let permiso
if (usuario.edad >= 18) {
  permiso = true
} else {
  permiso = false
}

console.log(permiso)
if (permiso) {
  alert("Puede comprar cerveza")
} else {
  alert("No puede comprar")
}
 */

//Chequeamos si el usuario es mayor de 18 años en el primer if. 
// Si es mayor entonces lo seteamos como true. Ese true despues se compara
//abajo y se devuelve el alert que correspondería.
//_______________________________________________________________________________________________

// CON TERNARIO:

//const usuario = {
    //nombre: "John Doe",
    //edad: 22
   //}

   // declaramos y asignamos condicionalmente
   //const permiso = (usuario.edad >= 18) ? true : false

   // mostramos el mensaje
   //permiso ? alert("Puede comprar cerveza" ) : alert("No puede comprar" )

   // Creamos un objeto con una propiedad nombre y edad. A edad le asignamos 22
   // En el const permisos seteamos que sea true si el usuario es mayor de 18. 
   // Si es menor, entonces es falso.
   // Por ultimo en la otra linea comparamos si permiso es true, entonces puede
   //comprar cerveza. Si es false, es decir si es menor, no puede.

   //const usuario = {
    //nombre: "John Doe",
    //edad: 22
   //}
   
   // Otra forma es hacerlo en una misma linea. 
   //En vez de pasar permiso true o false. Comparamos directamente la propiedad
   //del objeto con un operador logico.

   //usuario.edad >= 18 ? alert("Puede comprar cerveza" ) : alert("No puede comprar" )
//_______________________________________________________________________________________

   //HACEMOS LO MISMO PERO AHORA CON 3 CONDICIONALES. SIMULANDO IF, ELSE IF y ELSE.
  /*  const tutores = {
    nombreTutor: "Alvaro",
   }

   tutores.nombreTutor == "Alvaro" ? alert(`Felicidades, puedes ingresar a la pagina ${tutores.nombreTutor}!`) 
   : tutores.nombreTutor == "Luna" ? alert(`Felicidades, puedes ingresar a la pagina ${tutores.nombreTutor}!`) 
   : alert ("No puede entrar") */

   //_________________________________________________________________________

   //OPERADOR LOGICO AND

/*     const carrito = []
    if (carrito.length === 0) {
    console.log("El carrito está vacío!")
} */

// con operador AND
//carrito.length === 0 && console.log("El carrito está vacío!")

//En el primer if preguntamos de la forma tradicional con el if. Si el carrito
//no tiene elementos, es decir es 0, esta vacio.

//En la segunda condicion preguntamos directamente con el .length si el carrito
//esta vacio. Usando un operador logico. Si el carrito está vacio, entonces haceme
// un return del console.log
// Si es falso no va a retornar nada porque la condición no se cumplirá.

/* const usuario = {
    nombre: "John Doe",
    edad: 14
    }

    const registroIngreso = usuario.edad >= 18 && new Date()
    console.log(registroIngreso)

    let nuevaFecha = new Date()
    console.log(nuevaFecha) */

    //Retorna falso porque la edad del usuario es mayor o igual a 18. 
    //El operador and necesita que SI o SI ambas condiciones sean verdaderas
    //En este caso tanto la edad como el new date son falsos.


    // El new Date es falso porque el valor del new Date cambia por cada 
    //milisegundo
    // Este metodo crea una fecha usando dia, minutos y segundos
    //Por lo cual cada vez que se ejecute el new Date, el valor será distinto.

    //Tambien sirve para generar un ID dinamico ya que el ID siempre es unico.
    //let nuevaFecha = Date.now() + Math.random(1,5).toFixed(0)
    // let nuevaFecha = new.Date().valueOf()
    //console.log(nuevaFecha)
    //Formas de generar un ID dinamico en JS.

    // La forma correcta para que ese algoritmo se ejecute serìa.

    /* const usuario = {
        nombre: "John Doe",
        edad: 22
        }
    
        const registroIngreso = usuario.edad >= 18 && usuario.nombre == "John Doe"
        console.log(registroIngreso) */

    // La condicion se cumple porque ambas condiciones son verdaderas.

    // Tambien podemos usarlo para retornar un valor cuando la condicion sea
    //Verdadera.
  /*   const carrito = []
if (carrito.length === 0) {
console.log("El carrito está vacío!")
}
 */
// con operador AND
/* carrito.length === 0 && console.log("El carrito está vacío!") */

// Si el carrito esta vacio, entonces devolveme un console.log. 
// Si no no me devuelvas nada.

// ____________________________________________________________________________

// OPERADOR OR

//Un valor falsy es un valor que es falso en un contexto booleano
// Esto significa que en operadores logicos el 0, string vacio (""), false
//undefined y null y NAN. van a devolver Falsy
/* console.log( 0 || "Falsy") // Falsy
console.log( 40 || "Falsy") // 40
console.log( null || "Falsy") // Falsy
console.log( undefined || "Falsy") // Falsy
console.log( "Hola Mundo" || "Falsy") // Hola Mundo
console.log( "" || "Falsy") // Falsy
console.log( NaN || "Falsy") // Falsy
console.log( true || "Falsy") // true
console.log( false || "Falsy") // Falsy */

//Valores Truthy
//Siempre es verdadero a menos que sean el 0, string vacio, false, 
//undefined y null


/* const usuario1 = {
 nombre: "John Doe",
 edad: 14
}
const usuario2 = null
console.log( usuario1 || "El usuario no existe" ) */
// { nombre: 'John Doe', edad: 14 }
// Devuelve Usuario1 porque es verdadero. Entonces el OR es true porque
//le alcanza con un solo verdadero.

/* console.log( usuario2 || "El usuario no existe" ) */
// El usuario no existe

//Usuario2 es null por lo tanto es falso por lo tanto cuando evalua
//la primera condicion es falsa. Por lo lo tanto devuelve que el usuario no existe
//Porque la segunda condicion SI es verdadera.
//___________________________________________________________________________


// OR CON LOCALSTORAGE 

/* let carrito
let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )
if (carritoLocalStorage) {
 carrito = carritoLocalStorage
} else {
 carrito = []
 console.log(carrito)
} */

/* const carrito = JSON.parse(localStorage.getItem('carrito')) || console.log([]) */

// Como carrito es "null" entonces te retorna el [] vacio ya que null es un valor Falsy

//Operador Nullish Coalescing
// El operador fusión nula (nullish coalescing) es un operador lógico que 
//retorna el valor utilizado en el lado derecho de la expresión 
//cuando el lado izquierdo es null o undefined , 
//en caso contrario, retorna el lado izquierdo
/* console.log( 0 ?? "Nullish") // 0
console.log( 40 ?? "Nullish") // 40
console.log( null ?? "Nullish") // Nullish
console.log( undefined ?? "Nullish") // Nullish
console.log( "Hola Mundo" ?? "Nullish") // Hola Mundo
console.log( "" ?? "Nullish") // ""
console.log( NaN ?? "Nullish") // NaN
console.log( true ?? "Nullish") // true
console.log( false ?? "Nullish") // false */

//const usuario = null

//console.log( usuario.nombre || "El usuario no existe" )
// Error: "No se pueden leer propiedades de NULL"
//console.log( usuario?.nombre || "El usuario no existe" )
// "El usuario no existe"

// En el primer caso el usuario no existe. Estás queriendo acceder a un objeto
//que no existe. En el segundo caso tampoco existe pero usando el operador ?
// forzamos el error. Es decir nos retorna que el usuario no existe.

/* const usuario = {
    nombre: "John Doe",
    edad: 22,
    cursos: {
    javascript: "aprobado"
    }
   }
   console.log( usuario?.cursos?.javascript || "La propiedad no existe")
   // "aprobado"
   console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe") */
   // "La propiedad no existe"

   //La primera forma devuelve aprobado porque estamos accediendo a la propiedad
   //cursos que a su vez tiene una propiedad JavaScript. Con el operador ?
   //accedemos a ese objeto. Y retorna true. Y recuerden que el OR solo necesita
   //un true.

   // La primera forma devuelve que la propiedad no existe. Porque efectivamente
   // Al igual que el caso anterior no existe la propiedad de objeto trabajos ni
   //tampoco Coderhouse. Devuelve que la "Propiedad no existe" por el concepto
   //De Falsy.

   // Desestructuring..

/*    const usuario = {
    nombre: "John Doe",
    edad: 32
   }
   const { nombre, edad } = usuario
   console.log(nombre) // "John Doe"
   console.log(edad) // 32 */

   //Pasamos entre llaves nombre y edad que son las propiedades de usuario
   // y se le asignamos a usuario. Entonces despues en vez de llamar usuario.nombre
   //Bastaria con llamar solo a nombre.

   //Si intentamos hacer una variable la cual el nombre de la propiedad del objeto
   //No existe obtendremos undefined.

/*    const usuario = {
    nombre: "John Doe",
    edad: 32
   }
   const { telefono } = usuario

   console.log(telefono) */

/*    const usuario = {
    nombre: "John Doe",
    edad: 32,
    telefono: {
    cel: 113334444,
    casa: null,
    trabajo: 113325555
    }
   }

   const { nombre, telefono: {trabajo} } = usuario
console.log(nombre) // "John Doe"
console.log(trabajo) // 113325555 */

//Destructuramos todas las propiedades pero tambien destructuramos trabajo
//Que tiene un objeto dentro.

// Alias

/* const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
   }
   const {
    item_id: id,
    product_name: nombre,
    price_per_unit: precio
   } = item
   console.log(id) // 432
   console.log(nombre) // "Some product"
   console.log(precio) // 5600 */

   //Funciones con Destructuración

/*    const producto = {
    id: 10,
    nombre: "Curso Javascript" ,
    precio: 12500
   }

   const desestructurar = (item) => {
    // desestructurando dentro del bloque
    const {id, nombre} = item
    console.log(id, nombre)
   }
   desestructurar (producto) // 10 Curso Javascript */

   //O lo podemos destructurar directamente en el parametro

   // desestructurando lo que reciba por parámetro
/* const desestructurar = ( {id, nombre} ) => {
    console.log(id, nombre)
   }
   desestructurar (producto) // 10 Curso Javascript */

   //La destructuracion tambien podemos hacerlo en eventos como el evento 
   //AddEventListener

  /*  let boton = document.querySelector("#boton")
   boton.addEventListener("click", function(e) {
    console.log(e.x)
    console.log(e.y)
    }) */
     
    //El objeto window hace referencia a toda la ventana. Tenemos que hacer 
    //click en cualquier lugar del navegador

  /*   window.addEventListener('click', ( {x, y} ) => {
        console.log(x, y)
       }) */

       //Destructuración de Arrays.

   /*     const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
const [a, b] = nombres
console.log(a) // "Juan"
console.log(b) // "Julieta" */

//La desestructuración es posicional. Es decir que a corresponde a Juan y B a 
//Julieta

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
// omito las dos primeras posiciones
const [,, a, b] = nombres
console.log(a) // "Carlos"
console.log(b) // "Mariela" */

//Tenemos que respetar las posiciones. Si queremos acceder a otras posiciones
//Solo tendriamos que dejar un espacio entre medio

//Spread Operator

//Lo que haremos con el Spread es copiar los valores. En este caso el array
//original para hacer otra cosa con el. Podria ser agregar mas elementos a la lista
//O bien para copiar la referencia en algun momento

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"] */

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
// spread ... del array
console.log(...nombres) // Juan Julieta Carlos Mariela
// equivalente a:
console.log("Juan", "Julieta", "Carlo", "Mariela") */

// Copiamos los valores dentro del array

//const numeros = [4, 77, 92, 10, 3, -32, 54, 11]
//console.log( Math.max(numeros) ) // NaN

//const numeros = [4, 77, 92, 10, 3, -32, 54, 11]
//console.log( Math.max(...numeros) ) // 92

//Con el operador spread podemos solucionar esto ya que
//Math.max() recibirá cada elemento del array como un parámetro
//individual y no como una lista

//Mas ejemplos

/* const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]
// spread de los dos arrays dentro de otro
const nombres = [...nombres1, ...nombres2]
console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]
// spread del array en un objeto
const nombresObj = {
 ...nombres
}
console.log(nombresObj)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' } */

//Nos devuelve esta sintaxis porque nos devuelve clave valor
//donde la clave es el indice. Y el valor es el array con el spread

//Spread de Objetos

/* const usuario1 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
   }
   // lista todas las propiedades y valores de usuario1 dentro de otro objeto
   const usuario2 = {
    ...usuario1
   }
   console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }
   const usuario3 = {
    ...usuario1,
    curso: "ReactJS",
    email: "juan@doe.com"
   }
   console.log(usuario3)
   // { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' } */

   //Copiamos el objeto 1 con todas sus propiedades y lo insertamos en el 2.
   //En el ultimo caso tambien modificamos la propiedad curso

   //Rest Parameters
   //El Spread tambien puede pasarse como parametro en una función
   //Lo usamos para indicar que queremos recibir una cantidad indeterminada
   //de elementos.

   /* function sumar(...numeros) {
    console.log(numeros)
   }
   sumar(4, 2) // [ 4, 2 ]
   sumar(10, 15, 30, 5) // [ 10, 15, 30, 5] */

   //De esta manera podemos hacer dinamica nuestra función
   //Es decir ya no depende de la cantidad de parametros que le pasemos
   //Mas bien dependerá de la llamada.


