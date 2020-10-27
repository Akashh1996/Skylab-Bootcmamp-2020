import { render, screen } from '@testing-library/react';
import HeroesList from './HeroesList';

test('renders Heroes', () => {
	render(<HeroesList />);
	const linkElement = screen.getByText(/Narco/i);
	expect(linkElement).toBeInTheDocument();
});
