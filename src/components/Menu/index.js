import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="logo" src={logo} alt="DEVFLIX logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
