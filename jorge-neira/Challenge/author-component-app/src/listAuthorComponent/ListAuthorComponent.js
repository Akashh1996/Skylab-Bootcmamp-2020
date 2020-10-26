import React from 'react';
import BookItem from './BookItem';
import BookList from './BookList';

class ListAuthor extends React.Component {
	render() {
		const books = ['jorge', 'jorge1', 'jorge2', 'ScoobyDoo', 'Bilma'];
		return (
			<>
				<div class="listContainer">
					<BookList books={books} item={BookItem} />
				</div>
				<div>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
					vitae officiis fugit explicabo minus, doloribus eum ipsa itaque a quos
					iusto, ad officia optio quas! Laborum magnam voluptates eveniet in.
				</div>
			</>
		);
	}
}

export default ListAuthor;
