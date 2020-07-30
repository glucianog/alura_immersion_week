import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


const CategoryRegister = () => {  
  const initialValues = { 
    name: '',
    description: '',
    color: '#141414'
  }
  
  const [ categoryList, setCategoryList ] = useState([]);
  const [ categoryValues, setCategoryValues ] = useState(initialValues);

  function handleValueChange (categoryInfos) {
    const { value } = categoryInfos.target;
    const name = categoryInfos.target.getAttribute('name');
    setCategoryValues({
      ...categoryValues,
      [name]: value 
    })
  }

  return (
    <PageDefault>
      <h1> Cadastro de Categoria: {categoryValues.name} </h1>
      <form
        onSubmit={ function handleSubmit(eventInfos) {
          eventInfos.preventDefault();
          setCategoryList([...categoryList, categoryValues]);
          setCategoryValues(initialValues)
        }}
      >

        <FormField
          label='Nome da Categoria:'
          name='name'
          type='text'
          value={categoryValues.name}
          onChange={handleValueChange}
        />

        <FormField 
          label='Descrição:'
          name='description'
          type='text'
          isTextArea
          value={categoryValues.description}
          onChange={handleValueChange}        
        />

        <FormField
          label='Cor:'
          name='color'
          type='color'
          value={categoryValues.color}
          onChange={handleValueChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categoryList.map((category, index) => (
          <li key={index}>
            {category.name}
          </li>
        ))}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CategoryRegister;
