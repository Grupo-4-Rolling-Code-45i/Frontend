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
      //GUARDO EL TOKEN EN EL LOCAL STORAGE
      localStorage.setItem("token", resp.data.token);

      if (resp.status === 200) {
        console.log("DATOS CORRECTOS, USUARIO LOGUEADO");
        Swal.fire({
          icon: "success",
          title: `¡Bienvedido ${resp.data.usuario.nombre}! \n ¿Que vas a comer hoy?`,
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        console.log("DATOS INCORRECTOS, USUARIO NO LOGUEADO");
        return Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Datos incorecctos, intentelo nuevamente",
        });
      }
    } catch (error) {
      console.log(error);
      console.log("USUARIO NO LOGUEADO");
      Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Ocurrió un error inesperado, intentelo nuevamente",
      });
      
    }
  };

  return (
    <div className="main-login">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src="src\assets\usuario.png" alt="" className="profile" />
            </div>
          </div>
          <div>
            <h1 className="h1-login">Iniciar Sesión</h1>

            <form className="form" onSubmit={handleLogin}>
              <div>
                {/* //PRIMERA CAPA DE SEGURIDAD, VALIDACIONES DEL IMPUT */}
                <input
                  required
                  type="email"
                  placeholder="Email"
                  maxLength="64"
                  minLength="4"
                  className="input-login"
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
                  className="input-login"
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
              <a className="hipervinculo-login" href="/Error404">¿Olvidaste tu contraseña?</a> O{" "}
              <a className="hipervinculo-login" href="/registro">Crear cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;




//codigo para el catch cuando se vence el token

// if (error.response.status === 401) {
//   localStorage.removeItem("token");
//   console.log("SESION EXPIRADA");
//   Swal.fire({
//     icon: "error",
//     title: "¡Ups!",
//     text: "Su sesión ha expirado, por favor vuelva a iniciar sesión",
//   });
//   setTimeout(() => {
//     window.location.href = "/login";
//   }, 2000);
// } else {
//   console.log("USUARIO NO LOGUEADO");
//   Swal.fire({
//     icon: "error",
//     title: "¡Ups!",
//     text: "Ocurrió un error inesperado, intentelo nuevamente",
//   });
// }

