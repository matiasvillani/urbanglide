
const productos = [
    { id: 1, nombre: "", precio: 100, img: "./img/accesorio_once.png" },
    { id: 2, nombre: "", precio: 200, img: "./img/accesorio_doce.png" },
    { id: 3, nombre: "", precio: 300, img: "./img/accesorio_diez.png" },
  ];
  let carrito = [];
  let contadorIdUnico = 0;
  
  
  
  function obtenerProductos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
  }
  function mostrarProductos(productos) {
  
    const contenedorProductos = document.getElementById("productos");
  
    productos.forEach((producto) => {
  
      const card = document.createElement("div");
      card.className = "card col-3 mr-5";
      
  
      card.setAttribute("data-aos", "fade-up");
  
      card.innerHTML = `
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: $${producto.precio}</p>
          <button onclick="agregarAlCarrito(${producto.id})" class="btn btn-primary">Agregar al Carrito</button>
        </div>
        <span></span><span></span><span></span><span></span> 
      `;
  
      contenedorProductos.appendChild(card);
    });
  }
 
  function agregarAlCarrito(idProducto) {
  
    const producto = productos.find((producto) => producto.id === idProducto);
  
    console.log(`Contenido de producto: ${JSON.stringify(producto)}`);
  
    const productoConIdUnico = { ...producto, idUnico: contadorIdUnico++ };
  
    console.log(
      `Contenido de productoConIdUnico: ${JSON.stringify(productoConIdUnico)}`
    );
  
    carrito.push(productoConIdUnico);
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
  
    actualizarCarrito();
  
    Toastify({
      text: "Producto agregado al carrito",
      duration: 3000,
    }).showToast();
  
  }
  
  function actualizarCarrito() {
  
    const listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = "";
  
    carrito.forEach((producto) => {
  
      const itemCarrito = document.createElement("div");
      itemCarrito.className = "card col-3 mr-5 mb-5";
      itemCarrito.innerHTML = `
        <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: $${producto.precio}</p>
          <button onclick="eliminarDelCarrito(${producto.idUnico})" class="btn btn-danger">Eliminar</button>
        </div>
      `;
  
      listaCarrito.appendChild(itemCarrito);
    });
  
    calcularTotal();
  }
  

  function eliminarDelCarrito(idUnico) {
  
    carrito = carrito.filter((producto) => producto.idUnico !== idUnico);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
  
  
  
    Toastify({
      text: "Producto eliminado del carrito",
      duration: 3000,
      gravity: "top",
      position: "right",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }

  function calcularTotal() {
  
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    document.getElementById("totalCompra").innerText = `Total: $${total}`;
  
  }
  

  function finalizarCompra() {
    return new Promise((resolve, reject) => {
      if (carrito.length > 0) {
        setTimeout(() => {
          resolve("Compra finalizada con éxito");
        }, 2000);
      } else {
        reject("El carrito está vacío");
      }
    }); 
  }
  document.getElementById("finalizarCompra").addEventListener("click", () => {
    finalizarCompra()
      .then((mensaje) => {
        Toastify({
          text: mensaje,
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          style: {
            background: "#4fbe87",
          },
        }).showToast();
  
        carrito = [];
  
        localStorage.removeItem("carrito");
  
        actualizarCarrito();
      })
      .catch((error) => {
        Toastify({
          text: error,
          duration: 3000,
          close: true,
          gravity: "top",
          position: "center",
          backgroundColor: "#e74c3c",
        }).showToast();
      });
  });
  