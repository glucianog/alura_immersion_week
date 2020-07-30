import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Input, Label } from './styles';

const FormField = ({
  label, name, onChange, type, value,
}) => {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const inputType = isTextArea ? 'textarea' : 'input';

  const hasValue = value.length;
  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={inputType}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};
export default FormField;
