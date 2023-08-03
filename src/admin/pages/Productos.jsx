import React from 'react'
import  { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';
import { Container } from 'react-bootstrap';
import "../css/admin.css";
import { ModalAgregarProducto } from './ModalAgregarProducto';

export const Productos = () => {


    
    const [cargarProductos, setcargarProductos] = useState([]);
// const navigate=useNavigate();

    
    useEffect(() => {
   cargarProductsDB();
    }, []);

    
    
    const [showedit, setShowedit] = useState(false);

    const handleCloseEdit = () => setShowedit(false);
    const handleShowEdit = () => setShowedit(true);

    const  [formDataEdit,setFormDataEdit ]= useState({
        nombre:"",
        precio: "",
        descripcion:"",
        imagen:"",
    })

    const cargarProductsDB= async () =>
    {

        try{
            // const resp=await pruebaApi.get("/admin/productos");
            // setcargarProductos(resp.data.productos);

        }

        catch(error)
        {
        console.log(error);
        if(error.response.status===401){
          localStorage.removeItem("token");
          navigate("/login");
        }
     
        }
    }
    
  const eliminarProductsDB = async(id) => {

    Swal.fire({
      title: 'Está seguro de eliminar el producto?',
      text: "esta accion es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FCD581',
      cancelButtonColor: '#FF5A5F',
      confirmButtonText: '<h6 class=negro>Si, quiero eliminarlo </h6>',
    })

    .then((result) => {
      if (result.isConfirmed) {

        try{
          const resp= pruebaApi.delete(`/admin/eliminar/${id}`);
          console.log(resp);
          Swal.fire(
            'Eliminado!',
            'el producto fue eliminado.',
            'success'
          )
          
      }
    
      catch(error)
      {
      console.log(error);
      if(error.response.status===401){
        localStorage.removeItem("token");
        navigate("/login");
      }
      }
      };


      }
    )}


 


  const handleChangeEdit = (e) => {

    setFormDataEdit({
        ...formDataEdit,
        [e.target.name]: e.target.value,
    });
    
    
    
    
    
    }
    
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        
        const {_id,nombre,precio,descripcion,imagen}=formDataEdit
    
        //validaciones....
    
        if(nombre.trim()===""|| precio===""|| descripcion.trim()==="" || imagen.trim()==="" )
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
            
          })
    }
    
    else if(precio<0)
    {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el precio no puede ser negativo',
            
          })
    }
    
    
        
        EditarProductsDB(_id,nombre,precio,descripcion,imagen)
        
        };
    
    const EditarProductsDB= async (_id,nombre,precio,descripcion,imagen) =>
    {
    
        try{
            const resp=await pruebaApi.put("/admin/editar",{__id,nombre,precio,descripcion,imagen});
            console.log(resp);
    
        }
    
        catch(error)
        {
        console.log(error);
        if(error.response.status===401){
          localStorage.removeItem("token");
          navigate("/login");
        }
        }
    }

const editarProductoClick = (producto) => {
setShowedit(true);
  setFormDataEdit(producto);

}
















  return (
    <div>

<Container fluid>

<h2 className='text-center rojo pt-2 '>PRODUCTOS</h2>
<ModalAgregarProducto/>

<Table  responsive variant='warning' striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Descripcion</th>
          <th>Imagen</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody className='text-center'>

      <tr>
                <td>1</td>
                <td>Tarta de Manzana</td>
                <td>12.99</td>
                <td>Deliciosa tarta hecha con manzanas frescas.</td>
                <td>https://ejemplo.com/tarta_manzana.jpg</td>
                <td><Button onClick={()=> eliminarProductsDB(1)} className='bg-rojo' variant='danger'>Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Pasta Carbonara</td>
                <td>8.50</td>
                <td>Pasta italiana con salsa carbonara y tocino.</td>
                <td>https://ejemplo.com/pasta_carbonara.jpg</td>
                <td><Button className='bg-rojo' variant='danger' >Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pizza Margarita</td>
                <td>10.00</td>
                <td>Clásica pizza italiana con tomate, mozzarella y albahaca.</td>
                <td>https://ejemplo.com/pizza_margarita.jpg</td>
                <td><Button className='bg-rojo' variant='danger' >Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>4</td>
                <td>Sushi Variado</td>
                <td>15.99</td>
                <td>Selección de sushi con variedad de pescados y vegetales.</td>
                <td>https://ejemplo.com/sushi_variado.jpg</td>
                <td><Button className='bg-rojo' variant='danger'>Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>5</td>
                <td>Tacos al Pastor</td>
                <td>9.75</td>
                <td>Tacos mexicanos con carne al pastor y salsa.</td>
                <td>https://ejemplo.com/tacos_pastor.jpg</td>
                <td><Button className='bg-rojo'variant='danger' >Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>



{cargarProductos.map((product) =>{
return(

    <tr key={product._id}>
    <td>{product._id}</td>
    <td>{product.nombre}</td>
    <td>{product.precio}</td>
    <td>{product.descripcion}</td>
    <td>{product.imagen}</td>
    <td><Button onClick={()=> eliminarProductsDB(product._id)} variant='danger' className='bg-rojo'>Eliminar</Button ></td>
    <td><Button onClick={()=> editarProductoClick(product)} variant='secondary'>Editar</Button ></td>
  </tr>
)

})}
    </tbody>
    </Table>












</Container>







    </div>
  )
}
