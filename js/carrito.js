let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    if (carrito.length > 0) {
        carrito.forEach(function(producto, index) {
            let productoDiv = document.createElement('div');
            productoDiv.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <button class="eliminar-producto" data-index="${index}">Eliminar</button>
            `;
            carritoDiv.appendChild(productoDiv);
        });

        // Añadir el evento de clic para eliminar producto
        document.querySelectorAll('.eliminar-producto').forEach(function(boton) {
            boton.addEventListener('click', function() {
                const productoIndex = boton.getAttribute('data-index');
                eliminarProductoDelCarrito(productoIndex);
            });
        });
    } else {
        carritoDiv.innerHTML = '<p>El carrito está vacío</p>';
    }
}

function eliminarProductoDelCarrito(index) {
    carrito.splice(index, 1); // Elimina el producto del array
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Actualiza el localStorage
    mostrarCarrito(); // Refresca el carrito en la pantalla
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarCarrito(); // Muestra el carrito cuando la página se carga
});
