export default function Footer() {
    return (
      <>
        <div className="caja-footer">
          <div className="footer-elementos">
            <div className="caja-logo">
              <img className="logo-navbar" src="src\assets\rolling.png" alt="" />
              pizzeria rolling code
            </div>
          </div>
          <div className="footer-elementos"> 
          <ul>
          <h4>Enlaces utiles</h4>
          
              
                  <li><a href="">Inicio</a></li>
                  {/* <li><a href="">Nuestros productos</a></li> */}
                  <li><a href="">Sobre nosotros</a></li>
                  <li><a href="">Contacto</a></li>
              </ul>
             
  
          </div>
          <div className="footer-elementos">
          
              <ul>
               <h4>Contacto</h4>
                  <li><a href="">Link redes sociales</a></li>
              </ul>
             
          
          
          </div>
        </div>
      </>
    );
  }
  