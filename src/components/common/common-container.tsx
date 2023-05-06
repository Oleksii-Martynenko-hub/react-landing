import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledCommonContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  padding: 0 173px;
`;

/* eslint-disable-next-line */
interface CommonContainerProps extends HTMLAttributes<HTMLDivElement> {}

const CommonContainer = (props: CommonContainerProps) => {
  return <StyledCommonContainer>{props.children}</StyledCommonContainer>;
};

export default CommonContainer;
