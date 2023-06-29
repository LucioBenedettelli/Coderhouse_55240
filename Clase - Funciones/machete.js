// Las funciones son  acciones que siempre arrojarán un resultado.
// En la vida cotidiana lo podriamos traducir a un hecho que hacemos que tiene una
//Por ejemplo si salimos a caminar. Estamos cansados.
//Si cocinamos, entonces el resultado sería lo que estuvimos cocinando
//Si nos duchamos entonces la consecuencia será que estamos limpios
//Si limpiamos el hogar entonces el resultado será que la casa esta limpia.
//Lo importante es que cada funcion o acción siempre tendrá que devolver un resultado.

/* Principio de Dry (Don't Repeat Yourself): Este principio se basa en evitar la repetición de código en un programa. En pocas palabras, significa que no debes escribir el mismo código una y otra vez. En lugar de eso, se recomienda identificar las repeticiones y crear una abstracción o una función que encapsule esa lógica repetitiva. Al seguir este principio, puedes mejorar la legibilidad, mantenibilidad y reutilización del código. Además, si necesitas hacer cambios, solo tendrías que hacerlo en un lugar en lugar de múltiples lugares donde se repite el código.
/* 
Principio Yagni (You Aren't Gonna Need It): Este principio se refiere a no agregar funcionalidades o código que no necesitas en el momento actual. En lugar de anticipar y agregar código para posibles requerimientos futuros, es mejor mantener el código simple y limpio, implementando solo lo que es necesario en el presente. Esto evita la sobrecarga innecesaria y mejora la claridad del código. Una vez que surja un nuevo requisito, puedes implementarlo en ese momento, manteniendo así el código más enfocado y reduciendo la posibilidad de errores.

Principio Kiss (Keep It Simple, Stupid): Este principio se basa en la idea de que el código debe ser simple y fácil de entender. En lugar de crear soluciones complejas, se busca una implementación simple y directa. Al seguir este principio, se evita la introducción de complicaciones innecesarias y se facilita el mantenimiento y la comprensión del código tanto para el programador original como para otros que puedan trabajar en él en el futuro. La simplicidad en el código también ayuda a reducir la probabilidad de errores y mejora la legibilidad.

Estos principios son pautas que los programadores siguen para escribir un código más limpio, eficiente y mantenible. Al aplicarlos, puedes mejorar la calidad de tus programas y facilitar el desarrollo y la evolución del software a lo largo del tiempo. */

//Se declara a través de la la palabra reservada function junto con el nombre de la función. Esto tiene similitudes como cuando escribibiamos el nombre las variables. Tambien es importante recordar que el nombre tendrá que ser en minuscula por una cuestion de buenas practicas y seguido del nombre de la función tendrán que estar los parentesis. Otra cosa es que las funciones tienen que ir englobadas entre llaves tal y como pasa con otras sentencias como if, switch, for y demás. Y sumamente importante el nombre de las funciones es unico y no puede tener el mismo nombre. No pueden tener el mismo nombre porque si no estarás pisando la función creada. 


/*  function caminar () {
    console.log("Llegué a casa despues de caminar. Estoy muy cansado")
} 

function caminar () {
    console.log("Estoy muy cansado")
} 

function cocinar () {
    console.log("La hamburguesa está lista")
} 

function ducha () {
    console.log("Me bañé. Estoy limpio")
} 

function limpiar () {
    console.log("Hoy vienen visitas. Asi que limpie toda la casa y está limpia")
}   */


//Si nosotros hacemos esto nuestro codigo no funcionará es decir. No se verá el resultado. En este caso los console.log esto es porque las funciones tienen que ser llamadas o invocadas. Para llamar una función bastará con escribir el nombre de la función entre parentesis. Es importante que esto lo podremos hacer en cualquier parte del código.

//Por ejemplo en estos ejemplos si queremos repetir muchas veces el console.log de caminar bastará con invocar varias veces la misma funcion. Es decir no hará falta escribir ese console.log muchas veces. Ya que el principio de Dry habla de no repetir código. Esto tambien va de la mano con el principio de Kiss. Con las funciones el código es mucho mas legible y mucho más facil de entender. Y tambien va de la mano con el principio Yagni ya que no le estamos agregando cosas de más a nuestro codigo y dejarlo lo más limpio posible.


//Diferencias de Scope. Si llamamos el prompt dentro de la función lo que hará es llamar a 3 funciones donde el resultado será distinto a lo que ponga el usuario.
//Esto no pasa con la variable global porque recuerden que la variable global pisa el resultado. Si nosotros llamamos 3 veces a la funcion y escribimos River, Boca e Independiente entonces solo nos mostrará River porque toma como que está llamando a una función sola con el valor de "River"
/* 
function solicitarClub(){
    let club = prompt("Ingrese tu cuadro de futbol")
    alert("El club ingresado es " + club)
} 

solicitarClub()
solicitarClub()
solicitarClub()
 */

