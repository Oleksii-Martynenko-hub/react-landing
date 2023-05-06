import CommonContainer from 'src/components/common/common-container';
import About from 'src/components/sections/about';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* Header */}

      <main>
        <CommonContainer>
          <About />
        </CommonContainer>
      </main>

      {/* Footer */}
    </StyledApp>
  );
}

export default App;
