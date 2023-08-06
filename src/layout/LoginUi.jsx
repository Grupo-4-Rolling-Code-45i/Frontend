import "./Login.css";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router";

function LoginUi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    console.log("formulario enviado");

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Bienvenido",
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      window.location.href = "/";
      // navigate("/");               // redirecciona a la ruta /home
    }, 2000);
  };

  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src="src\assets\usuario.png" alt="" className="profile" />
            </div>
          </div>
          <div>
            <h1>Iniciar Sesión</h1>

            <form className="form" onSubmit={handleSubmit}>
              <div>
                {/* <img src={email} alt="email" className="email"/> */}
                <input
                  required
                  type="email"
                  placeholder="Email"
                  maxlength="64"
                  minlength="4"
                  className="name"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="second-input">
                {/* <img src={pass} alt="pass" className="email"/> */}
                <input
                  required
                  type="password"
                  placeholder="Contraseña"
                  maxlength="128"
                  minlength="8"
                  className="name"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="login-button">
                <button className="button-login" type="submit">
                  Entrar
                </button>
              </div>
            </form>

            <p className="link">
              <a href="#">¿Olvidaste tu contraseña?</a> O{" "}
              <a href="#">Crear cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
