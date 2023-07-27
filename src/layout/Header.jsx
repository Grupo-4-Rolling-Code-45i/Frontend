import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffcanvasExample() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Nav.Link href="/">
            <img className="logo-navbar" src="src\assets\rolling.png" alt="" />
            </Nav.Link>
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
                  <Nav.Link href="/">Inicio</Nav.Link>

                  <Nav.Link href="/crear">Nuestros productos</Nav.Link>
                  <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>
                  <Nav.Link href="/crear">Contacto</Nav.Link>
                  <NavDropdown
                    title="Cuenta"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/crear">
                      Iniciar sesion
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/crear">
                      Crear cuenta
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/crear">
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
