import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

const Menu = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt='GFlix logo'/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;