import styled from 'styled-components';
import ForCreatorsCard from './for-creators-card';

/* eslint-disable-next-line */
export interface ServicesProps {}

const StyledServices = styled.div``;

export function Services(props: ServicesProps) {
  return (
    <StyledServices>
      <ForCreatorsCard />
    </StyledServices>
  );
}

export default Services;
