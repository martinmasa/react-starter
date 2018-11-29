import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

afterEach(() => {
  cleanup();
});

describe('<App />', () => {
  test('should render title + intro', () => {
    const { getByTestId, queryByTestId } = render(<App />);
    expect(getByTestId('page-title').textContent).toBe('React Starter');
    expect(queryByTestId('page-intro').textContent).toContain('Hello');
  });
});
