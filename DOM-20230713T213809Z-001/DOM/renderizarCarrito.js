 // Datos del producto
 let productos = [
    {
      id: 1,
      nombreProducto: "Pepsi",
      descripcion: "Es la mejor pepsi que existe",
      precio: 500,
      imagen: "./assets/pepsi.png"
    },
  
    {
      id: 2,
      nombreProducto: "Coca Cola",
      descripcion: "Es la mejor pepsi que Coca que existe",
      precio: 600,
      imagen: "./assets/coca.jpg"
    },
  
    {
      id: 3,
      nombreProducto: "Sprite",
      descripcion: "Es la mejor Sprite que existe",
      precio: 300,
      imagen: "./assets/sprite.jpg"
    },
  
    {
      id: 4,
      nombreProducto: "Seven Up",
      descripcion: "Es la mejor 7up que existe",
      precio: 450,
      imagen: "./assets/seven.jpg"
    },
  
    {
      id: 5,
      nombreProducto: "Fanta",
      descripcion: "Es la mejor Fanta que existe",
      precio: 450,
      imagen: "./assets/fanta.png"
    },
  
    {
      id: 6,
      nombreProducto: "Coca Zero",
      descripcion: "Es la mejor Coca Zero que existe",
      precio: 450,
      imagen: "./assets/coca zero.jpg"
    }
  ]

  // Generar las tarjetas de productos
  var productCards = document.getElementById("product-cards");

  for (var i = 0; i < productos.length; i++) {
    var producto = productos[i];

    var cardHTML = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${producto.imagen}" class="card-img-top" alt="Imagen del producto">
          <div class="card-body">
            <h5 class="card-title">${producto.descripcion}</h5>
            <p class="card-text">Precio: $${producto.precio.toFixed(2)}</p>
            <input type="number" class="form-control mb-2" placeholder="Cantidad" value="${producto.cantidad}">
            <button class="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    `;

    productCards.innerHTML += cardHTML;
  }