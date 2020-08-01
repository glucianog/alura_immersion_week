import React from 'react';
import PropTypes from 'prop-types';

import { FormFieldWrapper, Input, Label } from './styles';

const FormField = ({
  label, name, onChange, suggestions, type, value,
}) => {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const inputType = isTextArea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestion = Boolean(suggestions.length);

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
          autoComplete={hasSuggestion ? 'off' : 'on'}
          list={hasSuggestion ? `suggestionFor_${fieldId}` : undefined}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {hasSuggestion && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option value={suggestion} key={ `suggestionFor_${fieldId}_option${suggestion}`}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};
export default FormField;
