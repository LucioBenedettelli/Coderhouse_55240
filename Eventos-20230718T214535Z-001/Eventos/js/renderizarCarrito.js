let productos = [
  {
    id: 1,
    nombreProducto: "Pepsi",
    descripcion: "Es la mejor pepsi que existe",
    precio: 500,
    imagen: "./assets/pepsi.png",
    cantidad: 0
  },

  {
    id: 2,
    nombreProducto: "Coca Cola",
    descripcion: "Es la mejor pepsi que Coca que existe",
    precio: 600,
    imagen: "./assets/coca.jpg",
    cantidad: 0
  },

  {
    id: 3,
    nombreProducto: "Sprite",
    descripcion: "Es la mejor Sprite que existe",
    precio: 300,
    imagen: "./assets/sprite.jpg",
    cantidad: 0
  },

  {
    id: 4,
    nombreProducto: "Seven Up",
    descripcion: "Es la mejor 7up que existe",
    precio: 450,
    imagen: "./assets/seven.jpg",
    cantidad: 0
  },

  {
    id: 5,
    nombreProducto: "Fanta",
    descripcion: "Es la mejor Fanta que existe",
    precio: 450,
    imagen: "./assets/fanta.png",
    cantidad: 0
  },

  {
    id: 6,
    nombreProducto: "Coca Zero",
    descripcion: "Es la mejor Coca Zero que existe",
    precio: 450,
    imagen: "./assets/coca zero.jpg",
    cantidad: 0
  }
]

let productCards = document.getElementById("product-cards");
let carrito = []; // Array vacío para almacenar los productos agregados

for (let i = 0; i < productos.length; i++) {
  let producto = productos[i];

  let cardHTML = `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
      <div class="card-body">
        <h5 class="card-title">${producto.descripcion}</h5>
        <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
        <input type="number" class="form-control mb-2" placeholder="Cantidad" value="0" data-producto-id="${producto.id}"> <!-- Agregamos el atributo data-producto-id -->
        <button class="btn btn-agregar-carrito" data-producto-id="${producto.id}">Agregar al carrito</button>
      </div>
    </div>
  </div>
  `;

  productCards.innerHTML += cardHTML;
}

// Agregar evento input a los inputs de cantidad
let cantidadInputs = document.querySelectorAll('input[type="number"]');

for (let i = 0; i < cantidadInputs.length; i++) {
  let input = cantidadInputs[i];
  input.addEventListener("input", actualizarCantidad);
}

// Agregar evento click a los botones "Agregar al carrito"
let agregarButtons = document.getElementsByClassName("btn-agregar-carrito");

for (let i = 0; i < agregarButtons.length; i++) {
  let button = agregarButtons[i];
  button.addEventListener("click", agregarAlCarrito);
}

// Función para actualizar la cantidad del producto en el objeto productos
function actualizarCantidad(event) {
  let input = event.target;
  let productoId = input.getAttribute("data-producto-id");
  let cantidad = parseInt(input.value);

  // Buscar el producto por su ID en el array de productos
  let producto = productos.find((producto) => producto.id === parseInt(productoId));

  // Actualizar la cantidad del producto en el objeto productos
  producto.cantidad = cantidad;
}

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
  let button = event.target;
  let productoId = button.getAttribute("data-producto-id");

  // Buscar el producto por su ID en el array de productos
  let producto = productos.find((producto) => producto.id === parseInt(productoId));

  // Verificar si el producto ya está en el carrito
  let productoEnCarrito = carrito.find((item) => item.id === producto.id);

  if (productoEnCarrito) {
    // Si el producto ya está en el carrito, incrementar la cantidad
    productoEnCarrito.cantidad += producto.cantidad;
  } else {
    // Si el producto no está en el carrito, agregarlo con la cantidad actual
    carrito.push({ ...producto });
  }

  console.log("Producto agregado al carrito. ID: " + productoId);
  console.log("Carrito:", carrito);
}