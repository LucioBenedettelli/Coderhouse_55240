let carrito = "";
let nuevoOperacion = false;

let producto = prompt("Ingrese el nombre del producto que desea comprar (Leche, Pan, Harina, Yogurt):");
let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));

function hacerCarrito(producto, cantidad) {
  do {
    seleccionarProducto(producto, cantidad);
    nuevoOperacion = confirm("¿Desea agregar otro producto al carrito?");
    if (nuevoOperacion) {
      producto = prompt("Ingrese el nombre del producto que desea comprar (Leche, Pan, Harina, Yogurt):");
      cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
    }
  } while (nuevoOperacion);

  console.log("Productos en el carrito:");
  console.log(carrito);
}

function seleccionarProducto(producto, cantidad) {
  switch (producto.toLowerCase()) {
    case "leche":
      carrito += `Leche - Cantidad: ${cantidad} - Precio Total: ${350 * cantidad} pesos\n`;
      break;
    case "pan":
      carrito += `Pan - Cantidad: ${cantidad} - Precio Total: ${600 * cantidad} pesos\n`;
      break;
    case "harina":
      carrito += `Harina - Cantidad: ${cantidad} - Precio Total: ${700 * cantidad} pesos\n`;
      break;
    case "yogurt":
      carrito += `Yogurt - Cantidad: ${cantidad} - Precio Total: ${500 * cantidad} pesos\n`;
      break;
    default:
      alert("El producto ingresado no está disponible.");
      break;
  }
}

hacerCarrito(producto, cantidad);
