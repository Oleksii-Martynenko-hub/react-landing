import styled from 'styled-components';

const StyledPeople = styled.div`
  position: relative;
  padding: 0 0;
  flex: 1 1 auto;
`;

const FirstGuy = styled.img`
  position: absolute;
  top: -164px;
  right: calc(33% - 135px);
  z-index: 1;

  ${({ theme }) => theme.media.lg} {
    transform: scale(0.7);
    right: calc(33% - 170px);
  }
`;

const SecondGuy = styled.img`
  position: absolute;
  top: -163px;
  right: calc(33% - 510px);

  ${({ theme }) => theme.media.lg} {
    transform: scale(0.7);
    right: calc(33% - 475px);
  }
`;

export function People() {
  return (
    <StyledPeople>
      <FirstGuy src="src/assets/images/about/guy_white_t-shirt.png" />
      <SecondGuy src="src/assets/images/about/guy_purple_t-shirt.png" />
    </StyledPeople>
  );
}

export default People;
