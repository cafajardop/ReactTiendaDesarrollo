import React from 'react';

const Producto = ({ producto, carrito, setcarrito, productos }) => {
    //Producto es lo que llega y lo puedo igualar a las variables => condicion se deben llamar igual
    const { nombre, Precio, id } = producto
    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto.id === id)[0];
        setcarrito([
            ...carrito,
            producto
        ]);
    }
    //Eliminar un producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //Colocar los productos en el state
        setcarrito(productos)
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${Precio}</p>
            {productos
                ?
                (
                    <button
                        type="button"
                        onClick={() => seleccionarProducto(id)} //llamamos nuestra funcion de comprar
                    >Comprar</button>
                )
                :
                (
                    <button
                        type="button"
                        onClick={()=> eliminarProducto(id)}
                    >Eliminar</button>
                )
            }
        </div>
    );
}
export default Producto;