//Otra cosa importante de una función que esta hecho para cumplir algo especifico. Es decir si creamos una funcion que se llama caminar dentro de esa función no puede arrojar un resultado que sea correr. Esa función deberia devolver un solo resultado.
//Pongamos el ejemplo de una calculadora. Si tenemos una calculadora podríamos hacerlo todo en una misma función
/* 
function calculadora() {
    let operacion = prompt("¿Qué operación quieres realizar? (+, -, *, /)");
  
    switch (operacion) {
      case "+":
        let num1 = parseFloat(prompt("Ingresa el primer número:"));
        let num2 = parseFloat(prompt("Ingresa el segundo número:"));
        alert("El resultado es: " + (num1 + num2));
        break;
      case "-":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        alert("El resultado es: " + (num1 - num2));
        break;
      case "*":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        alert("El resultado es: " + (num1 * num2));
        break;
      case "/":
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        alert("El resultado es: " + (num1 / num2));
        break;
      default:
        alert("Operación inválida. Por favor, ingresa una operación válida (+, -, *, /).");
        break;
    }
  }
  
  // Ejecutar la función de la calculadora
  calculadora(); */

  //Esto estaría correcto porque devolveria un solo resultado dentro de ese Switch pero estariamos haciendo 4 operaciones en una misma función a nivel código. Por más que esa función arroje un mismo resultado. Por lo tanto una de las formas mas simplificadas de hacer esto sería lo siguiente. De esta manera optimizariamos codigo.



  /* function sumar () {
    let numero_uno = Number(prompt("Ingrese tu primer numero"))
    let numero_dos = Number(prompt("Ingrese tu primer segundo numero"))
    alert(numero_uno + numero_dos)
  }


  function restar () {
    let numero_uno = Number(prompt("Ingrese tu primer numero"))
    let numero_dos = Number(prompt("Ingrese tu primer segundo numero"))
    alert(numero_uno - numero_dos)
  }

  function multiplicar () {
    let numero_uno = Number(prompt("Ingrese tu primer numero"))
    let numero_dos = Number(prompt("Ingrese tu primer segundo numero"))
    alert(numero_uno * numero_dos)
  }

  function dividir () {
    let numero_uno = Number(prompt("Ingrese tu primer numero"))
    let numero_dos = Number(prompt("Ingrese tu primer segundo numero"))
    alert(numero_uno / numero_dos)
  }

  function calculadora() {
    let operacion = prompt("¿Qué operación quieres realizar? (+, -, *, /)");
  
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
        alert("Operación inválida. Por favor, ingresa una operación válida (+, -, *, /).");
        break;
    }
  }

  calculadora() */

  //Otra cosa a tener en cuenta es que las funciones se ejecutan, es decir se invocan y una vez que cumplen con la función se destruyen. Por ejemplo pueden observar que si no pones un +, - * o / en el prompt se corta la ejecución del programa.

/*   Los parámetros de una función son como variables especiales que se utilizan para recibir información o datos externos dentro de la función. Imagina que tienes una función que realiza una tarea específica, como sumar dos números. Los parámetros te permiten indicarle a la función qué números quieres sumar.

  Los parámetros son definidos cuando se declara la función. Puedes pensar en ellos como espacios reservados para los valores que deseas pasar a la función cuando la llamas o la ejecutas. Estos valores se conocen como argumentos.
  
  Por ejemplo, supongamos que tienes una función llamada "sumar" que recibe dos números y retorna su suma. La declaración de la función con los parámetros se vería así: */

  /* function sumar(num1, num2) {
    // Aquí se realiza la suma
    console.log (num1 + num2);
  }
  
  sumar(10,20) */
  
  //Pasamos dos valores como parametros, similar a las variables y despues en el momento de la llamada pasamos los valores que queremos sumar. Piensenlo como una especie de comodin o en matematica como la X. Los parametros serian la X y la Y y en la llamada sumar (10,20) serían los resultados que le pedimos a nuestro programa sumar.

  //Tambien podemos pasar valores de variables globales como parametros.
  //por ejemplo

/*   let nombre = prompt("Ingrese tu nombre")
  let apellido = prompt("Ingrese tu apellido")

  function nombreCompleto (nombre, apellido) {
    alert("Tu nombre completo es: " + nombre + " " + apellido);
  }

  nombreCompleto(nombre, apellido) */

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
sumar(6, 3);            
mostrar(resultado);  */

//En el siguiente codigo tenemos una variable global resultado inicializada en 0 la funcion sumar lo que va a hacer es hacer la operación pero en ningun momento muestra el resultado por consola. De eso justamente se va a encargar la función mostrar que pasaría como parametro la variable resultado para mostrar el mensaje.

