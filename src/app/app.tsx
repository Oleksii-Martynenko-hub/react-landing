import styled from 'styled-components';

import CommonContainer from 'src/components/common/common-container';
import About from 'src/components/sections/about';
import Vectors from 'src/components/vectors';
import Header from 'src/components/header/header';

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
        </CommonContainer>
      </main>

      {/* Footer */}
    </StyledApp>
  );
}

export default App;
