import "./Login.css";

function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
           <img src="src\assets\usuario.png" alt="" className="profile" />
            </div>
          </div>
          <div>
            <h1>Iniciar Sesion</h1>
            <div>
              {/* <img src={email} alt="email" className="email"/> */}
              <input type="text" placeholder="Usuario" className="name" />
            </div>
            <div className="second-input">
              {/* <img src={pass} alt="pass" className="email"/> */}
              <input type="password" placeholder="Contraseña" className="name" />
            </div>
            <div className="login-button">
              <button className="button-login">Entrar</button>
            </div>

            <p className="link">
              <a href="#">Olvidaste tu contraseña?</a> O <a href="#">Crear cuenta</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;
