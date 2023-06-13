import styled from 'styled-components';

import Card from './card';

/* eslint-disable-next-line */
export interface ForCreatorsCardProps {}

const StyledForCreatorsCard = styled(Card)`
  padding: 40px 64px 642px 69px;
  margin: 0 20px 0 0;

  ${({ theme }) => theme.media.lg} {
    padding: 20px 40px 410px;
  }
`;

const GuyWithPencil = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(50% + 42px);
  transform: translateX(-50%);

  ${({ theme }) => theme.media.lg} {
    transform: translateX(-50%) scale(0.7);
    transform-origin: bottom;
  }
`;

export function ForCreatorsCard(props: ForCreatorsCardProps) {
  return (
    <StyledForCreatorsCard
      highlightedColor="green"
      carNumber="01"
      cardTitle={
        <>
          For <span className="title--highlighted">Creators</span>
        </>
      }
      cardText="Creators can gain independence through a decentralised digital currency
        system that is dependent on growing and engaging with the community and
        also their star power. They own 10-15% of the total value of the tokens
        minted."
      cardImage={
        <GuyWithPencil
          src="src/assets/images/services/guy_with_pencil.png"
          alt="guy holding by hugging tablet and pencil"
        />
      }
    />
  );
}

export default ForCreatorsCard;
