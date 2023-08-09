import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import "../css/cart.css";
import rubbishbin from '../assets/rubbishbin.png';
// import jwt from 'jsonwebtoken';
import reactToMyPizzaAPI from "../../api/reactToMyPizzaAPI";

export const Cart = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        obtenerCarrito();
    }, []);
// async function getCarrito() {
//     try {
//         await reactToMyPizzaAPI({
//             url: "api/cart/64d1be09a30684c4ba25ea5f",
//             method: "GET",
//           }).then((response) =>
//         console.log(response)
//         )
//     } catch (error) {
//         console.log("Ocurrió un error, por favor contactese con");
//     }
// }

// getCarrito()

    const obtenerCarrito = () => {

        // // Obtener el token de autenticación del almacenamiento local o donde corresponda
        // const token = localStorage.getItem('token'); // Asumiendo que el token se almacena en localStorage

        // // Decodificar el token para obtener los datos del usuario, que incluye su ID
        // const decodedToken = jwt.decode(token);
        // const usuarioId = decodedToken.userId;

        // const itemId = carrito._id;

        const usuarioValor = '64d1be09a30684c4ba25ea5f'

        reactToMyPizzaAPI.get(`/api/cart/${usuarioValor}`)
            .then(response => {
                setCarrito(response.data.carrito);
                calcularTotal(response.data.carrito);
                console.log(response);
            })
            .catch(error => {
                console.error('Error al obtener el carrito:', error);
                console.log(error);
            });
    };

    const calcularTotal = (items) => {
        const totalPrice = items.reduce((total, item) => total + item.cantidad * item.precio, 0);
        setTotal(totalPrice);
    };

    const cambiarCantidad = (itemId, newQuantity) => {
        const Cantidad = {
            usuario : '64d1be09a30684c4ba25ea5f',
            cantidad : newQuantity
        }
        reactToMyPizzaAPI.put(`/api/cart/edit/${itemId}`, { data : Cantidad })
            .then(response => {
                console.log(response);
                obtenerCarrito(); // Actualizar el carrito después de cambiar la cantidad
            })
            .catch(error => {
                console.error('Error al actualizar la cantidad:', error);
            });
    };

    const bodyID = {
        usuario : '64d1be09a30684c4ba25ea5f'
    }

    const eliminarProducto = (itemID) => {
        reactToMyPizzaAPI.delete(`/api/cart/delete/${itemID}` , { data : bodyID })
            .then(response => {
                console.log(response);
                obtenerCarrito(); // Actualizar el carrito después de eliminar un producto
            })
            .catch(error => {
                console.error('Error al eliminar el producto:', error);
            });
    };

    return (
        <Container className='containerCart'>
            <h2 className='pedidoTitle'>Su Pedido:</h2>
            <Table striped borderless responsive>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {carrito.map((item) => (
                        <tr key={item._id}>
                            <td>{item.nombre}</td>
                            <td>
                                <input
                                    className='inputCart'
                                    type="number"
                                    value={item.cantidad}
                                    min="1"
                                    onChange={(e) => cambiarCantidad(item._id, e.target.value)}
                                />
                            </td>
                            <td>${item.precio}</td>
                            <td>
                                <Button
                                    className='botonEliminar'
                                    variant="danger"
                                    onClick={() => eliminarProducto(item._id)}
                                >
                                    <img src={rubbishbin} alt="Eliminar" />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="total">
                <h5 className='totalCart'>Total: ${total}</h5>
                <Button className='botonPedido' variant="danger">Realizar Pedido</Button>
            </div>
        </Container>
    );
};