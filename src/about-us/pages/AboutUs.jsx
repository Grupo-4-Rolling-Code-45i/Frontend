import React from 'react'
import '../css/aboutus.css'
export const Aboutus = () => {
  return (
    <>
    <main className='sobreNosotros-main-container'>
      <div className='sobreNosotros-titulo-container'>
      <h2 className='sobreNosotros-titulo'>Sobre nosotros</h2>
      <h3 className='sobreNosotros-Texto-intro'>Descubre quienes están detras de este proyecto...</h3>
      </div>
    <div className='sobreNosotros-container-cards'>
      <div className='sobreNosotros-card'>
        <div className='sobreNosotros-image-container'>
          <img  className='sobreNosotros-image' src='src\about-us\assets\nico.jpg' alt="Fotografía de Nico Quinteros" />
        </div>
        <h4 className='sobreNosotros-nombre-card'>Nico Quinteros</h4>
        <p className='sobreNosotros-desc-card'>Tengo 21 años, soy de Tucumán y estudio Ingeniería en Sistemas de Información en la UTN. Me gusta mucho todo lo que tenga que ver con la programacion y la robótica. Pueden ver mas de mi y mis proyectos en mi Github o mi Linkedin!</p>
        <div className="sobreNosotros-conteiner-botones">
          <a  className='sobre-nosotros-link' href="https://www.linkedin.com/in/nicol%C3%A1s-quinteros-459a93198/" target='_blank'>            
          <button className='sobreNosotros-boton-social'>
            <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <a  className='sobre-nosotros-link' href="https://github.com/nicoquinteros23" target='_blank'>
          <button className='sobreNosotros-boton-social'><i class="fa-brands fa-github"></i></button></a>
        </div>
      </div>
      <div className='sobreNosotros-card'>
        <div className='sobreNosotros-image-container'>
          <img className='sobreNosotros-image' src="src\about-us\assets\maxi.jpg" alt="Fotografía de Maxi Majorel" />
        </div>
        <h4 className='sobreNosotros-nombre-card'>Maxi Majorel</h4>
        <p className='sobreNosotros-desc-card'>Tengo 22 años, soy de Tucumán. Estudio fotografía pero desde chico que me gusta la informática así que decidí aprender a programar. Actualmente estoy creando junto a amigos una agencia donde publicaremos nuestros proyectos en Github.</p>
        <div className="sobreNosotros-conteiner-botones">
          <a  className='sobre-nosotros-link' href="https://www.linkedin.com/in/maximo-majorel/" target='_blank'>            
          <button className='sobreNosotros-boton-social'>
            <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <a  className='sobre-nosotros-link' href="https://github.com/maximajorel" target='_blank'>
          <button className='sobreNosotros-boton-social'><i class="fa-brands fa-github"></i></button></a>
        </div>
      </div>
      <div className='sobreNosotros-card'>
      <div className='sobreNosotros-image-container'>
          <img className='sobreNosotros-image' src="src\about-us\assets\damian.jpg" alt="Fotografía de Damián Paz" />
        </div>
        <h4 className='sobreNosotros-nombre-card'>Damián Paz</h4>
        <p className='sobreNosotros-desc-card'></p>
        <div className="sobreNosotros-conteiner-botones">
          <a  className='sobre-nosotros-link' href="https://www.linkedin.com/in/damian-paz-b72336185/" target='_blank'>            
          <button className='sobreNosotros-boton-social'>
            <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <a  className='sobre-nosotros-link' href="https://github.com/damianpazv" target='_blank'>
          <button className='sobreNosotros-boton-social'><i class="fa-brands fa-github"></i></button></a>
        </div>
      </div>
      <div className='sobreNosotros-card'>
      <div className='sobreNosotros-image-container'>
          <img className='sobreNosotros-image' src="src\about-us\assets\agustin.jpg" alt="Fotografía de Damián Paz" />
        </div>
        <h4 className='sobreNosotros-nombre-card'>Agustín Rubio</h4>
        <p className='sobreNosotros-desc-card'>Tengo 24 años, soy de Tucumán. Soy fotógrafo, estudio Ingeniería en Sistemas de Información en la UTN. Me gusta aprender sobre ciencia y tecnología, la programación, mecánica, electrónica y robótica. Pueden ver más sobre mis proyectos en mis redes!</p>
        <div className="sobreNosotros-conteiner-botones">
          <a  className='sobre-nosotros-link' href="https://www.linkedin.com/in/agustin-rubio-/" target='_blank'>            
          <button className='sobreNosotros-boton-social'>
            <i class="fa-brands fa-linkedin-in"></i>
            </button>
          </a>
          <a  className='sobre-nosotros-link' href="https://github.com/agustin-rubio" target='_blank'>
          <button className='sobreNosotros-boton-social'><i class="fa-brands fa-github"></i></button></a>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}
