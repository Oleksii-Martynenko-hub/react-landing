import styled from 'styled-components';
import Logo from '../common/logo/logo';

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
      <Logo />
    </StyledHeader>
  );
}

export default Header;
