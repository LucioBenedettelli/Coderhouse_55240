/* La abstracción en JavaScript es un concepto importante que nos ayuda a simplificar y organizar nuestro código. Básicamente, consiste en ocultar los detalles complejos y mostrar solo la información relevante para resolver un problema.

Puedes pensar en la abstracción como una forma de crear un "modelo" o una representación simplificada de algo en el mundo real. Por ejemplo, si queremos representar un auto en JavaScript, no necesitamos conocer todos los detalles internos del motor, el sistema de frenos o la transmisión. En su lugar, nos enfocamos en los aspectos importantes, como la capacidad para acelerar, frenar y girar.

En programación, podemos crear abstracciones mediante el uso de objetos y funciones. Por ejemplo, podríamos crear un objeto llamado "Auto" que tenga propiedades como "marca", "modelo" y "color", así como métodos (funciones) como "acelerar" y "frenar". Los usuarios de nuestro código solo necesitarían saber cómo usar esos métodos y no tendrían que preocuparse por los detalles internos de cómo funcionan.

La abstracción nos permite escribir código más claro, legible y fácil de mantener. Al ocultar los detalles complejos, podemos enfocarnos en el problema que estamos resolviendo en lugar de preocuparnos por todos los detalles técnicos. Además, si más adelante necesitamos hacer cambios internos en nuestra abstracción, podemos hacerlo sin afectar el código que utiliza esa abstracción.

En resumen, la abstracción en JavaScript nos permite representar objetos y conceptos del mundo real de una manera simplificada, ocultando los detalles complejos y mostrando solo la información relevante. Esto hace que nuestro código sea más fácil de entender, mantener y modificar. */

/* El operador += en JavaScript se utiliza para sumar un valor a una variable existente y luego asignar el resultado a la misma variable. Es una forma abreviada de escribir variable = variable + valor. */

//Forma tradicional

/* let numero = 5
let numero_dos = 3
resultado = numero + numero_dos 
console.log(resultado) */

//Forma abreviada
/* let numero = 5;
numero += 3;
console.log(numero); // Resultado: 8 */


/* En este ejemplo, tenemos una variable llamada numero con un valor inicial de 5. Luego utilizamos el operador += para sumarle 3 a la variable numero. En la línea numero += 3;, se suma 3 al valor actual de numero (que es 5) y el resultado (8) se asigna nuevamente a la variable numero. Al imprimir el valor de numero en la consola con console.log(numero);, obtendremos 8 como resultado.

Es importante tener en cuenta que el operador += puede utilizarse no solo con números, sino también con otros tipos de datos, como cadenas de texto. Por ejemplo: */

/* let mensaje = "Hola";
mensaje += " mundo!";
console.log(mensaje); // Resultado: "Hola mundo!" */

/* En este caso, inicialmente tenemos una variable llamada mensaje con el valor "Hola". Luego, utilizando +=, concatenamos la cadena " mundo!" a mensaje, obteniendo como resultado "Hola mundo!".

El uso de += puede ser muy útil para simplificar el código y hacerlo más legible, especialmente cuando queremos actualizar el valor de una variable en base a su valor actual. */

/* let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}

console.log(total)  //   */

/* La razón por la que total es igual a 55 es porque el bucle va sumando los números del 1 al 10 en cada iteración y asignando el resultado a total.

Aquí está cómo se realiza la suma paso a paso:

En la primera iteración: total += 1 suma 1 a total, que era 0, por lo que total se convierte en 1.
En la segunda iteración: total += 2 suma 2 a total, que ahora es 1, por lo que total se convierte en 3.
En la tercera iteración: total += 3 suma 3 a total, que ahora es 3, por lo que total se convierte en 6.
Y así sucesivamente, hasta que en la última iteración se suma 10 a total, que es 45, y total se convierte en 55.
Por lo tanto, al final del bucle, total contiene la suma de los números del 1 al 10, que es 55. */

//En resumen en el siguiente codigo estamos haciendo un acumulador

//Con una funcion

/* let total = 0

function sumarRango (valor1, valor2) {
for (let i = valor1; i <= valor2; i++) {
    total += i
    
}
return total;
}


console.log( sumarRango(1, 10) ) */ //  55

/* En JavaScript, una función de orden superior es una función que puede recibir otras funciones como argumentos y/o devolver una función como resultado. Esto significa que las funciones de orden superior pueden tratar a las funciones como cualquier otro valor, permitiéndonos manipular y trabajar con ellas de forma flexible.

Puedes pensar en las funciones de orden superior como cajas que pueden contener otras cajas (las funciones) y realizar diferentes operaciones con ellas. Estas operaciones pueden incluir ejecutar una función dentro de otra función, modificar el comportamiento de una función o incluso crear nuevas funciones a partir de otras. */

