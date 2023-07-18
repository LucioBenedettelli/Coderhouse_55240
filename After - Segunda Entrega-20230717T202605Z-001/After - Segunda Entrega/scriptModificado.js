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
    
  ];
  
  let carrito = [];
  
  function buscarProducto() {
    let seleccion = prompt("Ingrese el nombre del producto que desea seleccionar: (Pepsi, Coca Cola, Sprite, Seven Up, Fanta, Coca Zero)");
    
    producto = productos.find((p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase());
  }
  
  function agregarCarrito() {
    if (producto) {
      let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
      carrito.push({
        producto: producto.nombreProducto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
      });
    } else {
      alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
    }
  }
  
  function confirmarCarrito() {
    while (true) {
      buscarProducto();
      agregarCarrito();
  
      if (!confirm("¿Desea agregar otro producto al carrito?")) {
        break;
      }
    }
  }
  
  function calcularTotal() {
    console.log("Carrito de compras:");
    carrito.forEach((item) => {
      console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
    });
  
    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);
    console.log(`Total a pagar: ${total}`);
  }
  
  function vaciarCarrito() {
    carrito = [];
    console.log("El carrito ha sido vaciado.");
  }
  
  confirmarCarrito();
  
  if (carrito.length > 0) {
    if (confirm("¿Desea vaciar el carrito?")) {
      vaciarCarrito();
    }
  }
  
  calcularTotal();
  