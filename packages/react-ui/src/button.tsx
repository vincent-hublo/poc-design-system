import * as React from "react";
import { button } from '../styled-system/recipes'


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...other }: ButtonProps) => {
  return (
    <button type="button"  className={button()}  {...other}>
      {children}
    </button>
  );
}

