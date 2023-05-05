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
        <About />
      </main>

      {/* Footer */}
    </StyledApp>
  );
}

export default App;
