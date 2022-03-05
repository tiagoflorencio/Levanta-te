import React from 'react';
import { ButtonStyled } from './button.style';

export const Button = ({ children, fullWidth }) => {
  console.log(fullWidth);
  return <ButtonStyled fullWidth={fullWidth}>{children}</ButtonStyled>;
};
