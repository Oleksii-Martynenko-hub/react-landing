import styled from 'styled-components';

import ForHoldersCard from './for-holders-card';
import ForCreatorsCard from './for-creators-card';

/* eslint-disable-next-line */
export interface ServicesProps {}

const StyledServices = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Services(props: ServicesProps) {
  return (
    <StyledServices>
      <ForCreatorsCard />

      <ForHoldersCard />
    </StyledServices>
  );
}

export default Services;
