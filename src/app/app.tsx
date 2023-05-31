import styled from 'styled-components';

import CommonContainer from 'src/components/common/common-container';
import Vectors from 'src/components/vectors';
import Header from 'src/components/header/header';
import About from 'src/components/sections/about/about';
import Services from 'src/components/sections/services/services';
import OurDifferences from 'src/components/sections/our-differences/our-differences';
import Timeline from 'src/components/sections/timeline/timeline';
import ToknersComing from 'src/components/sections/tokners-coming/tokners-coming';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Header />

      <main>
        <Vectors />

        <CommonContainer>
          <About />

          <Services />
        </CommonContainer>

        <OurDifferences />

        <CommonContainer>
          <Timeline />
        </CommonContainer>

        <ToknersComing />
      </main>

      {/* Footer */}
    </StyledApp>
  );
}

export default App;
