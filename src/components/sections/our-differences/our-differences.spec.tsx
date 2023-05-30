import { render } from '@testing-library/react';

import OurDifferences from './our-differences';

describe('OurDifferences', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OurDifferences />);
    expect(baseElement).toBeTruthy();
  });
});
