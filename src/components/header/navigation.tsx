import styled from 'styled-components';
import Logo from '../common/logo/logo';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.nav`
  padding: 0 100px;
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const NavLink = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  letter-spacing: -0.02em;
  text-decoration-line: underline;
  text-transform: uppercase;

  color: ${({ theme }) => theme.palette.text.light};
`;

export function Navigation(props: NavigationProps) {
  const links = [
    {
      label: 'Our team',
      href: '/our-team',
    },
    {
      label: 'Tokens',
      href: '/tokens',
    },
    {
      label: 'Connect wallet',
      href: '/connect-wallet',
    },
    {
      label: 'Lightpaper',
      href: '/lightpaper',
    },
  ];

  return (
    <StyledNavigation>
      <NavList>
        {links.map(({ label, href }) => (
          <NavItem key={label}>
            <NavLink href={href}>{label}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNavigation>
  );
}

export default Navigation;
