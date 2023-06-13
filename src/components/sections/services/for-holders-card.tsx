import styled from 'styled-components';

import Card from './card';

/* eslint-disable-next-line */
export interface ForHoldersCardProps {}

const StyledForHoldersCard = styled(Card)`
  padding: 40px 69px 594px 64px;

  ${({ theme }) => theme.media.lg} {
    padding: 36px 40px 410px;
  }
`;

const GuyWithCoffee = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(50% + 122px);
  transform: translateX(-50%);
  margin: -12px 0 0 0;

  ${({ theme }) => theme.media.lg} {
    left: calc(50% + 92px);
    transform: translateX(-50%) scale(0.7);
    transform-origin: bottom;
  }
`;

export function ForHoldersCard(props: ForHoldersCardProps) {
  return (
    <StyledForHoldersCard
      highlightedColor="blue"
      carNumber="02"
      cardTitle={
        <>
          For <span className="title--highlighted">Hodlers</span>
        </>
      }
      cardText="Holding social tokens allows the individual to gain access to benefits
        including unreleased content, private communities, direct access to
        celebrity, early-access to tickets and more as well as the ability to
        trade with other communities in order to gain access to more creator
        content with early token buyers being the biggest winners as the value
        of the token increases with more buyers."
      cardImage={
        <GuyWithCoffee
          src="src/assets/images/services/gut_with_coffee.png"
          alt="guy holding by hugging tablet and pencil"
        />
      }
    />
  );
}

export default ForHoldersCard;
