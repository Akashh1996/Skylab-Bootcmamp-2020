import { faItalic } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import BookInfo from './BookInfo';
import bookStore from '../../stores/book-store';

describe('BookInfo', () => {
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

	it('should Render Book Info', () => {
		act(() => {
			render(<BookInfo />, container);
		});
		expect(document.querySelector('.book-info')).toBeDefined();
	});

	it('should change color onClick', () => {
		const bookMock = {
			volumeInfo: {
				title: 'something',
				authors: ['someAuthor'],
				imageLinks: {
					thumbnail: 'ssadasd'
				},
				categories: ['asdasd/8asd'],
				description: 'desc'
			},
			saleInfo: {
				listPrice: {
					amount: 10
				}
			}
		};
		act(() => {
			bookStore.setBook(bookMock);
			render(<BookInfo />, container);

			let spanElement = document.querySelector('.favorite');
			spanElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));

			expect(spanElement.style.color).toBe('rgb(221, 103, 99)');
			spanElement.dispatchEvent(new MouseEvent('click', { bubbles: true }));
			expect(spanElement.style.color).toBe('white');
		});
	});
});