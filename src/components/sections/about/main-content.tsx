import styled from 'styled-components';

import Button from 'src/components/common/button/button';
import Title from 'src/components/common/title/title';

const StyledMainContent = styled.div``;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.palette.text.blue};
  font-weight: 500;
  font-size: 18px;
  line-height: 54px;
  margin: 0 0 2px 0;
`;

const StyledTitle = styled(Title)`
  max-width: 553px;
  margin: 0 0 33px 0;
`;

const Text = styled.p`
  max-width: 511px;
  margin: 0 0 42px 0;
`;

export function MainContent() {
  return (
    <StyledMainContent>
      <SubTitle>At Tokners are</SubTitle>

      <StyledTitle size="large">
        Reimagining social media through the power of the blockchain.
      </StyledTitle>

      <Text>
        We are creating social media 3.0 with influencers, celebrities and
        creators being able to launch their own digital currency by simply
        creating a profile with media content posted as Non fungible Tokens that
        can be owned and traded on the Tokners network
      </Text>

      <Button>Learn More</Button>
    </StyledMainContent>
  );
}

export default MainContent;
