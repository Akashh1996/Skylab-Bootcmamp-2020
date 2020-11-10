import React from 'react';
import CryptoListTableInfo from '../CryptoListTableInfo';
import CryptoList from '../CryptoList';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

describe('Crypto List component', () => {
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
			render(
				<CryptoList>
					<CryptoListTableInfo />
				</CryptoList>,
				container
			);
		});
		//assert
		expect(container).toBeInTheDocument();
	});
	test('tr element should be defined', () => {
		//arrange
		const currentTableData = {
			id: 'bitcoin',
			rank: 1,
			name: 'Bitcoin',
			symbol: 'BTC',
			image: 'https://i.blogs.es/b5ae0b/1_q26gw-knzoxuqzkrr04t-g/840_560.png',
			currentPrice: '13,333.00€',
			market24h: 0.25,
			sparkline: [],
			circulatingSupply: '254,255,269.256'
		};
		//act
		act(() => {
			render(
				<CryptoList>
					<CryptoListTableInfo data={currentTableData} />
				</CryptoList>,
				container
			);
		});
		//assert
		expect(container.querySelector('tr')).toBeDefined();
	});
});
