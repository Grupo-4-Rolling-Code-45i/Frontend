import React from 'react';
import { useEffect, useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa';
import reactToMyPizzaAPI from '../../api/ApiReactToMyPizza';

export const Pedidos = () => {

    const [cargarPedidos, setcargarPedidos] = useState([]);
    const [cargarUsuarios, setcargarUsuarios] = useState([]);
    const [cargarUsersID, setcargarUsersID] = useState([]);
    
    const cargarPedidosDB = async () => {
        try {
            const resp = await reactToMyPizzaAPI.get("/api/orders");
            setcargarPedidos(resp.data.pedidos);
            const resp2 = await reactToMyPizzaAPI.get("/api/users");
            setcargarUsuarios(resp2.data.usuarios);
            const users = resp.data.pedidos.map((pedido) => {
                return resp2.data.usuarios.find((user) => user._id === pedido.usuario) || null;
            });
            setcargarUsersID(users);
        } catch (error) {
            console.log(error);
        }
    }

    const confirmarPedidosDB = async (_id) => {
        let estado = "entregado";
        try {
            const resp = await reactToMyPizzaAPI.put("/api/orders/edit", { _id, estado });
            cargarPedidosDB();
        } catch (error) {
            console.log(error);
        }
    }
        
    useEffect(() => {
        cargarPedidosDB();
    }, []);

    return (
        <div>
            <h2 className='m-3 text-center rojo pt-2'>Pedidos</h2>
            <Container fluid>
                <Table responsive variant='warning' striped bordered hover>
                    <thead className='text-center'>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Producto</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                            <th>Entregado</th>
                        </tr>
                    </thead>
                    <tbody className='text-start'>
                        {cargarPedidos.map((pedido) => {
                            return (
                                <tr key={pedido._id}>
                                    <td>{pedido._id}</td>
                                    <td>
                                        {cargarUsersID.find((user) => user && user._id === pedido.usuario) && (
                                            <h6>{cargarUsersID.find((user) => user && user._id === pedido.usuario).nombre}</h6>
                                        )}
                                    </td>
                                    <td>{pedido.producto[0]?.map((e) => (
                                        <p key={e.nombre}>{e.nombre} x {e.cantidad}</p>
                                    ))}</td>
                                    <td>{pedido.fecha}</td>
                                    <td>{pedido.estado}</td>
                                    <td className='text-center'>
                                        <Button onClick={() => confirmarPedidosDB(pedido._id)} variant='warning'>
                                            <FaCheck/>
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}
