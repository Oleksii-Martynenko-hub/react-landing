import styled from 'styled-components';

import Vectors from './vectors';
import MainContent from './main-content';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 283px 173px;
`;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <Vectors />

      <MainContent />
    </StyledAbout>
  );
}

export default About;
