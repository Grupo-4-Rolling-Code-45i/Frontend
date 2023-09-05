import React, { useState } from "react";
import "../css/Registro.css";
import Swal from "sweetalert2";
import { Navigate } from "react-router";
import reactToMyPizzaAPI from "../../../api/ApiReactToMyPizza";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edadIngresada = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mesActual = fechaActual.getMonth();
    const mesNacimiento = fechaNac.getMonth();
    const diaActual = fechaActual.getDate();
    const diaNacimiento = fechaNac.getDate();

    if (mesNacimiento > mesActual) {
      edadIngresada--;
    } else if (mesNacimiento === mesActual) {
      if (diaNacimiento > diaActual) {
        edadIngresada--;
      }
    }

    setEdad(edadIngresada);
  };

  const validarNombre = (inputNombre) => {
    const contieneNumeros = /\d/.test(inputNombre);
    if (contieneNumeros) {
      Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "El nombre no puede contener números.",
      });
    } else {
      setNombre(inputNombre);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" ||
      edad === "" ||
      email.trim() === "" ||
      contraseña.trim() === "" ||
      confirmarContraseña.trim() === ""
    ) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Todos los campos son obligatorios.",
      });
    }

    const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!patronEmail.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "El correo electrónico que ingresaste no es válido.",
      });
    }

    if (contraseña !== confirmarContraseña) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Las contraseñas no coinciden.",
      });
    }

    if (+edad < 13) {
      return Swal.fire({
        icon: "error",
        title: "¡Ups!",
        text: "Debe ser mayor de 13 años para poder registrarse en nuestro sitio.",
      });
    }

    try {
      const resp = await reactToMyPizzaAPI.post("api/auth/new", {
        nombre,
        edad,
        email,
        password: contraseña,
      });

      localStorage.setItem("token", resp.data.token);

      if (resp.status === 201) {
        Swal.fire({
          icon: "success",
          title: `Bienvenido a React to my Pizza ${nombre}!`,
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          window.location.href = "/";
        }, 1600);
      } else {
        return Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Ocurrió un error inesperado, inténtelo nuevamente.",
        });
      }
    } catch (error) {
      if (error && error.response && error.response.status === 409) {
        return Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: `Ya existe un usuario registrado con el correo ${email}`,
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "¡Ups!",
          text: "Ocurrió un error inesperado, inténtelo de nuevo.",
        });
      }
    }
  };

  return (
    <>
      <main className="registro-main-contenedor">
        <h2 className="registro-primer-titulo">¿Te apetece una rica pizza?</h2>
        <h3>
          Únete a{" "}
          <span className="registro-span-titulo">React to my pizza</span> así
          recordemos tus datos cada vez que realices un pedido
        </h3>
        <section className="registro-section-contenedor-form">
          <form onSubmit={handleRegister} className="registro-formulario">
            <label className="registro-label" htmlFor="nombre">
              Ingrese su nombre completo:
            </label>
            <input
              className="registro-inputs"
              type="text"
              placeholder="Ej: Jhon Doe"
              name="nombre"
              id="nombre"
              onChange={(e) => validarNombre(e.target.value)}
              maxLength="41"
              required
            />

            <label className="registro-label" htmlFor="fecha-nacimiento">
              Ingrese su fecha de nacimiento:
            </label>
            <input
              className="registro-inputs"
              type="date"
              name="fecha-nacimiento"
              id="fecha-nacimiento"
              required
              onChange={(e) => calcularEdad(e.target.value)}
            />
            <label className="registro-label" for="correo-electronico">
              Ingrese su correo electrónico:
            </label>
            <input
              className="registro-inputs"
              type="email"
              name="correo-electronico"
              id="correo-electronico"
              placeholder="Ej: jhondoe@ricapizza.com"
              required
              onChange={(e) => setEmail(e.target.value)}
              maxLength="50"
            />
            <label className="registro-label" htmlFor="contraseña">
              Ingrese su contraseña:
            </label>
            <input
              className="registro-inputs"
              required
              type="password"
              name="contraseña"
              id="contraseña"
              placeholder="Escriba una contraseña difícil de adivinar"
              onChange={(e) => setContraseña(e.target.value)}
              minLength="8"
              maxLength="70"
            />
            <label className="registro-label" htmlFor="confirmar-contraseña">
              Por favor, repita su contraseña:
            </label>
            <input
              className="registro-inputs"
              required
              type="password"
              name="contraseña"
              id="confirmar-contraseña"
              placeholder="Repita su contraseña difícil de adivinar"
              onChange={(e) => setConfirmarContraseña(e.target.value)}
              minLength="8"
              maxLength="70"
            />
            <input
              className="registro-boton-submit"
              type="submit"
              value="Registrarme ahora"
            />
          </form>
        </section>
      </main>
    </>
  );
};
