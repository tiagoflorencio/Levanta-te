import React from 'react';
import './home.style.css';
import { Link } from 'react-router-dom';
import { Button } from '../../componentes/Button';
import { Container } from '../../componentes/Container';

const Home = () => {
  return (
    <Container>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <main>
        <h1>Centro Educacional e Ass. Levanta-te</h1>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <div className="links">
        <nav>
          <Link to="/about">About</Link>
        </nav>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </Container>
  );
};

export default Home;
