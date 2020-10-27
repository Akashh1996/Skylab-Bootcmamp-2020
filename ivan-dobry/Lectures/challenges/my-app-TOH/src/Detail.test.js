import { render, screen } from '@testing-library/react';
import Detail from './Detail';

test('renders name detail', () => {
	render(<Detail />);
	const linkElement = screen.getByText(/Abomination Details/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders id', () => {
	render(<Detail />);
	const linkElement = screen.getByText(/id: 4/i);
	expect(linkElement).toBeInTheDocument();
});
