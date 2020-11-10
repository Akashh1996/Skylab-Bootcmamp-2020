import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
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

	it('Should Render Header', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});

		expect(document.querySelector('.info-header')).toBeDefined();
	});

	it('Should contain 2 items inside login box', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});
		expect(document.querySelector('.login-box').children.length).toBe(2);
	});
	it('Should have at least two items inside the className', () => {
		act(() => {
			render(
				<BrowserRouter>
					<Header />
				</BrowserRouter>,
				container
			);
		});
		expect(document.querySelector('.input-box').children.length).toBe(2);
	});
});
