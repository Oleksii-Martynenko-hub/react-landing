import styled from 'styled-components';

import Title from 'src/components/common/title/title';

/* eslint-disable-next-line */
export interface HowToBuyProps {}

const StyledHowToBuy = styled.div``;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 0 30px 0;
`;

const StepList = styled.ul`
  text-align: center;
  margin: 0 auto;
`;

const StepItem = styled.li`
  p {
    color: ${({ theme }) => theme.palette.text.light};
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.4px;
  }

  &:not(:last-child) {
    margin: 0 0 8px 0;

    &::after {
      content: '';
      display: block;
      margin: 12px auto 0px;
      width: 24px;
      aspect-ratio: 1;
      background: url('src/assets/images/presale-details/down_arrow_icon.svg');
    }
  }
`;

export function HowToBuy(props: HowToBuyProps) {
  const stepsHowToBuy = [
    'First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.',
    'Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet',
    'Then after you will received your $Tokners to your address within 24hours. ',
  ];

  return (
    <StyledHowToBuy>
      <StyledTitle color="light">How to buy</StyledTitle>

      <StepList>
        {stepsHowToBuy.map((step, index) => (
          <StepItem key={index}>
            {' '}
            <p>{step}</p>
          </StepItem>
        ))}
      </StepList>
    </StyledHowToBuy>
  );
}

export default HowToBuy;
