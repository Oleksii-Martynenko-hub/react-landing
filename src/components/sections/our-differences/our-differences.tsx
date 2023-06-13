import styled from 'styled-components';

import Title from 'src/components/common/title/title';
import CommonContainer from 'src/components/common/common-container';

/* eslint-disable-next-line */
export interface OurDifferencesProps {}

const StyledOurDifferences = styled.div`
  position: relative;
  background: #1d1534;
  padding: 165px 0 0;

  ${({ theme }) => theme.media.lg} {
    padding: 100px 0 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
`;

const BackgroundImages = styled.div`
  position: absolute;
  z-index: -1;
  top: -512px;
  bottom: -253px;
  right: 0;

  width: 100%;
  background: url('src/assets/images/our-differences/top-of-background.svg'),
    url('src/assets/images/our-differences/bottom-of-background.svg');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: top center, bottom center;

  ${({ theme }) => theme.media.lg} {
    top: -350px;
    bottom: -170px;
  }
`;

const StyledLogo = styled.img`
  margin: 7px 77px 0 0;

  ${({ theme }) => theme.media.lg} {
    margin: 7px 50px 0 0;
  }
`;

const StyledTitle = styled(Title)`
  max-width: 356px;
  margin: 0 175px 0 0;

  ${({ theme }) => theme.media.lg} {
    min-width: 250px;
    margin: 0 100px 0 0;
  }
`;

const Text = styled.p`
  max-width: 590px;
  margin: 14px 0 0 0;
  font-weight: 300;
  color: ${({ theme }) => theme.palette.text.secondaryOpacity};
`;

const Paragraph = styled.p`
  &:nth-child(1) {
    margin: 0 0 29px 0;
    letter-spacing: 0.1px;
  }
  &:nth-child(2) {
    margin: 0 0 24px 0;
    letter-spacing: 0.15px;
  }
  &:nth-child(3) {
    letter-spacing: 0.15px;
  }
`;

const Bold = styled.span`
  font-weight: 500;
`;

export function OurDifferences(props: OurDifferencesProps) {
  return (
    <StyledOurDifferences>
      <BackgroundImages />

      <CommonContainer>
        <ContentWrapper>
          <StyledLogo src="src/assets/images/logo_icon.png" alt="logo icon" />

          <StyledTitle size="large" color="light">
            What makes us different?
          </StyledTitle>

          <Text>
            <Paragraph>
              <Bold>
                We would only launch tokens with the express permission of the
                creators.
              </Bold>
            </Paragraph>

            <Paragraph>
              There are several thousand celebrities and creators on twitter,
              tiktok, Instagram and YouTube with followings in the millions who
              we would be <Bold>actively engaging</Bold> before we go viral.
            </Paragraph>

            <Paragraph>
              We would get them on our platform and they would see the
              opportunity to create a fan driven digital economy where their
              digital content can be traded as NFTs and their most loyal fans
              can have the monetary value of their creator's currency increase{' '}
              <Bold>significantly</Bold> as they promote their digital currency
              across their channels while our native token holders benefit from
              the Tokners popularity.
            </Paragraph>
          </Text>
        </ContentWrapper>
      </CommonContainer>
    </StyledOurDifferences>
  );
}

export default OurDifferences;
