import './Register.css';

function Register() {
  return (
    <div className='Container'>

      <div className='links'>
        <a href="#" className='register-link'>Iniciar Sesión</a>
        <a href="#" className='suggestions-link'>Sugerencias</a>
      </div>
      <div className="Register">
        <div className='blurredBg'></div>
        
        <form className='register-form'>
          <p className='register-title'>REGISTRARSE</p>
          <input className='username' placeholder='Nombre de usuario' type='user' id='username' name='user' required></input>
          <input className='email' placeholder='Correo electrónico' type='email' id='email' name='email' required></input>
          <input className='password' placeholder='Contraseña' type='password' id='password' name='password' required></input>
          <button className='create' type='submit'>Crear</button> 
        </form>
        <a className='guest' href="#">Ingresar como invitado</a>
      </div>
    </div>
  );
}

export default Register; 