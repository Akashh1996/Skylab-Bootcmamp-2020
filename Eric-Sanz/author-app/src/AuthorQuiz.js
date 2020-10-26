import React from 'react';
import BookItem from './BookItem';

function AuthorQUiz() {

    const books = [
        'The Shining',
        'The adventures of Huckelberry Finn',
        'Macbeth',
        'IT'
    ]

    return (
        <>
            <h1>Author Quiz</h1>
            <p>Select the book written by the author shown</p>
            <img src={require('./image/Pluma.png')} alt='book'/>
            <ul>
                {books.map((title) => (
                    <BookItem title = {title}></BookItem>
                    // <li>{title}</li>
                ))}
            </ul>
        </>
    );    
}

export default AuthorQUiz;