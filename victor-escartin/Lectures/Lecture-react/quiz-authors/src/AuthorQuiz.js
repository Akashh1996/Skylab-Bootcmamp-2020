import React from 'react';
import BookList from './BookList';
import Header from './Header';

function AuthorQuiz(){

  const books=[
   ' The Shining',
   'The adventures of Huckleberry Flinn',
   'Macbeth',
   'IT'
  ];

    return (
      <>
      <Header/>
      <div className="">
        <img alt="author"></img>
        <BookList books={books}/>
      </div>
      </>
    )
  }


export default AuthorQuiz;
