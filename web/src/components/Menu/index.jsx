import React from 'react';
import { Link } from 'react-router-dom';

import { LogoImage, MenuWrapper } from './styles';
import Logo from '../../assets/img/logo.png';
import Button from '../Button';

const Menu = () => {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt='GameFlix logo'/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </MenuWrapper>
  );
}

export default Menu;