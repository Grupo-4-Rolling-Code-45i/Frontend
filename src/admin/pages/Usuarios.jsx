import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import "../css/admin.css";
import { Button, Container } from 'react-bootstrap';
import pruebaApi from '../../api/prueba';
import reactToMyPizzaAPI from '../../api/ReactToMyPizzaAPI';



export const Usuarios = () => {
  
  
    const [cargarUsuarios, setcargarUsuarios] = useState([]);
    
    const cargarUsersDB= async () =>
    {

        try{
            //reemplazar por ruta correcta
             const resp=await reactToMyPizzaAPI.get("/api/users");
             setcargarUsuarios(resp.data.usuarios);

        }

        catch(error)
        {
        console.log(error);
        }
    }

const activarUsersDB= async (_id,e) =>{

    

if(e===false){
   let estado="inactivo";
    try{
        //reemplazar por ruta correcta
        const resp=await reactToMyPizzaAPI.put("/api/users/edit",{_id,estado});
    }

    catch{
console.log(error);
    }

}

if(e===true){
    let estado="activo";
    try{
        //reemplazar por ruta correcta
        const resp=await reactToMyPizzaAPI.put("/api/users/edit",{_id,estado});
    }

    catch{
console.log(error);
    }

}

 
}


const adminUsersDB= async (_id,e) =>{

    

    if(e===false){
       let rol="usuario";
        try{
            //reemplazar por ruta correcta
            const resp=await reactToMyPizzaAPI.put("/api/users/edit",{_id,rol});
        }
    
        catch{
    console.log(error);
        }
    
    }
    
    if(e===true){
        let rol="administrador";
        try{
            //reemplazar por ruta correcta
            const resp=await reactToMyPizzaAPI.put("/api/users/edit",{_id,rol});
        }
    
        catch{
    console.log(error);
        }
    
    }
    
     
    }






    useEffect(() => {
   cargarUsersDB();
  
    }, []);
  
    useEffect(() => {
        cargarUsersDB();
       
         }, [activarUsersDB]);

         useEffect(() => {
            cargarUsersDB();
           
             }, [adminUsersDB()]);
  
    return (
    <div>

<h2 className='m-3 text-center rojo pt-2'>USUARIOS</h2>
<Container fluid>

<Table responsive variant='warning' striped bordered hover >
      <thead className='text-center'>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Estado</th>
          <th>Activar/Inactivar</th>
          <th>Admin/Usuario</th>
          
        </tr>
      </thead>
      <tbody className='text-center'>
      <tr>
                <td>1</td>
                <td>Juan Pérez</td>
                <td>juan@example.com</td>
                <td>Administrador</td>
                <td>Activo</td>
                <td><Button className='m-2' onClick={()=> activarUsersDB(user._id,true)} variant='warning'>Activar</Button >
                <Button onClick={()=> activarUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Inactivar</Button >
                </td>
                <td>
                <Button className='m-2' onClick={()=> adminUsersDB(user._id,true)} variant='warning'>Admin</Button >
                <Button onClick={()=> adminUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Usuario</Button >  
                </td>
               
            </tr>
            <tr>
                <td>2</td>
                <td>María López</td>
                <td>maria@example.com</td>
                <td>Usuario</td>
                <td>Activo</td>
                <td><Button className='m-2' onClick={()=> activarUsersDB(user._id,true)} variant='warning'>Activar</Button >
                <Button onClick={()=> activarUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Inactivar</Button >
                </td>
                <td>
                <Button className='m-2' onClick={()=> adminUsersDB(user._id,true)} variant='warning'>Admin</Button >
                <Button onClick={()=> adminUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Usuario</Button >  
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Carlos Ruiz</td>
                <td>carlos@example.com</td>
                <td>Usuario</td>
                <td>Activo</td>
                <td><Button className='m-2' onClick={()=> activarUsersDB(user._id,true)} variant='warning'>Activar</Button >
                <Button onClick={()=> activarUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Inactivar</Button >
                </td>
                <td>
                <Button className='m-2' onClick={()=> adminUsersDB(user._id,true)} variant='warning'>Admin</Button >
                <Button onClick={()=> adminUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Usuario</Button >  
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Laura Gómez</td>
                <td>laura@example.com</td>
                <td>Administrador</td>
                <td>Activo</td>
                <td><Button className='m-2' onClick={()=> activarUsersDB(user._id,true)} variant='warning'>Activar</Button >
                <Button onClick={()=> activarUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Inactivar</Button >
                </td>
                <td>
                <Button className='m-2' onClick={()=> adminUsersDB(user._id,true)} variant='warning'>Admin</Button >
                <Button onClick={()=> adminUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Usuario</Button >  
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Pedro Santos</td>
                <td>pedro@example.com</td>
                <td>Usuario</td>
                <td>Activo</td>
                <td><Button className='m-2' onClick={()=> activarUsersDB(user._id,true)} variant='warning'>Activar</Button >
                <Button onClick={()=> activarUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Inactivar</Button >
                </td>
                <td>
                <Button className='m-2' onClick={()=> adminUsersDB(user._id,true)} variant='warning'>Admin</Button >
                <Button onClick={()=> adminUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Usuario</Button >  
                </td>
            </tr>

{cargarUsuarios.map((user) =>{
return(

    <tr key={user._id}>
    <td>{user._id}</td>
    <td>{user.nombre}</td>
    <td>{user.email}</td>
    <td>{user.rol}</td>
    <td>{user.estado}</td>
    <td><Button className='m-2' onClick={()=> activarUsersDB(user._id,true)} variant='warning'>Activar</Button >
                <Button onClick={()=> activarUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Inactivar</Button >
                </td>
                <td>
                <Button className='m-2' onClick={()=> adminUsersDB(user._id,true)} variant='warning'>Admin</Button >
                <Button onClick={()=> adminUsersDB(user._id,false)} variant='danger' className='bg-rojo'>Usuario</Button >  
                </td>
  </tr>
)

})}
    </tbody>
    </Table>


</Container>















    </div>
  )
}
