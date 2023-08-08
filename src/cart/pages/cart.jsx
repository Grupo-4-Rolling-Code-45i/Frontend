import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import "../css/cart.css";
import rubbishbin from '../assets/rubbishbin.png';

export const Cart = () => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        obtenerCarrito();
    }, []);

    const obtenerCarrito = () => {
        axios.get('/api/cart')
            .then(response => {
                setCarrito(response.data.carrito);
                calcularTotal(response.data.carrito);
            })
            .catch(error => {
                console.error('Error al obtener el carrito:', error);
            });
    };

    const calcularTotal = (items) => {
        const totalPrice = items.reduce((total, item) => total + item.cantidad * item.precio, 0);
        setTotal(totalPrice);
    };

    const cambiarCantidad = (itemId, newQuantity) => {
        axios.put(`/api/cart/edit/${itemId}`, { cantidad: newQuantity })
            .then(response => {
                console.log(response);
                obtenerCarrito(); // Actualizar el carrito después de cambiar la cantidad
            })
            .catch(error => {
                console.error('Error al actualizar la cantidad:', error);
            });
    };

    const eliminarProducto = (itemId) => {
        axios.delete(`/api/cart/delete/${itemId}`)
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
                        <tr key={item.id}>
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