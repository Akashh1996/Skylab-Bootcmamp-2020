import React from 'react';
import CryptoList from '../CryptoList';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

xdescribe('Crypto List component', () => {
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
	test('should be defined at the document', () => {
		//act
		act(() => {
			render(<CryptoList />, container);
		});
		//assert
		expect(container).toBeInTheDocument();
	});
});

