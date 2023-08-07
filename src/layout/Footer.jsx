export default function Footer() {
    return (
      <footer id="footer">
        <div className="caja-footer">
          <div className="footer-elementos">
            <div className="caja-logo">
              <img className="logo-navbar" src="src\assets\rolling.png" alt="" />
              React to my pizza!
            </div>
          </div>
          <div className="footer-elementos"> 
          <ul>
          <h4 className="h4-footer">Enlaces utiles</h4>
          
              
                  <li className="li-footer"><a className="hipervinculo-footer" href="">Inicio</a></li>
                  {/* <li><a href="">Nuestros productos</a></li> */}
                  <li className="li-footer"><a className="hipervinculo-footer" href="">Sobre nosotros</a></li>
                  <li className="li-footer"><a className="hipervinculo-footer" href="">Contacto</a></li>
              </ul>
             
  
          </div>
          <div className="footer-elementos">
          
              <ul>
               <h4 className="h4-footer">Contacto</h4>
                  <li className="li-footer"><a className="hipervinculo-footer" href="">Link redes sociales</a></li>
              </ul>
             
          
          
          </div>
        </div>
      </footer>
    );
  }
  