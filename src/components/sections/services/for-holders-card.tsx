import Title from 'src/components/common/title/title';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ForHoldersCardProps {}

const StyledForHoldersCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.colors.serviceCards};
  padding: 40px 69px 0 64px;
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

const BlueTitle = styled.span`
  color: ${({ theme }) => theme.palette.text.blue};
  border-bottom: 1px solid ${({ theme }) => theme.palette.text.blue};
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 0 30px 0;
`;

const Text = styled.p`
  letter-spacing: 0.33px;
  text-align: center;
  margin: 0 0 -12px 0;
`;

const WaveVector = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const GuyWithCoffee = styled.img`
  position: relative;
  z-index: 1;
  display: block;
  margin: 0 auto;
  padding-left: 182px;
`;

export function ForHoldersCard(props: ForHoldersCardProps) {
  return (
    <StyledForHoldersCard>
      <CardNumber>02</CardNumber>

      <StyledTitle>
        For <BlueTitle>Hodlers</BlueTitle>
      </StyledTitle>

      <Text>
        Holding social tokens allows the individual to gain access to benefits
        including unreleased content, private communities, direct access to
        celebrity, early-access to tickets and more as well as the ability to
        trade with other communities in order to gain access to more creator
        content with early token buyers being the biggest winners as the value
        of the token increases with more buyers.
      </Text>

      <WaveVector
        src="src/assets/images/services/vector_second_card.svg"
        alt="gray wave vector"
      />

      <GuyWithCoffee
        src="src/assets/images/services/gut_with_coffee.png"
        alt="guy holding by hugging tablet and pencil"
      />
    </StyledForHoldersCard>
  );
}

export default ForHoldersCard;
