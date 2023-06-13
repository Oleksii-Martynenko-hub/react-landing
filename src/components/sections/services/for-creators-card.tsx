import styled from 'styled-components';

import Card from './card';

/* eslint-disable-next-line */
export interface ForCreatorsCardProps {}

const GuyWithPencil = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(50% + 42px);
  transform: translateX(-50%);
`;

export function ForCreatorsCard(props: ForCreatorsCardProps) {
  return (
    <Card
      style={{ padding: '40px 64px 642px 69px', margin: '0 20px 0 0' }}
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
