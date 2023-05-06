import styled from 'styled-components';
import Logo from '../common/logo/logo';
import Navigation from './navigation';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.text.secondaryOpacity};
  padding: 36px 36px 36px 40px;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <Logo />

      <Navigation />
    </StyledHeader>
  );
}

export default Header;
