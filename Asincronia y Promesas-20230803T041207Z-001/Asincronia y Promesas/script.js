/* setTimeout(()=> {
    console.log("Proceso asincrónico")
}, 3000)
 */

/* console.log("Inicia proceso")

setTimeout(()=> {
    console.log("Mitad de proceso")
}, 2000)

console.log("Fin proceso") */

// Inicia proceso
// Fin proceso

// Mitad de proceso  - tras 2 segundos

// Inicia proceso esta en un console.log normal por eso se ejecuta primero
// Se ejecuta el setTimeOut pero no da un resultado hasta que pasen dos segundos. Por lo tanto ese bloque queda en "espera"
//Se ejecuta el console.log de fin de proceso.
// Finalmente se ejecuta el console.log del setTimeOut al pasar dos segundos.

/* const btn = document.querySelector('#boton')
const popup = document.querySelector('#popup-mensaje')

btn.addEventListener('click', () => {
    popup.classList.add('popup-active')

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500)
}) */

//Parecido al todoList que hicimos creamos un boton desde HTML con un <div> que muestra un mensaje
//Desde JS le pasamos un evento al boton que cuando hagamos click ahi agreguemos una clase llamada pop-up active
//Cuando pasen 2 segundos vamos a remover esa clase. Por lo tanto sacamos del DOM el contenido.

/* En este ejemplo, el mensaje emergente es inicialmente invisible (opacity: 0) y oculto (display: none). Cuando se agrega la clase "popup-active", la propiedad opacity cambia a 1, y la propiedad display cambia a "block", lo que hace que el mensaje emergente sea visible. La propiedad transition hace que el cambio de opacity se haga gradualmente durante medio segundo.
 */

//Forma sincronica. Se ejecuta linea por linea en el momento
/* for (let letra of "hola") {
    console.log(letra)
}

for (let letra of "mundo") {
    console.log(letra)
} */

//Se ejecuta de manera asincronica. Verán un delay. Eso es porque porque cuando pase un segundo se ejecuta la palabra "hola". Una vez que se resuelva eso. Hará lo mismo con "Mundo". Es decir tardará dos segundos en total en ejecutar todo el bloque.
/* for (let letra of "hola") {
    setTimeout(() => {
        console.log(letra)
    }, 1000)
}

for (let letra of "mundo") {
    setTimeout(() => {
        console.log(letra)
    }, 3000)
}
 */

/* setInterval:

setInterval se utiliza para ejecutar una función repetidamente cada cierto intervalo de tiempo (también expresado en milisegundos).
La función que queremos ejecutar se pasa como primer argumento a setInterval, y el intervalo de tiempo se especifica como segundo argumento.
La función se ejecutará una vez después de cada intervalo de tiempo, y continuará ejecutándose indefinidamente hasta que se cancele. */


/* let counter = 0
const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000)
 */

/* console.log("Inicio")

const fin = setTimeout(() => {
    console.log("fin")
}, 2000)

clearTimeout(fin) */

/* Se imprime "Inicio" en la consola.
Se define una variable fin que almacena el resultado de setTimeout. Esto inicia un temporizador para que, después de 2000 milisegundos (2 segundos), se ejecute la función que contiene el console.log("fin").
Inmediatamente después de definir fin, se llama a clearTimeout(fin). Esto cancela el temporizador que se estableció anteriormente con setTimeout, evitando que la función programada para mostrar "fin" se ejecute después de los 2 segundos.
En resumen, debido a la llamada a clearTimeout(fin), el temporizador se cancela antes de que se alcancen los 2000 milisegundos, por lo que la función que imprime "fin" nunca se ejecutará. */

/* const eventoFuturo = () => {
    return new Promise( (resolve, reject) => {
        //cuerpo de la promesa
    } )
}
console.log( eventoFuturo() ) // Promise { <pending>  */

/* const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
} */

/* console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
console.log( eventoFuturo(false) ) */ // Promise { <rejected> 'Promesa rechazada' 

/* const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}

console.log( eventoFuturo(true) ) // Promise { <pending> }
console.log( eventoFuturo(false) ) */ // Promise { <pending> }

/* El motivo por el cual ambas promesas (eventoFuturo(true) y eventoFuturo(false)) aparecen como "pending" es porque las promesas son asincrónicas. Cuando creas una promesa con new Promise, el código dentro de la promesa se ejecuta de forma asíncrona, lo que significa que no bloquea la ejecución del resto del código. La función setTimeout también es asincrónica y programará la resolución de la promesa después de 2000 milisegundos (2 segundos) en este caso.

El console.log que estás viendo se ejecuta antes de que las promesas se resuelvan o se rechacen, por lo que en ese momento las promesas aún están en estado "pending" (pendientes).

Para manejar el resultado de las promesas, debes usar .then() y .catch() o async/await para esperar a que se resuelvan o se rechacen. */

/* const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada');
        }, 2000);
    });
}

eventoFuturo(true)
  .then((resultado) => {
    console.log(resultado); // Se ejecutará después de 2 segundos y mostrará "Promesa resuelta"
  })
  .catch((error) => {
    console.log(error); // En este caso, no se ejecutará ya que la promesa se resuelve, no se rechaza.
  })

  .finally(() => {
    console.log("Fin del proceso")
})


eventoFuturo(false)
  .then((resultado) => {
    console.log(resultado); // En este caso, no se ejecutará ya que la promesa se rechaza.
  })
  .catch((error) => {
    console.log(error); // Se ejecutará después de 2 segundos y mostrará "Promesa rechazada"
  })

  .finally( () => {
    console.log("Fin del proceso")
}) */

/* const BD = [
    { id: 1, nombre: 'Producto 1', precio: 1500 },
    { id: 2, nombre: 'Producto 2', precio: 2500 },
    { id: 3, nombre: 'Producto 3', precio: 3500 },
    { id: 4, nombre: 'Producto 4', precio: 3500 },
  ];

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(BD);
      }, 3000);
    });
  };

  const renderProductos = (arr) => {
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.innerHTML = ''; // Limpiar el contenido anterior

    arr.forEach((producto) => {
      const productoElement = document.createElement('div');
      productoElement.textContent = `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}`;
      productosContainer.appendChild(productoElement);
    });
  };

  // Inicializar el array de productos vacío
  let productos = [];

  // Asincrónicamente pedimos los datos y generamos la vista
  pedirProductos()
    .then((res) => {
      productos = res;
      renderProductos(productos);
    }); */
  
/*     El código anterior realiza lo siguiente:

Define la función pedirProductos que devuelve una promesa que se resuelve después de 3 segundos con los datos de productos almacenados en BD.

Define la función renderProductos, que simplemente muestra en la consola la información de cada producto.

Inicializa el array productos vacío.

Llama a pedirProductos y, una vez que la promesa se resuelve, actualiza el array productos con los datos obtenidos y llama a renderProductos para mostrar la vista de los productos en la consola.

Este código simula un retraso en la obtención de datos y luego actualiza la interfaz de usuario con los productos obtenidos. Puedes ajustar la lógica de renderProductos para que se adapte a la generación de la vista real en tu aplicación. */