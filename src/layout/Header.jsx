import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import ModalLogin from "./ModalLogin";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { PizzeriaContext } from "../PedidosContext/PedidosContext";
import { BsFillPersonFill } from "react-icons/bs";
import imagenCarrito from "../assets/Carrito.png";
import logoReactToMyPizza from "../assets/Logo_React_to_my_Pizza_SVG.svg";
function OffcanvasExample() {
  //VARIABLE QUE CONTROLA SI EL USUARIO ESTA LOGUEADO O NO
  //Y EN BASE A ESO MUESTRA UNA OPCION U OTRA EN EL NAVBAR
  const user = localStorage.getItem("token");
  const rol = localStorage.getItem("rol");

  const { currentUser, getAuth } = useContext(PizzeriaContext);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleCloseNav = () => setIsNavOpen(false);
  const handleOpenNav = () => setIsNavOpen(true);



  //console.log(currentUser);
  const [show, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("rol");
    
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
  };

  useEffect(() => {
    getAuth();
  }, []);


  const CerrarNavAbrirLogin = () => {
    handleCloseNav();
    handleShow();
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
            <Nav.Link>
              {" "}
              <Link id="caja-logo-texto" className="quitarHiperv" to="/">
                {" "}
                <img
                  className="logo-navbar"
                  src={logoReactToMyPizza}
                  alt="Logotipo React to my Pizza"
                />
                <div className="texto-logo">
                  <div className="cajita">React to my </div>

                  <div className="cajita" id="pizza">
                    PIZZA
                  </div>
                </div>{" "}
              </Link>
            </Nav.Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleOpenNav} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={isNavOpen}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton onClick={handleCloseNav}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React to my Pizza!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {currentUser ? (
                    <h5 className=" mt-3 me-2">
                      <BsFillPersonFill />
                      {currentUser.nombre}
                    </h5>
                  ) : (
                    <></>
                  )}

                  {currentUser?.rol == "administrador" ? (
                    <Nav.Link>
                      {" "}
                      <Link className="adminbutton" to="/admin-principal">
                        Admin
                      </Link>
                    </Nav.Link>
                  ) : (
                    <></>
                  )}
                  <Nav.Link>
                    {" "}
                    <Link className="quitarHiperv" to="/" onClick={handleCloseNav}>
                      Inicio
                    </Link>{" "}
                  </Nav.Link>

                  <Nav.Link>
                    {" "}
                    <Link className="quitarHiperv" to="/sobre-nosotros"  onClick={handleCloseNav}>
                      Sobre nosotros
                    </Link>
                  </Nav.Link>

                  <Nav.Link>
                    {" "}
                    <Link className="quitarHiperv" to="/contacto"  onClick={handleCloseNav}>
                      Contacto
                    </Link>{" "}
                  </Nav.Link>

                  <NavDropdown
                    title="Cuenta"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {user ? (
                      <li>
                        {rol === "admin" ? (
                          <>
                            <NavDropdown.Item href="/admin">
                              {/* Administrar */}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogin}>
                              Cerar sesion
                            </NavDropdown.Item>
                          </>
                        ) : (
                          <NavDropdown.Item onClick={handleLogin}>
                            Cerar sesion
                          </NavDropdown.Item>
                        )}

                        {}
                      </li>
                    ) : (
                      <li>
                        <NavDropdown.Item onClick={CerrarNavAbrirLogin} >
                          Iniciar sesion
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                          {" "}
                          <Link className="quitarHiperv" to="/registro" onClick={handleCloseNav}>
                            {" "}
                            Crear cuenta
                          </Link>
                        </NavDropdown.Item>
                      </li>
                    )}

                    {}
                  </NavDropdown>

                  {currentUser ? (
                    <Nav.Link>
                      {" "}
                      <Link to="/cart">
                        {" "}
                        <img src={imagenCarrito} alt="icono carrito" />{" "}
                      </Link>
                    </Nav.Link>
                  ) : (
                    <></>
                  )}

                  {}
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
