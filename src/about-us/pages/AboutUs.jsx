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
        <p className='sobreNosotros-desc-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quis blanditiis sint error quos doloribus saepe temporibus facilis beatae vero praesentium cupiditate, animi aspernatur eius ipsum repellendus illo velit dolores.</p>
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
        <p className='sobreNosotros-desc-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quis blanditiis sint error quos doloribus saepe temporibus facilis beatae vero praesentium cupiditate, animi aspernatur eius ipsum repellendus illo velit dolores.</p>
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
        <p className='sobreNosotros-desc-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quis blanditiis sint error quos doloribus saepe temporibus facilis beatae vero praesentium cupiditate, animi aspernatur eius ipsum repellendus illo velit dolores.</p>
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
        <p className='sobreNosotros-desc-card'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quis blanditiis sint error quos doloribus saepe temporibus facilis beatae vero praesentium cupiditate, animi aspernatur eius ipsum repellendus illo velit dolores.</p>
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