/* Las funciones de orden superior nos permiten abstraer la lógica repetitiva o común en funciones reutilizables, mejorar la legibilidad del código y facilitar la implementación de patrones de programación como el filtrado, el mapeo o la reducción de datos.

Es importante mencionar que las funciones de orden superior son un concepto fundamental en programación funcional y son ampliamente utilizadas en JavaScript y otros lenguajes de programación.

En resumen, las funciones de orden superior en JavaScript son funciones que pueden recibir otras funciones como argumentos y/o devolver una función como resultado. Nos permiten tratar a las funciones como cualquier otro valor y trabajar con ellas de forma flexible. */

/* function mayorQue(n) {
    return function(m) {
        return m > n;
    }
}

let mayorQueCinco = mayorQue(5);  // Genera una función para comparar si un número es mayor que 5
let mayorQueOcho = mayorQue(8);  // Genera una función para comparar si un número es mayor que 8

// Ejemplos de uso:
console.log(mayorQueCinco(7));  // true, 7 es mayor que 5
console.log(mayorQueCinco(3));  // false, 3 no es mayor que 5

console.log(mayorQueOcho(10));  // true, 10 es mayor que 8
console.log(mayorQueOcho(6));   // false, 6 no es mayor que 8 */ 

/*  En este ejemplo, la función mayorQue actúa como una fábrica de funciones. Al llamar a mayorQue(n), se devuelve una nueva función que compara si un número dado es mayor que n. Luego, puedes asignar esta nueva función a una variable (por ejemplo, mayorQueCinco o mayorQueOcho) y usarla para comparar diferentes valores con el número de referencia inicial.  */

/* // Funciones de cálculo de impuestos para diferentes países
function calcularImpuestosArgentina(subtotal) {
    const impuestoPorcentaje = 0.21;
    return subtotal * impuestoPorcentaje;
}

function calcularImpuestosBrasil(subtotal) {
    const impuestoPorcentaje = 0.15;
    return subtotal * impuestoPorcentaje;
}

function calcularImpuestosAlemania(subtotal) {
    const impuestoPorcentaje = 0.19;
    return subtotal * impuestoPorcentaje;
}

// Función de orden superior para generar la función de cálculo de impuestos
function generarFuncionCalcularImpuestos(pais) {
    switch (pais) {
        case "Argentina":
            return calcularImpuestosArgentina;
        case "Brasil":
            return calcularImpuestosBrasil;
        case "Alemania":
            return calcularImpuestosAlemania;
        default:
            return function(subtotal) {
                return 0;
            };
    }
}

// Ejemplo de uso:
const paisCliente = "Argentina";
const calcularImpuestos = generarFuncionCalcularImpuestos(paisCliente);

const subtotalCompra = 100;
const impuestos = calcularImpuestos(subtotalCompra);

const totalCompra = subtotalCompra + impuestos;

console.log("Subtotal: $" + subtotalCompra);
console.log("Impuestos: $" + impuestos);
console.log("Total: $" + totalCompra); */

/* En este ejemplo, tenemos funciones de cálculo de impuestos para diferentes países: calcularImpuestosArgentina, calcularImpuestosBrasil y calcularImpuestosAlemania. Luego, la función de orden superior generarFuncionCalcularImpuestos toma el nombre del país como argumento y devuelve la función correspondiente de cálculo de impuestos.

Al llamar a generarFuncionCalcularImpuestos con un país específico, obtenemos la función de cálculo de impuestos correspondiente. Luego, podemos usar esta función generada para calcular los impuestos en función del subtotal de la compra.

Ten en cuenta que he agregado un caso predeterminado en el switch para manejar países no reconocidos y devolver una función de impuestos que devuelve 0. */ 

/* function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log( suma(4, 6) )  //  10
console.log( resta(5, 3) )  //  2 */

