import React from 'react';

const FormField = ({ isTextArea, label, name, onChange, type, value }) => {
  return (
    <div>
      <label>
        {label}
        {isTextArea ?
          <textarea
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />        
        :
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />        
        }
        
      </label>
    </div>
  )
}
export default FormField;