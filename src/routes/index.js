import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages';
import { About } from '../pages/';
import { Login } from '../pages/';
import { RedefinirSenha } from '../pages/';

export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="redefinirSenha" element={<RedefinirSenha />} />
    </Routes>
  );
};
