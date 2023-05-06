import { HTMLAttributes } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'large' | 'medium' | 'small';
  color?: 'dark' | 'light';
}

const StyledTitle = styled.h2<TitleProps>`
  color: ${({ theme, color }) =>
    color === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.secondary};

  font-size: ${({ size }) => {
    switch (size) {
      case 'large':
        return '48px';
      case 'medium':
        return '36px';
      default:
        return '32px';
    }
  }};

  font-weight: 500;
  line-height: 54px;
`;

export function Title({
  size = 'medium',
  color = 'dark',
  children,
  ...props
}: TitleProps) {
  return (
    <StyledTitle size={size} color={color} {...props}>
      {children}
    </StyledTitle>
  );
}

export default Title;
