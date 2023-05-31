import React, { ButtonHTMLAttributes } from 'react';
import {BaseButton,GoogleSignInButton,Inverted} from "./ButtonStyle/button"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: 'google' | 'inverted' | 'base' | "undefined";
}

export const BUTTON_TYPES_CLASSES = {
  base:'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) => {
  return {
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPES_CLASSES.inverted]: Inverted,
  }[buttonType];
}

function Button({ children, buttonType, ...other }: ButtonProps) {
  
  const CustomButton = getButton(buttonType)
  return (
    <CustomButton  {...other}>
      {children}
    </CustomButton>
  );
}

export default Button;