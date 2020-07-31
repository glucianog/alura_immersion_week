import React, { useEffect, useState } from 'react';
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
