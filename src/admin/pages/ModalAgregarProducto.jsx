import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPlusCircle } from "react-icons/fa";
import Swal from "sweetalert2";
import reactToMyPizzaAPI from "../../api/ApiReactToMyPizza";

export const ModalAgregarProducto = ({ obtenerProductos }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setFormData({
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: "",
    });
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, precio, descripcion, imagen } = formData;

    //validaciones....

    if (
      nombre.trim() === "" ||
      precio === "" ||
      descripcion.trim() === "" ||
      imagen.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios.",
      });
      return;
    } else if (precio < 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El precio no puede ser negativo.",
      });
      return;
    }

    AgregarProductsDB(nombre, precio, descripcion, imagen);

    handleClose();
  };

  const AgregarProductsDB = async (nombre, precio, descripcion, imagen) => {
    try {
      const resp = await reactToMyPizzaAPI.post("/api/products/new", {
        nombre,
        precio,
        descripcion,
        imagen,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: `"${nombre}" agregada con éxito!`,
        showConfirmButton: false,
        timer: 2500,
      });

      obtenerProductos();
    } catch (error) {      
      if (error.response.status === 401) {
        localStorage.removeItem("token");        
        Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Su sesión ha expirado, por favor vuelva a iniciar sesión",
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Ocurrió un error inesperado, intentelo nuevamente",
        });
      }
    }
  };

  return (
    <div>
      <Button
        variant="warning"
        className="amarillo m-2 btn "
        onClick={handleShow}
      >
        <h5 className="text-dark">
          <FaPlusCircle />
        </h5>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="rojo">Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
              maxLength={100}
                type="text"
                placeholder="Pizza Napolitana"
                name="nombre"
                value={formData.nombre}
                autoFocus
                minLength={3}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="3500"
                name='precio'
                min={0}
                max={99999}
                maxLength={5}
                value={formData.precio}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripcion</Form.Label>
              <Form.Control as="textarea" rows={3} 
              name='descripcion' 
              placeholder='De 8 porciones con jamon serrano y tomates frescos'
              value={formData.descripcion}
              onChange={handleChange}
           
              maxLength={200}
              minLength={3}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Imagen</Form.Label>
              <Form.Control 
              type='text'
              name='imagen' 
              placeholder='https://ejemplo.com/pizza_napolitana.jpg'
              value={formData.imagen}
              minLength={1}
              onChange={handleChange}
              maxLength={100}
              />
            </Form.Group>
            <Button
              className="amarillo text-dark"
              variant="warning"
              type="submit"
              // onClick={handleClose}
            >
              Agregar
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
