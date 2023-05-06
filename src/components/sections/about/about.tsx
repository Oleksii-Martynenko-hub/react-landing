import styled from 'styled-components';

import MainContent from './main-content';
import People from './people';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 283px 0 290px;
`;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <MainContent />

      <People />
    </StyledAbout>
  );
}

export default About;
