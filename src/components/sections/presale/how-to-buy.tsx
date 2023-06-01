import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HowToBuyProps {}

const StyledHowToBuy = styled.div`
  color: pink;
`;

export function HowToBuy(props: HowToBuyProps) {
  return (
    <StyledHowToBuy>
      <h1>Welcome to HowToBuy!</h1>
    </StyledHowToBuy>
  );
}

export default HowToBuy;
