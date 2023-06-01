import styled from 'styled-components';
import { Phase } from './presale';

/* eslint-disable-next-line */
export interface PhaseCardProps {
  index: number;
  phase: Phase;
}

const StyledPhaseCard = styled.div`
  background: ${({ theme }) => theme.palette.colors.lightBtn};
  max-width: 511px;
  padding: 57px 90px;
  border-radius: 25px;
`;

const Index = styled.p`
  font-weight: 700;
  font-size: 288px;
  line-height: 288px;
  opacity: 0.08;
  color: ${({ theme }) => theme.palette.colors.lightBtn};
  text-shadow: 0 0 0 1px rgb(25, 27, 33, 1);
`;

export function PhaseCard({ index, phase }: PhaseCardProps) {
  const { title, startDate, endDate, token, equivalent, soft_cap, hard_cap } =
    phase;

  return (
    <StyledPhaseCard>
      <Index>{index.toString().padStart(2, '0')}</Index>
    </StyledPhaseCard>
  );
}

export default PhaseCard;
