import React, { useState, useEffect, useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import "../css/cart.css";
import rubbishbin from '../assets/rubbishbin.png';
// import jwt from 'jsonwebtoken';
import reactToMyPizzaAPI from "../../api/reactToMyPizzaAPI";
import { PizzeriaContext } from "../../PedidosContext/PedidosContext";

export const Cart = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    const {currentUser} = useContext(PizzeriaContext)

    useEffect(() => {
        obtenerCarrito();
    }, [currentUser]);

    // --- Obtener carrito ---

    const obtenerCarrito = () => {

        if(currentUser) {

        // // Obtener el token de autenticación del almacenamiento local o donde corresponda
        // const token = localStorage.getItem('token'); // Asumiendo que el token se almacena en localStorage

        // // Decodificar el token para obtener los datos del usuario, que incluye su ID
        // const decodedToken = jwt.decode(token);
        // const usuarioId = decodedToken.userId;

        // Obtener carrito petición GET

        const usuarioId1 = currentUser._id;

        reactToMyPizzaAPI.get(`/api/cart/${usuarioId1}`)
            .then(response => {
                setCarrito(response.data.carrito);
                calcularTotal(response.data.carrito);
                console.log(response);
            })
            .catch(error => {
                console.error('Error al obtener el carrito:', error);
                console.log(error);
            });
        }

    };

    // --- Calcular el total ---

    const calcularTotal = (items) => {
        const totalPrice = items.reduce((total, item) => total + item.cantidad * item.precio, 0);
        setTotal(totalPrice);
    };

    // --- Cambiar cantidad lógica ---

    const cambiarCantidad = (itemId, newQuantity) => {

        if(currentUser) {

            const usuarioId2 = currentUser._id;

        const cantidad = {
            usuario : usuarioId2,
            cantidad : newQuantity
        }

        // Actualiza el estado de carrito con los cambios en la cantidad
    const updatedCarrito = carrito.map(item =>
        item._id === itemId ? { ...item, cantidad: parseInt(newQuantity) } : item
    );

    setCarrito(updatedCarrito);

    // Petición PUT

        reactToMyPizzaAPI.put(`/api/cart/edit/${itemId}`, { data : cantidad })
            .then(response => {
                console.log(response);
                obtenerCarrito(); // Actualizar el carrito después de cambiar la cantidad
            })
            .catch(error => {
                console.error('Error al actualizar la cantidad:', error);
            });
        }
    };

    // Eliminar producto DELETE

    const eliminarProducto = (itemID) => {

        if(currentUser) {

            const usuarioId3 = currentUser._id;

            const bodyID = {
                usuario : usuarioId3
            }
    
            reactToMyPizzaAPI.delete(`/api/cart/delete/${itemID}` , { data : bodyID })
                .then(response => {
                    console.log(response);
                    obtenerCarrito(); // Actualizar el carrito después de eliminar un producto
                })
                .catch(error => {
                    console.error('Error al eliminar el producto:', error);
                });
            }
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