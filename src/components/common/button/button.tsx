import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  border-radius: 52px;
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.colors.mainBtn};
  padding: 17px 28px 14px;
  border: none;

  &:hover {
    filter: brightness(1.1);
  }
`;

export function Button({ children, ...restProps }: ButtonProps) {
  return <StyledButton {...restProps}>{children}</StyledButton>;
}

export default Button;
