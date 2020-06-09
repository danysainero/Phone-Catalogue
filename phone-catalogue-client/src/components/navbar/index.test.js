import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Navbar from './index';

describe('<Navbar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
   
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('Header');

    expect(navbar).toBeInTheDocument();
  });
});