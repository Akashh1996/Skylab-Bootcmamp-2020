import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bookStore from '../../stores/book-store';
import { loadBooks, loadUsers } from '../../actions/action-creator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
	const [bookSearched, setbookSearched] = useState('');
	const [books, setBooks] = useState(bookStore.getBooks());
	const [users, setUsers] = useState();
	const [login, setLogin] = useState();
	const [password, setPassword] = useState();

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

	function handleChange({ target: { value } }, setValue) {
		setValue(value);
	}

	useEffect(() => {
		function searchBooks(event) {
			if (event.key === 'Enter') {
				let bookFound = books.items.find(
					(book) =>
						bookSearched.toLowerCase().trim() ===
						book.volumeInfo.title.toLowerCase()
				);
				if (bookFound) {
					document.location.href = `${window.location.origin}/detail/${bookFound.id}`;
				}
			}
		}
		if (books) {
			document
				.getElementById('search-bar-input2')
				.addEventListener('keydown', (event) => searchBooks(event));
		}
		return document
			.getElementById('search-bar-input2')
			.removeEventListener('keydown', (event) => searchBooks(event));
	}, [books, bookSearched]);

	useEffect(() => {
		function fixedHeaderDisplay() {
			const fixedHeaderLinks = document.getElementsByClassName(
				'fixed-header-links'
			)[0];
			if (window.pageYOffset > 103) {
				document.getElementsByClassName(
					'fixed-header-right-side'
				)[0].style.display = 'flex';
				document.getElementsByClassName('sticky')[0].style.height = '75px';
				document.getElementsByClassName('logo-box2-fixed')[0].style.display =
					'inline';
				document.getElementsByClassName(
					'fixed-header-links'
				)[0].style.marginLeft = '20px';
				document.getElementsByClassName('logo-box1-fixed')[0].style.display =
					'none';
				document.getElementsByClassName('sticky')[0].style.padding =
					'10px 30px';

				fixedHeaderLinks.style.width = '400px';
				fixedHeaderLinks.style.display = 'flex';
				document.getElementsByClassName(
					'fixed-header-left-side'
				)[0].style.width = '100%';
				document.getElementsByClassName('sticky')[0].style.justifyContent =
					'space-between';
				document.getElementsByClassName(
					'search-bar-box-fixed-header'
				)[0].style.marginRight = '30px';
				if (window.innerWidth < 1024) {
					fixedHeaderLinks.style.display = 'none';
					document.getElementsByClassName(
						'fixed-header-left-side'
					)[0].style.width = 'fit-content';
					document.getElementsByClassName('logo-box1-fixed')[0].style.display =
						'inline';
					document.getElementsByClassName('logo-box2-fixed')[0].style.display =
						'none';
					document.getElementsByClassName(
						'fixed-header-links'
					)[0].style.marginLeft = '0';
					document.getElementsByClassName('sticky')[0].style.padding =
						'10px 50px';
				}
				if (window.innerWidth < 700) {
					document.getElementsByClassName('logo-box1-fixed')[0].style.display =
						'none';
					document.getElementsByClassName('logo-box2-fixed')[0].style.display =
						'inline';
					document.getElementsByClassName('sticky')[0].style.padding =
						'10px 20px';
					document.getElementsByClassName(
						'search-bar-box-fixed-header'
					)[0].style.marginRight = '0';
				}
			} else {
				document.getElementsByClassName(
					'fixed-header-right-side'
				)[0].style.display = 'none';
				document.getElementsByClassName('fixed-header-links')[0].style.display =
					'flex';
				document.getElementsByClassName(
					'fixed-header-left-side'
				)[0].style.width = '100%';
				document.getElementsByClassName('sticky')[0].style.height = '67px';
				document.getElementsByClassName('logo-box2-fixed')[0].style.display =
					'none';
				document.getElementsByClassName(
					'fixed-header-links'
				)[0].style.marginLeft = '0';
				fixedHeaderLinks.style.width = '400px';
				document.getElementsByClassName('logo-box1-fixed')[0].style.display =
					'none';
				document.getElementsByClassName('sticky')[0].style.padding =
					'10px 30px';

				if (window.innerWidth < 700) {
					fixedHeaderLinks.style.display = 'flex';
					fixedHeaderLinks.style.width = '100%';
				}
			}
		}

		window.addEventListener('scroll', fixedHeaderDisplay);
		window.addEventListener('resize', fixedHeaderDisplay);
		window.addEventListener('load', fixedHeaderDisplay);
	}, []);

	useEffect(() => {
		bookStore.addEventListener(() =>
			onChange(users, setUsers, bookStore.getUsers)
		);

		if (!users) {
			loadUsers();
		}

		return () =>
			bookStore.removeEventListener(() =>
				onChange(users, setUsers, bookStore.getUsers)
			);
	}, [users]);

	function findUser() {
		let user = users.find(
			(user) => user.login === login && user.password === password
		);
		if (user) {
			document.location.href = `${window.location.origin}/userprofile/${user.id}`;
		}
	}

	function showOrHideLoginDisplay(showOrHide, allowOrNotScroll) {
		document.getElementsByClassName(
			'login-background-filter'
		)[0].style.visibility = `${showOrHide}`;

		document.getElementsByClassName(
			'login-wrapper'
		)[0].style.visibility = `${showOrHide}`;

		document.getElementsByTagName(
			'body'
		)[0].style.overflow = `${allowOrNotScroll}`;
	}

	return (
		<>
			<div className="sticky">
				<div className="fixed-header-left-side">
					<div className="logo-box1-fixed">
						<Link to={'/'}>
							<img
								src="https://trello-attachments.s3.amazonaws.com/5f9c477be3155041e06d7eb9/290x108/01c26ecb5e4dc99015f6c4fb1b11d4f1/Logo_completo_vidama.jpg"
								className="logo-vidama-fixed"
								alt=""
							/>
						</Link>
					</div>
					<div className="logo-box2-fixed">
						<Link to={'/'}>
							<img
								src="https://trello-attachments.s3.amazonaws.com/5f9c477be3155041e06d7eb9/101x107/dec4f8b56a7ce0ed58a8edb8f1138267/Logo_small_vidama.jpg"
								className="logo-vidama-fixed small-logo"
								alt=""
							/>
						</Link>
					</div>
					<div className="fixed-header-links">
						<div>
							<a href="#" className="sticky-link">
								The library
							</a>
						</div>
						<div>
							<a href="#" className="sticky-link">
								Incoming titles
							</a>
						</div>
						<div>
							<a href="#" className="sticky-link">
								News
							</a>
						</div>
						<div>
							<a href="#" className="sticky-link">
								Reviews
							</a>
						</div>
					</div>
				</div>
				<div className="fixed-header-right-side">
					<div className="search-bar-box-fixed-header">
						<div className="input-box">
							<input
								id="search-bar-input2"
								value={bookSearched}
								type="text"
								placeholder="Search"
								maxlength="60"
								onChange={(event) => handleChange(event, setbookSearched)}
							/>
							<div
								className="img-box"
								onClick={() => {
									let bookFound = books.items.find(
										(book) =>
											bookSearched.toLowerCase().trim() ===
											book.volumeInfo.title.toLowerCase()
									);
									if (bookFound) {
										document.location.href = `${window.location.origin}/detail/${bookFound.id}`;
									}
								}}
							>
								<div className="img-icon">
									<span>
										<FontAwesomeIcon icon={faSearch} />
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="login-box">
						<div className="user-photo-or-icon">
							<span
								class="material-icons user-login"
								onClick={() => showOrHideLoginDisplay('visible', 'hidden')}
							>
								account_circle
							</span>
						</div>
						<span class="material-icons cart-top">shopping_cart</span>
					</div>
				</div>
			</div>
			<div className="login-background-filter"></div>
			<article className="login-wrapper">
				<span
					className="closing-tag"
					onClick={() => showOrHideLoginDisplay('hidden', 'visible')}
				>
					X
				</span>
				<h3 className="login-password-title">Login:</h3>
				<input
					className="login-input"
					value={login}
					type="text"
					onChange={(event) => handleChange(event, setLogin)}
					placeholder="Login..."
				></input>
				<h3 className="login-password-title">Password:</h3>
				<input
					className="login-input"
					value={password}
					type="password"
					onChange={(event) => handleChange(event, setPassword)}
					placeholder="Password..."
				></input>
				<button className="userLoginButton" onClick={() => findUser()}>
					Sign in
				</button>
			</article>
		</>
	);
}
export default Navbar;
