import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './App';


it('renders without crashing', () => {
  render(
    <App />,
  );
});

describe('ThemePicker', () => {
  it('shows a theme picking dialog when Pick Theme is clicked', () => {
    const { getByText } = render(
      <App />,
    );

    fireEvent.click(getByText(/Pick Theme/i));

    expect(getByText(/Select theme/i).textContent).toBeTruthy();
  });

  it('sets a new theme', async () => {
    const { getByText, getByLabelText, queryByTestId } = render(
      <App />,
    );

    fireEvent.click(getByText(/Pick Theme/i));
    fireEvent.click(getByLabelText(/theme selector/i));
    fireEvent.keyDown(getByLabelText(/theme selector/i), { key: 'Down', code: 40 });
    fireEvent.keyDown(getByLabelText(/theme selector/i), { key: 'Enter', code: 13 });
    fireEvent.click(getByText(/Save/i));

    expect(queryByTestId('container')).toHaveStyle('background: #cfe0fc');
  });
});
