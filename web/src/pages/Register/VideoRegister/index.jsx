import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import { RegisterWrapper } from '../styles';

const VideoRegister = () => (
  <PageDefault>
    <RegisterWrapper>
      <h1> Cadastro de vídeos </h1>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </RegisterWrapper>
  </PageDefault>
);

export default VideoRegister;
