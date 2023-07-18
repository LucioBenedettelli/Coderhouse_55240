class Producto {
    constructor(id, nombreProducto, precio) {
      this.id = id;
      this.nombreProducto = nombreProducto;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [
        new Producto(1, "Pepsi", 500),
        new Producto(2, "Coca Cola", 600),
        new Producto(3, "Sprite", 300),
        new Producto(4, "Seven Up", 450),
        new Producto(5, "Fanta", 450),
        new Producto(6, "Coca Zero", 450)
      ];
      this.items = [];
    }
  
    buscarProducto(nombreProducto) {
      return this.productos.find((producto) =>
        producto.nombreProducto.toLowerCase() === nombreProducto.toLowerCase()
      );
    }
  
    agregarItem(producto, cantidad) {
      this.items.push({
        producto: producto.nombreProducto,
        cantidad: cantidad,
        subtotal: producto.precio * cantidad
      });
    }
  
    confirmarCarrito() {
      while (true) {
        let seleccion = prompt(
          "Ingrese el nombre del producto que desea seleccionar: (Pepsi, Coca Cola, Sprite, Seven Up, Fanta, Coca Zero)"
        );
  
        let producto = this.buscarProducto(seleccion);
  
        if (producto) {
          let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));
          this.agregarItem(producto, cantidad);
        } else {
          alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");
        }
  
        if (!confirm("¿Desea agregar otro producto al carrito?")) {
          break;
        }
      }
    }
  
    calcularTotal() {
      console.log("Carrito de compras:");
      this.items.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);
      });
  
      let total = this.items.reduce((sum, item) => sum + item.subtotal, 0);
      console.log(`Total a pagar: ${total}`);
    }
  
    vaciarCarrito() {
      this.items = [];
      console.log("El carrito ha sido vaciado.");
    }
  }
  
  const carrito = new Carrito();
  carrito.confirmarCarrito();
  
  if (carrito.items.length > 0) {
    if (confirm("¿Desea vaciar el carrito?")) {
      carrito.vaciarCarrito();
    }
  }
  
  carrito.calcularTotal();
  