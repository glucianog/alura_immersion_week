import { useState } from 'react';

export default function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleValueChange(categoryInfos) {
    const { value } = categoryInfos.target;
    const name = categoryInfos.target.getAttribute('name');
    setValues({
      ...values,
      [name]: value,
    });
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleValueChange,
    clearForm,
  };
}
