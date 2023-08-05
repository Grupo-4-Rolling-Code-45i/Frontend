import React, { useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import "../css/cart.css";
import rubbishbin from '../assets/rubbishbin.png';

export const Cart = () => {
    const [carrito, setCarrito] = useState([
        { id: 1, name: 'Pizza Margarita', quantity: 2, price: 1000 },
        { id: 2, name: 'Pizza Pepperoni', quantity: 1, price: 1200 }
    ]);

    const calculateTotal = () => {
        return carrito.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    // Función para manejar cambios en la cantidad desde el input
    const cambiarQ = (itemId, newQuantity) => {
    setCarrito((prevItems) =>
        prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
    <Container className='containerCart'>
        <h2>Su Pedido:</h2>
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
                        <td>{item.name}</td>
                        <td>
                            <input type="number" value={item.quantity} min="1" onChange={(e) => cambiarQ(item.id, e.target.value)}/>
                        </td>
                        <td>${item.price}</td>
                        <td>
                            <Button className='botonEliminar' variant="danger"><img src={rubbishbin}></img></Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        <div className="total">
            <h5>Total: ${calculateTotal()}</h5>
            <Button className='botonPedido' variant="danger">Realizar Pedido</Button>
        </div>
    </Container>
    );
};