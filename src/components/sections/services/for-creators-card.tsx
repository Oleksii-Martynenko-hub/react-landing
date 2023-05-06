import Title from 'src/components/common/title/title';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ForCreatorsCardProps {}

const StyledForCreatorsCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.colors.serviceCards};
  padding: 40px 64px 0 69px;
  max-width: 777px;
  border-radius: 25px;
`;

const CardNumber = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 54px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.3;
  margin: 0 0 40px 0;
`;

const GreenTitle = styled.span`
  color: ${({ theme }) => theme.palette.text.green};
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.green};
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 0 30px 0;
`;

const Text = styled.p`
  letter-spacing: 0.33px;
  text-align: center;
  margin: 0 0 67px 0;
`;

const WaveVector = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const GuyWithPencil = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  margin: 0 auto;
  padding-left: 79px;
`;

export function ForCreatorsCard(props: ForCreatorsCardProps) {
  return (
    <StyledForCreatorsCard>
      <CardNumber>01</CardNumber>

      <StyledTitle>
        For <GreenTitle>Creators</GreenTitle>
      </StyledTitle>

      <Text>
        Creators can gain independence through a decentralised digital currency
        system that is dependent on growing and engaging with the community and
        also their star power. They own 10-15% of the total value of the tokens
        minted.
      </Text>

      <WaveVector
        src="src/assets/images/services/vector_first_card.svg"
        alt="gray wave vector"
      />

      <GuyWithPencil
        src="src/assets/images/services/guy_with_pencil.png"
        alt="guy holding by hugging tablet and pencil"
      />
    </StyledForCreatorsCard>
  );
}

export default ForCreatorsCard;
