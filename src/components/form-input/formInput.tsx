import React, { ChangeEvent } from 'react'
import './formInput.scss'
interface FormInputProps {
    label: string;
    type: string;
    placeholder: string;
    name: string;
    value: string;
    required?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
  const FormInput = ({
    label,
    type,
    placeholder,
    name,
    value,
    required,
    onChange,
  }:FormInputProps) => {
    return (
      <div className='group'>
           <input
        className='form-input'
          type={type}
          
          name={name}
          value={value}
          required={required}
          onChange={onChange}
        />
        {label && (<label className={`${value.length > 0 ? 'shrink' : ''} form-input-label`}>{label}</label>)}
     
      </div>
    );
  };

export default FormInput