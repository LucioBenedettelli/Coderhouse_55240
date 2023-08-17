/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json)); */

//console.log( fetch('https://jsonplaceholder.typicode.com/posts') )

//Te devuelve pendiente porque el fetch justamente es una promesa.
//Habiamos hablado de 3 estados (pendiente), resuelto y rechazado. Como acá le estamos pasando la ruta pero no estamos haciendo nada con esa ruta justamente el estado es "pendiente". Para que no quede pendiente deberemos usar el .then como usamos la clase anterior para justamente manipular los estados de la promesa

/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => console.log(resp)) */

//Accedemos a la información a través del response. Van a ver que podemos ver varios metodos y propiedades. Ahi incluso podemos ver el Status 200 (que la petición salio bien) como tambien podemos ver la información de los Headers.

//Pero que nos esta faltando? Esto nos sirve para poder por ejemplo traerme todo mi array de productos y ponerlo en mi proyecto? Por ejemplo para armar una card.


/* fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json)) */

//Para eso lo que tenemos que hacer es al response pasarlo a otro formato para manipular la informacion. Ya que el Response te devuelve una promesa con todas las propiedades solamente. Al pasarlo un JSON nos devolvera toda la información que tenemos en la API pero en formato de objeto.

/*   fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (resp) => resp.json() )
    .then( (data) => {
        console.log(data)
    }) */


/* fetch('https://jsonplaceholder.typicode.com/posts')
.then( (resp) => resp.json() )
.then( (data) => {
    console.log( data[0].title )
    console.log( data[0].body )
})
*/

/* const lista = document.querySelector('#listado')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((resp) => resp.json())
    .then((data) => {

        data.forEach(({title, body}) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${title}</h4>
                <p>${body}</p>
            `
            lista.append(li)
        })
    })
 */

/*     fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Coderhouse',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => console.log(data)) */

/*     const lista = document.querySelector('#listado')

fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    }) */

/* 
const resp = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp)  */

//Veran que queda pendiente porque ocurre exactamente lo mismo que en el caso anterior. Le estan pegando a la ruta pero no le están diciendo nada sobre que hacer con ella. El console.log se ejecuta antes que la promesa se resuelva, digamos.

/* const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp) 
 */
//Tira error porque await SOLO puede usarse DENTRO de una función asincronica.

/* const pedirPosts = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await resp.json()
   
    data.forEach((post) => {
        const li = document.createElement('li')
        li.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
        `
        lista.append(li)
    })
}

pedirPosts() */

//De esta manera creamos una funcion de flecha con el prefijo async y despues pasamos el await dentro del fetch y dentro de data. Para decirle que son pedidos asincronos
