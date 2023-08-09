import logoReactToMyPizza from '../assets/Logo_React_to_my_Pizza_SVG.svg'
export default function Footer() {
    return (
      <footer id="footer">
        <div className="caja-footer">
          <div className="footer-elementos">
          <div  id="caja-logo-texto">
              <img
                className="logo-navbar"
                id="logo-footer"
                src={logoReactToMyPizza}
                alt=""
              />
              <div className="texto-logo">
                 <div className="cajita">React to my </div>
                
                 <div className="cajita" id="pizza-footer">PIZZA</div>
              </div>
            </div>
          </div>
          <div className="footer-elementos"> 
          <ul>
          <h4 className="h4-footer">Enlaces utiles</h4>
          
              
                  <li className="li-footer"><a className="hipervinculo-footer" href="/">Inicio</a></li>
                  {/* <li><a href="">Nuestros productos</a></li> */}
                  <li className="li-footer"><a className="hipervinculo-footer" href="/sobre-nosotros">Sobre nosotros</a></li>
                  <li className="li-footer"><a className="hipervinculo-footer" href="/contacto">Contacto</a></li>
              </ul>
             
  
          </div>
          <div className="footer-elementos">
          
              <ul>
               <h4 className="h4-footer">Contacto</h4>
                  <li className="li-footer"><a className="hipervinculo-footer" href="/contacto">Link redes sociales</a></li>
              </ul>
             
          
          
          </div>
        </div>
      </footer>
    );
  }
  