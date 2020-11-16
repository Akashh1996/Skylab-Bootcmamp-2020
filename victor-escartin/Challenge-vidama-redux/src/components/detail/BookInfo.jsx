import React, { useEffect, useState } from 'react';
import { loadBook, loadBooks } from '../../actions/action-creator';
import bookStore from '../../stores/book-store';
import './bookInfo.css';

function BookInfo({ bookId }) {
	const [book, setBook] = useState();
	const [books, setBooks] = useState();

	function onChange(variable, setVariable, getVariable) {
		variable = getVariable();
		setVariable(variable);
	}

	useEffect(() => {
		bookStore.addEventListener(() =>
			onChange(books, setBooks, bookStore.getBooks)
		);

		if (!books) {
			loadBooks();
		}

		return () =>
			bookStore.removeEventListener(() =>
				onChange(books, setBooks, bookStore.getBooks)
			);
	}, [books]);

	useEffect(() => {
		bookStore.addEventListener(() =>
			onChange(book, setBook, bookStore.getBook)
		);

		if (!book) {
			loadBook(bookId);
		}

		return () =>
			bookStore.removeEventListener(() =>
				onChange(book, setBook, bookStore.getBook)
			);
	}, [book, bookId]);

	const determineScore = (starNum) => {
		document.getElementsByClassName(
			'numerical-score'
		)[0].innerHTML = `${starNum}/5`;

		for (let i = 0; i < 5; i++) {
			if (i < starNum) {
				document.getElementsByClassName(`star${i}`)[0].style.color =
					'rgb(255, 255, 65)';
			} else {
				document.getElementsByClassName(`star${i}`)[0].style.color = 'white';
			}
		}
	};

	const stars = [];

	for (let i = 0; i < 5; i++) {
		stars.push(
			<span
				class={`material-icons score star${i}`}
				onClick={() => determineScore(i + 1)}
			>
				star_rate
			</span>
		);
	}

	return (
		<>
			{book && (
				<article className="book-info">
					<h1 className="book-title">{book.volumeInfo.title}</h1>
					<div className="book-info__wrapper">
						<div className="book-author-and-cover">
							<h3 className="book-author">{book.volumeInfo.authors[0]}</h3>
							<div className="book-cover">
								<img
									className="book-cover__photo"
									src={book.volumeInfo.imageLinks.thumbnail}
									alt="Book cover"
								/>
								<span
									className="material-icons favorite"
									onClick={(event) => {
										if (event.target.style.color === 'rgb(221, 103, 99)') {
											event.target.style.color = 'white';
										} else {
											event.target.style.color = 'rgb(221, 103, 99)';
										}
									}}
								>
									favorite
								</span>
								<div className="book-cover__background"></div>
							</div>
						</div>
						<div className="book-general-info__left-side">
							<div className="score-container">
								{stars}
								<span className="numerical-score">0/5</span>
							</div>
							<button className="category-button">
								{book.volumeInfo.categories[0].split(' / ')[1]?.includes(' ')
									? book.volumeInfo.categories[0].split(' / ')[1].split(' ')[0]
									: book.volumeInfo.categories[0].split(' / ')[1]}
							</button>
							<div className="synopsis">
								<h3 className="synopsis__title">Synopsis</h3>
								<p
									className="synopsis__description"
									dangerouslySetInnerHTML={{
										__html: book.volumeInfo.description
									}}
								></p>
							</div>
						</div>
						<div className="vertical-line-container">
							<div className="vertical-line"></div>
						</div>
						<div className="book-general-info__right-side">
							<p className="price">{book.saleInfo.listPrice.amount} €</p>
							<button className="add-to-cart-button">
								<span class="material-icons cart">shopping_cart</span>
								Add to cart
							</button>
						</div>
					</div>
				</article>
			)}
		</>
	);
}
export default BookInfo;
