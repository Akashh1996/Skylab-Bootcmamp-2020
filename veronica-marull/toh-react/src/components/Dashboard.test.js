import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import { loadHeroes } from '../actions/hero-actions';

jest.mock('axios');

describe.skip('Dashboard', () => {
  beforeEach(() => {
    axios.mockClear();
  });
  test('should render no heroes', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    render(<Dashboard />);

    // eslint-disable-next-line no-console
    expect(screen.getByText('There are no heroes!')).toBeDefined();
  });

  test('should render one hero', async () => {
    axios.mockReturnValueOnce(Promise.resolve({ data: [{ id: 12, name: 'Narco' }] }));

    await act(async () => {
      await loadHeroes();
      // eslint-disable-next-line react/jsx-filename-extension
      render(<BrowserRouter><Dashboard /></BrowserRouter>);
    });

    // eslint-disable-next-line no-console
    expect(screen.getByText('There are no heroes')).toBeDefined();
  });
});
