import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import Home from './index';

describe('Home', () => {
  afterEach(cleanup);

  it('it should mount', () => {
    const component = shallow(<Home debug />);
    expect(component).toMatchSnapshot();
    
    /* 
    const { getByTestId } = render(Home);
    const home = getByTestId('home');

    expect(home).toBeInTheDocument(); */
  });
});