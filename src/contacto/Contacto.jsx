import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../contacto/css/contacto.css";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';



export const Contacto = () => {

function handleSubmit(e){
  e.preventDefault();

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Su consulta ha sido enviada!',
    showConfirmButton: false,
    timer: 1500
  })

}

  return (
    <>
    <Container fluid className='container-styles'>

<Row className='pt-4'  >
   <Col sm lg={6} className='m-2 p-1'>
   <h1 className='titulo p-1'>DEJANOS TU CONSULTA!</h1>
   <Form className='text-light p-2' onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control required minLength={3} maxLength={30} type="text" placeholder="Escriba su nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control required minLength={3} maxLength={30} type="email" placeholder="Escriba su email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control required minLength={5} maxLength={200} as="textarea" rows={3} placeholder="Escriba aquí su mensaje" />
      </Form.Group>

      <Button id='boton'  type="submit" >
        Enviar
      </Button>
    </Form>  
   
   </Col>

   <Col  sm lg={5} className='m-3 p-3 '>
    <div>

    <iframe className='me-2'  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1690391123408!5m2!1ses-419!2sar" height={400} style={{width:"90%", borderRadius:"15px"}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  
   </Col>

</Row>


<Row>

</Row>











    </Container>
    </>
  )
}
