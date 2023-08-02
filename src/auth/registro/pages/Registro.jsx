import React, { useState } from 'react'
import '../css/Registro.css'
import Swal from 'sweetalert2';
export const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [confirmarContraseña, setConfirmarContraseña] = useState('');

    const handleRegister = (e)=>{
        e.preventDefault();
        // Validaciones
        if(nombre.trim() === '' || edad.trim() === '' || email.trim() === '' || contraseña.trim() === '' || confirmarContraseña.trim() === ''){
            return Swal.fire({
                icon: 'error',
                title: '¡Ups!',
                text: 'Todos los campos son obligatorios',                
              })
        }
    }
  return (
    <>
    <main className='registro-main-contenedor'>
        <h2 className='registro-primer-titulo'>¿Te apetece una rica pizza?</h2>
        <h3>Únete a <span className='registro-span-titulo'>React to my pizza</span> así recordemos tus datos cada vez que realices un pedido</h3>
        <section className='registro-section-contenedor-form'>
            {/*  Aqui inicia el formulario de registro */}
            <form onSubmit={handleRegister} className='registro-formulario'>
                <label className="registro-label" htmlFor="nombre">Ingrese su nombre completo:</label>
                    <input className='registro-inputs' type="text" placeholder='Ej: Jhon Doe' name='nombre' id='nombre' onChange={(e) => setNombre(e.target.value)} maxlength="20"/>
                    
                <label className="registro-label" htmlFor="fecha-nacimiento">Ingrese su fecha de nacimiento:</label>
                    <input className='registro-inputs' type="date" name="fecha-nacimiento" id="fecha-nacimiento" required onChange={(e) => setEdad(e.target.value)}/>
                <label className="registro-label" for="correo-electronico">Ingrese su correo electrónico:</label>
                    <input className='registro-inputs' type="email" name="correo-electronico" id="correo-electronico" placeholder='Ej: jhondoe@ricapizza.com' required onChange={(e) => setEmail(e.target.value)}/>
                <label className="registro-label" htmlFor="contraseña">Ingrese su contraseña:</label>
                <input className='registro-inputs' type="password" name="contraseña" id="contraseña" placeholder='Escriba una contraseña dificil de adivinar' onChange={(e) => setContraseña(e.target.value)}/>
                <label className="registro-label" htmlFor="confirmar-contraseña">Por favor, repita su contraseña:</label>
                <input className='registro-inputs' type="password" name="contraseña" id="confirmar-contraseña" placeholder='Repita su contraseña dificil de adivinar' onChange={(e) => setConfirmarContraseña(e.target.value)}/>
                <input className="registro-boton-submit" type="submit" value="Registrarme ahora" />
            </form>
        </section> 
    </main>
    </>
  )
}
