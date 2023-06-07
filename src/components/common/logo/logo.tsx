import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  isLight?: boolean;
}

const StyledLogo = styled.img``;

export function Logo({ isLight = false, ...props }: LogoProps) {
  return (
    <a href="/" style={{ display: 'inline-block' }}>
      {!isLight ? (
        <StyledLogo
          src="src/assets/images/logo_full.png"
          alt="logo with dark text"
          {...props}
        />
      ) : (
        <StyledLogo
          src="src/assets/images/footer/logo_white_text.png"
          alt="logo with white text"
          {...props}
        />
      )}
    </a>
  );
}

export default Logo;
