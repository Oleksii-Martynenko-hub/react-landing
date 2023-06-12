import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationProps {}

const StyledNavigation = styled.nav`
  padding: 0 90px;

  ${({ theme }) => theme.media.lg} {
    padding: 0 50px;
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 33px;

    ${({ theme }) => theme.media.lg} {
      margin-right: 25px;
    }
  }
`;

const NavLink = styled.a`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.text.light};
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.light};
  transition: border-bottom 0.2s ease;

  &:hover {
    border-bottom: 1px solid transparent;
  }

  ${({ theme }) => theme.media.lg} {
    font-size: 12px;
  }
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
