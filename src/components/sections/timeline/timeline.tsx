import styled from 'styled-components';

import Title from 'src/components/common/title/title';

/* eslint-disable-next-line */
export interface TimelineProps {}

const StyledTimeline = styled.ul`
  position: relative;
  display: flex;
  padding: 405px 0 0;
`;

const AirplaneImage = styled.img`
  position: absolute;
  top: 301px;
  right: -133px;
`;

const Quarter = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.green};
`;

const StyledYear = styled(Title)`
  margin: -2px 0 13px;
`;

const DashedTimeline = styled.div`
  position: relative;
  width: calc(100% + 36px + 45px);
  height: 55px;
  margin: 0 0 54px 4px;
  border-bottom: 2px dashed gray;
  border-left: 2px dashed gray;
  border-bottom-left-radius: 55px;

  &::before {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.text.green};
    position: absolute;
    top: -4px;
    left: -5px;
  }
`;

const EventList = styled.ul`
  & > li {
    display: flex;
    margin: 0 0 14px 0;

    .number {
      font-weight: 700;
      font-size: 12px;
      line-height: 21px;
      color: ${({ theme }) => theme.palette.text.blue};
      margin: 0 21px 0 0;
    }

    .text {
      font-size: 18px;
      line-height: 21px;
    }
  }
`;

const TimelineItem = styled.li`
  position: relative;
  max-width: 359px;
  width: calc((100% - 120px) / 4);

  &:not(:last-child) {
    margin: 0 40px 0 0;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 38px;
      left: calc((100% + 40px) / 2 + 30px);
      width: 24px;
      aspect-ratio: 1;
      background: url('src/assets/images/timeline/right_arrow_icon.svg');
    }
  }

  &:last-child {
    ${DashedTimeline} {
      width: 76px;
    }
  }
`;

export function Timeline(props: TimelineProps) {
  const timelineItems = [
    {
      quarter: 'Q1',
      year: '2021',
      events: ['Team set-up', 'Launch of informational website'],
    },
    {
      quarter: 'Q2',
      year: '2021',
      events: [
        'Presale and exchange listings',
        'Blockchain development and launch',
        'Launch of our MVP',
        'Influencer agency partnerships',
        'Marketing and promotion',
      ],
    },
    {
      quarter: 'Q3',
      year: '2021',
      events: [
        'Celebrity, Creator and Influencer partnerships',
        'Expansion of creator communities on our platform',
        'More Marketing and promotion',
      ],
    },
    {
      quarter: 'Q4',
      year: '2021',
      events: [
        'Mainstream partnerships',
        '500 active creator communities',
        '2Million active community members',
        'More Marketing and promotion',
      ],
    },
  ];

  return (
    <StyledTimeline>
      <AirplaneImage
        src="src/assets/images/timeline/paper_airplane.png"
        alt="paper airplane"
      />

      {timelineItems.map(({ quarter, year, events }) => (
        <TimelineItem key={quarter + year}>
          <Quarter>{quarter}</Quarter>

          <StyledYear>{year}</StyledYear>

          <DashedTimeline />
          <EventList>
            {events.map((event, i) => (
              <li key={event}>
                <span className="number">
                  {(i + 1).toString().padStart(2, '0')}
                </span>
                <span className="text">{event}</span>
              </li>
            ))}
          </EventList>
        </TimelineItem>
      ))}
    </StyledTimeline>
  );
}

export default Timeline;
