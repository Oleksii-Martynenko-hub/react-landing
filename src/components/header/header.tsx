import styled from 'styled-components';

import Logo from 'src/components/common/logo/logo';
import Navigation from './navigation';
import AuthButtons from './auth-buttons';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 36px 36px 36px 40px;
`;

const LogoWrapper = styled.div`
  margin-right: auto;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>

      <Navigation />

      <AuthButtons />
    </StyledHeader>
  );
}

export default Header;
