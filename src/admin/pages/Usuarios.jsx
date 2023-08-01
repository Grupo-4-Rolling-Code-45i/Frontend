import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import "../css/admin.css";
import { Button, Container } from 'react-bootstrap';
export const Usuarios = () => {
  
  
    const [cargarUsuarios, setcargarUsuarios] = useState([]);
    
// const navigate=useNavigate();
    const cargarUsersDB= async () =>
    {

        try{
            // const resp=await pruebaApi.get("/admin/usuarios");
            // setcargarUsuarios(resp.data.usuarios);

        }

        catch(error)
        {
        console.log(error);
        }
    }
    
    useEffect(() => {
   cargarUsersDB();
  
    }, []);
  
  
  
  
    return (
    <div>

<h2 className='m-3 text-center rojo'>USUARIOS</h2>
<Container fluid>

<Table responsive variant='warning' striped bordered hover >
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
        </tr>
      </thead>
      <tbody>
      <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>juan@example.com</td>
                <td>Administrador</td>
            </tr>
            <tr>
                <td>2</td>
                <td>María López</td>
                <td>maria@example.com</td>
                <td>Usuario</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Carlos Ruiz</td>
                <td>carlos@example.com</td>
                <td>Usuario</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Laura Gómez</td>
                <td>laura@example.com</td>
                <td>Administrador</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Pedro Santos</td>
                <td>pedro@example.com</td>
                <td>Usuario</td>
            </tr>









{cargarUsuarios.map((user) =>{
return(

    <tr key={user._id}>
    <td>{user._id}</td>
    <td>{user.nombre}</td>
    <td>{user.email}</td>
    <td>{user.rol}</td>
  </tr>
)

})}
    </tbody>
    </Table>


</Container>















    </div>
  )
}
