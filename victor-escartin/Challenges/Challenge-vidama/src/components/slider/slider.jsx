import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bookStore from '../../stores/book-store';
import { loadBooks } from '../../actions/action-creator';
import './slider.css';

function Slider() {
	const [books, setBooks] = useState();

	function onChange(variable, setVariable, getVariable) {
		variable = getVariable();
		setVariable(variable);
	}

	useEffect(() => {
		bookStore.addEventListener(() => {
			onChange(books, setBooks, bookStore.getBooks);
		});

		if (!books) {
			loadBooks();
		}

		return () =>
			bookStore.removeEventListener(() => {
				onChange(books, setBooks, bookStore.getBooks);
			});
	}, [books]);

	let translateBooks = 0;

	const translateBooksLeft = () => {
		translateBooks += 250;
		translateBooks = +translateBooks.toFixed(4);
		if (!translateBooks) {
			document.getElementsByClassName(
				'left-arrow-container'
			)[0].style.visibility = 'hidden';
		}
		document.getElementsByClassName(
			'right-arrow-container'
		)[0].style.visibility = 'visible';
		document.getElementsByClassName(
			'scrollable-list'
		)[0].style.transform = `translateX(${translateBooks}px)`;
	};

	const translateBooksRight = () => {
		translateBooks -= 250;
		let topRightTranslation = -4000;

		if (window.innerWidth < 440) {
			topRightTranslation = -5000;
		} else if (window.innerWidth < 640) {
			topRightTranslation = -4750;
		} else if (window.innerWidth < 840) {
			topRightTranslation = -4500;
		} else if (window.innerWidth < 1040) {
			topRightTranslation = -4250;
		}

		if (translateBooks === topRightTranslation) {
			document.getElementsByClassName(
				'right-arrow-container'
			)[0].style.visibility = 'hidden';
		}

		document.getElementsByClassName(
			'left-arrow-container'
		)[0].style.visibility = 'visible';
		document.getElementsByClassName(
			'scrollable-list'
		)[0].style.transform = `translateX(${translateBooks}px)`;
	};

	return (
		<section className="recommendations">
			<h2 className="comment-section__title-container">
				<span className="comment-section__title recommendations-title">
					Recommendations
				</span>
			</h2>
			<div className="recommended-books">
				<div className="arrow-container left-arrow-container">
					<span
						className="material-icons arrow-left"
						onClick={() => translateBooksLeft()}
					>
						{' '}
						navigate_before{' '}
					</span>
				</div>
				<div className="arrow-container right-arrow-container">
					<span
						className="material-icons arrow-right"
						onClick={() => translateBooksRight()}
					>
						{' '}
						navigate_next{' '}
					</span>
				</div>
				<div className="scrollable-list">
					<div className="scrollable-list__row">
						{books &&
							books.items.slice(0, 20).map((item) => (
								<Link className="book-link" to={`/detail/${item.id}`}>
									<div className="item-carousel">
										<img
											className="item-image"
											src={item.volumeInfo.imageLinks.thumbnail}
											height="150px"
											width="100px"
											alt=""
										/>
										<div className="item-title">{item.volumeInfo.title}</div>
										<div className="item-price">
											{item.saleInfo.retailPrice.amount} €
										</div>
									</div>
									<div className="book-hover-filter"></div>
								</Link>
							))}
					</div>
					<div className="scrollable-list__row">
						{books &&
							books.items.slice(20, 40).map((item) => (
								<Link className="book-link" to={`/detail/${item.id}`}>
									<div className="item-carousel">
										<img
											className="item-image"
											src={item.volumeInfo.imageLinks.thumbnail}
											height="150px"
											width="100px"
											alt=""
										/>
										<div className="item-title">{item.volumeInfo.title}</div>
										<div className="item-price">
											{item.saleInfo.retailPrice.amount} €
										</div>
									</div>
									<div className="book-hover-filter"></div>
								</Link>
							))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Slider;
