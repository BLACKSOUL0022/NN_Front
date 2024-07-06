import './Login.css';

function Login() {
  return (
    <div className='Container'>

      <div className="Login">
        <div className='blurredBg'></div>
        
        <form className='login-form'>
          <p className='login-title'>INICIAR SESIÓN</p>
          <input className='email' placeholder='Correo electrónico' type='email' id='email' name='email' required></input>
          <input className='password' placeholder='Contraseña' type='password' id='password' name='password' required></input>
          <input className='lilbox' type='checkbox' id='rememberme' name='rememberme'></input>
          <p className='remembermeText'>Recuérdame</p>
          <a className='forgotMyPass' href="#">Olvidé mi contraseña</a>
          <button className='enter' type='submit'>Entrar</button>
              
        </form>
        <a className='guest' href="#">Ingresar como invitado</a>
        <div className='login-footer'>
          <p className='registerP1'>¿No tienes una cuenta?</p>  
          <a href="#" className='registerP2'> Crea una aquí</a>
        </div> 
      </div>
      
    </div>
  );
}

export default Login;