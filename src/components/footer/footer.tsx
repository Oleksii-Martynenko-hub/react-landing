import styled from 'styled-components';

import CommonContainer from 'src/components/common/common-container';
import Logo from 'src/components/common/logo/logo';

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
  align-items: center;
`;

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  flex: 1 1 100%;
  margin: 0 0 121px 0;
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

const SocialList = styled.ul`
  display: flex;
  padding: 0 0 0 18px;
`;

const SocialItem = styled.li`
  margin: 0 10px 0 0;
`;

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.05);
`;

const SocialIcon = styled.img``;

const Copyright = styled.p`
  color: ${({ theme }) => theme.palette.text.light};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  letter-spacing: 0.1px;
`;

const Designer = styled.span`
  display: block;
  font-weight: 500;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.02em;
  text-decoration-line: underline;
  opacity: 0.5;
`;

const DesignerLogo = styled.img`
  margin: 0 6px 0 0;
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

  const socialList = [
    {
      name: 'Twitter',
      icon: 'src/assets/images/footer/twitter.svg',
      link: 'https://twitter.com/NFT_Art_Club',
    },
    {
      name: 'Telegram',
      icon: 'src/assets/images/footer/telegram.svg',
      link: 'https://t.me/NFTArtClub',
    },
    {
      name: 'Instagram',
      icon: 'src/assets/images/footer/instagram.svg',
      link: 'https://www.instagram.com/nftartclub/',
    },
    {
      name: 'Medium',
      icon: 'src/assets/images/footer/medium.svg',
      link: 'https://medium.com/@nftartclub',
    },
    {
      name: 'Github',
      icon: 'src/assets/images/footer/github.svg',
      link: 'https://github.com/NFTArtClub',
    },
    {
      name: 'Reddit',
      icon: 'src/assets/images/footer/reddit.svg',
      link: 'https://www.reddit.com/r/NFTArtClub/',
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

          <Logo isLight />

          <SocialList>
            {socialList.map((item) => (
              <SocialItem key={item.name}>
                <SocialLink href={item.link}>
                  <SocialIcon src={item.icon} alt={item.name + ' icon'} />
                </SocialLink>
              </SocialItem>
            ))}
          </SocialList>

          <Copyright>
            © 2021 Tokners. All rights reserved.
            <Designer>
              <DesignerLogo
                src="src/assets/images/footer/designer_logo.svg"
                alt="designer logo"
              />
              Design by Oleg Kulik
            </Designer>
          </Copyright>
        </ContentWrapper>
      </CommonContainer>
    </StyledFooter>
  );
}

export default Footer;
