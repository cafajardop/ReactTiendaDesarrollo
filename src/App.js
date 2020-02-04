import React, { Component, Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formu from './components/Formu';
import Footer from './components/footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';
import './App.css';

function App() {

  //Crear listado de productos
  const [productos, setProductos] = useState
    ([
      { id: 1, nombre: 'Camisa ReactJS', Precio: 10 },
      { id: 2, nombre: 'Camisa NodeJS', Precio: 20 },
      { id: 3, nombre: 'Camisa JavaScript', Precio: 30 },
      { id: 4, nombre: 'Camisa Angular', Precio: 40 }
    ])

  //State para un carrito de compras
  const [carrito, setcarrito] = useState([])

  useEffect(() => {
    //Buscar con el metodo find => javascript
    const d = productos.find(item => item.id === 2)
    console.log(d.nombre);

    //Metodo filter muy parecido a el metodo find
    const f = productos.filter(item => item.id > 2)
    console.log(f);

    Cambio()
  }, [])

  //Inyectar algo al state o setearlo spray operator
  function Cambio() {
    setProductos([...productos, { id: 5, nombre: 'Camisa VueJS', Precio: 20 }])
  }
  //Obtener la fecha
  const fecha = new Date().getFullYear();
  //Todo antes del return
  return (
    <Fragment>
      <Header
        titulo='Tienda Desarrollo'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto => //con el map puedo iterar una lista y siempre devolvera algo
        (
          <Producto
            key={producto.id}
            producto= {producto}
            productos = {productos}
            carrito = {carrito}
            setcarrito = {setcarrito}
          />
        ))}
      <Formu />
      <Carrito
        carrito ={carrito}
        setcarrito = {setcarrito}
      />
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}
export default App;