/* La función asignarOperacion toma un parámetro llamado op que representa la operación deseada ("sumar" o "restar").

Dentro de la función, se utiliza una estructura if-else if para verificar el valor de op y tomar diferentes acciones según ese valor.

Si op es igual a "sumar", la función devuelve una función anónima que toma dos parámetros a y b, y retorna la suma de a y b utilizando el operador +.

Si op es igual a "restar", la función devuelve una función anónima similar, pero esta vez la resta de a y b utilizando el operador -.

Luego, se asignan las funciones devueltas por asignarOperacion a las variables suma y resta. Esto permite que las variables actúen como funciones para realizar operaciones específicas.

Por último, se utilizan las variables suma y resta para realizar las operaciones correspondientes. Se pasan los operandos necesarios a cada variable, y las funciones almacenadas en esas variables se ejecutan, devolviendo el resultado de la operación.

Los resultados se imprimen en la consola utilizando console.log.

En resumen, este código permite asignar y ejecutar diferentes operaciones matemáticas (suma o resta) según el valor del parámetro op. Al asignar estas operaciones a variables, se pueden invocar posteriormente para realizar cálculos específicos. */

// Función para asignar una acción a una fruta
/* function asignarAccion(fruta) {
    if (fruta === "manzana") {
        return function() {
            console.log("Estoy comiendo una manzana.");
        };
    } else if (fruta === "banana") {
        return function() {
            console.log("Estoy pelando una banana.");
        };
    } else {
        return function() {
            console.log("No tengo ninguna acción definida para esta fruta.");
        };
    }
}

// Asignar acciones a las frutas
let accionManzana = asignarAccion("manzana");
let accionBanana = asignarAccion("banana");

// Ejecutar las acciones
accionManzana(); // Estoy comiendo una manzana.
accionBanana();  // Estoy pelando una banana. */

/* En este ejemplo, tenemos la función asignarAccion que toma un parámetro llamado fruta. Dependiendo del valor de fruta, la función devuelve una función anónima que realiza una acción asociada con esa fruta.

Luego, asignamos las acciones a las variables accionManzana y accionBanana utilizando la función asignarAccion. Finalmente, podemos ejecutar las acciones invocando las funciones almacenadas en esas variables.

Este ejemplo muestra cómo utilizar una función para asignar y ejecutar acciones específicas para diferentes frutas. Así como en el ejemplo anterior, este ejemplo demuestra cómo se puede utilizar una función para asignar y ejecutar comportamientos de manera dinámica según un parámetro dado. */



// Definimos una función que recibe un array de libros y una función como parámetros
/* function porCadaLibro(arr, fn) {
    for (const libro of arr) {
      // Llamamos a la función pasando el libro como argumento
      fn(libro);
    }
  }
  
  // Definimos una función que imprime el título de un libro
  function imprimirTitulo(libro) {
    console.log(libro.titulo);
  }
  
  // Definimos un array de libros
  const libros = [
    { titulo: 'El Gran Gatsby', autor: 'F. Scott Fitzgerald' },
    { titulo: '1984', autor: 'George Orwell' },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez' }
  ];
  
  // Llamamos a la función porCadaLibro pasando el array de libros y la función imprimirTitulo
  porCadaLibro(libros, imprimirTitulo); */
  
/* Imaginemos que tienes una biblioteca llena de libros, y quieres hacer algo con cada uno de ellos, como imprimir su título. En programación, puedes utilizar funciones para realizar tareas específicas.

En el ejemplo, tenemos una función llamada porCadaLibro. Esta función toma dos cosas como entrada: un conjunto de libros (representado como un array) y otra función que se utilizará para realizar una acción en cada libro.

Dentro de la función porCadaLibro, hay un bucle que recorre cada libro en el conjunto de libros. En cada iteración del bucle, se llama a la función que pasamos como argumento (fn) y se le pasa el libro actual.

La función imprimirTitulo es una función que hemos definido aparte. Toma un libro como entrada y simplemente imprime su título. Esta función se pasa como argumento a porCadaLibro, por lo que se ejecutará en cada libro del conjunto.

Finalmente, creamos un conjunto de libros llamado libros con algunos ejemplos. Luego, llamamos a la función porCadaLibro, pasándole el conjunto de libros y la función imprimirTitulo. Esto hace que la función porCadaLibro llame a imprimirTitulo para cada libro en el conjunto, lo que imprimirá los títulos de los libros en la consola.

En resumen, el ejemplo muestra cómo puedes usar funciones para realizar tareas en conjuntos de datos. Al pasar una función como argumento a otra función, puedes reutilizar el código y hacer que la función sea más flexible, ya que puede realizar diferentes acciones en función de la función que se le pase. */

/* let total = 0;

function acumular(num) {
  total += num;
}

function porCadaUno(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const numeros = [1, 2, 3, 4];
porCadaUno(numeros, acumular);
console.log(total); // Salida: 10 */

