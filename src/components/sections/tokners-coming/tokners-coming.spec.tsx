import { render } from '@testing-library/react';

import ToknersComing from './tokners-coming';

describe('ToknersComing', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToknersComing />);
    expect(baseElement).toBeTruthy();
  });
});
