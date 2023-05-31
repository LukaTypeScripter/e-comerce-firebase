import React, { ChangeEvent } from 'react'
import {FormInputLabel,Input,Group} from './FormStyles/formInput'
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
      <Group>
           <Input
        className='form-input'
          type={type}
          
          name={name}
          value={value}
          required={required}
          onChange={onChange}
        />
        {label && (<FormInputLabel  shrink={value.length > 0}>{label}</FormInputLabel>)}
     
      </Group>
    );
  };

export default FormInput