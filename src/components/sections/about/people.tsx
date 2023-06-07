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
`;

const SecondGuy = styled.img`
  position: absolute;
  top: -163px;
  right: calc(33% - 510px);
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
