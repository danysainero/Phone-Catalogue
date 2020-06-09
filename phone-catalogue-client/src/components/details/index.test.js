import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

describe('<Detail />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    expect('').toBe('');
  });
});