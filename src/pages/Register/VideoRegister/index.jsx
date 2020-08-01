import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

import PageDefault from '../../../components/PageDefault';
import { RegisterWrapper } from '../styles';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { Button } from '../../../components/Button';
import videosRepository from '../../../respositories/videos';

const VideoRegister = () => {

  const alert = useAlert();
  const history = useHistory();
  const { handleValueChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });
  return (
    <PageDefault>
      <RegisterWrapper>
        <h1> Cadastro de vídeos </h1>

        <form onSubmit={(event) => {
          event.preventDefault();

          videosRepository.create({
            title: values.title,
            url: values.url,
            categoryId: 1,
          })
            .then(() => {
              alert.show('Video saved successfully.');
              history.push('/');
            })
            .catch(() => {
              alert.show('Erro saving the video');
            });
        }}
        >
          <FormField
            label="Título do Vídeo"
            name="title"
            value={values.title}
            onChange={handleValueChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleValueChange}
          />

          <FormField
            label="Categoria"
            name="category"
            value={values.category}
            onChange={handleValueChange}
          />

          <Button type="submit">
            Cadastrar
          </Button>
        </form>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </RegisterWrapper>
    </PageDefault>
  );
};

export default VideoRegister;
