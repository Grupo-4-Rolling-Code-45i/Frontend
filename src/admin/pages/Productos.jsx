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
import pruebaApi from '../../api/prueba';

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
             const resp=await pruebaApi.get("/admin/productos");
             setcargarProductos(resp.data.productos);

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
            const resp=await pruebaApi.put("/admin/editar",{_id,nombre,precio,descripcion,imagen});
            console.log(resp);
    
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

<h2 className='text-center rojo pt-2 '>PRODUCTOS</h2>
<ModalAgregarProducto/>

<Modal show={showedit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title className='rojo'>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEdit}>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              maxLength={20}
                type="text"
                
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
                
                name='pecio'
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
              maxLength={50}
              />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
              maxLength={20}
                type="text"
                
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

      <tr>
                <td>1</td>
                <td>pizza de Manzana</td>
                <td>12.99</td>
                <td>Deliciosa pizza hecha con manzanas frescas.</td>
                <td><img src="https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=2000" alt="" width={60} /></td>
                <td><Button onClick={()=> eliminarProductsDB(1)} className='bg-rojo' variant='danger'>Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>2</td>
                <td>Pizza Carbonara</td>
                <td>8.50</td>
                <td>Pizzaitaliana con salsa carbonara y tocino.</td>
                <td><img src="https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=2000" alt="" width={60} /></td>
                <td><Button className='bg-rojo' variant='danger' >Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pizza Margarita</td>
                <td>10.00</td>
                <td>Clásica pizza italiana con tomate, mozzarella y albahaca.</td>
                <td><img src="https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=2000" alt="" width={60} /></td>
                <td><Button className='bg-rojo' variant='danger' >Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>4</td>
                <td>pizza Variada</td>
                <td>15.99</td>
                <td>Selección de pizza con variedad de pescados y vegetales.</td>
                <td><img src="https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=2000" alt="" width={60} /></td>
                <td><Button className='bg-rojo' variant='danger'>Eliminar</Button ></td>
                <td><Button o variant='secondary'>Editar</Button ></td>
            </tr>
            <tr>
                <td>5</td>
                <td>pizza al Pastor</td>
                <td>9.75</td>
                <td>pizza mexicana con carne al pastor y salsa.</td>
                <td><img src="https://img.freepik.com/foto-gratis/pepperoni-rodajas-finas-es-aderezo-pizza-popular-pizzerias-estilo-americano-aislado-sobre-fondo-blanco-naturaleza-muerta_639032-229.jpg?w=2000" alt="" width={60} /></td>
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
