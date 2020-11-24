import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Footer from './Footer';
import { act } from 'react-dom/test-utils';
import { BrowserRouter} from 'react-router-dom';

describe('Footer', () => {
	let container;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);

		act(() => {
			render(
				<BrowserRouter>
					<Footer />
				</BrowserRouter>,
				container
			);
		});
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	it('Should have a footer', () => {
		
		expect(container.getElementsByClassName('footer')[0]).toBeDefined();
	});

	it('Should have an ancor', () => {
		
		expect(container.querySelector('vidama-logo-link')).toBeDefined();
	});

	it('Should have an img logo', () => {
	
		expect(container.querySelector('vidama-logo')).toBeDefined();
	});

	it('Should have div with contact info', () => {

		expect(container.querySelector('contact-info')).toBeDefined();
	});

	it('Should print all text at the page', () => {

		expect(container.textContent).toBe(
			'About usContactSitemapPrivacy policyCopyright © 2020 - Vidama Spain SLU - Skylab Coders Academy'
		);
	});

	it('Should have one contact info', () => {

		expect(
			container.querySelector('[data-test-id="contact-link"]')
		).toHaveTextContent('About us');
	});

	it('Should have Link', () => {

		expect(
			container.querySelector('[data-test-id="contact-link"]')
		).toHaveTextContent('About us');
	});
});