/* En este ejemplo, se define el array numeros que contiene los números [1, 2, 3, 4]. Luego, se llama a la función porCadaUno pasando el array numeros y la función acumular como argumentos. La función porCadaUno ejecuta la función acumular para cada elemento del array numeros, y la función acumular acumula los valores sumándolos a la variable total.

Finalmente, se imprime el valor de total en la consola, que en este caso será 10. */

//const duplicado = [];

/* function porCadaUno(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

const numeros = [1, 2, 3, 4];
porCadaUno(numeros, (el) => {
  duplicado.push(el * 2);
});

console.log(duplicado); // Salida: [2, 4, 6, 8] */

/* En este ejemplo, se define el array numeros que contiene los números [1, 2, 3, 4]. Luego, se llama a la función porCadaUno pasando el array numeros y una función de flecha ((el) => { duplicado.push(el * 2); }) como argumentos. La función porCadaUno ejecuta la función de devolución de llamada para cada elemento del array numeros, y la función de devolución de llamada multiplica cada elemento por 2 y lo agrega al array duplicado.

Finalmente, se imprime el array duplicado en la consola, que en este caso será [2, 4, 6, 8]. */

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
  },

  {
    id: 7,
    nombreProducto: "Pepsi",
    precio: 1000,
  }
]

/* productos.forEach( (producto)=> {
    console.log(producto)
} )
 */

//Asignamos productos que es nuestro array de objetos y le aplicamos el metodo forEach. forEach recibira un callback es decir una funcion como parametro llamado producto. Lo unico que debemos hacer es llamar el callback dentro del console.log.
//En este caso no devuelve un nuevo array. Trabaja sobre el Array Original.

/* const resultado = productos.find((el) => el.nombreProducto === "Pepsi")
const resultado2 = productos.find((el) => el.precio === 450)
const resultado3 = productos.find((el) => el.precio === 1500)

//Es importante que el find devolverá solo un elemento. Y será el primero que encuentre. Es decir una vez que encuentre el producto Pepsi no seguirá buscando. Lo mismo con el precio. Devolverá un array con solo ese contenido. Si no hay ninguna coincidencia el metodo retorna undefined.

console.log(resultado) 
console.log(resultado2) 
console.log(resultado3)

const buscandoPrecios = productos.filter((el) => el.precio >= 500)
console.log(buscandoPrecios)
 */

//El filter en este caso es distinto devolverá un array que cumpla con esa condición es decir devolverá todos los productos que el precio sea mayor o igual a 500.

/* const resultado = productos.some((el) => el.nombreProducto === "Pepsi")
const resultado2 = productos.some((el) => el.precio === 450)
const resultado3 = productos.some((el) => el.precio === 1500)

console.log(resultado)
console.log(resultado2)
console.log(resultado3) */

//Funciona igual que el find. Solo que no devuelve el elemento encontrado devuelve true o false si se cumple determinada condicion. Es decir devolverá un booleano. Y fijense que devuelve solo un elemento.

/* const productos_modificados = productos.map((el) => el.nombreProducto)
console.log(productos_modificados) */

//El metodo map lo que hace es recorrer todo el array como lo hace el for, y for of. La unica diferencia es que devuelve un nuevo array con todo ese contenido. Esto es lo que van a encontrar por lo general en React. Ya que es la sintaxis mas moderna para hacer un loop o recorrer arrays. Además el map te permite hacer modificaciones y calculos sobre del Array Original a la copia.

/* const actualizado = productos.map((el) => {
    return {
        nombre: el.nombreProducto,
        precio: el.precio * 1.25
    }
})

console.log(actualizado) */

//Fijense que en este caso lo que hace es devolver un array nuevo con los nombres pero con los precios modificados. Ya que le estamos aplicando un recargo.


/* const total = productos.reduce((acumulador, elemento) => acumulador + elemento.precio, 0); */

/* En este caso, el valor inicial del acumulador es 0, y en cada iteración del reduce, se suma el precio del elemento actual al acumulador. Al finalizar, la variable total contendrá la suma de todos los precios de los productos en el array.

Recuerda que en la función de reducción ((acumulador, elemento) => acumulador + elemento.precio), acumulador representa el valor acumulado hasta el momento, y elemento representa el elemento actual del array en cada iteración.
 */

/* console.log(total) */

/* productos.sort(function(a, b) {
    return a.precio - b.precio;
  });

  console.log(productos)
 */

  //Haciendo este codigo ordenaremos los productos de menor a mayor. Si queremos ordenarlo de mayor a menor lo que tendremos que hacer es cambiar el orden.
  //Primero  b.precio y despues - a.precio





