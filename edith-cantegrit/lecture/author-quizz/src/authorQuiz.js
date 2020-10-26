import React from 'react';

function AuthorQuiz() {

  const books=[
   'The Shining',
   'The adventures of Huckleberry Flinn',
   'Macbeth',
   'IT'
  ];
    return (
      <>
        <h1>Author Quiz</h1>
        <p> Select the book written by the Author shown</p>
        <img alt="author"></img>
        <ul>
          {books.map((title)=> (
            <li>{title}</li>
          ))}
        </ul>
      </>
    )
}

export default AuthorQuiz;