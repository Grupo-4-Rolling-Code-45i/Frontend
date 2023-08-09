import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import '../css/busqueda.css';
import reactToMyPizzaAPI from '../../api/ApiReactToMyPizza';

export const Buscar = () => {
  const urlParamsBuscar = new URLSearchParams(window.location.search);
  const termino = urlParamsBuscar.get('buscar');
  const [productosEncontrados, setProductosEncontrados] = useState([]);

  useEffect(() => {
    reactToMyPizzaAPI.get(`api/products/buscar/${termino}`)
      .then((response) => {
        const respProductosEncontrados = response.data.response;
        setProductosEncontrados(respProductosEncontrados);
      })
      .catch((error) => {
        console.log('Ha ocurrido un error al obtener los productos encontrados:', error);
      });
  }, [termino]);

  return (
    <section className='resultados-de-busqueda-section'>
      <h2 className='home-tercer-section-tituloMenu'>Resultados de la búsqueda: </h2>
      <div className='home-contenedor-cards-productos'>
        {(productosEncontrados === undefined) ? (
          <p>No se encontraron productos.</p>
        ) : (
          productosEncontrados.map((producto) => (
            <div key={producto._id} className="home-card-productos">
              <img src={producto.imagen} alt={producto.nombre} className="home-imagen-productos"/>
              <div className='home-contenedor-info-productos'>
                <h2 className='home-nombre-producto'>{producto.nombre}</h2>
                <p className='home-precio-producto'>${producto.precio}</p>
                <p className='home-descripcion-producto'>{producto.descripcion}</p>
                <Link to={`/producto?id=${producto._id}`}>
                  <button className='home-boton-verProducto'>Ver producto</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
