import React from 'react';
import BookInfo from './BookInfo.jsx';
import CommentSection from './CommentSection.jsx';

function Detail(props) {
	return (
		<>
			<BookInfo bookId={props.match.params.bookId} />
			<CommentSection />
		</>
	);
}

export default Detail;
