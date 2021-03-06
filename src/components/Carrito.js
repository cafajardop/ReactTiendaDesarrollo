import React from 'react';
import './carrito.css'
import Producto from './Producto';

//carrito de compras probando git
const Carrito = ({ carrito, setcarrito }) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>
        {carrito.length === 0
            ? <p>No hay elementos en el carrito</p>
            : carrito.map(producto => (
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito = {carrito}
                    setcarrito = {setcarrito}
                />
            ))}
    </div>
);

export default Carrito;