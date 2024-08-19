let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento a todos los botones de "Agregar al Carrito"
    document.querySelectorAll('.agregar-carrito').forEach(function(boton) {
        boton.addEventListener('click', function() {
            const productoId = boton.getAttribute('data-id');
            agregarProductoAlCarrito(productoId);
        });
    });
});

function agregarProductoAlCarrito(productoId) {
    //Lista de los productos con detalles de cada uno
    const producto = {
        id: productoId,
        nombre: 'PC GAMER',  
        precio: 790000, 
        cantidad: 1
    };

    // Agregar producto al carrito
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
}
