import CommonContainer from 'src/components/common/common-container';
import Title from 'src/components/common/title/title';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ToknersComingProps {}

const StyledToknersComing = styled.div`
  z-index: 2;
  position: relative;
  background: url('src/assets/images/tokners-coming/vector_background.svg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding: 417px 0 300px;
  margin-top: -34px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  max-width: 644px;
  padding: 83px 0 0;
  margin: 0 auto 0 0;
`;

const StyledTitle = styled(Title)`
  letter-spacing: 0.5px;
  margin: 0 0 20px 0;
`;

const Paragraph = styled.p`
  letter-spacing: 0.25px;
`;

const Bold = styled.span`
  font-weight: 500;
  letter-spacing: 0.1px;
`;

const ImagesWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.palette.colors.body};
  border-radius: 25px;
  max-width: 777px;
  padding: 85px 97px 20px;
`;

const Image = styled.img`
  position: relative;
`;

const SmallCloud = styled(Image)``;

const LargeCloud = styled(Image)`
  bottom: 160px;
  right: -28px;
  position: absolute;
`;

const RocketImage = styled(Image)`
  margin: -91px 0 -140px -324px;
`;

export function ToknersComing(props: ToknersComingProps) {
  return (
    <StyledToknersComing>
      <CommonContainer>
        <ContentWrapper>
          <MainContent>
            <StyledTitle>Tokners is coming</StyledTitle>

            <Paragraph style={{ marginBottom: 16 }}>
              <Bold>
                Cryptocurrency adoption is at less than 1% of the global world
                population with some countries and entities actively fighting
                against its mass adoption and the smartest developers and nerds
                holding the fort.
              </Bold>
            </Paragraph>

            <Paragraph style={{ marginBottom: 16 }}>
              Bitcoin was the first, and it has since grown to thousands of
              tokens launched all aiming to fix one problem or the other with
              some quite simply FOMOing the moment. Our goal is to bring mass
              adoption to the cryptocurrency space by dumbing it down. How far
              down? So down that even a celebrity can explain it in simple words
              to their followers and have them download an app, buy into the
              social currency of their favourite person and watch their
              investment as is with other cryptocurrency project.
            </Paragraph>

            <Paragraph style={{ marginBottom: 40 }}>
              We are trying to do to this space what investment apps did for the
              "nonexistent retail investors". We are gamefying digital currency,
              bringing in popular faces instead of hard to understand projects
              to make it the norm and inadvertently being the "gateway drug" for
              a lot of people to finally give this space a real look.
            </Paragraph>

            <Paragraph style={{ marginBottom: 16 }}>
              <Bold>
                A new digital economy is coming. People would be just as
                powerful as countries and creators would be paid beyond the
                peanuts that conventional social media platforms can offer.
              </Bold>
            </Paragraph>

            <Paragraph style={{ marginBottom: 16 }}>
              There would be new markets and advertisers with little to offer
              would not find home there. Like Kanye said, "Personalities would
              become the new currency, and services would be built on top of
              them". Well, Kanye didn't exactly say that, but it sounds like
              something we hope he would say.
            </Paragraph>

            <Paragraph>
              Currency is digital, it has been that way for a while now, but
              this time there would be no dead presidents on the money, there
              would people like you on the money, and you would own it because
              it would make the most sense in the world.
            </Paragraph>
          </MainContent>

          <ImagesWrapper>
            <SmallCloud
              src="src/assets/images/tokners-coming/small_cloud.png"
              alt="small cloud image"
            />
            <RocketImage
              src="src/assets/images/tokners-coming/rocket.png"
              alt="red rocket image"
            />
            <LargeCloud
              src="src/assets/images/tokners-coming/large_cloud.png"
              alt="large cloud image"
            />
          </ImagesWrapper>
        </ContentWrapper>
      </CommonContainer>
    </StyledToknersComing>
  );
}

export default ToknersComing;
