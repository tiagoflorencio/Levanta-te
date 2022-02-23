import React from 'react';
import './login.styles.css';

const Login = () => {
  return (
    <div className="container">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <h2 className="tituloLogin">Login</h2>
      <div className="formulario">
        <form>
          <div className="inputlogin">
            <label for="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div className="inputlogin">
            <label for="senha">Password</label>
            <input type="password" id="senha" />
          </div>
          <div className="checar">
            <div>
              <input type="checkbox" id="" name="scales" />{' '}
              <label>Lembre-se de mim</label>
            </div>
            <p>Esqueceu sua senha</p>
          </div>
          <div className="inputlogin">
            <button className="buttonEntrar">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
