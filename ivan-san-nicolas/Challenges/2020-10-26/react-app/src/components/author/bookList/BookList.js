import React from 'react';
import BookItem from './bookItem/BookItem';

function BookList() {

    const books = ['The Shining', 'The Adventures of Huckleberry Finn', 'Macbeth', 'IT'];

    return <ul>
        {
            books.map((book) => 
                <BookItem books={book} class="bookItem"/>
            )
        }
    </ul>
}

export default BookList;