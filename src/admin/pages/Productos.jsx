import React, { useContext } from 'react'
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

import { PizzeriaContext } from '../../PedidosContext/PedidosContext';
import reactToMyPizzaAPI from '../../api/ApiReactToMyPizza';

export const Productos = () => {

  
    const {currentUser} = useContext(PizzeriaContext)

    const [cargarProductos, setcargarProductos] = useState([]);
// const navigate=useNavigate()

    
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
             const resp = await reactToMyPizzaAPI.get("/api/products");
                      
             setcargarProductos(resp.data.response);
            
        }

        catch(error)
        {
        console.log(error);
        //if(error.response.status===401){
          // localStorage.removeItem("token");
          // navigate("/login");
       // }
     
        }
    }
    
  const eliminarProductsDB = async(id) => {

    Swal.fire({
      title: 'Está seguro de eliminar el producto?',
      text: "esta accion es irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FF5A5F',
      cancelButtonColor: '#545454',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    })

    .then((result) => {
      if (result.isConfirmed) {

        try{
          const resp= reactToMyPizzaAPI.delete(`/api/products/delete/${id}`);
          cargarProductsDB();
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
            const resp=await reactToMyPizzaAPI.put("/api/products/edit",{_id,nombre,precio,descripcion,imagen});
            cargarProductsDB();
    
        }
    
        catch(error)
        {
        console.log(error);
        // if(error.response.status===401){
        //   localStorage.removeItem("token");
        //   navigate("/login");
        // }
        }
    }

const editarProductoClick = (producto) => {
setShowedit(true);
  setFormDataEdit(producto);

}



  return (
    <div>

<Container fluid>
       

<h2 className='text-center rojo pt-2 m-0'>PRODUCTOS</h2>
<ModalAgregarProducto obtenerProductos = {cargarProductsDB}/>

<Modal show={showedit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title className='rojo'>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEdit}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              maxLength={100}
                type="text"
              minLength={3}
                name='nombre'
               value={formDataEdit.nombre}
                autoFocus
                onChange={handleChangeEdit}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
              
                type="number"
                min={0}
                name='precio'
                value={formDataEdit.precio}
                onChange={handleChangeEdit}
                
              />
            </Form.Group>



            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} 
              name='descripcion' 
              value={formDataEdit.descripcion}
              onChange={handleChangeEdit}
              maxLength={200}
              minLength={3}

              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
              maxLength={200}
                type="text"
                minLength={3}
                name='imagen'
                 value={formDataEdit.imagen}
                autoFocus
                onChange={handleChangeEdit}
              />
            </Form.Group>


            <Button className='bg-amarillo' variant="warning" type='submit' 
          onClick={handleCloseEdit}
          >
            Aceptar
          </Button>
          </Form>
        </Modal.Body>


        <Modal.Footer>
       

          
         
        </Modal.Footer>
      </Modal>

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



{cargarProductos.map((product) =>{
return(

    <tr key={product._id}>
    <td>{product._id}</td>
    <td>{product.nombre}</td>
    <td>{product.precio}</td>
    <td>{product.descripcion}</td>
    <td> <img src={product.imagen} alt="" width={60} /> </td>
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
