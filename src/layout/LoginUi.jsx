import "./Login.css";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import reactToMyPizzaAPI from "../api/ReactToMyPizzaAPI";

function LoginUi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);

    //  SEGUNDA CAPA DE SEGURIDAD, VALIDACIONES DEL FORMULARIO CON JS

    // ! Verificar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Todos los campos son obligatorios",
      });
    }

    // ! Verificar Email
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patronEmail.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "El correo electronico que ingresaste no es válido",
      });
    }

    // ! Verificar que la CONTRASEÑA tenga al menos 8 caracteres
    if (password.length < 8) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "La contraseña debe tener al menos 8 caracteres",
      });
    }

    //mandar los datos al backend
    try {
      const resp = await reactToMyPizzaAPI.post("/api/auth/login", {
        email,
        password,
      });
      console.log(resp);

      // Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: "Bienvenido",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      // setTimeout(() => {
      //   window.location.href = "/";
      //   // navigate("/");               // redirecciona a la ruta /home
      // }, 2000);
    } catch (error) {
      console.log(error);
      console.log("USUARIO NO LOGUEADO");
      Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "El correo electronico o la contraseña son incorrectos",
      });
    }
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

            <form className="form" onSubmit={handleLogin}>
              <div>
                {/* //PRIMERA CAPA DE SEGURIDAD, VALIDACIONES DEL IMPUT */}
                <input
                  required
                  type="email"
                  placeholder="Email"
                  maxLength="64"
                  minLength="4"
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
                  maxLength="128"
                  minLength="8"
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
