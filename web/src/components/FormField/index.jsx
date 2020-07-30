import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({
  isTextArea, label, name, onChange, type, value,
}) => {
  const fieldId = `id_${name}`;
  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        {isTextArea ? (
          <textarea
            id={fieldId}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )
          : (
            <input
              id={fieldId}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
      </label>
    </div>
  );
};

FormField.defaultProps = {
  isTextArea: false,
};

FormField.propTypes = {
  isTextArea: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
export default FormField;
