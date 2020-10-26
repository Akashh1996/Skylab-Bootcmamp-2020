import { render, screen } from '@testing-library/react';
import TourOfHeroes from './ToH';

test('renders Heroes', () => {
	render(<TourOfHeroes />);
	const linkElement = screen.getByText(/Heroes/i);
	expect(linkElement).toBeInTheDocument();
});
