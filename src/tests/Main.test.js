import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from './utils/test-utils';
import Main from '../components/Main';

test('fetches & receives a user after clicking the fetch user button', async () => {
  renderWithProviders(<Main />);
  expect(screen.getByText(/Test/i)).toBeInTheDocument();
});
