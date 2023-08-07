import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import { useState } from "react";


function OffcanvasExample() {
  let user = false;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
        >
          <Container fluid>
            <img className="logo-navbar" src="src\assets\rolling.png" alt="" />

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  PIZZERIA ROLLING CODE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Inicio</Nav.Link>

                  <Nav.Link href="#action2">Nuestros productos</Nav.Link>
                  <Nav.Link href="#action3">Sobre nosotros</Nav.Link>
                  <Nav.Link href="#action4">Contacto</Nav.Link>

                  <NavDropdown
                    title="Cuenta"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {user ? (
                      <li>
                        <NavDropdown.Item href="#action3">
                          Cerrar sesion
                        </NavDropdown.Item>
                      </li>
                    ) : (
                      <li>
                        <NavDropdown.Item  onClick={handleShow}>
                          Iniciar sesion
                        </NavDropdown.Item>

                        <NavDropdown.Item href="/registro">

                          Crear cuenta
                        </NavDropdown.Item>
                      </li>
                    )}

                    {/* <NavDropdown.Item href="#action3">
                      Iniciar sesion
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Crear cuenta
                    </NavDropdown.Item> */}
                  </NavDropdown>

                  <Nav.Link href="#action5">
                    {" "}
                    <img src="src\assets\Carrito.png" alt="" />
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
