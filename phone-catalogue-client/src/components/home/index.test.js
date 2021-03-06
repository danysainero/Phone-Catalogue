import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Home from './index';

describe('<Home />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
   
    const { getByTestId } = render(<Home />);
    const home = getByTestId('Home');

    expect(home).toBeInTheDocument();
  });
});