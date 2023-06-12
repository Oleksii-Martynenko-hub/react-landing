import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledCommonContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 0 173px;
  margin: 0 auto;
  overflow: hidden;

  ${({ theme }) => theme.media.lg} {
    padding: 0 80px;
  }
`;

/* eslint-disable-next-line */
interface CommonContainerProps extends HTMLAttributes<HTMLDivElement> {}

const CommonContainer = (props: CommonContainerProps) => {
  return <StyledCommonContainer>{props.children}</StyledCommonContainer>;
};

export default CommonContainer;