/* La palabra reservada return se utiliza en las funciones para devolver un valor específico o resultado de la función al lugar donde fue llamada. Puedes pensar en ello como una forma de entregar un valor de salida desde una función.

Cuando una función alcanza una declaración return, se detiene la ejecución de la función y se devuelve el valor indicado. Esto significa que puedes usar return para enviar datos calculados o procesados dentro de una función al código que llamó a esa función. Es importante que el return solo devuelve el valor. Por lo tanto si despues queremos mostrar el resultado debemos usar console.log o alert.

Por ejemplo, considera la siguiente función llamada sumar que recibe dos números y devuelve su suma: */

/* function sumar(num1, num2) {
    return num1 + num2;
  }
  
  let resultado = sumar(3, 5);
  console.log(resultado); */

  //Retornamos la suma. Despues la llamada la guardamos en una variable y el resultado lo mostraremos con un console.log.

/*   function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8); */

//Fijense que en el ejemplo de Coder estamos tomando como parametro dos valores, lo estamos retornando e incluso invocando pero en ningun momento le estamos pidiendo a nuestro algoritmo que muestre ese resultado en console.log o alert.

// Haciendo la calculadora con return

/* function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*")); */

//En este caso a diferencia del anterior pasamos como parametro el primerNumero, segundoNumero y la operación. Y por cada case preguntaremos que operacion queremos hacer. Fijense que a diferencia de la anterior usaremos un return. Donde devolverá un resultado El break en este caso no es necesario ya que el return y break cumplen con el mismo objetivo: cortar con la ejecucion del algoritmo. Por ultimo en el momento de la llamada hacemos un console.log del llamado de la función. Tambien podriamos guardarlo en una variable como hicimos en el ejemplo anterior y despues hacer el console.log. Recordar que el return devuelve un resultado pero ese resultado no se muestra por consola ni por alerts.

/* const pizzaSeleccionada = prompt("Ingrese el tipo de pizza (Muzza, Napolitana, Fugazzeta, Anchoas):");

function pizzas(promptValue) {
  switch (promptValue) {
    case "Muzza":
      return "El precio de la Muzzarella es de $3500";
    case "Napolitana":
      return "El precio de la Napolitana es de $4000...";
    case "Fugazzeta":
      return "El precio de la Fugazzeta es de $4200";
    case "Anchoas":
      return "El precio de las Anchoas es de $4000";
    default:
      return "Opción inválida";
  }
}

// Ejemplo de uso:

const resultado = pizzas(pizzaSeleccionada);
console.log(resultado); */

//En este caso pasamos pizzaSelecionada como variable global donde el usuario ingresará que pizzza quiere comprar. promptValue es el parametro que pasaremos y que tambien lo analizaremos en el Switch. Cuando llamamos a la funcion lo almacenaremos en una variable para asi mostrarlo en un console.log. Recuerden que el return solo devuelve el valor pero no renderiza el resultado.

/* El "scope" (alcance) en JavaScript se refiere a la visibilidad y disponibilidad de las variables en diferentes partes de tu código. Cada vez que creas una variable en JavaScript, esa variable tiene un alcance determinado, lo que significa que solo se puede acceder a ella desde ciertas partes del código.

En JavaScript, hay dos tipos principales de scope: scope global y scope local.

Scope global: Las variables declaradas fuera de cualquier función se consideran globales y se pueden acceder desde cualquier parte del código, ya sea dentro de funciones u otros bloques de código. Estas variables son conocidas como variables globales.

Scope local: Las variables declaradas dentro de una función se consideran locales y solo se pueden acceder desde dentro de esa función. Estas variables son conocidas como variables locales. El alcance local también se aplica a las variables declaradas dentro de bloques de código, como condicionales (if, else) o bucles (for, while). Estas variables solo son visibles dentro del bloque en el que se declararon.

Es importante tener en cuenta que las variables locales tienen prioridad sobre las variables globales si tienen el mismo nombre. Esto significa que si tienes una variable con el mismo nombre en el alcance local y global, la variable local se usará dentro de la función, mientras que la variable global seguirá siendo accesible fuera de la función.

El scope es una parte fundamental de JavaScript, ya que te permite controlar la visibilidad y el acceso a las variables en tu código. Entender y utilizar correctamente el scope te ayudará a evitar conflictos de nombres y a escribir un código más organizado y fácil de mantener. */

/* let globalVariable = "Variable global"; // Variable global

function localScopeExample() {
  let localVariable = "Variable local"; // Variable local dentro de la función
  console.log(localVariable); // Imprime "Variable local"
  console.log(globalVariable); // Imprime "Variable global"
}

localScopeExample();
console.log(globalVariable); // Imprime "Variable global"
console.log(localVariable); // Error: localVariable is not defined */



