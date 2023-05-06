import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.palette.text.secondaryOpacity};
  width: 100%;
  padding: 36px 36px 36px 40px;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>Welcome to Header!</h1>
    </StyledHeader>
  );
}

export default Header;
