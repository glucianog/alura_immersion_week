import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { RegisterWrapper } from '../styles';
import { Button } from '../../../components/Button';
import useForm from '../../../hooks/useForm';

const CategoryRegister = () => {
  const initialValues = {
    title: '',
    description: '',
    color: '#141414',
  };

  const { values, handleValueChange, clearForm } = useForm(initialValues);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categories'
      : 'https://gameflixalura.herokuapp.com/categories';
    fetch(URL)
      .then(async (response) => {
        const data = await response.json();
        setCategoryList([...data]);
      });
  }, []);

  return (
    <PageDefault>
      <RegisterWrapper>
        <h1>
          {' '}
          Cadastro de Categoria:
          {values.name}
        </h1>
        <form
          onSubmit={function handleSubmit(eventInfos) {
            eventInfos.preventDefault();
            setCategoryList([...categoryList, values]);
            clearForm();
          }}
        >

          <FormField
            label="Nome da Categoria:"
            name="title"
            type="text"
            value={values.title}
            onChange={handleValueChange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleValueChange}
          />

          <FormField
            label="Cor:"
            name="color"
            type="color"
            value={values.color}
            onChange={handleValueChange}
          />

          <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Cadastrar
          </Button>

        </form>

        {categoryList.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <ul>
          {categoryList.map((category) => (
            <li key={category.id}>
              {category.title}
            </li>
          ))}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </RegisterWrapper>
    </PageDefault>
  );
};

export default CategoryRegister;
