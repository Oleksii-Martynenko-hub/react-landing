import styled from 'styled-components';

const StyledVectors = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const StyledVector = styled.img`
  &:not(:first-child) {
    position: absolute;
    top: 0;
    right: 0;
  }

  ${({ theme }) => theme.media.lg} {
    transform: scale(0.7);
    transform-origin: 100% 0%;
  }
`;

const StyledFirstVector = styled(StyledVector)``;
const StyledSecondVector = styled(StyledVector)``;
const StyledThirdVector = styled(StyledVector)``;
const StyledFourthVector = styled(StyledVector)``;

export function Vectors() {
  return (
    <StyledVectors>
      <StyledFirstVector
        src="src/assets/images/about/vector_1.svg"
        alt="vector with gray background"
      />
      <StyledSecondVector
        src="src/assets/images/about/vector_2.svg"
        alt="vector with red to yellow gradient in background"
      />
      <StyledThirdVector
        src="src/assets/images/about/vector_3.svg"
        alt="vector with blue gradient in background"
      />
      <StyledFourthVector
        src="src/assets/images/about/vector_4.svg"
        alt="vector with green gradient in background"
      />
    </StyledVectors>
  );
}

export default Vectors;
