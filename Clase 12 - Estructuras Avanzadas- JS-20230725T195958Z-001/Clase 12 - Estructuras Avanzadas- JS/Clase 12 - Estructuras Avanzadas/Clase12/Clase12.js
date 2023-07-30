
  const productos = [
    { id: 1, nombre: 'arroz', precio: 300 },
    { id: 2, nombre: 'leche', precio: 200 },
    { id: 3, nombre: 'yerba', precio: 500 },
    { id: 4, nombre: 'queso', precio: 400 },
  ];

  const carrito = [];

  function listarProductos() {
    const lista = document.getElementById('listProductos');

    for (const producto of productos) {
      const { id, nombre, precio } = producto;

      const cardProducto = document.createElement('div');
      cardProducto.innerHTML = `
        <h3>${nombre}</h3>
        <h3>$ ${precio}</h3>
        <button class="button" id="${id}">Agregar al carrito</button>
      `;
      cardProducto.className = 'card';
      lista.append(cardProducto);

      const botonParaAgregar = document.getElementById(`${id}`);
      botonParaAgregar.addEventListener('click', () => agregarAlCarrito(producto));
    }
  }

  function agregarAlCarrito(productoAAgregar) {
    const productoEnCarrito = carrito.find((producto) => producto.id === productoAAgregar.id);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad += 1;
      actualizarCarrito();
    } else {
      const productoConCantidad = { ...productoAAgregar, cantidad: 1 };
      carrito.push(productoConCantidad);
      actualizarCarrito();
    }
  }

  function actualizarCarrito() {
    const carritoContendor = document.getElementById('carrito');
    carritoContendor.innerHTML = '';

    for (const producto of carrito) {
      const { id, nombre, precio, cantidad } = producto;

      const cardCarrito = document.createElement('div');
      cardCarrito.innerHTML = `
        <h3>${nombre}</h3>
        <h3>$ ${precio}</h3>
        <h3>Cantidad: ${cantidad}</h3>
        <h3>Total de ${nombre}: $ ${cantidad * precio}</h3>
      `;
      cardCarrito.setAttribute('id', `producto${id}`);
      carritoContendor.append(cardCarrito);
    }
  }

  listarProductos();

