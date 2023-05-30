import styled from 'styled-components';

import Button from 'src/components/common/button/button';

/* eslint-disable-next-line */
export interface AuthButtonsProps {}

const StyledAuthButtons = styled.nav``;

const SignInButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  background: none;
  border: none;
  padding: 10px;
  margin: 0 20px 0 0;
  color: ${({ theme }) => theme.palette.text.light};

  & span {
    border-bottom: 1px solid ${({ theme }) => theme.palette.text.light};
    transition: border-bottom 0.2s ease;
  }

  &:hover span {
    border-bottom: 1px solid transparent;
  }
`;

const SignUpButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  background-color: ${({ theme }) => theme.palette.colors.lightBtn};
  padding-left: 46px;
  padding-right: 46px;

  &:hover {
    filter: brightness(0.98);
  }
`;

export function AuthButtons(props: AuthButtonsProps) {
  return (
    <StyledAuthButtons>
      <SignInButton>
        <span>Sign In</span>
      </SignInButton>

      <SignUpButton>Sign Up</SignUpButton>
    </StyledAuthButtons>
  );
}

export default AuthButtons;
