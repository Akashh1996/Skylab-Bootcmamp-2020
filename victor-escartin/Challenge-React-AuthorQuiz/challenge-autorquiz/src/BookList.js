import React from 'react';
import BookItem from './BookItem';

function BookList({books}) {
    return (
        <ul id="backgroundResponse" className="list">
        {books.map((title) => (
            <BookItem title = {title}/>
        ))}
        </ul>
    )
}

export default BookList; 
