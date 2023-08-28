import "./Login.css";
import Swal from "sweetalert2";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { PizzeriaContext } from "../PedidosContext/PedidosContext";
import reactToMyPizzaAPI from "../api/ApiReactToMyPizza";
import iconoUsuarioLogin from '../assets/usuario.png'
function LoginUi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {login} = useContext(PizzeriaContext)
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    //  SEGUNDA CAPA DE SEGURIDAD, VALIDACIONES DEL FORMULARIO CON JS

    // ! Verificar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Todos los campos son obligatorios.",
      });
    }

    // ! Verificar Email
    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patronEmail.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "El correo electronico que ingresaste no es válido.",
      });
    }

    // ! Verificar que la CONTRASEÑA tenga al menos 8 caracteres
    if (password.length < 8) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "La contraseña debe tener al menos 8 caracteres.",
      });
    }

    //mandar los datos al backend
    try {
      const resp = await reactToMyPizzaAPI.post("/api/auth/login", {
        email,
        password,
      });
      login({email, password})
      
      //GUARDO EL TOKEN EN EL LOCAL STORAGE
     
      localStorage.setItem("rol", resp.data.usuario.rol);

      if (resp.status === 200) {

        if (resp.data.usuario.rol === "admin") {
          
          Swal.fire({
            icon: "success",
            title: `Bienvenido ${resp.data.usuario.nombre}! \n ¿Que vas a comer hoy?`,
            text: "Usuario Administrador",
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          
          Swal.fire({
            icon: "success",
            title: `¡Bienvenido ${resp.data.usuario.nombre}! \n ¿Que vas a comer hoy?`,
            text: "Redireccionando...",
            showConfirmButton: false,
            timer: 2000,
          });
        }

        

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        return Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Datos incorecctos, intentelo nuevamente.",
        });
      }
    } catch (error) {
      switch (error.response.status) {      
        case 400:
          localStorage.removeItem("token");       
          Swal.fire({
            icon: "error",
            title: "¡Ups!",
            text: "Datos incorecctos, intentelo nuevamente.",
          });
          break;
        
        case 401:
          localStorage.removeItem("token");         
          Swal.fire({
            icon: "error",
            title: "Usuario deshabilitado",
            text: "Por favor contacte al administrador",
          });
         
          break;




          case 404:
          
          Swal.fire({
            icon: "error",
            title: "¡Ups!",
            text: "Datos incorecctos, intentelo nuevamente.",
          });
          break;
        default:
          
          Swal.fire({
            icon: "error",
            title: "¡Ups!",
            text: "Ocurrió un error inesperado, intentelo nuevamente.",
          });
          break;
      }

    }
  };

  return (
    <div className="main-login">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={iconoUsuarioLogin} alt="Icono usuario" className="profile" />
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
              <a className="hipervinculo-login" href="/Error404">
                ¿Olvidaste tu contraseña?
              </a>{" "}
              O{" "}
              <a className="hipervinculo-login" href="/registro">
                Crear cuenta
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;

