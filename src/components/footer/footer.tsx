import styled from 'styled-components';
import CommonContainer from '../common/common-container';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  background: ${({ theme }) => theme.palette.colors.footerBackground};
  padding: 367px 0 170px;
  margin: -249px 0 0 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  flex: 1 1 100%;
`;

const NavItem = styled.li`
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  &:not(:last-child) {
    margin: 0 68px 0 0;

    &::after {
      content: '/';
      font-size: 14px;
      font-weight: 500;
      opacity: 0.16;
      margin: 0 0 0 68px;
    }
  }
`;

const NavLink = styled.a`
  display: inline-block;
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.light};
`;

export function Footer(props: FooterProps) {
  const navList = [
    {
      name: 'Our team',
      link: '/our-team',
    },
    {
      name: 'Tokens',
      link: '/tokens',
    },
    {
      name: 'Connect wallet',
      link: '/connect-wallet',
    },
    {
      name: 'Lightpaper',
      link: '/lightpaper',
    },
  ];

  return (
    <StyledFooter>
      <CommonContainer>
        <ContentWrapper>
          <Navigation>
            {navList.map((item) => (
              <NavItem key={item.name}>
                <NavLink href={item.link}>{item.name}</NavLink>
              </NavItem>
            ))}
          </Navigation>
        </ContentWrapper>
      </CommonContainer>
    </StyledFooter>
  );
}

export default Footer;
