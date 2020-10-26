import React from 'react';
import BookList from './BookList'
import BookItem from './BookItem'
import Header from './Header'
import ImageAuthor from './ImageAuthor'


function AuthorQuiz() {

  const books=[
   'The Shining',
   'The adventures of Huckleberry Flinn',
   'Macbeth',
   'IT'
  ];
    return (
      <>
        <Header/>
        <div class="answer-box">
        <ImageAuthor />
        <BookList books={books}/>
        </div>
      </>
    )
}


export default AuthorQuiz;