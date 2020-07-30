import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { RegisterWrapper } from '../styles';
import { Button } from '../../../components/Button';

const CategoryRegister = () => {
  const initialValues = {
    name: '',
    description: '',
    color: '#141414',
  };

  const [categoryList, setCategoryList] = useState([]);
  const [categoryValues, setCategoryValues] = useState(initialValues);

  function handleValueChange(categoryInfos) {
    const { value } = categoryInfos.target;
    const name = categoryInfos.target.getAttribute('name');
    setCategoryValues({
      ...categoryValues,
      [name]: value,
    });
  }

  return (
    <PageDefault>
      <RegisterWrapper>
        <h1>
          {' '}
          Cadastro de Categoria:
          {categoryValues.name}
        </h1>
        <form
          onSubmit={function handleSubmit(eventInfos) {
            eventInfos.preventDefault();
            setCategoryList([...categoryList, categoryValues]);
            setCategoryValues(initialValues);
          }}
        >

          <FormField
            label="Nome da Categoria:"
            name="name"
            type="text"
            value={categoryValues.name}
            onChange={handleValueChange}
          />

          <FormField
            label="Descrição:"
            type="textarea"
            name="description"
            value={categoryValues.description}
            onChange={handleValueChange}
          />

          <FormField
            label="Cor:"
            name="color"
            type="color"
            value={categoryValues.color}
            onChange={handleValueChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>
        <ul>
          {categoryList.map((category) => (
            <li key={`id_${category}`}>
              {category.name}
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
