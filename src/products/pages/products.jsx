import React, { useContext, useEffect, useState } from "react";
import { Button , Container } from 'react-bootstrap';
import '../css/products.css';
import { Route } from "react-router";

import { PizzeriaContext } from "../../PedidosContext/PedidosContext";

import { Link } from "react-router-dom";
import reactToMyPizzaAPI from "../../api/ApiReactToMyPizza";
export const Products = () => {
    const urlParams  = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');  
    const [producto, setProducto] = useState([])
    
    useEffect(() => {
      try {
        reactToMyPizzaAPI.get(`api/products/get-one/${id}`).then((response) =>{
            const RespProducto = response.data.response;
            console.log(RespProducto)
            
            setProducto(RespProducto)
            
        })
      } catch (error) {
        console.log("Ocurrió un error, por favor contactese con el administrador")
      }    
      
    }, [])
    const {nombre,precio,descripcion,imagen} = producto

    // Mostrar todos los productos:
    const [productos, setProductos] = useState([])
        useEffect(() => {
            try {
            // Peticion GET (Todos los productos)
          reactToMyPizzaAPI.get('/api/products/').then((response) =>{
            const listaProductos = response.data.response;            
            setProductos(listaProductos)
            
          })    
        } catch (error) {
                console.log(`Ha ocurrido un error a la hora de querer obtener los productos, por favor contacte un administrador: ${error}`)
            }
        }, [])

        // --- Cantidad ---

        const {currentUser} = useContext(PizzeriaContext)

        const [cantidadAEnviar, setCantidadAEnviar] = useState(1);

        const cambiarCantidad = (cant) => {
            setCantidadAEnviar(cant);
        };

        const agregarProducto = () => {

            if(currentUser) {
    
                const usuarioId4 = currentUser._id;
    
                const bodyIDadd = {
                    nombre : producto.nombre,
                    precio : producto.precio,
                    cantidad : cantidadAEnviar,
                    usuario : usuarioId4
                }
        
                reactToMyPizzaAPI.post(`/api/cart/new` , { data : bodyIDadd })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error => {
                        console.error('Error al eliminar el producto:', error);
                    });
                }
        };

    return (
        <>
            {/* Primer div con foto del producto y detalles */}
            <Container className="product-details">
                <div className="product-image">
                {/* Aquí la imagen del producto */}
                <img src={imagen} alt={nombre} />
                </div>
                <div className="product-info">
                <h1 className="product-title-product-page">{nombre}</h1>
                <h3 className="product-price-product-page">${precio}</h3>
                <p>{descripcion}</p>
                <div className="product-actions">
                    <input type="number"
                    min="1" max="55"
                    defaultValue="1"
                    onChange={(e) => cambiarCantidad(e.target.value)}
                    />
                    <Button variant="danger"
                    onClick={() => agregarProducto()}>
                    Agregar al pedido
                    </Button>
                </div>
                </div>
            </Container>

            {/* Segundo div con los pasos para realizar el pedido */}
                <h2 className="sec-title">¿Cómo realizar tu pedido?</h2>
            <div className="how-to-order">
                <div className="step-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25D2Fb5RZd7SPLYv9sGzq4WvLoaNtMPK62SB8SFOp6qsAQgKQ1hRqSMZseWRAxEu2PvI&usqp=CAU" alt="Ingredientes" />
                <h3>Empezas eligiendo</h3>
                <p>Explorá nuestra deliciosa variedad de pizzas! Desde las clásicas de toda la vida hasta esas que no todos se animan a probar, tenemos para todos los gustos!</p>
                </div>
                <div className="step-card">
                <img src="https://static.thenounproject.com/png/2206218-200.png" alt="Agregar al carrito" />
                <h3>Agregá a tu pedido</h3>
                <p>Tenemos varias opciones para dejar contento a cada uno de tus invitados, amigos, familiares o esa persona especial a la que queres sorprender.</p>
                </div>
                <div className="step-card">
                <img src="https://cdn-icons-png.flaticon.com/512/4645/4645316.png" alt="Revisando el pedido" />
                <h3>Revisá todo</h3>
                <p>En el carrito tendrás los detalles de tu pedido así revisas si está todo en orden antes de confirmar el pedido. Queremos que todo te llegue perfecto!</p>
                </div>
                <div className="step-card">
                <img src="https://cdn2.iconfinder.com/data/icons/food-drink-3/512/Pizza-512.png" alt="Pizza cortada y porción" />
                <h3>Disfrutá</h3>
                <p>Confirmada la dirección de entrega y método de pago, ahora solo te queda esperar. ¡Estás a punto de recibir las mejores pizzas! ¡Disfrutalas!</p>
                </div>
            </div>

            {/* Tercer div con productos relacionados */}
                <h2 className="sec-title">Productos Relacionados</h2>
                    <section className='home-tercer-section-menu'>
            <h2 className='home-tercer-section-tituloMenu'>Menú</h2>
            <div className='home-contenedor-cards-productos'>
                
            {productos.map((producto) => (
            <div key={producto.id} className="home-card-productos">
                <img src={producto.imagen} alt={producto.nombre} className="home-imagen-productos"/>
                <div className='home-contenedor-info-productos'>
                <h2 className='home-nombre-producto'>{producto.nombre}</h2>
                <p className='home-precio-producto'>${producto.precio}</p>
                <p className='home-descripcion-producto'>{producto.descripcion}</p>
                <Link onClick={() => Window.location.reload()} to={`/producto?id=${producto._id}`}>
                <button className='home-boton-verProducto'>Ver producto</button>
                </Link>
                </div>
            </div>
          ))}
            </div>
        </section>
        </>
    )
}
