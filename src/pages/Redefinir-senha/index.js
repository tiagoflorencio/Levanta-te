import React from 'react';
import './redefinir.style.css';
import { Container } from '../../componentes/Container';
import { Button } from '../../componentes/Button';

const RedefinirSenha = () => {
  return (
    <Container>
      <div className="cabecalho">
        <div className="voltar">
          <p> &lt; Voltar </p>
        </div>
        <h1 id="h1"> Esqueceu sua Senha</h1>
        <p>
          Não se preocupe, nós vamos te ajudar! Digite o seu CPF cadastrado para
          redefinir a sua senha.
        </p>
      </div>
      <div className="input">
        <label>E-mail</label>
        <input type="email" id="email"></input>
      </div>

      <Button fullWidth>Continuar</Button>
    </Container>
  );
};
export default RedefinirSenha;
