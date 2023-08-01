import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import "../css/admin.css";
import { Button, Container } from 'react-bootstrap';
import{FaCheck} from 'react-icons/fa';




export const Pedidos = () => {

    const [cargarPedidos, setcargarPedidos] = useState([]);
    
// const navigate=useNavigate();
    const cargarPedidosDB= async () =>
    {

        try{
            // const resp=await pruebaApi.get("/admin/pedidos");
            // setcargarUsuarios(resp.data.pedidos);

        }

        catch(error)
        {
        console.log(error);
        }
    }



    const confirmarPedidosDB= async (e) =>{



        try{
            
        }
    
        catch{
    
        }
    }
    
    
    
        
        useEffect(() => {
       cargarPedidosDB();
      
        }, []);



  return (
    <div>



<h2 className='m-3 text-center rojo pt-2'>Pedidos</h2>
<Container fluid>

<Table responsive variant='warning' striped bordered hover >
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
      <tbody className='text-center'>
      <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>pizza napolitana</td>
                <td>12/08/20233</td>
                <td>pendiente</td>
                <td><Button onClick={()=> confirmarPedidosDB(pedido._id)} variant='warning'><FaCheck/></Button ></td>
               
               
            </tr>
            <tr>
            <td>1</td>
                <td>Juan Pérez</td>
                <td>pizza napolitana</td>
                <td>12/08/20233</td>
                <td>pendiente</td>
                <td><Button onClick={()=> confirmarPedidosDB(pedido._id)} variant='warning'><FaCheck/></Button ></td>
            </tr>
            <tr>
            <td>1</td>
                <td>Juan Pérez</td>
                <td>pizza napolitana</td>
                <td>12/08/20233</td>
                <td>pendiente</td>
                <td><Button onClick={()=> confirmarPedidosDB(pedido._id)} variant='warning'><FaCheck/></Button ></td>
            </tr>
            <tr>
            <td>1</td>
                <td>Juan Pérez</td>
                <td>pizza napolitana</td>
                <td>12/08/20233</td>
                <td>pendiente</td>
                <td><Button onClick={()=> confirmarPedidosDB(pedido._id)} variant='warning'><FaCheck/></Button ></td>
            </tr>
            <tr>
            <td>1</td>
                <td>Juan Pérez</td>
                <td>pizza napolitana</td>
                <td>12/08/20233</td>
                <td>pendiente</td>
                <td><Button onClick={()=> confirmarPedidosDB(pedido._id)} variant='warning'><FaCheck/></Button ></td>
            </tr>









{cargarPedidos.map((pedido) =>{
return(

    <tr key={pedido._id}>
    <td>{pedido._id}</td>
    <td>{pedido.usuario}</td>
    <td>{pedido.producto}</td>
    <td>{pedido.fecha}</td>
    <td>{pedido.estado}</td>
    <td><Button onClick={()=> confirmarPedidosDB(pedido._id)} variant='warning'><FaCheck/></Button ></td>
   
  </tr>
)

})}
    </tbody>
    </Table>


</Container>





















    </div>
  )
}
