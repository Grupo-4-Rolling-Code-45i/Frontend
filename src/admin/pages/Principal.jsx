import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import "../css/principal.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BsFillPersonFill,BsCartFill} from 'react-icons/bs';
import{FaPizzaSlice} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';



export const Principal = () => {

const navigate=useNavigate();

const navAdmin=(nav)=>{
navigate(nav);

}



  return (
    <div>

<Container fluid>

<Row className='row'>

    <Col   >
    
    <h1 style={{fontSize:"600%"}}>   <BsFillPersonFill/>  </h1> 
    
        
    <Button className="" id='boton-principal'onClick={()=>navAdmin("/admin-usuarios")}> Usuarios</Button>

    
    </Col>

    <Col >
  
    <h1 style={{fontSize:"600%"}}>   <FaPizzaSlice/>  </h1> 
    <Button className=" " id='boton-principal' onClick={()=>navAdmin("/admin-productos")}>Productos</Button>
   
    
    </Col>
    <Col className='justify-content-center' >
    <h1 style={{fontSize:"600%"}}>   <BsCartFill/>  </h1> 
    <Button className=" " id='boton-principal' onClick={()=>navAdmin("/admin-pedidos")}>Pedidos</Button>
    
    </Col>
</Row>



</Container>











    </div>
  )
}
