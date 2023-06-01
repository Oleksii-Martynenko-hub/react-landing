import CommonContainer from 'src/components/common/common-container';
import Title from 'src/components/common/title/title';
import styled from 'styled-components';
import PhaseCard from './phase-card';

/* eslint-disable-next-line */
export interface PresaleProps {}

export type Phase = {
  title: string;
  startDate: string;
  endDate: string;
  token: string;
  equivalent: string;
  soft_cap: string;
  hard_cap: string;
};

const StyledPresale = styled.div`
  background: url('src/assets/images/presale-details/vector_background.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 417px 0 300px;
  margin-top: -320px;
`;

const ContentWrapper = styled.div``;

const StyledTitle = styled(Title)`
  text-align: center;
  margin: 0 0 40px 0;
`;

const PhaseList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export function Presale(props: PresaleProps) {
  const phases: Phase[] = [
    {
      title: 'Phase One',
      startDate: '0/04/2021',
      endDate: '16/04/2021',
      token: 'BNB',
      equivalent: '1=100000',
      soft_cap: '5000',
      hard_cap: '10000',
    },
    {
      title: 'Phase Two',
      startDate: '0/04/2021',
      endDate: '16/04/2021',
      token: 'BNB',
      equivalent: '1=100000',
      soft_cap: '5000',
      hard_cap: '10000',
    },
    {
      title: 'Phase Three',
      startDate: '0/04/2021',
      endDate: '16/04/2021',
      token: 'BNB',
      equivalent: '1=100000',
      soft_cap: '5000',
      hard_cap: '10000',
    },
  ];

  return (
    <StyledPresale>
      <CommonContainer>
        <ContentWrapper>
          <StyledTitle size="large" color="light">
            Presale Details
          </StyledTitle>

          <PhaseList>
            {phases.map((phase, i) => (
              <PhaseCard key={phase.title + i} index={i + 1} phase={phase} />
            ))}
          </PhaseList>
        </ContentWrapper>
      </CommonContainer>
    </StyledPresale>
  );
}

export default Presale;
