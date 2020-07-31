import { useState } from 'react';

export default function useForm(initialValues) {
  const [categoryValues, setCategoryValues] = useState(initialValues);

  function handleValueChange(categoryInfos) {
    const { value } = categoryInfos.target;
    const name = categoryInfos.target.getAttribute('name');
    setCategoryValues({
      ...categoryValues,
      [name]: value,
    });
  }

  function clearForm() {
    setCategoryValues(initialValues);
  }

  return {
    categoryValues,
    handleValueChange,
    clearForm,
  };
}
