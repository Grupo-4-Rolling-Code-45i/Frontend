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
import Swal from "sweetalert2";
function OffcanvasExample() {
  
  //VARIABLE QUE CONTROLA SI EL USUARIO ESTA LOGUEADO O NO
  //Y EN BASE A ESO MUESTRA UNA OPCION U OTRA EN EL NAVBAR
  const user = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");




  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleLogin = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("rol");
  console.log("SESION EXPIRADA");
  Swal.fire({
    icon: "success",
    title: "Sesion cerrada",
    text: "Vuelva pronto",
    showConfirmButton: false,
    timer: 2000,

  });
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
}
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3"
        >
          <Container fluid className="caja-navbar">
            <Nav.Link href="/" id="caja-logo-texto">
              <img
                className="logo-navbar"
                src="src\assets\Logo_React_to_my_Pizza_SVG.svg"
                alt=""
              />
              <div className="texto-logo">
                 <div className="cajita">React to my </div>
                
                 <div className="cajita" id="pizza">PIZZA</div>
              </div>
            </Nav.Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React to my Pizza!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Inicio </Nav.Link>

                  <Nav.Link href="/sobre-nosotros">Sobre nosotros </Nav.Link>
                  <Nav.Link href="/contacto">Contacto </Nav.Link>
                  <NavDropdown
                    title="Cuenta"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {user ? (
                      <li>
                        {rol === "admin" ? (<>
                          <NavDropdown.Item href="/admin">
                            Administrar
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogin }>
                            Cerar sesion
                            </NavDropdown.Item>
                            </>
                            ) : (
                            <NavDropdown.Item onClick={handleLogin }>
                            Cerar sesion
                            </NavDropdown.Item>
                                
                                )
                                  
                                  }








                        {/* <NavDropdown.Item onClick={handleLogin }>
                          Cerrar sesion
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/registro">
                          Administrar
                        </NavDropdown.Item> */}
                      </li>
                    ) : (
                      <li>
                        <NavDropdown.Item onClick={handleShow}>
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
      <ModalLogin show={show} handleClose={handleClose} />
    </>
  );
}

export default OffcanvasExample;
