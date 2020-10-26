import React from 'react'
import './../author-quiz/Author-quiz.css'
import BookList from './BookList'
import Header from './header-compo/header'


function AuthorQuiz() {
    const books = [
        'The shining',
        'The adventures of Huckleberry Finn',
        'Macbeth',
        'IT'
    ]
    return <>
        <Header />
        <div id="main-content" className="main-content" >
            <img src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg" alt="author"></img>
            <BookList books={books} />
        </div>

    </>
}

export default AuthorQuiz
