import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header', () => {
	render(<Header />);
	const linkElement = screen.getByText(/Dashboard/i);
	expect(linkElement).toBeInTheDocument();
});
