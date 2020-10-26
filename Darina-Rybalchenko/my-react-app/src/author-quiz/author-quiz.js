import React from 'react'
/* import './author-quiz.css' */
import BookList from './BookList'
import Header from './header-compo/header'



function AuthorQuiz() {
    const books = [
        'The shining',
        'The adventures of Huckleberry',
        'Macbeth',
        'IT'
    ]
    return <>
        <Header />

        <img alt="author"></img>
        <BookList books={books} />


    </>
}

export default AuthorQuiz
