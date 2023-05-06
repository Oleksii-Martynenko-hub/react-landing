import styled from 'styled-components';

import CommonContainer from 'src/components/common/common-container';
import About from 'src/components/sections/about/about';
import Vectors from 'src/components/vectors';
import Header from 'src/components/header/header';
import Services from 'src/components/sections/services/services';

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
      </main>

      {/* Footer */}
    </StyledApp>
  );
}

export default App;
