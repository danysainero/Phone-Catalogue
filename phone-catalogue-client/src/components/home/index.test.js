import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import home from './home';

describe('<home />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<home />);
    const home = getByTestId('home');

    expect(home).toBeInTheDocument();
  });
});