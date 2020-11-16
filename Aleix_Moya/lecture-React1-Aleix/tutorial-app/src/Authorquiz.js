import React from 'react'
import BookList from './BookList'
function AuthorQuiz(){
    const books = [
        {name:"the Shining"},
        {name:"the adventures of Huckleberry Finn"},
        {name:"Mackbeth"},
        {name:"IT"}
    ];
    return (
        <>
            <h1>Author Quiz</h1>
            <p>Select the book written by the author shown</p>
            <div id="Cosas">
            <img src="https://study.com/cimages/multimages/16/mark_twain_1871.jpg"/>
            <BookList books = {books}/>
            </div>
            
            
        </>);
    
}
export default AuthorQuiz;