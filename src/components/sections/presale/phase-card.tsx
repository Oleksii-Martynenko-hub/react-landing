import styled from 'styled-components';

import { Phase } from './presale';
import Title from 'src/components/common/title/title';

export interface PhaseCardProps {
  index: number;
  phase: Phase;
}

const StyledPhaseCard = styled.div`
  background: ${({ theme }) => theme.palette.colors.lightBtn};
  flex: auto;
  max-width: 511px;
  padding: 57px 90px 179px 91px;
  border-radius: 25px;
`;

const Index = styled.p`
  font-weight: 700;
  font-size: 292px;
  line-height: 222px;
  opacity: 0.08;
  color: ${({ theme }) => theme.palette.colors.lightBtn};
  text-shadow: 1px 0 ${({ theme }) => theme.palette.text.primary},
    0 1px ${({ theme }) => theme.palette.text.primary},
    -1px 0 ${({ theme }) => theme.palette.text.primary},
    0 -1px ${({ theme }) => theme.palette.text.primary};
`;

const CardTitle = styled(Title)`
  text-align: center;
  letter-spacing: 0.6px;
  margin: -112px 0 5px 0;
`;

const Date = styled.p`
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.3px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.8;
  margin: 0 0 70px 0;
`;

const Equivalent = styled.p`
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.3px;
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.8;
  margin: 0 0 20px 0;
`;

const Cap = styled.p`
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.3px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.8;

  &:not(:last-child) {
    margin: 0 0 10px 0;
  }
`;

const Strong = styled.span`
  font-weight: 500;
`;

export function PhaseCard({ index, phase }: PhaseCardProps) {
  const { title, startDate, endDate, token, equivalent, soft_cap, hard_cap } =
    phase;

  return (
    <StyledPhaseCard style={{ marginTop: index === 2 ? '60px' : '0' }}>
      <Index>{index.toString().padStart(2, '0')}</Index>

      <CardTitle size="small">{title}</CardTitle>

      <Date>{`${startDate} - ${endDate}`}</Date>

      <Equivalent>
        {`${equivalent.split('=')[0]} ${token} = ${
          equivalent.split('=')[1]
        } Tokners`}
      </Equivalent>

      <Cap>
        Soft cap:{' '}
        <Strong>
          {soft_cap} {token}
        </Strong>
      </Cap>
      <Cap>
        Hard cap:{' '}
        <Strong>
          {hard_cap} {token}
        </Strong>
      </Cap>
    </StyledPhaseCard>
  );
}

export default PhaseCard;
