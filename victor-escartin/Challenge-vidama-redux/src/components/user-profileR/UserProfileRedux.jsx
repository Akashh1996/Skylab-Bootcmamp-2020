import React from 'react';

// hooks react redux
import { useDispatch, useSelector } from 'react-redux';

// Imported Action
import { loadUsersAction } from './redux/user-profileDucks';

import './user-profile.css';

function UserProfileR({
	match: {
		params: { userId }
	}
}) {
	const dispatch = useDispatch();

	const users = useSelector((store) => store.users.array);

	return (
		<>
			<button onClick={() => dispatch(loadUsersAction())}>Get Users</button>
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
export default UserProfileR;
