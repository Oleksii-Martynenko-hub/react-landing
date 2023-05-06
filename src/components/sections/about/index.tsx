import styled from 'styled-components';

import MainContent from './main-content';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 283px 0;
`;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <MainContent />
    </StyledAbout>
  );
}

export default About;
