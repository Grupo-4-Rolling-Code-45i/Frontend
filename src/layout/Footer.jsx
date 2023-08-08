export default function Footer() {

  window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
}else{
    document.querySelector('.go-top-container').classList.remove('show');
}
}




document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});





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
                  <li><a href="">Nuestros productos</a></li>
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



          <div class="go-top-container">
			<div class="go-top-buttom">
				<i class="fa-solid fa-chevron-up"></i>
			</div>
		</div>




        </div>



        
      </>
    );
  }
  