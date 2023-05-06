import styled from 'styled-components';
import ForCreatorsCard from './for-creators-card';
import ForHoldersCard from './for-holders-card';

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
