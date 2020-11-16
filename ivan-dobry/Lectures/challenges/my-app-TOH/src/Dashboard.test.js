import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders top heroes title', () => {
	render(<Dashboard />);
	const linkElement = screen.getByText(/Top Heroes/i);
	expect(linkElement).toBeInTheDocument();
});
