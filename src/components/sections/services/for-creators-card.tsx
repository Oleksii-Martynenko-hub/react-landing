import styled from 'styled-components';

import Title from 'src/components/common/title/title';

/* eslint-disable-next-line */
export interface ForCreatorsCardProps {}

const StyledForCreatorsCard = styled.div`
  position: relative;
  overflow: hidden;
  background-image: ${({ theme }) => theme.palette.colors.serviceCardsGradient};
  padding: 40px 64px 640px 69px;
  max-width: 777px;
  border-radius: 25px;
  flex: 1 1 calc(50% - 10px);
  margin: 0 20px 0 0;
`;

const CardNumber = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 54px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.3;
  margin: 0 0 38px 0;
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
  /* margin: 0 0 67px 0; */
`;

const GuyWithPencil = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(50% + 42px);
  transform: translateX(-50%);
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

      <GuyWithPencil
        src="src/assets/images/services/guy_with_pencil.png"
        alt="guy holding by hugging tablet and pencil"
      />
    </StyledForCreatorsCard>
  );
}

export default ForCreatorsCard;
