import Dashboard from './Dashboard';
import { render, screen } from '@testing-library/react';
import { loadHeroes } from '../actions/hero-actions';
import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';
import heroStore from '../stores/hero-store';

jest.mock('axios');
jest.mock('../dispatcher/dispatcher');

describe('Dashboard', () => {
	test('should render Dashboard with no heroes', () => {
		render(<Dashboard />);

		const text = screen.getByText(/Dashboard/);
		expect(text).toBeInTheDocument();
	});

	test('should render with hero Narco', async () => {
		axios.mockImplementationOnce(() =>
			Promise.resolve({ data: [{ id: 12, name: 'Narco' }] })
		);

		await loadHeroes();
		render(<Dashboard />);

		const text = screen.getByText(/Narco/);
		expect(text).toBeInTheDocument();
	});
});
