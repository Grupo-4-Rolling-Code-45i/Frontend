import React from 'react'
import '../css/home.css'
export const HomePage = () => {
  return (
    <>
    {/* Primera sección de la web */}
        <section className='home-primer-section'>
            <div className='home-div-imagen-primera-seccion'>
                <div className='home-div-franjaNegra-imagen'>
                    <img className='home-imagen-pizza-primera-seccion' src="src\home\assets\img\pizza-primera-seccion-png.png" alt="Imagen de Pizza" />
                </div>
                </div>
            <div className='home-div-formularioBuscar-primera-seccion'>
                <h2 className='home-titulo-primera-seccion'>Desde nuestra <span className='span-red'>cocina</span><br></br> a la puerta de tu <span className='span-red'>casa</span></h2>
                <form className='home-formulario-buscar-productos'>
                    <div className='home-contenedor-input-buscar'>
                    <input className="home-input-buscar-productos" type="search" placeholder='Buscar productos...' required/>
                    <i class="fa-solid fa-magnifying-glass home-icono-lupa-input-buscar"></i>
                    </div>
                    <input className='home-boton-submit-buscar-productos' type="submit" value="Buscar" />
                </form>
                </div>

        </section>
         {/* Segunda sección de la web */}
        <section className='home-segundo-section-sobre-nosotros'>
            <div className='home-contenedor-imagen-sobre-nosotros'>
                <img className='home-imagen-sobre-nosotros' src="src\home\assets\img\pizza-sobre-nosotros.png" alt="Imagen de Pizza sobre una mesa con las porciones cortadas" />
            </div>
            <div className='home-contenedor-texto-sobre-nosotros'>
                <h3 className='home-titulo-sobreNosotros'>Sobre nosotros</h3>
                <h4 className='home-titulo-sobreNosotros-tituloPagina'>Nombre de la página</h4>
                <p className='home-parrafo-sobre-nosotros'>Somos un restaurante dedicado a ofrecer lo mejor a nuestros clientes, por eso elaboramos las mejores <span className='home-span-rojo'>M</span >asas caseras para crear unas <span className='home-span-rojo'>E</span>xquisitas pizzas. Para entender por que lo hacemos, nuestra lógica es <span className='home-span-rojo'>R</span>ápida, solo <span className='home-span-rojo' >N</span>os queremos asegurar que haya sonrisas en cada hogar cada vez que hay una de nuestras pizzas en sus mesas </p>
                <button className='home-boton-sobreNosotros-leermas'>Leer más</button>
            </div>
        </section>
        <section className='home-tercer-section-menu'>
            <h2 className='home-tercer-section-tituloMenu'>Menú</h2>
            <div className='home-contenedor-cards-productos'>
                <div className="home-card-productos">Aquí van las cards de productos</div>
                <div className="home-card-productos">Aquí van las cards de productos</div>
                <div className="home-card-productos">Aquí van las cards de productos</div>
                <div className="home-card-productos">Aquí van las cards de productos</div>
            </div>
        </section>
        <section className='home-cuarta-section-donde-encontrarnos'>
            <h2 className='home-cuarta-section-donde-encontrarnos-titulo'>¿Donde encontrarnos?</h2>
            <iframe className='home-cuarta-section-mapa' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1690391123408!5m2!1ses-419!2sar" width="1000" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='home-cuarta-section-contenedor-redesSociales'>
                <button className='home-cuarta-section-boton-redesSociales'><i class="fa-brands fa-facebook-f"></i></button>
                <button className='home-cuarta-section-boton-redesSociales'><i class="fa-brands fa-instagram"></i></button>
                <button className='home-cuarta-section-boton-redesSociales'><i class="fa-brands fa-twitter"></i></button>
            </div>
        </section>
    </>
  )
}
