import React from 'react';
import BookItem from './BookItem';

class ListAuthor extends React.Component {
	render() {
		const titles = ['jorge', 'jorge1', 'jorge2', 'ScoobyDoo', 'Bilma'];
		return (
			<>
				<div class="listContainer">
					<ul>
						{titles.map((title) => (
							<BookItem title={title} />
						))}
					</ul>
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
