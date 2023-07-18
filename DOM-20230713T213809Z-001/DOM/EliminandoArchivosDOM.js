let parrafo = document.getElementById("parrafo1");
console.log(parrafo)
//Elminando el propio elemento
parrafo.remove();
console.log(parrafo)

let paises = document.getElementsByClassName("paises");
//Eliminando el primer elemento de clase paises
paises[0].remove()
