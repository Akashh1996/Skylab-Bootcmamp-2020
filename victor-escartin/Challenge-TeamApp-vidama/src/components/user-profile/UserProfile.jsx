import React, { useEffect, useState } from 'react';
import { loadUsers } from '../../actions/action-creator';
import bookStore from '../../stores/book-store';
import './user-profile.css';

function UserProfile({
	match: {
		params: { userId }
	}
}) {
	const [users, setUsers] = useState();
	const [user, setUser] = useState();

	function onChange(variable, setVariable, getVariable) {
		variable = getVariable();
		setVariable(variable);
	}

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

	useEffect(() => {
		if (users && !user) {
			setUser(users.find((user) => user.id === userId));
		}
	}, [user, users, userId]);

	useEffect(() => {
		if (user) {
			document.getElementsByClassName(
				'user-photo-or-icon'
			)[0].innerHTML = `<a href="/userprofile/${userId}"><img class="user-photo-header" src="${user.profilePicture}" /></a>`;
			document.getElementsByClassName(
				'user-photo-or-icon'
			)[1].innerHTML = `<a href="/userprofile/${userId}"><img class="user-photo-header" src="${user.profilePicture}" /></a>`;
		}
	}, [user, userId]);

	return (
		<>
			{user && (
				<section className="user-profile">
					<img className="main-picture" src={user.mainPhoto} alt="" />
					<div className="user-profile__main-body">
						<div className="user-profile-picture-and-name">
							<img
								className="user-profile-picture"
								src={user.profilePicture}
								alt=""
							/>
							<h2 className="user-profile-name">{user.name}</h2>
						</div>
						<div className="user-profile-info">
							<div className="about-me">
								<h3 className="about-me__title">About me</h3>
								<p className="about-me__text">{user.aboutMe}</p>
							</div>
							<div className="my-favorites">
								<h3 className="my-favorites__title">My favorites</h3>
								<div className="favorite-books">
									{user.myFavourites.map((book) => {
										return (
											<div className="favorite-book">
												<img
													className="favorite-book__image"
													src={book.image}
													alt=""
												/>
												<p className="favorite-book-and-author">{book.title}</p>
												<p className="favorite-book-and-author">
													{book.author}
												</p>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
}
export default UserProfile;