/* let nombre = "John Doe" // variable global

function saludar() {
    let nombre = "Juan Coder" // variable local
    console.log(nombre)
}
//Accede a nombre global
console.log(nombre)   // → “John Doe”

//Accede a nombre local
saludar() // → “Juan Coder” */

//Ejemplo VAR y LET

/* function exampleVar() {
    if (true) {
      var x = 10;
      console.log(x); // Salida: 10
    }
    console.log(x); // Salida: 10
  }
  
  exampleVar();
  console.log(x) */; // Error: x no está definido

/*   En este ejemplo, la variable x se declara dentro de un bloque if, pero aún es accesible fuera del bloque. Esto se debe al alcance de función de var. Como resultado, el valor de x se muestra correctamente tanto dentro como fuera del bloque. */
  
/* function exampleLet() {
    if (true) {
      let y = 20;
      console.log(y); // Salida: 20
    }
    console.log(y); // Error: y no está definido
  }
  
  exampleLet();
  console.log(y); // Error: y no está definido */

/*   En este caso, la variable y se declara con let dentro del bloque if. Sin embargo, fuera del bloque, y no está definida y se produce un error. Esto se debe al alcance de bloque de let, que limita la accesibilidad de la variable solo dentro del bloque donde se declara.

   */
/* function exampleHoisting() {
    console.log(a); // Salida: undefined
    var a = 30;
    console.log(a); // Salida: 30
  }
  
  exampleHoisting(); */

/*   En este caso, la variable a se declara después del primer console.log(), pero aún se considera definida debido al hoisting. Sin embargo, su valor es undefined hasta que se le asigna el valor 30. Esto puede conducir a comportamientos confusos y difíciles de depurar.

En resumen, el uso de let en lugar de var proporciona un mejor control sobre el alcance de las variables y evita problemas asociados con el hoisting. */

/* En JavaScript, las funciones son bloques de código que pueden ser llamados o ejecutados en cualquier momento. Generalmente, las funciones se definen con un nombre para que puedan ser fácilmente referenciadas y reutilizadas en diferentes partes de un programa. Sin embargo, hay situaciones en las que deseamos tener una función que no necesite un nombre explícito, y es aquí donde entran en juego las funciones anónimas.

Las funciones anónimas se definen de manera similar a las funciones regulares, pero no se les asigna un nombre después de la palabra clave function. En cambio, se declaran directamente como expresiones dentro de una asignación o se pasan como argumentos a otras funciones. Aquí tienes un ejemplo: */

/* //Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) ) */





// Función anónima asignada a una variable
/* const saludar = function() {
    console.log("¡Hola, mundo!");
  };
  
  // Llamando a la función anónima
  saludar(); */

/*   En este caso, la función anónima se asigna a la variable saludar. La variable saludar ahora contiene la función y puede ser invocada utilizando los paréntesis (). Al llamar a saludar(), se ejecutará el bloque de código dentro de la función anónima y se mostrará "¡Hola, mundo!" en la consola. */

/* En JavaScript, las funciones de flecha se definen utilizando la sintaxis () => {}. A diferencia de las funciones regulares, no necesitan la palabra clave function ni tienen un nombre asignado. En cambio, se declaran directamente como expresiones dentro de una asignación o se pasan como argumentos a otras funciones.

Aquí tienes un ejemplo sencillo de una función de flecha:
 */

/* // Función de flecha que suma dos números
const sumar = (a, b) => {
    return a + b;
  };
  
  // Llamando a la función de flecha
  console.log(sumar(5, 3)); // Salida: 8 */
  
  /* En este caso, la función de flecha sumar toma dos parámetros (a y b) y devuelve la suma de ellos. La función se puede llamar usando sumar(5, 3), y mostrará el resultado de la suma, que es 8, en la consola.

  Una de las características más destacadas de las funciones de flecha es que ofrecen una sintaxis más compacta y clara, especialmente para funciones simples. Cuando una función de flecha tiene solo una expresión de retorno, se puede omitir la palabra clave return y las llaves {}. El resultado se devuelve automáticamente. Aquí tienes un ejemplo: */

  // Función de flecha con retorno implícito
/* const multiplicar = (a, b) => a * b;

// Llamando a la función de flecha
console.log(multiplicar(4, 2)); // Salida: 8 */

/* En este caso, la función de flecha multiplicar toma dos parámetros (a y b) y devuelve el producto de ellos. Dado que la función solo tiene una expresión de retorno (a * b), se puede omitir la palabra clave return y las llaves {}. */

 //Ejemplo aplicado. Aplicar precio.
 
/* const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio) */
