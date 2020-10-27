import { render, screen } from '@testing-library/react';
import HeroesItem from './HeroesItem';

test('renders Header', () => {
	render(<HeroesItem />);
	const linkElement = screen.getByText(/Narco/i);
	expect(linkElement).toBeInTheDocument();
});
