import styled from 'styled-components';
import Vectors from './vectors';

/* eslint-disable-next-line */
export interface AboutProps {}

const StyledAbout = styled.div`
  color: pink;
`;

export function About(props: AboutProps) {
  return (
    <StyledAbout>
      <h1>Welcome to About!</h1>
      <Vectors />
    </StyledAbout>
  );
}

export default About;
