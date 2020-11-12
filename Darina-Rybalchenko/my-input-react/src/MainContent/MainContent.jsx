import React from 'react';
import './MainContent.css';
import Header from '../Header/Header';
import BookingFlightForm from '../BookingFlightForm/BookingFlightForm';

function MainContent() {
	return (
		<div className="main-content">
			<Header />
			<BookingFlightForm />
		</div>
	);
}

export default MainContent;
