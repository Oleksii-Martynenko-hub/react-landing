import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LogoProps {}

const StyledLogo = styled.img``;

export function Logo(props: LogoProps) {
  return (
    <StyledLogo
      src="src/assets/images/logo_full.png"
      alt="logo with dark text"
    />
  );
}

export default Logo;
