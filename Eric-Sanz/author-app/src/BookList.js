import React from 'react';
import BookItem from './BookItem';

function BookList({books}) {
    return (
        <ul id="change-color" className="list">
        {books.map((title) => (
            <BookItem title = {title}/>
        ))}
        </ul>
    )
}

export default BookList;