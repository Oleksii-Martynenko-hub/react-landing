import { ReactNode } from 'react';
import styled from 'styled-components';

import Title from 'src/components/common/title/title';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlightedColor: 'green' | 'blue';
  carNumber: string;
  cardTitle: ReactNode;
  cardText: string;
  cardImage: ReactNode;
}

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  background-image: ${({ theme }) => theme.palette.colors.serviceCardsGradient};
  max-width: 777px;
  border-radius: 25px;
  flex: 1 1 calc(50% - 10px);
`;

const CardNumber = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  opacity: 0.3;
  margin: 0 0 22px 0;
`;

const StyledTitle = styled(Title)<{ highlightedColor: 'green' | 'blue' }>`
  text-align: center;
  margin: 0 0 30px 0;

  & .title--highlighted {
    color: ${({ theme, highlightedColor }) =>
      theme.palette.text[highlightedColor]};
    border-bottom: 1px solid
      ${({ theme, highlightedColor }) => theme.palette.text[highlightedColor]};
  }
`;

const Text = styled.p`
  letter-spacing: 0.33px;
  text-align: center;
`;

export function Card({
  highlightedColor,
  carNumber,
  cardTitle,
  cardText,
  cardImage,
  ...props
}: CardProps) {
  return (
    <StyledCard {...props}>
      <CardNumber>{carNumber}</CardNumber>

      <StyledTitle highlightedColor={highlightedColor}>{cardTitle}</StyledTitle>

      <Text>{cardText}</Text>

      {cardImage}
    </StyledCard>
  );
}

export default Card;
