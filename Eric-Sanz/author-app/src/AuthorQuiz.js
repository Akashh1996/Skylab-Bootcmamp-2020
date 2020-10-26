import React from 'react';
import Header from './Header';
import BookList from './BookList';

function AuthorQUiz() {

    const books = [
        'The Shining',
        'The adventures of Huckelberry Finn',
        'Macbeth',
        'IT'
    ]

    return (
        <>
            <Header />
            <img src={require('./image/Pluma.png')} alt='book'/>
            <BookList books = {books} />
        </>
    );    
}

export default AuthorQUiz;