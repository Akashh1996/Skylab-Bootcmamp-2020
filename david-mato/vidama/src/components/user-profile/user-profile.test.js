import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import UserProfile from './UserProfile';
describe('User profile', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('Should render section', () => {
		const props = {
			match: {
				params: { userId: 12 }
			}
		};
		act(() => {
			render(<UserProfile {...props} />, container);
		});
		expect(document.querySelector('.user-profile')).toBeDefined();
	});
});
