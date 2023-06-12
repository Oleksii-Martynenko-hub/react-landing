import styled from 'styled-components';

export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  isLight?: boolean;
}

const StyledLogo = styled.img`
  ${({ theme }) => theme.media.lg} {
    width: 150px;
  }
`;

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
