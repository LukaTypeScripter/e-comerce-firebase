import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'google' | 'inverted';
}

const BUTTON_TYPES_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

function Button({ children, buttonType, ...other }: ButtonProps) {
  const buttonClass = buttonType ? BUTTON_TYPES_CLASSES[buttonType] : '';
  return (
    <button className={`button-container ${buttonClass}`} {...other}>
      {children}
    </button>
  );
}

export default Button;