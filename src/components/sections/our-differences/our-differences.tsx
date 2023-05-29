import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OurDifferencesProps {}

const StyledOurDifferences = styled.div`
  color: pink;
`;

export function OurDifferences(props: OurDifferencesProps) {
  return (
    <StyledOurDifferences>
      <h1>Welcome to OurDifferences!</h1>
    </StyledOurDifferences>
  );
}

export default OurDifferences;
