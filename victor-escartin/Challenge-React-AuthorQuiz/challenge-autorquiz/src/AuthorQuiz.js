import React from 'react';
import Header from './Header';
import BookList from './BookList';

function AuthorQUiz() {

    const books = [
        'The Shining',
        'The adventures of Huckleberry Finn',
        'Macbeth',
        'IT'
    ]

    return (
        <>
            <Header />
            <div className = "info-container">
                <img src={'https://study.com/cimages/multimages/16/mark_twain_1871.jpg'} alt='book' />
                <BookList books = {books} />
            </div>
        </>
    );    
}

export default AuthorQUiz; 
